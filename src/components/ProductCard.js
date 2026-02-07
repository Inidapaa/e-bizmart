"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";
import { useCart } from "../context/CartContext";

function gambarSrc(val) {
  if (!val) return null;
  if (String(val).startsWith("http")) return val;
  return "/uploads/" + val;
}

export default function ProductCard({ barang, showStok = false }) {
  const { add: addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleTambahKeranjang(e) {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      KODE_BARANG: barang.KODE_BARANG,
      NAMA_BARANG: barang.NAMA_BARANG,
      HARGA_BARANG: barang.HARGA_BARANG,
      GAMBAR_BARANG: barang.GAMBAR_BARANG,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="group relative flex flex-col min-w-0">
      <Link href={`/product/${barang.KODE_BARANG}`} className="block flex-1 min-w-0">
        <article className="border border-neutral-200 overflow-hidden h-full flex flex-col min-w-0">
          <div className="aspect-3/4 bg-neutral-100 relative overflow-hidden shrink-0">
            {barang.GAMBAR_BARANG ? (
              <img
                src={gambarSrc(barang.GAMBAR_BARANG)}
                alt={barang.NAMA_BARANG || "Produk"}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-[0.65rem] text-neutral-400 uppercase tracking-wider">
                Gambar belum tersedia
              </div>
            )}
          </div>

          <div className="p-3 sm:p-4 flex flex-col min-w-0">
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-neutral-500">
              {barang.kategori?.NAMA_KATEGORI || "Kategori"}
            </p>

            <h3 className="mt-1 text-sm font-medium text-neutral-900 line-clamp-2 group-hover:underline">
              {barang.NAMA_BARANG || "Produk"}
            </h3>

            <p className="mt-2 text-sm text-neutral-700">
              {barang.HARGA_BARANG != null
                ? "Rp " + barang.HARGA_BARANG.toLocaleString("id-ID")
                : "Harga belum tersedia"}
            </p>

            <div className="mt-2 flex items-end justify-between gap-2">
              {showStok && barang.STOK_BARANG != null ? (
                <p className="text-[0.65rem] text-neutral-500">
                  Stok tersedia: {barang.STOK_BARANG}
                </p>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={handleTambahKeranjang}
                title="Tambah ke keranjang"
                className="p-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors shrink-0"
              >
                {added ? (
                  <HiCheck className="w-4 h-4 text-green-600" />
                ) : (
                  <HiOutlineShoppingCart className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}
