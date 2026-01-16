"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="relative h-screen w-full flex items-center justify-start bg-obsidian text-bone overflow-hidden">
      {/* 1. Cross-Fading Video Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover object-center grayscale"
            >
              <source src={videos[index]} type="video/mp4" />
            </video>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Linear Gradient Scrim (Heavy on left for text readability) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian via-obsidian/40 to-transparent" />

      {/* 3. Left-Justified Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          {/* David Jackson Fernandez Tag */}
          <p className="text-gold tracking-[0.5em] uppercase text-xs font-bold mb-6">
            David Jackson Fernandez
          </p>

          {/* 3-Line Headline */}
          <h1 className="text-5xl md:text-7xl font-display tracking-tighter uppercase leading-[1.1] mb-8 text-left">
            FIN<span className="text-gold italic">TECH</span> INTEGRATION <br />
            CORPORATE STRATEGY <br />
            & MODERN DESIGN
          </h1>
          
          {/* Executive Subtext */}
          <div className="flex items-center gap-6">
            <div className="h-px w-12 bg-gold" />
            <p className="text-bone/50 text-[10px] uppercase tracking-[0.3em] font-light">
              Strategic Growth • Digital Transformation • GFA 2030
            </p>
          </div>
        </motion.div>
      </div>

      {/* 4. Minimalist Architectural Detail (Vertical Line) */}
      <div className="absolute left-12 bottom-0 w-px h-32 bg-gradient-to-t from-gold/50 to-transparent z-20 hidden md:block" />
    </section>
  );
}
