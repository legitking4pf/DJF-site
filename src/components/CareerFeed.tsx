"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';

interface LedgerItem {
  id: number;
  category: string;
  title: string;
  desc: string;
  image: string;
  date: string;
  link: string;
  cta: string;
  isHighlight?: boolean;
}

const ledgerData: LedgerItem[] = [
   {
   id: 1,
   category: "Press",
   title: "Banco Atlántida opens new branches in La Ceiba and Quimistán, Santa Bárbara, consolidating its presence nationwide.",
   desc: "As part of its expansion strategy and closer relationship with customers, Banco Atlántida opened new branches in La Ceiba and Quimistán, Santa Bárbara, strengthening its national presence and reaffirming its leadership in the Honduran financial system.",
   image: "https://www.bancatlan.hn/sala-de-prensa/img/2026-01-09-plaza-teknos-quimistan/portada.jpg",
   date: "JAN 9, 2026",
   link: "https://www.bancatlan.hn/sala-de-prensa/2026-01-09-plaza-teknos-quimistan.php",
   cta: "Read report"
 },
  {
    id: 2,
    category: "Business",
    title: "VIII CEAPI Congress: Guillermo Bueso on Latin American Investment in Spain",
    desc: "Seville hosted more than 500 business leaders to strengthen economic ties. Guillermo Bueso participated as a panelist, highlighting GFA as the first Honduran financial group authorized to operate within the Spanish banking system following the acquisition of EBN Banco and EBN Capital stakes.",
    image: "https://cdn.prod.website-files.com/68363d5a1fb3537423263bff/6841f518e2c7e3dea8ea93a4_ceapi-2024-portada.jpg",
    date: "JUNE 04, 2025",
    link: "https://invatlan.hn/blogs/guillermo-bueso-presidente-de-grupo-financiero-atlantida-participa-en-el-viii-congreso-ceapi-sobre-inversion-latinoamericana-en-espana",
    cta: "Read report"
  },
  {
    id: 3,
    category: "Investment",
    title: "Strategic Wealth Acceleration: $1,000 Pro-Tier Now Live",
    desc: "Our strategic growth network has expanded, offering a dedicated $1,000 tier designed for long-term digital asset appreciation and institutional security.",
    image: "https://images.unsplash.com/photo-1611974717482-95edec13969c?auto=format&fit=crop&q=80",
    date: "JAN 21, 2026",
    link: "/wealth-acceleration",
    cta: "Access Opportunity",
    isHighlight: true
  }
];

export default function ExecutiveLedger() {
  return (
    <section id="ledger" className="py-20 md:py-32 bg-[#F8F8F8] text-obsidian px-6">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-gold/30 pt-8 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-3xl">
            <span className="text-gold font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 block">
              Intelligence & Affiliates
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic tracking-tighter leading-none mb-6">
              The Executive <span className="font-black not-italic text-obsidian">Ledger</span>
            </h2>
          </div>
          <p className="text-[16px] md:text-base max-w-sm font-light leading-relaxed">
            Personalized updates on digital transformation, strategic investments, and milestones across the GFA ecosystem.
          </p>
        </div>

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
              <div className="relative aspect-[4/3] overflow-hidden bg-obsidian">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-obsidian/90 backdrop-blur-md text-white text-[10px] md:text-[13px] font-bold uppercase tracking-widest px-3 py-1.5 border border-gold/30">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex items-center gap-2 text-italic text-[10px] font-medium mb-4">
                  <Clock size={12} /> <span>{item.date}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold leading-tight uppercase tracking-tighter mb-4 group-hover:text-gold transition-colors duration-300 line-clamp-2 h-[3.5rem] overflow-hidden text-ellipsis">
                  {item.title}
                </h3>

                <p className="text-[14px] font-light leading-relaxed mb-8 line-clamp-3 overflow-hidden text-ellipsis">
                  {item.desc}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-widest transition-all duration-300
                      ${item.isHighlight ? "bg-gold text-obsidian px-5 py-2.5 rounded-sm shadow-lg shadow-gold/20" : "text-obsidian hover:text-gold"}`}
                  >
                    {item.cta} <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
