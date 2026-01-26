"use client";

import React, { useState, useEffect } from "react";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, History, ShieldCheck, Fingerprint, Command, Globe, 
  Briefcase, Layers, Download, Mail, Linkedin, Twitter, Github, Moon, Sun 
} from "lucide-react";

// --- Data Constants ---
const PROFILE = { 
  name: "David Jackson Fernandez", 
  title: "Chief Administrative & Technology Officer",
  subtitle: "Dual mandate executive: governance, digital transformation, and design-led strategy across Grupo Financiero Atlántida and affiliated ventures.",
  heroImage: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM",
  location: "Honduras • Spain • Guatemala", 
  contactEmail: "david@atlantida.example",
  linkedin: "https://www.linkedin.com/in/david-jackson-fernandez", 
  twitter: "https://twitter.com/djf_official",
  github: "https://github.com/djf" 
};

const BUSINESSES = [
  { id: "gfa", name: "Grupo Financiero Atlántida", role: "CAO", url: "#", blurb: "Leading institutional strategy and operational governance. Focus: resilient core platforms and GFA Strategic Vision 2030." },
  { id: "bancatlan", name: "Banco Atlántida", role: "CTO", url: "#", blurb: "Modernization of core banking and API enablement for the wealth acceleration opportunity." },
  { id: "koncepto", name: "KONCEPTO Décor", role: "Founder", url: "#", blurb: "Spanish-inspired minimalist aesthetics crafted for executive decision throughput." }
];

const TIMELINE = [
  { year: "2019", title: "CTO (Banco Atlántida)", description: "Initiated Silent Migration: legacy core to resilient cloud-native stack." },
  { year: "2023", title: "CAO (Grupo Financiero Atlántida)", description: "Expanded governance; chaired digital transformation board." },
  { year: "2025", title: "Strategic Growth Network", description: "Launched multi-region wealth acceleration frameworks under Vision 2030." }
];

