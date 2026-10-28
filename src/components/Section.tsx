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
        <p className="text-[11px] tracking-[0.12em] font-medium uppercase text-[var(--muted)] mb-3">
          {kicker}
        </p>
      )}
      {title && (
        <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-normal text-[#343D4D] dark:text-[#F5F0E8] leading-tight mb-8">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
