'use client';

import { useRef } from 'react';
import { useAudience } from '../contexts/audience-context';
import { audiences } from '../../content/audiences';
import type { AudienceKey } from '../../content/audiences';

export function AudienceSwitch() {
  const { audience, setAudience } = useAudience();
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(e: React.KeyboardEvent, currentIndex: number) {
    let next = -1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      next = (currentIndex + 1) % audiences.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      next = (currentIndex - 1 + audiences.length) % audiences.length;
    }
    if (next !== -1) {
      setAudience(audiences[next].key as AudienceKey);
      buttonRefs.current[next]?.focus();
    }
  }

  return (
    <div
      role="radiogroup"
      aria-label="Choose audience"
      className="flex flex-wrap items-center gap-x-1 gap-y-1 mb-5"
    >
      <span className="text-[12px] text-[var(--muted)] mr-1 shrink-0 font-medium tracking-wide uppercase">
        For:
      </span>
      {audiences.map((a, i) => {
        const isSelected = audience.key === a.key;
        return (
          <button
            key={a.key}
            ref={(el) => { buttonRefs.current[i] = el; }}
            role="radio"
            aria-checked={isSelected}
            onClick={() => setAudience(a.key as AudienceKey)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            tabIndex={isSelected ? 0 : -1}
            data-umami-event="audience_switch"
            data-umami-event-audience={a.key}
            className={`min-h-[44px] px-3 py-1 rounded-sm text-[13px] font-medium transition-colors ${
              isSelected
                ? 'bg-[#343D4D] dark:bg-[#F5F0E8] text-[#F5F0E8] dark:text-[#343D4D]'
                : 'text-[var(--muted)] hover:text-[#343D4D] dark:hover:text-[#F5F0E8]'
            }`}
          >
            {a.label}
          </button>
        );
      })}
    </div>
  );
}
