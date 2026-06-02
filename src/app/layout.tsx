import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Akshaya Community Pharmacy — Medicines at Up to 60% Discount",
    template: "%s | Akshaya Community Pharmacy",
  },
  description:
    "Akshaya Community Pharmacy brings genuine branded and generic medicines at 15–60% discount. 75+ stores across Kollam, Thiruvananthapuram, and Alappuzha. Franchise opportunities available.",
  keywords: [
    "Akshaya Community Pharmacy",
    "discount pharmacy Kerala",
    "cheap medicines Kollam",
    "generic medicine Thiruvananthapuram",
    "pharmacy franchise Kerala",
    "medicine at discount",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Akshaya Community Pharmacy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
