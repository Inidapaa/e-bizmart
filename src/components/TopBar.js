"use client";

import Link from "next/link";

export default function TopBar() {
  return (
    <div className="top-bar">
      <Link href="/product">
        <span className="hidden sm:inline">Solusi Digital untuk Bisnis Grosir Modern — </span>
        Jelajahi Katalog Produk →
      </Link>
    </div>
  );
}
