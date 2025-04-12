// app/page.tsx
'use client';

import { useEffect } from 'react';
import { useStockStore } from './store';

export default function HomePage() {
  const {
    stockSymbol,
    timeRange,
    setTimeRange,
    isPositive,
    setIsPositive,
    quantity,
    setQuantity,
    amount,
    setAmount,
    chartData,
    setChartData
  } = useStockStore();

  useEffect(() => {
    // Mock data generation
    const generateMockData = (range: string) => {
      const points = 30;
      const data = [];
      let value = 150;
      
      for (let i = 0; i < points; i++) {
        value += (Math.random() - 0.5) * 10;
        data.push(value);
      }
      
      setIsPositive(data[data.length - 1] > data[0]);
      setChartData(data);
    };

    generateMockData(timeRange);
  }, [timeRange, setIsPositive, setChartData]);

  const handleTimeRangeChange = (range: typeof timeRange) => {
    setTimeRange(range);
  };

  const handleBuy = () => {
    alert(`Buy order: ${quantity} shares or $${amount} worth of ${stockSymbol}`);
  };

  const handleSell = () => {
    alert(`Sell order: ${quantity} shares or $${amount} worth of ${stockSymbol}`);
  };

  return (
    <main className="container mx-auto px-4 py-6">
      {/* Stock Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">{stockSymbol}</h2>
          <p className="text-gray-400">Apple Inc.</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">$172.50</p>
          <p className={`text-lg ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : '-'}2.34 (1.37%)
          </p>
        </div>
      </div>

      {/* Chart Controls */}
      <div className="flex space-x-2 mb-6">
        {(['1D', '1W', '1M', '3M', '1Y'] as const).map((range) => (
          <button
            key={range}
            onClick={() => handleTimeRangeChange(range)}
            className={`px-4 py-2 rounded-lg ${timeRange === range ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Chart Area */}
      <div className="bg-gray-800 rounded-xl p-4 mb-8 h-96">
        <div className="h-full flex items-end space-x-1">
              {chartData.map((value: number, index: number) => (
        <div
          key={index}
          className={`flex-1 ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}
          style={{ height: `${(value / Math.max(...chartData)) * 90}%` }}
        />
      ))}
        </div>
      </div>

      {/* Trading Panel */}
      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Trade {stockSymbol}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 mb-2">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="0"
              className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-400 mb-2">Amount ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          <button
            onClick={handleBuy}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition"
          >
            Buy
          </button>
          <button
            onClick={handleSell}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition"
          >
            Sell
          </button>
        </div>
      </div>
    </main>
  );
}