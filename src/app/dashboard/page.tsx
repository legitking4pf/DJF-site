import { MetricCard } from '@/components/dashboard/MetricCard';
import { RiskPanel } from '@/components/dashboard/RiskPanel';
import { gfaInstitutionalData } from '@/types/dashboard';

export default function DashboardPage() {
  const netGain = gfaInstitutionalData.clientAllocation * 0.1138; // Example 11.38% yield logic

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-12">
      <section className="max-w-7xl mx-auto space-y-6">
        
        {/* HEADER: COMMAND CENTER */}
        <div className="flex justify-between items-end border-b border-white/5 pb-8 mb-8">
          <div>
            <h1 className="text-xs font-bold tracking-[0.4em] text-gold uppercase mb-2">Asset Control Panel</h1>
            <p className="text-2xl font-light tracking-tighter">Institutional Portfolio</p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Last Verified</p>
            <p className="text-[11px] font-mono text-zinc-300">2026.03.25 // 17:00:00</p>
          </div>
        </div>

        {/* ZONE 1: THE PULSE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard label="GFA Group Assets" value={gfaInstitutionalData.groupTotalAssets} />
          <MetricCard label="Annual Revenue" value={gfaInstitutionalData.groupRevenue} />
          <MetricCard label="Net Performance" value={netGain} />
        </div>

        {/* ZONE 2 & 3 COMBINED ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* ZONE 2: NARRATIVE (Left Column - Spans 2) */}
          <div className="lg:col-span-2 min-h-[400px] border border-white/10 bg-[#050505] p-8 flex flex-col justify-center items-center">
             <div className="w-full h-full border border-dashed border-white/5 flex items-center justify-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-800">Performance Chart Engine Pending</p>
             </div>
          </div>

          {/* ZONE 3: THE REALITY (Right Column - Spans 1) */}
          <div className="lg:col-span-1">
            <RiskPanel />
          </div>

        </div>

      </section>
    </main>
  );
}
