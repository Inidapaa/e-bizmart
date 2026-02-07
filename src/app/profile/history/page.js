"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function gambarSrc(val) {
  if (!val) return null;
  if (String(val).startsWith("http")) return val;
  return "/uploads/" + val;
}

function statusLabel(s) {
  if (s === "Belum_bayar") return "Belum bayar";
  if (s === "Dalam_proses") return "Dalam proses";
  if (s === "Selesai") return "Selesai";
  if (s === "Gagal") return "Gagal";
  return s || "-";
}

export default function HistoryPage() {
  const [user, setUser] = useState(null);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = setTimeout(() => {
      try {
        const stored = localStorage.getItem("user");
        const role = localStorage.getItem("role");
        if (stored && role === "pelanggan") {
          setUser(JSON.parse(stored));
        } else {
          setUser(null);
        }
      } catch (_) {
        setUser(null);
      }
    }, 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!user?.ID_PELANGGAN) {
      const id = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(id);
    }
    let cancelled = false;
    const id = setTimeout(() => {
      async function fetchHistory() {
        try {
          const res = await fetch(
            "/api/penjualan?pelanggan=" + user.ID_PELANGGAN,
            { cache: "no-store" }
          );
          const result = await res.json();
          if (!cancelled && result.ok) setList(result.data || []);
          else if (!cancelled)
            setMessage("Error: " + (result.error || "Gagal memuat"));
        } catch (err) {
          if (!cancelled) setMessage("Error: " + err.message);
        }
        if (!cancelled) setLoading(false);
      }
      fetchHistory();
    }, 0);
    return () => {
      cancelled = true;
      clearTimeout(id);
    };
  }, [user?.ID_PELANGGAN]);

  function fmtTanggal(val) {
    if (!val) return "-";
    const d = new Date(val);
    if (Number.isNaN(d.getTime())) return "-";
    return d.toLocaleDateString("id-ID");
  }

  if (!user) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
        <p className="text-neutral-500 text-sm">
          Harap login sebagai pelanggan untuk melihat riwayat pesanan.
        </p>
        <Link
          href="/login?redirect=/profile/history"
          className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Login
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <p className="text-neutral-500 text-sm">Memuat riwayat pesanan...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500">
          Riwayat pesanan
        </p>
        <h1 className="heading-display text-2xl md:text-3xl text-neutral-900 mt-1">
          History transaksi
        </h1>
        <p className="text-sm text-neutral-600 mt-2">
          Daftar pesanan Anda. Harap tunggu konfirmasi dari admin.
        </p>
      </div>

      {message && (
        <div className="card p-4 border border-red-200 bg-red-50 text-red-700 text-sm">
          {message}
        </div>
      )}

      {list.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-neutral-500 text-sm">
            Belum ada riwayat transaksi.
          </p>
          <Link
            href="/product"
            className="inline-block mt-3 text-sm font-medium text-neutral-900 underline"
          >
            Belanja sekarang
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {list.map((t) => (
            <div key={t.ID_PENJUALAN} className="card p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs text-neutral-500">
                    No. #{t.ID_PENJUALAN} · {fmtTanggal(t.TANGGAL)}
                  </span>
                  <p className="text-lg font-semibold text-neutral-900 mt-0.5">
                    Rp {(t.TOTAL ?? 0).toLocaleString("id-ID")}
                  </p>
                </div>
                <span
                  className={`badge-pill ${
                    t.STATUS_TRANSAKSI === "Selesai"
                      ? "bg-emerald-100 text-emerald-800"
                      : t.STATUS_TRANSAKSI === "Gagal"
                      ? "bg-red-100 text-red-800"
                      : t.STATUS_TRANSAKSI === "Dalam_proses"
                      ? "bg-amber-100 text-amber-800"
                      : "pill-muted"
                  }`}
                >
                  {statusLabel(t.STATUS_TRANSAKSI)}
                </span>
              </div>
              <ul className="space-y-2 border-t border-neutral-100 pt-4">
                {Array.isArray(t.detail_transaksi) &&
                  t.detail_transaksi.map((d) => (
                    <li
                      key={d.ID_DETAILTRANSAKSI}
                      className="flex gap-3 text-sm text-neutral-700"
                    >
                      <span className="shrink-0 w-10 h-10 rounded bg-neutral-100 overflow-hidden">
                        {d.barang?.GAMBAR_BARANG ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={gambarSrc(d.barang.GAMBAR_BARANG)}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="w-full h-full flex items-center justify-center text-[10px] text-neutral-400">
                            —
                          </span>
                        )}
                      </span>
                      <span className="flex-1 truncate">
                        {d.barang?.NAMA_BARANG || "Barang"} × {d.JUMLAH ?? 0}
                      </span>
                      <span className="shrink-0">
                        Rp {(d.SUB_TOTAL ?? 0).toLocaleString("id-ID")}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <p className="text-center text-sm text-neutral-500">
        <Link href="/profile" className="underline hover:no-underline">
          ← Kembali ke Profile
        </Link>
      </p>
    </div>
  );
}
