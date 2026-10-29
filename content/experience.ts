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

// LINK GLOBAL progression — 4 roles, earliest first
// Both ExperienceSection and CVLayout reverse this array for display (latest first).
export const linkRoles: readonly LINKRole[] = [
  {
    title: 'Frontend developer',
    years: 'Aug 2021 to Apr 2022',
    bullets: [
      'Built the product\'s first customer-facing screens, including onboarding and transaction flows for the v1 retail web app.',
    ],
  },
  {
    title: 'Full stack engineer',
    years: 'Apr 2022 to Jul 2023',
    bullets: [
      'Moved the v1 retail product onto the upgraded platform through an API service.',
      'Set up the architecture and code review practices the team still uses.',
      'Acted as the bridge between founding decisions and day-to-day delivery.',
    ],
  },
  {
    title: 'Technical lead',
    years: 'Jul 2023 to Dec 2023',
    bullets: [
      'Secured three Stellar Community Fund grants for infrastructure work.',
      'Sat in on provider and partner negotiations and architecture reviews.',
    ],
  },
  {
    title: 'Co-founder and CTO',
    years: 'Dec 2023 to now',
    bullets: [
      'Own the technical direction of the payments platform: architecture, infrastructure, reliability and the engineering roadmap.',
      'Designed the routing layer that picks the best provider for each currency pair. Three to four million dollars has moved through it.',
      'Grew the engineering team from just me to four engineers across backend, frontend and security.',
    ],
  },
] as const;

// Strich, Inc and himylink AI overlap with early LINK roles — this matches LinkedIn.
export const otherCompanies: readonly Company[] = [
  { name: 'Strich, Inc',     role: 'Backend engineer',                   years: 'Feb 2022 to Jul 2022' },
  { name: 'himylink AI',     role: 'Full stack engineer, part-time',      years: 'Aug 2021 to Dec 2021' },
  { name: 'Cyprus Robotics', role: 'Junior software engineer, part-time', years: 'Nov 2020 to Apr 2021' },
] as const;
