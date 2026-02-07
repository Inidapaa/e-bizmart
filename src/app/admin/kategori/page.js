"use client";

import { useState, useEffect, useMemo } from "react";
import { useConfirm } from "../../../context/ConfirmContext";

export default function AdminKategori() {
  const { showConfirm } = useConfirm();
  const [kategoriList, setKategoriList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ NAMA_KATEGORI: "" });
  const [editIdKategori, setEditIdKategori] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("ID_DESC");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filteredKategori = useMemo(() => {
    const q = query.trim().toLowerCase();
    let arr = [...(kategoriList || [])];
    if (q) {
      arr = arr.filter((k) =>
        [k.ID_KATEGORI, k.NAMA_KATEGORI].filter(Boolean).join(" ").toLowerCase().includes(q)
      );
    }
    if (sort === "NAME_ASC") {
      arr.sort((a, b) => String(a.NAMA_KATEGORI || "").localeCompare(String(b.NAMA_KATEGORI || "")));
    } else if (sort === "NAME_DESC") {
      arr.sort((a, b) => String(b.NAMA_KATEGORI || "").localeCompare(String(a.NAMA_KATEGORI || "")));
    } else if (sort === "ID_ASC") {
      arr.sort((a, b) => Number(a.ID_KATEGORI || 0) - Number(b.ID_KATEGORI || 0));
    } else {
      arr.sort((a, b) => Number(b.ID_KATEGORI || 0) - Number(a.ID_KATEGORI || 0));
    }
    return arr;
  }, [kategoriList, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredKategori.length / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const pagedKategori = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filteredKategori.slice(start, start + pageSize);
  }, [filteredKategori, safePage]);

  async function loadData() {
    setLoading(true);
    try {
      const response = await fetch("/api/kategori");
      const result = await response.json();
      if (result.ok) setKategoriList(result.data);
      else setMessage("Error: " + result.error);
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch("/api/kategori");
        const result = await response.json();
        if (result.ok) setKategoriList(result.data);
        else setMessage("Error: " + result.error);
      } catch (error) {
        setMessage("Error: " + error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function resetForm() {
    setFormData({ NAMA_KATEGORI: "" });
    setEditIdKategori("");
    setEditMode(false);
    setShowForm(false);
    setMessage("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const ok = await showConfirm("Yakin ingin menambah kategori ini?");
    if (!ok) return;
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/kategori", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.ok) {
        setMessage("Kategori berhasil ditambahkan");
        resetForm();
        loadData();
      } else setMessage("Error: " + result.error);
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setLoading(false);
  }

  function handleEdit(k) {
    setFormData({ NAMA_KATEGORI: k.NAMA_KATEGORI || "" });
    setEditIdKategori(k.ID_KATEGORI.toString());
    setEditMode(true);
    setShowForm(true);
    setMessage("");
  }

  async function handleUpdate(e) {
    e.preventDefault();
    const ok = await showConfirm("Yakin ingin menyimpan perubahan kategori ini?");
    if (!ok) return;
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/kategori", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ID_KATEGORI: editIdKategori,
          NAMA_KATEGORI: formData.NAMA_KATEGORI,
        }),
      });
      const result = await response.json();
      if (result.ok) {
        setMessage("Kategori berhasil diupdate");
        resetForm();
        loadData();
      } else setMessage("Error: " + result.error);
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setLoading(false);
  }

  async function handleDelete(idKategori) {
    const ok = await showConfirm("Yakin mau hapus kategori ini?");
    if (!ok) return;
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/kategori", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ID_KATEGORI: Number(idKategori) }),
      });
      const result = await response.json();
      if (result.ok) {
        setMessage("Kategori berhasil dihapus");
        loadData();
      } else setMessage("Error: " + result.error);
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setLoading(false);
  }

  return (
    <div className="space-y-4 sm:space-y-6 min-w-0">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500">
            ADMIN / KATEGORI
          </p>
          <h1 className="heading-display text-xl sm:text-2xl md:text-3xl text-neutral-900">
            Category management
          </h1>
          <p className="text-sm text-neutral-600 mt-2">
            Daftar kategori. Gunakan tombol untuk tambah atau edit.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => { setShowForm(true); setEditMode(false); setEditIdKategori(""); setFormData({ NAMA_KATEGORI: "" }); setMessage(""); }}
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors"
          >
            + Tambah Kategori
          </button>
          <button
            type="button"
            onClick={loadData}
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-50 transition-colors"
          >
            Refresh
          </button>
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

      {showForm && (
        <section className="card p-4 sm:p-6 w-full min-w-0">
          <div className="flex items-center justify-between gap-4 mb-5">
            <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-700">
              {editMode ? "Edit kategori" : "Tambah kategori"}
            </h2>
            <button
              type="button"
              onClick={resetForm}
              className="text-xs font-medium text-neutral-700 underline underline-offset-4"
            >
              Batal
            </button>
          </div>

          <form
            onSubmit={editMode ? handleUpdate : handleSubmit}
            className="space-y-4"
          >
            <div className="max-w-xl">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  Nama kategori
                </label>
                <input
                  type="text"
                  name="NAMA_KATEGORI"
                  value={formData.NAMA_KATEGORI}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Memproses..." : editMode ? "Update" : "Tambah"}
            </button>
          </form>
        </section>
      )}

      <section className="card p-4 sm:p-6 overflow-hidden min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4 sm:mb-5">
          <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-700">
            Daftar kategori
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center w-full sm:w-auto">
            <div className="card-soft px-3 py-2 flex items-center gap-2 min-w-0 flex-1 sm:flex-initial">
              <span className="text-[0.65rem] tracking-[0.15em] uppercase text-neutral-500 shrink-0">
                Search
              </span>
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="ID / nama kategori..."
                className="bg-transparent outline-none text-sm text-neutral-900 w-full min-w-0 sm:w-[220px]"
              />
            </div>
            <div className="card-soft px-3 py-2 flex items-center gap-2 min-w-0 flex-1 sm:flex-initial">
              <span className="text-[0.65rem] tracking-[0.15em] uppercase text-neutral-500 shrink-0">
                Sort
              </span>
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setPage(1);
                }}
                className="bg-transparent outline-none text-sm text-neutral-900 w-full min-w-0 sm:w-[180px]"
              >
                <option value="ID_DESC">ID (terbaru)</option>
                <option value="ID_ASC">ID (terlama)</option>
                <option value="NAME_ASC">Nama A–Z</option>
                <option value="NAME_DESC">Nama Z–A</option>
              </select>
            </div>
            <button
              type="button"
              onClick={loadData}
              className="text-xs font-medium text-neutral-700 underline underline-offset-4"
            >
              Refresh
            </button>
            {loading && (
              <span className="text-xs text-neutral-500">Loading...</span>
            )}
          </div>
        </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full border-collapse min-w-[280px]">
              <thead>
                <tr className="text-left text-xs text-neutral-500">
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">ID</th>
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Nama</th>
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm text-neutral-800">
                {filteredKategori.length === 0 ? (
                  <tr>
                    <td className="py-6 text-neutral-500" colSpan={3}>
                      {loading ? "Loading..." : "Belum ada data kategori."}
                    </td>
                  </tr>
                ) : (
                  pagedKategori.map((k) => (
                    <tr
                      key={k.ID_KATEGORI}
                      className="border-t border-neutral-100"
                    >
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4">{k.ID_KATEGORI}</td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4">
                        <span className="font-medium">
                          {k.NAMA_KATEGORI || "-"}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4">
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => handleEdit(k)}
                            className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-800 hover:bg-neutral-50"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(k.ID_KATEGORI)}
                            className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-700 hover:bg-red-100"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {filteredKategori.length > 0 && (
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs text-neutral-500">
                Menampilkan{" "}
                <span className="font-medium text-neutral-800">
                  {(safePage - 1) * pageSize + 1}
                </span>
                {" - "}
                <span className="font-medium text-neutral-800">
                  {Math.min(safePage * pageSize, filteredKategori.length)}
                </span>{" "}
                dari{" "}
                <span className="font-medium text-neutral-800">
                  {filteredKategori.length}
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
