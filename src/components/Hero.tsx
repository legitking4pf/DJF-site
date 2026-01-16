"use client";
import {
  useState,
  useEffect
} from 'react';
import {
  motion,
  AnimatePresence
} from 'framer-motion';

const videos = [
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Hero%20Video%20Background-P51XsIl1YPox7tNRCZLrxRKES9if7c",
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Hero%20Video%20Background%202-NfCSrQzlEgyjm9E1s0Ag6XOLVMFnMJ"
];

export default function Hero() {
  const [index,
    setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1: 0));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-obsidian text-bone overflow-hidden flex flex-col justify-center">
      {/* 1. Background Video Engine */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={ { opacity: 0 }}
            animate={ { opacity: 0.3 }}
            exit={ { opacity: 0 }}
            transition={ { duration: 3 }}
            className="absolute inset-0 w-full h-full"
            >
            <video autoPlay muted loop playsInline className="h-full w-full object-cover grayscale">
              <source src={videos[index]} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatePresence>
      {/* Fintech Circuit Overlay (as seen in image) */}
      <div className="absolute inset-0 z-10 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-obsidian via-obsidian/60 to-transparent" />
    </div>

    <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

        {/* LEFT COLUMN: BRANDING & HEADLINE */}
        <motion.div
          initial={ { opacity: 0, x: -40 }}
          animate={ { opacity: 1, x: 0 }}
          transition={ { duration: 1.2 }}
          >
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-bold mb-6">
            David Jackson Fernandez
          </p>
          <h1 className="text-4xl md:text-7xl font-display tracking-tighter uppercase leading-[1] mb-8 text-left border-b border-gold/20 pb-8">
            AT THE INTERSECTION OF <br />
          FIN<span className="text-gold italic">TECH</span>, CORPORATE <br />
        STRATEGY, AND DESIGN
      </h1>
      <p className="text-bone/60 uppercase text-[10px] tracking-[0.3em] font-light">
        Leading Digital Transformation and Aesthetic Innovation
      </p>
    </motion.div>

    {/* RIGHT COLUMN: QUICK STATS BUTTONS */}
    <motion.div
      initial={ { opacity: 0, y: 40 }}
      animate={ { opacity: 1, y: 0 }}
      transition={ { duration: 1.2, delay: 0.3 }}
      className="space-y-4 max-w-md lg:ml-auto"
      >
      <h3 className="text-gold tracking-widest uppercase text-[10px] font-bold mb-6">Quick Stats</h3>

      {/* Stat Button 1 */}
      <div className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-gold/10 hover:border-gold/50 cursor-pointer">
        <div className="flex flex-col">
          <span className="text-gold font-bold text-lg">20+</span>
          <span className="text-[10px] uppercase tracking-widest text-bone/60">Years in Finance</span>
        </div>
        <div className="w-2 h-2 bg-gold/50 rotate-45 group-hover:bg-gold" />
      </div>

      {/* Stat Button 2 */}
      <div className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-gold/10 hover:border-gold/50 cursor-pointer">
        <div className="flex flex-col">
          <span className="text-gold font-bold text-lg">10+</span>
          <span className="text-[10px] uppercase tracking-widest text-bone/60">Digital Projects</span>
        </div>
        <div className="w-2 h-2 bg-gold/50 rotate-45 group-hover:bg-gold" />
      </div>

      {/* Stat Button 3 */}
      <div className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-gold/10 hover:border-gold/50 cursor-pointer">
        <div className="flex flex-col">
          <span className="text-gold font-bold text-lg inline-flex items-center gap-2">
            GLOBAL
          </span>
          <span className="text-[10px] uppercase tracking-widest text-bone/60">Operations & Strategy</span>
        </div>
        <div className="w-2 h-2 bg-gold/50 rotate-45 group-hover:bg-gold" />
      </div>
    </motion.div>

  </div>
</div>

  {/* Decorative Corner Elements (Executive Aesthetics) */}
  <div className="absolute top-10 left-10 w-8 h-8 border-l border-t border-gold/30 hidden md:block" />
  <div className="absolute bottom-10 right-10 w-8 h-8 border-r border-b border-gold/30 hidden md:block" />
</section>
);
}