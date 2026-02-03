// ExecutiveDossier.tsx - Large-scale, 5-star executive dossier (Next.js + Tailwind + Framer Motion) // This file is a client component. No external APIs are used — static content only, crafted for a luxury-finance executive dossier.

"use client";

import React, { useState } from "react";
import NextImage from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  History,
  ShieldCheck,
  Fingerprint,
  Command,
  Globe,
  Briefcase,
  Layers,
  Download,
  Mail,
  Linkedin,
  Twitter,
  Github
} from "lucide-react";

// -------------------- Static content (edit to suit real facts) -------------------- 
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

const BUSINESSES = [{
  id: "gfa",
  name: "Grupo Financiero Atlántida",
  role: "CAO",
  url: "https://www.grupofinancieroatlantida.com",
  blurb: "Leading institutional strategy and operational governance across banking, insurance and asset management. Focus: resilient core platforms, regulatory alignment, and measured expansion."
},
{
  id: "bancatlan",
  name: "Banco Atlántida",
  role: "CTO",
  url: "https://www.bancatlan.hn",
  blurb: "Modernization of core banking, API enablement for partner ecosystems, and production-grade reliability engineering for retail and corporate services."
},
{
  id: "koncepto",
  name: "KONCEPTO Décor",
  role: "Founder",
  url: "https://www.konceptodecor.com",
  blurb: "Design practice blending Spanish minimalism and executive ergonomics — interiors crafted to increase decision throughput and brand gravitas."
}];

const TIMELINE = [{
  year: "2008",
  title: "Systems Architect",
  description: "Early engineering leadership at fintech startups across LATAM."
}, {
  year: "2014",
  title: "Head of Engineering",
  description: "Led multi-region payment integrations and first cloud migration."
},
{
  year: "2019",
  title: "CTO (Banco Atlántida)",
  description: "Initiated Silent Migration: legacy core to resilient cloud-native stack."
}, {
  year: "2023",
  title: "CAO (Grupo Financiero Atlántida)",
  description: "Expanded governance and enterprise risk strategy; chaired digital transformation board."
},
{
  year: "2025",
  title: "Scale & Design",
  description: "Integrated KONCEPTO Décor into executive experience programs for institutional clients."
}];

const CASE_STUDIES = [{
  title: "Silent Migration: Legacy Core to Cloud-native",
  subtitle: "Banco Atlántida",
  summary: "A three-phase migration that prioritized zero downtime, automated reconciliation, and progressive cutover. Outcomes: 99.995% availability target, 40% reduction in ops costs, and API-first capability for partners."
},
{
  title: "Governance Reboot: Vision 2030",
  subtitle: "Grupo Financiero Atlántida",
  summary: "A program uniting legal, risk, operations and IT under measurable KPIs and a single runbook architecture — accelerated M&A readiness and regulatory alignment."
}];

const PUBLICATIONS = [{
    title: "Code Is Policy: Designing Systems that Govern Themselves",
    outlet: "Journal of Financial Engineering, 2024",
    link: "#"
  },
  { title: "Executive Spaces: The Case for Design-Led Leadership", outlet: "Design + Business, 2023", link: "#" }
];

function Stat({ label, value }: { label: string;value: string }) {
  return (
    <div className="flex flex-col"> <span className="text-[11px] uppercase text-ash tracking-[0.2em] font-black">{label}</span> <span className="text-2xl md:text-3xl font-semibold text-obsidian">{value}</span> </div>
  );
}

// -------------------- Motion helpers ------------------------------------------
const fadeUp = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

