import { NextResponse } from "next/server";

// halaman protected
const protectedPaths = [
  "/admin",
  "/admin/kategori",
  "/admin/user",
  "/admin/pelanggan",
  "/admin/penjualan",
  "/admin/dashboard",
  "/admin/profile",
];

function isProtectedPath(pathname) {
  return protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(path + "/")
  );
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const authCookie = request.cookies.get("ebizmart_auth");

  //akses ke dashboard admin tanpa auth
  if (isProtectedPath(pathname) && authCookie?.value !== "1") {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
