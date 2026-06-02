import type { Metadata } from "next";
import StoresClient from "./StoresClient";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Find a Store",
  alternates: { canonical: "https://akshaya-pharmacy.vercel.app/stores" },
  description: "Locate the nearest Akshaya Community Pharmacy in Kollam, Thiruvananthapuram, or Alappuzha. 75+ stores offering 15–60% off on medicines.",
};

interface Props {
  searchParams: Promise<{ district?: string }>;
}

export default async function StoresPage({ searchParams }: Props) {
  const params = await searchParams;
  const district = params?.district ?? "All";

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://akshaya-pharmacy.vercel.app" },
        { name: "Our Stores", url: "https://akshaya-pharmacy.vercel.app/stores" },
      ]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-amber-400 tracking-widest uppercase">Our Network</span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mt-3 mb-4">Find Your Nearest Store</h1>
            <p className="text-emerald-100 text-lg">
              With 75+ stores across South Kerala, there is always an Akshaya pharmacy near you. Browse by district or explore the map to find the closest one.
            </p>
          </div>
        </div>
      </section>

      {/* Stores section */}
      <section className="py-14 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StoresClient initialDistrict={district} />
        </div>
      </section>
    </>
  );
}
