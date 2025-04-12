import { create } from 'zustand';

type TimeRange = '1D' | '1W' | '1M' | '3M' | '1Y';

interface StockState {
  stockSymbol: string;
  setStockSymbol: (symbol: string) => void;
  timeRange: TimeRange;
  setTimeRange: (range: TimeRange) => void;
  isPositive: boolean;
  setIsPositive: (value: boolean) => void;
  quantity: string;
  setQuantity: (qty: string) => void;
  amount: string;
  setAmount: (amt: string) => void;
  chartData: number[];
  setChartData: (data: number[]) => void;
}

export const useStockStore = create<StockState>((set) => ({
  stockSymbol: 'AAPL',
  setStockSymbol: (symbol: string) => set({ stockSymbol: symbol }),
  timeRange: '1D',
  setTimeRange: (range: TimeRange) => set({ timeRange: range }),
  isPositive: true,
  setIsPositive: (value: boolean) => set({ isPositive: value }),
  quantity: '',
  setQuantity: (qty: string) => set({ quantity: qty }),
  amount: '',
  setAmount: (amt: string) => set({ amount: amt }),
  chartData: [],
  setChartData: (data: number[]) => set({ chartData: data }),
}));