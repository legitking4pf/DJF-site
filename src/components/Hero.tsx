"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Palette, ArrowDown } from 'lucide-react';

const videos = [
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Hero%20Video%20Background-P51XsIl1YPox7tNRCZLrxRKES9if7c",
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Hero%20Video%20Background%202-NfCSrQzlEgyjm9E1s0Ag6XOLVMFnMJ"
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  
  // Transition between GFA and EBN visual contexts every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen w-full bg-obsidian text-bone overflow-hidden flex flex-col justify-center pt-28 lg:pt-40 selection:bg-gold/30">
      
      {/* 1. ARCHITECTURAL VIDEO VIEWPORT */}
<div className="absolute inset-0 z-0 overflow-hidden">         <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 0.35, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 w-full h-full"
    >
      <video 
        key={`video-${index}`}
        autoPlay 
        muted 
        loop 
        playsInline 
        className="h-full w-full object-cover brightness-[0.6] transition-all duration-1000"
      >
        <source src={videos[index]} type="video/mp4" />
      </video>
    </motion.div>
  </AnimatePresence>
          
          {/* DIGITAL OVERLAYS: Representing the Digital Sovereignty mandate */}
          <div className="absolute inset-0 z-10 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" /> <div className = "absolute inset-0 z-10 bg-gradient-to-b from-obsidian via-transparent to-obsidian" / >
  </div>

      {/* 2. COMMAND CONTENT: CAO & CTO Positioning */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start lg:items-center">

          {/* LEFT: THE IDENTITY TRIAD */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-10">
                <span className="text-gold font-black tracking-[0.5em] text-[9px] uppercase bg-gold/5 px-3 py-1 border border-gold/20">
                  Institutional Mandate
                </span>
                <div className="h-px w-12 bg-gold/20" />
              </div>

              <h1 className="text-4xl md:text-7xl font-display tracking-tighter uppercase leading-[1.3] mb-12 text-white">
                Governance <br />
                <span className="text-gold italic font-serif font-light opacity-90">Infrastructure.</span> <br />
                Aesthetics.
              </h1>

              <div className="flex flex-col md:flex-row md:items-center gap-10 border-l border-gold/40 pl-8">
                <p className="text-white/90 text-sm md:text-lg font-light tracking-wide max-w-md leading-relaxed">
                  Leading the <span className="text-gold font-bold">Digital Sovereignty</span> and Architectural Curation of the Grupo Financiero Atlántida ecosystem.
                </p>
                <div className="hidden md:block w-px h-12 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-[8px] text-white/40 uppercase tracking-[0.3em] font-black mb-1">Current Status</span>
                  <span className="text-[10px] text-gold font-mono uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" /> 
                    Unified Control Active
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: STRATEGIC BENCHMARKS (The Stats) */}
          <div className="lg:col-span-4 flex flex-col gap-4 relative z-30">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="space-y-4"
            >
              {/* STAT MODULE: CAO Governance */}
              <div className="group relative p-6 bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.05]">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                   <Shield size={14} className="text-gold" />
                </div>
                <p className="text-gold font-display text-2xl mb-1 tracking-tighter">20+ YEARS</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-black">Institutional Governance</p>
              </div>

              {/* STAT MODULE: CTO Fintech Transformation */}
              <div className="group relative p-6 bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.05]">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                   <Cpu size={14} className="text-gold" />
                </div>
                <p className="text-gold font-display text-2xl mb-1 tracking-tighter">FINTECH CORE</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-black">Sovereign Infrastructure</p>
              </div>

              {/* STAT MODULE: KONCEPTO Design Culture */}
              <div className="group relative p-6 bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.05]">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                   <Palette size={14} className="text-gold" />
                </div>
                <p className="text-gold font-display text-2xl mb-1 tracking-tighter">KONCEPTO</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-black">Aesthetic Essentialism</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 3. INTERFACE ELEMENTS: Progression Indicators */}
      <div className="absolute bottom-12 left-6 md:left-12 flex flex-col gap-4 z-30">
         <div className="flex gap-2">
            {[0, 1].map((i) => (
              <div 
                key={i} 
                className={`h-[1px] transition-all duration-1000 ${i === index ? "w-16 bg-gold" : "w-6 bg-white/10"}`} 
              />
            ))}
         </div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-12 right-6 md:right-12 text-gold/30 z-30"
      >
        <ArrowDown size={18} strokeWidth={1} />
      </motion.div>

      {/* ARCHITECTURAL CORNER ACCENTS */}
      <div className="absolute top-32 lg:top-40 left-6 w-10 h-10 border-l border-t border-gold/20 z-10" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-r border-b border-gold/20 z-10" />
    </section>
  );
}