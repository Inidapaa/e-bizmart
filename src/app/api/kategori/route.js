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
    const data = await prisma.kategori.findMany({
      take: 100,
      orderBy: { ID_KATEGORI: "desc" },
    });
    return json({ ok: true, data });
  } catch (error) {
    return json(
      { ok: false, error: error?.message ?? "Unknown error" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const maxKategori = await prisma.kategori.findFirst({
      orderBy: { ID_KATEGORI: "desc" },
    });
    const idBaru = maxKategori ? maxKategori.ID_KATEGORI + 1 : 1;

    const nama =
      body?.NAMA_KATEGORI === undefined ? null : String(body.NAMA_KATEGORI);

    const created = await prisma.kategori.create({
      data: {
        ID_KATEGORI: idBaru,
        NAMA_KATEGORI: nama,
      },
    });
    return json({ ok: true, data: created }, { status: 201 });
  } catch (error) {
    const message =
      error?.code === "P2002"
        ? "ID_KATEGORI sudah ada"
        : (error?.message ?? "Unknown error");
    return json({ ok: false, error: message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const id = parseId(body?.ID_KATEGORI);
    if (id === null) {
      return json(
        { ok: false, error: "ID_KATEGORI harus berupa angka" },
        { status: 400 },
      );
    }

    const nama =
      body?.NAMA_KATEGORI === undefined ? null : String(body.NAMA_KATEGORI);

    const updated = await prisma.kategori.update({
      where: { ID_KATEGORI: id },
      data: { NAMA_KATEGORI: nama },
    });
    return json({ ok: true, data: updated });
  } catch (error) {
    const message =
      error?.code === "P2025"
        ? "Data tidak ditemukan"
        : (error?.message ?? "Unknown error");
    return json({ ok: false, error: message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const body = await request.json();
    const id = parseId(body?.ID_KATEGORI);
    if (id === null) {
      return json(
        { ok: false, error: "ID_KATEGORI harus berupa angka" },
        { status: 400 },
      );
    }

    const deleted = await prisma.kategori.delete({
      where: { ID_KATEGORI: id },
    });
    return json({ ok: true, data: deleted });
  } catch (error) {
    const message =
      error?.code === "P2025"
        ? "Data tidak ditemukan"
        : (error?.message ?? "Unknown error");
    return json({ ok: false, error: message }, { status: 500 });
  }
}
