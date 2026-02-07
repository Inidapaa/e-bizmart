"use client";

import { useEffect, useMemo, useState } from "react";

export default function AdminPelanggan() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  async function loadData() {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/pelanggan", { cache: "no-store" });
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
    if (!q) return list;
    return list.filter((p) =>
      [
        p.ID_PELANGGAN,
        p.NAMA_PELANGGAN,
        p.USERNAME_PELANGGAN,
        p.ALAMAT_PELANGGAN,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [list, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const paged = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, safePage]);

  return (
    <div className="space-y-4 sm:space-y-6 min-w-0">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500">
            ADMIN / PELANGGAN
          </p>
          <h1 className="heading-display text-xl sm:text-2xl md:text-3xl text-neutral-900">
            Customer list
          </h1>
          <p className="text-sm text-neutral-600 mt-2">
            Daftar pelanggan. Data tabel tampil di bawah.
          </p>
        </div>
        <div className="card px-3 sm:px-4 py-3 flex items-center gap-3 min-w-0 flex-1 sm:flex-initial">
          <span className="text-xs text-neutral-500 shrink-0">Search</span>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="nama / username / alamat..."
            className="bg-transparent outline-none text-sm text-neutral-900 w-full min-w-0 sm:w-[220px]"
          />
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
            Daftar pelanggan
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
          <table className="w-full border-collapse min-w-[400px]">
            <thead>
              <tr className="text-left text-xs text-neutral-500">
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">ID</th>
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">Nama</th>
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">Username</th>
                <th className="py-2 sm:py-3 pr-2 sm:pr-4">Alamat</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm text-neutral-800">
              {filtered.length === 0 ? (
                <tr>
                  <td className="py-6 text-neutral-500" colSpan={4}>
                    {loading ? "Loading..." : "Belum ada data pelanggan."}
                  </td>
                </tr>
              ) : (
                paged.map((p) => (
                  <tr
                    key={p.ID_PELANGGAN}
                    className="border-t border-neutral-100"
                  >
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4">{p.ID_PELANGGAN}</td>
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4 max-w-[100px] sm:max-w-none truncate">{p.NAMA_PELANGGAN || "-"}</td>
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4">{p.USERNAME_PELANGGAN || "-"}</td>
                    <td className="py-2 sm:py-3 pr-2 sm:pr-4 max-w-[120px] sm:max-w-none truncate">{p.ALAMAT_PELANGGAN || "-"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

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
    </div>
  );
}
