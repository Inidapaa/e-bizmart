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
    const data = await prisma.user.findMany({
      take: 200,
      orderBy: { ID_USER: "desc" },
    });
    const sanitized = data.map((u) => {
      // eslint-disable-next-line no-unused-vars
      const { PASSWORD_USER, ...rest } = u;
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

export async function POST(request) {
  try {
    const body = await request.json();

    const maxUser = await prisma.user.findFirst({
      orderBy: { ID_USER: "desc" },
    });
    const idBaru = maxUser ? maxUser.ID_USER + 1 : 1;

    const created = await prisma.user.create({
      data: {
        ID_USER: idBaru,
        NAMA_USER:
          body?.NAMA_USER === undefined ? null : String(body.NAMA_USER),
        EMAIL_USER:
          body?.EMAIL_USER === undefined ? null : String(body.EMAIL_USER),
        USERNAME_USER:
          body?.USERNAME_USER === undefined ? null : String(body.USERNAME_USER),
        PASSWORD_USER:
          body?.PASSWORD_USER === undefined ? null : String(body.PASSWORD_USER),
        ROLE: body?.ROLE === undefined || body?.ROLE === "" ? null : body.ROLE,
        ALAMAT_USER:
          body?.ALAMAT_USER === undefined ? null : String(body.ALAMAT_USER),
      },
    });

    // eslint-disable-next-line no-unused-vars
    const { PASSWORD_USER, ...rest } = created;
    return json({ ok: true, data: rest }, { status: 201 });
  } catch (error) {
    const message =
      error?.code === "P2002"
        ? "Data user duplikat"
        : error?.message ?? "Unknown error";
    return json({ ok: false, error: message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const id = parseId(body?.ID_USER);
    if (id === null) {
      return json(
        { ok: false, error: "ID_USER harus berupa angka" },
        { status: 400 }
      );
    }

    const updated = await prisma.user.update({
      where: { ID_USER: id },
      data: {
        NAMA_USER:
          body?.NAMA_USER === undefined ? null : String(body.NAMA_USER),
        EMAIL_USER:
          body?.EMAIL_USER === undefined ? null : String(body.EMAIL_USER),
        USERNAME_USER:
          body?.USERNAME_USER === undefined ? null : String(body.USERNAME_USER),
        PASSWORD_USER:
          body?.PASSWORD_USER === undefined
            ? undefined
            : String(body.PASSWORD_USER),
        ROLE: body?.ROLE === undefined || body?.ROLE === "" ? null : body.ROLE,
        ALAMAT_USER:
          body?.ALAMAT_USER === undefined ? null : String(body.ALAMAT_USER),
      },
    });

    // eslint-disable-next-line no-unused-vars
    const { PASSWORD_USER, ...rest } = updated;
    return json({ ok: true, data: rest });
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
    const id = parseId(body?.ID_USER);
    if (id === null) {
      return json(
        { ok: false, error: "ID_USER harus berupa angka" },
        { status: 400 }
      );
    }

    const deleted = await prisma.user.delete({
      where: { ID_USER: id },
    });
    // eslint-disable-next-line no-unused-vars
    const { PASSWORD_USER, ...rest } = deleted;
    return json({ ok: true, data: rest });
  } catch (error) {
    const message =
      error?.code === "P2025"
        ? "Data tidak ditemukan"
        : error?.message ?? "Unknown error";
    return json({ ok: false, error: message }, { status: 500 });
  }
}
