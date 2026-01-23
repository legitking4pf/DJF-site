"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Upload, 
  ArrowRight, 
  Briefcase, 
  Building2, 
  Mail, 
  CheckCircle2,
  Lock
} from 'lucide-react';

// --- DATA: THE ENGAGEMENT PROTOCOL (Left Side) ---
const protocolSteps = [
  {
    id: 1,
    title: "Identity Verification",
    desc: "All incoming correspondence is filtered through GFA's administrative governance layer to ensure verified corporate identity.",
    icon: <ShieldCheck size={18} />
  },
  {
    id: 2,
    title: "Strategic Alignment",
    desc: "Your inquiry is routed to the specific vertical (Fintech Core, Asset Management, or Design) for executive review.",
    icon: <Briefcase size={18} />
  },
  {
    id: 3,
    title: "Secure Response",
    desc: "Qualified opportunities receive a direct, encrypted response from the Executive Office within 48 hours.",
    icon: <Lock size={18} />
  }
];

// --- INTERFACE: FORM TYPES ---
interface ContactFormState {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  file: File | null;
}

export default function Footer() {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    company: '',
    interest: 'Strategic Partnership', // Default
    message: '',
    file: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <main className="min-h-screen bg-obsidian text-white font-sans selection:bg-gold/30">
      
      {/* 1. HERO / HEADER SECTION */}
      <div className="pt-24 pb-12 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end border-b border-white/10 mb-12">
        <div>
          <span className="flex items-center gap-2 text-gold font-bold tracking-[0.2em] text-xs uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
            Secure Channel Active
          </span>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight">
            Initiate <span className="text-gray-500 italic">Protocol</span>
          </h1>
        </div>
        <p className="text-gray-400 text-sm max-w-md mt-6 md:mt-0 leading-relaxed text-right md:text-left">
          Direct lines of communication for high-level institutional inquiries, investment partnerships, and architectural commissions.
        </p>
      </div>

      {/* 2. SPLIT LAYOUT (Timeline Left / Form Right) */}
      <div className="relative w-full bg-[#FDFBF7] text-obsidian pb-24 md:pb-40 rounded-t-[3rem] shadow-[0_-50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT COLUMN: THE PROTOCOL TIMELINE --- */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-medium">
                Engagement <br/> Architecture
              </h2>
              <p className="text-gray-500 font-light text-sm leading-relaxed max-w-xs">
                We prioritize precision. Understand the workflow before initiating contact to ensure optimal resource allocation.
              </p>
            </div>

            <div className="space-y-10 relative">
              {/* Vertical Line */}
              <div className="absolute left-[19px] top-2 bottom-4 w-[1px] bg-gray-200" />

              {protocolSteps.map((step, idx) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6 group"
                >
                  {/* Step Number Bubble */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gold font-bold shadow-sm group-hover:border-gold group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  <div className="flex-1 pt-1">
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-2 group-hover:text-gold transition-colors">
                      {idx + 1}. {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                Regional Headquarters
              </p>
              <div className="flex gap-2 items-center text-sm font-medium">
                <Building2 size={16} className="text-gold" />
                <span>Centro Corporativo, Tegucigalpa, Honduras</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: THE ROBUST FORM CARD --- */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-2xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100 relative z-20"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-obsidian text-white rounded-md">
                     <Mail size={20} />
                   </div>
                   <div>
                     <h3 className="font-bold text-lg leading-none">Transmission</h3>
                     <p className="text-xs text-gray-400 mt-1">Encrypted 256-bit</p>
                   </div>
                </div>
                <span className="text-xs font-serif italic text-gold">24hr Response SLA</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-2 group-focus-within:text-gold transition-colors">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Executive Name"
                      className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-2 group-focus-within:text-gold transition-colors">
                      Corporate Email
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@organization.com"
                      className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-2 group-focus-within:text-gold transition-colors">
                      Organization
                    </label>
                    <input 
                      type="text" 
                      placeholder="Company / Institution"
                      className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-2 group-focus-within:text-gold transition-colors">
                      Subject Interest
                    </label>
                    <div className="relative">
                      <select className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white transition-all appearance-none cursor-pointer text-gray-700 font-medium">
                        <option>Strategic Partnership</option>
                        <option>Wealth Acceleration (Investment)</option>
                        <option>Media & Press Inquiry</option>
                        <option>Design Commission (KONCEPTO)</option>
                      </select>
                      <div className="absolute right-4 top-3.5 pointer-events-none text-gray-400">
                        <ArrowRight size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Optional: Details */}
                <div className="group">
                  <label className="block text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-2 group-focus-within:text-gold transition-colors">
                    Briefing Details (Optional)
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full bg-gray-50 border-2 border-transparent border-b-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white transition-all placeholder:text-gray-300 resize-none"
                    placeholder="Outline the scope, timeline, and strategic objectives..."
                  />
                </div>

                {/* File Upload Zone */}
                <div className="relative border-2 border-dashed border-gray-200 rounded-lg p-6 bg-gray-50/50 hover:bg-gold/5 hover:border-gold/30 transition-all cursor-pointer text-center group">
                  <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-gold transition-colors">
                    <Upload size={24} />
                    <span className="text-xs font-bold uppercase tracking-wide">Secure Document Drop</span>
                    <span className="text-[10px] text-gray-300">PDF, DOCX, KEY (Max 10MB)</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-obsidian text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold transition-colors flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    "Encrypting & Sending..."
                  ) : (
                    <>
                      Transmit Securely <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-gray-400">
                  By transmitting, you acknowledge the <span className="underline decoration-gold/50">GFA Digital Privacy Standard</span>.
                </p>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}
