import DoctrineSection from "@/components/DoctrineSection";
import Timeline from "@/components/Timeline";
import AssetMap from "@/components/AssetMap";
import StrategicGrowthClient from "./StrategicGrowthClient";

import { doctrines } from "@/data/doctrines";
export default function CAODossier() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-24" id="doss..ier">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          David Jackson Fernandez
        </h1>
        <p className="uppercase text-sm tracking-widest text-neutral-400">
          Chief Administrative Officer · Institutional Dossier
        </p>
        <PdfExportButton />
      </header>

      {doctrines.map((d) => (
        <DoctrineSection key={d.title} {...d} />
      ))}

      <Timeline />
      <AssetMap />
    </main>
  );
}