"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Fingerprint, Globe } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    }
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
  }, []);
  
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
          scrolled 
            ? 'bg-obsidian/95 backdrop-blur-xl border-b border-white/10 py-3' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center relative">
          
          {/* 1. IDENTITY BLOCK */}
          <div className="flex items-center gap-6 group cursor-pointer relative z-[110]">
            <div className="relative">
              <span className="text-gold font-display text-2xl md:text-3xl tracking-tighter leading-none block group-hover:scale-105 transition-transform duration-500">
                DJF
              </span>
              <div className="absolute -top-1 -right-2 w-1 h-1 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div className="hidden lg:flex flex-col border-l border-white/20 pl-6 h-8 justify-center">
              <span className="text-[8px] uppercase tracking-[0.4em] text-white font-black leading-none mb-1">
                Executive Command
              </span>
              <span className="text-[7px] uppercase tracking-[0.2em] text-gold/60 font-mono leading-none">
                Ref: GFA-OFFICE-2026
              </span>
            </div>
          </div>

          {/* 2. NAVIGATION: Raised Z-index for clear interaction */}
          <nav className="hidden lg:flex gap-16 relative z-[120] items-center">
            {['Vision', 'Dossier', 'Portfolio', 'Network'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-[10px] uppercase tracking-[0.5em] font-bold text-white/50 hover:text-white transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* 3. ACCESS PANEL */}
          <div className="flex items-center gap-4 relative z-[120]">
            <button className="hidden md:flex items-center gap-3 border border-gold/30 bg-gold/5 px-6 py-2.5 group hover:bg-gold transition-all duration-500">
              {/* FIXED: class:Name changed to className */}
              <Fingerprint size={12} className="text-gold group-hover:text-obsidian transition-colors" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gold group-hover:text-obsidian">
                Access Contact
              </span>
            </button>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center border border-white/10 text-white relative z-[130]"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      className="fixed inset-0 z-[150] bg-obsidian flex flex-col p-8 md:p-12"
    >
      {/* 1. INTERNAL CLOSE ACTION */}
      <div className="flex justify-between items-center mb-16">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-mono">
          System // Navigation
        </span>
        <button 
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 group px-4 py-2 border border-white/5 hover:border-gold/50 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 group-hover:text-gold transition-colors">
            Close
          </span>
          <X size={18} className="text-white/50 group-hover:text-gold transition-colors" />
        </button>
      </div>

      {/* 2. NAVIGATION LINKS */}
      <div className="flex-grow flex flex-col justify-center space-y-10">
        {['Vision', 'Dossier', 'Portfolio', 'Network'].map((item, idx) => (
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="block text-4xl md:text-5xl font-display uppercase tracking-tighter text-white hover:text-gold transition-all duration-500"
          >
            <span className="text-gold/20 mr-6 text-xl italic">0{idx + 1}</span>
            {item}
          </motion.a>
        ))}
      </div>
      
      {/* 3. FOOTER LOGISTICS */}
      <div className="mt-auto pt-10 border-t border-white/10 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Globe size={14} className="text-gold/50" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
              HND // ES // GT
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
            © 2026 DJF Institutional
          </span>
        </div>
        
        <button className="w-full border border-gold/30 py-5 text-gold uppercase tracking-[0.5em] text-[10px] font-black hover:bg-gold hover:text-obsidian transition-all duration-700">
          Request Secure Contact
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};

export default Header;