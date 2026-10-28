'use client';
import { useState, useId } from 'react';
import Link from 'next/link';
import { questions } from '../../content/questions';

export function QuestionChips() {
  const [openId, setOpenId] = useState<string | null>(null);
  const uid = useId();

  return (
    <div className="mb-16">
      <div className="flex flex-wrap gap-2 mb-0">
        {questions.map((q) => {
          const isOpen = openId === q.id;
          const panelId = `${uid}-panel-${q.id}`;
          return (
            <button
              key={q.id}
              id={`${uid}-btn-${q.id}`}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId((prev) => (prev === q.id ? null : q.id))}
              className={`min-h-[44px] px-4 py-2 text-[13px] font-medium rounded-full border transition-colors text-left ${
                isOpen
                  ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--surface)]'
                  : 'border-[var(--border)] text-[#343D4D] dark:text-[#F5F0E8] hover:border-[var(--accent)] hover:text-[var(--accent)]'
              }`}
            >
              {q.chip}
            </button>
          );
        })}
      </div>

      {questions.map((q) => {
        const isOpen = openId === q.id;
        const panelId = `${uid}-panel-${q.id}`;
        return (
          <div
            key={q.id}
            className={`grid motion-reduce:transition-none transition-[grid-template-rows] duration-200 ${
              isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div
              id={panelId}
              role="region"
              aria-labelledby={`${uid}-btn-${q.id}`}
              className="min-h-0 overflow-hidden"
            >
              <div className="mt-3 p-4 rounded-md bg-[var(--surface)] border border-[var(--border)]">
                <p className="text-[15px] text-[#343D4D] dark:text-[#F5F0E8] leading-[1.75] mb-3">
                  {q.answer}
                </p>
                {q.linkHref && q.linkText && (
                  q.linkHref.startsWith('/') ? (
                    <Link
                      href={q.linkHref}
                      className="text-[14px] font-medium text-[var(--accent)] hover:opacity-80 transition-opacity"
                    >
                      {q.linkText} &rarr;
                    </Link>
                  ) : (
                    <a
                      href={q.linkHref}
                      className="text-[14px] font-medium text-[var(--accent)] hover:opacity-80 transition-opacity"
                    >
                      {q.linkText} &rarr;
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
