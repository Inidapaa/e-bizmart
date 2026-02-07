import Link from "next/link";
import { prisma } from "../lib/prisma";
import ProductCard from "../components/ProductCard";
import BannerSlider from "../components/BannerSlider";

export const runtime = "nodejs";

export default async function Home() {
  const barangTerbaru = await prisma.barang.findMany({
    take: 4,
    orderBy: { KODE_BARANG: "desc" },
    include: { kategori: true },
  });

  return (
    <div>
      {/* Hero */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] bg-neutral-900 flex flex-col justify-end">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.7)_100%)]" />

        <div className="relative z-10 px-4 pb-10 pt-20 sm:px-6 sm:pb-12 sm:pt-24 md:px-12 md:pb-16 md:pt-32 max-w-4xl">
          <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
            Solusi Digital
            <br />
            untuk Bisnis Grosir Modern.
          </h1>

          <Link
            href="/product"
            className="inline-block mt-6 text-white text-sm tracking-[0.2em] uppercase hover:underline"
          >
            Jelajahi Produk →
          </Link>

          <p className="mt-6 sm:mt-8 text-white/80 text-[0.6rem] sm:text-[0.65rem] tracking-[0.25em] uppercase max-w-md">
            Marketplace yang menghubungkan supplier dan pelaku usaha dalam satu
            platform yang praktis, efisien, dan terpercaya.
          </p>
        </div>

        <div className="relative z-10 border-t border-white/20 px-4 py-3 sm:px-6 sm:py-4 md:px-12 flex flex-wrap gap-4 sm:gap-6 md:gap-10 text-[0.6rem] sm:text-[0.65rem] tracking-[0.2em] uppercase text-white/90">
          <Link href="/product" className="hover:underline">
            Katalog Produk
          </Link>
          <Link href="/product" className="hover:underline">
            Belanja Grosir
          </Link>
          <Link href="/about" className="hover:underline">
            Tentang E-Bizmart
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 sm:gap-8 md:gap-16 items-start">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-500">
            Tentang E-Bizmart
          </p>

          <div>
            <p className="text-lg md:text-xl text-neutral-800 leading-relaxed font-[Georgia] max-w-2xl">
              E-Bizmart membantu supplier dan pelaku usaha mengelola{" "}
              <span className="italic">persediaan</span>,{" "}
              <span className="italic">transaksi</span>, serta distribusi produk
              dengan lebih efisien melalui sistem digital terintegrasi.
            </p>

            <p className="mt-6 text-[0.7rem] tracking-[0.2em] uppercase text-neutral-500 leading-relaxed max-w-2xl">
              PLATFORM MARKETPLACE YANG MEMPERMUDAH PROSES BELANJA GROSIR,
              MENGELOLA STOK, DAN MEMPERLUAS JANGKAUAN BISNIS SECARA DIGITAL.
              DIBANGUN UNTUK EFISIENSI DAN KEMUDAHAN OPERASIONAL USAHA.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-8 sm:py-12 border-t border-neutral-200">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-500 mb-2">
              Produk Terbaru
            </p>

            <h2 className="heading-display text-2xl md:text-3xl text-neutral-900">
              Pilihan produk grosir berkualitas untuk bisnis Anda.
            </h2>
          </div>

          <Link
            href="/product"
            className="text-[0.7rem] tracking-[0.2em] uppercase text-neutral-600 hover:text-neutral-900"
          >
            Lihat katalog lengkap →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {barangTerbaru.map((barang) => (
            <ProductCard key={barang.KODE_BARANG} barang={barang} />
          ))}
        </div>

        {barangTerbaru.length === 0 && (
          <p className="text-sm text-neutral-500 py-8">
            Belum ada produk tersedia. Silakan tambahkan melalui dashboard
            admin.
          </p>
        )}
      </section>

      {/* Banner slider (di bawah Produk Terbaru) */}
      <BannerSlider />
    </div>
  );
}
