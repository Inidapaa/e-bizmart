"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";

function gambarSrc(val) {
  if (!val) return null;
  if (String(val).startsWith("http")) return val;
  return "/uploads/" + val;
}

export default function KeranjangPage() {
  const router = useRouter();
  const { items, updateQty, remove, total, count } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
        <p className="text-neutral-600 text-sm">Keranjang masih kosong.</p>
        <Link
          href="/product"
          className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Lihat produk
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col gap-2">
        <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-500">
          Keranjang
        </p>
        <h1 className="heading-display text-xl sm:text-2xl md:text-3xl text-neutral-900">
          {count} item di keranjang
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="lg:col-span-2 space-y-4 min-w-0">
          {items.map((item) => (
            <div
              key={item.KODE_BARANG}
              className="card p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <div className="w-full sm:w-24 h-24 rounded-lg bg-neutral-100 overflow-hidden shrink-0">
                {item.GAMBAR_BARANG ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={gambarSrc(item.GAMBAR_BARANG)}
                    alt={item.NAMA_BARANG || ""}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-neutral-400">
                    No image
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/product/${item.KODE_BARANG}`}
                  className="font-medium text-neutral-900 hover:underline line-clamp-2"
                >
                  {item.NAMA_BARANG || "-"}
                </Link>
                <p className="text-sm font-semibold text-neutral-700 mt-1">
                  Rp {(item.HARGA_BARANG ?? 0).toLocaleString("id-ID")} × {item.qty || 1} = Rp{" "}
                  {((item.HARGA_BARANG ?? 0) * (item.qty || 1)).toLocaleString("id-ID")}
                </p>
              </div>
              <div className="flex items-center gap-2 sm:ml-auto">
                <input
                  type="number"
                  min={1}
                  value={item.qty || 1}
                  onChange={(e) =>
                    updateQty(item.KODE_BARANG, Math.max(1, Number(e.target.value) || 1))
                  }
                  className="w-14 rounded border border-neutral-200 px-2 py-1 text-sm text-center"
                />
                <button
                  type="button"
                  onClick={() => remove(item.KODE_BARANG)}
                  className="text-xs text-red-600 hover:text-red-700 font-medium"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="card p-4 sm:p-6 sticky top-20 sm:top-24">
            <h2 className="text-sm font-semibold text-neutral-700 mb-4">
              Ringkasan
            </h2>
            <p className="flex justify-between text-sm text-neutral-600">
              <span>Subtotal ({count} item)</span>
              <span className="font-semibold text-neutral-900">
                Rp {total.toLocaleString("id-ID")}
              </span>
            </p>
            <button
              type="button"
              onClick={() => router.push("/transaksi")}
              className="mt-6 w-full rounded-full bg-neutral-900 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Checkout
            </button>
            <Link
              href="/product"
              className="mt-3 block text-center text-sm text-neutral-500 hover:text-neutral-900"
            >
              Lanjut belanja
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