// -------------------- Main Component ----------------------------------------- 
export default function ExecutiveDossierLarge() {
  const [dark, setDark] = useState(false);
  
  return (<main className={${dark ? "dark" : ""} min-h-screen bg-[#FBFBF9] dark:bg-obsidian text-obsidian dark:text-bone selection:bg-gold/20}> <div className="max-w-8xl mx-auto px-6 lg:px-12 py-12">
    {/* HERO */}
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
      <div className="lg:col-span-7">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.06 } } }}>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl leading-tight tracking-tight mb-4">{PROFILE.name} <span className="italic font-light text-gold/80">Fernandez</span></motion.h1>
          <motion.p variants={fadeUp} className="max-w-3xl text-lg text-obsidian/85 mb-6">{PROFILE.subtitle}</motion.p>

          <motion.div variants={fadeUp} className="flex gap-6 flex-wrap items-center">
            <Stat label="Region Reach" value="HND • ES • GT" />
            <Stat label="Core Roles" value="CAO • CTO • Founder" />
            <Stat label="Strategy" value="Vision 2030" />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex gap-3">
            <a href={`mailto:${PROFILE.contactEmail}`} className="inline-flex items-center gap-3 px-4 py-2 rounded-md border border-obsidian/5 hover:bg-obsidian/5 transition"><Mail size={16} /> Contact</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-obsidian text-bone hover:bg-gold hover:text-obsidian transition"><Linkedin size={16} /> LinkedIn</a>
          </motion.div>

        </motion.div>
      </div>

      {/* Portrait card */}
      <aside className="lg:col-span-5">
        <div className="bg-white dark:bg-obsidian border border-obsidian/6 dark:border-obsidian/10 p-6 rounded-2xl shadow-lg">
          <div className="relative aspect-[4/5] w-full mb-4 overflow-hidden rounded-md">
            <NextImage src={PROFILE.heroImage} alt={PROFILE.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700"/>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xs text-ash uppercase tracking-[0.18em] font-black">Region</div>
              <div className="font-semibold">{PROFILE.location}</div>
            </div>
            <div>
              <div className="text-xs text-ash uppercase tracking-[0.18em] font-black">Command Code</div>
              <div className="font-mono font-semibold">DJF.GFA.CAO-CTO</div>
            </div>
          </div>
        </div>
      </aside>
    </section>

    {/* MAIN LAYOUT: left content and right quick panel */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

      {/* LEFT - In-depth narrative */}
      <main className="lg:col-span-8 space-y-10">

        {/* Executive Summary */}
        <section className="p-8 bg-white dark:bg-obsidian border border-obsidian/6 dark:border-obsidian/10 rounded-xl shadow-sm">
          <h3 className="text-sm uppercase tracking-[0.2em] text-ash font-black mb-4">Executive Summary</h3>
          <p className="text-lg font-light leading-relaxed text-justify">David Jackson Fernandez combines hardcore engineering discipline with administrative precision and a taste for high-end design. He has spent two decades operationalizing transformation programs in finance — migrating critical systems, establishing governance guardrails, and aligning cross-functional teams to scale responsibly. His work spans core banking modernization, API ecosystems, regulatory program management and an applied design practice that shapes executive environments. This dossier collects his biography, holdings, selected case studies and curated publications for board-level review.</p>
        </section>

        {/* Timeline */}
        <section className="space-y-6">
          <h3 className="text-sm uppercase tracking-[0.2em] text-ash font-black">Career Timeline</h3>
          <div className="border-l border-obsidian/8 pl-6 space-y-6">
            {TIMELINE.map((t) => (
              <div key={t.year} className="relative">
                <div className="absolute -left-[1.125rem] top-1 w-5 h-5 rounded-full bg-white dark:bg-obsidian border border-gold flex items-center justify-center font-black text-gold">{t.year}</div>
                <div className="ml-2 md:ml-6">
                  <div className="font-semibold">{t.title}</div>
                  <div className="text-sm text-ash">{t.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Businesses / Holdings */}
        <section className="space-y-6">
          <h3 className="text-sm uppercase tracking-[0.2em] text-ash font-black">Businesses & Holdings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUSINESSES.map((b) => (
              <article key={b.id} className="p-6 bg-white dark:bg-obsidian border border-obsidian/6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold">{b.name}</h4>
                      <span className="text-xs uppercase text-ash tracking-[0.12em] font-black">{b.role}</span>
                    </div>
                    <p className="text-sm text-ash mt-2">{b.blurb}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <a href={b.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold">Visit <ArrowUpRight size={14} /></a>
                      <a href="#case-studies" className="text-sm text-ash">View case study</a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Case studies */}
        <section id="case-studies" className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.2em] text-ash font-black">Select Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((c, i) => (
              <div key={i} className="p-6 bg-white dark:bg-obsidian border border-obsidian/6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">{c.title}</h4>
                    <div className="text-xs text-ash">{c.subtitle}</div>
                  </div>
                  <div className="text-xs font-mono text-ash">Confidential</div>
                </div>
                <p className="text-sm text-ash">{c.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="p-6 bg-white dark:bg-obsidian border border-obsidian/6 rounded-xl">
          <h3 className="text-sm uppercase tracking-[0.2em] text-ash font-black mb-4">Thought Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PUBLICATIONS.map((p, i) => (
              <div key={i} className="text-sm">
                <div className="font-semibold">{p.title}</div>
                <div className="text-xs text-ash mb-2">{p.outlet}</div>
                <a href={p.link} className="text-xs font-semibold">Read</a>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* RIGHT - Quick panel */}
      <aside className="lg:col-span-4 space-y-6">

        <div className="sticky top-28 space-y-4">
          <div className="p-6 bg-white dark:bg-obsidian border border-obsidian/6 rounded-xl">
            <h4 className="text-sm uppercase tracking-[0.2em] text-ash font-black mb-3">Quick Facts</h4>
            <div className="grid grid-cols-2 gap-4">
              <Stat label="Offices" value="3" />
              <Stat label="Teams" value="12" />
              <Stat label="Uptime Target" value="99.995%" />
              <Stat label="Design Studio" value="KONCEPTO" />
            </div>
            <a href={`mailto:${PROFILE.contactEmail}`} className="mt-4 block w-full text-center py-2 rounded-md bg-obsidian text-bone font-black hover:bg-gold hover:text-obsidian">Secure Contact</a>
          </div>

          <div className="p-6 bg-white dark:bg-obsidian border border-obsidian/6 rounded-xl">
            <h4 className="text-sm uppercase tracking-[0.2em] text-ash font-black mb-3">Press & Mentions</h4>
            <ul className="text-sm space-y-3">
              <li>
                <a href="#" className="font-semibold">El Financiero — Banking transformation in Central America</a>
                <div className="text-xs text-ash">March 2025</div>
              </li>
              <li>
                <a href="#" className="font-semibold">Design + Business — Executive spaces</a>
                <div className="text-xs text-ash">Nov 2023</div>
              </li>
              <li>
                <a href="#" className="font-semibold">TechLatam — How Banco Atlántida migrated the core</a>
                <div className="text-xs text-ash">July 2024</div>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white dark:bg-obsidian border border-obsidian/6 rounded-xl">
            <h4 className="text-sm uppercase tracking-[0.2em] text-ash font-black mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-obsidian text-bone"><Linkedin /></a>
              <a href={PROFILE.twitter} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-obsidian text-bone"><Twitter /></a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-obsidian text-bone"><Github /></a>
            </div>
          </div>

        </div>
      </aside>
    </div>

    {/* Footer */}
    <footer className="mt-12 text-center text-sm text-ash">
      <div>© {new Date().getFullYear()} {PROFILE.name}. Curated executive dossier for board and partners.</div>
    </footer>

  </div>
</main>
    
  );
}