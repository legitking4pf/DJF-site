"use client";
import React from 'react';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { RiskPanel } from '@/components/dashboard/RiskPanel';
import { PerformanceChart } from '@/components/dashboard/PerformanceChart';
import { TransactionLogs } from '@/components/dashboard/TransactionLogs';
import { gfaInstitutionalData } from '@/types/dashboard';
import { motion } from 'framer-motion';
import { Fingerprint, Activity } from 'lucide-react';

export default function DashboardPage() {  const netGain = gfaInstitutionalData.clientAllocation * 0.1138;

  return (
    <main className="min-h-screen bg-[#050505] text-white p-4 md:p-12 font-sans selection:bg-gold/30">
      <div className="max-w-7xl mx-auto space-y-6">
        
{/* Security Overview Bar */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-white/5 pt-8">
  <div>
    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Security ID</p>
    <div className="flex items-center gap-2">
      <span className="text-xl font-light tracking-tight text-white">BCSA5185816</span>
      <span className="px-2 py-0.5 rounded-full border border-emerald-500/30 text-[9px] text-emerald-500 bg-emerald-500/5">
        B- by S&P
      </span>
    </div>
  </div>

  <div>
    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Yield to Maturity</p>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-light text-white">7.477%</span>
      <span className="text-xs text-rose-500 font-mono">-11.250 (2.83%)</span>
    </div>
  </div>

  <div className="text-right md:text-left">
    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Par Value Status</p>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-light text-white">100.000%</span>
      <span className="text-xs text-emerald-500 font-mono">+2.750 (+2.83%)</span>
    </div>
  </div>
</div>

        {/* ZONE 1: THE PULSE (Metrics) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <MetricCard 
            label="GFA Group Assets" 
            value={gfaInstitutionalData.groupTotalAssets} 
          />
          <MetricCard 
            label="Annual Group Revenue" 
            value={gfaInstitutionalData.groupRevenue} 
          />
          <MetricCard 
            label="Net Performance (Yield)" 
            value={netGain} 
          />
        </motion.div>

        {/* CENTER GRID: NARRATIVE & REALITY */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* ZONE 2: THE NARRATIVE (Performance Chart) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 border border-white/10 bg-[#050505] overflow-hidden"
          >
             <PerformanceChart />
          </motion.div>

          {/* ZONE 3: THE REALITY (S&P Risk Panel) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <RiskPanel />
          </motion.div>
        </div>

        {/* ZONE 4: THE PROOF (Transaction Logs) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <TransactionLogs />
        </motion.div>

        {/* SYSTEM FOOTER */}
        <div className="pt-8 flex justify-between items-center text-[9px] text-zinc-700 uppercase tracking-widest font-mono">
          <p>© 2026 David Jackson Fernandez // Institutional Sovereign Engine</p>
          <p>Encrypted Session: AES-256-GCM</p>
        </div>
      </div>
    </main>
  );
}
