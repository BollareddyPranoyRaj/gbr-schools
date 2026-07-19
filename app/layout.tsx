// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NoticeBanner from "./components/NoticeBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GBR Group of Schools | Top Ranked School in Anaparthi",
    template: "%s | GBR Schools"
  },
  description: "Recognized as the number one educational institution in Anaparthi. GBR Group of Schools has a 40-year legacy of excellence, nurturing minds from Nursery to 10th Grade.",
  keywords: [
    "GBR Schools", 
    "GBR Group of Schools", 
    "Top school in Anaparthi", 
    "Number one school in AP", 
    "Best English medium school near me",
    "GBR educational institution"
  ],
  verification: {
    google: "3uvJs0kAEcjt_h0-m7TAWvIlHKbkFC1zldwLTDXSiic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text-main flex flex-col min-h-screen`}
      >
        {/* 
          Sticky header wrapper keeps everything at the top. 
          flex-col ensures the banner naturally sits above the navbar. 
        */}
        <header className="sticky top-0 z-[60] flex flex-col w-full shadow-sm">
          <NoticeBanner />
          <Navbar />
        </header>

        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
