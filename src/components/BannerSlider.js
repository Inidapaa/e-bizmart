"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function BannerSlider() {
  const slides = useMemo(
    () => [
      {
        eyebrow: "Promo Grosir",
        title: "Belanja makin efisien untuk operasional bisnis.",
        desc: "Pilih produk kebutuhan harian dengan harga grosir dan stok yang selalu terpantau.",
        cta: "Lihat katalog",
        href: "/product",
        theme: "dark",
      },
      {
        eyebrow: "Manajemen Stok",
        title: "Kelola stok & transaksi lebih rapi, lebih cepat.",
        desc: "Pantau ketersediaan barang, catat transaksi, dan proses pesanan tanpa ribet.",
        cta: "Masuk admin",
        href: "/admin",
        theme: "light",
      },
      {
        eyebrow: "Untuk Pelanggan",
        title: "Belanja grosir dari mana saja, kapan saja.",
        desc: "Tambah ke keranjang, checkout, dan lacak riwayat transaksi dengan mudah.",
        cta: "Mulai belanja",
        href: "/product",
        theme: "soft",
      },
    ],
    [],
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = slides.length;
  const go = (next) => setIndex((i) => (i + next + total) % total);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [paused, total]);

  return (
    <section
      className="py-10 sm:py-14 md:py-16 border-t border-neutral-200"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Banner promosi"
    >
      <div>
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-500 mb-2">
              Banner
            </p>
            <h2 className="heading-display text-2xl md:text-3xl text-neutral-900">
              Info & promo terbaru dari E-BizMart.
            </h2>
          </div>
        </div>

        <div className="relative overflow-hidden border border-neutral-200 bg-white">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s) => (
              <div key={s.title} className="min-w-full">
                <div
                  className={`p-6 sm:p-10 md:p-12 min-h-[220px] sm:min-h-[260px] flex flex-col justify-between gap-6 ${
                    s.theme === "dark"
                      ? "bg-neutral-900 text-white"
                      : s.theme === "soft"
                        ? "bg-neutral-50 text-neutral-900"
                        : "bg-white text-neutral-900"
                  }`}
                >
                  <div className="max-w-2xl">
                    <p
                      className={`text-[0.65rem] tracking-[0.25em] uppercase ${
                        s.theme === "dark" ? "text-white/80" : "text-neutral-500"
                      }`}
                    >
                      {s.eyebrow}
                    </p>
                    <h3 className="heading-display mt-3 text-xl sm:text-2xl md:text-3xl leading-tight">
                      {s.title}
                    </h3>
                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        s.theme === "dark" ? "text-white/80" : "text-neutral-600"
                      }`}
                    >
                      {s.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <Link
                      href={s.href}
                      className={`inline-flex items-center justify-center px-5 py-3 text-[0.7rem] font-medium tracking-[0.2em] uppercase border transition-colors ${
                        s.theme === "dark"
                          ? "border-white/30 text-white hover:bg-white hover:text-neutral-900"
                          : "border-neutral-900 bg-neutral-900 text-white hover:opacity-90"
                      }`}
                    >
                      {s.cta} →
                    </Link>

                    <div className="flex items-center gap-2">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setIndex(i)}
                          className={`h-2.5 w-2.5 rounded-full border transition-colors ${
                            i === index
                              ? s.theme === "dark"
                                ? "bg-white border-white"
                                : "bg-neutral-900 border-neutral-900"
                              : s.theme === "dark"
                                ? "bg-transparent border-white/40 hover:border-white"
                                : "bg-transparent border-neutral-300 hover:border-neutral-500"
                          }`}
                          aria-label={`Pilih banner ${i + 1}`}
                          aria-current={i === index ? "true" : undefined}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