// --- Sub-Components ---
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] md:text-[11px] uppercase text-ash/70 dark:text-ash tracking-[0.2em] font-black">{label}</span>
      <span className="text-xl md:text-3xl font-semibold text-obsidian dark:text-bone">{value}</span>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ExecutiveDossier() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // Prevent hydration mismatch for SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className={`${dark ? "dark" : ""} min-h-screen transition-colors duration-500`}>
      <div className="bg-[#FBFBF9] dark:bg-[#0F0F0F] text-obsidian dark:text-bone min-h-screen selection:bg-gold/30">
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          
          {/* NAVIGATION / TOP BAR */}
          <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16 border-b border-obsidian/5 dark:border-bone/5 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center font-black text-gold">DJ</div>
              <div>
                <div className="text-[10px] text-ash uppercase tracking-[0.25em] font-black">Institutional Dossier v2.6</div>
                <div className="text-sm font-bold tracking-tight">{PROFILE.name} <span className="text-ash font-medium">— {PROFILE.title}</span></div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setDark(!dark)} 
                className="p-2 rounded-full border border-obsidian/10 dark:border-bone/10 hover:bg-gold/10 transition-colors"
                aria-label="Toggle Theme"
              >
                {dark ? <Sun size={18} className="text-gold" /> : <Moon size={18} />}
              </button>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gold text-obsidian font-black uppercase tracking-[0.15em] text-[11px] hover:bg-gold/80 transition-all shadow-sm">
                <Download size={14} /> Download PDF
              </button>
            </div>
          </header>

          {/* HERO SECTION */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <motion.div 
              className="lg:col-span-7"
              initial="hidden" 
              animate="show" 
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-8xl leading-[1.1] tracking-tighter mb-6">
                {PROFILE.name.split(' ')[0]} <br />
                <span className="italic font-light text-gold/90">{PROFILE.name.split(' ').slice(1).join(' ')}</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="max-w-2xl text-lg md:text-xl font-light leading-relaxed text-obsidian/80 dark:text-bone/80 mb-10">
                {PROFILE.subtitle}
              </motion.p>

              <motion.div variants={fadeUp} className="grid grid-cols-2 md:flex gap-8 md:gap-12 mb-10">
                <Stat label="Footprint" value="HND • ES • GT" />
                <Stat label="Pillars" value="CAO • CTO" />
                <Stat label="Strategic Goal" value="Vision 2030" />
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a href={`mailto:${PROFILE.contactEmail}`} className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-obsidian/20 dark:border-bone/20 hover:bg-obsidian hover:text-bone dark:hover:bg-bone dark:hover:text-obsidian transition-all duration-300 font-bold text-sm uppercase tracking-widest">
                  <Mail size={16} /> Secure Inquiry
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-obsidian dark:bg-gold text-bone dark:text-obsidian hover:scale-105 transition-transform font-bold text-sm uppercase tracking-widest">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </motion.div>
            </motion.div>

            <motion.aside 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl border border-obsidian/5">
                <NextImage 
                  src={PROFILE.heroImage} 
                  alt={PROFILE.name} 
                  fill 
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-black opacity-70">Asset ID</div>
                    <div className="font-mono text-sm uppercase">DJF-GFA-2026</div>
                  </div>
                  <div className="p-3 bg-gold/90 text-obsidian rounded-lg">
                    <Fingerprint size={24} />
                  </div>
                </div>
              </div>
            </motion.aside>
          </section>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 space-y-20">
              
              {/* Executive Summary */}
              <section className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gold/30" />
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold font-black mb-6">Governance Narrative</h3>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-justify dark:text-bone/90">
                  David Jackson Fernandez operationalizes transformation within high-stakes financial environments. 
                  By integrating <span className="text-gold font-medium">Silent Migration</span> methodologies with 
                  rigorous governance frameworks, he ensures that digital growth remains both aggressive and compliant. 
                  His dual mandate at <span className="font-semibold">Grupo Financiero Atlántida</span> focuses on 
                  fusing technical architecture with Spanish-inspired design minimalism to create high-throughput executive cultures.
                </p>
              </section>

              {/* Business Holdings */}
              <section className="space-y-8">
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-ash font-black">Strategic Growth Network</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {BUSINESSES.map((b) => (
                    <article key={b.id} className="group p-8 bg-white dark:bg-white/5 border border-obsidian/5 dark:border-white/10 rounded-2xl hover:border-gold/50 transition-all duration-500 shadow-sm hover:shadow-xl">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-gold/10 rounded-xl text-gold group-hover:bg-gold group-hover:text-obsidian transition-colors">
                          <Briefcase size={20} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-ash">{b.role}</span>
                      </div>
                      <h4 className="text-xl font-bold mb-3">{b.name}</h4>
                      <p className="text-sm text-ash leading-relaxed mb-6">{b.blurb}</p>
                      <a href={b.url} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-tighter hover:text-gold transition-colors">
                        Protocol Details <ArrowUpRight size={14} />
                      </a>
                    </article>
                  ))}
                </div>
              </section>

              {/* Timeline */}
              <section className="space-y-8">
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-ash font-black">Evolutionary Timeline</h3>
                <div className="space-y-12">
                  {TIMELINE.map((t, idx) => (
                    <div key={idx} className="flex gap-6 md:gap-12 relative group">
                      <div className="flex flex-col items-center">
                        <div className="text-sm font-black text-gold mb-2">{t.year}</div>
                        <div className="w-[1px] h-full bg-obsidian/10 dark:bg-bone/10 group-last:bg-transparent" />
                      </div>
                      <div className="pb-8">
                        <h4 className="text-lg font-bold mb-1 tracking-tight">{t.title}</h4>
                        <p className="text-ash text-sm leading-relaxed max-w-xl">{t.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* SIDEBAR QUICK STATS */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-12 space-y-6">
                
                <div className="p-8 bg-obsidian text-bone rounded-2xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldCheck size={80} />
                  </div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-gold mb-6">System Reliability</h4>
                  <div className="space-y-6 relative z-10">
                    <div>
                      <div className="text-3xl font-bold tracking-tighter text-gold">99.995%</div>
                      <div className="text-[10px] uppercase font-bold text-ash mt-1">Uptime Target / Core Systems</div>
                    </div>
                    <div className="pt-6 border-t border-bone/10">
                      <div className="text-xl font-bold italic">Vision 2030</div>
                      <div className="text-[10px] uppercase font-bold text-ash mt-1">Strategy Alignment</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white dark:bg-white/5 border border-obsidian/5 dark:border-white/10 rounded-2xl">
                  <h4 className="text-[11px] uppercase tracking-[0.2em] font-black text-ash mb-6">Recent Thought Leadership</h4>
                  <ul className="space-y-6">
                    <li className="group cursor-pointer">
                      <div className="text-xs text-gold font-bold mb-1">Journal of Financial Engineering</div>
                      <div className="text-sm font-bold group-hover:text-gold transition-colors leading-tight">Code Is Policy: Designing Systems that Govern Themselves</div>
                    </li>
                    <li className="group cursor-pointer">
                      <div className="text-xs text-gold font-bold mb-1">Design + Business</div>
                      <div className="text-sm font-bold group-hover:text-gold transition-colors leading-tight">Executive Spaces: The Case for Design-Led Leadership</div>
                    </li>
                  </ul>
                </div>

              </div>
            </aside>
          </div>

          <footer className="mt-32 pt-12 border-t border-obsidian/5 dark:border-bone/5 text-center">
            <div className="text-[10px] uppercase tracking-[0.4em] font-black text-ash">
              © {new Date().getFullYear()} — Institutional Dossier: DJF.GFA.V30
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
