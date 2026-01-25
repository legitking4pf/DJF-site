"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Terminal,
  Scale,
  Copyright
} from "lucide-react";

// --- ASSETS ---
const PROFILE_IMG =
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/Profile%20Image%20-jlbi7Xn3mevVzx1EjqgyAGgjsnLEuM";

const OFFICE_IMG =
  "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/ebn-Atlantida-zpqvrZCN2sUPlWwyYQVopLkJd5s3RF.jpg";

export default function CAOManifesto() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  
  return (
    <main
      ref={containerRef}
      className="bg-[#0A0A0A] text-[#ECECEC] min-h-screen font-sans selection:bg-[#C6A87C] selection:text-black"
    >
      {/* =========================
          AUTHORITY HEADER (MOBILE)
      ========================== */}
      <header className="lg:hidden sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur border-b border-white/10 px-4 py-3">
        <p className="text-[11px] font-mono uppercase tracking-widest text-[#C6A87C]">
          Grupo Financiero Atlántida
        </p>
        <p className="text-xs text-[#777]">
          Office of the Chief Administrative Officer
        </p>
      </header>

      {/* =========================
          HERO / COVER
      ========================== */}
      <section className="relative min-h-screen px-6 lg:px-12 pt-28 border-b border-white/10">
        {/* Meta */}
        <div className="flex justify-between text-[10px] md:text-xs uppercase tracking-[0.25em] font-mono text-[#777] mb-20">
          <div>
            <p className="text-[#C6A87C]">/// Institutional Dossier</p>
            <p>Tegucigalpa / Global</p>
          </div>
          <div className="text-right">
            <p>Ref: CAO_2026</p>
            <p>Status: Restricted</p>
          </div>
        </div>

        {/* Headline */}
        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[14vw] leading-[0.82] font-serif tracking-tight text-white relative z-10"
        >
          Institutional
          <br />
          <span className="italic text-[#C6A87C]">Architecture</span>
        </motion.h1>

        {/* Subtext */}
        <div className="mt-14 max-w-xl">
          <p className="text-lg md:text-xl leading-relaxed text-[#999]">
            The Office of the Chief Administrative Officer exists to engineer
            governance, enforce operational rigor, and secure long-term
            institutional sovereignty across capital, compliance, and growth.
          </p>
        </div>

        {/* Hero Image */}
        <motion.div
          style={prefersReducedMotion ? {} : { y: heroY }}
          className="absolute right-0 bottom-0 w-full md:w-[50vw] h-[65vh] md:h-[80vh] opacity-40 md:opacity-100 grayscale contrast-125"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0A0A0A]/60 to-[#0A0A0A]" />
          <Image
            src={PROFILE_IMG}
            alt="David Jackson Fernandez"
            fill
            priority
            className="object-cover object-top"
          />
        </motion.div>
      </section>

      {/* =========================
          EDITORIAL BODY
      ========================== */}
      <section className="py-32 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-white/10">
        {/* Sidebar */}
        <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-10 hidden lg:block">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#C6A87C] mb-3">
              Executive Office
            </p>
            <p className="text-2xl font-serif">David Jackson Fernandez</p>
            <p className="text-sm text-[#666] mt-2">
              Chief Administrative Officer
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <div className="space-y-3 font-mono text-xs text-[#888]">
            <div className="flex justify-between">
              <span>Mandate</span>
              <span className="text-white">Governance</span>
            </div>
            <div className="flex justify-between">
              <span>Horizon</span>
              <span className="text-white">2030</span>
            </div>
            <div className="flex justify-between">
              <span>Domain</span>
              <span className="text-white">Fintech / Compliance</span>
            </div>
          </div>
        </aside>

        {/* Article */}
        <article className="lg:col-span-8 lg:col-start-5 space-y-24">
          {/* Section 1 */}
          <section>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#C6A87C] mb-4">
              01 — Governance Mandate
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Administrative authority is a growth instrument.
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-lg text-[#9A9A9A] leading-loose">
              <p>
                Capital velocity without governance creates fragility. The CAO
                office exists to eliminate administrative drag and replace it
                with transparent, auditable, real-time systems.
              </p>
              <p>
                This framework allows executive leadership and regulators to
                operate with certainty, speed, and institutional trust.
              </p>
            </div>
          </section>

          {/* Stat Break */}
          <section className="py-14 border-y border-white/10 grid md:grid-cols-3 gap-8">
            {[
              ["Operational Scope", "Global"],
              ["Digital Governance", "Active"],
              ["Wealth Framework", "Institutional"]
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#555] mb-2">
                  {label}
                </p>
                <p className="text-3xl font-serif italic">{value}</p>
              </div>
            ))}
          </section>

          {/* Section 2 */}
          <section>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#C6A87C] mb-4">
              02 — Strategic Growth Network
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Wealth acceleration is an infrastructure problem.
            </h2>
            <p className="text-lg text-[#9A9A9A] leading-loose">
              The Strategic Growth Network is a private institutional framework
              designed for compliant capital expansion. It prioritizes
              governance, privacy, and direct market access over speculative
              velocity.
            </p>

            <blockquote className="mt-12 border-l-2 border-[#C6A87C] pl-8 italic text-xl font-serif text-[#C6A87C]">
              Portfolios are constructed, not chased.
            </blockquote>
          </section>

          {/* Section 3 */}
          <section>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#C6A87C] mb-4">
              03 — Physical & Cultural Design
            </p>

            <div className="relative h-[420px] grayscale hover:grayscale-0 transition duration-700">
              <Image
                src={OFFICE_IMG}
                alt="KONCEPTO Decor"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur px-6 py-4 border border-white/10">
                <p className="text-sm uppercase tracking-widest font-bold">
                  KONCEPTO Décor
                </p>
                <p className="text-xs text-[#888] mt-1">
                  Institutional Environment
                </p>
              </div>
            </div>

            <p className="mt-10 text-lg text-[#9A9A9A] leading-loose">
              Physical environments reinforce governance culture. Precision,
              restraint, and clarity define every institutional space.
            </p>
          </section>
        </article>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="bg-[#050505] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-2xl md:text-3xl font-light mb-8 max-w-lg">
              Alignment begins with governance.
            </p>
            <Link
              href="/growth-network"
              className="inline-flex items-center gap-4 border border-[#C6A87C] text-[#C6A87C] px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#C6A87C] hover:text-black transition"
            >
              Access Strategic Network <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="space-y-3 text-xs font-mono uppercase tracking-wider text-[#666] md:text-right">
            <div className="flex md:justify-end items-center gap-2">
              <Terminal size={14} /> System: Operational
            </div>
            <div className="flex md:justify-end items-center gap-2">
              <Scale size={14} /> Regulatory: Compliant
            </div>
            <div className="flex md:justify-end items-center gap-2">
              <Copyright size={14} /> 2026 David J. Fernandez
            </div>
          </div>
        </div>
      </footer>

      {/* Grain */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")'
        }}
      />
    </main>
  );
}