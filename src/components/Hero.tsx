"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Palette, ArrowDown, Fingerprint } from 'lucide-react';

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
    <section className="relative min-h-screen w-full bg-obsidian text-bone overflow-hidden flex flex-col justify-center selection:bg-gold/30">
      
      {/* 1. ARCHITECTURAL VIDEO VIEWPORT */}
      <div className="absolute inset-0 z-0 flex items-center justify-center p-4 md:p-12 lg:p-24">
        <div className="relative w-full h-full overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <video 
                key={`video-${index}`}
                autoPlay 
                muted 
                loop 
                playsInline 
                className="h-full w-full object-cover brightness-75 transition-all duration-1000"
              >
                <source src={videos[index]} type="video/mp4" />
              </video>
            </motion.div>
          </AnimatePresence>
          
          {/* DIGITAL OVERLAYS: CTO/CAO Persona */}
          <div className="absolute inset-0 z-10 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
        </div>
      </div>

      {/* 2. COMMAND CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start lg:items-center">

          {/* LEFT: THE IDENTITY TRIAD */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-10">
                <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase bg-gold/5 px-3 py-1 border border-gold/20">
                  Institutional Mandate
                </span>
                <div className="h-px w-12 bg-gold/30" />
              </div>

              <h1 className="text-3xl md:text-6xl font-display tracking-tighter uppercase leading-[0.85] mb-12">
                Governance. <br />
                <span className="text-gold italic font-light">Infrastructure.</span> <br />
                Aesthetics.
              </h1>

              <div className="flex flex-col md:flex-row md:items-center gap-8 border-l border-gold/40 pl-8">
                <p className="text-white text-base md:text-xl font-light tracking-wide max-w-md leading-relaxed">
                  Leading the <span className="text-gold font-medium">Digital Sovereignty</span> and Architectural Curation of the Grupo Financiero Atlántida ecosystem.
                </p>
                <div className="hidden md:block w-px h-12 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-xs text-white/40 uppercase tracking-widest font-mono">Status</span>
                  <span className="text-xs text-gold font-mono uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" /> Unified Control Active
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: THE STRATEGIC BENCHMARKS */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="space-y-4"
            >
              {/* STAT MODULE 1: CAO */}
              <div className="group relative p-6 bg-white/[0.02] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-gold/50">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <Shield size={16} className="text-gold" />
                </div>
                <p className="text-gold font-bold text-2xl mb-1 tracking-tighter">20+ YEARS</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold">Institutional Governance</p>
              </div>

              {/* STAT MODULE 2: CTO */}
              <div className="group relative p-6 bg-white/[0.02] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-gold/50">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <Cpu size={16} className="text-gold" />
                </div>
                <p className="text-gold font-bold text-2xl mb-1 tracking-tighter">FINTECH CORE</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold">Sovereign Infrastructure</p>
              </div>

              {/* STAT MODULE 3: KONCEPTO */}
              <div className="group relative p-6 bg-white/[0.02] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-gold/50">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <Palette size={16} className="text-gold" />
                </div>
                <p className="text-gold font-bold text-2xl mb-1 tracking-tighter">KONCEPTO</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold">Aesthetic Essentialism</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 3. EXECUTIVE FOOTER: PROGRESSION */}
      <div className="absolute bottom-12 left-6 md:left-12 flex flex-col gap-4">
         <div className="flex gap-2">
            {[0, 1].map((i) => (
              <div 
                key={i} 
                className={`h-[2px] transition-all duration-1000 ${i === index ? "w-12 bg-gold" : "w-4 bg-white/20"}`} 
              />
            ))}
         </div>
         <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em]">Operational Phase 0{index + 1}</span>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-12 right-6 md:right-12 text-gold/50"
      >
        <ArrowDown size={20} strokeWidth={1.5} />
      </motion.div>

      {/* FRAME CORNERS */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-gold/20" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-gold/20" />
    </section>
  );
}
