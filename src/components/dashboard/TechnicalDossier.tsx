"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Copy, MoreHorizontal, HelpCircle } from 'lucide-react';

export const TechnicalDossier = () => {
  const [showExtraIds, setShowExtraIds] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking anywhere else on the screen
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowExtraIds(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const extraIdentifiers = [
    { label: 'CUSIP', value: 'P5865GAC4' },
    { label: 'FIGI', value: 'BBG01111RXS0' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10 bg-[#050505] divide-y lg:divide-y-0 lg:divide-x divide-white/10">
      
      {/* 1. KEY TERMS */}
      {/* 1. KEY TERMS */}
<div className="p-4 space-y-7">
  <h3 className="text-[24px] font-bold tracking-tight text-white mb-8">Key terms</h3>
  
  <div className="space-y-5">
    {[
      { 
        label: 'Outstanding amount', 
        value: '102.21 M', 
        unit: 'USD', 
        url: 'https://www.tradingview.com/support/solutions/43000728397' 
      },
      { 
        label: 'Face value', 
        value: '1,000.00', 
        unit: 'USD', 
        url: 'https://www.tradingview.com/support/solutions/43000728399' 
      },
      { 
        label: 'Minimum denomination', 
        value: '200,000.00', 
        unit: 'USD', 
        url: 'https://www.tradingview.com/support/solutions/43000729400' 
      },
      { 
        label: 'Coupon', 
        value: '7.50% (Fixed)', 
        url: 'https://www.tradingview.com/support/solutions/43000728401' 
      },
      { 
        label: 'Coupon frequency', 
        value: 'Semi-annual', 
        url: 'https://www.tradingview.com/support/solutions/43000728405' 
      },
      { 
        label: 'Maturity date', 
        value: 'May 19, 2026', 
        url: 'https://www.tradingview.com/support/solutions/43000728408' 
      },
      { 
        label: 'Term to maturity', 
        value: '1 month', 
        url: 'https://www.tradingview.com/support/solutions/43000703827' 
      },
    ].map((item, i) => (
      <div key={i} className="group flex flex-col gap-1">
        {/* Label as a Link */}
        <a 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-1.5 no-underline"
        >
          <p className="text-[14px] font-bold text-zinc-500 tracking-wider uppercase leading-none group-hover:text-gold transition-colors">
            {item.label}
          </p>
          <HelpCircle 
            size={14} 
            className="text-zinc-700 group-hover:text-gold transition-colors cursor-pointer" 
          />
        </a>
        
        <p className="text-[18px] text-white tracking-tight font-medium mt-0.5">
          {item.value} 
          {item.unit && (
            <span className="text-[12px] text-zinc-400 font-mono ml-1 uppercase">
              {item.unit}
            </span>
          )}
        </p>
      </div>
    ))}
  </div>
</div>

      {/* 2. ABOUT INVERSIONES ATLANTIDA */}
      <div className="p-4 space-y-7 bg-white/[0.01]">
        <h3 className="text-[22px] font-bold tracking-tight text-white mb-8 leading-tight">
          About Inversiones Atlantida<br />
          <span className="text-white text-[20px] font-medium tracking-normal">S.A. 7.5% 19-MAY-2026</span>
        </h3>
        
        <div className="space-y-6">
          <div className="flex flex-col gap-1">
            <p className="text-[14px] font-bold text-zinc-500 tracking-wider">Issuer</p>
            <p className="text-[18px] text-white">Inversiones Atlantida SA</p>
          </div>
          <div className="flex flex-col gap-1 pt-2">
            <p className="text-[14px] font-bold text-zinc-500 tracking-wider">Sector</p>
            <p className="text-[18px] text-white">Finance</p>
          </div>
          <div className="flex flex-col gap-1 pt-2">
            <p className="text-[14px] font-bold text-zinc-500 tracking-wider">Industry</p>
            <p className="text-[18px] text-white">Regional Banks</p>
          </div>

          <div className="flex flex-col gap-1 pt-2">
            <p className="text-[14px] font-bold text-zinc-500 tracking-wider">Home page</p>
            <a href="https://invatlan.hn" target="_blank" className="text-[18px] text-gold flex items-center gap-2 transition-colors">
              invatlan.hn <ExternalLink size={16} />
            </a>
          </div>

          {/* IDENTIFIERS WITH DROPDOWN TOGGLE */}
          <div className="flex flex-col gap-1 pt-2 relative" ref={dropdownRef}>
            <p className="text-[14px] font-bold text-zinc-500 tracking-wider">Identifiers</p>
            <div className="flex items-center gap-3">
              <code className="text-[18px] font-mono text-white bg-white/5 px-2 py-1 rounded">ISIN USP5865GAC44</code>
              <div className="flex gap-2 text-zinc-600">
                <Copy size={16} className="cursor-pointer hover:text-white transition-colors" />
                <button onClick={() => setShowExtraIds(!showExtraIds)}>
                  <MoreHorizontal size={16} className={`cursor-pointer transition-colors ${showExtraIds ? 'text-white' : 'hover:text-white'}`} />
                </button>
              </div>
            </div>

            {/* Hidden Toggle Container */}
            {showExtraIds && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-[#0a0a0a] border border-white/10 rounded shadow-2xl z-50 p-1">
                {extraIdentifiers.map((id, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 group">
                    <div>
                      <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest">{id.label}</p>
                      <p className="text-[15px] text-white font-mono">{id.value}</p>
                    </div>
                    <Copy size={14} className="text-zinc-600 opacity-0 group-hover:opacity-100 cursor-pointer" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. ANALYSIS */}
<div className="p-4 space-y-8">
  {/* Header Section */}
  <div className="flex justify-between items-center">
    <h3 className="text-[22px] font-bold tracking-tight text-white flex items-center gap-2">
      Analysis <ChevronRight size={20} className="text-zinc-600" />
    </h3>
    <span className="text-[10px] px-2 py-0.5 border border-white/10 text-zinc-500 uppercase font-mono tracking-tighter">
      Real-time Feed
    </span>
  </div>

  {/* REDEMPTION SECTION */}
  <div className="space-y-6">
    {/* Corrected Alignment for Title and Icon */}
    <div className="flex items-center gap-2">
      <a 
        href="https://www.tradingview.com/support/solutions/43000730585/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center gap-2"
      >
        <p className="text-[16px] font-bold text-white uppercase tracking-wide leading-none group-hover:text-gold transition-colors">
          Redemption
        </p>
        <HelpCircle size={16} className="text-zinc-700 group-hover:text-gold transition-colors cursor-pointer" />
      </a>
    </div>

    {/* Donut Chart */}
    <div className="flex justify-center items-center relative py-4">
      <div className="w-44 h-44 rounded-full border-[20px] border-[#3b82f6] flex items-center justify-center relative shadow-[0_0_30px_rgba(59,130,246,0.05)]">
        {/* Outstanding Segment (Orange ~34%) */}
        <div 
          className="absolute inset-[-20px] rounded-full border-[20px] border-transparent border-t-[#fb923c] border-r-[#fb923c] rotate-[45deg]" 
          style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 50% 100%)' }} 
        />
        <div className="text-center bg-[#050505] w-full h-full rounded-full flex flex-col items-center justify-center m-[1px]">
          <span className="text-[20px] font-bold text-white tracking-tighter">300 M</span>
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">USD</span>
        </div>
      </div>
    </div>

    {/* Redemption Legend/Data */}
    <div className="mt-8 space-y-4">
      <div className="flex justify-between items-center text-[13px]">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 bg-[#fb923c] rounded-[2px]" />
          <span className="text-zinc-400 font-medium">Outstanding amount</span>
        </div>
        <p className="text-white text-[14px]">
          <span className="font-bold">102.21M</span> <span className="text-zinc-500 font-mono text-[11px]">USD</span> 
          <span className="font-bold font-mono text-zinc-300 ml-1">(34.07%)</span>
        </p>
      </div>
      <div className="flex justify-between items-center text-[13px]">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 bg-[#3b82f6] rounded-[2px]" />
          <span className="text-zinc-400 font-medium">Paid amount</span>
        </div>
        <p className="text-white text-[14px]">
          <span className="font-bold text-zinc-300">197.79M</span> <span className="text-zinc-500 font-mono text-[11px]">USD</span> 
          <span className="font-bold font-mono text-zinc-300 ml-1">(65.93%)</span>
        </p>
      </div>
    </div>
  </div>

  {/* PAYMENTS SECTION */}
  <div className="pt-8 border-t border-white/5 space-y-6">
    <div className="flex items-center gap-2">
      <a 
        href="https://www.tradingview.com/support/solutions/43000730585/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center gap-2">
        <p className="text-[16px] font-bold text-white uppercase tracking-wide leading-none">
        Coupon
      </p> 
      <HelpCircle size = { 16 } className = "text-zinc-700 hover:text-gold transition-colors cursor-help" / >
      </a>
    </div>
    {/* Stacked Bar Chart */}
    <div className="h-44 w-full flex items-end justify-between gap-3 relative pb-2 group">
      {[
        { year: '21', coupon: 15, principal: 0 },
        { year: '22', coupon: 20, principal: 0 },
        { year: '23', coupon: 20, principal: 15 },
        { year: '24', coupon: 18, principal: 35 },
        { year: '25', coupon: 12, principal: 60 },
        { year: '26', coupon: 5,  principal: 100 },
      ].map((bar, i) => (
        <div key={i} className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
          <div className="w-full flex flex-col justify-end h-full relative group-hover:opacity-60 hover:!opacity-100 transition-opacity">
            <div className="w-full bg-[#fb923c] rounded-t-sm" style={{ height: `${bar.principal}%` }} />
            <div className="w-full bg-[#3b82f6] rounded-sm" style={{ height: `${bar.coupon}%` }} />
          </div>
          <span className="text-[10px] font-mono font-bold text-zinc-600 tracking-tighter uppercase">
            {bar.year}
          </span>
        </div>
      ))}
      {/* Base Line */}
      <div className="absolute bottom-6 left-0 right-0 h-px bg-white/10" />
    </div>

    {/* Bar Chart Legend */}
    <div className="flex gap-4 pt-2">
      <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
        <div className="w-2 h-2 bg-[#3b82f6] rounded-[1px]" /> Coupon
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
        <div className="w-2 h-2 bg-[#fb923c] rounded-[1px]" /> Principal
      </div>
    </div>
  </div>
</div>

    </div>
  );
};
