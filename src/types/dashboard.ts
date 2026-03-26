import { performanceData } from '@/data/chartData';

export interface PortfolioData {
  groupTotalAssets: number;
  groupRevenue: number;
  clientAllocation: number;
  netGain: number; // Added this to handle the calculation here
  lastUpdated: string;
}

const latestEntry = performanceData[performanceData.length - 1];
const allocation = 10000000;

export const gfaInstitutionalData: PortfolioData = {
  groupTotalAssets: latestEntry.gfaAssets * 1000000000,
  groupRevenue: 1390000000, 
  clientAllocation: allocation,
  netGain: allocation * 0.1138, // Move the math here
  lastUpdated: new Date().toISOString(),
};
