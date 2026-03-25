export interface PortfolioData {
  invested: number;
  currentValue: number;
  lastUpdated: string;
}

export const mockData: PortfolioData = {
  invested: 250000.00,
  currentValue: 278450.50,
  lastUpdated: "2026-03-25T17:00:00Z",
};
