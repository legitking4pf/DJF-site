"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-obsidian/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Identity */}
        <div className="flex flex-col">
          <span className="text-gold font-display text-2xl md: text-3x1 tracking-tighter leading-none">DJF</span>
          <span className="text-10px md: text-12px uppercase tracking-[0.3em] text-bone mt-1">Executive HQ</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-12 items-center">
          {['Vision', 'Portfolio', 'News', 'Connect'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-widest text-bone/70 hover:text-gold transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <button className="border border-gold/50 px-6 py-2 text-[10px] uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-obsidian transition-all duration-500">
            Strategic Inquiry
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;