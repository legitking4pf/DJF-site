"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Database, Globe, Cpu, ArrowUpRight } from 'lucide-react';

const heroImages = [
  'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/portada-09-02-2024-111-juntos-tdHAoirlE7TMdek7ReGI43HDBa3wqm.jpg',
  'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Fachada-1-Banco-Atlantida.webp' // Swapped for a distinct image to show transition
];

export default function CTODossier() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 10000); // Slower, more prestigious transition
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-bone text-obsidian selection:bg-gold/30 selection:text-obsidian">
      
      {/* 1. HERO ENGINE: HIGH-CONTRAST OVERLAY */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-obsidian">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[index]}
              alt="Strategic Infrastructure"
              fill
              priority
              className="object-cover grayscale-[30%]"
            />
          </motion.div>
        </AnimatePresence>

        {/* VIGNETTE & SCRIM: Ensures text legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/60 via-transparent to-transparent" />

        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-gold" />
              <span className="text-gold tracking-[0.4em] text-[10px] font-bold uppercase">Executive Dossier // CTO 01</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-display text-white uppercase leading-[0.85] tracking-tighter mb-8">
              Digital <br /> <span className="text-gold italic">Integration</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base tracking-[0.2em] uppercase font-light">
              Architecting Sovereignty for Banco Atlántida Honduras
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STRATEGIC PILLARS: MINIMALIST GRID */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 border-l border-obsidian/10 pl-8 md:pl-16">
          {[
            { 
              num: "01", 
              title: "Cloud Sovereignty", 
              desc: "Migrating core banking assets into hybrid-cloud environments while maintaining strict regional data governance." 
            },
            { 
              num: "02", 
              title: "Zero-Trust Core", 
              desc: "Deploying multi-layered biometric security protocols to immunize the bank's operational layer against external volatility." 
            },
            { 
              num: "03", 
              title: "API Ecosystem", 
              desc: "Bridging traditional capital with digital velocity through the GFA strategic growth network." 
            }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group cursor-default"
            >
              <span className="block text-gold font-mono text-sm mb-6">{pillar.num}</span>
              <h3 className="text-2xl font-display uppercase tracking-tight mb-4 group-hover:text-gold transition-colors">{pillar.title}</h3>
              <p className="text-ash leading-relaxed font-light text-sm md:text-base">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TECHNICAL ROADMAP: THE "WAR ROOM" STYLE */}
      <section className="bg-obsidian text-bone py-32 overflow-hidden relative">
        {/* Fine-line background deco */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #A67C00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-display uppercase leading-tight mb-8">
              The Strategic <br /> <span className="text-gold">Roadmap 2030</span>
            </h2>
            <p className="text-bone/60 font-light text-lg mb-12">
              Technology as the bridge between legacy security and the velocity of future investment partnerships.
            </p>
            <div className="space-y-4">
              {['Phase I: Core Re-Architecture', 'Phase II: Predictive AI Integration', 'Phase III: Global Interoperability'].map((phase, i) => (
                <div key={i} className="flex items-center gap-4 group p-4 border border-white/5 hover:border-gold/30 hover:bg-white/[0.02] transition-all">
                  <span className="text-gold font-mono text-xs italic">0{i+1}</span>
                  <span className="uppercase tracking-widest text-xs font-bold">{phase}</span>
                  <ArrowUpRight className="ml-auto w-4 h-4 text-white/20 group-hover:text-gold transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {[
              { label: "Uptime", val: "99.99%", icon: Database },
              { label: "Compliance", val: "ISO 27001", icon: Shield },
              { label: "Capacity", val: "4.5M+", icon: Cpu },
              { label: "Reach", val: "3 Markets", icon: Globe }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-white/[0.03] border border-white/10 flex flex-col justify-between aspect-square">
                <stat.icon className="text-gold mb-4" size={24} strokeWidth={1} />
                <div>
                  <div className="text-3xl md:text-4xl font-display text-white mb-1">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL STATEMENT */}
      <section className="py-40 text-center px-6">
        <motion.div 
           initial={{ opacity: 0 }} 
           whileInView={{ opacity: 1 }} 
           viewport={{ once: true }}
           className="max-w-4xl mx-auto"
        >
          <p className="text-gold tracking-[0.5em] text-[10px] font-bold uppercase mb-12">Chief Technology Officer Statement</p>
          <h2 className="text-3xl md:text-5xl font-light italic text-obsidian leading-[1.2] mb-16 px-4">
            "Digital transformation is not an upgrade; it is the deliberate re-engineering of institutional velocity."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-sm uppercase tracking-widest font-bold">David Jackson Fernandez</p>
            <p className="text-[10px] uppercase tracking-widest text-obsidian/40 mt-1">Banco Atlántida // Central America</p>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
