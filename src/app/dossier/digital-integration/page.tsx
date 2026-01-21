"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Database, Globe, Cpu, ArrowUpRight } from 'lucide-react';

const heroImages = [
  'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/portada-09-02-2024-111-juntos-tdHAoirlE7TMdek7ReGI43HDBa3wqm.jpg',
  'https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/portada-09-02-2024-111-juntos-tdHAoirlE7TMdek7ReGI43HDBa3wqm.jpg'
];

export default function CTODossier() {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <main className="min-h-screen bg-bone text-obsidian pb-24 relative">
      {/* 1. BACKGROUND ENGINE */}
      <div className="absolute inset-0 h-[70vh] z-0 bg-obsidian overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={heroImages[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000B0] via-transparent to-bone z-10" />
      </div>

      {/* 2. EXECUTIVE HEADER CONTENT */}
      <section className="relative z-20 h-[70vh] flex items-end pb-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold tracking-[0.5em] text-[12px] font-bold uppercase mb-4 block">Strategic Briefing // 01</span>
            <h1 className="text-4xl md:text-7xl font-display uppercase tracking-tighter leading-[0.8] mb-8">
              Digital <br /> Integration
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-obsidian/70 uppercase text-sm tracking-[0.2em] font-medium">
              <span>Banco Atlántida Hn</span>
              <span className="text-gold hidden md:inline">•</span>
              <span>CTO Office</span>
              <span className="text-gold hidden md:inline">•</span>
              <span>Group Core</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE STRATEGY: THE THREE PILLARS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="space-y-6">
            <h3 className="text-gold text-sm uppercase tracking-[0.3em] font-bold">01. Infrastructure</h3>
            <h5 className="text-3xl font-display uppercase italic">Cloud-Native <br /> Architecture</h5>
            <p className="text-base md:text-lg text-obsidian/80 leading-relaxed font-light">
              Transitioning legacy banking cores to a hybrid-cloud environment. This ensures horizontal scalability during high-traffic fiscal periods while maintaining rigorous data sovereignty for Honduras.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-gold text-sm uppercase tracking-[0.3em] font-bold">02. Security</h3>
            <h5 className="text-3xl font-display uppercase italic">Zero-Trust <br /> Framework</h5>
            <p className="text-base md:text-lg text-obsidian/80 leading-relaxed font-light">
              Implementing end-to-end encryption and multi-factor biometric authentication across all digital touchpoints. We prioritize "Security by Design" to protect the wealth acceleration opportunities of our clients.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-gold text-sm uppercase tracking-[0.3em] font-bold">03. Ecosystem</h3>
            <h5 className="text-3xl font-display uppercase italic">Open Banking <br /> & API Economy</h5>
            <p className="text-base md:text-lg text-obsidian/80 leading-relaxed font-light">
              Creating a strategic growth network through API integration with global fintech partners. This allows GFA to offer hyper-personalized financial products in real-time.
            </p>
          </div>
        </div>

        {/* 4. TECHNICAL ROADMAP SECTION */}
        <div className="bg-obsidian text-bone p-10 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 opacity-20 pointer-events-none translate-x-1/4" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-3xl md: text-4x1 font-display uppercase tracking-tighter mb-10">
                The Group <br /> <span className="text-gold">Technical Roadmap</span>
              </h2>
              <p className="text-lg text-white/90 font-light leading-loose mb-12">
                Our roadmap is a meticulously phased digital transformation aimed at achieving 100% digital integration. As CTO, my focus is on ensuring that technology serves as a seamless bridge for corporate strategy and lifestyle investments.
              </p>
              
              <div className="space-y-8">
                {[
                  { phase: "Phase I", goal: "Legacy Decommissioning & API Standardization" },
                  { phase: "Phase II", goal: "AI-Driven Predictive Financial Modeling" },
                  { phase: "Phase III", goal: "Full Ecosystem Interoperability (Global Scale)" }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col gap-2 border-b border-bone/10 pb-6">
                    <span className="text-gold font-mono text-xs uppercase tracking-widest">{step.phase}</span>
                    <span className="text-lg uppercase tracking-wider font-bold">{step.goal}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a href="https://www.bancatlan.hn" className="inline-flex items-center gap-3 text-gold text-sm uppercase tracking-[0.4em] font-bold hover:gap-6 transition-all" target="_blank" rel="noopener noreferrer">
                  Banco Atlantida Honduras <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
               <div className="p-8 border border-gold/20 flex flex-col items-center text-center bg-white/5 backdrop-blur-sm">
                  <Database className="text-gold mb-6" size={40} />
                  <span className="text-4xl font-display mb-2">99.9%</span>
                  <span className="text-xs uppercase tracking-widest text-[#838383]">System Uptime Target</span>
               </div>
               <div className="p-8 border border-gold/20 flex flex-col items-center text-center bg-white/5 backdrop-blur-sm">
                  <Shield className="text-gold mb-6" size={40} />
                  <span className="text-4xl font-display mb-2">ISO/IEC</span>
                  <span className="text-xs uppercase tracking-widest text-[#838383]">27001 Compliance</span>
               </div>
               <div className="p-8 border border-gold/20 flex flex-col items-center text-center bg-white/5 backdrop-blur-sm">
                  <Cpu className="text-gold mb-6" size={40} />
                  <span className="text-4xl font-display mb-2">4.0M+</span>
                  <span className="text-xs uppercase tracking-widest text-[#838383]">Active User Capacity</span>
               </div>
               <div className="p-8 border border-gold/20 flex flex-col items-center text-center bg-white/5 backdrop-blur-sm">
                  <Globe className="text-gold mb-6" size={40} />
                  <span className="text-4xl font-display mb-2">HND/ES/GT</span>
                  <span className="text-xs uppercase tracking-widest text-[#838383]">Regional Markets</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXECUTIVE STATEMENT */}
      <section className="max-w-5xl mx-auto px-6 text-center py-32 border-t border-obsidian/5">
        <blockquote className="text-3xl md:text-5xl font-light italic text-obsidian/90 mb-12 leading-tight">
          "Digital transformation is not merely about upgrading systems; it is about redefining the velocity of wealth within a strategic growth network."
        </blockquote>
        <div className="h-px w-32 bg-gold mx-auto mb-8" />
        <p className="text-xs uppercase tracking-[0.6em] font-bold text-gold">David Jackson Fernandez</p>
        <p className="text-xs uppercase tracking-[0.3em] text-obsidian/50 mt-2">Chief Technology Officer, Banco Atlántida Hn</p>
      </section>
    </main>
  );
}
