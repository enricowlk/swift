// app/components/Navbar.tsx
'use client';

import { useStockStore } from '../store';

export default function Navbar() {
  const { stockSymbol, setStockSymbol } = useStockStore();

  return (
    <>
      <nav className="bg-gray-800 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-blue-400">TradingGame</h1>
          
          <div className="relative">
            <input
              type="text"
              value={stockSymbol}
              onChange={(e) => setStockSymbol(e.target.value)}
              placeholder="Search stocks..."
              className="bg-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <button className="absolute right-3 top-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex space-x-6">
          <a href="/" className="text-blue-400 font-medium">Home</a>
          <a href="/portfolio" className="text-gray-300 hover:text-white">Portfolio</a>
          <a href="/leaderboard" className="text-gray-300 hover:text-white">Leaderboard</a>
          <a href="/groups" className="text-gray-300 hover:text-white">Groups</a>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-gray-300">Welcome, User</span>
          <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
        </div>
      </nav>

      {/* Ticker */}
      <div className="bg-gray-800 py-2 px-4 overflow-hidden">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'META', 'NVDA', 'PYPL'].map((symbol) => (
            <div key={symbol} className="flex items-center space-x-2">
              <span className="font-medium">{symbol}</span>
              <span className={`text-sm ${Math.random() > 0.5 ? 'text-green-400' : 'text-red-400'}`}>
                {Math.random().toFixed(2)}%
              </span>
              <span className="text-gray-300">${(100 + Math.random() * 50).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}