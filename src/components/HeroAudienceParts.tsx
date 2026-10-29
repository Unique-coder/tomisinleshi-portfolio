'use client';

import { useAudience } from '../contexts/audience-context';
import { AudienceSwitch } from './AudienceSwitch';

export function HeroAudienceParts() {
  const { audience } = useAudience();
  return (
    <>
      <AudienceSwitch />
      <p className="text-[16px] text-[#343D4D] dark:text-[#F5F0E8] leading-[1.8] mb-6 max-w-[52ch]">
        {audience.subLine}
      </p>
      <div className="flex items-start gap-2 text-[13px] text-[var(--muted)] mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-[5px]" aria-hidden="true" />
        <span>{audience.pill}</span>
      </div>
    </>
  );
}
