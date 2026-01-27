"use client";
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  CheckCircle2,
  Globe,
  Landmark,
  Fingerprint,
  Zap,
  Send,
} from "lucide-react";
export default function ExecutiveContact() {
  const [state, handleSubmit] = useForm("meearreg");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 1200;
  
  useEffect(() => setCharCount(message.length), [message]);
  
  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };
  
const itemVars: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as[number, number, number, number],
    },
  },
};

  return (
    <main className="min-h-screen bg-[#FBFBF9] text-obsidian selection:bg-gold/20">
      {/* HEADER */}
      <section className="relative pt-28 pb-20 px-6 lg:px-20 bg-obsidian text-white overflow-hidden">
        <div className="absolute inset-0 opacity-8 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian/20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Fingerprint className="text-gold w-4 h-4" />
            <span className="text-gold font-black tracking-[0.45em] text-[10px] uppercase">
              Secure Channel // GFA-EXEC-PORTAL
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tight leading-[1.02]">
                Strategic{" "}
                <span className="italic font-serif font-light text-gold/90">Inquiry</span>
              </h1>
              <p className="mt-6 max-w-2xl text-ash/90 text-sm">
                Direct institutional gateway for CAO & CTO engagement — concise briefings only.
                No fluff. Strictly for vetted strategic transmissions.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="text-ash text-xs uppercase tracking-[0.3em] font-bold max-w-xs ml-auto">
                Institutional ops • Strategic growth • Technology sovereignty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* LEFT: PILLARS */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-12"
        >
          <motion.div variants={itemVars} className="group">
            <div className="flex items-center gap-5 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/6 border border-gold/20 text-gold rounded">
                <Landmark size={18} />
              </div>
              <h2 className="text-2xl font-display uppercase tracking-tight">Wealth Acceleration</h2>
            </div>
            <p className="text-ash text-base font-light leading-relaxed border-l-2 border-gold/15 pl-5">
              Strategic Growth Network briefings — capital to scale regional asset performance with
              technological sovereignty across Central America.
            </p>
          </motion.div>

          <motion.div variants={itemVars} className="group">
            <div className="flex items-center gap-5 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/6 border border-gold/20 text-gold rounded">
                <Zap size={18} />
              </div>
              <h2 className="text-2xl font-display uppercase tracking-tight">Digital Integration</h2>
            </div>
            <p className="text-ash text-base font-light leading-relaxed border-l-2 border-gold/15 pl-5">
              Zero-trust infrastructure, core fintech migration, and an interoperable future for the
              Atlántida ecosystem.
            </p>
          </motion.div>

          <motion.div variants={itemVars} className="pt-6">
            <div className="flex items-center gap-3 text-ash font-mono text-[11px] uppercase tracking-widest">
              <Globe size={14} className="text-gold" /> HQ: Tegucigalpa • Region: HND-ES-GT
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: FORM */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 md:p-12 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)] border border-obsidian/6 relative overflow-hidden rounded-md">
            <div className="absolute top-6 right-6 opacity-6">
              <Lock size={110} />
            </div>

            <div className="flex justify-between items-center mb-10 relative z-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.45em] text-gold">Briefing Transmission</h3>
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-1 h-1 bg-gold rounded-full" />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 space-y-5"
                  aria-live="polite"
                >
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={44} className="text-gold" />
                  </div>
                  <h4 className="text-2xl font-display uppercase tracking-tight">Transmission Successful</h4>
                  <p className="text-ash text-sm font-medium uppercase tracking-[0.2em]">
                    Logged to GFA Executive Registry
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-obsidian text-white uppercase text-[11px] font-bold tracking-[0.35em] hover:bg-gold hover:text-obsidian transition"
                  >
                    New Transmission <ArrowRight size={14} />
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    // small guard: trim message to max chars before sending
                    e.preventDefault();
                    const trimmed = message.slice(0, maxChars);
                    // Append hidden input for truncated message and submit Formspree
                    const form = e.currentTarget;
                    // ensure message field in form contains trimmed content
                    const hidden = form.querySelector("input[name='__trimmed_message']");
                    if (hidden) (hidden as HTMLInputElement).value = trimmed;
                    // standard Formspree submission
                    handleSubmit(e);
                  }}
                  className="space-y-6 relative z-10"
                  aria-label="Executive briefing form"
                >
                  <input type="hidden" name="__trimmed_message" value={message.slice(0, maxChars)} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="text-[9px] font-black uppercase tracking-[0.35em] text-ash">
                        Identity
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Principal Name"
                        required
                        className="mt-2 bg-transparent border-b border-obsidian/10 py-3 text-base focus:border-gold outline-none transition placeholder:text-obsidian/30"
                        aria-required="true"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="text-[9px] font-black uppercase tracking-[0.35em] text-ash">
                        Secure Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="official@domain.com"
                        required
                        className="mt-2 bg-transparent border-b border-obsidian/10 py-3 text-base focus:border-gold outline-none transition placeholder:text-obsidian/30"
                        aria-required="true"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-gold text-[11px] mt-1" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="intent" className="text-[9px] font-black uppercase tracking-[0.35em] text-ash">
                      Strategic Intent
                    </label>
                    <select
                      id="intent"
                      name="intent"
                      className="mt-2 bg-transparent border-b border-obsidian/10 py-3 text-base focus:border-gold outline-none cursor-pointer appearance-none w-full"
                    >
                      <option>Wealth Acceleration Opportunity</option>
                      <option>GFA Strategic Growth Network Inquiry</option>
                      <option>Digital Integration Partnership</option>
                      <option>Executive Protocol Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-[9px] font-black uppercase tracking-[0.35em] text-ash">
                      Detailed Briefing
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Define objectives and scope… (be concise, we read fast)"
                      className="mt-2 bg-transparent border border-obsidian/8 rounded p-3 text-base focus:border-gold outline-none resize-none placeholder:text-obsidian/30 min-h-[120px]"
                      maxLength={maxChars}
                      aria-describedby="charcount"
                    />
                    <div className="flex justify-between items-center mt-2 text-[12px]">
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-gold" />
                      <div id="charcount" className={`text-[11px] ${charCount > maxChars * 0.9 ? "text-red-500" : "text-ash"}`}>
                        {charCount}/{maxChars}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={state.submitting || !message.trim()}
                      className="group w-full bg-obsidian text-white py-4 text-[12px] font-black uppercase tracking-[0.45em] hover:bg-gold hover:text-obsidian transition-all duration-400 flex items-center justify-center gap-3 disabled:opacity-50 shadow"
                      aria-disabled={state.submitting || !message.trim()}
                    >
                      {state.submitting ? "TRANSMITTING..." : "Send Securely"}
                      <span className="transform group-hover:translate-x-2 transition-transform">
                        <Send size={14} />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-obsidian/6 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto text-gold/20 mb-4" size={36} />
          <p className="text-[10px] font-black uppercase tracking-[0.45em] text-ash">
            End-to-End Encrypted via GFA Governance Standards 2030
          </p>
        </div>
      </footer>
    </main>
  );
}