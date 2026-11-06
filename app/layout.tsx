import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--display", display: "swap" });
const text = Inter({ subsets: ["latin"], variable: "--text", display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const viewport: Viewport = { themeColor: "#07080f", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Yugty.AI: Specialised AI agents for business and careers", template: "%s | Yugty.AI" },
  description: "Voice, WhatsApp, outbound calling, CRM and payment-reminder agents for businesses, and career agents for individuals. People stay in the loop.",
  icons: { icon: "/yugty-logo.svg" },
  openGraph: { title: "Yugty.AI", description: "Specialised AI agents, with people in the loop.", type: "website", siteName: "Yugty.AI" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${text.variable}`}>
        <a className="skip" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
