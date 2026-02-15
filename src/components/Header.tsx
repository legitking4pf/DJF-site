"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent
} from "framer-motion";
import { Fingerprint, Globe, X, Menu } from "lucide-react";

const NAV_ITEMS = [
  { label: "Hero", id: "hero" },
  { label: "Dossier", id: "profile" },
  { label: "Gallery", id: "gallery" },
  { label: "Portfolio", id: "whatIDo" },
  { label: "Ledger", id: "ledger" },
  { label: "Footer", id: "footer" }
];

export default function RefinedHeader() {
  // ✅ CLOSED by default
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  
  // Smooth header animation values
  const height = useTransform(scrollY, [0, 80], ["96px", "72px"]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(10,10,10,0.95)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(28,25,23,0.1)", "rgba(255,255,255,0.1)"]
  );
  
  // Track scroll state + update CSS variable dynamically
  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 50;
    setIsScrolled(scrolled);
    
    const newHeight = scrolled ? "72px" : "96px";
    document.documentElement.style.setProperty("--header-height", newHeight);
  });
  
  // Handle body scroll locking
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  
  const activeTextColor = isScrolled ? "text-white" : "text-stone-900";
  const activeSubtextColor = isScrolled ?
    "text-white/60" :
    "text-stone-500";
  const activeBorderColor = isScrolled ?
    "border-white/10" :
    "border-stone-900/10";
  
  return (
    <>
      <motion.header
        style={{ height, backgroundColor, borderColor }}
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">

          {/* BRAND */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold select-none text-sm shadow-xl">
              DJF
            </div>
            <div className="leading-tight hidden sm:block">
              <div className={`text-sm tracking-widest font-bold ${activeTextColor}`}>
                JACKSON <span className="text-amber-600">F.</span>
              </div>
              <div className={`text-[9px] uppercase tracking-[0.2em] ${activeSubtextColor}`}>
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
                className={`relative group transition-colors duration-300 ${
                  isScrolled
                    ? "text-white/70 hover:text-white"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">
                  {item.label}
                </span>
                <span className="absolute left-0 right-0 -bottom-1 h-[1px] bg-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">

            <a
              href="/app/contact"
              className={`hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest border rounded-full transition-all duration-300 ${
                isScrolled
                  ? "text-amber-500 border-amber-500/30 hover:bg-amber-500 hover:text-black"
                  : "text-stone-900 border-stone-900/20 hover:bg-stone-900 hover:text-white"
              }`}
            >
              <Fingerprint size={14} />
              <span>Contact Office</span>
            </a>

            {/* TOGGLE BUTTON */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((prev) => !prev)}  // ✅ real toggle
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${activeBorderColor} ${activeTextColor}`}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-stone-950 text-white flex flex-col"
          >
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 w-full h-full flex flex-col">

              {/* Top */}
              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center font-bold">
                    DJF
                  </div>
                  <span className="text-sm tracking-widest uppercase font-medium">
                    Menu
                  </span>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Nav */}
              <nav className="flex flex-col gap-8">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="group flex items-baseline gap-6"
                  >
                    <span className="text-stone-600 font-mono text-sm">
                      0{idx + 1}
                    </span>
                    <span className="text-4xl md:text-6xl font-light tracking-tighter hover:text-amber-500 transition-colors">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Footer */}
              <div className="mt-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6">
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-amber-500" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-stone-400">
                    Honduras · Spain · Guatemala
                  </span>
                </div>
                <div className="text-[10px] text-stone-500 uppercase tracking-widest">
                  © 2026 David Jackson Fernandez
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}