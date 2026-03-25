import React from 'react';
import { Terminal, CheckCircle2 } from 'lucide-react';

const logs = [
  { id: 1, date: '2026-03-25', action: 'Dividend Reinvestment', amount: '+ $12,450.00', status: 'Verified' },
  { id: 2, date: '2026-03-20', action: 'Tech Migration Allocation', amount: '- $5,000.00', status: 'Executed' },
  { id: 3, date: '2026-03-15', action: 'Quarterly Growth Accrual', amount: '+ $42,800.00', status: 'Verified' },
  { id: 4, date: '2026-03-01', action: 'System Rebalance', amount: 'N/A', status: 'Complete' },
  { id: 5, date: '2026-02-28', action: 'Capital Injection', amount: '+ $130.0M', status: 'GFA Level' },
];

export const TransactionLogs = () => {
  return (
    <div className="border border-white/10 bg-[#050505] p-6 rounded-sm">
      <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
        <Terminal size={14} className="text-gold" />
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Verification Log / Proof Layer</p>
      </div>

      <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
        {logs.map((log) => (
          <div key={log.id} className="flex justify-between items-center group">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono text-zinc-600">{log.date}</span>
              <span className="text-xs text-white font-light group-hover:text-gold transition-colors">{log.action}</span>
            </div>
            <div className="text-right">
              <span className="block text-[10px] font-mono text-zinc-300">{log.amount}</span>
              <span className="text-[8px] uppercase tracking-widest text-emerald-500 flex items-center justify-end gap-1">
                <CheckCircle2 size={8} /> {log.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
