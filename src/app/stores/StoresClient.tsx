"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { stores, districts, type Store } from "@/lib/stores";
import { MapPin, Phone, Tag, Navigation } from "lucide-react";

const StoreMap = dynamic(() => import("@/components/StoreMap"), { ssr: false });

export default function StoresClient({ initialDistrict }: { initialDistrict: string }) {
  const validDistricts = ["All", ...districts] as const;
  const initial = validDistricts.includes(initialDistrict as any) ? initialDistrict : "All";
  const [active, setActive] = useState<string>(initial);

  const filtered = active === "All" ? stores : stores.filter((s) => s.district === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {validDistricts.map((d) => (
          <button
            key={d}
            onClick={() => setActive(d)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
              active === d
                ? "bg-emerald-700 text-white border-emerald-700 shadow-sm"
                : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300 hover:text-emerald-700"
            }`}
          >
            {d === "All" ? `All Districts (${stores.length})` : `${d} (${stores.filter((s) => s.district === d).length})`}
          </button>
        ))}
      </div>

      {/* Map */}
      <StoreMap stores={stores} activeDistrict={active} />

      {/* Store grid */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((store) => (
          <div
            key={store.id}
            className="bg-white rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all p-5"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-emerald-700" />
              </div>
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                <Tag className="w-3 h-3" /> {store.discount}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1">{store.name}</h3>
            <p className="text-xs text-gray-500 mb-3 leading-relaxed">{store.address}</p>
            <a
              href={`tel:${store.phone}`}
              className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium hover:text-emerald-900"
            >
              <Phone className="w-3.5 h-3.5" /> {store.phone}
            </a>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[11px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{store.district}</span>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-blue-600 font-medium hover:text-blue-800"
              >
                <Navigation className="w-3 h-3" /> Directions
              </a>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">No stores found for this filter.</div>
      )}
    </div>
  );
}
