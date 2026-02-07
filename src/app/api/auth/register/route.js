import { prisma } from "../../../../lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();
    const nama =
      body?.NAMA_PELANGGAN === undefined
        ? null
        : String(body.NAMA_PELANGGAN).trim();
    const username = body?.USERNAME_PELANGGAN
      ? String(body.USERNAME_PELANGGAN).trim()
      : "";
    const password = body?.PASSWORD_PELANGGAN
      ? String(body.PASSWORD_PELANGGAN)
      : "";
    const alamat =
      body?.ALAMAT_PELANGGAN === undefined || body?.ALAMAT_PELANGGAN === ""
        ? null
        : String(body.ALAMAT_PELANGGAN).trim();

    if (!username || !password) {
      return Response.json(
        { ok: false, error: "Username dan password wajib diisi" },
        { status: 400 }
      );
    }

    const existing = await prisma.pelanggan.findFirst({
      where: { USERNAME_PELANGGAN: username },
    });
    if (existing) {
      return Response.json(
        {
          ok: false,
          error:
            "Username sudah dipakai. Silakan login atau gunakan username lain.",
        },
        { status: 400 }
      );
    }

    const maxPelanggan = await prisma.pelanggan.findFirst({
      orderBy: { ID_PELANGGAN: "desc" },
    });
    const idBaru = maxPelanggan ? maxPelanggan.ID_PELANGGAN + 1 : 1;

    const created = await prisma.pelanggan.create({
      data: {
        ID_PELANGGAN: idBaru,
        NAMA_PELANGGAN: nama || null,
        USERNAME_PELANGGAN: username,
        PASSWORD_PELANGGAN: password,
        ALAMAT_PELANGGAN: alamat,
      },
    });

    const { PASSWORD_PELANGGAN, ...dataWithoutPassword } = created;
    return Response.json(
      { ok: true, data: dataWithoutPassword },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { ok: false, error: error?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
