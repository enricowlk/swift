'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen text-white bg-black`}>
        <Navbar/>
        <div className="flex pt-14 pl-16 min-h-screen">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}