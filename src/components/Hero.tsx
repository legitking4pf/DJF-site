"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const imageSrc =
    "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/smal%20screen%20background";
  
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        marginTop: "var(--header-height, 0px)",
        minHeight: "calc(100vh - var(--header-height, 0px))",
      }}
    >
      {/* Hero Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt="Hero background"
          fill
          className="object-cover"
        />
      </div>

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
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-ash border border-ash px-4 py-2">
                Institutional Mandate
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl xl:text-7xl font-bold text-[#1C1C1C] leading-tight mb-6"
            >
              Financial Governance <br />
              Infrastructure for <br />
              Modern Institutions
            </h1>

            {/* Subtext */}
            <p className="max-w-2xl text-[black] md:text-lg leading-relaxed mb-10">
              The professional portfolio of{" "}
              <span className="font-semibold text-gold-dark uppercase font-robotomono">
                David Jackson Fernandez
              </span>
              , focused on building institutional-grade digital governance and
              fintech infrastructure for global financial ecosystems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-ash/50 px-6 py-3 text-[black] font-medium">
                Read More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}