'use client';

import { useAudience } from '../contexts/audience-context';
import { proof } from '../../content/home';

const proofMap = Object.fromEntries(proof.map((p) => [p.key, p]));

export function ProofStrip() {
  const { audience } = useAudience();
  const ordered = audience.proofOrder
    .map((k) => proofMap[k])
    .filter(Boolean);

  return (
    <div className="border-y border-[var(--border)] py-6 mb-16 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
      {ordered.map(({ key, value, label }) => (
        <div key={key} className="flex flex-col gap-1">
          <span className="text-[clamp(1.5rem,4vw,2rem)] font-semibold text-[#343D4D] dark:text-[#F5F0E8] leading-none tabular-nums">
            {value}
          </span>
          <span className="text-[12px] text-[var(--muted)] leading-snug">{label}</span>
        </div>
      ))}
    </div>
  );
}
