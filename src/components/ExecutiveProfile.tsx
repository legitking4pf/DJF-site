"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';

export default function ExecutiveProfile() {
  const positions = [
    {
      role: "Chief Administration Officer",
      company: "Grupo Financiero Atlántida",
      url: "https://www.gfa.hn", 
      tag: "Group Governance"
    },
    {
      role: "Chief Technology Officer",
      company: "Banco Atlántida Honduras",
      url: "https://www.bancatlan.hn",
      tag: "Digital Core"
    },
    {
      role: "Founder",
      company: "KONCEPTO Décor",
      url: "https://www.konceptodecor.com",
      tag: "Design Culture"
    }
  ];

  return ( 
    <section className="relative py-32 bg-bone text-obsidian overflow-hidden border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* SECTION 1: HEADER & POSITIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-[0.85] mb-12"
            >
              Institutional <br /> Authority
            </motion.h2>

            {/* THE EXECUTIVE POSITIONS LEDGER */}
            <div className="space-y-0 border-t border-obsidian/10">
              {positions.map((pos, idx) => (
                <motion.a
                  key={idx}
                  href={pos.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-obsidian/10 hover:bg-gold/[0.03] transition-colors px-4"
                >
                  <div>
                    <span className="text-[13px] uppercase tracking-[0.4em] text-gold font-bold block mb-2">
                      {pos.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display uppercase group-hover:translate-x-2 transition-transform duration-300">
                      {pos.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 mt-3 md:mt-0">
                    <span className="text-sm uppercase tracking-widest text-obsidian/50 group-hover:text-obsidian transition-colors">
                      {pos.company}
                    </span>
                    <ArrowUpRight size={20} className="text-gold opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:text-right flex flex-col justify-between py-4">
            <div>
              <p className="text-gold font-serif italic text-4xl">David Jackson Fernandez</p>
              <p className="text-obsidian/40 text-[13px] uppercase tracking-[0.4em] mt-3">Core Mandate // GFA Executive Office</p>
            </div>
            
            <div className="hidden lg:block opacity-20 mt-auto self-end">
                <div className="w-24 h-1 bg-gold mb-2" />
                <div className="w-16 h-1 bg-gold" />
            </div>
          </div>
        </div>

        {/* SECTION 2: THE "GRID OF AUTHORITY" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 border-t border-obsidian/10 pt-20">
          
          {/* Left: Discerning Narrative */}
          <div className="lg:col-span-7 space-y-10">
            <p className="text-3xl md:text-4xl font-light leading-tight text-obsidian/95">
              Executing at the intersection of <span className="text-gold font-medium">Digital Sovereignty</span> and Administrative Rigor, orchestrating the structural integrity of the Group.
            </p>
            
            <div className="space-y-8 text-lg md:text-xl text-obsidian/70 leading-relaxed font-light max-w-2xl">
              <p>
                As Chief Technology Officer and Chief Administrative Officer, his mandate is not merely to manage, but to insulate and accelerate multi-regional operations. He treats technology as a defensive asset and administration as a high-precision instrument.
              </p>
              
              <p className="border-l-2 border-gold pl-8 italic bg-gold/[0.02] py-6 text-xl">
                The methodology rejects the volatility of market trends in favor of architecting permanent systems—bridging the gap between cloud-native infrastructure and the tangible, minimalist luxury of KONCEPTO Décor environments.
              </p>
              
              <p>
                Every deployment is subjected to a philosophy of "Essentialism": the removal of friction to reveal the absolute velocity of wealth and strategic growth.
              </p>
            </div>
            
            <div className="pt-6">
              <button className="flex items-center gap-6 group">
                <div className="w-14 h-14 border border-gold rounded-full flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                  <Download className="text-gold group-hover:text-bone w-5 h-5" />
                </div>
                <span className="text-sm uppercase tracking-[0.5em] font-bold">Download Executive Dossier</span>
              </button>
            </div>
          </div>

          {/* Right: Skeptical Benchmarks */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white/40 p-10 border border-white/60 backdrop-blur-md relative overflow-hidden">
              <h4 className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-12">Operational Benchmarks</h4>
              
              <div className="space-y-12">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-obsidian/40 mb-2">Regional Reach</p>
                  <p className="text-4xl font-display">HND // ES // GT</p>
                  <p className="text-xs text-obsidian/60 mt-2 italic">Strategic Hub Connectivity</p>
                </div>

                <div className="grid grid-cols-1 gap-10">
                  <div className="group">
                    <p className="text-sm uppercase tracking-[0.3em] text-obsidian/40 mb-2 group-hover:text-gold transition-colors">Digital Sovereignty</p>
                    <p className="text-4xl font-display">100% INTEGRATED</p>
                    <p className="text-xs text-obsidian/60 mt-2 italic">Unified Administrative Core</p>
                  </div>
                  <div className="group">
                    <p className="text-sm uppercase tracking-[0.3em] text-obsidian/40 mb-2 group-hover:text-gold transition-colors">Asset Philosophy</p>
                    <p className="text-4xl font-display">ULTRA-MINIMAL</p>
                    <p className="text-xs text-obsidian/60 mt-2 italic">Precision-Led Curation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-10 border border-gold/20 bg-obsidian text-bone">
              <p className="text-xs uppercase tracking-[0.5em] text-gold mb-8 font-bold">Institutional Filters</p>
              <ul className="text-sm space-y-4 uppercase tracking-widest font-medium opacity-90">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gold rounded-full" /> Digital Sovereignty</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gold rounded-full" /> Strategic Governance</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gold rounded-full" /> Aesthetic Innovation</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gold rounded-full" /> Wealth Acceleration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
