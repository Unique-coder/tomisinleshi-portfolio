export type Post = {
  title: string;
  date: string;
  summary: string;
  url: string;
};

// Shown only when the Substack RSS fetch fails
export const fallbackPosts: Post[] = [
  {
    title: 'How payment routing actually works in African markets',
    date: '1 Jan 2025',
    summary: 'A breakdown of how money moves across corridors and why no single provider wins every route.',
    url: 'https://tomlesh.substack.com',
  },
  {
    title: 'Stablecoins as settlement rails',
    date: '15 Dec 2024',
    summary: 'Why stablecoins are becoming the default settlement layer for African cross-border payments.',
    url: 'https://tomlesh.substack.com',
  },
  {
    title: 'What I learned building a multi-corridor payment API',
    date: '1 Dec 2024',
    summary: 'The technical and business lessons from shipping a public payments API from Lagos.',
    url: 'https://tomlesh.substack.com',
  },
];
