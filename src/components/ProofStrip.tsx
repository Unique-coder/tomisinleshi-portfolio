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
    <div className="border-y border-[var(--border)] py-6 mb-6 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
      {ordered.map(({ key, value, label }) => (
        <div key={key} className="flex flex-col gap-1">
          <span className="text-[clamp(2rem,4vw,2.5rem)] font-semibold text-[var(--text)] leading-none tabular-nums tracking-[-0.02em] font-variant-numeric: tabular-nums">
            {value}
          </span>
          <span className="text-[13px] text-[var(--muted)] leading-snug max-w-[12ch]">{label}</span>
        </div>
      ))}
    </div>
  );
}
