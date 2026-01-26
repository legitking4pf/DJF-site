'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Standard Imports
import DoctrineSection from "@/components/DoctrineSection";
import PdfExport from "./PdfExport";
import { doctrines } from "@/data/doctrines";

// Strategic Dynamic Imports (Bypass SSR for browser-heavy components)
const Timeline = dynamic(() => import("@/components/Timeline"), { 
  ssr: false,
  loading: () => <div className="h-96 w-full bg-neutral-50 animate-pulse rounded-lg" />
});

const AssetMap = dynamic(() => import("@/components/AssetMap"), { 
  ssr: false, 
  loading: () => <div className="h-[500px] w-full bg-neutral-50 animate-pulse rounded-lg" />
});

/**
 * CAODossier - Institutional Dossier for David Jackson Fernandez
 * Focus: Digital Integration & Investment Partnerships
 */
export default function CAODossier() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-6 py-20 space-y-24" 
      id="dossier"
    >
      {/* Executive Header */}
      <header className="border-b border-neutral-100 pb-12 space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-light tracking-tighter text-neutral-900">
              David Jackson Fernandez
            </h1>
            <p className="uppercase text-xs tracking-[0.3em] text-neutral-500 mt-2">
              Chief Administrative Officer · Institutional Dossier
            </p>
          </div>
          <PdfExport />
        </div>
      </header>

      {/* Strategic Growth Pillars */}
      <section className="grid grid-cols-1 gap-24">
        {doctrines.map((d, index) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <DoctrineSection {...d} />
          </motion.div>
        ))}
      </section>

      {/* Interactive Infrastructure Components */}
      <section className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-sm uppercase tracking-widest text-neutral-400">Evolutionary Timeline</h2>
          <Timeline />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-sm uppercase tracking-widest text-neutral-400">Global Asset Footprint</h2>
          <AssetMap />
        </div>
      </section>

      <footer className="pt-20 text-center">
        <p className="text-[10px] uppercase tracking-widest text-neutral-300">
          GFA Strategic Vision 2030 · Proprietary & Confidential
        </p>
      </footer>
    </motion.main>
  );
}
