"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, BarChart, Scale, Users, Globe, FileCheck, ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const caoImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070', // Modern Architecture/Corporate HQ
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069'  // High-end Boardroom
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
      {/* 1. ATMOSPHERIC BACKGROUND ENGINE */}
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
        {/* Your requested Top Black Gradient to Bottom Bone Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000087] via-transparent to-bone z-10" />
      </div>

      {/* 2. EXECUTIVE HEADER */}
      <section className="relative z-20 h-[70vh] flex items-end pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <Link href="/" className="inline-flex items-center gap-2 text-gold text-[10px] uppercase tracking-[0.4em] mb-12 hover:gap-4 transition-all">
            <ArrowLeft size={12} /> Return to Executive HQ
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] font-bold uppercase mb-4 block">Strategic Briefing // 02</span>
            <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-[0.85] mb-6">
              Strategic <br /> Growth
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-obsidian/60 uppercase text-[10px] md:text-xs tracking-widest font-medium">
              <span>Grupo Financiero Atlántida</span>
              <span className="text-gold">•</span>
              <span>CAO Office</span>
              <span className="text-gold">•</span>
              <span>Regional Governance</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. OPERATIONAL PILLARS */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          <div className="space-y-6">
            <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold">
              <Scale size={20} />
            </div>
            <h4 className="text-2xl font-display uppercase italic">Corporate <br /> Governance</h4>
            <p className="text-sm text-obsidian/70 leading-relaxed font-light">
              Standardizing administrative frameworks across regional territories to ensure absolute compliance and operational transparency within the GFA ecosystem.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold">
              <BarChart size={20} />
            </div>
            <h4 className="text-2xl font-display uppercase italic">Operational <br /> Efficiency</h4>
            <p className="text-sm text-obsidian/70 leading-relaxed font-light">
              Optimizing group-wide resource allocation and streamlining executive workflows. Implementing "Wealth Acceleration" through lean administrative protocols.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold">
              <ShieldCheck size={20} />
            </div>
            <h4 className="text-2xl font-display uppercase italic">Risk & <br /> Sustainability</h4>
            <p className="text-sm text-obsidian/70 leading-relaxed font-light">
              Integrating Environmental, Social, and Governance (ESG) principles into the GFA core, ensuring long-term resilience and digital transformation sustainability.
            </p>
          </div>
        </div>

        {/* 4. PERFORMANCE MATRIX (THE CAO ENGINE) */}
        <div className="bg-obsidian text-bone p-10 md:p-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-display uppercase tracking-tighter mb-8 leading-tight">
                Governance <br /> <span className="text-gold">Impact Matrix</span>
              </h2>
              <p className="text-ash/80 font-light leading-loose mb-12">
                As CAO, my mandate is to ensure the group's administrative engine is as agile as its technology. We are building a borderless corporate structure that supports regional expansion while maintaining the localized privacy and quality our executive clients expect.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-gold text-[10px] uppercase tracking-widest font-bold">Scope</span>
                  <span className="text-xl uppercase font-display tracking-tight">Regional Multi-Market</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gold text-[10px] uppercase tracking-widest font-bold">Standard</span>
                  <span className="text-xl uppercase font-display tracking-tight">Global Compliance</span>
                </div>
              </div>
              
              <Link 
                href="https://www.gfa.hn" 
                target="_blank"
                className="inline-flex items-center gap-3 text-gold text-[10px] uppercase tracking-[0.4em] font-bold mt-12 hover:gap-5 transition-all"
              >
                GFA Corporate Portal <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { label: "Administrative Automation", value: "85%" },
                { label: "Regional Integration", value: "COMPLETE" },
                { label: "Vision 2030 Alignment", value: "OPTIMIZED" },
                { label: "Governance Transparency", value: "100%" }
              ].map((stat, i) => (
                <div key={i} className="group p-6 border border-bone/10 hover:border-gold/50 transition-colors flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-ash group-hover:text-bone transition-colors">{stat.label}</span>
                  <span className="text-xl font-display text-gold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE 2030 SUSTAINABILITY ROADMAP */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t border-obsidian/5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="md:w-1/3">
            <h3 className="text-xs uppercase tracking-[0.4em] text-gold font-bold mb-4">The Horizon</h3>
            <p className="text-2xl font-display uppercase">2030 Group <br /> Standards</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <FileCheck size={14} className="text-gold" /> Policy Modernization
              </h5>
              <p className="text-sm text-obsidian/60 leading-relaxed font-light">
                Digital-first administrative protocols that eliminate regional friction and accelerate decision-making at the board level.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Users size={14} className="text-gold" /> Leadership Culture
              </h5>
              <p className="text-sm text-obsidian/60 leading-relaxed font-light">
                Curating a culture of excellence and design-led innovation, reflecting the principles found in the KONCEPTO Décor philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
