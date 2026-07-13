// components/Header.tsx
"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About GBR", href: "/about" },
    { name: "The AC Campus", href: "/ac-campus" },
    { name: "The Standard Campus", href: "/standard-campus" },
    { name: "Transport Network", href: "/transport" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="px-6 md:px-12 py-5 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition cursor-pointer shrink-0">
          <div className="w-10 h-10 bg-[#0B2046] flex items-center justify-center rounded font-bold text-xl font-serif text-white shadow-md">
            G
          </div>
          <div>
            <span className="text-[#0B2046] font-bold text-lg block tracking-tight font-serif">GBR SCHOOLS</span>
            <span className="text-gray-500 text-xs block -mt-1 tracking-widest uppercase">Nursery to 10th</span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-8 text-sm tracking-wide">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-all duration-300 pb-1 ${
                  isActive 
                    ? "text-red-600 font-bold border-b-2 border-red-600" 
                    : "text-gray-600 font-medium hover:text-[#0B2046]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block shrink-0">
          <Link href="/admissions" className="bg-red-600 text-white px-6 py-2.5 rounded font-semibold text-sm hover:bg-red-700 transition duration-300 shadow-lg shadow-red-600/20 tracking-wide">
            Admissions Open
          </Link>
        </div>

        <button 
          className="xl:hidden text-[#0B2046] p-2 hover:bg-gray-50 rounded transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-6 px-6 flex flex-col gap-5 z-50 shadow-xl animate-in fade-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-all text-base ${
                  isActive 
                    ? "text-red-600 font-bold border-l-4 border-red-600 pl-3" 
                    : "text-gray-600 font-medium hover:text-[#0B2046] pl-1"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/admissions" className="bg-red-600 text-white px-5 py-3.5 rounded font-semibold text-center mt-2 shadow-lg tracking-wide" onClick={() => setIsOpen(false)}>
            Apply for Admission
          </Link>
        </div>
      )}
    </header>
  );
}