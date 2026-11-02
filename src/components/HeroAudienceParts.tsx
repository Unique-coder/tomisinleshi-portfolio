'use client';

import { useAudience } from '../contexts/audience-context';
import { AudienceSwitch } from './AudienceSwitch';

export function HeroAudienceParts() {
  const { audience } = useAudience();
  return (
    <>
      <AudienceSwitch />
      <p className="text-[16px] text-[var(--text)] leading-[1.8] mb-6 max-w-[52ch]">
        {audience.subLine}
      </p>
      <div className="inline-flex items-center gap-2 text-[13px] text-[var(--muted)] mb-6 bg-[var(--surface)] border border-[var(--border)] rounded-full px-3 py-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" aria-hidden="true" />
        <span>{audience.pill}</span>
      </div>
    </>
  );
}
