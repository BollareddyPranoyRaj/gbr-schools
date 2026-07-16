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
  title: "GBR Group of Schools",
  description: "Nurturing Minds from Nursery to 10th Grade",
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
        {/* Placed NoticeBanner above Navbar */}
        <div className="fixed top-0 w-full z-[60]">
          <NoticeBanner />
        </div>
        {/* Adjusted Navbar to sit below the banner spacing if needed, but since banner can be closed, Next.js handles this best with a sticky header wrapper if you want dynamic spacing. For now, we wrap them safely. */}
        <div className="mt-8"> 
          <Navbar />
        </div>
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}