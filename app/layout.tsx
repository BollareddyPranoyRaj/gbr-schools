import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // Imported the new header!
import BackButton from "./components/BackButton";

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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        
        {/* Global Announcement Ticker */}
        <div className="bg-[#0B2046] text-white py-2 px-4 text-center text-sm font-medium border-b border-white/10">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Admissions Open for Academic Year 2026-2027 — Secure Your Seat Today
          </span>
        </div>

        {/* New Responsive Client-Side Header */}
        <Header />

        {/* Main Content Area */}
        <div className="flex-grow">
          <BackButton />
          {children}
        </div>

        {/* Global Footer */}
        <footer className="bg-[#0B2046] text-white pt-16 pb-8 border-t-[6px] border-amber-500 mt-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              
              {/* Brand & Vision */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white flex items-center justify-center rounded text-[#0B2046] font-bold text-xl font-serif">
                    G
                  </div>
                  <div>
                    <span className="text-white font-bold text-lg block tracking-tight font-serif">GBR INSTITUTIONS</span>
                    <span className="text-amber-400 text-xs block -mt-1 tracking-widest uppercase">Legacy Since 1979</span>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed pr-4">
                  Empowering generations through quality education, from early childhood foundation to advanced postgraduate tracks in Anaparthi.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-amber-400 font-bold font-serif mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                <ul className="space-y-3 text-sm text-white/80">
                  <li><a href="/about" className="hover:text-amber-400 transition">About the Trust</a></li>
                  <li><a href="/schools" className="hover:text-amber-400 transition">GBR Schools (AC/Non-AC)</a></li>
                  <li><a href="/junior-college" className="hover:text-amber-400 transition">Junior College Programs</a></li>
                  <li><a href="/degree-pg/programs-eligibility-fee" className="hover:text-amber-400 transition">Degree & PG Admissions</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-amber-400 font-bold font-serif mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                <ul className="space-y-3 text-sm text-white/80">
                  <li>GBR Campus, Main Road</li>
                  <li>Anaparthi, East Godavari, AP - 533342</li>
                  <li>Phone: +91 8857 22xxxx</li>
                  <li>Email: admissions@gbr.edu.in</li>
                </ul>
              </div>
            </div>

            {/* Copyright & Developer Credit */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
              <p>&copy; {new Date().getFullYear()} GBR Educational Institutions. All rights reserved.</p>
              <p>
                Designed by{' '}
                <a 
                  href="https://bollareddypranoyraj.github.io/Portfolio/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-400 hover:text-white transition font-medium text-[13px]"
                >
                  Bollareddy Pranoy Raj
                </a>
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
