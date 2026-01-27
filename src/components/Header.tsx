"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Fingerprint, Globe } from "lucide-react";

const NAV_ITEMS = [
  { label: "Hero", id: "hero" },
  { label: "Dossier", id: "profile" },
  { label: "Gallery", id: "gallery" },
  { label: "Portfolio", id: "whatIDo" },
  {label: "Ledger", id: "ledger"},
  {label: "Footer", id: "footer"}
];

export default function RefinedHeader() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const height = useTransform(scrollY, [0, 60], ["96px", "72px"]);
  const bg = useTransform(
    scrollY,
    [0, 60],
    ["rgba(0,0,0,0)", "rgba(4,4,4,0.92)"]
  );
  
  // ESC key closes menu like a civilized interface
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);
  
  return (
    <>
      {/* HEADER */}
      <motion.header
        style={{ height, backgroundColor: bg }}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.03] backdrop-blur-sm"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          {/* BRAND */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-gold text-black flex items-center justify-center font-bold select-none">
              DJF
            </div>
            <div className="leading-tight">
              <div className="text-sm tracking-widest text-white">
                JACKSON <span className="text-gold">F.</span>
              </div>
              <div className="text-[9px] uppercase tracking-wider text-white/40">
                Institutional Portfolio
              </div>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative text-white/60 hover:text-white transition"
              >
                <span className="text-[10px] uppercase tracking-widest">
                  {item.label}
                </span>
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gold rounded"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25 }}
                  style={{ transformOrigin: "left" }}
                />
              </a>
            ))}
          </nav>

          {/* CTA + TOGGLE */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-[12px] uppercase tracking-wider text-gold border border-white/10 rounded-md hover:bg-white/5"
            >
              <Fingerprint size={14} />
              Contact Office
            </a>

            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"
            >
              ☰
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-sm"
            onClick={() => setOpen(false)} // CLICK OUTSIDE = CLOSE
          >
            {/* STOP PROPAGATION SO CONTENT CLICKS DON'T CLOSE */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[1000px] mx-auto px-8 md:px-16 py-12 h-full flex flex-col"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold text-black font-bold flex items-center justify-center rounded-full">
                    DJF
                  </div>
                  <div>
                    <div className="text-white tracking-wider">
                      JACKSON F.
                    </div>
                    <div className="text-xs uppercase tracking-wider text-white/30">
                      Institutional Portfolio
                    </div>
                  </div>
                </div>

                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="text-white text-xl border border-white/10 rounded-md px-3 py-1"
                >
                  ✕
                </button>
              </div>

              {/* NAV */}
              <nav className="flex-1 flex flex-col justify-center gap-6">
                {NAV_ITEMS.map((item, idx) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="text-3xl md:text-6xl uppercase tracking-tight text-white hover:text-gold transition"
                    style={{ transitionDelay: `${idx * 40}ms` }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* FOOT */}
              <div className="pt-6 border-t border-white/[0.05] flex flex-col md:flex-row justify-between gap-4">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-white/40">
                  <Globe size={14} className="text-gold/70" />
                  HND · ES · GT
                </div>

                <div className="flex gap-3">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 bg-gold text-black uppercase tracking-wider rounded-md"
                  >
                    Contact Office
                  </a>
                  <a
                    href="#secure"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 border border-white/10 text-white uppercase tracking-wider rounded-md"
                  >
                    Secure Access
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}