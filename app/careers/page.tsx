import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-6 max-w-lg mx-auto">
        
        {/* Large 404 Background Text */}
        <h1 className="text-9xl font-extrabold text-primary/10 tracking-widest">
          404
        </h1>
        
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might be under construction or doesn't exist yet.
          </p>
        </div>

        <div className="pt-6">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-primary/90 transition-colors shadow-md"
          >
            Return to Home
          </Link>
        </div>
        
      </div>
    </main>
  );
}