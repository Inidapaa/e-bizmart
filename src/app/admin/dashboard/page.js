"use client";

import { useEffect, useMemo, useState } from "react";

function formatCurrency(n) {
  return "Rp " + Number(n || 0).toLocaleString("id-ID");
}

const STATUS_CONFIG = [
  { key: "Selesai", label: "Selesai", color: "#059669", bg: "bg-emerald-600" },
  {
    key: "Dalam_proses",
    label: "Dalam proses",
    color: "#d97706",
    bg: "bg-amber-600",
  },
  {
    key: "Belum_bayar",
    label: "Belum bayar",
    color: "#737373",
    bg: "bg-neutral-500",
  },
  { key: "Gagal", label: "Gagal", color: "#dc2626", bg: "bg-red-600" },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      setMessage("");
      try {
        const res = await fetch("/api/penjualan/stats", { cache: "no-store" });
        const data = await res.json();
        if (data.ok) setStats(data.data);
        else setMessage("Error: " + data.error);
      } catch (error) {
        setMessage("Error: " + error.message);
      }
      setLoading(false);
    }
    load();
  }, []);

  const maxValue = useMemo(() => {
    if (!stats?.last7Days?.length) return 0;
    return Math.max(...stats.last7Days.map((d) => d.total || 0), 1);
  }, [stats]);

  const statusChartData = useMemo(() => {
    if (!stats?.statusCounts) return [];
    const total =
      Object.values(stats.statusCounts).reduce((a, b) => a + b, 0) || 1;
    let offset = 0;
    return STATUS_CONFIG.map((s) => {
      const count = stats.statusCounts[s.key] ?? 0;
      const pct = total ? Math.round((count / total) * 100) : 0;
      const segment = {
        ...s,
        count,
        pct,
        offset: (offset / total) * 100,
        length: (count / total) * 100,
      };
      offset += count;
      return segment;
    }).filter((s) => s.count > 0);
  }, [stats]);

  const totalOrdersForPct = useMemo(() => {
    if (!stats?.statusCounts) return 0;
    const total = Object.values(stats.statusCounts).reduce((a, b) => a + b, 0);
    const selesai = stats.statusCounts.Selesai ?? 0;
    return total ? Math.round((selesai / total) * 100) : 0;
  }, [stats]);

  return (
    <div className="space-y-4 sm:space-y-6 min-w-0">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500">
            ADMIN / DASHBOARD
          </p>
          <h1 className="heading-display text-xl sm:text-2xl md:text-3xl text-neutral-900">
            Transaction overview
          </h1>
          <p className="text-sm text-neutral-600 mt-2">
            Plan, prioritaskan, dan pantau penjualan dengan ringkas.
          </p>
        </div>
        {loading && (
          <span className="text-xs text-neutral-500">Loading...</span>
        )}
      </div>

      {message && (
        <div className="card p-4 text-sm border border-red-200 bg-red-50 text-red-700">
          {message}
        </div>
      )}

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <div className="card p-4 sm:p-5 bg-neutral-900 text-white border-neutral-900">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500">
            Total Revenue
          </p>
          <p className="text-xl sm:text-2xl font-semibold mt-2 text-neutral-900">
            {formatCurrency(stats?.totalRevenue || 0)}
          </p>
          <p className="text-xs text-neutral-400 mt-1">Seluruh transaksi</p>
        </div>
        <div className="card p-4 sm:p-5">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500">
            Total Orders
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-neutral-900 mt-2">
            {stats?.totalOrders ?? 0}
          </p>
          <p className="text-xs text-neutral-500 mt-1">Jumlah transaksi</p>
        </div>
        <div className="card p-4 sm:p-5">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500">
            Selesai
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-emerald-600 mt-2">
            {stats?.statusCounts?.Selesai ?? 0}
          </p>
          <p className="text-xs text-neutral-500 mt-1">Transaksi selesai</p>
        </div>
        <div className="card p-4 sm:p-5">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500">
            Dalam proses
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-neutral-700 mt-2">
            {stats?.statusCounts?.["Dalam_proses"] ??
              stats?.statusCounts?.["Dalam proses"] ??
              0}
          </p>
          <p className="text-xs text-neutral-500 mt-1">Sedang diproses</p>
        </div>
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[1.2fr,1fr]">
        {/* Bar chart - Penjualan 7 hari terakhir */}
        <div className="card p-4 sm:p-6 min-w-0 overflow-hidden">
          <div className="mb-4">
            <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-700">
              Penjualan 7 Hari Terakhir
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Revenue per hari (Rp)
            </p>
          </div>
          {!stats?.last7Days?.length ||
          !maxValue ||
          stats.last7Days.every((d) => !d.total) ? (
            <p className="text-sm text-neutral-500 py-12 text-center">
              Belum ada data penjualan 7 hari terakhir.
            </p>
          ) : (
            <div className="grid grid-cols-7 gap-3 items-end min-h-[200px]">
              {(stats?.last7Days || []).map((d) => {
                const height = maxValue
                  ? Math.max((d.total / maxValue) * 160, 8)
                  : 8;
                return (
                  <div key={d.key} className="flex flex-col items-center gap-2">
                    <span
                      className="text-[0.65rem] text-neutral-500 font-medium"
                      title={formatCurrency(d.total)}
                    >
                      {d.total > 0 ? Math.round((d.total / maxValue) * 100) : 0}
                      %
                    </span>
                    <div
                      className="w-full rounded-t-md bg-neutral-800 transition-all duration-300 hover:bg-neutral-700"
                      style={{ height: `${height}px` }}
                      title={`${d.label}: ${formatCurrency(d.total)}`}
                    />
                    <div className="text-center">
                      <span className="text-xs font-medium text-neutral-700">
                        {d.label}
                      </span>
                      <div className="text-[0.65rem] text-neutral-500">
                        {d.total ? formatCurrency(d.total) : "0"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Donut chart - Status transaksi */}
        <div className="card p-4 sm:p-6 min-w-0">
          <div className="mb-4">
            <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-700">
              Status Transaksi
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Distribusi status order
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="relative shrink-0">
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                className="-rotate-90"
              >
                {statusChartData.length === 0 ? (
                  <circle
                    cx="80"
                    cy="80"
                    r="56"
                    fill="none"
                    stroke="#e5e5e5"
                    strokeWidth="28"
                  />
                ) : (
                  statusChartData.map((seg) => {
                    const circumference = 2 * Math.PI * 56;
                    const segmentLen = (seg.length / 100) * circumference;
                    const gap = circumference - segmentLen;
                    const offset = (seg.offset / 100) * circumference;
                    return (
                      <circle
                        key={seg.key}
                        cx="80"
                        cy="80"
                        r="56"
                        fill="none"
                        stroke={seg.color}
                        strokeWidth="28"
                        strokeDasharray={`${segmentLen} ${gap}`}
                        strokeDashoffset={-offset}
                        strokeLinecap="round"
                      />
                    );
                  })
                )}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-2xl font-semibold text-neutral-900">
                    {totalOrdersForPct}%
                  </span>
                  <div className="text-[0.65rem] uppercase tracking-wider text-neutral-500">
                    Selesai
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0 space-y-2">
              {STATUS_CONFIG.map((s) => {
                const count = stats?.statusCounts?.[s.key] ?? 0;
                const total = stats
                  ? Object.values(stats.statusCounts || {}).reduce(
                      (a, b) => a + b,
                      0,
                    )
                  : 0;
                const pct = total ? Math.round((count / total) * 100) : 0;
                return (
                  <div
                    key={s.key}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="shrink-0 w-3 h-3 rounded-full"
                        style={{ backgroundColor: s.color }}
                      />
                      <span className="text-xs font-medium text-neutral-700 truncate">
                        {s.label}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-500 shrink-0">
                      {count} ({pct}%)
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          {statusChartData.length === 0 && (
            <p className="text-sm text-neutral-500 mt-4 text-center">
              Belum ada data transaksi.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
