"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpRight, 
  Terminal, 
  Copyright, 
  Scale, 
  Gem,
  Building2
} from 'lucide-react';
import Link from 'next/link';

// --- ASSETS ---
const PROFILE_IMG = "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM";
const OFFICE_IMG = "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/ebn-Atlantida-zpqvrZCN2sUPlWwyYQVopLkJd5s3RF.jpg";

// --- COMPONENTS ---

export default function CAOManifesto() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main ref={containerRef} className="bg-[#0a0a0a] text-[#EAEAEA] min-h-screen selection:bg-[#C6A87C] selection:text-black font-sans">
      
      {/* --- 01. THE COVER (EDITORIAL STYLE) --- */}
      <section className="relative min-h-screen flex flex-col pt-32 px-6 lg:px-12 border-b border-white/10">
        
        {/* Top Meta Data */}
        <div className="flex justify-between items-start text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#888] font-mono mb-20">
          <div className="flex flex-col gap-2">
            <span className="text-[#C6A87C]">/// GFA Institutional HQ</span>
            <span>Tegucigalpa / Global</span>
          </div>
          <div className="flex flex-col gap-2 text-right">
            <span>Ref: Exec_Dossier_2026</span>
            <span>Status: Classified</span>
          </div>
        </div>

        {/* The Headline Engine */}
        <div className="relative z-20">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] leading-[0.8] font-serif font-medium tracking-tighter text-white mix-blend-difference"
          >
            Institutional <br />
            <span className="italic text-[#C6A87C]">Architecture.</span>
          </motion.h1>
          
          <div className="mt-12 max-w-xl">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl leading-relaxed text-[#888] font-light"
            >
              The role of the Chief Administrative Officer is not maintenance; it is the rigorous engineering of <span className="text-white">corporate sovereignty</span>. We are building the infrastructure for the next decade of Latin American wealth.
            </motion.p>
          </div>
        </div>

        {/* Hero Image - Placed strategically, not interfering with text */}
        <motion.div 
          style={{ y }}
          className="absolute right-0 bottom-0 w-full md:w-[50vw] h-[60vh] md:h-[80vh] opacity-40 md:opacity-100 grayscale contrast-125 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-10" />
          <Image 
            src={PROFILE_IMG}
            alt="David Jackson Fernandez"
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>
      </section>

      {/* --- 02. THE ARTICLE (MANIFESTO) --- */}
      <section className="py-32 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-white/10">
        
        {/* Sticky Sidebar */}
        <div className="lg:col-span-3 lg:sticky lg:top-32 h-fit space-y-12">
          <div>
            <h3 className="text-[#C6A87C] text-xs uppercase tracking-[0.3em] mb-4 font-mono">Executive Profile</h3>
            <p className="text-2xl font-serif">David Jackson Fernandez</p>
            <p className="text-sm text-[#666] mt-2">CAO, Grupo Financiero Atlántida</p>
          </div>
          
          <div className="w-full h-[1px] bg-white/10" />
          
          <div className="space-y-4 font-mono text-xs text-[#888]">
            <p className="flex justify-between"><span>Vision:</span> <span className="text-white">GFA 2030</span></p>
            <p className="flex justify-between"><span>Sector:</span> <span className="text-white">Fintech / Governance</span></p>
            <p className="flex justify-between"><span>Design:</span> <span className="text-white">KONCEPTO</span></p>
          </div>
        </div>

        {/* Main Content Article */}
        <div className="lg:col-span-8 lg:col-start-5 space-y-16">
          
          {/* Chapter 1 */}
          <div className="space-y-8">
            <span className="inline-block px-3 py-1 border border-[#C6A87C] text-[#C6A87C] text-[10px] font-mono uppercase tracking-widest">
              01 // The Mandate
            </span>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Bridging the gap between legacy banking stability and digital-first acceleration.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#999] leading-loose text-lg font-light">
              <p>
                In an era where capital moves at the speed of light, administrative friction is the greatest threat to growth. My mandate at GFA is absolute: to dismantle bureaucratic latency and replace it with automated, transparent governance frameworks.
              </p>
              <p>
                This is not about "managing" the institution. It is about future-proofing it. We are integrating high-frequency reporting structures that allow our board to make decisions based on real-time data, not quarterly retrospectives.
              </p>
            </div>
          </div>

          {/* Large Stat Break */}
          <div className="py-12 border-y border-white/10">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {[
                  { label: "Assets Under Oversight", val: "Global" },
                  { label: "Digital Transformation", val: "Active" },
                  { label: "Wealth Framework", val: "Strategic" }
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-[10px] text-[#555] uppercase tracking-[0.3em] font-mono mb-2">{item.label}</p>
                    <p className="text-3xl font-serif italic text-white">{item.val}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* Chapter 2 */}
          <div className="space-y-8">
            <span className="inline-block px-3 py-1 border border-[#C6A87C] text-[#C6A87C] text-[10px] font-mono uppercase tracking-widest">
              02 // Wealth Acceleration
            </span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight">
              The Strategic Growth Network.
            </h2>
            <p className="text-[#999] leading-loose text-lg font-light">
              We are curating a specific Tier-1 ecosystem for our partners. The "Assets & Stocks" program is not a public retail offering; it is a <span className="text-white border-b border-[#C6A87C]/50">Strategic Growth Network</span> designed for wealth acceleration. It operates on principles of strict compliance, high-level privacy, and direct access to global markets. 
            </p>
            
            <div className="bg-[#111] p-8 border-l-2 border-[#C6A87C]">
              <p className="italic text-[#C6A87C] text-xl font-serif">
                "We do not chase trends. We construct portfolios rooted in infrastructure, technology, and sustainable debt."
              </p>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="space-y-8">
            <span className="inline-block px-3 py-1 border border-[#C6A87C] text-[#C6A87C] text-[10px] font-mono uppercase tracking-widest">
              03 // Design Philosophy
            </span>
             <div className="relative h-[400px] w-full grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                <Image src={OFFICE_IMG} alt="Office" fill className="object-cover" />
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-6 py-4 border border-white/10">
                  <p className="text-white text-sm uppercase tracking-widest font-bold">KONCEPTO Décor</p>
                  <p className="text-[#888] text-xs mt-1">Founding Vision</p>
                </div>
             </div>
            <p className="text-[#999] leading-loose text-lg font-light">
              Excellence is holistic. Through <strong>KONCEPTO Décor</strong>, we bring the same precision to our physical environments that we apply to our balance sheets. A Spanish-inspired minimalist aesthetic defines our spaces—clean, essentialist, and unapologetically modern.
            </p>
          </div>

        </div>
      </section>

      {/* --- 03. FOOTER / SIGNATURE --- */}
      <footer className="bg-[#050505] py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-[12vw] leading-none font-serif text-[#1a1a1a] select-none absolute -top-10 left-0 -z-10">
                GFA/CAO
              </h2>
              <p className="text-2xl md:text-3xl text-white font-light max-w-lg leading-normal mb-8">
                Ready to align with the Strategic Growth Network?
              </p>
              <Link 
                href="/growth-network"
                className="group inline-flex items-center gap-4 text-[#C6A87C] border border-[#C6A87C] px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-[#C6A87C] hover:text-black transition-all duration-300"
              >
                Access Portal <ArrowUpRight size={16} />
              </Link>
            </div>
            
            <div className="md:text-right space-y-4">
              <div className="flex flex-col md:items-end gap-2 text-[#555] text-xs font-mono uppercase tracking-wider">
                 <div className="flex items-center gap-2">
                   <Terminal size={14} /> System Status: Operational
                 </div>
                 <div className="flex items-center gap-2">
                   <Scale size={14} /> Legal: GFA Compliant
                 </div>
                 <div className="flex items-center gap-2">
                   <Copyright size={14} /> 2026 David J. Fernandez
                 </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Grain Overlay for Film Effect */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
    </main>
  );
}
