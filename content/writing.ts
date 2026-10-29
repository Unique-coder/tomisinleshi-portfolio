// Static Substack posts — used on both the homepage writing section and the /writing page.
// Ordered most recent first.
export type SubstackPost = {
  title: string;
  date: string;
  description: string;
  href: string;
};

export const substackPosts: readonly SubstackPost[] = [
  {
    title: "You're Building What You Want to Sell. Not What They Want to Buy.",
    date: '22 Mar 2026',
    description:
      'Why the reason customers buy is never the reason founders build, and what to do about it.',
    href: 'https://substack.com/@tomlesh/note/c-231661418',
  },
  {
    title: 'Understanding the Fear of Building.',
    date: '22 Mar 2026',
    description:
      'The structural reasons founders freeze, and why it is not a psychology problem.',
    href: 'https://substack.com/@tomlesh/note/c-230752077',
  },
  {
    title: "Founder's Journey Part 2: The First Mover Disadvantage.",
    date: '09 Jan 2026',
    description: 'Why being first is not the advantage most founders think it is.',
    href: 'https://substack.com/@tomlesh/note/p-183835467',
  },
  {
    title: "Founder's Journey",
    date: '15 Dec 2025',
    description:
      'The opening piece. Why I started writing about building, and what I am trying to figure out.',
    href: 'https://substack.com/@tomlesh/note/p-180068781',
  },
] as const;
