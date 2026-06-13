import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// Deklaration für das globale Objekt, um Mehrfach-Instanziierungen im Dev-Modus zu verhindern
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// 1. Adapter für SQLite erstellen
// Nutzt die DATABASE_URL (z. B. aus deiner .env) oder fällt auf die lokale dev.db zurück
const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL || "file:./dev.db",
});

// 2. Prisma Client mit dem Adapter initialisieren
export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}