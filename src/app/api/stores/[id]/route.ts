import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { stores } from "@/lib/schema";
import { eq } from "drizzle-orm";

function isAdmin(req: Request) {
  const token = req.headers.get("x-admin-token");
  return token === process.env.ADMIN_PASSWORD;
}

// PUT /api/stores/[id] — admin only, update a store
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  try {
    const body = await req.json();
    const [updated] = await getDb()
      .update(stores)
      .set({ ...body, id: undefined })
      .where(eq(stores.id, Number(id)))
      .returning();
    if (!updated) return NextResponse.json({ error: "Store not found" }, { status: 404 });
    return NextResponse.json(updated);
  } catch (e) {
    return NextResponse.json({ error: "Failed to update store" }, { status: 500 });
  }
}

// DELETE /api/stores/[id] — admin only, soft-delete (sets active=false)
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  try {
    await getDb().update(stores).set({ active: false }).where(eq(stores.id, Number(id)));
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Failed to delete store" }, { status: 500 });
  }
}
