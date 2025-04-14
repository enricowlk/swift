'use client';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Navigationslinks mit Icons
  const navLinks = [
    { 
      name: 'Home', 
      href: '/', 
      icon: (
        <Image
          src="/icon_home.png"
          width={25}  
          height={9}
          className="border-1 rounded"
          alt="Home Logo"
        />
      ) 
    },
    { 
      name: 'Portfolio', 
      href: '/portfolio', 
      icon: (
        <Image
          src="/icon_portfolio.png"
          width={25}  
          height={9}
          className="border-1 rounded"
          alt="Portfolio Logo"
        />
      ) 
    },
    { 
      name: 'Leaderboard', 
      href: '/leaderboard', 
      icon: (
        <Image
          src="/icon_leaderboard.png"
          width={25}  
          height={9}
          className="border-1 rounded"
          alt="Leaderboard Logo"
        />
      ) 
    },
    { 
      name: 'Groups', 
      href: '/groups', 
      icon: (
        <Image
          src="/icon_group.png"
          width={25}  
          height={9}
          className="border-1 rounded"
          alt="Group Logo"
        />
      ) 
    },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="px-4 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-50 h-14 border-b border-gray-800">
        {/* Left section - Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/SWIFT_LOGO.png"
              width={45}  
              height={24}
              className="border-1 rounded"
              alt="Swift Logo"
            />
            <span className="text-xl font-bold text-white ml-8">SWIFT</span>
          </Link>
        </div>

        {/* Middle section - Suchleiste */}
        <div className="flex-1 max-w-xl mx-4">
          <form className="relative flex">
            <input
              type="text"
              placeholder="Search stocks..."
              className="bg-gray-900 px-4 py-1.5 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-gray-500 w-full text-white"
            />
            <button 
              type="submit" 
              className="bg-gray-800 px-4 py-1.5 rounded-r-lg hover:bg-gray-700 focus:outline-none"
            >
              <Image
                src="/icon_suchen.png"
                width={18}  
                height={9}
                className="border-1 rounded"
                alt="Group Logo"
              />
            </button>
          </form>
        </div>

        {/* Right section - Benutzermenü */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <button 
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center space-x-1 text-gray-300 hover:text-white focus:outline-none p-1 rounded-full hover:bg-gray-800"
            >
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-sm font-medium">U</span>
              </div>
            </button>

            {/* Dropdown-Menü */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-1 z-50 border border-gray-800">
                <div className="px-4 py-2 text-white border-b border-gray-800">
                  <p className="font-medium">Username</p>
                  <p className="text-sm text-gray-300">user@example.com</p>
                </div>
                <div className="px-4 py-2 text-sm text-white border-b border-gray-800">
                  <p>Account Balance: $10,000</p>
                </div>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className="fixed top-14 left-0 bottom-0 w-20 bg-black overflow-y-auto z-40 border-r border-gray-800">
        <div className="py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex flex-col items-center px-2 py-3 mx-1 rounded-lg hover:bg-gray-900 ${
                pathname === link.href ? 'bg-gray-900' : ''
              }`}
            >
              <span className="text-gray-300">
                {link.icon}
              </span>
              <span className="mt-1 text-xs text-gray-300 hover:text-white">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}