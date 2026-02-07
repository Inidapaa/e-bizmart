import { prisma } from "../../../lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(data, init) {
  return Response.json(data, {
    ...init,
    headers: {
      "cache-control": "no-store",
      ...(init?.headers ?? {}),
    },
  });
}

function parseId(value) {
  if (value === undefined || value === null) return null;
  const n = Number(value);
  if (!Number.isInteger(n)) return null;
  return n;
}

function normalizeQty(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 1;
  return Math.max(1, Math.floor(n));
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const idPelanggan = searchParams.get("pelanggan");
    const where =
      idPelanggan !== null && idPelanggan !== ""
        ? { ID_PELANGGAN: parseId(idPelanggan) }
        : {};

    if (idPelanggan !== null && idPelanggan !== "" && where.ID_PELANGGAN === null) {
      return json(
        { ok: false, error: "ID pelanggan tidak valid" },
        { status: 400 }
      );
    }

    const data = await prisma.penjualan.findMany({
      where,
      take: 200,
      orderBy: { ID_PENJUALAN: "desc" },
      include: {
        pelanggan: true,
        pembayaran: true,
        user: true,
        detail_transaksi: {
          include: { barang: true },
        },
      },
    });
    return json({ ok: true, data });
  } catch (error) {
    return json(
      { ok: false, error: error?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const idPelanggan = parseId(body?.ID_PELANGGAN);
    const idPembayaran = parseId(body?.ID_PEMBAYARAN);
    const items = Array.isArray(body?.items) ? body.items : [];

    if (idPelanggan === null) {
      return json(
        { ok: false, error: "ID_PELANGGAN wajib diisi" },
        { status: 400 }
      );
    }
    if (!items.length) {
      return json(
        { ok: false, error: "Minimal satu item untuk transaksi" },
        { status: 400 }
      );
    }

    // ID_PEMBAYARAN opsional: hanya isi jika ada di tabel pembayaran (hindari FK error)
    const wantPembayaran = idPembayaran !== null && [1, 2, 3].includes(idPembayaran) ? idPembayaran : 1;
    const pembayaranRow = await prisma.pembayaran.findUnique({
      where: { ID_PEMBAYARAN: wantPembayaran },
    });
    const idPembayaranFinal = pembayaranRow ? wantPembayaran : null;

    // Normalisasi item & gabungkan jika ada KODE_BARANG duplikat
    const qtyByKode = new Map();
    for (const row of items) {
      const kodeBarang = parseId(row?.KODE_BARANG);
      if (kodeBarang === null) continue;
      const qty = normalizeQty(row?.qty);
      qtyByKode.set(kodeBarang, (qtyByKode.get(kodeBarang) ?? 0) + qty);
    }

    const kodeList = Array.from(qtyByKode.keys());
    if (kodeList.length === 0) {
      return json(
        { ok: false, error: "Tidak ada item valid untuk transaksi" },
        { status: 400 }
      );
    }

    // Ambil data barang dari DB (harga & stok) biar tidak bisa dimanipulasi dari client
    const barangRows = await prisma.barang.findMany({
      where: { KODE_BARANG: { in: kodeList } },
      select: {
        KODE_BARANG: true,
        NAMA_BARANG: true,
        HARGA_BARANG: true,
        STOK_BARANG: true,
      },
    });

    const barangByKode = new Map(barangRows.map((b) => [b.KODE_BARANG, b]));
    const missing = kodeList.filter((k) => !barangByKode.has(k));
    if (missing.length) {
      return json(
        { ok: false, error: `Barang tidak ditemukan: ${missing.join(", ")}` },
        { status: 404 }
      );
    }

    // Validasi stok cukup (null dianggap 0)
    for (const kodeBarang of kodeList) {
      const row = barangByKode.get(kodeBarang);
      const qty = qtyByKode.get(kodeBarang) ?? 0;
      const stok = Number.isInteger(row?.STOK_BARANG) ? row.STOK_BARANG : 0;
      if (stok < qty) {
        return json(
          {
            ok: false,
            error: `Stok tidak cukup untuk ${row?.NAMA_BARANG ?? `KODE_BARANG ${kodeBarang}`}`,
            meta: { KODE_BARANG: kodeBarang, stokTersedia: stok, qty },
          },
          { status: 409 }
        );
      }
    }

    const created = await prisma.$transaction(async (tx) => {
      // Generate ID manual di dalam transaksi (mengurangi risiko tabrakan, walau tidak 100% tanpa auto-increment)
      const lastPenjualan = await tx.penjualan.findFirst({
        orderBy: { ID_PENJUALAN: "desc" },
      });
      const nextIdPenjualan = (lastPenjualan?.ID_PENJUALAN ?? 0) + 1;

      const lastDetail = await tx.detail_transaksi.findFirst({
        orderBy: { ID_DETAILTRANSAKSI: "desc" },
      });
      let nextIdDetail = (lastDetail?.ID_DETAILTRANSAKSI ?? 0) + 1;

      // Decrement stok secara atomik (guard STOK_BARANG >= qty)
      for (const kodeBarang of kodeList) {
        const qty = qtyByKode.get(kodeBarang) ?? 0;
        const updated = await tx.barang.updateMany({
          where: {
            KODE_BARANG: kodeBarang,
            STOK_BARANG: { gte: qty },
          },
          data: {
            STOK_BARANG: { decrement: qty },
          },
        });

        // Kalau 0 berarti race condition: stok keburu habis oleh transaksi lain
        if (updated.count !== 1) {
          const row = barangByKode.get(kodeBarang);
          throw new Error(
            `Stok berubah/kurang untuk ${row?.NAMA_BARANG ?? `KODE_BARANG ${kodeBarang}`}`
          );
        }
      }

      let total = 0;
      const details = [];
      for (const kodeBarang of kodeList) {
        const row = barangByKode.get(kodeBarang);
        const qty = qtyByKode.get(kodeBarang) ?? 0;
        const hargaSatuan = Number.isInteger(row?.HARGA_BARANG) ? row.HARGA_BARANG : 0;
        const subTotal = qty * hargaSatuan;
        total += subTotal;
        details.push({
          ID_DETAILTRANSAKSI: nextIdDetail++,
          ID_PENJUALAN: nextIdPenjualan,
          KODE_BARANG: kodeBarang,
          JUMLAH: qty,
          HARGA_SATUAN: hargaSatuan,
          SUB_TOTAL: subTotal,
        });
      }

      await tx.penjualan.create({
        data: {
          ID_PENJUALAN: nextIdPenjualan,
          ID_PELANGGAN: idPelanggan,
          ID_PEMBAYARAN: idPembayaranFinal,
          ID_USER: null,
          TANGGAL: new Date(),
          TOTAL: total,
          STATUS_TRANSAKSI: "Belum_bayar",
        },
      });

      await tx.detail_transaksi.createMany({
        data: details,
      });

      return await tx.penjualan.findUnique({
        where: { ID_PENJUALAN: nextIdPenjualan },
        include: {
          pelanggan: true,
          pembayaran: true,
          detail_transaksi: { include: { barang: true } },
        },
      });
    });

    return json({ ok: true, data: created }, { status: 201 });
  } catch (error) {
    const message =
      String(error?.message || "").includes("Stok berubah/kurang")
        ? error.message
        : error?.message ?? "Unknown error";
    return json(
      { ok: false, error: message },
      { status: String(message).includes("Stok berubah/kurang") ? 409 : 500 }
    );
  }
}

const STATUS_OPTIONS = ["Belum_bayar", "Dalam_proses", "Selesai", "Gagal"];

export async function PUT(request) {
  try {
    const body = await request.json();
    const idPenjualan = parseId(body?.ID_PENJUALAN);
    const status = body?.STATUS_TRANSAKSI;

    if (idPenjualan === null) {
      return json(
        { ok: false, error: "ID_PENJUALAN wajib diisi" },
        { status: 400 }
      );
    }
    if (!status || !STATUS_OPTIONS.includes(status)) {
      return json(
        { ok: false, error: "STATUS_TRANSAKSI tidak valid" },
        { status: 400 }
      );
    }

    const updated = await prisma.penjualan.update({
      where: { ID_PENJUALAN: idPenjualan },
      data: { STATUS_TRANSAKSI: status },
      include: {
        pelanggan: true,
        pembayaran: true,
        user: true,
        detail_transaksi: { include: { barang: true } },
      },
    });
    return json({ ok: true, data: updated });
  } catch (error) {
    const message =
      error?.code === "P2025"
        ? "Data tidak ditemukan"
        : error?.message ?? "Unknown error";
    return json({ ok: false, error: message }, { status: 500 });
  }
}
