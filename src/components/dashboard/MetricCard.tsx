import React from 'react';

interface MetricCardProps {
  label: string;
  value: number;
  isCurrency?: boolean;
}

export const MetricCard = ({ label, value, isCurrency = true }: MetricCardProps) => {
  return (
    <div className="p-6 border border-white/10 bg-[#050505] rounded-sm flex flex-col justify-between h-32">
      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">
        {label}
      </p>
      <div className="flex items-baseline gap-1">
        {isCurrency && <span className="text-zinc-600 text-sm font-light">$</span>}
        <h2 className="text-3xl font-light text-white tracking-tight">
          {value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </h2>
      </div>
    </div>
  );
};
