"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  // Ensure the URL is the correct path to your asset
  const imageSrc = "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/smal%20screen%20background";
  
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-stone-50"
      style={{ 
        // Syncs with the CSS variable set in Header
        paddingTop: "var(--header-height, 96px)", 
        minHeight: "100vh" 
      }}
    >
      {/* 1. Background Layer */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={imageSrc}
          alt="Institutional Background"
          fill
          sizes="100vw"
          priority 
          className="object-cover object-center"
        />
        {/* TOP SCRIM: Ensures header visibility regardless of image brightness */}
        
        {/* SUBTLE OVERLAY: Gives that 'paper' or 'premium' texture look */}
        <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply" />
      </motion.div>

      {/* 2. Content Layer */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-96px)]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            {/* High-End Label */}
            <div className="mb-10 overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-amber-700
                font-bold border-l-2 border-amber-600 pl-6 py-1"
              >
                Executive Mandate 2026
              </motion.span>
            </div>

            {/* Headline: Designed for Mobile Impact */}
            <h1 className="text-5xl md:text-8xl font-light text-stone-900 leading-[1.05] mb-10 tracking-tight">
              Financial <span className="font-serif italic text-stone-700">Governance</span> <br className="hidden md:block" />
              Infrastructure for <br className="hidden md:block" />
              Modern Institutions
            </h1>

            {/* Subtext: Focused on your specific role and prestige */}
            <div className="max-w-xl space-y-6 mb-14">
              <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-light">
                The digital dossier of{" "}
                <span className="font-semibold text-stone-900 underline decoration-amber-600/30 underline-offset-4">
                  David Jackson Fernandez
                </span>. 
              </p>
              <p className="text-stone-500 text-sm md:text-base leading-relaxed uppercase tracking-widest border-t border-stone-200 pt-6">
                Chief Administration Officer · Grupo Financiero Atlantida <br />
                Chief Technology Officer · Banco Atlantida
              </p>
            </div>

            {/* Institutional CTA */}
            <div className="flex flex-wrap gap-8 items-center">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-stone-900 text-white text-xs font-bold tracking-[0.3em] uppercase overflow-hidden transition-all shadow-2xl"
              >
                <span className="relative z-10">Access Portfolio</span>
                <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </motion.button>

              <a href="#profile" className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 hover:text-amber-700 transition-colors flex items-center gap-4 group">
                <span className="w-8 h-[1px] bg-stone-300 group-hover:w-12 group-hover:bg-amber-600 transition-all" />
                Explore Dossier
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. Aesthetic Floor: Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-12 hidden lg:flex flex-col items-center gap-4"
      >
        <span className="[writing-mode:vertical-lr] text-[9px] uppercase tracking-[0.4em] text-stone-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent" />
      </motion.div>
    </section>
  );
}
