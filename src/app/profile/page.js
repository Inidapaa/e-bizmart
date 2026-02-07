"use client";

import { useEffect, useState } from "react";
import { useConfirm } from "../../context/ConfirmContext";
import Link from "next/link";

export default function ProfilePelanggan() {
  const { showConfirm } = useConfirm();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    NAMA_PELANGGAN: "",
    USERNAME_PELANGGAN: "",
    ALAMAT_PELANGGAN: "",
    PASSWORD_PELANGGAN: "",
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
          NAMA_PELANGGAN: parsed.NAMA_PELANGGAN || "",
          USERNAME_PELANGGAN: parsed.USERNAME_PELANGGAN || "",
          ALAMAT_PELANGGAN: parsed.ALAMAT_PELANGGAN || "",
          PASSWORD_PELANGGAN: "",
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
    if (!user?.ID_PELANGGAN) {
      setMessage("Data user tidak ditemukan.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const payload = {
        ID_PELANGGAN: user.ID_PELANGGAN,
        NAMA_PELANGGAN: form.NAMA_PELANGGAN,
        USERNAME_PELANGGAN: form.USERNAME_PELANGGAN,
        ALAMAT_PELANGGAN: form.ALAMAT_PELANGGAN,
      };
      if (form.PASSWORD_PELANGGAN.trim()) {
        payload.PASSWORD_PELANGGAN = form.PASSWORD_PELANGGAN;
      }
      const res = await fetch("/api/pelanggan", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (result.ok) {
        setMessage("Profil berhasil diperbarui.");
        const newUser = { ...user, ...result.data };
        setUser(newUser);
        setForm((p) => ({ ...p, PASSWORD_PELANGGAN: "" }));
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
      <section className="py-12 sm:py-16 md:py-24 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-500 mb-4">
            Profile
          </p>
          <p className="text-neutral-600">
            Harap login sebagai pelanggan untuk mengakses halaman ini.
          </p>
          <Link
            href="/login"
            className="inline-block mt-6 text-[0.7rem] tracking-[0.2em] uppercase text-neutral-900 hover:underline"
          >
            Login →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="py-8 sm:py-12 md:py-16 min-w-0">
      <section className="mb-8 sm:mb-12 md:mb-16">
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-500">
          Profile
        </p>
        <h1 className="heading-display text-2xl sm:text-3xl md:text-4xl text-neutral-900 mt-2">
          Akun saya
        </h1>
        <p className="mt-3 sm:mt-4 text-neutral-600 max-w-xl text-sm sm:text-base">
          Kelola data pelanggan dan ubah informasi akun Anda di bawah ini.
        </p>
      </section>

      <section className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12 items-start">
        <div className="card-soft p-4 sm:p-6 md:p-8 border border-neutral-200 min-w-0">
          <h2 className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-neutral-600 mb-4">
            Data saat ini
          </h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-[0.65rem] tracking-[0.2em] uppercase text-neutral-500">Nama</dt>
              <dd className="mt-1 text-neutral-900 font-medium">{user.NAMA_PELANGGAN || "—"}</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] tracking-[0.2em] uppercase text-neutral-500">Username</dt>
              <dd className="mt-1 text-neutral-900 font-medium">{user.USERNAME_PELANGGAN || "—"}</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] tracking-[0.2em] uppercase text-neutral-500">Alamat</dt>
              <dd className="mt-1 text-neutral-700">{user.ALAMAT_PELANGGAN || "—"}</dd>
            </div>
          </dl>
          <Link
            href="/profile/history"
            className="inline-block mt-6 text-[0.7rem] tracking-[0.15em] uppercase text-neutral-600 hover:text-neutral-900"
          >
            Lihat riwayat belanja →
          </Link>
        </div>

        <div className="card p-4 sm:p-6 md:p-8 border border-neutral-200 min-w-0">
          <h2 className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-neutral-700 mb-2">
            Ubah / update data pelanggan
          </h2>
          <p className="text-[0.7rem] text-neutral-500 mb-6">
            Isi form di bawah untuk memperbarui nama, username, alamat, atau kata sandi.
          </p>

          {message && (
            <div
              className={`mb-6 p-4 rounded-lg text-sm ${
                message.includes("Error")
                  ? "border border-red-200 bg-red-50 text-red-700"
                  : "border border-neutral-200 bg-neutral-50 text-neutral-800"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[0.7rem] font-medium tracking-[0.1em] uppercase text-neutral-600">
                Nama
              </label>
              <input
                name="NAMA_PELANGGAN"
                value={form.NAMA_PELANGGAN}
                onChange={handleChange}
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                placeholder="Nama lengkap"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[0.7rem] font-medium tracking-[0.1em] uppercase text-neutral-600">
                Username
              </label>
              <input
                name="USERNAME_PELANGGAN"
                value={form.USERNAME_PELANGGAN}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                placeholder="Username untuk login"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[0.7rem] font-medium tracking-[0.1em] uppercase text-neutral-600">
                Alamat
              </label>
              <textarea
                name="ALAMAT_PELANGGAN"
                value={form.ALAMAT_PELANGGAN}
                onChange={handleChange}
                rows={3}
                className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                placeholder="Alamat lengkap"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[0.7rem] font-medium tracking-[0.1em] uppercase text-neutral-600">
                Kata sandi baru <span className="text-neutral-400 font-normal">(kosongkan jika tidak ubah)</span>
              </label>
              <input
                type="password"
                name="PASSWORD_PELANGGAN"
                value={form.PASSWORD_PELANGGAN}
                onChange={handleChange}
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-neutral-900 px-4 py-3 text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-white hover:bg-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Menyimpan..." : "Simpan perubahan"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
