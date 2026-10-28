import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Sidebar from '@/components/Sidebar';
import { SITE_URL } from '../../lib/site';
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tomisin Leshi",
  description: "Co-Founder & CTO at LINK. Building cross-border payment rails across African markets. Pattern thinker. Self-taught.",
  keywords: "Tomisin Leshi, LINK, Co-Founder, CTO, Cross-Border Payments, Africa, Fintech, Full-Stack Engineer, Web3",
  authors: [{ name: "Tomisin Leshi" }],
  openGraph: {
    title: "Tomisin Leshi",
    description: "Co-Founder & CTO at LINK. Building cross-border payment rails across African markets.",
    url: SITE_URL,
    siteName: 'Tomisin Leshi',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tomisin Leshi",
    description: "Co-Founder & CTO at LINK. Building cross-border payment rails across African markets.",
    creator: '@TommLesh',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#F5F0E8" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#343D4D" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tomisin Leshi" />
      </head>
      <body className="antialiased min-h-screen" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--bg)] focus:text-[var(--text-primary)] focus:border focus:border-[var(--border)] focus:rounded focus:outline-none"
        >
          Skip to content
        </a>
        <Sidebar />
        <main id="main-content" className="md:ml-[200px] pt-[80px] md:pt-0">
          <div className="max-w-[680px] mx-auto px-8 py-12 animate-fade-in">
            {children}
          </div>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
