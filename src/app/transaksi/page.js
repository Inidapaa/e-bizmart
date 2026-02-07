"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

function gambarSrc(val) {
  if (!val) return null;
  if (String(val).startsWith("http")) return val;
  return "/uploads/" + val;
}

function TransaksiContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { items: cartItems, total: cartTotal, refresh: refreshCart, remove } = useCart();
  const kodeQuery = searchParams.get("kode");
  const qtyQuery = searchParams.get("qty");

  const [user, setUser] = useState(null);
  const [singleProduct, setSingleProduct] = useState(null);
  const [loadingSingle, setLoadingSingle] = useState(!!kodeQuery);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

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

  useEffect(() => {
    if (kodeQuery && qtyQuery) {
      let cancelled = false;
      async function fetchOne() {
        try {
          const res = await fetch("/api/barang/" + kodeQuery);
          const result = await res.json();
          if (!cancelled && result.ok) {
            const p = result.data;
            const qty = Math.max(1, parseInt(qtyQuery, 10) || 1);
            setSingleProduct(p);
            setItems([
              {
                KODE_BARANG: p.KODE_BARANG,
                NAMA_BARANG: p.NAMA_BARANG,
                HARGA_BARANG: p.HARGA_BARANG,
                GAMBAR_BARANG: p.GAMBAR_BARANG,
                qty,
              },
            ]);
            setTotal((p.HARGA_BARANG ?? 0) * qty);
          }
        } catch (_) {}
        if (!cancelled) setLoadingSingle(false);
      }
      fetchOne();
      return () => { cancelled = true; };
    } else {
      setLoadingSingle(false);
      const list = cartItems.map((i) => ({
        KODE_BARANG: i.KODE_BARANG,
        NAMA_BARANG: i.NAMA_BARANG,
        HARGA_BARANG: i.HARGA_BARANG,
        GAMBAR_BARANG: i.GAMBAR_BARANG,
        qty: i.qty || 1,
      }));
      setItems(list);
      setTotal(cartTotal);
    }
  }, [kodeQuery, qtyQuery, cartItems, cartTotal]);

  async function handleBayar() {
    if (!user?.ID_PELANGGAN) {
      setMessage("Harap login sebagai pelanggan untuk transaksi.");
      return;
    }
    if (items.length === 0) {
      setMessage("Tidak ada item untuk dibayar.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/penjualan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ID_PELANGGAN: user.ID_PELANGGAN,
          ID_PEMBAYARAN: 1,
          items: items.map((i) => ({
            KODE_BARANG: i.KODE_BARANG,
            qty: i.qty,
            HARGA_BARANG: i.HARGA_BARANG,
          })),
        }),
      });
      const result = await res.json();
      if (result.ok) {
        setSuccess(true);
        if (!kodeQuery) {
          items.forEach((i) => remove(i.KODE_BARANG));
          refreshCart();
        }
        setTimeout(() => {
          router.push("/profile/history");
        }, 2000);
      } else {
        setMessage(result.error || "Transaksi gagal");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }
    setLoading(false);
  }

  if (loadingSingle) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <p className="text-neutral-500 text-sm">Memuat...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
        <p className="text-neutral-600 text-sm">
          Login sebagai pelanggan untuk melakukan transaksi.
        </p>
        <Link
          href={"/login?redirect=" + encodeURIComponent("/transaksi" + (kodeQuery ? "?kode=" + kodeQuery + "&qty=" + (qtyQuery || "1") : ""))}
          className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Login
        </Link>
      </div>
    );
  }

  if (items.length === 0 && !kodeQuery) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
        <p className="text-neutral-600 text-sm">Tidak ada item. Isi keranjang atau pilih produk.</p>
        <Link
          href="/product"
          className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Lihat produk
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
        <p className="text-emerald-600 font-medium">Transaksi berhasil dicatat (Cash).</p>
        <p className="text-sm text-neutral-500">Redirect ke riwayat pesanan...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto w-full min-w-0">
      <div>
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500">
          Checkout
        </p>
        <h1 className="heading-display text-xl sm:text-2xl md:text-3xl text-neutral-900 mt-1">
          Halaman transaksi
        </h1>
      </div>

      <section className="card p-4 sm:p-6">
        <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-600 mb-4">
          Rincian produk
        </h2>
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.KODE_BARANG}
              className="flex gap-4 py-2 border-b border-neutral-100 last:border-0"
            >
              <div className="w-16 h-16 rounded bg-neutral-100 overflow-hidden shrink-0">
                {item.GAMBAR_BARANG ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={gambarSrc(item.GAMBAR_BARANG)}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[10px] text-neutral-400">
                    —
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-neutral-900 truncate">
                  {item.NAMA_BARANG || "-"}
                </p>
                <p className="text-sm text-neutral-600">
                  {item.qty} × Rp {(item.HARGA_BARANG ?? 0).toLocaleString("id-ID")} = Rp{" "}
                  {((item.HARGA_BARANG ?? 0) * (item.qty || 1)).toLocaleString("id-ID")}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 pt-4 border-t border-neutral-200 flex justify-between text-sm font-semibold">
          <span>Total</span>
          <span>Rp {total.toLocaleString("id-ID")}</span>
        </p>
      </section>

      <section className="card p-4 sm:p-6">
        <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-600 mb-4">
          Informasi pelanggan
        </h2>
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
      </section>

      <p className="text-sm text-neutral-500">
        Pembayaran dengan <strong>Cash</strong>. Pesanan akan tercatat dan status dapat dilihat di Riwayat Pesanan.
      </p>

      {message && (
        <div className="p-3 rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm">
          {message}
        </div>
      )}

      <div className="flex flex-col-reverse sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleBayar}
          disabled={loading}
          className="flex-1 rounded-full bg-neutral-900 py-3 text-sm font-semibold text-white hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Memproses..." : "Bayar — Rp " + total.toLocaleString("id-ID")}
        </button>
        <Link
          href={kodeQuery ? "/product/" + kodeQuery : "/keranjang"}
          className="rounded-full border border-neutral-300 py-3 px-6 text-sm font-medium text-neutral-700 hover:bg-neutral-100 text-center"
        >
          Batal
        </Link>
      </div>
    </div>
  );
}

export default function TransaksiPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[40vh] flex items-center justify-center">
          <p className="text-neutral-500 text-sm">Memuat...</p>
        </div>
      }
    >
      <TransaksiContent />
    </Suspense>
  );
}
