import { prisma } from "../../../../lib/prisma";

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

export async function GET(request, { params }) {
  try {
    const resolved = await params;
    const id = parseId(resolved?.id);
    if (id === null) {
      return json(
        { ok: false, error: "ID barang tidak valid" },
        { status: 400 }
      );
    }
    const data = await prisma.barang.findUnique({
      where: { KODE_BARANG: id },
      include: { kategori: true },
    });
    if (!data) {
      return json({ ok: false, error: "Barang tidak ditemukan" }, { status: 404 });
    }
    return json({ ok: true, data });
  } catch (error) {
    return json(
      { ok: false, error: error?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
