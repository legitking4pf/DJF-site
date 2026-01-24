"use client";
import NextImage from "next/image";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  ArrowUpRight,
  History,
  ShieldCheck,
  Fingerprint,
  Command,
  Globe,
  Briefcase,
  Layers
} from 'lucide-react';

interface SmartLinkProps {
  href: string;
  children: React.ReactNode;
  role: string;
  tag: string;
}

const SmartLink = ({ href, children, role, tag }: SmartLinkProps) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-flex items-baseline font-bold text-obsidian border-b border-gold/30 hover:border-gold hover:bg-gold/5 transition-all cursor-pointer group px-1"
  >
    {children}
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-obsidian text-white text-[9px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-2xl border border-gold/20 z-30">
      {role} <span className="text-gold">//</span> {tag}
      <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-obsidian"></span>
    </span>
  </a>
);

export default function ExecutiveDossier() {
  const entities = {
    group: { role: "CAO", url: "https://www.grupofinancieroatlantida.com", tag: "Governance" },
    bank: { role: "CTO", url: "https://www.bancatlan.hn", tag: "Digital Core" },
    design: { role: "Founder", url: "https://www.konceptodecor.com", tag: "Design Culture" }
  };
  
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };
  
  const itemVars: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  return (
    <main className="min-h-screen bg-[#FBFBF9] text-obsidian selection:bg-gold/20 overflow-x-hidden">
      
      {/* 1. INSTITUTIONAL HEADER: The David Jackson Fernandez Identity */}
      <section className="relative pt-48 pb-32 px-6 lg:px-12 border-b border-obsidian/5 bg-white">
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-gold font-black tracking-[0.6em] text-[9px] uppercase">
              Official Dossier // DJF-2026-ARCHIVE
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-3x1 md:text-[6x1] text-obsidian tracking-tighter leading-[0.9] mb-0"
              >
                David Jackson <br /> 
                <span className="italic font-light text-gold/80">Fernandez</span>
              </motion.h1>
            </div>
            <div className="lg:col-span-4 lg:text-right pb-4">
               <span className="block text-[9px] uppercase tracking-[0.4em] font-black text-ash mb-3">Institutional Mandate</span>
               <p className="text-xl md:text-2xl font-display uppercase tracking-tighter leading-tight text-obsidian">
                 Chief Administrative & <br className="hidden md:block"/> Technology Officer
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STRATEGIC NARRATIVE */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24 py-32">
        
        <motion.article 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-40"
        >
          {/* SECTION 01: ORIGINS & MIGRATION */}
          <motion.section variants={itemVars} className="relative group">
            <div className="flex items-center gap-4 mb-10">
               <History size={18} className="text-gold" />
               <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-obsidian/40">01 // The Core Migration</h2>
            </div>
            <div className="text-lg font-light leading-relaxed text-obsidian/90 text-justify space-y-6">
              <p>
                Aligning with <SmartLink href={entities.group.url} role={entities.group.role} tag={entities.group.tag}>Grupo Financiero Atlántida</SmartLink> marked a pivotal moment in Central American fintech. Executing what his peers call the <strong>"Silent Migration,"</strong> David transitioned a century-old legacy core into a resilient, cloud-native architecture.
              </p>
              <p>
                His focus remains the insulation of GFA from regional volatility while maintaining absolute operational uptime. By architecting this <strong>strategic growth network</strong>, he has ensured that digital transformation serves as the backbone of the group's stability 
              </p>
            </div>
          </motion.section>

          {/* SECTION 02: GOVERNANCE & SOVEREIGNTY */}
          <motion.section variants={itemVars} className="relative group">
            <div className="flex items-center gap-4 mb-10">
               <ShieldCheck size={18} className="text-gold" />
               <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-obsidian/40">02 // Digital Sovereignty</h2>
            </div>
            <div className="text-lg font-light leading-relaxed text-obsidian/90 text-justify space-y-6">
              <p>
                Under his dual mandate as <strong>CAO</strong> and <strong>CTO</strong>, David Jackson Fernandez operates under a singular doctrine: <span className="text-gold italic font-medium">Code is Policy.</span> This unified leadership structure enables him to orchestrate high-precision digital integration across the tri-border region              </p>
              <p>
                He views administrative rigor and investment partnerships not as bureaucratic hurdles, but as the <strong>wealth acceleration opportunity</strong> necessary for regional expansion. Every line of policy he drafts is designed to secure the velocity of growth across GFA's regional boundaries.
              </p>
            </div>
          </motion.section>

          {/* DESIGN INTERLUDE: Philosophy Corner */}
          <motion.section variants={itemVars} className="relative p-12 md:p-16 bg-obsidian text-bone overflow-hidden border-l-2 border-gold shadow-2xl">
             <div className="relative z-10">
               <blockquote className="text-2xl font-serif italic leading-snug mb-10 opacity-90">
                 "Eliminating redundant infrastructure in banking is the same as removing visual noise in a room. Both reveal the absolute velocity of growth."
               </blockquote>
               <div className="flex items-center gap-5">
                 <Command className="text-gold w-4 h-4" />
                 <span className="text-[9px] uppercase tracking-[0.6em] text-gold font-black">Philosophy: Essentialism // DJF</span>
               </div>
             </div>
             {/* Architectural grid background */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
          </motion.section>

          {/* SECTION 03: THE AESTHETIC REALM */}
          <motion.section variants={itemVars} className="relative group pb-20">
            <div className="flex items-center gap-4 mb-10">
               <Layers size={18} className="text-gold" />
               <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-obsidian/40">03 // Architectural Curation</h2>
            </div>
            <div className="text-lg font-light leading-relaxed text-obsidian/90 text-justify">
              <p>
                Through <SmartLink href={entities.design.url} role={entities.design.role} tag={entities.design.tag}>KONCEPTO Décor</SmartLink>, David applies the same structural integrity found in financial systems to the physical environment. He curates <strong>Spanish-inspired minimalist aesthetics</strong> to transform executive environments into high-end sanctuaries, proving that governance and high-end design are fundamentally linked.
              </p>
            </div>
          </motion.section>
        </motion.article>

        {/* 3. FLOATING EXECUTIVE DATA CARD */}
        <aside className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 bg-white border border-obsidian/5 p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-sm"
          >
            {/* Portrait with "Spanish Minimalist" High-End Frame */}
            <div className="relative aspect-[4/5] mb-12 overflow-hidden bg-ash/5 group border border-obsidian/5">
               <NextImage 
                src="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM" 
                alt="David Jackson Fernandez"
                priority
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 border-[1rem] border-white/10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-obsidian/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="space-y-8">
               <div className="flex justify-between items-center border-b border-obsidian/10 pb-5">
                 <div className="flex flex-col gap-1">
                   <span className="text-[8px] uppercase tracking-[0.4em] text-ash font-black">Region Reach</span>
                   <span className="text-base font-display uppercase tracking-tight font-bold">HND // ES // GT</span>
                 </div>
                 <Globe className="text-gold/30 w-4 h-4" />
               </div>

               <div className="flex justify-between items-center border-b border-obsidian/10 pb-5">
                 <div className="flex flex-col gap-1">
                   <span className="text-[8px] uppercase tracking-[0.4em] text-ash font-black">GFA Strategy</span>
                   <span className="text-base font-display uppercase tracking-tight text-gold font-bold">Vision 2030</span>
                 </div>
                 <Briefcase className="text-gold/30 w-4 h-4" />
               </div>

               <div className="flex justify-between items-center border-b border-obsidian/10 pb-5">
                 <div className="flex flex-col gap-1">
                   <span className="text-[8px] uppercase tracking-[0.4em] text-ash font-black">Command Code</span>
                   <span className="text-base font-mono tracking-tighter font-bold">DJF.GFA.CAO-CTO</span>
                 </div>
                 <Fingerprint className="text-gold/30 w-4 h-4" />
               </div>
            </div>

            <button 
              className="mt-12 w-full flex items-center justify-center gap-5 bg-obsidian text-bone py-5 hover:bg-gold hover:text-obsidian transition-all duration-500 text-[9px] uppercase tracking-[0.5em] font-black group shadow-xl"
            >
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
              Secure Access
            </button>
          </motion.div>
        </aside>

      </div>
    </main>
  );
}
