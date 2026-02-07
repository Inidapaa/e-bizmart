"use client";

import { useEffect, useMemo, useState } from "react";
import { useConfirm } from "../../../context/ConfirmContext";

export default function AdminPenjualan() {
  const { showConfirm } = useConfirm();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  async function loadData() {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/penjualan", { cache: "no-store" });
      const result = await res.json();
      if (result.ok) setList(result.data || []);
      else setMessage("Error: " + result.error);
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    const id = setTimeout(() => loadData(), 0);
    return () => clearTimeout(id);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return list
      .filter((t) => {
        if (statusFilter === "ALL") return true;
        return (t.STATUS_TRANSAKSI || "").trim() === statusFilter;
      })
      .filter((t) => {
        if (!q) return true;
        return [
          t.ID_PENJUALAN,
          t.pelanggan?.NAMA_PELANGGAN,
          t.user?.NAMA_USER,
          t.pembayaran?.NAMA_PEMBAYARAN,
          t.STATUS_TRANSAKSI,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q);
      });
  }, [list, query, statusFilter]);

  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const paged = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, safePage]);

  function fmtTanggal(val) {
    if (!val) return "-";
    const d = new Date(val);
    if (Number.isNaN(d.getTime())) return "-";
    return d.toLocaleDateString("id-ID");
  }

  const STATUS_OPTIONS = [
    { value: "Belum_bayar", label: "Belum bayar" },
    { value: "Dalam_proses", label: "Dalam proses" },
    { value: "Selesai", label: "Selesai" },
    { value: "Gagal", label: "Gagal" },
  ];

  const [updatingId, setUpdatingId] = useState(null);

  async function handleStatusChange(idPenjualan, newStatus) {
    setUpdatingId(idPenjualan);
    try {
      const res = await fetch("/api/penjualan", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ID_PENJUALAN: idPenjualan,
          STATUS_TRANSAKSI: newStatus,
        }),
      });
      const result = await res.json();
      if (result.ok) {
        setList((prev) =>
          prev.map((t) =>
            t.ID_PENJUALAN === idPenjualan
              ? { ...t, STATUS_TRANSAKSI: newStatus }
              : t,
          ),
        );
      } else setMessage("Error: " + result.error);
    } catch (err) {
      setMessage("Error: " + err.message);
    }
    setUpdatingId(null);
  }

  return (
    <div className="space-y-4 sm:space-y-6 min-w-0">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500">
            ADMIN / PENJUALAN
          </p>
          <h1 className="heading-display text-xl sm:text-2xl md:text-3xl text-neutral-900">
            Transactions
          </h1>
          <p className="text-sm text-neutral-600 mt-2">
            Daftar penjualan. Data tabel tampil di bawah; ubah status dari kolom Aksi.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="card px-3 sm:px-4 py-3 flex items-center gap-3 min-w-0 flex-1 sm:flex-initial">
            <span className="text-xs text-neutral-500 shrink-0">Search</span>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="id / pelanggan / status..."
              className="bg-transparent outline-none text-sm text-neutral-900 w-full min-w-0 sm:w-[220px]"
            />
          </div>
          <div className="card px-3 sm:px-4 py-3 flex items-center gap-3 min-w-0 flex-1 sm:flex-initial">
            <span className="text-xs text-neutral-500 shrink-0">Filter</span>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              className="bg-transparent outline-none text-sm text-neutral-900 w-full min-w-0 sm:w-[220px]"
            >
              <option value="ALL">Semua status</option>
              {STATUS_OPTIONS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {message && (
        <div
          className={`card p-4 text-sm ${
            message.includes("Error")
              ? "border border-red-200 bg-red-50 text-red-700"
              : "border border-emerald-200 bg-emerald-50 text-emerald-800"
          }`}
        >
          {message}
        </div>
      )}

      <section className="card p-4 sm:p-6 overflow-hidden min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4 sm:mb-5">
          <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-700">
            Penjualan
          </h2>
          <button
            type="button"
            onClick={loadData}
            className="text-xs font-medium text-neutral-700 underline underline-offset-4"
          >
            Refresh
          </button>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full border-collapse min-w-[880px]">
            <thead>
              <tr className="text-left text-xs text-neutral-500">
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">ID</th>
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">Tanggal</th>
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">Pelanggan</th>
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">Alamat pelanggan</th>
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">Admin</th>
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">Metode pembayaran</th>
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">Total</th>
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">Status</th>
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">Items</th>
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">Ubah status</th>
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">Detail</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm text-neutral-800">
              {filtered.length === 0 ? (
                <tr>
                  <td className="py-6 text-neutral-500" colSpan={11}>
                    {loading ? "Loading..." : "Belum ada data penjualan."}
                  </td>
                </tr>
              ) : (
                paged.map((t) => (
                  <tr
                    key={t.ID_PENJUALAN}
                    className="border-t border-neutral-100"
                  >
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4">{t.ID_PENJUALAN}</td>
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4 whitespace-nowrap">{fmtTanggal(t.TANGGAL)}</td>
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4 max-w-[80px] sm:max-w-none truncate">{t.pelanggan?.NAMA_PELANGGAN || "-"}</td>
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4 max-w-[100px] sm:max-w-[200px]">
                      <span
                        className="line-clamp-2"
                        title={t.pelanggan?.ALAMAT_PELANGGAN || ""}
                      >
                        {t.pelanggan?.ALAMAT_PELANGGAN || "-"}
                      </span>
                    </td>
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4 max-w-[80px] sm:max-w-none truncate">{t.user?.NAMA_USER || "-"}</td>
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4">{t.pembayaran?.NAMA_PEMBAYARAN || "-"}</td>
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4 whitespace-nowrap">
                      {t.TOTAL != null
                        ? "Rp " + Number(t.TOTAL).toLocaleString("id-ID")
                        : "-"}
                    </td>
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4">
                      <span className="badge-pill pill-muted">
                        {t.STATUS_TRANSAKSI === "Belum_bayar"
                          ? "Belum bayar"
                          : t.STATUS_TRANSAKSI === "Dalam_proses"
                            ? "Dalam proses"
                            : t.STATUS_TRANSAKSI || "-"}
                      </span>
                    </td>
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4">
                      {Array.isArray(t.detail_transaksi)
                        ? t.detail_transaksi.length
                        : 0}
                    </td>
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4">
                      <select
                        value={t.STATUS_TRANSAKSI || "Belum_bayar"}
                        onChange={async (e) => {
                          const newStatus = e.target.value;
                          const ok = await showConfirm("Yakin ingin mengubah status transaksi ini?");
                          if (!ok) {
                            setList((prev) => [...prev]);
                            return;
                          }
                          handleStatusChange(t.ID_PENJUALAN, newStatus);
                        }}
                        disabled={updatingId === t.ID_PENJUALAN}
                        className="rounded border border-neutral-200 px-2 py-1 text-xs bg-white disabled:opacity-50"
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4">
                      <button
                        type="button"
                        onClick={() => setSelected(t)}
                        className="rounded-full border border-neutral-200 px-3 py-1 text-[0.7rem] font-medium text-neutral-700 hover:bg-neutral-50"
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filtered.length > 0 && (
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-neutral-500">
              Menampilkan{" "}
              <span className="font-medium text-neutral-800">
                {(safePage - 1) * pageSize + 1}
              </span>
              {" - "}
              <span className="font-medium text-neutral-800">
                {Math.min(safePage * pageSize, filtered.length)}
              </span>{" "}
              dari{" "}
              <span className="font-medium text-neutral-800">
                {filtered.length}
              </span>{" "}
              data
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePage <= 1}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Prev
              </button>
              <span className="text-xs text-neutral-500">
                Hal {safePage} / {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage >= totalPages}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </section>

      {selected && (
        <section className="card p-4 sm:p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500">
                Detail transaksi
              </p>
              <h2 className="text-sm sm:text-base font-semibold text-neutral-900 mt-1">
                ID Penjualan #{selected.ID_PENJUALAN}
              </h2>
              <p className="text-xs text-neutral-500">
                Tanggal: {fmtTanggal(selected.TANGGAL)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="text-xs text-neutral-500 hover:text-neutral-800 underline underline-offset-4"
            >
              Tutup
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 text-sm">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-600 mb-2">
                Pelanggan
              </h3>
              <p className="text-neutral-900 font-medium">
                {selected.pelanggan?.NAMA_PELANGGAN || "-"}
              </p>
              <p className="text-xs text-neutral-600">
                Username: {selected.pelanggan?.USERNAME_PELANGGAN || "-"}
              </p>
              <p className="mt-1 text-xs text-neutral-600">
                Alamat: {selected.pelanggan?.ALAMAT_PELANGGAN || "-"}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-600 mb-2">
                Ringkasan
              </h3>
              <p className="text-xs text-neutral-600">
                Admin: {selected.user?.NAMA_USER || "-"}
              </p>
              <p className="text-xs text-neutral-600">
                Metode bayar: {selected.pembayaran?.NAMA_PEMBAYARAN || "-"}
              </p>
              <p className="text-xs text-neutral-600 mt-1">
                Status:{" "}
                <span className="badge-pill pill-muted inline-block">
                  {selected.STATUS_TRANSAKSI === "Belum_bayar"
                    ? "Belum bayar"
                    : selected.STATUS_TRANSAKSI === "Dalam_proses"
                      ? "Dalam proses"
                      : selected.STATUS_TRANSAKSI || "-"}
                </span>
              </p>
              <p className="text-sm font-semibold text-neutral-900 mt-2">
                Total:{" "}
                {selected.TOTAL != null
                  ? "Rp " + Number(selected.TOTAL).toLocaleString("id-ID")
                  : "-"}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-600 mb-2">
              Item pesanan
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse min-w-[480px]">
                <thead>
                  <tr className="text-left text-[0.7rem] text-neutral-500">
                    <th className="py-2 pr-2">Kode</th>
                    <th className="py-2 pr-2">Nama barang</th>
                    <th className="py-2 pr-2 text-right">Qty</th>
                    <th className="py-2 pr-2 text-right">Harga</th>
                    <th className="py-2 pr-0 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {(selected.detail_transaksi || []).map((d) => (
                    <tr key={d.ID_DETAILTRANSAKSI} className="border-t border-neutral-100">
                      <td className="py-2 pr-2">{d.KODE_BARANG}</td>
                      <td className="py-2 pr-2 max-w-[160px] sm:max-w-none truncate">
                        {d.barang?.NAMA_BARANG || "-"}
                      </td>
                      <td className="py-2 pr-2 text-right">{d.JUMLAH}</td>
                      <td className="py-2 pr-2 text-right">
                        {d.HARGA_SATUAN != null
                          ? "Rp " + Number(d.HARGA_SATUAN).toLocaleString("id-ID")
                          : "-"}
                      </td>
                      <td className="py-2 pr-0 text-right">
                        {d.SUB_TOTAL != null
                          ? "Rp " + Number(d.SUB_TOTAL).toLocaleString("id-ID")
                          : "-"}
                      </td>
                    </tr>
                  ))}
                  {(!selected.detail_transaksi ||
                    !selected.detail_transaksi.length) && (
                    <tr>
                      <td
                        className="py-4 text-neutral-500 text-center"
                        colSpan={5}
                      >
                        Tidak ada detail item.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
