import Link from "next/link";

const ALAMAT =
  "Jl. Raya Contoh No. 123, Kelurahan Sukajadi, Kec. Coblong, Kota Bandung 40132";
const TELEPON = "+62 812 3456 7890";
const EMAIL = "halo@ebizmart.com";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-100 overflow-hidden">
      <div className="page-shell py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3 md:gap-8">
          <div className="min-w-0">
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-neutral-500">
              E-BIZMART
            </p>

            <p className="mt-3 text-xs sm:text-sm text-neutral-600 max-w-xs">
              Solusi Digital untuk Bisnis Grosir Modern. Platform marketplace
              yang menghubungkan supplier dan pelaku usaha dalam satu sistem
              yang praktis, efisien, dan terpercaya.
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-neutral-500 mb-4">
              Navigasi
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
              <li>
                <Link href="/" className="hover:text-neutral-900">
                  Beranda
                </Link>
              </li>

              <li>
                <Link href="/product" className="hover:text-neutral-900">
                  Katalog Produk
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-neutral-900">
                  Tentang E-Bizmart
                </Link>
              </li>

              <li>
                <Link href="/keranjang" className="hover:text-neutral-900">
                  Keranjang Belanja
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-neutral-500 mb-4">
              Hubungi Kami
            </p>

            <address className="text-xs sm:text-sm text-neutral-600 not-italic space-y-2 break-words">
              <p className="leading-relaxed">{ALAMAT}</p>

              <p>
                <a
                  href={`tel:${TELEPON.replace(/\s/g, "")}`}
                  className="hover:text-neutral-900"
                >
                  {TELEPON}
                </a>
              </p>

              <p>
                <a href={`mailto:${EMAIL}`} className="hover:text-neutral-900">
                  {EMAIL}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-200">
          <p className="text-[0.6rem] sm:text-[0.65rem] tracking-[0.2em] uppercase text-neutral-400 break-words">
            © {new Date().getFullYear()} E-Bizmart. Platform Marketplace Grosir
            Digital.
          </p>
        </div>
      </div>
    </footer>
  );
}
