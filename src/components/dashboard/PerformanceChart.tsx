"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { performanceData } from '@/data/chartData';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#050505] border border-white/10 p-3 shadow-2xl">
        <p className="text-[10px] text-zinc-500 mb-2 font-bold uppercase tracking-widest">
          {payload[0].payload.date}
        </p>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-8">
            <span className="text-[11px] text-zinc-400">GFA ASSETS</span>
            <span className="text-[13px] text-white font-mono font-bold">${payload[1].value}B</span>
          </div>
          <div className="flex items-center justify-between gap-8">
            <span className="text-[11px] text-zinc-400">BENCHMARK</span>
            <span className="text-[11px] text-zinc-600 font-mono">${payload[0].value}B</span>
          </div>
          {payload[0].payload.note && (
            <p className="text-[9px] text-gold/60 pt-2 uppercase font-bold tracking-tighter italic">
              // {payload[0].payload.note}
            </p>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export const PerformanceChart = () => {
  return (
    <div className="w-full h-[450px] bg-[#050505] p-6 rounded-sm border border-white/5">
      <div className="flex justify-between items-start mb-10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-black mb-1">
            Institutional Growth Curve
          </p>
          <h2 className="text-[24px] font-light text-white tracking-tighter">
            Asset <span className="text-gold font-bold">Performance</span>
          </h2>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-4 text-[10px] font-mono uppercase tracking-widest">
            <span className="flex items-center gap-2 text-white">
              <span className="w-2 h-2 bg-gold rounded-full shadow-[0_0_8px_#D4AF37]"/> GFA Group
            </span>
            <span className="flex items-center gap-2 text-zinc-600">
              <span className="w-2 h-2 bg-zinc-800 rounded-full"/> Market
            </span>
          </div>
        </div>
      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorAssets" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="0" stroke="#ffffff03" vertical={false} />
            
            <XAxis 
              dataKey="date" 
              stroke="#27272a" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              dy={15}
              fontFamily="monospace"
            />
            
            <YAxis 
              domain={[9.3, 10]} 
              stroke="#27272a" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(val) => `$${val}B`}
              fontFamily="monospace"
            />
            
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#ffffff10', strokeWidth: 1 }} />
            
            <ReferenceLine 
              x="NOV 25" 
              stroke="#ef4444" 
              strokeDasharray="4 4" 
              label={{ position: 'top', value: 'S&P WATCH', fill: '#ef4444', fontSize: 9, fontWeight: 'bold' }} 
            />
            
            <Area 
              type="monotone" 
              dataKey="benchmark" 
              stroke="#27272a" 
              fill="transparent" 
              strokeWidth={1.5} 
              strokeDasharray="5 5"
            />
            
            <Area 
              type="monotone" 
              dataKey="gfaAssets" 
              stroke="#D4AF37" 
              fillOpacity={1} 
              fill="url(#colorAssets)" 
              strokeWidth={2.5}
              activeDot={{ r: 4, fill: '#D4AF37', stroke: '#050505', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
