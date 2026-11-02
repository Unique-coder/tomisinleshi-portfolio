'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface CollapsibleProps {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Collapsible({ label, children, defaultOpen = false }: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-[var(--border)] mt-8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[12px] tracking-[0.1em] font-medium uppercase text-[var(--muted)]">
          {label}
        </span>
        <ChevronRight
          size={14}
          className={`text-[var(--muted)] transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-6">{children}</div>
      </div>
    </div>
  );
}
