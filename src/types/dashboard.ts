import { performanceData } from '@/data/chartData';

export interface PortfolioData {
  groupTotalAssets: number;
  groupRevenue: number;
  lastUpdated: string;
}

// Get the latest data point from your chart array
const latestEntry = performanceData[performanceData.length - 1];

export const gfaInstitutionalData: PortfolioData = {
  groupTotalAssets: latestEntry.gfaAssets * 1000000000, // Converts 9.82 to 9,820,000,000
  groupRevenue: 1390000000, 
  lastUpdated: new Date().toISOString(),
};
