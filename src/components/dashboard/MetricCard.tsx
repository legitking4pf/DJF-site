import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: number;
  isCurrency?: boolean;
  trend?: string; // Optional: e.g. "+2.1%"
}

const formatValue = (val: number) => {
  if (val >= 1000000000) return (val / 1000000000).toFixed(2) + ' B';
  if (val >= 1000000) return (val / 1000000).toFixed(2) + ' M';
  return val.toLocaleString(undefined, { minimumFractionDigits: 2 });
};

export const MetricCard = ({ label, value, isCurrency = true, trend }: MetricCardProps) => {
  return (
    <div className="p-6 border border-white/5 bg-[#050505] rounded-sm h-32 flex flex-col justify-between group hover:border-white/20 transition-all">
      <div className="flex justify-between items-start">
        <p className="text-[11px] uppercase tracking-[0.2em] font-black text-zinc-500 group-hover:text-zinc-300 transition-colors">
          {label}
        </p>
        {trend && (
          <div className="flex items-center gap-1 text-gold text-[10px] font-mono font-bold">
            <ArrowUpRight size={12} />
            {trend}
          </div>
        )}
      </div>
      
      <div className="flex items-baseline gap-1">
        {isCurrency && (
          <span className="text-zinc-500 text-xl font-light group-hover:text-gold transition-colors">$</span>
        )}
        <h2 className="text-3xl font-bold text-white tracking-tighter">
          {formatValue(value)}
        </h2>
      </div>
    </div>
  );
};
