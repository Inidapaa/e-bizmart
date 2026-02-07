export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const res = Response.json({ ok: true });
  res.headers.set(
    "Set-Cookie",
    "ebizmart_auth=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0"
  );
  return res;
}
