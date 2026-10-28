'use client';
import { useState } from 'react';

export type UnifiedPost = {
  title: string;
  date: string;
  description: string;
  href: string;
  platform: 'substack' | 'linkedin' | 'x';
  impressions?: string;
};

const TABS = ['All', 'Substack', 'LinkedIn', 'X'] as const;
type Tab = typeof TABS[number];

const PROFILES = [
  {
    label: 'Substack',
    href: 'https://tomlesh.substack.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tomisin-leshi/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://twitter.com/TommLesh',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
] as const;

function PostRow({ post }: { post: UnifiedPost }) {
  return (
    <div className="py-5 border-t border-[var(--border)] first:border-t-0">
      <div className="flex items-start justify-between gap-4 mb-1">
        <a
          href={post.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-medium text-[#343D4D] dark:text-[#F5F0E8] hover:text-[var(--accent)] transition-colors no-underline leading-snug"
        >
          {post.title} &#x2197;
        </a>
        <span className="text-[12px] text-[var(--muted)] whitespace-nowrap mt-0.5 shrink-0">
          {post.date}
        </span>
      </div>
      <p className="text-[14px] text-[var(--muted)] leading-[1.6] mb-1">
        {post.description}
      </p>
      <div className="flex items-center gap-3">
        <span className="text-[11px] tracking-[0.08em] uppercase text-[var(--muted)]">
          {post.platform}
        </span>
        {post.impressions && (
          <>
            <span className="text-[var(--border)]" aria-hidden="true">·</span>
            <span className="text-[11px] text-[var(--muted)]">
              {post.impressions} impressions
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export function WritingTabs({ posts }: { posts: UnifiedPost[] }) {
  const [active, setActive] = useState<Tab>('All');

  const filtered =
    active === 'All'
      ? posts
      : posts.filter((p) => p.platform === active.toLowerCase());

  return (
    <div>
      {/* Tab bar + profile links */}
      <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
        <div className="flex gap-1" role="tablist" aria-label="Filter writing by platform">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={`px-3 py-1.5 text-[13px] font-medium rounded-sm transition-colors min-h-[36px] ${
                active === tab
                  ? 'bg-[var(--surface)] text-[#343D4D] dark:text-[#F5F0E8]'
                  : 'text-[var(--muted)] hover:text-[#343D4D] dark:hover:text-[#F5F0E8]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Platform profile icons */}
        <div className="flex items-center gap-4">
          {PROFILES.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} profile`}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Post list */}
      <div role="tabpanel">
        {filtered.length === 0 ? (
          <p className="text-[14px] text-[var(--muted)] py-8">Nothing here yet.</p>
        ) : (
          <div className="border-b border-[var(--border)]">
            {filtered.map((post) => (
              <PostRow key={post.href} post={post} />
            ))}
          </div>
        )}
      </div>

      {/* Footer links */}
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
        {PROFILES.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            All on {label} &rarr;
          </a>
        ))}
      </div>
    </div>
  );
}
