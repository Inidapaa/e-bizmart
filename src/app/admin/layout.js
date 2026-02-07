"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineDotsVertical,
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineCash,
  HiOutlineHome,
  HiOutlineTag,
} from "react-icons/hi";
import TopBar from "../../components/TopBar";

const adminNavItems = [
  { href: "/admin/dashboard", label: "Dashboard", Icon: HiOutlineViewGrid },
  { href: "/admin", label: "Barang", Icon: HiOutlineCube },
  { href: "/admin/kategori", label: "Kategori", Icon: HiOutlineTag },
  { href: "/admin/user", label: "User", Icon: HiOutlineUser },
  { href: "/admin/pelanggan", label: "Pelanggan", Icon: HiOutlineUsers },
  { href: "/admin/penjualan", label: "Penjualan", Icon: HiOutlineCash },
  { href: "/admin/profile", label: "Profile", Icon: HiOutlineUser },
];

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [userInfo, setUserInfo] = useState({ name: "", role: "" });
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function check() {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      const role = (localStorage.getItem("role") || "").trim();
      let userData = null;
      try {
        const userStr = localStorage.getItem("user");
        if (userStr) userData = JSON.parse(userStr);
      } catch (_) {}

      let isAdmin = role === "admin";
      if (!isAdmin && isLoggedIn && userData && typeof userData.ID_USER === "number") {
        isAdmin = true;
      }

      if (isLoggedIn && isAdmin) {
        setAllowed(true);
        const userName = userData?.NAMA_USER || userData?.USERNAME_USER || userData?.nama || "Admin";
        const userRole = userData?.ROLE || role || "admin";
        setUserInfo({ name: String(userName), role: String(userRole) });
      } else {
        setAllowed(false);
        router.replace(
          "/login?redirect=" + encodeURIComponent(pathname || "/admin")
        );
      }
      setChecking(false);
    }

    check();
  }, [pathname, router]);

  useEffect(() => {
    if (!moreOpen) return;
    const close = () => setMoreOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [moreOpen]);

  const isActive = (href) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname?.startsWith(href);
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <p className="text-[0.7rem] tracking-[0.2em] uppercase text-neutral-500">Loading...</p>
      </div>
    );
  }

  if (!allowed) {
    return null;
  }

  return (
    <div className="admin-shell min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-30">
        <TopBar />
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed left-0 top-10 bottom-0 w-[260px] flex-col gap-6 px-5 py-6 border-r border-neutral-200 bg-white overflow-y-auto z-20">
        <div className="border-b border-neutral-100 pb-5">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-500">
            E-BIZMART
          </p>
          <h2 className="heading-display mt-2 text-xl text-neutral-900 truncate">
            {userInfo.name || "Admin"}
          </h2>
          <p className="mt-1 text-[0.7rem] tracking-[0.15em] uppercase text-neutral-500">
            {userInfo.role || "admin"}
          </p>
        </div>

        <nav className="space-y-1 text-[0.7rem] font-medium tracking-[0.12em] uppercase">
          {adminNavItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block rounded-lg px-4 py-2.5 transition-colors ${
                isActive(href)
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-4 border-t border-neutral-100">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-[0.7rem] font-medium tracking-[0.12em] uppercase text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            Kembali ke Home
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="min-w-0 flex-1 md:ml-[260px] pt-10 pb-20 md:pb-0">
        <div className="p-4 md:p-6 lg:p-8 min-h-screen md:min-h-0">{children}</div>
      </div>

      {/* Mobile: fixed bottom nav + More popup (same style as main page) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        {moreOpen && (
          <div
            className="absolute bottom-full left-4 right-4 mb-2 rounded-xl bg-white border border-neutral-200 shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[70vh] overflow-y-auto py-2">
              {adminNavItems.map(({ href, label, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMoreOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                    isActive(href)
                      ? "bg-neutral-100 text-neutral-900 font-medium"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0 text-neutral-500" />
                  {label}
                </Link>
              ))}
              <div className="border-t border-neutral-100 my-1" />
              <Link
                href="/"
                onClick={() => setMoreOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50"
              >
                <HiOutlineHome className="w-5 h-5 shrink-0 text-neutral-500" />
                Kembali ke Home
              </Link>
            </div>
          </div>
        )}

        <nav className="flex items-center justify-around h-16 px-2 bg-white border-t border-neutral-200 safe-area-pb">
          <Link
            href="/admin"
            className="flex flex-col items-center justify-center gap-0.5 py-2 min-w-[56px]"
          >
            <HiOutlineCube
              className={`w-6 h-6 ${isActive("/admin") && pathname === "/admin" ? "text-neutral-900" : "text-neutral-500"}`}
            />
            <span className="text-[0.6rem] tracking-wider uppercase text-neutral-500">
              Barang
            </span>
          </Link>

          {/* Center: Dashboard (primary CTA - prominent like cart in main page) */}
          <Link
            href="/admin/dashboard"
            className="relative flex flex-col items-center justify-center -mt-5"
          >
            <div className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg border-4 border-white transition-colors ${
              isActive("/admin/dashboard") 
                ? "bg-neutral-900 text-white" 
                : "bg-neutral-800 text-white"
            }`}>
              <HiOutlineViewGrid className="w-7 h-7" />
            </div>
            <span className="text-[0.6rem] tracking-wider uppercase text-neutral-500 mt-1">
              Dashboard
            </span>
          </Link>

          <div className="flex flex-col items-center justify-center min-w-[56px]">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMoreOpen((v) => !v);
              }}
              className={`flex flex-col items-center justify-center gap-0.5 py-2 ${moreOpen ? "text-neutral-900" : "text-neutral-500"}`}
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              <HiOutlineDotsVertical className="w-6 h-6" />
              <span className="text-[0.6rem] tracking-wider uppercase">
                More
              </span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
