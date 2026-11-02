import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Sidebar from '@/components/Sidebar';
import { SiteFooter } from '@/components/SiteFooter';
import { SITE_URL } from '../../lib/site';
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tomisin Leshi",
  description: "Co-Founder & CTO at LINK. Building cross-border payment rails across African markets.",
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
        <meta name="theme-color" content="#FAFAF9" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0B0B0C" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tomisin Leshi" />
        {process.env.NEXT_PUBLIC_UMAMI_ID && (
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
          />
        )}
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen`} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--bg)] focus:text-[var(--text-primary)] focus:border focus:border-[var(--border)] focus:rounded focus:outline-none"
        >
          Skip to content
        </a>
        <Sidebar />
        <main id="main-content" className="md:ml-[200px] pt-14 md:pt-0">
          <div className="max-w-[760px] xl:max-w-[880px] mx-auto px-4 md:px-8 py-12 animate-fade-in">
            {children}
          </div>
        </main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
