export type StackGroup = {
  label: string;
  items: readonly string[];
};

export const stack: readonly StackGroup[] = [
  { label: 'Languages',           items: ['TypeScript', 'Python', 'JavaScript'] },
  { label: 'Backend',             items: ['Node.js', 'Express', 'Hono', 'Django'] },
  { label: 'Data and messaging',  items: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Prisma'] },
  { label: 'Infrastructure',      items: ['Docker', 'AWS', 'GitHub Actions', 'Nginx', 'Turborepo'] },
  { label: 'Payments and chains', items: ['Stellar', 'Solidity', 'Base', 'Solana'] },
  { label: 'Frontend',            items: ['Next.js', 'React', 'Tailwind CSS'] },
  { label: 'AI integration',      items: ['Claude API', 'OpenAI API', 'LangChain'] },
] as const;

export const stackPatterns =
  'Most payment bugs live in the gaps: between your API and the provider, between an event and its handler, between what you log and what actually happened. The stack I reach for makes those gaps visible.';
