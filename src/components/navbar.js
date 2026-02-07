"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineDotsVertical,
  HiOutlineInformationCircle,
  HiOutlineLogin,
  HiOutlineLogout,
} from "react-icons/hi";
import { useCart } from "../context/CartContext";
import { useConfirm } from "../context/ConfirmContext";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/product", label: "GROSIR" },
  { href: "/about", label: "TENTANG KAMI" },
];

const moreMenuItems = [
  { href: "/product", label: "Katalog Produk", Icon: HiOutlineShoppingBag },
  { href: "/about", label: "Tentang Kami", Icon: HiOutlineInformationCircle },
  { href: "/keranjang", label: "Keranjang", Icon: HiOutlineShoppingCart },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { count: cartCount } = useCart();
  const { showConfirm } = useConfirm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    let r = (localStorage.getItem("role") || "").trim();
    if (loggedIn && r !== "admin") {
      try {
        const userStr = localStorage.getItem("user");
        if (userStr) {
          const user = JSON.parse(userStr);
          if (user && typeof user.ID_USER === "number") r = "admin";
        }
      } catch (_) {}
    }
    const id = setTimeout(() => {
      setIsLoggedIn(loggedIn);
      setRole(r);
    }, 0);
    return () => clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!moreOpen) return;
    const close = () => setMoreOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [moreOpen]);

  async function handleLogout() {
    const ok = await showConfirm("Yakin ingin keluar (logout)?");
    if (!ok) return;
    setMoreOpen(false);
    try {
      await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    } catch (_) {}
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("role");
    }
    setIsLoggedIn(false);
    setRole("");
    router.push("/");
    router.refresh();
  }

  const navTextClass = "text-neutral-600 hover:text-neutral-900";
  const navActiveClass = "text-neutral-900";

  const isActive = (href) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      {/* Top header: desktop full nav, mobile logo only */}
      <header
        className="fixed left-0 right-0 z-30 nav-main border-b"
        style={{
          top: isScrolled ? 0 : "2.5rem",
          transition:
            "top 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.35s, border-color 0.35s, backdrop-filter 0.35s",
          backgroundColor: isScrolled ? "rgba(255,255,255,0.88)" : "#ffffff",
          borderColor: isScrolled ? "rgba(229,229,229,0.7)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px) saturate(180%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px) saturate(180%)" : "none",
        }}
      >
        <nav className="page-shell flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-[0.25em] uppercase text-neutral-900 transition-opacity hover:opacity-80"
          >
            E-BIZMART
          </Link>

          {/* Desktop: center links */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-[0.7rem] font-medium tracking-[0.2em] uppercase transition-colors">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={
                  isActive(href) ? navActiveClass : navTextClass
                }
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop: cart, admin, profile, logout */}
          <div
            className={`hidden md:flex items-center gap-2 transition-colors ${navTextClass}`}
          >
            <Link href="/keranjang" className="relative p-2" title="Keranjang">
              <HiOutlineShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 rounded-full bg-neutral-900 text-white text-[0.6rem] font-medium flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>
            {isLoggedIn && (role === "admin" || role === "Admin") && (
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 text-[0.65rem] tracking-[0.15em] uppercase text-neutral-600 hover:text-neutral-900 px-3 py-1.5 border border-neutral-300 transition-colors"
              >
                Admin
              </Link>
            )}
            {isLoggedIn ? (
              <>
                {role === "pelanggan" && (
                  <div className="relative group">
                    <button className="p-2" title="Profile">
                      <HiOutlineUser className="w-5 h-5" />
                    </button>
                    <div className="absolute right-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white border border-neutral-200 rounded-lg shadow-lg overflow-hidden">
                        <Link
                          href="/profile"
                          className="block px-4 py-3 text-[0.7rem] tracking-[0.15em] uppercase text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                        >
                          Profile
                        </Link>
                        <Link
                          href="/profile/history"
                          className="block px-4 py-3 text-[0.7rem] tracking-[0.15em] uppercase text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 border-t border-neutral-100"
                        >
                          Riwayat
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleLogout}
                  className={`text-[0.65rem] tracking-[0.15em] uppercase ${navTextClass}`}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="p-2" title="Login">
                <HiOutlineUser className="w-5 h-5" />
              </Link>
            )}
          </div>

          {/* Mobile: only logo (cart & rest in bottom nav) */}
          <div className="md:hidden w-20" aria-hidden />
        </nav>
      </header>

      {/* Mobile: fixed bottom nav + More popup */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        {/* Popup menu above bottom bar */}
        {moreOpen && (
          <div
            className="absolute bottom-full left-4 right-4 mb-2 rounded-xl bg-white border border-neutral-200 shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[70vh] overflow-y-auto py-2">
              {moreMenuItems.map(({ href, label, Icon }) => (
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
                  {href === "/keranjang" && cartCount > 0 && (
                    <span className="ml-auto min-w-5 h-5 px-1 rounded-full bg-neutral-900 text-white text-xs flex items-center justify-center">
                      {cartCount > 99 ? "99+" : cartCount}
                    </span>
                  )}
                </Link>
              ))}
              {isLoggedIn && (role === "admin" || role === "Admin") && (
                <Link
                  href="/admin"
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50"
                >
                  <HiOutlineUser className="w-5 h-5 shrink-0 text-neutral-500" />
                  Admin
                </Link>
              )}
              {isLoggedIn && role === "pelanggan" && (
                <>
                  <Link
                    href="/profile"
                    onClick={() => setMoreOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 text-sm ${
                      isActive("/profile") ? "bg-neutral-100 text-neutral-900 font-medium" : "text-neutral-700 hover:bg-neutral-50"
                    }`}
                  >
                    <HiOutlineUser className="w-5 h-5 shrink-0 text-neutral-500" />
                    Profile
                  </Link>
                  <Link
                    href="/profile/history"
                    onClick={() => setMoreOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50"
                  >
                    <HiOutlineUser className="w-5 h-5 shrink-0 text-neutral-500" />
                    Riwayat
                  </Link>
                </>
              )}
              <div className="border-t border-neutral-100 my-1" />
              {isLoggedIn ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50"
                >
                  <HiOutlineLogout className="w-5 h-5 shrink-0 text-neutral-500" />
                  Log out
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50"
                >
                  <HiOutlineLogin className="w-5 h-5 shrink-0 text-neutral-500" />
                  Login
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Bottom bar */}
        <nav className="flex items-center justify-around h-16 px-2 bg-white border-t border-neutral-200 safe-area-pb">
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-0.5 py-2 min-w-[56px]"
          >
            <HiOutlineHome
              className={`w-6 h-6 ${isActive("/") && pathname === "/" ? "text-neutral-900" : "text-neutral-500"}`}
            />
            <span className="text-[0.6rem] tracking-wider uppercase text-neutral-500">
              Home
            </span>
          </Link>

          <Link
            href="/product"
            className="flex flex-col items-center justify-center gap-0.5 py-2 min-w-[56px]"
          >
            <HiOutlineShoppingBag
              className={`w-6 h-6 ${isActive("/product") ? "text-neutral-900" : "text-neutral-500"}`}
            />
            <span className="text-[0.6rem] tracking-wider uppercase text-neutral-500">
              Grosir
            </span>
          </Link>

          {/* Center: Keranjang (primary CTA) */}
          <Link
            href="/keranjang"
            className="relative flex flex-col items-center justify-center -mt-5"
          >
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900 text-white shadow-lg border-4 border-white">
              <HiOutlineShoppingCart className="w-7 h-7" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 rounded-full bg-white text-neutral-900 text-[0.6rem] font-bold flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </div>
            <span className="text-[0.6rem] tracking-wider uppercase text-neutral-500 mt-1">
              Keranjang
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
    </>
  );
}
