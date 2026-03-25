import { MetricCard } from '@/components/dashboard/MetricCard';
import { mockData } from '@/types/dashboard';

export default function DashboardPage() {
  // Logic: Calculate Profit/Loss for the 3rd card
  const netGain = mockData.currentValue - mockData.invested;

  return (
    <main className="min-h-screen bg-[#050505] text-white p-8">
      {/* ZONE 1: THE PULSE */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <MetricCard 
            label="Capital Status" 
            value={mockData.invested} 
          />
          <MetricCard 
            label="Current Valuation" 
            value={mockData.currentValue} 
          />
          <MetricCard 
            label="Net Performance" 
            value={netGain} 
          />
        </div>

        {/* Placeholder for Zone 2, 3, 4 */}
        <div className="border border-dashed border-white/5 h-96 flex items-center justify-center text-zinc-800 uppercase text-xs tracking-widest">
          Zone 2: Narrative Pending
        </div>
      </section>
    </main>
  );
}
