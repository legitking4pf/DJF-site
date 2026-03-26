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
    <div className="p-8 border border-white/10 bg-[#0a0a0a] rounded-lg h-40 flex flex-col justify-between hover:border-gold/50 transition-all duration-500 shadow-xl">
      <div className="flex justify-between items-center">
        <p className="text-[12px] uppercase tracking-[0.3em] font-black text-zinc-400">
          {label}
        </p>
        {trend && (
          <span className="bg-gold/10 text-gold px-2 py-1 text-[10px] font-bold rounded-sm border border-gold/20">
             {trend}
          </span>
        )}
      </div>
      
      <div className="flex items-baseline gap-2">
        {isCurrency && (
          <span className="text-zinc-500 text-2xl font-light">$</span>
        )}
        <h2 className="text-[42px] font-bold text-white tracking-tighter leading-none">
          {formatValue(value)}
        </h2>
      </div>
    </div>
  );
};
