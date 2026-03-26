import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Sidebar from '@/components/Sidebar';
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomisin Leshi",
  description: "Co-Founder & CTO at LINK. Building cross-border payment rails across African markets. Pattern thinker. Self-taught. Still figuring things out.",
  keywords: "Tomisin Leshi, LINK, Co-Founder, CTO, Cross-Border Payments, Africa, Fintech, Full-Stack Engineer, Web3, Pattern Thinker",
  authors: [{ name: "Tomisin Leshi" }],
  openGraph: {
    title: "Tomisin Leshi",
    description: "Co-Founder & CTO at LINK. Building cross-border payment rails across African markets.",
    url: 'https://tomisinleshi.dev',
    siteName: 'Tomisin Leshi',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tomisin Leshi",
    description: "Co-Founder & CTO at LINK. Building cross-border payment rails across African markets.",
    creator: '@TommLesh',
    images: ['/twitter-image.png'],
  },
  icons: { icon: '/favicon.ico' },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased min-h-screen" suppressHydrationWarning>
        <Sidebar />
        {/* Mobile: pad top for fixed top bar */}
        <main className="md:ml-[160px] pt-[80px] md:pt-0">
          <div className="max-w-[640px] mx-auto px-8 py-12 animate-fade-in">
            {children}
          </div>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
