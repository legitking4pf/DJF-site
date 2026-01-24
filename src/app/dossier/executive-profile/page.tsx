"use client";
import NextImage from "next/image";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  ArrowUpRight,
  History,
  ShieldCheck,
  Fingerprint,
  ExternalLink,
  Command,
  Globe
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
  
  // FIXED: Added 'as const' to ease array to satisfy TypeScript/Vercel build
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
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as
        const // Critical fix for Next.js 16.1.1
      }
    }
  };
  
  return (
    <main className="min-h-screen bg-[#FBFBF9] text-obsidian selection:bg-gold/20 overflow-x-hidden">
      
      {/* 1. INSTITUTIONAL HEADER */}
      <section className="relative pt-48 pb-32 px-6 lg:px-12 border-b border-obsidian/5">
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold font-black tracking-[0.6em] text-[10px] uppercase">
              Official Dossier // DJF-71-GFA
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-9">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1.2 }}
                className="font-serif text-3xl md:text-[6x1] text-obsidian tracking-tighter leading-[1.1] mb-0"
              >
                David Jackson <br /> 
                <span className="italic font-light text-gold/80">Fernandez</span>
              </motion.h1>
            </div>
            <div className="lg:col-span-3 lg:text-right pb-4">
               <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-ash mb-2">Primary Mandate</p>
               <p className="text-xl font-display uppercase tracking-tight">Chief Administrative & Technology Officer</p>
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
          {/* SECTION 01: ORIGINS */}
          <motion.section variants={itemVars} className="relative group">
            <div className="flex items-center gap-4 mb-12">
               <History size={20} className="text-gold w-5 h-5" />
               <h2 className="text-[2x1] font-black uppercase tracking-[0.5em] text-obsidian/40">01 // The Core Migration</h2>
            </div>
            <div className="text-lg font-light leading-relaxed text-obsidian/90 text-justify">
              <p>
                Aligning with 
                <SmartLink href={entities.group.url} role={entities.group.role} tag={entities.group.tag}>
                   Grupo Financiero Atlántida
                </SmartLink>
                marked a pivotal moment in Central American fintech. Executing the <strong>"Silent Migration,"</strong> David transitioned a century-old legacy core into a resilient, cloud-native architecture—insulating GFA from regional volatility while maintaining 100% operational uptime.
              </p>
            </div>
          </motion.section>

          {/* SECTION 02: GOVERNANCE */}
          <motion.section variants={itemVars} className="relative group">
            <div className="flex items-center gap-4 mb-12">
               <ShieldCheck size={20} className="text-gold w-5 h-5" />
               <h2 className="text-[2x1] font-black uppercase tracking-[0.5em] text-obsidian/40">02 // Digital Sovereignty</h2>
            </div>
            <div className="text-lg font-light leading-relaxed text-obsidian/90 text-justify">
              <p>
                Under the dual mandate of <strong>CAO</strong> and <strong>CTO</strong>, the doctrine is clear: <span className="text-gold italic">Code is Policy.</span> This unified structure enables GFA to orchestrate high-precision integrations across <strong>Honduras, El Salvador, and Guatemala</strong> with institutional rigor and digital velocity.
              </p>
            </div>
          </motion.section>

          {/* DESIGN INTERLUDE */}
          <motion.section variants={itemVars} className="relative p-12 md:p-20 bg-obsidian text-bone overflow-hidden border-l-4 border-gold">
             <div className="relative z-10">
               <blockquote className="text-lg font-serif italic leading-tight mb-12">
                 "Eliminating redundant infrastructure in banking is the same as removing visual noise in a room. Both reveal the absolute velocity of growth."
               </blockquote>
               <div className="flex items-center gap-6">
                 <Command className="text-gold w-5 h-5" />
                 <span className="text-[10px] uppercase tracking-[0.6em] text-gold font-black">Philosophy: Essentialism</span>
               </div>
             </div>
             {/* Architectural grid background */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
          </motion.section>
        </motion.article>

        {/* 3. FLOATING EXECUTIVE DATA CARD */}
        <aside className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="lg:sticky lg:top-32 bg-white border border-obsidian/5 p-10 shadow-2xl rounded-sm"
          >
            {/* Portrait with "Spanish Minimalist" Frame */}
            <div className="relative aspect-[4/5] mb-12 overflow-hidden bg-ash/5 group">
               <NextImage 
                src="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM" 
                alt="David Jackson Fernandez"
                priority
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-[1.5rem] border-white/20 pointer-events-none" />
            </div>

            <div className="space-y-10">
               <div className="flex justify-between items-center border-b border-obsidian/10 pb-6">
                 <div className="flex flex-col gap-1">
                   <span className="text-[9px] uppercase tracking-[0.4em] text-ash font-black">Region Control</span>
                   <span className="text-lg font-display uppercase tracking-tight">HND // ES // GT</span>
                 </div>
                 <Globe className="text-gold/40 w-5 h-5" />
               </div>

               <div className="flex justify-between items-center border-b border-obsidian/10 pb-6">
                 <div className="flex flex-col gap-1">
                   <span className="text-[9px] uppercase tracking-[0.4em] text-ash font-black">System Status</span>
                   <span className="text-lg font-display uppercase tracking-tight text-gold">Digital Sovereignty</span>
                 </div>
                 <ShieldCheck className="text-gold/40 w-5 h-5" />
               </div>

               <div className="flex justify-between items-center border-b border-obsidian/10 pb-6">
                 <div className="flex flex-col gap-1">
                   <span className="text-[9px] uppercase tracking-[0.4em] text-ash font-black">Auth Code</span>
                   <span className="text-lg font-mono tracking-tighter">71-DJF-GFA</span>
                 </div>
                 <Fingerprint className="text-gold/40 w-5 h-5" />
               </div>
            </div>

            <a 
              href="https://www.linkedin.com" 
              className="mt-16 w-full flex items-center justify-center gap-6 bg-obsidian text-bone py-6 hover:bg-gold hover:text-obsidian transition-all duration-500 text-[10px] uppercase tracking-[0.5em] font-black group shadow-xl shadow-obsidian/10"
            >
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
              Secure Access
            </a>
          </motion.div>
        </aside>

      </div>
    </main>
  );
}