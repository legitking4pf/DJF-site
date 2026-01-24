"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, ShieldCheck, ArrowRight, Lock, 
  CheckCircle2, Globe, BarChart3, Landmark 
} from 'lucide-react';

"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, ShieldCheck, ArrowRight, Lock, 
  CheckCircle2, Landmark, BarChart3 
} from 'lucide-react';

export default function ExecutiveContact() {
  // Integrated Formspree Hook - Replace "meearreg" with your actual ID if changed
  const [state, handleSubmit] = useForm("meearreg");

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-black font-sans selection:bg-gold/30">
      
      {/* 1. BRANDED HEADER */}
      <section className="bg-black text-white pt-28 pb-16 px-6 lg:px-20 border-b border-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <span className="text-gold font-bold tracking-[0.4em] text-[10px] uppercase block">
              GFA Strategic Growth Network [cite: 2025-12-09]
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-[0.85]">
              Secure <span className="italic text-gray-500">Advisory</span>
            </h1>
          </div>
          <p className="text-gray-400 text-sm max-w-xs font-light leading-relaxed">
            Direct institutional channel for CAO & CTO engagement regarding digital transformation and asset management [cite: 2025-12-09].
          </p>
        </div>
      </section>

      {/* 2. SPLIT CONTENT: INSIGHTS & FORM */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* LEFT: INVESTMENT & WEALTH WRITE-UPS */}
        <div className="lg:col-span-5 space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gold">
              <Landmark size={24} />
              <h2 className="text-2xl font-serif text-black">Wealth Acceleration</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              True **wealth acceleration** requires more than traditional banking. It demands a **Strategic Growth Network** where capital meets technological sovereignty [cite: 2025-12-09]. Our insights focus on the GFA Strategic Vision 2030, leveraging digital integration to optimize regional asset performance [cite: 2025-12-09].
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gold">
              <BarChart3 size={24} />
              <h2 className="text-2xl font-serif text-black">Digital Transformation</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              As part of our commitment to **Digital Integration**, we provide high-level briefings on how fintech core systems are redefining investment horizons in Central America [cite: 2025-12-09].
            </p>
          </div>
        </div>

        {/* RIGHT: THE FORM */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 md:p-12 shadow-2xl border border-gray-100 relative">
            <div className="flex justify-between items-center mb-12">
               <h3 className="text-xl font-serif italic text-gray-500">Contact Protocol</h3>
               <Lock className="text-gold opacity-50" size={18} />
            </div>

            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 space-y-4">
                  <CheckCircle2 size={48} className="text-green-500 mx-auto" />
                  <h4 className="text-xl font-serif">Transmission Received</h4>
                  <p className="text-gray-500 text-xs">Logged into the GFA Executive Registry [cite: 2025-12-09].</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gold transition-colors">Identity</label>
                      <input id="name" name="name" type="text" placeholder="Full Name" required className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 text-sm focus:border-gold outline-none transition-all" />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gold transition-colors">Secure Email</label>
                      <input id="email" name="email" type="email" placeholder="name@organization.com" required className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 text-sm focus:border-gold outline-none transition-all" />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="intent" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gold transition-colors">Strategic Intent</label>
                    <select id="intent" name="intent" className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 text-sm focus:border-gold outline-none cursor-pointer">
                      <option>Investment Wealth Advisory</option>
                      <option>GFA Strategic Growth Network Inquiry [cite: 2025-12-09]</option>
                      <option>Digital Integration Partnership [cite: 2025-12-09]</option>
                      <option>Direct Executive Feedback</option>
                    </select>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-gold transition-colors">Detailed Briefing</label>
                    <textarea id="message" name="message" rows={4} placeholder="Outline your objectives..." className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 text-sm focus:border-gold outline-none resize-none" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                  </div>

                  <button 
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-gold hover:text-black transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {state.submitting ? "Transmitting..." : "Send Securely"} <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. GLOBAL FOOTER STRIP */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <ShieldCheck className="mx-auto text-gold/30" size={32} />
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Authenticated via GFA Security Standards [cite: 2025-12-09]
          </p>
        </div>
      </section>
    </main>
  );
}
