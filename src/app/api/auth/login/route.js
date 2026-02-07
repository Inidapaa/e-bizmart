import { prisma } from "../../../../lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();
    const username = body?.username
      ? String(body.username).trim()
      : (body?.USERNAME_USER && String(body.USERNAME_USER).trim()) || "";
    const password = body?.password
      ? String(body.password)
      : body?.PASSWORD_USER || "";

    if (!username || !password) {
      return Response.json(
        { ok: false, error: "Username dan password wajib diisi" },
        { status: 400 }
      );
    }

    // Cek tabel user dulu (admin)
    const admin = await prisma.user.findFirst({
      where: {
        USERNAME_USER: username,
        PASSWORD_USER: password,
      },
    });

    if (admin) {
      const { PASSWORD_USER, ...data } = admin;
      const res = Response.json({
        ok: true,
        data: { ...data, nama: data.NAMA_USER, username: data.USERNAME_USER },
        role: "admin",
      });
      // Cookie ini dibaca middleware untuk izinkan akses /admin
      res.headers.set(
        "Set-Cookie",
        "ebizmart_auth=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400"
      );
      return res;
    }

    // Cek tabel pelanggan
    const pelanggan = await prisma.pelanggan.findFirst({
      where: {
        USERNAME_PELANGGAN: username,
        PASSWORD_PELANGGAN: password,
      },
    });

    if (pelanggan) {
      const { PASSWORD_PELANGGAN, ...data } = pelanggan;
      const res = Response.json({
        ok: true,
        data: {
          ...data,
          nama: data.NAMA_PELANGGAN,
          username: data.USERNAME_PELANGGAN,
        },
        role: "pelanggan",
      });
      // Hapus cookie admin agar pelanggan tidak bisa akses /admin
      res.headers.set(
        "Set-Cookie",
        "ebizmart_auth=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0"
      );
      return res;
    }

    return Response.json(
      { ok: false, error: "Username atau password salah" },
      { status: 401 }
    );
  } catch (error) {
    return Response.json(
      { ok: false, error: error?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
