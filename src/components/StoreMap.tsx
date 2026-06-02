"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import type { Store } from "@/lib/schema";

interface Props {
  stores: Store[];
  activeDistrict: string;
}

export default function StoreMap({ stores, activeDistrict }: Props) {
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: React.ComponentType<any>;
    TileLayer: React.ComponentType<any>;
    Marker: React.ComponentType<any>;
    Popup: React.ComponentType<any>;
    icon: (opts: any) => any;
  } | null>(null);

  useEffect(() => {
    import("leaflet").then((L) => {
      import("react-leaflet").then(({ MapContainer, TileLayer, Marker, Popup }) => {
        setMapComponents({ MapContainer, TileLayer, Marker, Popup, icon: L.icon });
      });
    });
  }, []);

  const filtered = activeDistrict === "All" ? stores : stores.filter((s) => s.district === activeDistrict);

  const centre: [number, number] =
    activeDistrict === "Thiruvananthapuram"
      ? [8.5241, 76.9366]
      : activeDistrict === "Alappuzha"
      ? [9.4981, 76.3388]
      : [8.8932, 76.6141];

  if (!MapComponents) {
    return (
      <div className="w-full h-96 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
        Loading map…
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, icon } = MapComponents;

  const customIcon = icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className="relative z-0 w-full h-[480px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      <MapContainer
        center={centre}
        zoom={activeDistrict === "All" ? 9 : 11}
        className="w-full h-full"
        key={activeDistrict}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filtered.map((store) => (
          <Marker key={store.id} position={[store.lat, store.lng]} icon={customIcon}>
            <Popup>
              <div className="min-w-[180px]">
                <div className="font-semibold text-emerald-800 text-sm leading-tight mb-1">{store.name}</div>
                <div className="text-xs text-gray-500 mb-1">{store.address}</div>
                <div className="text-xs text-emerald-700 font-semibold">{store.discount} off</div>
                <a href={`tel:${store.phone}`} className="text-xs text-blue-600 block mt-1">{store.phone}</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
