import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";

export const metadata = { title: "Admin — Akshaya Community Pharmacy" };

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  const isAuth = token && token === process.env.ADMIN_PASSWORD;

  if (!isAuth) return <AdminLogin />;
  return <AdminDashboard password={process.env.ADMIN_PASSWORD!} />;
}
