import Link from "next/link";
import { prisma } from "../../lib/prisma";
import ProductCard from "../../components/ProductCard";

export const runtime = "nodejs";

function buildHref({ q, kategori, page }) {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (kategori && kategori !== "ALL") params.set("kategori", String(kategori));
  if (page && Number(page) > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `/product?${qs}` : "/product";
}

export default async function Product({ searchParams }) {
  const q = String(searchParams?.q || "").trim();
  const kategori = String(searchParams?.kategori || "ALL");
  const pageSize = 10;
  const requestedPage = Math.max(
    1,
    Number.parseInt(String(searchParams?.page || "1"), 10) || 1,
  );

  const where = {};
  if (kategori && kategori !== "ALL") {
    const idKategori = Number(kategori);
    if (!Number.isNaN(idKategori)) where.ID_KATEGORI = idKategori;
  }
  if (q) {
    where.OR = [
      { NAMA_BARANG: { contains: q, mode: "insensitive" } },
      { KETERANGAN_BARANG: { contains: q, mode: "insensitive" } },
    ];
  }

  const [kategoriList, totalCount] = await Promise.all([
    prisma.kategori.findMany({ orderBy: { NAMA_KATEGORI: "asc" } }),
    prisma.barang.count({ where }),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const page = Math.min(requestedPage, totalPages);
  const skip = (page - 1) * pageSize;

  const barangList = await prisma.barang.findMany({
    where,
    take: pageSize,
    skip,
    orderBy: { KODE_BARANG: "desc" },
    include: { kategori: true },
  });

  const startItem = totalCount === 0 ? 0 : skip + 1;
  const endItem = Math.min(skip + barangList.length, totalCount);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pageWindow = pages.filter((p) => {
    if (totalPages <= 7) return true;
    return p === 1 || p === totalPages || Math.abs(p - page) <= 1;
  });

  return (
    <div>
      <section className="py-8 sm:py-12 md:py-16">
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-500 mb-2">
          Katalog Produk
        </p>

        <h1 className="heading-display text-xl sm:text-2xl md:text-4xl text-neutral-900 max-w-2xl leading-tight">
          Temukan berbagai produk grosir berkualitas untuk mendukung operasional
          bisnis Anda.
        </h1>
      </section>

      <section className="py-6 sm:py-8 border-t border-neutral-200">
        <div className="flex flex-col gap-4 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-4">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-neutral-500">
              Daftar Produk
            </p>

            <span className="text-[0.7rem] text-neutral-500">
              {totalCount} Produk Tersedia
            </span>
          </div>

          <form
            method="GET"
            action="/product"
            className="grid grid-cols-1 md:grid-cols-[1fr_220px_auto] gap-3 sm:gap-4 items-end"
          >
            <div className="min-w-0">
              <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-neutral-500 mb-2">
                Search
              </label>
              <input
                name="q"
                defaultValue={q}
                placeholder="Cari nama produk / deskripsi…"
                className="w-full border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none focus:border-neutral-400"
              />
            </div>

            <div>
              <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-neutral-500 mb-2">
                Filter kategori
              </label>
              <select
                name="kategori"
                defaultValue={kategori}
                className="w-full border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none focus:border-neutral-400"
              >
                <option value="ALL">Semua kategori</option>
                {(kategoriList || []).map((k) => (
                  <option key={k.ID_KATEGORI} value={String(k.ID_KATEGORI)}>
                    {k.NAMA_KATEGORI}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2.5 text-[0.7rem] font-medium tracking-[0.15em] uppercase bg-neutral-900 text-white hover:opacity-90 transition-opacity"
              >
                Terapkan
              </button>
              <Link
                href="/product"
                className="px-4 py-2.5 text-[0.7rem] font-medium tracking-[0.15em] uppercase border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                Reset
              </Link>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[0.7rem] text-neutral-500">
            <span>
              Menampilkan {startItem}-{endItem} dari {totalCount}
            </span>
            <span>
              Halaman {page} / {totalPages}
            </span>
          </div>
        </div>

        {totalCount === 0 ? (
          <p className="text-sm text-neutral-500">
            Produk tidak ditemukan. Coba ubah kata kunci atau filter kategori.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {barangList.map((barang) => (
              <ProductCard key={barang.KODE_BARANG} barang={barang} showStok />
            ))}
          </div>
        )}

        {totalCount > 0 && totalPages > 1 && (
          <nav
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2"
            aria-label="Pagination"
          >
            <Link
              href={buildHref({ q, kategori, page: Math.max(1, page - 1) })}
              aria-disabled={page <= 1}
              className={`px-3.5 py-2 text-[0.65rem] tracking-[0.15em] uppercase border transition-colors ${
                page <= 1
                  ? "border-neutral-200 text-neutral-400 pointer-events-none"
                  : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
              }`}
            >
              Prev
            </Link>

            {pageWindow.map((p, idx) => {
              const prev = pageWindow[idx - 1];
              const showEllipsis = prev != null && p - prev > 1;
              return (
                <span key={p} className="flex items-center gap-2">
                  {showEllipsis && (
                    <span className="px-2 text-neutral-400">…</span>
                  )}
                  <Link
                    href={buildHref({ q, kategori, page: p })}
                    aria-current={p === page ? "page" : undefined}
                    className={`min-w-10 text-center px-3.5 py-2 text-[0.65rem] tracking-[0.15em] uppercase border transition-colors ${
                      p === page
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                    }`}
                  >
                    {p}
                  </Link>
                </span>
              );
            })}

            <Link
              href={buildHref({ q, kategori, page: Math.min(totalPages, page + 1) })}
              aria-disabled={page >= totalPages}
              className={`px-3.5 py-2 text-[0.65rem] tracking-[0.15em] uppercase border transition-colors ${
                page >= totalPages
                  ? "border-neutral-200 text-neutral-400 pointer-events-none"
                  : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
              }`}
            >
              Next
            </Link>
          </nav>
        )}
      </section>
    </div>
  );
}
