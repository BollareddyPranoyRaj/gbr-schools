// 1. app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GBR Educational Institutions",
  description: "Legacy Since 1979",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Global Announcement Ticker */}
        <div className="bg-[#0B2046] text-white py-2 px-4 text-center text-sm font-medium border-b border-white/10">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Admissions Open for Academic Year 2026-2027 — Secure Your Seat Today
          </span>
        </div>

        {/* Global Navigation Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0B2046] flex items-center justify-center rounded text-amber-400 font-bold text-xl font-serif">
              G
            </div>
            <div>
              <span className="text-[#0B2046] font-bold text-lg block tracking-tight font-serif">GBR INSTITUTIONS</span>
              <span className="text-gray-500 text-xs block -mt-1 tracking-widest uppercase">Legacy Since 1979</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="/about" className="hover:text-[#0B2046] transition">About Us</a>
            <a href="/schools" className="hover:text-[#0B2046] transition">Our Schools</a>
            <a href="/junior-college" className="hover:text-[#0B2046] transition">Junior College</a>
            <a href="/degree-pg/programs-eligibility-fee" className="hover:text-[#0B2046] transition">Programs & Fees</a>
            <a href="/academic-calendar" className="hover:text-[#0B2046] transition">Academic Calendar</a>
            <a href="/admissions" className="hover:text-[#0B2046] transition text-[#0B2046] font-semibold">Admissions</a>
          </nav>

          <a href="/admissions" className="bg-[#0B2046] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-opacity-90 transition shadow-sm">
            Enquire Now
          </a>
        </header>

        {children}
      </body>
    </html>
  );
}