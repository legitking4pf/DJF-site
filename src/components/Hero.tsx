"use client";
import {
  motion
} from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-obsidian text-bone overflow-hidden">
      {/* 1. Centered & Covering Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          /* 'object-cover' ensures it fills the width/height.
             'object-center' keeps the focus on the middle of the frame.
          */
          className="h-full w-full object-cover object-center opacity-40 grayscale"
          >
          <source
          src="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Hero%20Video%20Background-P51XsIl1YPox7tNRCZLrxRKES9if7c"
          type="video/mp4"
          />
      </video>
    </div>

    {/* 2. Professional Overlays */}
    {/* Radial Gradient to focus eye on the center text */}
    <div className="absolute inset-0 z-10 bg-radial-gradient from-transparent to-obsidian/90" />

    {/* Subtle Fintech Grid Texture */}
    <div className="absolute inset-0 z-10 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />

    {/* 3. Centered Content Layer */}
    <motion.div
      initial={ { opacity: 0, y: 30 }}
      animate={ { opacity: 1, y: 0 }}
      transition={ { duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // Elegant executive easing
      className="relative z-20 text-center max-w-5xl px-4"
      >
      <h1 className="text-5xl md:text-8xl font-display mb-8 tracking-tighter uppercase leading-[0.9]">
        AT THE INTERSECTION OF <br />
      FIN<span className="text-gold italic">TECH</span>, CORPORATE <br />
    STRATEGY AND DESIGN
  </h1>

  <div className="flex flex-col items-center gap-6">
    <div className="h-px w-24 bg-gold/50" />
    <div className="space-y-1">
      <p className="text-gold tracking-[0.5em] uppercase text-sm font-bold">
        David Jackson Fernandez
      </p>
      <p className="text-bone/40 text-[10px] uppercase tracking-[0.3em] font-light">
        Strategic Growth • Digital Integration • Aesthetic Innovation
      </p>
    </div>
  </div>
</motion.div>

  {/* 4. Elegant Scroll Indicator */}
  <motion.div
    animate={ { y: [0, 8, 0] }}
    transition={ { repeat: Infinity, duration: 3 }}
    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
    >
    <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent" />
  </motion.div>
</section>
);
}