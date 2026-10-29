import type { Metadata } from 'next';
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
import { hero, proof } from '../../content/home';

export const metadata: Metadata = {
  title: 'Tomisin Leshi: Payment infrastructure for African markets',
  description: 'I build the systems that move money across African borders. Cross-border payment rails, stablecoin products and backend systems. Based in Lagos, working remote.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Tomisin Leshi: Payment infrastructure for African markets',
    description: 'I build the systems that move money across African borders. Cross-border payment rails, stablecoin products and backend systems. Based in Lagos, working remote.',
    url: SITE_URL,
  },
  twitter: {
    title: 'Tomisin Leshi: Payment infrastructure for African markets',
    description: 'I build the systems that move money across African borders. Cross-border payment rails, stablecoin products and backend systems. Based in Lagos, working remote.',
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

export default function AboutPage() {
  return (
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
          <p className="text-[11px] tracking-[0.12em] font-medium uppercase text-[var(--muted)] mb-4">
            LAGOS &middot; <LagosTime /> &middot; PAYMENTS &amp; BACKEND ENGINEER
          </p>

          <h1 className="text-[clamp(1.75rem,5vw,2.5rem)] font-semibold text-[#343D4D] dark:text-[#F5F0E8] leading-tight mb-4">
            {hero.h1}
          </h1>

          <p className="text-[16px] text-[#343D4D] dark:text-[#F5F0E8] leading-[1.8] mb-6 max-w-[52ch]">
            {hero.sub}
          </p>

          <div className="flex items-start gap-2 text-[13px] text-[var(--muted)] mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-[5px]" aria-hidden="true" />
            <span>{hero.availability}</span>
          </div>

          <div id="hero-cta" className="flex flex-col md:flex-row gap-3 mb-4">
            <a
              href={hero.calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full md:w-auto min-h-[44px] px-6 bg-[#343D4D] dark:bg-[#F5F0E8] text-[#F5F0E8] dark:text-[#343D4D] text-[15px] font-medium hover:opacity-90 transition-opacity rounded-sm"
            >
              Book a call
            </a>
            <CopyEmailButton email={hero.email} />
          </div>

          <a
            href="#services"
            className="text-[14px] text-[var(--muted)] hover:text-[#343D4D] dark:hover:text-[#F5F0E8] transition-colors"
          >
            See services &darr;
          </a>
        </div>
      </div>

      {/* ── Proof strip ──────────────────────────────── */}
      <div className="border-y border-[var(--border)] py-6 mb-16 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
        {proof.map(({ value, label }) => (
          <div key={value} className="flex flex-col gap-1">
            <span className="text-[clamp(1.5rem,4vw,2rem)] font-semibold text-[#343D4D] dark:text-[#F5F0E8] leading-none tabular-nums">
              {value}
            </span>
            <span className="text-[12px] text-[var(--muted)] leading-snug">{label}</span>
          </div>
        ))}
      </div>

      {/* ── Question chips ───────────────────────────── */}
      <QuestionChips />

      {/* ── Services ─────────────────────────────────── */}
      <ServicesSection />

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
  );
}
