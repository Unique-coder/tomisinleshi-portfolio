'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Section } from './Section';
import { linkRoles, otherCompanies } from '../../content/experience';
import { hero } from '../../content/home';

export function ExperienceSection() {
  const [open, setOpen] = useState(true);

  return (
    <Section id="path" kicker="04 · PATH" title="Frontend hire to CTO in four years." className="mb-16">

      {/* LINK GLOBAL — collapsible, open by default */}
      <div className="mt-8 border-t border-[var(--border)]">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="w-full flex items-center justify-between py-4 text-left"
        >
          <span className="text-[17px] font-bold text-[#343D4D] dark:text-[#F5F0E8]">
            LINK GLOBAL
          </span>
          <ChevronRight
            size={16}
            className={`text-[var(--muted)] transition-transform duration-200 shrink-0 ${
              open ? 'rotate-90' : ''
            }`}
          />
        </button>
        <div
          className={`grid motion-reduce:transition-none transition-[grid-template-rows] duration-200 ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="relative pl-6 pb-6">
              <div
                className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]"
                aria-hidden="true"
              />
              {[...linkRoles].reverse().map((role, i) => (
                <div key={role.title} className="relative mb-6 last:mb-0">
                  <div
                    className={`absolute -left-6 top-[6px] w-3 h-3 rounded-full border-2 ${
                      i === 0
                        ? 'bg-[var(--accent)] border-[var(--accent)]'
                        : 'bg-[var(--bg)] border-[var(--border)]'
                    }`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-[#343D4D] dark:text-[#F5F0E8]">
                        {role.title}
                      </h3>
                      <ul className="mt-1 flex flex-col gap-1">
                        {role.bullets.map((b) => (
                          <li
                            key={b}
                            className="text-[14px] text-[var(--muted)] leading-snug flex gap-2"
                          >
                            <span className="shrink-0 mt-0.5" aria-hidden="true">→</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="text-[12px] text-[var(--muted)] shrink-0 mt-1 md:mt-0">
                      {role.years}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Previously */}
      <div className="mb-8 mt-6">
        <p className="text-[13px] tracking-[0.08em] font-medium uppercase text-[var(--muted)] mb-4">
          Previously
        </p>
        <div className="flex flex-col divide-y divide-[var(--border)]">
          {otherCompanies.map(({ name, role, years }) => (
            <div key={name} className="flex items-center justify-between py-3">
              <div>
                <span className="text-[15px] font-medium text-[#343D4D] dark:text-[#F5F0E8]">
                  {name}
                </span>
                <span className="text-[13px] text-[var(--muted)] ml-3">{role}</span>
              </div>
              <span className="text-[12px] text-[var(--muted)] shrink-0 ml-4">{years}</span>
            </div>
          ))}
        </div>
      </div>

      <Link
        href={hero.cvPath}
        className="text-[14px] font-medium text-[var(--accent)] hover:opacity-80 transition-opacity"
      >
        Download full CV &rarr;
      </Link>
    </Section>
  );
}
