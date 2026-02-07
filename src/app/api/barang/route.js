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
  const n = Number(value);
  if (!Number.isInteger(n)) return null;
  return n;
}

export async function GET() {
  try {
    const data = await prisma.barang.findMany({
      take: 100,
      orderBy: { KODE_BARANG: "desc" },
      include: { kategori: true },
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

    const maxBarang = await prisma.barang.findFirst({
      orderBy: { KODE_BARANG: "desc" },
    });
    const kodeBaru = maxBarang ? maxBarang.KODE_BARANG + 1 : 1;

    const nama =
      body?.NAMA_BARANG === undefined ? null : String(body.NAMA_BARANG);
    const harga =
      body?.HARGA_BARANG === undefined ? null : parseId(body.HARGA_BARANG);
    const stok =
      body?.STOK_BARANG === undefined ? null : parseId(body.STOK_BARANG);
    const keterangan =
      body?.KETERANGAN_BARANG === undefined
        ? null
        : String(body.KETERANGAN_BARANG);
    const gambar =
      body?.GAMBAR_BARANG === undefined || body?.GAMBAR_BARANG === ""
        ? null
        : String(body.GAMBAR_BARANG).slice(0, 40);
    const idKategori =
      body?.ID_KATEGORI === undefined || body?.ID_KATEGORI === ""
        ? null
        : parseId(body.ID_KATEGORI);
    const expBarang =
      body?.EXP_BARANG === undefined || body?.EXP_BARANG === ""
        ? null
        : new Date(body.EXP_BARANG);

    const dataBarang = {
      KODE_BARANG: kodeBaru,
      NAMA_BARANG: nama,
      GAMBAR_BARANG: gambar,
      HARGA_BARANG: harga,
      STOK_BARANG: stok,
      KETERANGAN_BARANG: keterangan,
      ID_KATEGORI: idKategori,
      EXP_BARANG: expBarang,
    };

    const created = await prisma.barang.create({
      data: dataBarang,
    });
    return json({ ok: true, data: created }, { status: 201 });
  } catch (error) {
    const message =
      error?.code === "P2002"
        ? "KODE_BARANG sudah ada"
        : error?.message ?? "Unknown error";
    return json({ ok: false, error: message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const kode = parseId(body?.KODE_BARANG);
    if (kode === null) {
      return json(
        { ok: false, error: "KODE_BARANG harus berupa angka" },
        { status: 400 }
      );
    }

    const nama =
      body?.NAMA_BARANG === undefined ? null : String(body.NAMA_BARANG);
    const harga =
      body?.HARGA_BARANG === undefined ? null : parseId(body.HARGA_BARANG);
    const stok =
      body?.STOK_BARANG === undefined ? null : parseId(body.STOK_BARANG);
    const keterangan =
      body?.KETERANGAN_BARANG === undefined
        ? null
        : String(body.KETERANGAN_BARANG);
    const gambar =
      body?.GAMBAR_BARANG === undefined || body?.GAMBAR_BARANG === ""
        ? null
        : String(body.GAMBAR_BARANG).slice(0, 40);
    const idKategori =
      body?.ID_KATEGORI === undefined || body?.ID_KATEGORI === ""
        ? null
        : parseId(body.ID_KATEGORI);
    const expBarang =
      body?.EXP_BARANG === undefined || body?.EXP_BARANG === ""
        ? null
        : new Date(body.EXP_BARANG);

    const dataUpdate = {
      NAMA_BARANG: nama,
      GAMBAR_BARANG: gambar,
      HARGA_BARANG: harga,
      STOK_BARANG: stok,
      KETERANGAN_BARANG: keterangan,
      ID_KATEGORI: idKategori,
      EXP_BARANG: expBarang,
    };

    const updated = await prisma.barang.update({
      where: { KODE_BARANG: kode },
      data: dataUpdate,
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

export async function DELETE(request) {
  try {
    const body = await request.json();
    const kode = parseId(body?.KODE_BARANG);
    if (kode === null) {
      return json(
        { ok: false, error: "KODE_BARANG harus berupa angka" },
        { status: 400 }
      );
    }

    const deleted = await prisma.barang.delete({
      where: { KODE_BARANG: kode },
    });
    return json({ ok: true, data: deleted });
  } catch (error) {
    const message =
      error?.code === "P2025"
        ? "Data tidak ditemukan"
        : error?.message ?? "Unknown error";
    return json({ ok: false, error: message }, { status: 500 });
  }
}
