import { AlertTriangle, ShieldAlert, ChevronRight } from 'lucide-react';

export const RiskPanel = () => {
  return (
    <div className="border border-red-900/30 bg-[#050505] p-8 rounded-lg shadow-[0_0_50px_rgba(220,38,38,0.05)]">
      {/* Header Section: High Contrast */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
        <div>
          <p className="text-[12px] uppercase tracking-[0.4em] text-zinc-400 font-black mb-1">
            Institutional Risk Profile
          </p>
          <h3 className="text-2xl font-bold text-white tracking-tighter italic">Credit <span className="text-red-500 underline decoration-red-900 underline-offset-8">Assessment</span></h3>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[11px] px-3 py-1 bg-red-600 text-white font-black tracking-widest animate-pulse">
            CREDITWATCH NEGATIVE
          </span>
          <span className="text-[9px] text-zinc-600 font-mono uppercase tracking-tighter">Verified S&P Global 2026</span>
        </div>
      </div>

      {/* Ratings Grid: Bold and Clear */}
      <div className="grid grid-cols-2 gap-12 mb-10">
        <div className="group border-l border-white/5 pl-4 hover:border-red-500 transition-colors">
          <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
            Invatlán <ChevronRight size={10} className="text-red-900" />
          </p>
          <div className="flex items-baseline gap-2">
            <p className="text-[48px] font-black text-white leading-none tracking-tighter">B-</p>
            <span className="text-[10px] text-red-500 font-mono font-bold uppercase">Speculative</span>
          </div>
        </div>
        
        <div className="group border-l border-white/5 pl-4 hover:border-zinc-500 transition-colors">
          <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
            Banco Atlántida <ChevronRight size={10} className="text-zinc-700" />
          </p>
          <div className="flex items-baseline gap-2">
            <p className="text-[48px] font-black text-white leading-none tracking-tighter">B+</p>
            <span className="text-[10px] text-zinc-500 font-mono font-bold uppercase">Stable</span>
          </div>
        </div>
      </div>

      {/* Analysis Box: High Readability */}
      <div className="bg-red-950/10 p-6 border border-red-900/20 relative overflow-hidden">
        {/* Subtle background icon for "Sovereign" depth */}
        <ShieldAlert size={80} className="absolute -right-4 -bottom-4 text-red-900/10 rotate-12" />
        
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-red-600 text-white rounded-sm">
            <ShieldAlert size={18} />
          </div>
          <p className="text-[13px] font-black text-white uppercase tracking-[0.2em]">
            Refinancing Analysis
          </p>
        </div>
        
        <p className="text-[14px] text-zinc-200 leading-[1.6] font-medium relative z-10">
          Elevated refinancing risk regarding <span className="text-white font-bold underline decoration-red-600/50 underline-offset-4">$300M notes</span> due May 2026. 
          Group liquidity monitored via <span className="text-white font-bold">$200M retained earnings</span> and 
          <span className="text-white font-bold"> $700M in government securities.</span>
        </p>
      </div>
    </div>
  );
};
