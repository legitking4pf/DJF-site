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
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section id="hero" className="relative w-full bg-obsidian text-bone overflow-hidden flex flex-col selection:bg-gold/30"
      style={{ 
        /* MATHEMATICAL ALIGNMENT */
        marginTop: 'var(--header-height, 0px)', 
        minHeight: 'calc(100vh - var(--header-height, 0px))' 
      }}
    >
      {/* 1. ARCHITECTURAL VIDEO VIEWPORT */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
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
              className="h-full w-full object-cover brightness-[0.6]"
            >
              <source src={videos[index]} type="video/mp4" />
            </video>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 z-10 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" /> 
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
      </div>

      {/* 2. COMMAND CONTENT: Center-aligned within the available viewport */}
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-8 md:px-12 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start lg:items-center">

          {/* LEFT: THE IDENTITY TRIAD */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6 md:mb-10">
                <span className="text-gold font-black tracking-[0.5em] text-[9px] uppercase bg-gold/5 px-3 py-1 border border-gold/20">
                  Institutional Mandate
                </span>
                <div className="h-px w-12 bg-gold/20" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display tracking-tighter uppercase leading-[1.1] mb-8 md:mb-12 text-white">
                Governance <br />
                <span className="text-gold italic font-serif font-light opacity-90">Infrastructure.</span> <br />
                Aesthetics.
              </h1>

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 border-l border-gold/40 pl-6 md:pl-8">
                <p className="text-white/90 text-sm md:text-lg font-light tracking-wide max-w-md leading-relaxed">
                  Leading the <span className="text-gold font-bold">Digital Sovereignty</span> and Architectural Curation of the Grupo Financiero Atlántida ecosystem [cite: 2025-12-09].
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

          {/* RIGHT: STRATEGIC BENCHMARKS */}
          <div className="lg:col-span-4 flex flex-col gap-3 md:gap-4 relative z-30">
            {[
              { label: "20+ YEARS", sub: "Institutional Governance", icon: Shield },
              { label: "FINTECH CORE", sub: "Sovereign Infrastructure", icon: Cpu },
              { label: "KONCEPTO", sub: "Aesthetic Essentialism", icon: Palette }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 + (i * 0.1) }}
                className="group relative p-4 md:p-6 bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-gold/40 transition-all"
              >
                <div className="absolute top-0 right-0 p-3 md:p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                   <stat.icon size={14} className="text-gold" />
                </div>
                <p className="text-gold font-display text-xl md:text-2xl mb-1 tracking-tighter">{stat.label}</p>
                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-white/60 font-black">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. INTERFACE ELEMENTS */}
      <div className="absolute bottom-10 left-8 md:left-12 flex flex-col gap-4 z-30">
         <div className="flex gap-2">
            {[0, 1].map((i) => (
              <div 
                key={i} 
                className={`h-[1px] transition-all duration-1000 ${i === index ? "w-12 md:w-16 bg-gold" : "w-4 md:w-6 bg-white/10"}`} 
              />
            ))}
         </div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-10 right-8 md:right-12 text-gold/30 z-30"
      >
        <ArrowDown size={18} strokeWidth={1} />
      </motion.div>

      {/* ARCHITECTURAL CORNER ACCENTS */}
      <div className="absolute top-8 md:top-12 left-8 w-8 h-8 md:w-10 md:h-10 border-l border-t border-gold/20 z-10" />
      <div className="absolute bottom-8 right-8 w-8 h-8 md:w-10 md:h-10 border-r border-b border-gold/20 z-10" />
    </section>
  );
}