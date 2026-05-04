import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Raleway, Roboto } from "next/font/google";
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

export const metadata: Metadata = {
  title: "AZ SERVICES L.L.C-FZ | UAE Business Setup & Advisory",
  description:
    "Premium UAE business setup, corporate tax, accounting, compliance, due diligence, and bank account support from AZ SERVICES L.L.C-FZ.",
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
