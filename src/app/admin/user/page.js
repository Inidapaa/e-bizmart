"use client";

import { useEffect, useMemo, useState } from "react";
import { useConfirm } from "../../../context/ConfirmContext";

const ROLE_OPTIONS = ["admin", "Owner", ""];

export default function AdminUser() {
  const { showConfirm } = useConfirm();
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("ALL");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const [formData, setFormData] = useState({
    NAMA_USER: "",
    EMAIL_USER: "",
    USERNAME_USER: "",
    PASSWORD_USER: "",
    ROLE: "",
    ALAMAT_USER: "",
  });
  const [editId, setEditId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showForm, setShowForm] = useState(false);

  async function loadData() {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/user", { cache: "no-store" });
      const result = await res.json();
      if (result.ok) setUserList(result.data || []);
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

  function resetForm() {
    setFormData({
      NAMA_USER: "",
      EMAIL_USER: "",
      USERNAME_USER: "",
      PASSWORD_USER: "",
      ROLE: "",
      ALAMAT_USER: "",
    });
    setEditId("");
    setEditMode(false);
    setShowForm(false);
  }

  function handleChange(e) {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleEdit(u) {
    setEditMode(true);
    setEditId(String(u.ID_USER));
    setFormData({
      NAMA_USER: u.NAMA_USER || "",
      EMAIL_USER: u.EMAIL_USER || "",
      USERNAME_USER: u.USERNAME_USER || "",
      PASSWORD_USER: "",
      ROLE: (u.ROLE || "").trim(),
      ALAMAT_USER: u.ALAMAT_USER || "",
    });
    setShowForm(true);
    setMessage("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const msg = editMode ? "Yakin ingin menyimpan perubahan user ini?" : "Yakin ingin menambah user baru?";
    const ok = await showConfirm(msg);
    if (!ok) return;
    setLoading(true);
    setMessage("");
    try {
      const payload = { ...formData };
      if (editMode) payload.ID_USER = editId;

      // Saat update: kalau password kosong, jangan kirim (biar tidak jadi null/empty)
      if (editMode && !payload.PASSWORD_USER) delete payload.PASSWORD_USER;

      const res = await fetch("/api/user", {
        method: editMode ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (result.ok) {
        setMessage(
          editMode ? "User berhasil diupdate" : "User berhasil dibuat",
        );
        resetForm();
        loadData();
      } else setMessage("Error: " + result.error);
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setLoading(false);
  }

  async function handleDelete(id) {
    const ok = await showConfirm("Yakin mau hapus user ini?");
    if (!ok) return;
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/user", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ID_USER: id }),
      });
      const result = await res.json();
      if (result.ok) {
        setMessage("User berhasil dihapus");
        loadData();
      } else setMessage("Error: " + result.error);
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setLoading(false);
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (userList || [])
      .filter((u) => {
        if (roleFilter === "ALL") return true;
        return (u.ROLE || "").trim() === roleFilter;
      })
      .filter((u) => {
        if (!q) return true;
        const hay = [
          u.ID_USER,
          u.NAMA_USER,
          u.EMAIL_USER,
          u.USERNAME_USER,
          u.ROLE,
          u.ALAMAT_USER,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      });
  }, [query, userList, roleFilter]);

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
            ADMIN / USER
          </p>
          <h1 className="heading-display text-xl sm:text-2xl md:text-3xl text-neutral-900">
            User management
          </h1>
          <p className="text-sm text-neutral-600 mt-2">
            Daftar user. Gunakan tombol untuk tambah atau edit.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => { setShowForm(true); setEditMode(false); setEditId(""); setFormData({ NAMA_USER: "", EMAIL_USER: "", USERNAME_USER: "", PASSWORD_USER: "", ROLE: "", ALAMAT_USER: "" }); setMessage(""); }}
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors"
          >
            + Tambah User
          </button>
          <div className="card px-3 sm:px-4 py-3 flex items-center gap-3 min-w-0 flex-1 sm:flex-initial">
            <span className="text-xs text-neutral-500 shrink-0">Search</span>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="nama / username / role..."
              className="bg-transparent outline-none text-sm text-neutral-900 w-full min-w-0 sm:w-[220px]"
            />
          </div>
          <div className="card px-3 sm:px-4 py-3 flex items-center gap-3 min-w-0 flex-1 sm:flex-initial">
            <span className="text-xs text-neutral-500 shrink-0">Filter</span>
            <select
              value={roleFilter}
              onChange={(e) => {
                setRoleFilter(e.target.value);
                setPage(1);
              }}
              className="bg-transparent outline-none text-sm text-neutral-900 w-full min-w-0 sm:w-[220px]"
            >
              <option value="ALL">Semua role</option>
              {ROLE_OPTIONS.map((r) => (
                <option key={String(r)} value={r}>
                  {r === "" ? "(kosong)" : r}
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

      {showForm && (
        <section className="card p-4 sm:p-6 w-full min-w-0">
          <div className="flex items-center justify-between gap-4 mb-5">
            <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-700">
              {editMode ? "Edit user" : "Create user"}
            </h2>
            <button
              type="button"
              onClick={resetForm}
              className="text-xs font-medium text-neutral-700 underline underline-offset-4"
            >
              Batal
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  Nama
                </label>
                <input
                  name="NAMA_USER"
                  value={formData.NAMA_USER}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  Email
                </label>
                <input
                  name="EMAIL_USER"
                  value={formData.EMAIL_USER}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  Username
                </label>
                <input
                  name="USERNAME_USER"
                  value={formData.USERNAME_USER}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  Password {editMode && "(kosongkan jika tidak diubah)"}
                </label>
                <input
                  type="password"
                  name="PASSWORD_USER"
                  value={formData.PASSWORD_USER}
                  onChange={handleChange}
                  required={!editMode}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-700">
                  Role
                </label>
                <select
                  name="ROLE"
                  value={formData.ROLE}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                >
                  <option value="">(kosong)</option>
                  {ROLE_OPTIONS.filter(Boolean).map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5 md:col-span-2 lg:col-span-1">
                <label className="text-xs font-medium text-neutral-700">
                  Alamat
                </label>
                <textarea
                  name="ALAMAT_USER"
                  value={formData.ALAMAT_USER}
                  onChange={handleChange}
                  rows={3}
                  className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
            </div>

            <button
              disabled={loading}
              className="w-full rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors"
              type="submit"
            >
              {loading ? "Memproses..." : editMode ? "Update" : "Create"}
            </button>
          </form>
        </section>
      )}

      <section className="card p-4 sm:p-6 overflow-hidden min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4 sm:mb-5">
          <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-700">
            Daftar user
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
            <table className="w-full border-collapse min-w-[520px]">
              <thead>
                <tr className="text-left text-xs text-neutral-500">
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">ID</th>
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Nama</th>
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Username</th>
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Role</th>
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Email</th>
                  <th className="py-2 sm:py-3 pr-2 sm:pr-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm text-neutral-800">
                {filtered.length === 0 ? (
                  <tr>
                    <td className="py-6 text-neutral-500" colSpan={6}>
                      {loading ? "Loading..." : "Belum ada data user."}
                    </td>
                  </tr>
                ) : (
                  paged.map((u) => (
                    <tr key={u.ID_USER} className="border-t border-neutral-100">
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4">{u.ID_USER}</td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4 max-w-[100px] sm:max-w-none truncate">{u.NAMA_USER || "-"}</td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4">{u.USERNAME_USER || "-"}</td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4">
                        <span className="badge-pill pill-muted">
                          {u.ROLE || "—"}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4 max-w-[100px] sm:max-w-none truncate">{u.EMAIL_USER || "-"}</td>
                      <td className="py-2 sm:py-3 pr-2 sm:pr-4">
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => handleEdit(u)}
                            className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-800 hover:bg-neutral-50"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(u.ID_USER)}
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
