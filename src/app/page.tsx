import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_URL } from '../../lib/site';
import { LagosTime } from '@/components/LagosTime';
import { CopyEmailButton } from '@/components/CopyEmailButton';
import { Section } from '@/components/Section';
import { hero, proof } from '../../content/home';
import { services } from '../../content/services';

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

const socialLinks = [
  { label: 'Twitter',  href: 'https://twitter.com/tomlesh' },
  { label: 'GitHub',   href: 'https://github.com/tomisinleshi' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tomisin-leshi' },
  { label: 'Substack', href: 'https://substack.com/@tomlesh' },
];

const labelClass = 'text-[11px] tracking-[0.1em] font-medium uppercase text-[#9CA3AF] mb-2 block';

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
          className="w-24 h-24 md:w-[160px] md:h-[160px] rounded-xl object-cover shrink-0"
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

          <div className="inline-flex items-center gap-2 border border-[var(--border)] rounded-full px-3 py-1.5 text-[13px] text-[var(--muted)] mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
            {hero.availability}
          </div>

          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <a
              href={hero.calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center min-h-[44px] px-6 bg-[#343D4D] dark:bg-[#F5F0E8] text-[#F5F0E8] dark:text-[#343D4D] text-[15px] font-medium hover:opacity-90 transition-opacity rounded-sm"
            >
              Book a call
            </a>
            <CopyEmailButton email={hero.email} />
          </div>

          <Link
            href={hero.cvPath}
            className="text-[14px] text-[var(--muted)] hover:text-[#343D4D] dark:hover:text-[#F5F0E8] transition-colors"
          >
            Download CV &rarr;
          </Link>
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

      {/* ── Services ─────────────────────────────────── */}
      <Section id="services" kicker="01 · WHAT I DO" title="Where I can help" className="mb-16">
        <div className="flex flex-col lg:flex-row">
          {services.map(({ title, for: forLine, bullets, calParam }, i) => (
            <div
              key={title}
              className={[
                'flex-1 py-8 first:pt-0 lg:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0',
                i > 0 ? 'border-t lg:border-t-0 lg:border-l border-[var(--border)]' : '',
              ].join(' ')}
            >
              <h3 className="text-[16px] font-semibold text-[#343D4D] dark:text-[#F5F0E8] mb-2">
                {title}
              </h3>
              <p className="text-[13px] text-[var(--muted)] mb-4 leading-snug">
                For: {forLine}
              </p>
              <ul className="flex flex-col gap-2 mb-6 list-none p-0">
                {bullets.map((b) => (
                  <li key={b} className="text-[15px] text-[#343D4D] dark:text-[#F5F0E8] leading-snug flex gap-2">
                    <span className="text-[var(--muted)] shrink-0 mt-0.5">&#8212;</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={`${hero.calUrl}?service=${calParam}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium text-[var(--accent)] hover:opacity-80 transition-opacity"
              >
                Talk about this &rarr;
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Factual record ───────────────────────────── */}
      <p className="text-[15px] text-[#9CA3AF] leading-[1.8] mb-10">
        Previously at: Strich Inc &middot; Himylink &middot; Cyprus Robotics.
        $270K+ raised across three Stellar Community Fund awards &middot;
        First Place, Base Batch Europe.
      </p>

      {/* ── See also ─────────────────────────────────── */}
      <div className="border-t border-[var(--border)] pt-5 mb-6">
        <span className={labelClass}>See also</span>
        <div className="flex items-center gap-3 flex-wrap">
          {socialLinks.map(({ label, href }, i) => (
            <span key={label} className="flex items-center gap-3">
              {i > 0 && <span className="text-[#D1D5DB] dark:text-[#4A5568] select-none">|</span>}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] text-[#343D4D] dark:text-[#F5F0E8] hover:text-[#9CA3AF] transition-colors no-underline"
              >
                {label}
              </a>
            </span>
          ))}
        </div>
      </div>

      {/* ── Let's talk ───────────────────────────────── */}
      <div className="border-t border-[var(--border)] pt-5 mb-6">
        <span className={labelClass}>Let&apos;s talk</span>
        <a
          href={hero.calUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] text-[#343D4D] dark:text-[#F5F0E8] hover:text-[#9CA3AF] transition-colors no-underline"
        >
          cal.com/tomisin-leshi
        </a>
      </div>

      {/* ── Directional footer note ──────────────────── */}
      <p className="text-[15px] text-[#9CA3AF] leading-[1.8]">
        I write about building, distribution, and African infrastructure. Essays on{' '}
        <a
          href="https://substack.com/@tomlesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#343D4D] dark:text-[#F5F0E8] hover:text-[#9CA3AF] transition-colors no-underline"
        >
          Substack
        </a>
        {' '}&middot; Daily thinking on{' '}
        <a
          href="https://twitter.com/tomlesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#343D4D] dark:text-[#F5F0E8] hover:text-[#9CA3AF] transition-colors no-underline"
        >
          X
        </a>
        {' '}&rarr;{' '}
        <Link
          href="/writing"
          className="text-[#343D4D] dark:text-[#F5F0E8] hover:text-[#9CA3AF] transition-colors no-underline"
        >
          Writing
        </Link>
      </p>
    </div>
  );
}
