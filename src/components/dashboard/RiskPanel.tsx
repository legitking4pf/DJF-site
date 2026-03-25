import { AlertTriangle, ShieldAlert } from 'lucide-react';

export const RiskPanel = () => {
  return (
    <div className="border border-white/10 bg-[#050505] p-6 rounded-sm space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
          Institutional Risk Profile
        </p>
        <span className="text-[9px] px-2 py-0.5 border border-red-500/50 text-red-500 font-mono">
          CREDITWATCH NEGATIVE
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[9px] text-zinc-600 uppercase mb-1">S&P Rating (Invatlán)</p>
          <p className="text-xl font-light text-white">B-</p>
        </div>
        <div>
          <p className="text-[9px] text-zinc-600 uppercase mb-1">S&P Rating (Banco Atlántida)</p>
          <p className="text-xl font-light text-white">B+</p>
        </div>
      </div>

      <div className="bg-white/[0.02] p-4 border-l-2 border-red-900">
        <div className="flex items-center gap-2 mb-2 text-zinc-400">
          <ShieldAlert size={14} />
          <p className="text-[10px] font-bold uppercase">Refinancing Analysis</p>
        </div>
        <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
          Elevated refinancing risk regarding $300M notes due May 2026. Group liquidity monitored via $200M retained earnings and $700M in government securities.
        </p>
      </div>
    </div>
  );
};
