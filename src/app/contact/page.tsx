"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, ArrowRight, Lock, 
  CheckCircle2, Globe, Landmark, 
  Fingerprint, Zap, Send
} from 'lucide-react';

export default function ExecutiveContact() {
  const [state, handleSubmit] = useForm("meearreg");

  // Build-safe animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <main className="min-h-screen bg-[#FBFBF9] text-obsidian selection:bg-gold/20 overflow-hidden">
      
      {/* 1. COMMAND HEADER: Institutional Presence */}
      <section className="relative pt-40 pb-24 px-6 lg:px-20 bg-obsidian text-white overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 mb-8">
            <Fingerprint className="text-gold w-4 h-4" />
            <span className="text-gold font-black tracking-[0.6em] text-[10px] uppercase">
              Secure Channel // GFA-EXEC-PORTAL
            </span>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-3xl md:text-6xl font-display uppercase tracking-tighter leading-[1.1">
                Strategic <br /> <span className="italic font-serif font-light text-gold/80">Inquiry</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-ash text-xs uppercase tracking-[0.3em] font-bold leading-relaxed max-w-xs ml-auto">
                Direct institutional gateway for CAO & CTO engagement regarding the GFA Strategic Vision 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE ADVISORY GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-32 grid grid-cols-1 lg:grid-cols-12 gap-24">
        
        {/* LEFT: STRATEGIC PILLARS */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-20"
        >
          <motion.div variants={itemVars} className="group">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/5 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-obsidian transition-all">
                <Landmark size={20} />
              </div>
              <h2 className="text-2xl font-display uppercase tracking-tight">Wealth Acceleration</h2>
            </div>
            <p className="text-ash text-lg font-light leading-relaxed border-l-2 border-gold/20 pl-6">
              Exploring the <span className="text-obsidian font-bold italic">Strategic Growth Network</span>. Leveraging capital and technological sovereignty to optimize regional asset performance across Central America.
            </p>
          </motion.div>

          <motion.div variants={itemVars} className="group">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/5 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-obsidian transition-all">
                <Zap size={20} />
              </div>
              <h2 className="text-2xl font-display uppercase tracking-tight">Digital Integration</h2>
            </div>
            <p className="text-ash text-lg font-light leading-relaxed border-l-2 border-gold/20 pl-6">
              High-level briefings on fintech core migration, zero-trust infrastructure, and the digital future of the <span className="text-obsidian font-bold">Atlántida ecosystem</span>.
            </p>
          </motion.div>

          <motion.div variants={itemVars} className="pt-12">
            <div className="flex items-center gap-4 text-ash font-mono text-[10px] uppercase tracking-widest">
              <Globe size={14} className="text-gold" /> HQ: Tegucigalpa // Region: HND-ES-GT
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: THE ENCRYPTED FORM */}
        <div className="lg:col-span-7">
          <div className="bg-white p-10 md:p-16 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-obsidian/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <Lock size={120} />
            </div>

            <div className="flex justify-between items-center mb-16 relative z-10">
               <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-gold">Briefing Transmission</h3>
               <div className="flex gap-1">
                  {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-gold rounded-full" />)}
               </div>
            </div>

            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-24 space-y-6">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} className="text-gold" />
                  </div>
                  <h4 className="text-3xl font-display uppercase tracking-tighter">Transmission Successful</h4>
                  <p className="text-ash text-sm font-light tracking-widest uppercase">Logged into GFA Executive Registry.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="name" className="text-[9px] font-black uppercase tracking-[0.4em] text-ash">Identity</label>
                      <input id="name" name="name" type="text" placeholder="Principal Name" required className="bg-transparent border-b border-obsidian/10 py-4 text-base focus:border-gold outline-none transition-all placeholder:text-obsidian/20" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="email" className="text-[9px] font-black uppercase tracking-[0.4em] text-ash">Secure Email</label>
                      <input id="email" name="email" type="email" placeholder="official@domain.com" required className="bg-transparent border-b border-obsidian/10 py-4 text-base focus:border-gold outline-none transition-all placeholder:text-obsidian/20" />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-gold text-[9px] mt-1" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="intent" className="text-[9px] font-black uppercase tracking-[0.4em] text-ash">Strategic Intent</label>
                    <select id="intent" name="intent" className="bg-transparent border-b border-obsidian/10 py-4 text-base focus:border-gold outline-none cursor-pointer appearance-none">
                      <option>Wealth Acceleration Opportunity</option>
                      <option>GFA Strategic Growth Network Inquiry</option>
                      <option>Digital Integration Partnership</option>
                      <option>Executive Protocol Consultation</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="message" className="text-[9px] font-black uppercase tracking-[0.4em] text-ash">Detailed Briefing</label>
                    <textarea id="message" name="message" rows={5} placeholder="Define objectives and scope..." className="bg-transparent border-b border-obsidian/10 py-4 text-base focus:border-gold outline-none resize-none placeholder:text-obsidian/20" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-gold text-[9px] mt-1" />
                  </div>

                  <button 
                    type="submit"
                    disabled={state.submitting}
                    className="group w-full bg-obsidian text-white py-6 text-[10px] font-black uppercase tracking-[0.6em] hover:bg-gold hover:text-obsidian transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50 shadow-xl"
                  >
                    {state.submitting ? "TRANSMITTING..." : "Send Securely"} 
                    <Send size={14} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. SECURITY FOOTER */}
      <footer className="py-20 border-t border-obsidian/5 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto text-gold/20 mb-6" size={40} />
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-ash">
            End-to-End Encrypted via GFA Governance Standards 2030
          </p>
        </div>
      </footer>
    </main>
  );
}
