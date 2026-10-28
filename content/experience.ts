export type LINKRole = {
  title: string;
  years: string;
  bullets: readonly string[];
};

export type Company = {
  name: string;
  role: string;
  years: string;
};

export type Education = {
  school: string;
  degree: string;
  years: string;
};

// LINK progression — 4 roles, earliest first
export const linkRoles: readonly LINKRole[] = [
  {
    title: 'Frontend Engineer',
    years: '2021',
    bullets: [
      'First hire. Built the early product UI and internal tooling.',
    ],
  },
  {
    title: 'Full-stack Engineer',
    years: '2021 to 2022',
    bullets: [
      'Shipped the first working corridors: NGN to GHS and NGN to KES.',
      'Moved to backend as the routing layer became the core product.',
    ],
  },
  {
    title: 'Lead Engineer',
    years: '2022 to 2023',
    bullets: [
      'Built the Stellar SEP-24 anchor and naira stablecoin across five networks.',
      'Designed the multi-corridor routing architecture.',
    ],
  },
  {
    title: 'Co-founder and CTO',
    years: '2023 to now',
    bullets: [
      'Built and scaled the routing layer and public API from zero to $3M+ moved.',
      'Led all technical decisions, hiring, and product direction.',
    ],
  },
] as const;

export const otherCompanies: readonly Company[] = [
  { name: 'Strich Inc',      role: 'Software Engineer',   years: '[TODO: year]' },
  { name: 'himylink AI',     role: 'Software Engineer',   years: '[TODO: year]' },
  { name: 'Cyprus Robotics', role: 'Software Engineer',   years: '[TODO: year]' },
] as const;

export const education: readonly Education[] = [
  { school: '[TODO: University]', degree: '[TODO: Degree]', years: '[TODO: Years]' },
] as const;
