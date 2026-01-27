"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck, Fingerprint, Activity } from 'lucide-react';
import Link from 'next/link';

export default function ExecutiveProfile() {
  const positions = [
  {
    role: "Chief Administration Officer",
    company: "Grupo Financiero Atlántida",
    url: "https://www.grupofinancieroatlantida.com",
    tag: "Institutional Governance",
    ref: "GFA-CAO-2030"
  },
  {
    role: "Chief Technology Officer",
    company: "Banco Atlántida Honduras",
    url: "https://www.bancatlan.hn",
    tag: "Digital Infrastructure",
    ref: "BA-CTO-CORE"
  },
  {
    role: "Founder & Creative Lead",
    company: "KONCEPTO Décor",
    url: "https://www.konceptodecor.com",
    tag: "Design Innovation",
    ref: "KD-EST-2018"
  }];
  
  return (
    <section id="profile" className="relative py-32 md:py-48 bg-[#FBFBF9] text-obsidian overflow-hidden border-t border-gold/10">
      {/* BACKGROUND DECOR: Blueprints */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" className="stroke-obsidian fill-none">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* HEADER: Institutional Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="text-gold w-4 h-4" />
              <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">Official Executive Mandate</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-6xl font-serif italic tracking-tighter leading-[] mb-0"
            >
              Strategic <br /> <span className="not-italic font-black text-obsidian uppercase">Sovereignty</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <div className="space-y-2">
              <p className="text-obsidian font-bold text-2xl uppercase tracking-tighter">David Jackson Fernandez</p>
              <div className="flex items-center lg:justify-end gap-3 text-gold/60 text-[11px] font-mono tracking-widest uppercase font-bold">
                 <Fingerprint size={14} /> Ref: 71-DJF-GFA
              </div>
            </div>
          </div>
        </div>

        {/* THE POSITIONS LEDGER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <div className="space-y-0 border-t border-obsidian/20">
              {positions.map((pos, idx) => (
                <motion.a
                  key={idx}
                  href={pos.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.8 }}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-obsidian/10 hover:bg-white transition-all duration-500 px-6"
                >
                  <div className="flex gap-8 items-start">
                    <span className="text-gold font-mono text-xs pt-1 opacity-40 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.4em] text-gold font-black block mb-3">
                        {pos.tag}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-display uppercase tracking-tight group-hover:text-gold transition-colors">
                        {pos.role}
                      </h3>
                      <p className="text-xs font-mono text-ash mt-2 opacity-0 group-hover:opacity-100 transition-all">ID: {pos.ref}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-6 md:mt-0">
                    <span className="text-[13px] uppercase tracking-widest font-bold text-obsidian/40 group-hover:text-obsidian transition-colors">
                      {pos.company}
                    </span>
                    <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                      <ArrowUpRight size={18} className="text-gold group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* NARRATIVE SECTION */}
            <div className="mt-24 space-y-12">
               <h4 className="text-[10px] uppercase tracking-[0.6em] text-gold font-black">Strategic Intent</h4>
               <p className="text-3xl md:text-5xl font-light leading-[1.1] text-obsidian tracking-tight">
                Architecting the <span className="italic font-serif">permanent systems</span> that bridge the gap between cloud-native governance and Spanish Modernist aesthetics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-ash text-base md:text-lg leading-relaxed font-light">
                <p> As a dual-mandate executive within the GFA ecosystem, David Jackson Fernandez maintains a singular focus: the absolute elimination of operational friction. Through high-precision Digital Integration and administrative rigor, he secures the velocity of wealth across regional borders, aligning every milestone with a Strategic Growth Network built for long-term sustainability.
              </p>
              <p>This philosophy extends into his curation of the physical realm via KONCEPTO Décor. Here, he employs architectural essentialism to curate minimalist environments that reflect the structural integrity and high-end privacy of a well-governed financial system        </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR: SYSTEM BENCHMARKS */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-obsidian p-10 text-bone shadow-2xl relative overflow-hidden">
               {/* Pulse Animation for Status */}
               <div className="absolute top-0 right-0 p-6">
                 <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                   <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">System Active</span>
                 </div>
               </div>

              <h4 className="text-gold uppercase tracking-[0.5em] text-[10px] font-black mb-16">Operational Status</h4>
              
              <div className="space-y-12">
                <div className="border-l border-gold/30 pl-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Regional Authority</p>
                  <p className="text-3xl font-display text-white">HND // ES // GT</p>
                  <div className="flex gap-1 mt-2">
                    {[1,2,3].map(i => <div key={i} className="h-1 w-4 bg-gold" />)}
                  </div>
                </div>

                <div className="border-l border-gold/30 pl-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Digital Integration</p>
                  <p className="text-3xl font-display text-white uppercase">Sovereign Tier</p>
                  <p className="text-[10px] text-white/30 mt-2 font-mono">100% Structural Consistency</p>
                </div>

                <div className="border-l border-gold/30 pl-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Design Philosophy</p>
                  <p className="text-3xl font-display text-white uppercase">Essentialism</p>
                  <p className="text-[10px] text-white/30 mt-2 font-mono">KONCEPTO Structural Rigor</p>
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-white/10">
                 <div className="flex items-center gap-4">
                   <Activity className="text-gold w-4 h-4" />
                   <span className="text-[10px] uppercase tracking-[0.4em] font-bold">2030 Vision Compliance</span>
                 </div>
              </div>
            </div>

            <div className="p-10 border border-obsidian/5 bg-white shadow-sm flex flex-col items-center text-center">
              <p className="text-ash text-xs uppercase tracking-widest leading-loose font-medium mb-6">
                "We don't manage trends; <br /> we architect permanence."
              </p>
              <div className="w-8 h-[1px] bg-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}