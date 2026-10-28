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
    title: 'Technical Lead Engineer',
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
  { name: 'Strich Inc',      role: 'Backend Engineer',         years: 'Feb 2022 – Jul 2022' },
  { name: 'himylink AI',     role: 'Full Stack Engineer',      years: 'Aug 2021 – Dec 2021' },
  { name: 'Cyprus Robotics', role: 'Junior Software Engineer', years: 'Nov 2020 – Apr 2021' },
] as const;
