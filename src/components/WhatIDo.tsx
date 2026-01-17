"use client";
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Palette, Globe, ArrowUpRight } from 'lucide-react';

const specializations = [
{
  title: "Digital Integration",
  desc: "Architecting GFA's 2030 vision through secure digital banking and fintech transformation.",
  icon: <Cpu className="w-5 h-5" />,
  role: "Chief Technology Officer",
  metric: "Vision 2030 Alignment",
  link: "/src/components/dossier/digital-integration.tsx"
},
{
  title: "Strategic Growth",
  desc: "Overseeing corporate governance and administrative efficiency for global expansion.",
  icon: <ShieldCheck className="w-5 h-5" />,
  role: "Chief Administrative Officer",
  metric: "Operational Compliance",
  link: "/dossier/corporate-strategy"
},
{
  title: "Lifestyle Investment",
  desc: "Curating Spanish-inspired minimalist aesthetics through KONCEPTO Décor.",
  icon: <Palette className="w-5 h-5" />,
  role: "Founder & Creative Lead",
  metric: "Aesthetic Innovation",
  link: "https://konceptodecor.com"
},
{
  title: "Wealth Acceleration",
  desc: "Navigating international markets within our strategic growth network.",
  icon: <Globe className="w-5 h-5" />,
  role: "Strategic Advisor",
  metric: "Global Market Reach",
  link: "/dossier/investment-networks"
}];

export default function WhatIDo() {
  return (
    <section id="capabilities" className="py-32 bg-obsidian text-bone border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-display tracking-tighter mb-6 uppercase">
              Strategic <span className="text-gold italic font-light">Ecosystems</span>
            </h2>
            <p className="text-ash text-sm uppercase tracking-[0.2em] font-light max-w-md">
              A comprehensive scope of influence across Digital Banking, Corporate Administration, and High-End Design.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gold/20 mx-12 mb-4" />
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">
            David Jackson Fernandez
          </span>
        </div>

        {/* The Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-bone/10">
          {specializations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-12 border-r border-b border-bone/10 flex flex-col justify-between min-h-[400px] overflow-hidden transition-colors hover:bg-white/[0.02]"
            >
              {/* Background Accent Animation */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 border border-gold/30 text-gold rounded-sm group-hover:bg-gold group-hover:text-obsidian transition-colors duration-500">
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                    {item.metric}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-ash font-light leading-relaxed mb-8 max-w-xs">
                  {item.desc}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-bone/40 mb-1">Functional Role</span>
                  <span className="text-sm font-medium tracking-wide">{item.role}</span>
                </div>

                {/* External Dossier Link */}
                <a 
                  href={item.link} 
                  className="inline-flex items-center gap-2 text-gold text-[10px] uppercase tracking-[0.4em] font-bold hover:gap-4 transition-all"
                >
                  View Full Dossier <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}