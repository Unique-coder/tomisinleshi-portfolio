'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { track } from '@vercel/analytics';
import { linkRoles, otherCompanies } from '../../content/experience';
import { stackPatterns } from '../../content/stack';
import { cvVariants, education, getCVVariant } from '../../content/cv';

const PRINT_TECH = [
  'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Redis',
  'Kafka', 'Stellar', 'Solidity', 'Docker', 'AWS', 'Next.js', 'React',
];

export function CVLayout() {
  const params = useParams();
  const slug = (params?.variant as string) ?? '';
  const variant = getCVVariant(slug);

  function downloadPDF() {
    track('cta_download_cv', { variant: variant.variant });
    window.print();
  }

  // Replace the most-recent role title (CTO) with the variant-specific label
  const roles = [...linkRoles].reverse().map((role, i) =>
    i === 0 ? { ...role, title: variant.linkTitle } : role,
  );

  return (
    <>
      {/* Print CSS: hide sidebar, sticky bar, reset main margin */}
      <style>{`
        @media print {
          aside, .no-print { display: none !important; }
          #main-content { margin-left: 0 !important; padding-top: 0 !important; }
          body { background: white !important; }
          * { color: black !important; border-color: #e5e7eb !important; }
        }
      `}</style>

      {/* Variant switcher + download button */}
      <div className="no-print flex items-center justify-between mb-8 flex-wrap gap-3">
        <div className="flex flex-wrap gap-2" role="list" aria-label="CV variants">
          {cvVariants.map((v) => (
            <Link
              key={v.slug}
              href={v.slug ? `/cv/${v.slug}` : '/cv'}
              className={`min-h-[36px] px-3 py-1.5 text-[12px] font-medium rounded-sm border transition-colors ${
                v.slug === variant.slug
                  ? 'border-[var(--accent)] text-[var(--accent)]'
                  : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
              }`}
            >
              {v.label}
            </Link>
          ))}
        </div>
        <button
          onClick={downloadPDF}
          className="min-h-[44px] px-5 bg-[#343D4D] dark:bg-[#F5F0E8] text-[#F5F0E8] dark:text-[#343D4D] text-[14px] font-medium hover:opacity-90 transition-opacity rounded-sm"
        >
          Download PDF
        </button>
      </div>

      {/* CV document */}
      <div className="max-w-[720px]">

        {/* Header */}
        <div className="mb-8 pb-6 border-b border-[var(--border)]">
          <h1 className="text-[clamp(1.5rem,4vw,2rem)] font-semibold text-[#343D4D] dark:text-[#F5F0E8] mb-1">
            Tomisin Leshi
          </h1>
          <p className="text-[15px] text-[var(--muted)] mb-3">{variant.positioning}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-[var(--muted)]">
            <a href="mailto:tomisinleshi.dev@gmail.com" className="hover:text-[var(--accent)] transition-colors">
              tomisinleshi.dev@gmail.com
            </a>
            <a href="https://linkedin.com/in/tomisin-leshi" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
              linkedin.com/in/tomisin-leshi
            </a>
            <a href="https://github.com/tomisinleshi" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
              github.com/tomisinleshi
            </a>
            <span>Lagos, Nigeria · Remote-friendly</span>
          </div>
        </div>

        {/* Value Insight */}
        <section className="mb-8">
          <h2 className="text-[11px] tracking-[0.12em] font-medium uppercase text-[var(--muted)] mb-3">
            Value Insight
          </h2>
          <p className="text-[15px] text-[#343D4D] dark:text-[#F5F0E8] leading-[1.8]">
            {variant.valueInsight}
          </p>
        </section>

        {/* Proof of Work */}
        <section className="mb-8">
          <h2 className="text-[11px] tracking-[0.12em] font-medium uppercase text-[var(--muted)] mb-3">
            Proof of Work
          </h2>
          <ol className="flex flex-col gap-3 list-none p-0">
            {variant.proofOfWork.map((item, i) => (
              <li key={i} className="flex gap-3 text-[15px] text-[#343D4D] dark:text-[#F5F0E8] leading-snug">
                <span className="text-[var(--muted)] shrink-0 tabular-nums">{i + 1}:</span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        {/* Where I Worked */}
        <section className="mb-8">
          <h2 className="text-[11px] tracking-[0.12em] font-medium uppercase text-[var(--muted)] mb-4">
            Where I Worked
          </h2>

          {/* LINK GLOBAL */}
          <div className="mb-6">
            <div className="flex items-baseline justify-between gap-4 mb-3">
              <div>
                <span className="text-[17px] font-bold text-[#343D4D] dark:text-[#F5F0E8]">
                  LINK GLOBAL
                </span>
                <a
                  href="https://linkio.world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[var(--muted)] ml-2 hover:text-[var(--accent)] transition-colors"
                >
                  linkio.world
                </a>
              </div>
              <span className="text-[12px] text-[var(--muted)] shrink-0">2021 to now</span>
            </div>
            <div className="flex flex-col gap-4">
              {roles.map((role) => (
                <div key={role.title}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[14px] font-medium text-[#343D4D] dark:text-[#F5F0E8]">
                      {role.title}
                    </span>
                    <span className="text-[12px] text-[var(--muted)] shrink-0">{role.years}</span>
                  </div>
                  <ul className="mt-1 flex flex-col gap-1 list-none p-0">
                    {role.bullets.map((b) => (
                      <li key={b} className="text-[13px] text-[var(--muted)] leading-snug flex gap-2">
                        <span className="shrink-0" aria-hidden="true">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Other companies */}
          <div className="flex flex-col divide-y divide-[var(--border)]">
            {otherCompanies.map(({ name, role, years }) => (
              <div key={name} className="flex items-center justify-between py-2">
                <div>
                  <span className="text-[14px] font-medium text-[#343D4D] dark:text-[#F5F0E8]">{name}</span>
                  <span className="text-[13px] text-[var(--muted)] ml-2">{role}</span>
                </div>
                <span className="text-[12px] text-[var(--muted)] shrink-0 ml-4">{years}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How I Build */}
        <section className="mb-8">
          <h2 className="text-[11px] tracking-[0.12em] font-medium uppercase text-[var(--muted)] mb-3">
            How I Build
          </h2>
          <p className="text-[15px] text-[#343D4D] dark:text-[#F5F0E8] leading-[1.8] mb-4">
            {stackPatterns}
          </p>
          <div className="flex flex-wrap gap-2">
            {PRINT_TECH.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[12px] border border-[var(--border)] text-[var(--muted)] rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-[11px] tracking-[0.12em] font-medium uppercase text-[var(--muted)] mb-4">
            Education
          </h2>
          <div className="flex flex-col gap-4">
            {education.map((ed) => (
              <div key={ed.institution}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[15px] font-semibold text-[#343D4D] dark:text-[#F5F0E8]">
                    {ed.institution}
                  </span>
                  <span className="text-[12px] text-[var(--muted)] shrink-0">{ed.years}</span>
                </div>
                <p className="text-[13px] text-[var(--muted)] mt-0.5">{ed.qualification}</p>
                {ed.activities && (
                  <p className="text-[12px] text-[var(--muted)] mt-0.5">
                    Activities: {ed.activities}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
