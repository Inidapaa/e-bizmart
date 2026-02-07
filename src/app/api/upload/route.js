import { writeFile, mkdir } from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file || typeof file === "string") {
      return Response.json(
        { ok: false, error: "File tidak ada" },
        { status: 400 },
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const ext = path.extname(file.name) || ".jpg";
    const base = path
      .basename(file.name, ext)
      .replace(/\s+/g, "_")
      .slice(0, 20);
    const filename = `${Date.now()}-${base}${ext}`.slice(0, 40);

    const dir = path.join(process.cwd(), "public", "uploads");
    await mkdir(dir, { recursive: true });
    const filepath = path.join(dir, filename);
    await writeFile(filepath, buffer);

    return Response.json({ ok: true, filename });
  } catch (error) {
    return Response.json(
      { ok: false, error: error?.message ?? "Upload gagal" },
      { status: 500 },
    );
  }
}
