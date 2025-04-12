// app/layout.tsx
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
      <body className={`${inter.className} min-h-screen bg-gray-900 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}