"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Copy, MoreHorizontal, HelpCircle } from 'lucide-react';

export const TechnicalDossier = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10 bg-[#050505] divide-y lg:divide-y-0 lg:divide-x divide-white/10">
      
      {/* 1. KEY TERMS */}
      <div className="p-8 space-y-7">
        <h3 className="text-[22px] font-bold tracking-tight text-white mb-8">Key terms</h3>
        
        <div className="space-y-5">
          {[
            { label: 'Outstanding amount', value: '102.21 M', unit: 'USD' },
            { label: 'Face value', value: '1,000.00', unit: 'USD' },
            { label: 'Minimum denomination', value: '200,000.00', unit: 'USD' },
            { label: 'Coupon', value: '7.50% (Fixed)' },
            { label: 'Coupon frequency', value: 'Semi-annual' },
            { label: 'Maturity date', value: 'May 19, 2026' },
            { label: 'Term to maturity', value: '1 month' },
          ].map((item, i) => (
            <div key={i} className="group flex flex-col gap-1">
              <p className="text-[12px] font-semibold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                {item.label} 
                <HelpCircle size={10} className="text-zinc-700 group-hover:text-gold transition-colors" />
              </p>
              <p className="text-[18px] font-light text-white tracking-tight">
                {item.value} {item.unit && <span className="text-[12px] text-zinc-500 font-mono ml-1">{item.unit}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ABOUT INVERSIONES ATLANTIDA */}
      <div className="p-8 space-y-7 bg-white/[0.01]">
        <h3 className="text-[22px] font-bold tracking-tight text-white mb-8 leading-tight">
          About Inversiones Atlantida<br />
          <span className="text-zinc-500 text-[16px] font-medium tracking-normal">S.A. 7.5% 19-MAY-2026</span>
        </h3>
        
        <div className="space-y-6">
          <div className="flex flex-col gap-1">
            <p className="text-[12px] font-semibold text-zinc-500 uppercase tracking-wider">Issuer</p>
            <p className="text-[18px] text-white font-light">Inversiones Atlantida SA</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[12px] font-semibold text-zinc-500 uppercase tracking-wider">Sector</p>
              <p className="text-[16px] text-zinc-300">Finance</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] font-semibold text-zinc-500 uppercase tracking-wider">Industry</p>
              <p className="text-[16px] text-zinc-300">Regional Banks</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 pt-2">
            <p className="text-[12px] font-semibold text-zinc-500 uppercase tracking-wider">Home page</p>
            <a href="https://invatlan.hn" target="_blank" className="text-[16px] text-gold/80 hover:text-gold flex items-center gap-2 transition-colors">
              invatlan.hn <ExternalLink size={14} />
            </a>
          </div>

          <div className="flex flex-col gap-1 pt-2">
            <p className="text-[12px] font-semibold text-zinc-500 uppercase tracking-wider">Identifiers</p>
            <div className="flex items-center gap-3">
              <code className="text-[14px] font-mono text-zinc-200 bg-white/5 px-2 py-1 rounded">USP5865GAC44</code>
              <div className="flex gap-2 text-zinc-600">
                <Copy size={16} className="cursor-pointer hover:text-white transition-colors" />
                <MoreHorizontal size={16} className="cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. ANALYSIS */}
      <div className="p-8 space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="text-[22px] font-bold tracking-tight text-white flex items-center gap-2">
            Analysis <ChevronRight size={20} className="text-zinc-600" />
          </h3>
          <span className="text-[10px] px-2 py-0.5 border border-white/10 text-zinc-500 uppercase font-mono">Real-time Feed</span>
        </div>

        {/* Redemption Donut */}
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6">
          <p className="text-[14px] font-bold text-white mb-6">Redemption</p>
          
          <div className="flex justify-center items-center relative py-4">
             {/* Simple CSS Donut representation */}
             <div className="w-32 h-32 rounded-full border-[12px] border-[#3b82f6] flex items-center justify-center relative">
                {/* Outstanding Segment (Orange - ~34%) */}
                <div className="absolute inset-[-12px] rounded-full border-[12px] border-transparent border-t-[#fb923c] border-r-[#fb923c] rotate-[45deg]" 
                     style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 50% 100%)' }} />
                
                <div className="text-center bg-[#050505] w-full h-full rounded-full flex flex-col items-center justify-center m-[1px]">
                  <span className="text-lg font-bold">300 M</span>
                  <span className="text-[10px] text-zinc-500 uppercase">USD</span>
                </div>
             </div>
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex justify-between items-center text-[13px]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#fb923c] rounded-sm" />
                <span className="text-zinc-400">Outstanding amount</span>
              </div>
              <span className="text-white font-mono uppercase">102.21M (34.07%)</span>
            </div>
            <div className="flex justify-between items-center text-[13px]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#3b82f6] rounded-sm" />
                <span className="text-zinc-400">Paid amount</span>
              </div>
              <span className="text-white font-mono uppercase">197.79M (65.93%)</span>
            </div>
          </div>
        </div>

        {/* Payments Stacked Bar Chart */}
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6">
           <p className="text-[14px] font-bold text-white mb-6">Payments</p>
           
           <div className="h-40 w-full flex items-end justify-between gap-2 relative border-b border-white/10 pb-1">
              {[
                { yr: '21', c: 20, p: 0 },
                { yr: '22', c: 25, p: 0 },
                { yr: '23', c: 20, p: 15 },
                { yr: '24', c: 18, p: 40 },
                { yr: '25', c: 15, p: 65 },
                { yr: '26', c: 8,  p: 102 },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
                  <div className="w-full flex flex-col justify-end group cursor-crosshair">
                    <div className="w-full bg-[#fb923c] rounded-t-sm" style={{ height: `${(bar.p / 130) * 100}%` }} />
                    <div className="w-full bg-[#3b82f6] rounded-b-sm" style={{ height: `${(bar.c / 130) * 100}%` }} />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600">{bar.yr}</span>
                </div>
              ))}
           </div>
           
           <div className="flex justify-between mt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase"><div className="w-2 h-2 bg-[#3b82f6]" /> Coupon</div>
                <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase"><div className="w-2 h-2 bg-[#fb923c]" /> Principal</div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};
