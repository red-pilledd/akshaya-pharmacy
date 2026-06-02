import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { stores } from "@/lib/schema";

// GET /api/stores/all — admin only, returns ALL stores including inactive
export async function GET(req: Request) {
  const token = req.headers.get("x-admin-token");
  if (token !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const all = await getDb().select().from(stores).orderBy(stores.district, stores.name);
  return NextResponse.json(all);
}
