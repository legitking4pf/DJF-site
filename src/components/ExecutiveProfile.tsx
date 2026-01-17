"use client";
import { motion } from 'framer-motion';

export default function ExecutiveProfile() {
  return ( 
    <section className="relative py-32 bg-bone text-obsidian overflow-hidden border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* SECTION 1: HEADER & SIGNATURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-none"
            >
              Strategic <br /> Leadership
            </motion.h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-gold font-serif italic text-2xl">David Jackson Fernandez</p>
            <p className="text-obsidian/40 text-[10px] uppercase tracking-[0.3em] mt-2">Executive Profile — GFA Site 2026</p>
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
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Download Executive Dossier</span>
              </button>
            </div>
          </div>

          {/* Right: Hard Metrics (The "Robust" side) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/40 p-8 border border-white/60 backdrop-blur-md">
              <h4 className="text-gold uppercase tracking-widest text-[10px] font-bold mb-8">Governance & Impact</h4>
              
              <div className="space-y-8">
                <div>
                  <p className="text-3xl font-display">CENTRAL AMERICA</p>
                  <p className="text-[10px] text-obsidian/40 uppercase tracking-widest">Regional Strategic Hub</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-display">10+</p>
                    <p className="text-[10px] text-obsidian/40 uppercase tracking-widest italic">Digital Enterprises</p>
                  </div>
                  <div>
                    <p className="text-2xl font-display">2030</p>
                    <p className="text-[10px] text-obsidian/40 uppercase tracking-widest italic">Vision Horizon</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 border border-gold/20">
              <p className="text-[10px] uppercase tracking-widest text-obsidian/60 mb-4">Core Competencies</p>
              <ul className="text-xs space-y-2 uppercase tracking-tighter font-medium">
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
