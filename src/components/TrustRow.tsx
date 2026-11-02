import { trustItems, trustQuote } from '../../content/trust';

export function TrustRow() {
  return (
    <div className="mb-10">
      <p className="font-mono text-[12px] tracking-[0.1em] uppercase text-[var(--muted)] mb-3">
        Backed by and built with
      </p>

      <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
        {trustItems.map((item, i) => (
          <span key={item.slug} className="flex items-center gap-x-4">
            {i > 0 && (
              <span className="text-[var(--subtle)] select-none" aria-hidden>·</span>
            )}
            <TrustItem item={item} />
          </span>
        ))}
      </div>

      {trustQuote && (
        <p className="mt-4 text-[15px] text-[var(--text)] max-w-[52ch]">
          {trustQuote.quote}{' '}
          <span className="text-[13px] text-[var(--muted)]">
            — {trustQuote.name}, {trustQuote.role}
          </span>
        </p>
      )}
    </div>
  );
}

function TrustItem({ item }: { item: { name: string; note: string; href?: string } }) {
  const inner = (
    <span className="group relative inline-flex items-center gap-1">
      <span className="text-[15px] font-medium text-[var(--muted)] leading-none">
        {item.name}
      </span>
      {/* tooltip — visible on hover and :focus-within for touch */}
      <span
        className="
          absolute bottom-full left-0 mb-1.5 px-2 py-1
          text-[12px] text-[var(--text)] bg-[var(--surface)] border border-[var(--border)]
          rounded whitespace-nowrap pointer-events-none
          opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
          transition-opacity duration-150
        "
        role="tooltip"
      >
        {item.note}
      </span>
    </span>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--text)] transition-colors"
        aria-label={`${item.name} — ${item.note}`}
      >
        {inner}
      </a>
    );
  }

  return inner;
}
