"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, BarChart, Scale, Users, FileCheck, ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const caoImages = [
  'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM',
  'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/ebn-Atlantida-zpqvrZCN2sUPlWwyYQVopLkJd5s3RF.jpg'  
];

export default function CAODossier() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === caoImages.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-bone text-obsidian pb-24 relative">
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 h-[70vh] z-0 bg-obsidian overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={caoImages[index]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000B0] via-transparent to-bone z-10" />
      </div>

      {/* 2. EXECUTIVE HEADER */}
      <section className="relative z-20 h-[70vh] flex items-end pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <Link href="/" className="inline-flex items-center gap-3 text-gold text-xs uppercase tracking-[0.5em] mb-12 hover:gap-6 transition-all font-bold">
            <ArrowLeft size={14} /> Institutional HQ
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold tracking-[0.5em] text-xs font-bold uppercase mb-4 block">Strategic Briefing // 02</span>
            <h1 className="text-6xl md:text-9xl font-display uppercase tracking-tighter leading-[0.8] mb-8">
              Strategic <br /> Growth
            </h1>
            <div className="flex flex-wrap items-center gap-6 md:gap-10 text-obsidian/70 uppercase text-sm tracking-[0.2em] font-medium">
              <span>Grupo Financiero Atlántida</span>
              <span className="text-gold hidden md:inline">•</span>
              <span>CAO Office</span>
              <span className="text-gold hidden md:inline">•</span>
              <span>Regional Governance</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE MANDATE: OPERATIONAL RIGOR */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          <div className="space-y-6">
            <div className="w-14 h-14 border border-gold/30 flex items-center justify-center text-gold">
              <Scale size={24} />
            </div>
            <h4 className="text-3xl font-display uppercase italic">Corporate <br /> Sovereignty</h4>
            <p className="text-lg text-obsidian/80 leading-relaxed font-light">
              Architecting standardized administrative frameworks across regional territories. We prioritize absolute compliance and structural transparency to insulate the GFA ecosystem from market volatility.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-14 h-14 border border-gold/30 flex items-center justify-center text-gold">
              <BarChart size={24} />
            </div>
            <h4 className="text-3xl font-display uppercase italic">Operational <br /> Precision</h4>
            <p className="text-lg text-obsidian/80 leading-relaxed font-light">
              Treating administration as a high-precision instrument. We optimize group-wide resource allocation to ensure that the velocity of wealth is never hindered by legacy friction.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-14 h-14 border border-gold/30 flex items-center justify-center text-gold">
              <ShieldCheck size={24} />
            </div>
            <h4 className="text-3xl font-display uppercase italic">Institutional <br /> Resilience</h4>
            <p className="text-lg text-obsidian/80 leading-relaxed font-light">
              Integrating ESG principles not as a trend, but as a defensive asset. We ensure the long-term permanence of the institution through rigorous sustainability protocols.
            </p>
          </div>
        </div>

        {/* 4. PERFORMANCE MATRIX (THE CAO ENGINE) */}
        <div className="bg-obsidian text-bone p-12 md:p-24 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-5xl font-display uppercase tracking-tighter mb-10 leading-tight">
                Governance <br /> <span className="text-gold">Impact Matrix</span>
              </h2>
              <p className="text-xl text-white/90 font-light leading-loose mb-12">
                As CAO, my mandate is to ensure the group's administrative engine matches the velocity of its technology. We reject experimental adoption in favor of borderless corporate structures that provide executive-level privacy and institutional security.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3">
                  <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold">Scope</span>
                  <span className="text-2xl uppercase font-display tracking-tight">Regional Sovereignty</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold">Framework</span>
                  <span className="text-2xl uppercase font-display tracking-tight">Zero-Friction Admin</span>
                </div>
              </div>
              
              <div className="mt-16">
                <Link 
                  href="https://www.gfa.hn" 
                  target="_blank"
                  className="inline-flex items-center gap-4 text-gold text-sm uppercase tracking-[0.5em] font-bold hover:gap-7 transition-all"
                >
                  GFA Corporate Portal <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { label: "Administrative Automation", value: "92%" },
                { label: "Institutional Compliance", value: "100%" },
                { label: "Regional Interoperability", value: "OPTIMIZED" },
                { label: "Governance Integrity", value: "ABSOLUTE" }
              ].map((stat, i) => (
                <div key={i} className="group p-8 border border-bone/10 bg-white/5 backdrop-blur-sm hover:border-gold/50 transition-all flex justify-between items-center">
                  <span className="text-xs uppercase tracking-[0.4em] text-ash group-hover:text-bone transition-colors">{stat.label}</span>
                  <span className="text-3xl font-display text-gold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE STRATEGIC FILTER (ESSENTIALISM) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32 border-t border-obsidian/5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="md:w-1/3">
            <h3 className="text-sm uppercase tracking-[0.5em] text-gold font-bold mb-6 italic">The Standard</h3>
            <p className="text-4xl font-display uppercase leading-tight">Architectural <br /> Essentialism</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h5 className="font-bold text-sm uppercase tracking-[0.3em] flex items-center gap-3">
                <FileCheck size={18} className="text-gold" /> Protocol Mastery
              </h5>
              <p className="text-lg text-obsidian/70 leading-relaxed font-light">
                Digital-first administrative protocols designed to eliminate friction. We treat policy as an asset to accelerate decision-making at the board level.
              </p>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-sm uppercase tracking-[0.3em] flex items-center gap-3">
                <Users size={18} className="text-gold" /> Institutional Culture
              </h5>
              <p className="text-lg text-obsidian/70 leading-relaxed font-light">
                Curating high-end corporate environments through KONCEPTO Décor. We believe the physical workspace must reflect the precision of our digital infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
