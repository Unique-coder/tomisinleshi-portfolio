import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tomisin Leshi',
  description: 'Co-Founder & CTO at LINK. Building cross-border payment rails across African markets. Pattern thinker. Self-taught.',
  alternates: { canonical: 'https://www.tomisinleshi.dev' },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tomisin Leshi',
  jobTitle: 'Co-Founder & CTO',
  url: 'https://www.tomisinleshi.dev',
  sameAs: [
    'https://twitter.com/tomlesh',
    'https://linkedin.com/in/tomisin-leshi',
    'https://github.com/tomisinleshi',
    'https://substack.com/@tomlesh',
  ],
};

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com/tomlesh' },
  { label: 'GitHub', href: 'https://github.com/tomisinleshi' },
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
      {/* Name */}
      <h1 className="font-serif text-[2rem] font-normal text-[#343D4D] dark:text-[#F5F0E8] mb-1 leading-tight">
        Tomisin Leshi
      </h1>

      {/* Pronunciation */}
      <p className="text-[13px] text-[#9CA3AF] mb-1 italic">
        /toh&middot;mi&middot;sin leh&middot;shi/
      </p>

      {/* Part of speech */}
      <p className="text-[13px] text-[#9CA3AF] italic mb-6">noun</p>

      {/* Definitions */}
      <div className="flex flex-col gap-4 mb-10 leading-[1.8] text-[16px] text-[#343D4D] dark:text-[#F5F0E8]">
        <p>
          <span className="mr-2">1.</span>
          Pattern thinker. I find the structure underneath the problem. In systems,
          markets, and conversations, I find the move that changes everything.
        </p>
        <p>
          <span className="mr-2">2.</span>
          Co-Founder and CTO at LINK. Building cross-border payment rails across
          African markets. Self-taught. Still figuring things out.
        </p>
        <p>
          <span className="mr-2">3.</span>
          Previously at: Strich Inc &middot; Himylink &middot; Cyprus Robotics.
        </p>
        <p className="text-[15px] text-[#9CA3AF] leading-[1.8]">
          Three-time Stellar Community Fund awardee &middot; $277K+ raised &middot; First Place, Base Batch Europe &middot; Building payment rails across NGN, GHS, KES, ZAR corridors.
        </p>
      </div>

      {/* SEE ALSO */}
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

      {/* LET'S TALK */}
      <div className="border-t border-[var(--border)] pt-5 mb-6">
        <span className={labelClass}>Let&apos;s talk</span>
        <a
          href="https://cal.com/tomisin-leshi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] text-[#343D4D] dark:text-[#F5F0E8] hover:text-[#9CA3AF] transition-colors no-underline"
        >
          cal.com/tomisin-leshi
        </a>
      </div>

      {/* CURRENTLY */}
      <div className="border-t border-[var(--border)] pt-5 mb-6">
        <span className={labelClass}>Currently</span>
        <div className="flex flex-col gap-3 leading-[1.8] text-[16px] text-[#343D4D] dark:text-[#F5F0E8]">
          <p>Building LINK&apos;s multi-currency payment corridors across Africa.</p>
          <p>
            Thinking about kingdom financing. What it means to build infrastructure
            with purpose, not just returns. Paying close attention to where trust
            moves in systems before contracts do.
          </p>
        </div>
      </div>

      {/* Directional footer note */}
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
