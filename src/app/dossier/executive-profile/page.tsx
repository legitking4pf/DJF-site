"use client";
import NextImage from "next/image";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, History, Award, Briefcase, ExternalLink, ShieldCheck, Fingerprint } from 'lucide-react';

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

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main className="min-h-screen bg-[#F9F7F2] text-obsidian selection:bg-gold/20">
      
      {/* MONUMENTAL HEADER */}
      <section className="relative pt-32 pb-20 px-6 border-b border-obsidian/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-4 mb-8">
            <Fingerprint className="text-gold w-5 h-5 opacity-50" />
            <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">
              Classified // Executive Profile 001
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="font-serif text-6xl md:text-9xl text-obsidian tracking-tighter leading-none mb-10"
          >
            David Jackson <br /> <span className="italic font-light">Fernandez</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             transition={{ delay: 0.5 }}
             className="text-lg md:text-xl text-ash max-w-3xl font-light leading-relaxed"
          >
            Architecting the <span className="text-obsidian font-medium italic underline decoration-gold/40">Digital Sovereignty</span> of Central America’s financial future through the intersection of governance, fintech, and essentialist design.
          </motion.p>
        </div>
      </section>

      {/* STRATEGIC CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 py-24">
        
        {/* NARRATIVE ARC */}
        <motion.article 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-8 space-y-32"
        >
          {/* SECTION 1 */}
          <motion.section variants={itemVars} className="relative">
            <div className="absolute -left-8 top-0 text-gold/20 font-serif text-8xl -z-10 select-none">01</div>
            <div className="flex items-center gap-4 mb-8">
               <History className="text-gold w-5 h-5" />
               <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-obsidian">Strategic Origins</h2>
            </div>
            <div className="prose prose-xl text-ash leading-[1.8] font-light text-justify">
              <p>
                David Jackson Fernandez’s alignment with 
                <SmartLink href={entities.group.url} role={entities.group.role} tag={entities.group.tag}>
                   Grupo Financiero Atlántida
                </SmartLink>
                represents a paradigm shift in regional banking. Tasked with the <strong>"Silent Migration,"</strong> David successfully engineered the transition of a century-old legacy core into a cloud-native architecture without a single second of service interruption.
              </p>
            </div>
          </motion.section>

          {/* SECTION 2 */}
          <motion.section variants={itemVars} className="relative">
            <div className="absolute -left-8 top-0 text-gold/20 font-serif text-8xl -z-10 select-none">02</div>
            <div className="flex items-center gap-4 mb-8">
               <ShieldCheck className="text-gold w-5 h-5" />
               <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-obsidian">Unified Command</h2>
            </div>
            <div className="prose prose-xl text-ash leading-[1.8] font-light text-justify">
              <p>
                Holding dual mandates as <strong>CAO</strong> and <strong>CTO</strong>, David operates under the doctrine that <em>code is policy.</em> This unified command structure allows GFA to execute high-stakes cross-border integrations in <strong>Honduras, El Salvador, and Guatemala</strong> with unprecedented operational velocity.
              </p>
            </div>
          </motion.section>

          {/* SECTION 3: DESIGN QUOTE */}
          <motion.section variants={itemVars} className="py-16 px-12 bg-obsidian text-bone rounded-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] -mr-32 -mt-32" />
             <blockquote className="text-3xl font-serif italic mb-8">
               "Just as he removes redundant code to speed a banking transaction, he removes visual clutter to clarify executive thought."
             </blockquote>
             <div className="flex items-center gap-4">
               <div className="h-px w-12 bg-gold" />
               <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Concept: Essentialism</span>
             </div>
          </motion.section>
        </motion.article>

        {/* FLOATING EXECUTIVE INFOBOX */}
        <aside className="lg:col-span-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="lg:sticky lg:top-32 bg-white border border-obsidian/5 p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-sm"
          >
            {/* High-End Portrait Wrapper */}
            <div className="relative aspect-[3/4] mb-10 overflow-hidden group bg-ash/5">
               <NextImage 
                src="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM" 
                alt="David Jackson Fernandez"
                priority
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
            </div>

            <div className="space-y-8">
               <div className="flex justify-between items-end border-b border-obsidian/5 pb-4">
                 <span className="text-[9px] uppercase tracking-widest text-ash font-bold">Position</span>
                 <span className="text-sm font-serif">CAO // CTO</span>
               </div>
               <div className="flex justify-between items-end border-b border-obsidian/5 pb-4">
                 <span className="text-[9px] uppercase tracking-widest text-ash font-bold">HQ Location</span>
                 <span className="text-sm font-serif">Tegucigalpa</span>
               </div>
               <div className="flex justify-between items-end border-b border-obsidian/5 pb-4">
                 <span className="text-[9px] uppercase tracking-widest text-ash font-bold">Focus</span>
                 <span className="text-sm font-serif italic text-gold">Digital Sovereignty</span>
               </div>
            </div>

            <a 
              href="https://www.linkedin.com" 
              className="mt-10 w-full flex items-center justify-center gap-4 bg-obsidian text-bone py-5 hover:bg-gold transition-colors text-[10px] uppercase tracking-[0.4em] font-bold"
            >
              <ExternalLink size={14} /> Secure Connection
            </a>
          </motion.div>
        </aside>

      </div>
    </main>
  );
}
