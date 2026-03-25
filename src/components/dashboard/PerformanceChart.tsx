"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { performanceData } from '@/data/chartData';

export const PerformanceChart = () => {
  return (
    <div className="w-full h-[450px] bg-[#050505] p-4">
      <div className="flex justify-between items-center mb-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Institutional Growth Curve (USD/Billions)</p>
        <div className="flex gap-4 text-[9px] font-mono uppercase">
          <span className="flex items-center gap-1.5 text-white"><span className="w-2 h-2 bg-gold rounded-full"/> Grupo Financiero Atlántida Performance</span>
          <span className="flex items-center gap-1.5 text-zinc-600"><span className="w-2 h-2 bg-zinc-800 rounded-full"/> Market Benchmark</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={performanceData}>
          <defs>
            <linearGradient id="colorAssets" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
          <XAxis 
            dataKey="date" 
            stroke="#3f3f46" 
            fontSize={9} 
            tickLine={false} 
            axisLine={false}
            dy={10}
          />
          <YAxis 
            domain={[9.3, 10]} 
            stroke="#3f3f46" 
            fontSize={9} 
            tickLine={false} 
            axisLine={false}
            tickFormatter={(val) => `$${val}B`}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#050505', border: '1px solid #ffffff10', fontSize: '10px' }}
            itemStyle={{ color: '#fff' }}
          />
          {/* S&P Event Marker */}
          <ReferenceLine x="2025-11" stroke="#ef4444" strokeDasharray="3 3" label={{ position: 'top', value: 'S&P WATCH', fill: '#ef4444', fontSize: 8 }} />
          
          <Area 
            type="monotone" 
            dataKey="benchmark" 
            stroke="#27272a" 
            fill="transparent" 
            strokeWidth={1} 
            strokeDasharray="5 5"
          />
          <Area 
            type="monotone" 
            dataKey="gfaAssets" 
            stroke="#D4AF37" 
            fillOpacity={1} 
            fill="url(#colorAssets)" 
            strokeWidth={1.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
