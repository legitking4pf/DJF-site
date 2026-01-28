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
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  
  const itemVars: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  
  return (
    <main className="min-h-screen bg-[#0B0D0F] text-white selection:bg-gold/30">

      {/* === HERO / HEADER === */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(197,157,72,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B0D0F_0%,#0E1114_60%,#0B0D0F_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pt-28">
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
          >
            {/* Left */}
            <motion.div variants={itemVars} className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <Fingerprint className="w-4 h-4 text-gold" />
                <span className="text-gold text-[10px] font-black tracking-[0.45em] uppercase">
                  Secure Channel // GFA Executive
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl xl:text-8xl font-display uppercase leading-[0.95] tracking-tight">
                Strategic
                <br />
                <span className="text-gold italic font-serif font-light">
                  Inquiry
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-sm text-ash/90 leading-relaxed">
                Encrypted institutional access for CAO & CTO-level engagements.
                Briefings only. Vetted. Actionable.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              variants={itemVars}
              className="lg:col-span-4 lg:text-right"
            >
              <p className="text-[11px] uppercase tracking-[0.35em] text-ash font-bold">
                Institutional Ops
                <br />
                Strategic Growth
                <br />
                Technology Sovereignty
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* === BODY (UNCHANGED STRUCTURE, VISUALLY SHARPER) === */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 lg:grid-cols-12 gap-20 bg-[#FBFBF9] text-obsidian">
        {/* LEFT */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-14"
        >
          <motion.div variants={itemVars}>
            <div className="flex items-center gap-5 mb-4">
              <div className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold rounded-md">
                <Landmark size={18} />
              </div>
              <h2 className="text-2xl font-display uppercase">
                Wealth Acceleration
              </h2>
            </div>
            <p className="text-ash leading-relaxed border-l-2 border-gold/30 pl-5">
              Capital deployment strategies designed to scale institutional
              assets with jurisdictional awareness and sovereign tech control.
            </p>
          </motion.div>

          <motion.div variants={itemVars}>
            <div className="flex items-center gap-5 mb-4">
              <div className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold rounded-md">
                <Zap size={18} />
              </div>
              <h2 className="text-2xl font-display uppercase">
                Digital Integration
              </h2>
            </div>
            <p className="text-ash leading-relaxed border-l-2 border-gold/30 pl-5">
              Zero-trust infrastructure, fintech modernization, and interoperable
              executive systems across the Atlántida ecosystem.
            </p>
          </motion.div>

          <motion.div variants={itemVars} className="pt-6">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-ash font-mono">
              <Globe size={14} className="text-gold" />
              Tegucigalpa • HND — ES — GT
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT FORM (kept intentionally restrained) */}
        {/* FORM CODE CONTINUES EXACTLY AS YOU ALREADY HAVE IT */}
      </section>

      {/* FOOTER */}
      <footer className="py-14 border-t border-white/10 bg-[#0B0D0F]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto text-gold/20 mb-4" size={36} />
          <p className="text-[10px] font-black uppercase tracking-[0.45em] text-ash">
            Encrypted Under GFA Governance Protocols
          </p>
        </div>
      </footer>
    </main>
  );
}