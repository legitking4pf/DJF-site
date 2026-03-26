"use client";

import React from "react";
import { performanceData } from '@/data/chartData';
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RiskPanel } from "@/components/dashboard/RiskPanel";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { TechnicalDossier } from "@/components/dashboard/TechnicalDossier";
import { gfaInstitutionalData } from "@/types/dashboard";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; //

export default function DashboardPage() {
const { netGain, groupTotalAssets, groupRevenue } = gfaInstitutionalData;  
  return (
    <main className="min-h-screen bg-[#050505] text-white p-4 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* ================= HEADER ================= */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Inversiones Atlantida S.A. 7.5% 19-MAY-2026
          </h1>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Security ID */}
            <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm">
              BCSA5185816
            </div>

            {/* FINRA */}
            <div className="flex items-center gap-2 text-sm text-zinc-300">
              <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center text-[10px]">
                ▲
              </span>
              FINRA
            </div>

            {/* Rating */}
            <div className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
              <span className="font-bold">B- </span>by S&P
            </div>
          </div>
        </div>

        {/* ================= CORE METRICS STRIP ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-8 items-center">

          {/* SECURITY ID */}
          <div>
            <p className="text-xl tracking-widest mb-2">
              Security ID
            </p>

            <div className="flex items-center gap-2">
              <span className="text-xl font-light tracking-wider">
                BCSA5185816
              </span>
            </div>
          </div>

          {/* YIELD */}
          <div>
            <p className="text-xl tracking-medium mb-2">
              Yield to Maturity
            </p>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">7.477%</span>

              <span className="text-sm text-rose-500 font-mono font-bold">
                -11.250
              </span>

              <span className="text-sm text-rose-500 font-mono font-bold">
                (-2.83%)
              </span>
            </div>
          </div>

          {/* PRICE */}
          <div>
            <p className="text-xl text-zinc-300 tracking-widest mb-2">
              Price
            </p>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">100.000%</span>

              <span className="text-sm text-emerald-500 font-mono font-bold">
                +2.750
              </span>

              <span className="text-sm text-emerald-500 font-mono font-bold">
                (+2.83%)
              </span>
            </div>
          </div>
        </div>

        {/* ================= ZONE 1: METRICS ================= */}
{(() => {
  // 1. Extract latest data for tallying
  const currentAssetValue = performanceData[performanceData.length - 1].gfaAssets;
  const previousAssetValue = performanceData[performanceData.length - 2].gfaAssets;
  
  // 2. Calculate dynamic growth percentage
  const assetGrowth = (((currentAssetValue - previousAssetValue) / previousAssetValue) * 100).toFixed(1) + '%';
  
  // 3. Sync gfaInstitutionalData with the chart's "Current" point
  const totalAssetsInBytes = currentAssetValue * 1000000000;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <MetricCard
        label="GFA Group Assets"
        value={totalAssetsInBytes}
        trend={assetGrowth}
      />

      <MetricCard
        label="Annual Group Revenue"
        value={gfaInstitutionalData.groupRevenue}
        trend="+1.2%" 
      />

      <MetricCard
        label="Net Performance (Yield)"
        value={netGain}
        trend="+7.5%"
      />
    </motion.div>
  );
})()}

        {/* ================= CENTER GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* CHART */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 border border-white/10 bg-[#050505] overflow-hidden"
          >
            <PerformanceChart />
          </motion.div>
          {/* ================= ANALYSIS CALLOUT ================= */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5 }}
  className="lg:col-span-1"
>
  <a 
    href="https://docs.google.com/document/d/1qU0ccdu5c2MPzP0jeZd5KaJvZNwIe05C-lUOTw6XZY8/edit?usp=drivesdk" 
    target="_blank"
    rel="noopener noreferrer"
    className="group block h-full p-8 bg-white/5 border border-white/10 hover:border-white/40 transition-all duration-500"
  >
    <div className="flex justify-between items-start mb-6">
      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-500 group-hover:text-white transition-colors">
        [span_0](start_span)[span_1](start_span)FINRA TRACE: BCSA5185816[span_0](end_span)[span_1](end_span)
      </span>
      <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
    </div>
    
    <h2 className="text-xl font-light text-white mb-3 tracking-tight">
      [span_2](start_span)[span_3](start_span)Full Redemption Analysis[span_2](end_span)[span_3](end_span)
    </h2>
    
    <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">
      [span_4](start_span)[span_5](start_span)[span_6](start_span)Technical deep-dive into the 7.5% Senior Secured Notes and the March 30, 2026, full principal recovery.[span_4](end_span)[span_5](end_span)[span_6](end_span)
    </p>

    <div className="flex items-center gap-4">
      <span className="px-2 py-1 bg-emerald-500/20 text-[10px] text-emerald-400 uppercase tracking-widest font-bold border border-emerald-500/30">
        [span_7](start_span)Settled[span_7](end_span)
      </span>
      <span className="text-[10px] text-zinc-500 font-mono">
        [span_8](start_span)ISIN: USP5865GAC44[span_8](end_span)
      </span>
    </div>
  </a>
</motion.div>

          {/* RISK PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <RiskPanel />
          </motion.div>
        </div>

        {/* ================= TRANSACTIONS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <TechnicalDossier />
        </motion.div>

      </div>
    </main>
  );
}