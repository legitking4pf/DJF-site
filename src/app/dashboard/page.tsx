"use client";
import React from 'react';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { RiskPanel } from '@/components/dashboard/RiskPanel';
import { PerformanceChart } from '@/components/dashboard/PerformanceChart';
import { TransactionLogs } from '@/components/dashboard/TransactionLogs';
import { gfaInstitutionalData } from '@/types/dashboard';
import { motion } from 'framer-motion';
import { Fingerprint, Activity } from 'lucide-react';

export default function DashboardPage() {
  // Logic: 11.38% Performance Calculation based on your S&P research data
  const netGain = gfaInstitutionalData.clientAllocation * 0.1138;

  return (
    <main className="min-h-screen bg-[#050505] text-white p-4 md:p-12 font-sans selection:bg-gold/30">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* EXECUTIVE HEADER: THE COMMAND CENTER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/5 pb-8 mb-8 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[1px] w-8 bg-gold" />
              <h1 className="text-[10px] font-bold tracking-[0.5em] text-gold uppercase">
                Asset Control Panel // GFA Group
              </h1>
            </div>
            <p className="text-3xl md:text-4xl font-light tracking-tighter italic font-serif">
              Institutional Portfolio Summary
            </p>
          </div>

          <div className="flex items-center gap-6 text-right">
            <div className="hidden md:block">
              <p className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] mb-1">Status</p>
              <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-500">
                <Activity size={12} className="animate-pulse" /> SYSTEM ACTIVE
              </div>
            </div>
            <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
            <div>
              <p className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] mb-1">Identity Verified</p>
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                <Fingerprint size={12} /> DJF-ADMIN-2026
              </div>
            </div>
          </div>
        </motion.div>

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
