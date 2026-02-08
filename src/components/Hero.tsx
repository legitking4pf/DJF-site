"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
      marginTop: 'var(--header-height, 0px)',minHeight: 'calc(100vh - var(--header-height, 0px))',
        backgroundImage: "url('/https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/hero%20background-kICOZiiGPTRANFyueDNNCLOEz1VR9Y')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Label */}
            <div className="mb-6">
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-slate-200 border border-white/30 px-4 py-2">
                Institutional Mandate
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              Financial Governance <br />
              Infrastructure for <br />
              Modern Institutions
            </h1>

            {/* Subtext */}
            <p className="max-w-2xl text-slate-200 text-base md:text-lg leading-relaxed mb-10">
              The professional portfolio of{" "}
              <span className="font-semibold text-white">
                David Jackson Fernandez
              </span>
              , focused on building institutional-grade digital governance and
              fintech infrastructure for global financial ecosystems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-medium">
                View Portfolio
              </button>
              <button className="border border-white/40 hover:border-white transition px-6 py-3 rounded-lg text-white font-medium">
                Contact
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}