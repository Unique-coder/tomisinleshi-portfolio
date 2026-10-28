import { Section } from './Section';
import { stack, stackPatterns } from '../../content/stack';

export function StackSection() {
  return (
    <Section id="stack" kicker="03 · STACK" title="My stack" className="mb-16">
      <div className="flex flex-col gap-6">
        {stack.map(({ label, items }) => (
          <div key={label}>
            <span className="text-[11px] tracking-[0.1em] font-medium uppercase text-[var(--muted)] mb-2 block">
              {label}
            </span>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-[13px] px-3 py-1 rounded bg-[var(--surface)] border border-[var(--border)] text-[#343D4D] dark:text-[#F5F0E8] whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-[14px] text-[var(--muted)] leading-[1.8] max-w-[60ch]">
        {stackPatterns}
      </p>
    </Section>
  );
}
