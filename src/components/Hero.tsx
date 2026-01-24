"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Fingerprint, Globe } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
          scrolled ? 'bg-obsidian/95 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center relative">
          
          {/* 1. IDENTITY */}
          <div className="flex items-center gap-6 relative z-[110]">
            <span className="text-gold font-display text-2xl md:text-3xl tracking-tighter leading-none block">
              DJF
            </span>
            <div className="hidden lg:flex flex-col border-l border-white/20 pl-6 h-8 justify-center">
              <span className="text-[8px] uppercase tracking-[0.4em] text-white font-black leading-none mb-1">Executive Command</span>
              <span className="text-[7px] uppercase tracking-[0.2em] text-gold/60 font-mono">Ref: GFA-OFFICE-2026</span>
            </div>
          </div>

          {/* 2. DESKTOP NAV */}
          <nav className="hidden lg:flex gap-16 relative z-[110] items-center">
            {['Vision', 'Dossier', 'Portfolio', 'Network'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/50 hover:text-white transition-all">
                {item}
              </a>
            ))}
          </nav>

          {/* 3. ACCESS & MOBILE TOGGLE */}
          <div className="flex items-center gap-4 relative z-[110]">
            <button className="hidden md:flex items-center gap-3 border border-gold/30 bg-gold/5 px-6 py-2.5 group hover:bg-gold transition-all duration-500">
              <Fingerprint size={12} className="text-gold group-hover:text-obsidian" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gold group-hover:text-obsidian">Access Contact</span>
            </button>

            {/* THE TOGGLE: Needs to stay visible or toggle state */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center border border-white/10 text-white relative z-[200]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} className="text-gold" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[150] bg-obsidian flex flex-col justify-between p-8 md:p-12"
          >
            {/* Background Branding */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display text-white/[0.02] pointer-events-none uppercase tracking-tighter">
              Executive
            </div>

            <div className="mt-20 space-y-8 relative z-10">
              {['Vision', 'Dossier', 'Portfolio', 'Network'].map((item, idx) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-end gap-4 text-5xl md:text-7xl font-display uppercase tracking-tighter text-white hover:text-gold transition-colors"
                >
                  <span className="text-gold/20 text-xl font-mono mb-2">0{idx + 1}</span>
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="relative z-10 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Globe size={16} className="text-gold" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">GFA Regional Control: HND // ES // GT</span>
                </div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 max-w-xs">
                  Unified Command Center for Digital Sovereignty & Strategic Growth [cite: 2025-12-09].
                </p>
              </div>
              
              <button className="px-10 py-5 bg-gold text-obsidian text-[10px] uppercase tracking-[0.5em] font-black hover:bg-white transition-colors w-full md:w-auto">
                Request Secure Access
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
