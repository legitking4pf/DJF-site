"use client";
import { useState, useEffect } from 'react'; // Added missing hooks
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { Shield, Zap, Database, Globe, Cpu, ArrowUpRight } from 'lucide-react';

const heroImages = [
  'https://cdn.prod.website-files.com/68363d5a1fb3537423263b85/684082b08064a259b26c8ac3_final-p-1080.jpg',
  'https://www.bancatlan.hn/sala-de-prensa/img/portada-09-02-2024-111-juntos.jpg'
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
      {/* 1. BACKGROUND IMAGE TRANSITION ENGINE */}
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
            <span className="text-gold tracking-[0.5em] text-[10px] font-bold uppercase mb-4 block">Strategic Briefing // 01</span>
            <h1 className=" text-bold text-5xl md:text-8xl font-display uppercase tracking-tighter leading-[0.85] mb-6">
              Digital <br /> Integration
            </h1>
            <div className="flex items-center gap-4 text-obsidian/60 uppercase text-xs tracking-widest font-medium">
              <span>Banco Atlántida Hn</span>
              <span className="text-gold">•</span>
              <span>CTO Office</span>
              <span className="text-gold">•</span>
              <span>Group Core</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE STRATEGY: THE THREE PILLARS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="space-y-6">
            <h3 className="text-gold text-xs uppercase tracking-[0.3em] font-bold">01. Infrastructure</h3>
            <h4 className="text-2xl font-display uppercase italic">Cloud-Native <br /> Architecture</h4>
            <p className="text-sm text-obsidian/70 leading-relaxed font-light">
              Transitioning legacy banking cores to a hybrid-cloud environment. This ensures horizontal scalability during high-traffic fiscal periods while maintaining rigorous data sovereignty for Honduras.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-gold text-xs uppercase tracking-[0.3em] font-bold">02. Security</h3>
            <h4 className="text-2xl font-display uppercase italic">Zero-Trust <br /> Framework</h4>
            <p className="text-sm text-obsidian/70 leading-relaxed font-light">
              Implementing end-to-end encryption and multi-factor biometric authentication across all digital touchpoints. We prioritize "Security by Design" to protect the wealth acceleration opportunities of our clients.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-gold text-xs uppercase tracking-[0.3em] font-bold">03. Ecosystem</h3>
            <h4 className="text-2xl font-display uppercase italic">Open Banking <br /> & API Economy</h4>
            <p className="text-sm text-obsidian/70 leading-relaxed font-light">
              Creating a strategic growth network through API integration with global fintech partners. This allows GFA to offer hyper-personalized financial products in real-time.
            </p>
          </div>
        </div>

        {/* 3. TECHNICAL ROADMAP SECTION */}
        <div className="bg-obsidian text-bone p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 opacity-20 pointer-events-none translate-x-1/4" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl font-display uppercase tracking-tighter mb-8">
                The Group <br /> <span className="text-gold">Technical Roadmap</span>
              </h2>
              <p className="text-white/ font-light leading-loose mb-10">
                Our roadmap is a meticulously phased digital transformation aimed at achieving 100% digital integration. As CTO, my focus is on ensuring that technology serves as a seamless bridge for corporate strategy and lifestyle investments. see more at <a  href="https://www.bancatlan.hn"  className="inline-flex items-center gap-2 text-gold text-[10px] uppercase tracking-[0.4em] font-bold hover:gap-4 transition-all" target="_blank"  rel="noopener noreferrer" > Banco Atlantida Honduras <ArrowUpRight className="w-3 h-3" /> </a>
              </p>
              
              <div className="space-y-6">
                {[
                  { phase: "Phase I", goal: "Legacy Decommissioning & API Standardization" },
                  { phase: "Phase II", goal: "AI-Driven Predictive Financial Modeling" },
                  { phase: "Phase III", goal: "Full Ecosystem Interoperability (Global Scale)" }
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-6 border-b border-bone/10 pb-4">
                    <span className="text-gold font-mono text-xs">{step.phase}</span>
                    <span className="text-xs uppercase tracking-widest font-bold">{step.goal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 items-start">
               <div className="p-6 border border-gold/30 flex flex-col items-center text-center">
                  <Database className="text-gold mb-4" size={32} />
                  <span className="text-2xl font-display">99.9%</span>
                  <span className="text-[10px] uppercase tracking-widest text-ash">System Uptime Target</span>
               </div>
               <div className="p-6 border border-gold/30 flex flex-col items-center text-center">
                  <Shield className="text-gold mb-4" size={32} />
                  <span className="text-2xl font-display">ISO/IEC</span>
                  <span className="text-[10px] uppercase tracking-widest text-ash">27001 Compliance</span>
               </div>
               <div className="p-6 border border-gold/30 flex flex-col items-center text-center">
                  <Cpu className="text-gold mb-4" size={32} />
                  <span className="text-2xl font-display">4.0M+</span>
                  <span className="text-[10px] uppercase tracking-widest text-ash">Active User Capacity</span>
               </div>
               <div className="p-6 border border-gold/30 flex flex-col items-center text-center">
                  <Globe className="text-gold mb-4" size={32} />
                  <span className="text-2xl font-display">HND/ES/GT</span>
                  <span className="text-[10px] uppercase tracking-widest text-ash">Regional Markets</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE STATEMENT */}
      <section className="max-w-4xl mx-auto px-6 text-center py-24 border-t border-obsidian/5">
        <blockquote className="text-3xl font-light italic text-obsidian/80 mb-8">
          "Digital transformation is not merely about upgrading systems; it is about redefining the velocity of wealth within a strategic growth network."
        </blockquote>
        <div className="h-px w-24 bg-gold mx-auto mb-6" />
        <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">David Jackson Fernandez</p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-obsidian/40 mt-1">Chief Technology Officer, Banco Atlántida Hn</p>
      </section>
    </main>
  );
}