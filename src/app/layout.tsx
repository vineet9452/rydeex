import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import AosInit from "@/components/AosInit";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RYDEEX | Premium EV Scooter Showroom in Greater Noida",
  description: "Experience the future of commuting with RYDEEX. Premium EV scooters available for test ride in Greater Noida. Zero emissions, smart dashboard, and high performance.",
  keywords: ["premium EV scooter", "test ride", "Greater Noida", "electric scooter", "RYDEEX", "EV showroom"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${montserrat.variable} antialiased scroll-smooth`}>
      <body className="bg-background text-gray-900 min-h-screen flex flex-col font-sans">
          <AosInit />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppFAB />
        <Analytics />
      </body>
    </html>
  );
}
