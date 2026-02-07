"use client";

import { useEffect, useState } from "react";
import { useConfirm } from "../../../context/ConfirmContext";

export default function AdminProfile() {
  const { showConfirm } = useConfirm();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    NAMA_USER: "",
    EMAIL_USER: "",
    USERNAME_USER: "",
    ROLE: "",
    ALAMAT_USER: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("user");
    if (!stored) return;
    let cancelled = false;
    let id;
    try {
      const parsed = JSON.parse(stored);
      id = setTimeout(() => {
        if (cancelled) return;
        setUser(parsed);
        setForm({
          NAMA_USER: parsed.NAMA_USER || "",
          EMAIL_USER: parsed.EMAIL_USER || "",
          USERNAME_USER: parsed.USERNAME_USER || "",
          ROLE: parsed.ROLE || "",
          ALAMAT_USER: parsed.ALAMAT_USER || "",
        });
      }, 0);
    } catch (_) {}
    return () => {
      cancelled = true;
      if (id) clearTimeout(id);
    };
  }, []);

  function handleChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const ok = await showConfirm("Yakin ingin menyimpan perubahan profil?");
    if (!ok) return;
    if (!user?.ID_USER) {
      setMessage("Data user tidak ditemukan.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const payload = { ...form, ID_USER: user.ID_USER };
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (result.ok) {
        setMessage("Profil berhasil diperbarui");
        const newUser = { ...user, ...result.data };
        setUser(newUser);
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(newUser));
        }
      } else setMessage("Error: " + result.error);
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setLoading(false);
  }

  if (!user) {
    return (
      <div className="p-6 card">
        <p className="text-sm text-neutral-500">
          Harap login sebagai admin/petugas.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6 min-w-0">
      <div>
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500">
          ADMIN / PROFILE
        </p>
        <h1 className="heading-display text-xl sm:text-2xl md:text-3xl text-neutral-900">
          Akun Admin / Petugas
        </h1>
        <p className="text-sm text-neutral-600 mt-2">
          Mengubah data akun admin/petugas.
        </p>
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

      <div className="card p-4 sm:p-6 max-w-2xl min-w-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-700">
                Nama
              </label>
              <input
                name="NAMA_USER"
                value={form.NAMA_USER}
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
                value={form.EMAIL_USER}
                onChange={handleChange}
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-700">
                Username
              </label>
              <input
                required
                name="USERNAME_USER"
                value={form.USERNAME_USER}
                onChange={handleChange}
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
              />
            </div>
            <div />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-700">
                Role
              </label>
              <input
                name="ROLE"
                value={form.ROLE}
                onChange={handleChange}
                disabled
                className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-700">
                Alamat
              </label>
              <input
                name="ALAMAT_USER"
                value={form.ALAMAT_USER}
                onChange={handleChange}
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Memproses..." : "Simpan perubahan"}
          </button>
        </form>
      </div>
    </div>
  );
}
