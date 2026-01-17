"use client";
import { motion } from 'framer-motion';
import { Shield, Zap, Database, BarChart3, Layers, Globe, Cpu, ArrowRight } from 'lucide-react';

export default function CTODossier() {
  return (
    <main className="min-h-screen bg-bone text-obsidian pb-24">
      {/* 1. EXECUTIVE HEADER */}
      <section className="relative h-[70vh] w-full bg-obsidian flex items-end pb-20">
         <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover grayscale opacity-30">
          <source src="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Hero%20Video%20Background-P51XsIl1YPox7tNRCZLrxRKES9if7c" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-bone via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold tracking-[0.5em] text-[10px] font-bold uppercase mb-4 block">Strategic Briefing // 01</span>
            <h1 className="text-4xl md:text-8xl font-display uppercase tracking-tighter leading-[0.85] mb-6">
              Digital <br /> Integration
            </h1>
            <div className="flex items-center gap-4 text-obsidian/60 uppercase text-xs tracking-widest font-medium">
              <span>Banco Atlántida Hn</span>
              <span className="text-gold">•</span>
              <span>CTO Office</span>
              <span className="text-gold">•</span>
              <span>Core 2030</span>
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
              <p className="text-ash/30 font-light leading-loose mb-10">
                Our roadmap is a meticulously phased digital transformation aimed at achieving 100% digital integration. As CTO, my focus is on ensuring that technology serves as a seamless bridge for corporate strategy and lifestyle investments. see more at <a href="www.bancatlan.hn" target="blank">Banco Atlantida Honduras</a>
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
