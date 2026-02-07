"use client";

import { useEffect, useMemo, useState } from "react";
import { useConfirm } from "../../context/ConfirmContext";

export default function AdminBarang() {
  const { showConfirm } = useConfirm();
  const [barangList, setBarangList] = useState([]);
  const [kategoriList, setKategoriList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    NAMA_BARANG: "",
    GAMBAR_BARANG: "",
    HARGA_BARANG: "",
    STOK_BARANG: "",
    EXP_BARANG: "",
    KETERANGAN_BARANG: "",
    ID_KATEGORI: "",
  });
  const [uploading, setUploading] = useState(false);
  const [editKodeBarang, setEditKodeBarang] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  const [kategoriFilter, setKategoriFilter] = useState("ALL");
  const [stokFilter, setStokFilter] = useState("ALL");
  const [page, setPage] = useState(1);

  const pageSize = 10;

  const filteredBarang = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (barangList || [])
      .filter((b) => {
        if (kategoriFilter === "ALL") return true;
        return String(b.ID_KATEGORI ?? "") === String(kategoriFilter);
      })
      .filter((b) => {
        if (stokFilter === "ALL") return true;
        const stok = Number(b.STOK_BARANG ?? 0);
        if (stokFilter === "IN") return stok > 0;
        if (stokFilter === "OUT") return stok <= 0;
        return true;
      })
      .filter((b) => {
        if (!q) return true;
        return [
          b.KODE_BARANG,
          b.NAMA_BARANG,
          b.kategori?.NAMA_KATEGORI,
          b.KETERANGAN_BARANG,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q);
      });
  }, [barangList, kategoriFilter, stokFilter, query]);

  const totalPages = Math.max(1, Math.ceil(filteredBarang.length / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const pagedBarang = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filteredBarang.slice(start, start + pageSize);
  }, [filteredBarang, safePage]);

  // ambil data barang dari API
  async function loadData() {
    setLoading(true);
    try {
      const response = await fetch("/api/barang");
      const result = await response.json();
      if (result.ok) {
        setBarangList(result.data);
      } else {
        setMessage("Error: " + result.error);
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setLoading(false);
  }

  // load data saat pertama kali halaman dibuka
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [resBarang, resKategori] = await Promise.all([
          fetch("/api/barang"),
          fetch("/api/kategori"),
        ]);
        const dataBarang = await resBarang.json();
        const dataKategori = await resKategori.json();
        if (dataBarang.ok) setBarangList(dataBarang.data);
        else setMessage("Error: " + dataBarang.error);
        if (dataKategori.ok) setKategoriList(dataKategori.data);
      } catch (error) {
        setMessage("Error: " + error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  // handle input form
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // reset form
  function resetForm() {
    setFormData({
      NAMA_BARANG: "",
      GAMBAR_BARANG: "",
      HARGA_BARANG: "",
      STOK_BARANG: "",
      EXP_BARANG: "",
      KETERANGAN_BARANG: "",
      ID_KATEGORI: "",
    });
    setEditKodeBarang("");
    setEditMode(false);
    setShowForm(false);
    setMessage("");
  }

  // upload gambar
  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) {
      setMessage("Pilih file gambar (jpg, png, dll)");
      return;
    }
    setUploading(true);
    setMessage("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: fd,
      });
      const result = await response.json();
      if (result.ok) {
        setFormData((prev) => ({ ...prev, GAMBAR_BARANG: result.filename }));
      } else {
        setMessage("Error: " + (result.error || "Upload gagal"));
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setUploading(false);
  }

  // tambah barang baru
  async function handleSubmit(e) {
    e.preventDefault();
    const ok = await showConfirm("Yakin ingin menambah barang ini?");
    if (!ok) return;
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/barang", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.ok) {
        setMessage("Barang berhasil ditambahkan");
        resetForm();
        loadData();
      } else {
        setMessage("Error: " + result.error);
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setLoading(false);
  }

  // edit barang
  function handleEdit(barang) {
    const expDate = barang.EXP_BARANG
      ? new Date(barang.EXP_BARANG).toISOString().slice(0, 10)
      : "";
    setFormData({
      NAMA_BARANG: barang.NAMA_BARANG || "",
      GAMBAR_BARANG: barang.GAMBAR_BARANG || "",
      HARGA_BARANG: barang.HARGA_BARANG ? barang.HARGA_BARANG.toString() : "",
      STOK_BARANG: barang.STOK_BARANG ? barang.STOK_BARANG.toString() : "",
      EXP_BARANG: expDate,
      KETERANGAN_BARANG: barang.KETERANGAN_BARANG || "",
      ID_KATEGORI: barang.ID_KATEGORI ? barang.ID_KATEGORI.toString() : "",
    });
    setEditKodeBarang(barang.KODE_BARANG.toString());
    setEditMode(true);
    setShowForm(true);
    setMessage("");
  }

  function gambarSrc(val) {
    if (!val) return null;
    if (val.startsWith("http")) return val;
    return "/uploads/" + val;
  }

  // update barang
  async function handleUpdate(e) {
    e.preventDefault();
    const ok = await showConfirm("Yakin ingin menyimpan perubahan barang ini?");
    if (!ok) return;
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/barang", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          KODE_BARANG: editKodeBarang,
        }),
      });

      const result = await response.json();
      if (result.ok) {
        setMessage("Barang berhasil diupdate");
        resetForm();
        loadData();
      } else {
        setMessage("Error: " + result.error);
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setLoading(false);
  }

  // hapus barang
  async function handleDelete(kodeBarang) {
    const ok = await showConfirm("Yakin mau hapus barang ini?");
    if (!ok) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/barang", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ KODE_BARANG: kodeBarang }),
      });

      const result = await response.json();
      if (result.ok) {
        setMessage("Barang berhasil dihapus");
        loadData();
      } else {
        setMessage("Error: " + result.error);
      }
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
            ADMIN / BARANG
          </p>
          <h1 className="heading-display text-xl sm:text-2xl md:text-3xl text-neutral-900">
            Product inventory
          </h1>
          <p className="text-sm text-neutral-600 mt-2">
            Daftar barang. Gunakan tombol untuk tambah atau edit.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => { setShowForm(true); setEditMode(false); setEditKodeBarang(""); setFormData({ NAMA_BARANG: "", GAMBAR_BARANG: "", HARGA_BARANG: "", STOK_BARANG: "", EXP_BARANG: "", KETERANGAN_BARANG: "", ID_KATEGORI: "" }); setMessage(""); }}
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors"
          >
            + Tambah Barang
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
              {editMode ? "Edit barang" : "Tambah barang"}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-1.5 md:col-span-2 lg:col-span-1">
                <label className="text-xs font-medium text-neutral-700">
                  Nama barang
                </label>
                <input
                  required
                  type="text"
                  name="NAMA_BARANG"
                  value={formData.NAMA_BARANG}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  Harga
                </label>
                <input
                  required
                  type="number"
                  name="HARGA_BARANG"
                  value={formData.HARGA_BARANG}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  Stok
                </label>
                <input
                  required
                  type="number"
                  name="STOK_BARANG"
                  value={formData.STOK_BARANG}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  Exp (opsional)
                </label>
                <input
                  type="date"
                  name="EXP_BARANG"
                  value={formData.EXP_BARANG}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div className="space-y-1.5 md:col-span-2 lg:col-span-1">
                <label className="text-xs font-medium text-neutral-700">
                  Kategori
                </label>
                <select
                  required
                  name="ID_KATEGORI"
                  value={formData.ID_KATEGORI}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                >
                  <option value="">Pilih kategori</option>
                  {kategoriList.map((k) => (
                    <option key={k.ID_KATEGORI} value={k.ID_KATEGORI}>
                      {k.NAMA_KATEGORI || "-"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  Keterangan
                </label>
                <textarea
                  required
                  name="KETERANGAN_BARANG"
                  value={formData.KETERANGAN_BARANG}
                  onChange={handleChange}
                  rows={3}
                  className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-700">
                  Gambar
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={uploading}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 file:mr-3 file:rounded-full file:border-0 file:bg-neutral-900 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-neutral-800"
                />
                {formData.GAMBAR_BARANG && (
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={gambarSrc(formData.GAMBAR_BARANG)}
                      alt="Preview"
                      className="h-16 w-16 object-cover rounded-xl border border-neutral-200"
                    />
                    <div className="min-w-0">
                      <p className="text-xs text-neutral-600 truncate">
                        {formData.GAMBAR_BARANG}
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((p) => ({ ...p, GAMBAR_BARANG: "" }))
                        }
                        className="text-xs font-medium text-red-700 underline underline-offset-4"
                      >
                        Hapus gambar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Memproses..." : editMode ? "Update" : "Tambah"}
            </button>
            </div>
          </form>
        </section>
      )}

      <section className="card p-4 sm:p-6 overflow-hidden min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4 sm:mb-5">
            <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-700">
              Daftar barang
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
                  placeholder="kode / nama / kategori..."
                  className="bg-transparent outline-none text-sm text-neutral-900 w-full min-w-0 sm:w-[220px]"
                />
              </div>
              <div className="card-soft px-3 py-2 flex items-center gap-2 min-w-0 flex-1 sm:flex-initial">
                <span className="text-[0.65rem] tracking-[0.15em] uppercase text-neutral-500 shrink-0">
                  Filter
                </span>
                <select
                  value={kategoriFilter}
                  onChange={(e) => {
                    setKategoriFilter(e.target.value);
                    setPage(1);
                  }}
                  className="bg-transparent outline-none text-sm text-neutral-900 w-full min-w-0 sm:w-[220px]"
                >
                  <option value="ALL">Semua kategori</option>
                  {kategoriList.map((k) => (
                    <option key={k.ID_KATEGORI} value={k.ID_KATEGORI}>
                      {k.NAMA_KATEGORI || "-"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="card-soft px-3 py-2 flex items-center gap-2 min-w-0 flex-1 sm:flex-initial">
                <span className="text-[0.65rem] tracking-[0.15em] uppercase text-neutral-500 shrink-0">
                  Stok
                </span>
                <select
                  value={stokFilter}
                  onChange={(e) => {
                    setStokFilter(e.target.value);
                    setPage(1);
                  }}
                  className="bg-transparent outline-none text-sm text-neutral-900 w-full min-w-0 sm:w-[160px]"
                >
                  <option value="ALL">Semua</option>
                  <option value="IN">Tersedia</option>
                  <option value="OUT">Habis</option>
                </select>
              </div>
              {loading && (
                <span className="text-xs text-neutral-500">Loading...</span>
              )}
            </div>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr className="text-left text-xs text-neutral-500">
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Kode</th>
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Gambar</th>
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Nama</th>
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Harga</th>
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Stok</th>
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Kategori</th>
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm text-neutral-800">
                {filteredBarang.length === 0 ? (
                  <tr>
                    <td className="py-6 text-neutral-500" colSpan={7}>
                      Belum ada data barang.
                    </td>
                  </tr>
                ) : (
                  pagedBarang.map((barang) => (
                    <tr
                      key={barang.KODE_BARANG}
                      className="border-t border-neutral-100"
                    >
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4">{barang.KODE_BARANG}</td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4">
                        {barang.GAMBAR_BARANG ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={gambarSrc(barang.GAMBAR_BARANG)}
                            alt={barang.NAMA_BARANG || ""}
                            className="h-10 w-10 object-cover rounded-lg border border-neutral-200"
                          />
                        ) : (
                          <span className="text-neutral-400">—</span>
                        )}
                      </td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4 max-w-[120px] sm:max-w-[340px]">
                        <span className="font-medium block truncate">
                          {barang.NAMA_BARANG || "-"}
                        </span>
                        {barang.KETERANGAN_BARANG && (
                          <p className="text-[0.65rem] sm:text-xs text-neutral-500 line-clamp-1 mt-0.5">
                            {barang.KETERANGAN_BARANG}
                          </p>
                        )}
                      </td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4 whitespace-nowrap">
                        {barang.HARGA_BARANG != null
                          ? "Rp " + barang.HARGA_BARANG.toLocaleString("id-ID")
                          : "—"}
                      </td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4">{barang.STOK_BARANG != null ? barang.STOK_BARANG : "—"}</td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4">
                        <span className="badge-pill pill-muted">
                          {barang.kategori?.NAMA_KATEGORI || "—"}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4">
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          <button
                            type="button"
                            onClick={() => handleEdit(barang)}
                            className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-800 hover:bg-neutral-50"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(barang.KODE_BARANG)}
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

          {filteredBarang.length > 0 && (
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs text-neutral-500">
                Menampilkan{" "}
                <span className="font-medium text-neutral-800">
                  {(safePage - 1) * pageSize + 1}
                </span>
                {" - "}
                <span className="font-medium text-neutral-800">
                  {Math.min(safePage * pageSize, filteredBarang.length)}
                </span>{" "}
                dari{" "}
                <span className="font-medium text-neutral-800">
                  {filteredBarang.length}
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
