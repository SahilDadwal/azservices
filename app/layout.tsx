import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Raleway, Roboto } from "next/font/google";
import { faviconSrc } from "@/lib/brand";
import "../styles/globals.css";

const headingFont = Raleway({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "700", "900"]
});

const interNav = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["500", "600"]
});

export const metadata: Metadata = {
  title: "AZ SERVICES L.L.C-FZ | UAE Business Setup & Advisory",
  description:
    "Premium UAE business setup, corporate tax, accounting, compliance, due diligence, and bank account support from AZ SERVICES L.L.C-FZ.",
  icons: {
    icon: [
      { url: faviconSrc, type: "image/png", sizes: "512x512" },
      { url: faviconSrc, type: "image/png", sizes: "192x192" },
      { url: faviconSrc, type: "image/png", sizes: "48x48" }
    ],
    apple: [
      { url: faviconSrc, sizes: "512x512", type: "image/png" },
      { url: faviconSrc, sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${interNav.variable}`}
    >
      <body className="min-w-0 overflow-x-hidden">{children}</body>
    </html>
  );
}
