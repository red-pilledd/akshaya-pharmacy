import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://akshaya-pharmacy.vercel.app"),
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
    "cheap medicines Thiruvananthapuram",
    "cheap medicines Alappuzha",
    "generic medicine Kerala",
    "pharmacy franchise Kerala",
    "medicine at discount Kerala",
    "affordable pharmacy South Kerala",
    "community pharmacy Kollam",
    "അക്ഷയ കമ്മ്യൂണിറ്റി ഫാർമസി",
  ],
  authors: [{ name: "Akshaya Community Pharmacy" }],
  creator: "Akshaya Community Pharmacy",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://akshaya-pharmacy.vercel.app",
    siteName: "Akshaya Community Pharmacy",
    title: "Akshaya Community Pharmacy — Medicines at Up to 60% Discount",
    description:
      "75+ stores across Kollam, Thiruvananthapuram & Alappuzha. Save 15–60% on genuine medicines. Franchise opportunities available.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akshaya Community Pharmacy — Affordable Medicines in South Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshaya Community Pharmacy — Up to 60% Off on Medicines",
    description:
      "75+ stores in Kollam, Thiruvananthapuram & Alappuzha. Genuine medicines at 15–60% discount.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://akshaya-pharmacy.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <LocalBusinessJsonLd />
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
