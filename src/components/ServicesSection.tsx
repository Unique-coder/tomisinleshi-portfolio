'use client';

import { Section } from './Section';
import { services } from '../../content/services';
import { hero } from '../../content/home';
import { useAudience } from '../contexts/audience-context';

export function ServicesSection() {
  const { audience } = useAudience();
  const ordered = audience.serviceOrder
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as (typeof services)[number][];

  return (
    <Section
      id="services"
      kicker="01 · SERVICES"
      title="Where I can help"
      className="mb-16"
    >
      <p className="text-[15px] text-[var(--muted)] leading-[1.75] mb-10 -mt-4 max-w-[58ch]">
        Two ways to work with me. Both start with a small, fixed first step.
      </p>

      <div className="flex flex-col divide-y divide-[var(--border)]">
        {ordered.map((service, i) => (
          <div key={service.slug} className="py-10 first:pt-0 last:pb-0">
            {/* Number + title */}
            <p className="text-[11px] tracking-[0.12em] font-medium uppercase text-[var(--muted)] mb-2">
              {String(i + 1).padStart(2, '0')}
            </p>
            <h3 className="text-[clamp(1.1rem,3vw,1.35rem)] font-semibold text-[#343D4D] dark:text-[#F5F0E8] leading-snug mb-3">
              {service.title}
            </h3>

            <p className="text-[15px] text-[var(--muted)] leading-[1.75] mb-4 max-w-[58ch]">
              {service.pain}
            </p>

            <p className="text-[13px] text-[var(--muted)] mb-4">
              <span className="font-medium">For:</span> {service.forWho}
            </p>

            <ul className="flex flex-col gap-2 mb-4 list-none p-0">
              {service.outcomes.map((o) => (
                <li
                  key={o}
                  className="flex gap-2 text-[15px] text-[#343D4D] dark:text-[#F5F0E8] leading-[1.7]"
                >
                  <span className="text-[var(--muted)] shrink-0 mt-0.5 select-none">→</span>
                  {o}
                </li>
              ))}
            </ul>

            <p className="text-[13px] text-[var(--accent)] mb-5">
              <a href={service.doneBefore.href} className="hover:opacity-80 transition-opacity">
                {service.doneBefore.text}
              </a>
            </p>

            <div className="border border-[var(--border)] rounded px-4 py-3 mb-3 max-w-[58ch]">
              <p className="text-[13px] text-[var(--muted)] leading-[1.6]">
                <span className="font-medium text-[#343D4D] dark:text-[#F5F0E8]">How we start:</span>{' '}
                {service.start}
              </p>
            </div>

            {service.modes && (
              <p className="text-[12px] text-[var(--muted)] mb-4">{service.modes}</p>
            )}

            {service.priceNote && (
              <p className="text-[12px] text-[var(--muted)] mb-4">{service.priceNote}</p>
            )}

            <a
              href={`${hero.calUrl}?service=${service.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-6 bg-[#343D4D] dark:bg-[#F5F0E8] text-[#F5F0E8] dark:text-[#343D4D] text-[15px] font-medium hover:opacity-90 transition-opacity rounded-sm"
              data-umami-event="service_click"
              data-umami-event-service={service.slug}
            >
              {service.ctaLabel}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
