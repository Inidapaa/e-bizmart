import { prisma } from "../../lib/prisma";

export const runtime = "nodejs";

export default async function About() {
  const totalBarang = await prisma.barang.count();
  const totalKategori = await prisma.kategori.count();
  const totalPelanggan = await prisma.pelanggan.count();

  return (
    <div>
      <section className="py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 sm:gap-8 md:gap-16 items-start">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-500">
            Tentang E-Bizmart
          </p>

          <div className="min-w-0">
            <h1 className="heading-display text-xl sm:text-2xl md:text-3xl text-neutral-900 max-w-xl mb-4 sm:mb-6">
              Solusi Digital untuk Bisnis Grosir Modern.
            </h1>

            <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-[Georgia] max-w-2xl">
              E-Bizmart merupakan platform marketplace yang menghubungkan
              supplier dan pelaku usaha dalam satu ekosistem digital yang
              terintegrasi. Melalui sistem yang praktis dan efisien, pengguna
              dapat mengelola <span className="italic">stok</span>, melakukan{" "}
              <span className="italic">transaksi pembelian</span>, serta
              memperluas jangkauan distribusi produk secara lebih optimal.
            </p>

            <p className="mt-6 text-[0.7rem] tracking-[0.2em] uppercase text-neutral-500 leading-relaxed max-w-2xl">
              E-BIZMART DIRANCANG UNTUK MENINGKATKAN EFISIENSI OPERASIONAL,
              MEMPERMUDAH PROSES BELANJA GROSIR, DAN MEMBANTU PELAKU USAHA
              BERADAPTASI DENGAN EKOSISTEM BISNIS DIGITAL.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 border-t border-neutral-200">
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-500 mb-4 sm:mb-6">
          Informasi Kontak
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl">
          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-neutral-500 mb-2">
              Alamat Kantor
            </p>

            <p className="text-neutral-800 leading-relaxed">
              Jl. Raya Contoh No. 123, Kelurahan Sukajadi, Kec. Coblong, Kota
              Bandung 40132
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-neutral-500 mb-2">
              Hubungi Kami
            </p>

            <p className="text-neutral-800">
              Telepon:{" "}
              <a
                href="tel:+6281234567890"
                className="hover:text-neutral-600 underline underline-offset-2"
              >
                +62 812 3456 7890
              </a>
            </p>

            <p className="text-neutral-800 mt-1">
              Email:{" "}
              <a
                href="mailto:halo@ebizmart.com"
                className="hover:text-neutral-600 underline underline-offset-2"
              >
                halo@ebizmart.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Optional Statistics Section */}
      {/*
      <section className="py-12 border-t border-neutral-200">
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-500 mb-8">
          Statistik Platform
        </p>

        <div className="grid grid-cols-3 gap-6">
          <div className="border border-neutral-200 p-6">
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-neutral-500">
              Total Produk
            </span>
            <p className="mt-2 text-2xl font-medium text-neutral-900">
              {totalBarang}
            </p>
          </div>

          <div className="border border-neutral-200 p-6">
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-neutral-500">
              Kategori Produk
            </span>
            <p className="mt-2 text-2xl font-medium text-neutral-900">
              {totalKategori}
            </p>
          </div>

          <div className="border border-neutral-200 p-6">
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-neutral-500">
              Pengguna Terdaftar
            </span>
            <p className="mt-2 text-2xl font-medium text-neutral-900">
              {totalPelanggan}
            </p>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
