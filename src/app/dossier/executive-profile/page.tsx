"use client";
import React from 'react';
import { ArrowUpRight, History, Award, Briefcase, ExternalLink } from 'lucide-react';

// 1. REUSABLE SMART LINK COMPONENT
// This handles the link styling and the "Alt Text" tooltip on hover
const SmartLink = ({ href, children, role, tag }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-flex items-baseline font-bold text-black border-b border-gold/50 hover:border-gold hover:bg-gold/10 transition-colors cursor-pointer group mx-1"
  >
    {children}
    
    {/* THE HOVER TOOLTIP (ALT TEXT) */}
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-obsidian text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl border border-gold/20 z-20">
      {role} <span className="text-gold">//</span> {tag}
      {/* Little arrow pointing down */}
      <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-obsidian"></span>
    </span>
  </a>
);

export default function ExecutiveDossier() {
  
  // 2. FIXED DATA STRUCTURE (Clean Objects)
  const entities = {
    group: {
      role: "Chief Administration Officer",
      url: "https://www.grupofinancieroatlantida.com",
      tag: "Governance"
    },
    bank: {
      role: "Chief Technology Officer",
      url: "https://www.bancatlan.hn",
      tag: "Digital Core"
    },
    design: {
      role: "Founder",
      url: "https://www.konceptodecor.com",
      tag: "Design Culture"
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] pt-24 pb-32 font-sans selection:bg-gold/20">
      
      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 lg:px-12 mb-20 border-b border-black/10 pb-12">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-gold rounded-full"></span>
            <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase">
              Executive Profile // GFA-HQ
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-black leading-[0.9] tracking-tight">
            David Jackson Fernandez
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl leading-relaxed mt-4">
            A dual-mandate executive architecting the <span className="text-black font-medium border-b border-gold/30">Digital Sovereignty</span> and <span className="text-black font-medium border-b border-gold/30">Administrative Governance</span> of Central America's most historic financial institution.
          </p>
        </div>
      </header>

      {/* CONTENT GRID */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* LEFT COLUMN: NARRATIVE */}
        <article className="lg:col-span-8 space-y-20">
          
          {/* NARRATIVE 1 */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
               <History className="text-gold w-6 h-6" />
               <h2 className="font-serif text-3xl text-black">Strategic Origins</h2>
            </div>
            <div className="prose prose-lg text-gray-700 leading-loose text-justify">
              <p>
                David Jackson Fernandez’s integration into 
                {/* LINK INSERTED HERE */}
                <SmartLink 
                  href={entities.group.url} 
                  role={entities.group.role}
                  tag={entities.group.tag}
                >
                   Grupo Financiero Atlántida (GFA)
                </SmartLink>
                was not a conventional hire, but a strategic alignment designed to bridge the "Legacy Gap." 
              </p>
              <p>
                Recruited during a pivotal era of regional consolidation, David was tasked with a singular, high-stakes objective: <strong>to immunize the bank’s operational core against technological obsolescence.</strong> Recognizing that traditional banking models were becoming vulnerable to agile fintech disruptors, he engineered a "Hybrid-Core" strategy—maintaining the institutional trust of a century-old bank while deploying the cloud-native velocity of a startup.
              </p>
              <p>
                 His early tenure was defined by the <strong>"Silent Migration"</strong>—the seamless transfer of critical financial data to secure, sovereign cloud environments without a single second of client-facing downtime. This success cemented his position as the guardian of the group's digital assets.
              </p>
            </div>
          </section>

          {/* NARRATIVE 2 */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
               <Briefcase className="text-gold w-6 h-6" />
               <h2 className="font-serif text-3xl text-black">The Governance Engine</h2>
            </div>
            <div className="prose prose-lg text-gray-700 leading-loose text-justify">
              <p>
                Uniquely, David holds the dual titles of <strong>Chief Administrative Officer</strong> and 
                {/* LINK INSERTED HERE */}
                <SmartLink 
                  href={entities.bank.url} 
                  role={entities.bank.role}
                  tag={entities.bank.tag}
                >
                  Chief Technology Officer
                </SmartLink>. 
                In most organizations, these roles are siloed. Under his "Unified Command" doctrine, they are inseparable.
              </p>
              <p>
                He operates on the conviction that in the modern financial landscape, <em>code is policy.</em> Administrative decisions regarding compliance, hiring, and expansion are now inextricably linked to data rights and system architecture. By consolidating these powers, he has eliminated the friction between "Management" and "IT," allowing GFA to execute cross-border acquisitions in <strong>Honduras, El Salvador, and Guatemala</strong> with military precision.
              </p>
            </div>
          </section>

          {/* NARRATIVE 3 */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
               <Award className="text-gold w-6 h-6" />
               <h2 className="font-serif text-3xl text-black">Architectural Essentialism</h2>
            </div>
            <div className="prose prose-lg text-gray-700 leading-loose text-justify">
              <p>
                David’s influence extends beyond the server room into the physical realm through 
                {/* LINK INSERTED HERE */}
                <SmartLink 
                  href={entities.design.url} 
                  role={entities.design.role}
                  tag={entities.design.tag}
                >
                  KONCEPTO Décor
                </SmartLink>. 
                This venture is not a hobby; it is a manifestation of his executive philosophy: <strong>Essentialism.</strong>
              </p>
              <p>
                Just as he removes redundant code to speed up a banking transaction, he removes visual clutter to clarify executive thought. His designs draw heavily from <strong>Spanish Modernism</strong>—favoring raw materials, light, and silence. This "Aesthetic Rigor" creates environments where high-level decisions can be made without distraction, reflecting the very stability he engineers into the bank’s digital core.
              </p>
            </div>
          </section>

           {/* STRATEGIC CITATIONS */}
          <section className="pt-12 border-t border-black/10">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
              Strategic Portfolio
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group p-8 bg-white border border-gray-200 hover:border-gold transition-all cursor-pointer shadow-sm hover:shadow-md">
                <h4 className="font-serif text-xl text-black mb-2 group-hover:text-gold transition-colors">Digital Core Transformation</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  The complete re-architecture of GFA's transactional layer, reducing latency by 40% while enhancing sovereign encryption.
                </p>
                <span className="text-xs uppercase tracking-widest font-bold text-black group-hover:text-gold flex items-center gap-2">
                  Review Audit <ArrowUpRight size={12} />
                </span>
              </div>
              
              <div className="group p-8 bg-white border border-gray-200 hover:border-gold transition-all cursor-pointer shadow-sm hover:shadow-md">
                <h4 className="font-serif text-xl text-black mb-2 group-hover:text-gold transition-colors">Regional Admin Protocol</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Standardized governance frameworks for cross-border teams in Central America, unifying legal and operational workflows.
                </p>
                <span className="text-xs uppercase tracking-widest font-bold text-black group-hover:text-gold flex items-center gap-2">
                  View Framework <ArrowUpRight size={12} />
                </span>
              </div>
            </div>
          </section>
        </article>

        {/* RIGHT COLUMN: EXECUTIVE INFOBOX */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white border border-gray-200 shadow-lg p-8 lg:sticky lg:top-12">
            
            {/* Image Placeholder */}
            <div className="w-full aspect-[3/4] bg-gray-100 mb-8 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gold/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
               <img 
                 src="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM" 
                 alt="David Jackson Fernandez"
                 className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
               />
            </div>

            <div className="space-y-6">
               <div className="border-b border-gray-100 pb-4">
                 <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Current Status</p>
                 <p className="text-lg font-serif text-black">Active // Tegucigalpa HQ</p>
               </div>
               
               <div className="border-b border-gray-100 pb-4">
                 <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Tenure Focus</p>
                 <p className="text-lg font-serif text-black">2020 — Perpetual</p>
               </div>

               <div className="border-b border-gray-100 pb-4">
                 <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Key Competencies</p>
                 <ul className="text-sm text-black space-y-2 mt-2 font-medium">
                   <li className="flex items-center gap-2">
                     <span className="w-1 h-1 bg-gold rounded-full"></span> Sovereign Cloud Arch.
                   </li>
                   <li className="flex items-center gap-2">
                     <span className="w-1 h-1 bg-gold rounded-full"></span> M&A Integration
                   </li>
                   <li className="flex items-center gap-2">
                     <span className="w-1 h-1 bg-gold rounded-full"></span> High-Value Asset Design
                   </li>
                 </ul>
               </div>
            </div>

            <div className="mt-8 pt-8 border-t border-black">
              <a 
                href="https://www.linkedin.com" 
                target="_blank"
                className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 hover:bg-gold transition-colors text-xs uppercase tracking-[0.2em] font-bold"
              >
                <ExternalLink size={14} /> Connect Securely
              </a>
            </div>

          </div>
        </aside>

      </div>
    </main>
  );
}
