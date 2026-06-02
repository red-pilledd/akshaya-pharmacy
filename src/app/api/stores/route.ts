import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { stores, type NewStore } from "@/lib/schema";
import { eq } from "drizzle-orm";

function isAdmin(req: Request) {
  const token = req.headers.get("x-admin-token");
  return token === process.env.ADMIN_PASSWORD;
}

// GET /api/stores — public, returns all active stores
export async function GET() {
  try {
    const all = await getDb()
      .select()
      .from(stores)
      .where(eq(stores.active, true))
      .orderBy(stores.district, stores.name);
    return NextResponse.json(all);
  } catch (e) {
    return NextResponse.json({ error: "Failed to fetch stores" }, { status: 500 });
  }
}

// POST /api/stores — admin only, create a store
export async function POST(req: Request) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body: NewStore = await req.json();
    const [created] = await getDb().insert(stores).values(body).returning();
    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Failed to create store" }, { status: 500 });
  }
}
