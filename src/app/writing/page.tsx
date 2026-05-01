import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing — Tomisin Leshi',
};

const longForm = [
  {
    title: "You're Building What You Want to Sell. Not What They Want to Buy.",
    date: '22 Mar 2026',
    description:
      'Why the reason customers buy is never the reason founders build — and what to do about it.',
    href: 'https://substack.com/@tomlesh/note/c-231661418',
    source: 'Substack',
  },
  {
    title: 'Understanding the Fear of Building.',
    date: '22 Mar 2026',
    description:
      'The structural reasons founders freeze — and why it is not a psychology problem.',
    href: 'https://substack.com/@tomlesh/note/c-230752077',
    source: 'Substack',
  },
  {
    title: "Founder's Journey Part 2: The First Mover Disadvantage.",
    date: '09 Jan 2026',
    description: 'Why being first is not the advantage most founders think it is.',
    href: 'https://substack.com/@tomlesh/note/p-183835467',
    source: 'Substack',
  },
  {
    title: "Founder's Journey",
    date: '15 Dec 2025',
    description:
      'The opening piece. Why I started writing about building — and what I am trying to figure out.',
    href: 'https://substack.com/@tomlesh/note/p-180068781',
    source: 'Substack',
  },
];

const shorterPieces = [
  {
    title: 'Building Fast in the AI Space.',
    date: 'Pinned',
    description: 'A quick breakdown of what speed actually means when building with AI.',
    href: 'https://substack.com/@tomlesh',
    source: 'X',
  },
];

const sectionLabel = 'text-[11px] tracking-[0.1em] font-medium uppercase text-[#9CA3AF] mb-4 block';

function ArticleRow({
  title,
  date,
  description,
  href,
  source,
  borderTop = true,
}: {
  title: string;
  date: string;
  description: string;
  href: string;
  source: string;
  borderTop?: boolean;
}) {
  return (
    <div className={`py-5 ${borderTop ? 'border-t border-[var(--border)]' : ''}`}>
      <div className="flex items-start justify-between gap-4 mb-1">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] text-[#343D4D] dark:text-[#F5F0E8] hover:text-[#9CA3AF] transition-colors no-underline leading-snug"
        >
          {title} &#x2197;
        </a>
        <span className="text-[13px] text-[#9CA3AF] whitespace-nowrap mt-[3px] flex-shrink-0">
          {date}
        </span>
      </div>
      <p className="text-[14px] text-[#9CA3AF] leading-[1.6] mb-1">{description}</p>
      <span className="text-[11px] tracking-[0.08em] uppercase text-[#9CA3AF]">{source}</span>
    </div>
  );
}

export default function WritingPage() {
  return (
    <div>
      {/* Header */}
      <h1 className="text-[1.5rem] font-normal text-[#343D4D] dark:text-[#F5F0E8] mb-1">
        Writing
      </h1>
      <p className="text-[15px] text-[#9CA3AF] mb-2">
        Longer thoughts, published on X and Substack.
      </p>

      {/* Subscribe prompt */}
      <p className="text-[15px] text-[#9CA3AF] mb-10">
        I publish a series called Founder&apos;s Journey on Substack.{' '}
        Subscribe &rarr;{' '}
        <a
          href="https://substack.com/@tomlesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#343D4D] dark:text-[#F5F0E8] hover:text-[#9CA3AF] transition-colors no-underline"
        >
          substack.com/@tomlesh
        </a>
      </p>

      {/* Section 1: Long Form */}
      <div className="mb-10">
        <span className={sectionLabel}>Founder&apos;s Journey — Long Form</span>
        <div className="border-b border-[var(--border)]">
          {longForm.map((post, i) => (
            <ArticleRow key={post.href} {...post} borderTop={i === 0} />
          ))}
        </div>
      </div>

      {/* Section 2: Shorter Pieces */}
      <div>
        <span className={sectionLabel}>Notes and Shorter Pieces</span>
        <div className="border-b border-[var(--border)]">
          {shorterPieces.map((post, i) => (
            <ArticleRow key={post.href} {...post} borderTop={i === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}
