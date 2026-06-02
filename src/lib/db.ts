import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Lazy singleton — does NOT throw at import time (needed for `next build`)
let _db: ReturnType<typeof drizzle> | null = null;

export function getDb() {
  if (_db) return _db;
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL environment variable is not set");
  const sql = neon(url);
  _db = drizzle(sql, { schema });
  return _db;
}

// Convenience re-export for use in route handlers
export { getDb as db };
