import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import { SITE_URL } from '../../lib/site';
import { LagosTime } from '@/components/LagosTime';
import { CopyEmailButton } from '@/components/CopyEmailButton';
import { ServicesSection } from '@/components/ServicesSection';
import { WorkSection } from '@/components/WorkSection';
import { StackSection } from '@/components/StackSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { WritingSection } from '@/components/WritingSection';
import { ContactSection } from '@/components/ContactSection';
import { StickyCallBar } from '@/components/StickyCallBar';
import { QuestionChips } from '@/components/QuestionChips';
import { HeroAudienceParts } from '@/components/HeroAudienceParts';
import { ProofStrip } from '@/components/ProofStrip';
import { TrustRow } from '@/components/TrustRow';
import { AudienceProvider } from '@/contexts/audience-context';
import { hero } from '../../content/home';
import { resolveAudienceKey } from '../../content/audiences';

export const metadata: Metadata = {
  title: 'Tomisin Leshi: Technical lead for zero-to-one products',
  description:
    'I lead the teams that take products from zero to one. Co-founder and CTO at LINK GLOBAL, where the payment systems I built have moved $3M+. Fintech, SaaS and AI.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Tomisin Leshi: Technical lead for zero-to-one products',
    description:
      'I lead the teams that take products from zero to one. Co-founder and CTO at LINK GLOBAL, where the payment systems I built have moved $3M+. Fintech, SaaS and AI.',
    url: SITE_URL,
  },
  twitter: {
    title: 'Tomisin Leshi: Technical lead for zero-to-one products',
    description:
      'I lead the teams that take products from zero to one. Co-founder and CTO at LINK GLOBAL, where the payment systems I built have moved $3M+. Fintech, SaaS and AI.',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tomisin Leshi',
  jobTitle: 'Co-Founder & CTO',
  url: SITE_URL,
  sameAs: [
    'https://twitter.com/tomlesh',
    'https://linkedin.com/in/tomisin-leshi',
    'https://github.com/tomisinleshi',
    'https://substack.com/@tomlesh',
  ],
};

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ for?: string }>;
}) {
  const params = await searchParams;
  const initialKey = resolveAudienceKey(params.for);

  return (
    <AudienceProvider initialKey={initialKey}>
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* ── Hero ─────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row-reverse md:items-start gap-6 mb-10">
          <Image
            src={hero.photo}
            alt="Tomisin Leshi"
            width={160}
            height={160}
            priority
            sizes="(max-width: 767px) 96px, 160px"
            className="w-24 h-24 md:w-[160px] md:h-[160px] rounded-xl object-cover object-top shrink-0 md:mt-8"
          />

          <div className="flex-1 min-w-0">
            <p className="font-mono text-[12px] tracking-[0.08em] font-medium uppercase text-[var(--muted)] mb-4">
              LAGOS &middot; <LagosTime /> &middot; TECHNICAL LEAD &amp; PRODUCT ENGINEER
            </p>

            <h1 className="text-[clamp(2.25rem,5vw+1rem,3.5rem)] font-semibold text-[var(--text)] leading-[1.08] tracking-[-0.025em] mb-4" style={{textWrap:'balance'} as React.CSSProperties}>
              {hero.h1}
            </h1>

            {/* Audience-sensitive: switch control, sub line, pill */}
            <HeroAudienceParts />

            <div id="hero-cta" className="flex flex-col md:flex-row gap-3 mb-4">
              <a
                href={hero.calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full md:w-auto min-h-[44px] px-6 bg-[var(--button-bg)] text-[var(--button-fg)] text-[15px] font-medium hover:opacity-90 transition-opacity rounded-sm"
              >
                Book a call
              </a>
              <CopyEmailButton email={hero.email} />
            </div>

            <a
              href="#services"
              className="text-[14px] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              See services &darr;
            </a>
          </div>
        </div>

        {/* ── Proof strip ──────────────────────────────── */}
        <ProofStrip />

        {/* ── Trust row ────────────────────────────────── */}
        <TrustRow />

        {/* ── Services ─────────────────────────────────── */}
        <ServicesSection />

        {/* ── Question chips ───────────────────────────── */}
        <QuestionChips />

        {/* ── Work ─────────────────────────────────────── */}
        <WorkSection />

        {/* ── Stack ────────────────────────────────────── */}
        <StackSection />

        {/* ── Path ─────────────────────────────────────── */}
        <ExperienceSection />

        {/* ── Writing ──────────────────────────────────── */}
        <WritingSection />

        {/* ── Contact ──────────────────────────────────── */}
        <ContactSection />

        <StickyCallBar />
      </div>
    </AudienceProvider>
  );
}
