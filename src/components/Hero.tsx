"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Cpu, Palette, ArrowDown } from "lucide-react";

const videos = [
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Hero%20Video%20Background-P51XsIl1YPox7tNRCZLrxRKES9if7c",
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Hero%20Video%20Background%202-NfCSrQzlEgyjm9E1s0Ag6XOLVMFnMJ"
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 12000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section
      id="hero"
      className="relative w-full bg-black text-white overflow-hidden"
      style={{
        marginTop: "var(--header-height, 0px)",
        minHeight: "calc(100vh - var(--header-height, 0px))"
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="absolute inset-0"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover brightness-[0.4] saturate-50"
            >
              <source src={videos[index]} type="video/mp4" />
            </video>
          </motion.div>
        </AnimatePresence>

        {/* STRONG DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/95" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-14 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 w-full">

          {/* LEFT */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="block mb-8 text-[10px] uppercase tracking-[0.35em] text-gold/80 border-b border-gold/40 w-fit pb-2">
                Institutional Portfolio
              </span>

              <h1 className="font-display uppercase tracking-tight leading-[0.95] text-[clamp(3rem,6vw,5.5rem)]">
                Governance
                <br />
                <span className="text-gold">Infrastructure</span>
                <br />
                <span className="text-white/60 font-serif italic">
                  Aesthetics
                </span>
              </h1>

              <p className="mt-10 max-w-xl text-white/80 text-lg leading-relaxed">
                Executive leadership in digital sovereignty and institutional
                systems architecture for the Grupo Financiero Atlántida ecosystem.
                Built for long-horizon control, resilience, and governance clarity.
              </p>

              <div className="mt-10 flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/70">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
                Unified Control Active
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 grid gap-6">
            {[
              { label: "20+ Years", sub: "Institutional Governance", icon: Shield },
              { label: "Fintech Core", sub: "Sovereign Infrastructure", icon: Cpu },
              { label: "Koncepto", sub: "Aesthetic Essentialism", icon: Palette }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                className="p-8 bg-black/60 border border-white/15 hover:border-gold/60 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gold text-2xl font-display">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-white/60">
                      {stat.sub}
                    </p>
                  </div>
                  <stat.icon size={22} className="text-gold/70" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-10 right-12 text-gold/40 z-30"
      >
        <ArrowDown size={18} strokeWidth={1} />
      </motion.div>
    </section>
  );
}