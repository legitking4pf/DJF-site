"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheck, BarChart3, Scale, Users2, 
  FileCheck, ArrowLeft, ArrowUpRight, 
  Globe2, Landmark, Fingerprint 
} from 'lucide-react';
import Link from 'next/link';

const MotionImage = motion.create(Image);

const caoImages = [
  'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM',
  'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/ebn-Atlantida-zpqvrZCN2sUPlWwyYQVopLkJd5s3RF.jpg'
];

export default function CAODossier() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === caoImages.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] selection:bg-gold/30 overflow-hidden">
      
      {/* 1. IMMERSIVE HERO ENGINE */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian">
        <AnimatePresence mode="wait">
          <MotionImage
            key={index}
            src={caoImages[index]}
            alt="Strategic Context"
            fill
            priority
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
            className="object-cover"
          />
        </AnimatePresence>
        
        {/* Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F6] via-transparent to-transparent z-20" />
        <div className="absolute inset-0 bg-black/20 z-10" />

        <div className="relative z-30 max-w-7xl mx-auto px-6 w-full mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link href="/" className="group inline-flex items-center gap-4 text-gold text-[10px] uppercase tracking-[0.6em] mb-16 font-bold">
              <span className="w-8 h-[1px] bg-gold group-hover:w-12 transition-all" /> Institutional HQ
            </Link>
            
            <h1 className="text-3xl md:text-[6x1] font-display uppercase tracking-tighter leading-[1.1] mb-12 italic">
              Wealth <br /> 
              <span className="text-gold not-italic ml-0 md:ml-20">Acceleration</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
              <div className="space-y-2">
                <p className="text-gold tracking-[0.4em] text-[10px] font-bold uppercase">Position / Role</p>
                <p className="text-white text-lg font-light tracking-wide italic">Chief Administrative Officer</p>
              </div>
              <div className="space-y-2 border-l border-white/10 pl-8">
                <p className="text-gold tracking-[0.4em] text-[10px] font-bold uppercase">Focus</p>
                <p className="text-white text-lg font-light tracking-wide uppercase">Strategic Growth Network</p>
              </div>
              <div className="hidden md:block">
                <motion.div 
                  animate={{ y: [0, 10, 0] }} 
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="w-[1px] h-24 bg-gradient-to-b from-gold to-transparent mx-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE CAO MANDATE: BORDERLESS GOVERNANCE */}
      <section className="py-32 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-xs uppercase tracking-[0.8em] text-gold font-bold mb-12">The Governance Pillar</h2>
            <h3 className="text-4xl md:text-5xl font-display uppercase leading-[1.1] tracking-tight mb-8">
              Standardizing <br /> Regional <br /> Sovereignty.
            </h3>
            <p className="text-xl text-obsidian/60 font-light leading-relaxed italic">
              "Administrative excellence is not a support function; it is a defensive asset. At GFA, we architect frameworks that permit rapid scaling while maintaining absolute executive privacy."
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-obsidian/10 border border-obsidian/10">
            {[
              { 
                icon: <Fingerprint size={28} />, 
                title: "Digital Integration", 
                desc: "Migrating legacy compliance into automated, zero-friction protocols." 
              },
              { 
                icon: <Globe2 size={28} />, 
                title: "Global Reach", 
                desc: "Syncing Central American operations with international financial hubs." 
              },
              { 
                icon: <Landmark size={28} />, 
                title: "Asset Integrity", 
                desc: "High-level oversight of the strategic growth network portfolios." 
              },
              { 
                icon: <BarChart3 size={28} />, 
                title: "Velocity", 
                desc: "Reducing administrative lag to match fintech-speed execution." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#F9F8F6] p-10 hover:bg-white transition-colors group">
                <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h4 className="text-xl font-display uppercase mb-4">{item.title}</h4>
                <p className="text-sm text-obsidian/60 leading-relaxed uppercase tracking-wider">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE MATRIX (REFINED) */}
      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto bg-obsidian text-bone rounded-[2px] overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Scale size={300} strokeWidth={0.5} />
          </div>
          
          <div className="p-12 md:p-24 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
              <div className="max-w-2xl">
                <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-6">// Operational Intelligence</span>
                <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none">
                  Institutional <br /> Resilience <span className="text-gold italic">Matrix</span>
                </h2>
              </div>
              <Link 
                href="https://www.gfa.hn" 
                target="_blank"
                className="group flex items-center gap-4 text-white text-[10px] uppercase tracking-[0.4em] font-bold border-b border-gold/40 pb-2 hover:border-gold transition-all"
              >
                GFA Ecosystem <ArrowUpRight size={16} className="text-gold" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { label: "Admin Automation", value: "94.8%" },
                { label: "Compliance Index", value: "100%" },
                { label: "Asset Transparency", value: "TOTAL" },
                { label: "Strategy 2030", value: "ACTIVE" }
              ].map((stat, i) => (
                <div key={i} className="p-8 border border-white/5 bg-white/5 backdrop-blur-md">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-ash mb-4">{stat.label}</p>
                  <p className="text-4xl font-display text-gold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. DESIGN CULTURE (KONCEPTO INTEGRATION) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32 border-t border-obsidian/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">Design/Innovation Culture</span>
            </div>
            <h3 className="text-5xl font-display uppercase tracking-tighter mb-8 leading-tight">
              Physical <br /> Excellence <br /> <span className="italic">Meets Digital.</span>
            </h3>
            <p className="text-lg text-obsidian/70 leading-loose font-light mb-12">
              Through **KONCEPTO Décor**, we translate GFA's strategic precision into physical environments. Our office spaces and executive lounges in strategic financial hubs are curated for privacy, productivity, and Spanish-inspired modern minimalism.
            </p>
            <div className="flex gap-12">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold">Aesthetic</span>
                <p className="text-sm uppercase tracking-tighter">Minimalist / High-Quality</p>
              </div>
              <div className="space-y-2 border-l border-obsidian/10 pl-12">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold">Philosophy</span>
                <p className="text-sm uppercase tracking-tighter">Balanced / Architectural</p>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-[4/5] bg-obsidian overflow-hidden group">
            <Image 
              src="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/ebn-Atlantida-zpqvrZCN2sUPlWwyYQVopLkJd5s3RF.jpg"
              alt="Design Philosophy"
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 border-[40px] border-white/10" />
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION: STRATEGIC GROWTH */}
      <footer className="py-24 bg-white border-t border-obsidian/5 text-center">
        <motion.div 
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          className="max-w-3xl mx-auto px-6"
        >
          <h4 className="text-xs uppercase tracking-[0.6em] text-gold font-bold mb-8 italic">Next Protocol</h4>
          <h2 className="text-4xl md:text-5xl font-display uppercase mb-12 tracking-tighter">Explore the Wealth <br /> Acceleration Opportunity</h2>
          <Link 
            href="/growth-network" 
            className="inline-block bg-obsidian text-bone px-12 py-5 uppercase text-[10px] tracking-[0.5em] font-bold hover:bg-gold hover:text-obsidian transition-all duration-500"
          >
            Enter Growth Network
          </Link>
        </motion.div>
      </footer>
    </main>
  );
}
