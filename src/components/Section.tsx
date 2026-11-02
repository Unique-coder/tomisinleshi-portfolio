import type { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  id: string;
  kicker?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Layout section with a kicker label, heading, and scroll-margin
 * that accounts for the mobile sticky header (56px = h-14).
 */
export function Section({ id, kicker, title, children, className }: Props) {
  return (
    <section id={id} className={clsx('scroll-mt-14 md:scroll-mt-0', className)}>
      {kicker && (
        <p className="font-mono text-[12px] tracking-[0.08em] font-medium uppercase text-[var(--muted)] mb-3">
          {kicker}
        </p>
      )}
      {title && (
        <h2 className="text-[clamp(1.5rem,2.5vw+0.75rem,2rem)] font-semibold text-[var(--text)] leading-[1.2] tracking-[-0.02em] mb-8">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
