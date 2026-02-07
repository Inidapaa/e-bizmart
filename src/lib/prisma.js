import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const globalForPrisma = globalThis;

function makeAdapterFromEnv() {
  const urlStr = process.env.DATABASE_URL;
  if (!urlStr) {
    throw new Error("url database belum valid");
  }

  const url = new URL(urlStr);
  const database = (url.pathname || "").replace(/^\//, "");
  const port = url.port ? Number(url.port) : 3306;

  return new PrismaMariaDb(
    {
      host: url.hostname,
      port: Number.isFinite(port) ? port : 3306,
      user: decodeURIComponent(url.username || ""),
      password: decodeURIComponent(url.password || ""),
      database,
      connectionLimit: 10,
      connectTimeout: 30000,
    },
    database ? { schema: database } : undefined
  );
}

function makeClient() {
  const adapter = makeAdapterFromEnv();
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? makeClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
