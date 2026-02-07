"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    NAMA_PELANGGAN: "",
    USERNAME_PELANGGAN: "",
    PASSWORD_PELANGGAN: "",
    ALAMAT_PELANGGAN: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (result.ok) {
        router.push("/login");
        return;
      }
      setMessage(result.error || "Registrasi gagal");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12">
      <div className="card p-7 w-full max-w-md">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">
            Daftar akun pelanggan
          </h2>
          <p className="text-xs text-neutral-500 mb-5">
            Isi data berikut untuk membuat akun.
          </p>

          {message && (
            <div className="mb-4 p-3 rounded border border-red-300 bg-red-50 text-xs text-red-700">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700">
                Nama
              </label>
              <input
                type="text"
                name="NAMA_PELANGGAN"
                value={formData.NAMA_PELANGGAN}
                onChange={handleChange}
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700">
                Username
              </label>
              <input
                type="text"
                name="USERNAME_PELANGGAN"
                value={formData.USERNAME_PELANGGAN}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700">
                Password
              </label>
              <input
                type="password"
                name="PASSWORD_PELANGGAN"
                value={formData.PASSWORD_PELANGGAN}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700">
                Alamat
              </label>
              <textarea
                name="ALAMAT_PELANGGAN"
                value={formData.ALAMAT_PELANGGAN}
                onChange={handleChange}
                rows="3"
                placeholder="Alamat lengkap"
                className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Memproses..." : "Daftar"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-neutral-600">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="font-medium text-neutral-900 underline underline-offset-4"
            >
              Login
            </Link>
          </p>
        </div>
    </div>
  );
}
