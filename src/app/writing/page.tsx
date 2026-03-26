import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing — Tomisin Leshi',
};

const posts = [
  {
    title: "You're Building What You Want to Sell. Not What They Want to Buy.",
    date: '22 Mar 2026',
    href: 'https://substack.com/@tomlesh/note/c-231661418',
  },
  {
    title: 'Understanding the Fear of Building.',
    date: 'Mar 2026',
    href: 'https://substack.com/@tomlesh/note/c-230752077',
  },
  {
    title: "Founder's Journey Part 2: The First Mover dis-advantage.",
    date: '09 Jan 2026',
    href: 'https://substack.com/@tomlesh/note/p-183835467',
  },
  {
    title: "Founder's Journey",
    date: '15 Dec 2025',
    href: 'https://substack.com/@tomlesh/note/p-180068781',
  },
];

const labelClass = 'text-[11px] tracking-[0.1em] font-medium uppercase text-[#9CA3AF] mb-3 block';

export default function WritingPage() {
  return (
    <div>
      {/* Header */}
      <h1 className="text-[1.5rem] font-normal text-[#343D4D] dark:text-[#F5F0E8] mb-1">
        Writing
      </h1>
      <p className="text-[13px] text-[#9CA3AF] mb-8">Longer thoughts, published on Substack.</p>

      {/* Pinned */}
      <div className="mb-8">
        <span className={labelClass}>Pinned</span>
        <a
          href="https://substack.com/@tomlesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-[#343D4D] dark:text-[#F5F0E8] hover:text-[#9CA3AF] transition-colors no-underline"
        >
          Building Fast in the AI Space. &#x2197;
        </a>
      </div>

      {/* Posts */}
      <div className="border-t border-[var(--border)]">
        {posts.map((post) => (
          <div
            key={post.href}
            className="flex items-start justify-between py-5 border-b border-[var(--border)] gap-4"
          >
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#343D4D] dark:text-[#F5F0E8] hover:text-[#9CA3AF] transition-colors no-underline leading-[1.5]"
            >
              {post.title} &#x2197;
            </a>
            <span className="text-[12px] text-[#9CA3AF] whitespace-nowrap mt-[2px]">
              {post.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
