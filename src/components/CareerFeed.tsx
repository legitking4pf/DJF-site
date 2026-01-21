"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Clock } from 'lucide-react';

const ledgerData = [
  {
    id: 1,
    category: "Institutional",
    title: "GFA Strategic Expansion: Panama & Ecuador Integration",
    desc: "Overseeing operational alignment to ensure GFA trademark standards and regulatory compliance across the new regional acquisitions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    date: "JAN 20, 2026",
    link: "/dossier/strategic-growth",
    cta: "Full Insight"
  },
  {
    id: 2,
    category: "Technological",
    title: "Banco Atlántida: Cloud-Native Architecture Deployment",
    desc: "Leading Phase III of digital migration to secure digital sovereignty and enhance cross-border banking efficiency.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    date: "JAN 18, 2026",
    link: "/dossier/digital-integration",
    cta: "Full Insight"
  },
  {
    id: 3,
    category: "Investment",
    title: "New Pro-Tier Opportunity Now Live",
    desc: "The $1,000 Pro-Tier is now accessible within our strategic growth network, engineered for consistent wealth acceleration.",
    image: "https://images.unsplash.com/photo-1611974717482-95edec13969c?auto=format&fit=crop&q=80",
    date: "JAN 15, 2026",
    link: "/wealth-acceleration",
    cta: "Access Opportunity",
    isHighlight: true
  }
];

export default function ExecutiveLedger() {
  return (
    <section id="ledger" className="py-20 md:py-32 bg-[#F8F8F8] text-obsidian px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section: Minimalist & Balanced */}
        <div className="border-t border-gold/30 pt-8 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-3xl">
            <span className="text-gold font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 block">
              Intelligence & Affiliates
            </span>
            <h2 className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-none mb-6">
              The Executive <span className="font-black not-italic text-obsidian">Ledger</span>
            </h2>
          </div>
          <p className="text-[16px] md:text-base max-w-sm font-light leading-relaxed">
            Personalized updates on digital transformation, strategic investments, and design milestones across the GFA ecosystem. [cite: 2025-12-09]
          </p>
        </div>

        {/* Responsive Grid System - No 'Add Feed' Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {ledgerData.map((item, index) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex flex-col h-full bg-white border border-gray-100 p-1 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-obsidian">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-obsidian/90 backdrop-blur-md text-white text-[10px] md: text-[13px] font-bold uppercase tracking-widest px-3 py-1.5 border border-gold/30">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex items-center gap-2 text-[10px] font-medium mb-4">
                  <Clock size={12} /> <span>{item.date}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold leading-tight uppercase tracking-tighter mb-4 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-ash text-[14px] font-light leading-relaxed mb-8 line-clamp-3">
                  {item.desc} [cite: 2025-12-09]
                </p>

                {/* Footer / CTA */}
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <a 
                    href={item.link}
                    className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-widest transition-all duration-300
                      ${item.isHighlight ? "bg-gold text-obsidian px-5 py-2.5 rounded-sm shadow-lg shadow-gold/20" : "text-obsidian hover:text-gold"}`}
                  >
                    {item.cta} <ArrowUpRight size={14} />
                  </a>
                  <span className="text-[10px] font-serif italic">David Jackson Fernández</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
