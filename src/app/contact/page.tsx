"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Bell,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Mail,
  Globe,
  Lock
} from 'lucide-react';

export default function StrategicContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] selection:bg-gold/20">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#050505] text-white pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12"
          >
            <div className="max-w-2xl">
              <span className="flex items-center gap-2 text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6">
                <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
                Executive Secure Channel
              </span>
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-[0.9]">
                Connect & <span className="italic text-gray-500">Accelerate</span>
              </h1>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed font-light">
              Direct access for GFA partners, institutional investors, and design collaborators seeking strategic alignment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE THREE VERTICALS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: NARRATIVE & INSIGHTS */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* INSIGHTS SECTION */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gold">
                <TrendingUp size={24} />
                <h2 className="text-2xl font-serif text-black">Wealth Intelligence</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                As part of the <strong>Strategic Growth Network</strong>, we provide curated insights into the intersection of Fintech and regional Asset Management. Our goal is to demystify the "Digital Core" and reveal how technological sovereignty drives long-term wealth acceleration.
              </p>
              <div className="bg-white border border-gray-100 p-6 shadow-sm">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Priority Topics</h4>
                <ul className="grid grid-cols-2 gap-y-3 text-xs font-bold text-black">
                  <li className="flex items-center gap-2">● Central American M&A</li>
                  <li className="flex items-center gap-2">● Sovereign Cloud Tech</li>
                  <li className="flex items-center gap-2">● Sustainable Dev-Finance</li>
                  <li className="flex items-center gap-2">● Architectural Essentialism</li>
                </ul>
              </div>
            </div>

            {/* SUBSCRIBE SECTION */}
            <div className="bg-black text-white p-10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Bell size={120} />
              </div>
              <h3 className="text-2xl font-serif relative z-10">The Executive Briefing</h3>
              <p className="text-gray-400 text-xs leading-relaxed relative z-10">
                Subscribe to receive quarterly insights on Digital Integration and market shifts across the GFA ecosystem. No clutter. Just intelligence.
              </p>
              <form name="subscribe" method="POST" data-netlify="true" className="flex gap-2 relative z-10">
                <input type="hidden" name="form-name" value="subscribe" />
                <input 
                  type="email" 
                  placeholder="Professional Email"
                  className="bg-white/10 border border-white/20 px-4 py-3 text-xs w-full focus:outline-none focus:border-gold transition-colors"
                  required
                />
                <button className="bg-gold text-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
                  Join
                </button>
              </form>
            </div>

          </div>

          {/* RIGHT COLUMN: THE MASTER FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white shadow-2xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100">
              <div className="mb-10 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-1">Direct Transmission</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Encrypted Feedback & Inquiries</p>
                </div>
                <Lock className="text-gold" size={20} />
              </div>

              <form name="executive-contact" method="POST" data-netlify="true" className="space-y-8">
                <input type="hidden" name="form-name" value="executive-contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 group-focus-within:text-gold transition-colors">Sender Identity</label>
                    <input name="name" type="text" placeholder="Full Name" required className="w-full bg-gray-50 border-b border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white transition-all" />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 group-focus-within:text-gold transition-colors">Secure Return</label>
                    <input name="email" type="email" placeholder="Corporate Email" required className="w-full bg-gray-50 border-b border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white transition-all" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 group-focus-within:text-gold transition-colors">Engagement Path</label>
                  <select name="intent" className="w-full bg-gray-50 border-b border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold cursor-pointer">
                    <option>Executive Feedback</option>
                    <option>Investment Wealth Insight Request</option>
                    <option>GFA Partnership Inquiry</option>
                    <option>KONCEPTO Architectural Commission</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 group-focus-within:text-gold transition-colors">Briefing Details</label>
                  <textarea name="message" rows={5} placeholder="Describe the scope of your inquiry..." className="w-full bg-gray-50 border-b border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white transition-all resize-none" />
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all flex items-center justify-center gap-4 group">
                    Transmit Protocol <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>

                <div className="flex items-center gap-3 justify-center pt-6 opacity-30">
                  <ShieldCheck size={14} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Authenticated Data Processing</span>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FINAL CTA: GLOBAL REACH */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <Globe className="mx-auto text-gray-200" size={48} />
          <h2 className="text-3xl font-serif">A Global Presence. A Regional Focus.</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Operating within the 7 AM — 7 PM window to ensure intensive oversight of all regional administrative and technological deployments.
          </p>
        </div>
      </section>

    </main>
  );
}