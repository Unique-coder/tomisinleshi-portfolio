import type { Metadata } from 'next';
import { SITE_URL } from '../../../lib/site';
import { posts as linkedInPosts } from '../../../content/posts';
import { WritingTabs, type UnifiedPost } from '@/components/WritingTabs';

export const metadata: Metadata = {
  title: 'Writing — Tomisin Leshi',
  description:
    "Essays and notes on building payments, distribution, and African infrastructure. Published on Substack, LinkedIn and X.",
  alternates: { canonical: `${SITE_URL}/writing` },
};

// Static Substack posts shown as fallback and always included
const staticSubstack: UnifiedPost[] = [
  {
    title: "You're Building What You Want to Sell. Not What They Want to Buy.",
    date: '22 Mar 2026',
    description:
      'Why the reason customers buy is never the reason founders build, and what to do about it.',
    href: 'https://substack.com/@tomlesh/note/c-231661418',
    platform: 'substack',
  },
  {
    title: 'Understanding the Fear of Building.',
    date: '22 Mar 2026',
    description:
      'The structural reasons founders freeze, and why it is not a psychology problem.',
    href: 'https://substack.com/@tomlesh/note/c-230752077',
    platform: 'substack',
  },
  {
    title: "Founder's Journey Part 2: The First Mover Disadvantage.",
    date: '09 Jan 2026',
    description: 'Why being first is not the advantage most founders think it is.',
    href: 'https://substack.com/@tomlesh/note/p-183835467',
    platform: 'substack',
  },
  {
    title: "Founder's Journey",
    date: '15 Dec 2025',
    description:
      'The opening piece. Why I started writing about building, and what I am trying to figure out.',
    href: 'https://substack.com/@tomlesh/note/p-180068781',
    platform: 'substack',
  },
];

const xPosts: UnifiedPost[] = [
  {
    title: 'Building Fast in the AI Space.',
    date: 'Pinned',
    description: 'A quick breakdown of what speed actually means when building with AI.',
    href: 'https://twitter.com/TommLesh',
    platform: 'x',
  },
];

async function fetchSubstackPosts(): Promise<UnifiedPost[]> {
  try {
    const res = await fetch('https://tomlesh.substack.com/feed', {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return staticSubstack;
    const xml = await res.text();
    const items = xml.match(/<item>([\s\S]*?)<\/item>/g)?.slice(0, 6) ?? [];
    if (!items.length) return staticSubstack;
    const rssItems = items.map((item): UnifiedPost => {
      const title = (
        item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1] ??
        item.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? ''
      ).trim();
      const href =
        item.match(/<link>(https?:\/\/[^\s<]+)<\/link>/)?.[1] ??
        'https://tomlesh.substack.com';
      const rawDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? '';
      const date = rawDate
        ? new Date(rawDate).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric',
          })
        : '';
      const rawDesc = (
        item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1] ?? ''
      ).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const description =
        rawDesc.length > 140 ? rawDesc.slice(0, 140).trimEnd() + '…' : rawDesc;
      return { title, date, description, href, platform: 'substack' };
    });
    // Merge: prefer RSS, fill any not-yet-in-RSS from static (by URL)
    const rssUrls = new Set(rssItems.map((p) => p.href));
    const extra = staticSubstack.filter((p) => !rssUrls.has(p.href));
    return [...rssItems, ...extra];
  } catch {
    return staticSubstack;
  }
}

export default async function WritingPage() {
  const substackPosts = await fetchSubstackPosts();

  const allPosts: UnifiedPost[] = [
    ...substackPosts,
    ...linkedInPosts.map((p) => ({
      title: p.title,
      date: '',
      description: p.hook,
      href: p.url,
      platform: 'linkedin' as const,
      impressions: p.impressions,
    })),
    ...xPosts,
  ];

  return (
    <div>
      <h1 className="text-[1.75rem] font-semibold text-[#343D4D] dark:text-[#F5F0E8] mb-2">
        Writing
      </h1>
      <p className="text-[15px] text-[var(--muted)] mb-8 max-w-[56ch]">
        Longer thoughts on building payments, distribution, and infrastructure in Africa.
      </p>

      <WritingTabs posts={allPosts} />
    </div>
  );
}
