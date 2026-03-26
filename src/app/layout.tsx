import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomisin Leshi – Software Engineer",
  description: "Tomisin Leshi – Lead Software Engineer @ LINK | Full-Stack & Blockchain Engineer. Building scalable fintech, Web3, and AI-powered platforms for SMEs and global payments.",
  keywords: "Tomisin Leshi, CTO, Full-Stack Developer, Backend Engineer, Blockchain, Web3, Fintech, SME Payments, AI",
  authors: [{ name: "Tomisin Leshi" }],
  openGraph: {
    title: "Tomisin Leshi – Software Engineer",
    description: "Building secure, scalable fintech and Web3 platforms for SMEs and global payments.",
    url: 'https://tomisinleshi.dev',
    siteName: 'Tomisin Leshi',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tomisin Leshi – Software Engineer",
    description: "Building secure, scalable fintech and Web3 platforms for SMEs and global payments.",
    creator: '@TommLesh',
    images: ['/twitter-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased min-h-screen" suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
