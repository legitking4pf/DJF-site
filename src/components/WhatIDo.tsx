"use client";
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Palette, Globe, ArrowUpRight } from 'lucide-react';

const specializations = [
{
  title: "Digital Integration",
  desc: "Architecting secure digital banking ecosystems and leading large-scale fintech transformation across GFA subsidiaries.",
  icon: <Cpu className="w-5 h-5" />,
  role: "Chief Technology Officer",
  metric: "Digital Sovereignty",
  link: "/dossier/digital-integration",
  cta: "View Full Dossier"
},
{
  title: "Strategic Growth",
  desc: "Overseeing corporate governance, administrative efficiency, and institutional expansion within the GFA framework.",
  icon: <ShieldCheck className="w-5 h-5" />,
  role: "Chief Administrative Officer",
  metric: "Operational Compliance",
  link: "/dossier/strategic-growth",
  cta: "View Full Dossier"
},
{
  title: "Lifestyle Investment",
  desc: "Curating Spanish-inspired minimalist aesthetics and high-quality modern living through KONCEPTO Décor.",
  icon: <Palette className="w-5 h-5" />,
  role: "Founder & Creative Lead",
  metric: "Aesthetic Innovation",
  link: "https://konceptodecor.com",
  cta: "Explore Koncepto"
},
{
  title: "Wealth Acceleration",
  desc: "Direct access to managed asset portfolios, global stocks, and digital assets within our strategic growth network.",
  icon: <Globe className="w-5 h-5" />,
  role: "Strategic Advisor",
  metric: "Strategic Growth Network",
  link: "/wealth-acceleration", // Transition to the dedicated investment portal
  cta: "Access Opportunity"
}];

export default function WhatIDo() {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-obsidian text-bone border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display tracking-tighter mb-6 uppercase leading-tight">
              Strategic <span className="text-gold italic font-light md:block lg:inline">Ecosystems</span>
            </h2>
            <p className="text-[#838383] text-sm uppercase tracking-[0.2em] font-light max-w-md">
              A comprehensive scope of influence across Digital Banking, Corporate Administration, and Global Finance.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gold/20 mx-12 mb-4" />
          <div className="flex flex-col items-end">
             <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-[12px] font-bold mb-1">
              David Jackson Fernandez
            </span>
            <span className="text-bone/20 text-[9px] uppercase tracking-widest">CAO • CTO • FOUNDER</span>
          </div>
        </div>

        {/* The Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-bone/10 md:border-l">
          {specializations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative group p-8 md:p-12 border-b border-bone/10 md:border-r flex flex-col justify-between min-h-[400px] md:min-h-[480px] overflow-hidden transition-all duration-500 hover:bg-white/[0.01]"
            >
              {/* Subtle Hover Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-[100px] pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-12">
                  <div className="p-3 border border-gold/30 text-gold rounded-sm group-hover:bg-gold group-hover:text-obsidian transition-all duration-500 ease-out">
                    {item.icon}
                  </div>
                  <span className="text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-gold font-bold">
                    {item.metric}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display mb-6 uppercase tracking-tight group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[15px] md:text-lg text-[#838383] font-light leading-relaxed mb-8 max-w-sm">
                  {item.desc}
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex flex-col">
                  <span className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-bone/30 mb-2">Functional Role</span>
                  <span className="text-[14px] md:text-[16px] font-medium tracking-wide text-bone/90">{item.role}</span>
                </div>

                {/* Dynamic CTA Link */}
                <a 
                  href={item.link} 
                  className={`inline-flex items-center gap-3 text-[11px] md:text-[13px] uppercase tracking-[0.4em] font-bold transition-all duration-300 hover:gap-6
                    ${item.title === "Wealth Acceleration" ? "text-white bg-gold/10 px-4 py-2 -ml-4 rounded-sm border border-gold/20" : "text-gold"}`}
                >
                  {item.cta} <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}