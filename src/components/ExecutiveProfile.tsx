"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ExecutiveProfile() {
  const positions = [
    {
      role: "Chief Administration Officer",
      company: "Grupo Financiero Atlántida",
      url: "https://www.gfa.hn", // Placeholder - verify actual GFA corporate link
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
      url: "https://www.konceptodecor.com", // Placeholder
      tag: "Design Culture"
    }
  ];

  return ( 
    <section className="relative py-32 bg-bone text-obsidian overflow-hidden border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* SECTION 1: HEADER & POSITIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-none mb-12"
            >
              Strategic <br /> Leadership
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
                  className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-obsidian/10 hover:bg-gold/[0.03] transition-colors px-2"
                >
                  <div>
                    <span className="text-[12px] uppercase tracking-[0.3em] text-gold font-bold block mb-1">
                      {pos.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display uppercase group-hover:translate-x-2 transition-transform duration-300">
                      {pos.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 mt-2 md:mt-0">
                    <span className="text-xs uppercase tracking-widest text-obsidian/40 group-hover:text-obsidian transition-colors">
                      {pos.company}
                    </span>
                    <ArrowUpRight size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:text-right flex flex-col justify-between py-2">
            <div>
              <p className="text-gold font-serif italic text-3xl">David Jackson Fernandez</p>
              <p className="text-obsidian/40 text-[12px] uppercase tracking-[0.3em] mt-2">Executive Profile — GFA</p>
            </div>
            
            {/* Minimalist QR/Auth Graphic (Optional style element) */}
            <div className="hidden lg:block opacity-20 mt-auto self-end">
                <div className="w-16 h-1 bg-gold mb-1" />
                <div className="w-12 h-1 bg-gold" />
            </div>
          </div>
        </div>

        {/* SECTION 2: THE "GRID OF AUTHORITY" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-obsidian/10 pt-16">
          
          {/* Left: Biography Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-2xl font-light leading-relaxed text-obsidian/90">
              Driving the <span className="text-gold font-medium">Digital Transformation</span> of Grupo Financiero Atlántida, David orchestrates the fusion of legacy financial stability with the agility of modern Fintech ecosystems.
            </p>
            <div className="prose prose-sm text-obsidian/70 leading-loose max-w-2xl">
              <p>
                As Chief Technology Officer and Chief Administrative Officer, his mandate encompasses the full spectrum of the GFA Strategic Vision 2030. From cloud infrastructure scaling to the curation of high-end corporate environments through KONCEPTO Décor, his work is defined by precision, minimalism, and strategic growth.
              </p>
            </div>
            
            {/* CTA: Download Bio */}
            <div className="pt-4">
              <button className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center group-hover:bg-gold transition-all">
                  <span className="text-gold group-hover:text-bone">↓</span>
                </div>
                <span className="text-[12px] uppercase tracking-[0.4em] font-bold">Download Executive Dossier</span>
              </button>
            </div>
          </div>

          {/* Right: Hard Metrics (The "Robust" side) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/40 p-8 border border-white/60 backdrop-blur-md">
              <h4 className="text-gold uppercase tracking-widest text-[14px] font-bold mb-8">Governance & Impact</h4>
              
              <div className="space-y-8">
                <div>
                  <p className="text-3xl font-display">CENTRAL AMERICA</p>
                  <p className="text-[12px] text-obsidian/40 uppercase tracking-widest">Regional Strategic Hub</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-display">10+</p>
                    <p className="text-[12px] text-obsidian/40 uppercase tracking-widest italic">Digital Enterprises</p>
                  </div>
                  <div>
                    <p className="text-2xl font-display">2030</p>
                    <p className="text-[12px] text-obsidian/40 uppercase tracking-widest italic">Vision Horizon</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 border border-gold/20">
              <p className="text-14px uppercase tracking-widest text-obsidian/60 mb-4">Core Competencies</p>
              <ul className="text-12 space-y-2 uppercase tracking-tighter font-medium">
                <li>• Digital Banking Infrastructure</li>
                <li>• Strategic Corporate Governance</li>
                <li>• Minimalist Aesthetic Innovation</li>
                <li>• Wealth Acceleration Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
