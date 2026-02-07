"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      const result = await response.json();

      if (result.ok) {
        const role = result.role === "admin" ? "admin" : "pelanggan";
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(result.data));
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("role", role);
        }
        // Full page redirect agar cookie dari response login ikut terkirim ke server (middleware)
        const goTo =
          role === "admin"
            ? redirectTo === "/"
              ? "/admin"
              : redirectTo
            : redirectTo === "/admin"
            ? "/product"
            : redirectTo;
        window.location.href = goTo;
        return;
      }
      setMessage(result.error || "Login gagal");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12">
      <div className="card p-7 w-full max-w-md">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">
            Login to E-BizMart
          </h2>
          <p className="text-xs text-neutral-500 mb-5">
            Masuk menggunakan akun admin atau pelanggan.
          </p>

          {message && (
            <div className="mb-4 p-3 rounded border border-red-300 bg-red-50 text-xs text-red-700">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-neutral-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-neutral-600">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="font-medium text-neutral-900 underline underline-offset-4"
            >
              Daftar sebagai pelanggan
            </Link>
          </p>
        </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
          <p className="text-neutral-500 text-sm">Memuat...</p>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
