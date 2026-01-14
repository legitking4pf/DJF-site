"use client";
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Palette, Globe } from 'lucide-react';

const specializations = [
  {
    title: "Digital Integration",
    desc: "Architecting GFA's 2030 vision through secure digital banking and fintech transformation.",
    icon: <Cpu className="w-6 h-6 text-gold" />,
    role: "CTO"
  },
  {
    title: "Strategic Growth",
    desc: "Overseeing corporate governance and administrative efficiency for global expansion.",
    icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    role: "CAO"
  },
  {
    title: "Lifestyle Investment",
    desc: "Curating Spanish-inspired minimalist aesthetics through KONCEPTO Décor.",
    icon: <Palette className="w-6 h-6 text-gold" />,
    role: "Founder"
  },
  {
    title: "Wealth Acceleration",
    desc: "Navigating international markets within our strategic growth network.",
    icon: <Globe className="w-6 h-6 text-gold" />,
    role: "Advisory"
  }
];

export default function WhatIDo() {
  return (
    <section id="portfolio" className="py-32 bg-obsidian text-bone">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-display tracking-tight mb-4 uppercase">
            Strategic <span className="text-gold italic font-light">Ecosystems</span>
          </h2>
          <div className="h-px w-24 bg-gold/50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {specializations.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
              className="p-10 border border-bone/5 flex flex-col justify-between h-[300px] transition-all duration-500"
            >
              <div>
                {item.icon}
                <h3 className="text-xl font-display mt-6 mb-3 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-sm text-ash font-light leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60">{item.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
