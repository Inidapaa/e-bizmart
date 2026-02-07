"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext";

function gambarSrc(val) {
  if (!val) return null;
  if (String(val).startsWith("http")) return val;
  return "/uploads/" + val;
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;
  const { add: addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [user, setUser] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/barang/${id}`);
        const result = await res.json();
        if (!cancelled && result.ok) {
          setProduct(result.data);
          setQty(1);
        }
      } catch (_) {}
      if (!cancelled) setLoading(false);
    }
    fetchProduct();
    return () => { cancelled = true; };
  }, [id]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem("user");
      const role = localStorage.getItem("role");
      if (stored && role === "pelanggan") {
        setUser(JSON.parse(stored));
      } else {
        setUser(null);
      }
    } catch (_) {}
  }, []);

  function handleAddToCart() {
    if (!product) return;
    addToCart(
      {
        KODE_BARANG: product.KODE_BARANG,
        NAMA_BARANG: product.NAMA_BARANG,
        HARGA_BARANG: product.HARGA_BARANG,
        GAMBAR_BARANG: product.GAMBAR_BARANG,
      },
      qty
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function handleBeliSekarang() {
    if (!user) {
      router.push("/login?redirect=" + encodeURIComponent("/transaksi?kode=" + id + "&qty=" + qty));
      return;
    }
    router.push("/transaksi?kode=" + id + "&qty=" + qty);
  }

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <p className="text-neutral-500 text-sm">Memuat produk...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[40vh] flex flex-col items-center justify-center gap-4">
        <p className="text-neutral-500 text-sm">Produk tidak ditemukan.</p>
        <Link
          href="/product"
          className="text-sm font-medium text-neutral-900 underline hover:no-underline"
        >
          Kembali ke katalog
        </Link>
      </div>
    );
  }

  const stok = product.STOK_BARANG ?? 0;
  const maxQty = Math.max(1, stok);

  return (
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto w-full min-w-0">
      <div className="card overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="aspect-square sm:aspect-[4/3] md:aspect-auto md:min-h-[360px] bg-neutral-100 relative">
            {product.GAMBAR_BARANG ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={gambarSrc(product.GAMBAR_BARANG)}
                alt={product.NAMA_BARANG || "Produk"}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                No image
              </div>
            )}
          </div>
          <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-between min-w-0">
            <div>
              <span className="badge-pill pill-muted text-[0.65rem]">
                {product.kategori?.NAMA_KATEGORI || "Uncategorized"}
              </span>
              <h1 className="heading-display text-xl sm:text-2xl md:text-3xl text-neutral-900 mt-3">
                {product.NAMA_BARANG || "-"}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-neutral-900 mt-2">
                {product.HARGA_BARANG != null
                  ? "Rp " + product.HARGA_BARANG.toLocaleString("id-ID")
                  : "—"}
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Stok: {stok}
              </p>
              {product.KETERANGAN_BARANG && (
                <p className="mt-4 text-sm text-neutral-600">
                  {product.KETERANGAN_BARANG}
                </p>
              )}
            </div>
            <div className="mt-4 sm:mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <label className="text-xs font-medium text-neutral-700 shrink-0">Jumlah:</label>
                <input
                  type="number"
                  min={1}
                  max={maxQty}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, Math.min(maxQty, Number(e.target.value) || 1)))}
                  className="w-20 rounded-lg border border-neutral-200 px-3 py-1.5 text-sm"
                />
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="rounded-full border border-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  {added ? "✓ Ditambahkan" : "Tambah ke keranjang"}
                </button>
                <button
                  type="button"
                  onClick={handleBeliSekarang}
                  className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors"
                >
                  Beli sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="card p-4 sm:p-6">
        <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-600 mb-4">
          Informasi pelanggan (untuk transaksi)
        </h2>
        {!user ? (
          <div className="py-4 text-sm text-neutral-600">
            <p className="mb-2">Login sebagai pelanggan untuk melakukan transaksi.</p>
            <Link
              href={"/login?redirect=" + encodeURIComponent("/product/" + id)}
              className="inline-flex rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-neutral-500 text-xs uppercase tracking-wider">Nama</p>
              <p className="font-medium text-neutral-900">{user.NAMA_PELANGGAN || "—"}</p>
            </div>
            <div>
              <p className="text-neutral-500 text-xs uppercase tracking-wider">Username</p>
              <p className="font-medium text-neutral-900">{user.USERNAME_PELANGGAN || "—"}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-neutral-500 text-xs uppercase tracking-wider">Alamat</p>
              <p className="font-medium text-neutral-900">{user.ALAMAT_PELANGGAN || "—"}</p>
            </div>
          </div>
        )}
      </section>

      <p className="text-center">
        <Link href="/product" className="text-sm text-neutral-500 hover:text-neutral-900 underline">
          ← Kembali ke katalog
        </Link>
      </p>
    </div>
  );
}
