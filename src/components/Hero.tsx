"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-obsidian text-bone px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-display mb-6">Strategic Vision & <br/> Aesthetic Innovation</h1>
        <p className="text-gold tracking-[0.4em] uppercase text-sm">David Jackson Fernandez</p>
      </motion.div>
    </section>
  );
}
