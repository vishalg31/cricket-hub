import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cricket Hub | Vishal Builds",
  description: "Interactive games, statistics, and data-driven cricket experiences. Play IPL Trump Cards using a decade of real IPL data (2016-2025).",
  openGraph: {
    title: "Cricket Hub | Vishal Builds",
    description: "Battle the CPU in IPL Trump Cards using a decade of real IPL batting data (2016-2025).",
    url: "https://cricket.vishalbuilds.com",
    siteName: "Vishal's Cricket Hub",
    images: [
      {
        url: "https://cricket.vishalbuilds.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vishal's Cricket Hub - IPL Trump Cards",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cricket Hub | Vishal Builds",
    description: "Battle the CPU in IPL Trump Cards using a decade of real IPL batting data (2016-2025).",
    images: ["https://cricket.vishalbuilds.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
