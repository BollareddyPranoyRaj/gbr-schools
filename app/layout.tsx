// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NoticeBanner from "./components/NoticeBanner";
import BackButton from "./components/BackButton";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased flex flex-col min-h-dvh">
        {/* HEADER: Notice Banner and Navbar */}
        <header className="sticky top-0 z-[60] flex flex-col w-full">
          <NoticeBanner />
          <Navbar />
        </header>

        {/* FLOATING BACK BUTTON */}
        <BackButton />

        {/* MAIN PAGE CONTENT */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}