import { pgTable, serial, text, real, boolean, timestamp } from "drizzle-orm/pg-core";

export const stores = pgTable("stores", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  district: text("district").notNull(), // Kollam | Thiruvananthapuram | Alappuzha
  address: text("address").notNull(),
  phone: text("phone").default(""),
  lat: real("lat").notNull(),
  lng: real("lng").notNull(),
  discount: text("discount").default("Up to 50%"),
  active: boolean("active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type Store = typeof stores.$inferSelect;
export type NewStore = typeof stores.$inferInsert;
