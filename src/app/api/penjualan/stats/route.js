import { prisma } from "../../../../lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(data, init) {
  return Response.json(data, {
    ...init,
    headers: {
      "cache-control": "no-store",
      ...(init?.headers ?? {}),
    },
  });
}

export async function GET() {
  try {
    const penjualan = await prisma.penjualan.findMany({
      take: 200,
      orderBy: { TANGGAL: "desc" },
      select: {
        ID_PENJUALAN: true,
        TANGGAL: true,
        TOTAL: true,
        STATUS_TRANSAKSI: true,
      },
    });

    const totalOrders = penjualan.length;
    const totalRevenue = penjualan.reduce((sum, p) => sum + (p.TOTAL || 0), 0);

    const statusCounts = penjualan.reduce((acc, p) => {
      const key = p.STATUS_TRANSAKSI || "Unknown";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, /** @type {Record<string, number>} */ ({}));

    // hitung 7 hari terakhir (termasuk hari ini)
    const today = new Date();
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      days.push({
        key,
        label: d.toLocaleDateString("id-ID", { weekday: "short" }),
        total: 0,
      });
    }
    const mapByKey = Object.fromEntries(days.map((d) => [d.key, d]));
    penjualan.forEach((p) => {
      if (!p.TANGGAL) return;
      const key = new Date(p.TANGGAL).toISOString().slice(0, 10);
      if (mapByKey[key]) {
        mapByKey[key].total += p.TOTAL || 0;
      }
    });

    return json({
      ok: true,
      data: {
        totalOrders,
        totalRevenue,
        statusCounts,
        last7Days: days,
      },
    });
  } catch (error) {
    return json(
      { ok: false, error: error?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
