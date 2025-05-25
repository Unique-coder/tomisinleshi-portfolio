import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/providers/ThemeProvider';
import "./tailwind.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomisin Leshi – CTO & Lead Engineer",
  description: "Tomisin Leshi – CTO @ LINK | Full-Stack & Blockchain Engineer. Building scalable fintech, Web3, and AI-powered platforms for SMEs and global payments.",
  keywords: "Tomisin Leshi, CTO, Full-Stack Developer, Backend Engineer, Blockchain, Web3, Fintech, SME Payments, AI",
  authors: [{ name: "Tomisin Leshi" }],
  openGraph: {
    title: "Tomisin Leshi – CTO & Lead Engineer",
    description: "Leading on-chain FX, stablecoin ramps, and scalable APIs for global payments and SMEs.",
    url: 'https://tomisinleshi.com',
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
    title: "Tomisin Leshi – CTO & Lead Engineer",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
