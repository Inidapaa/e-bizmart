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

export async function GET() {
  try {
    const data = await prisma.pelanggan.findMany({
      take: 200,
      orderBy: { ID_PELANGGAN: "desc" },
    });
    const sanitized = data.map((p) => {
      // eslint-disable-next-line no-unused-vars
      const { PASSWORD_PELANGGAN, ...rest } = p;
      return rest;
    });
    return json({ ok: true, data: sanitized });
  } catch (error) {
    return json(
      { ok: false, error: error?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const id = body?.ID_PELANGGAN ?? body?.id ?? body?.ID;
    const n = Number(id);
    if (!Number.isInteger(n)) {
      return json(
        { ok: false, error: "ID_PELANGGAN harus berupa angka" },
        { status: 400 }
      );
    }

    const updated = await prisma.pelanggan.update({
      where: { ID_PELANGGAN: n },
      data: {
        NAMA_PELANGGAN:
          body?.NAMA_PELANGGAN === undefined
            ? undefined
            : String(body.NAMA_PELANGGAN),
        USERNAME_PELANGGAN:
          body?.USERNAME_PELANGGAN === undefined
            ? undefined
            : String(body.USERNAME_PELANGGAN),
        PASSWORD_PELANGGAN:
          body?.PASSWORD_PELANGGAN === undefined
            ? undefined
            : String(body.PASSWORD_PELANGGAN),
        ALAMAT_PELANGGAN:
          body?.ALAMAT_PELANGGAN === undefined
            ? undefined
            : String(body.ALAMAT_PELANGGAN),
      },
    });
    // eslint-disable-next-line no-unused-vars
    const { PASSWORD_PELANGGAN, ...rest } = updated;
    return json({ ok: true, data: rest });
  } catch (error) {
    const message =
      error?.code === "P2025"
        ? "Data tidak ditemukan"
        : error?.message ?? "Unknown error";
    return json({ ok: false, error: message }, { status: 500 });
  }
}
