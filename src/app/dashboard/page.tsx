import { MetricCard } from '@/components/dashboard/MetricCard';
import { gfaInstitutionalData } from '@/types/dashboard';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-8">
      <section className="max-w-7xl mx-auto">
        
        {/* THE PULSE: INSTITUTIONAL SCALE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <MetricCard 
            label="GFA Group Assets" 
            value={gfaInstitutionalData.groupTotalAssets} 
          />
          <MetricCard 
            label="Annual Revenue" 
            value={gfaInstitutionalData.groupRevenue} 
          />
          <MetricCard 
            label="Managed Allocation" 
            value={gfaInstitutionalData.clientAllocation} 
          />
        </div>

        {/* This sets the stage for Zone 3 (The Reality) where we'll explain the S&P Rating vs. this Asset Base */}
      </section>
    </main>
  );
}
