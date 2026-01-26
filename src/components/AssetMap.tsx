"use client";

import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { assets } from "@/data/assets";

export default function AssetMap() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-medium">Asset Performance Map</h2>

      <MapContainer
        center={[15, -85]}
        zoom={4}
        className="h-[400px] w-full rounded-lg"
      >
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {assets.map((a, i) => (
          <CircleMarker
            key={i}
            center={a.coords}
            radius={10}
            pathOptions={{ color: "#e5e5e5" }}
          />
        ))}
      </MapContainer>
    </section>
  );
}