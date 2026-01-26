"use client";
import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Fingerprint, Globe } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerHeight = useTransform(scrollY, [0, 50], ["90px", "70px"]);
  const headerBg = useTransform(scrollY, [0, 50], ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.95)"]);

  return (
    <>
      <motion.header
        style={{ height: headerHeight, backgroundColor: headerBg }}
        className="fixed top-0 w-full z-[100] flex items-center backdrop-blur-sm transition-all border-b border-white/[0.03]"
      >
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 w-full flex justify-between items-center">
          
          {/* IDENTITY: Minimalist & Balanced */}
          <div className="flex items-center gap-10">
            <div className="flex flex-col cursor-pointer group">
              <span className="text-xl font-display tracking-[0.4em] text-white">
                JACKSON <span className="text-gold font-light">F.</span>
              </span>
              <span className="text-[7px] uppercase tracking-[0.5em] text-white/30 mt-1 group-hover:text-gold transition-colors">
                Institutional Portfolio
              </span>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-14">
            {['Vision', 'Dossier', 'Portfolio', 'Network'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] uppercase tracking-[0.6em] text-white/40 hover:text-white transition-all duration-500"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* ACCESS PANEL */}
          <div className="flex items-center gap-8">
            <button className="hidden md:flex items-center gap-4 group">
               <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 group-hover:text-gold transition-colors">
                 Secure Access
               </span>
               <div className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-full group-hover:border-gold/50 transition-all">
                <Fingerprint size={14} className="text-white/40 group-hover:text-gold" />
               </div>
            </button>

            {/* CUSTOM TOGGLE */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-end z-[200] group"
            >
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 3, width: "32px" } : { rotate: 0, y: 0, width: "32px" }}
                className="h-[1px] bg-white block mb-2 transition-all" 
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -4, width: "32px" } : { rotate: 0, y: 0, width: "20px" }}
                className="h-[1px] bg-white block transition-all" 
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY: Kinetic Shutter Effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-obsidian flex flex-col"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

            <div className="flex-grow flex flex-col justify-center px-12 md:px-24">
              <div className="space-y-4">
                {['Vision', 'Dossier', 'Portfolio', 'Network'].map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * idx, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="inline-block text-5xl md:text-8xl font-display uppercase tracking-tighter text-white/10 hover:text-gold hover:translate-x-4 transition-all duration-700"
                    >
                      {item}
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* FOOTER LOGISTICS */}
              <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <Globe size={12} className="text-gold/50" />
                    <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">HND // ES // GT</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-white/10">Ref: 2026-INTL</span>
                </div>
                
                <button className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold hover:tracking-[0.7em] transition-all">
                  Contact Office
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
