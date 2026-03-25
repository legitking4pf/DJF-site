export interface PortfolioData {
  groupTotalAssets: number;     // 9.61 B
  groupRevenue: number;         // 1.39 B
  clientAllocation: number;     // The specific client's portion
  lastUpdated: string;
}

export const gfaInstitutionalData: PortfolioData = {
  groupTotalAssets: 9610000000, // 9.61 B
  groupRevenue: 1390000000,     // 1.39 B
  clientAllocation: 10000000,   // Example: 10M managed within the pool
  lastUpdated: "2026-03-25T17:00:00Z",
};
