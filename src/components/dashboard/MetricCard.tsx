import React from 'react';
interface MetricCardProps {
  label: string;
  value: number;
  isCurrency?: boolean;
}

const formatValue = (val: number) => {
  if (val >= 1000000000) return (val / 1000000000).toFixed(2) + 'B';
  if (val >= 1000000) return (val / 1000000).toFixed(2) + 'M';
  return val.toLocaleString(undefined, { minimumFractionDigits: 2 });
};

export const MetricCard = ({ label, value, isCurrency = true }: MetricCardProps) => {
  return (
    <div className="p-6 border border-white/10 bg-[#050505] rounded-sm h-32 flex flex-col justify-between">
      <p className="text-[13px] uppercase tracking-[0.2em] text-zinc-300 font-bold">
        {label}
      </p>
      <div className="flex items-baseline gap-1">
        {isCurrency && <span className="text-zinc-200 text-xl font-light">$</span>}
        <h2 className="text-3xl font-light text-white tracking-tight">
          {formatValue(value)}
        </h2>
      </div>
    </div>
  );
};
