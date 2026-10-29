import Link from 'next/link';
import { Section } from './Section';
import { posts as linkedInPosts } from '../../content/posts';
import { substackPosts } from '../../content/writing';

export function WritingSection() {
  const recentSubstack = substackPosts.slice(0, 3);

  return (
    <Section
      id="writing"
      kicker="05 · WRITING"
      title="I write about building products, founders, and how money moves"
      className="mb-16"
    >
      {/* LinkedIn posts — horizontal scroll on mobile, 3-col on md+ */}
      <div
        className="
          flex gap-4 overflow-x-auto snap-x snap-mandatory
          md:grid md:grid-cols-3 md:overflow-x-visible
          pb-2 md:pb-0 mb-10
          [&::-webkit-scrollbar]:hidden
        "
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {linkedInPosts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              snap-start shrink-0 w-[85%] md:w-auto
              flex flex-col gap-3 p-4
              border border-[var(--border)] rounded-md bg-[var(--surface)]
              hover:border-[var(--accent)] transition-colors no-underline
            "
            data-umami-event="linkedin_post_click"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] tracking-[0.08em] font-medium uppercase text-[var(--muted)]">
                LinkedIn
              </span>
              <span className="text-[11px] font-medium text-[var(--muted)]">
                {post.impressions} views
              </span>
            </div>
            <p className="text-[15px] font-semibold text-[#343D4D] dark:text-[#F5F0E8] leading-snug">
              {post.title}
            </p>
            <p className="text-[13px] text-[var(--muted)] leading-[1.6] line-clamp-3">
              {post.hook}
            </p>
          </a>
        ))}
      </div>

      {/* Latest Substack essays */}
      <div className="flex flex-col divide-y divide-[var(--border)] mb-8">
        {recentSubstack.map((post) => (
          <a
            key={post.href}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4 no-underline group"
          >
            <div className="flex-1 min-w-0">
              <span className="text-[15px] font-medium text-[#343D4D] dark:text-[#F5F0E8] group-hover:text-[var(--accent)] transition-colors leading-snug block">
                {post.title}
              </span>
              <span className="text-[13px] text-[var(--muted)] leading-snug block mt-0.5">
                {post.description}
              </span>
            </div>
            <span className="text-[12px] text-[var(--muted)] shrink-0 sm:ml-4">{post.date}</span>
          </a>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        <Link
          href="/writing"
          className="text-[14px] font-medium text-[var(--accent)] hover:opacity-80 transition-opacity"
        >
          All writing &rarr;
        </Link>
        <a
          href="https://tomlesh.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
        >
          Substack
        </a>
        <a
          href="https://www.linkedin.com/in/tomisin-leshi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/TommLesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
        >
          X
        </a>
      </div>
    </Section>
  );
}
