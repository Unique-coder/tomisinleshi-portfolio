export type Service = {
  slug: string;
  title: string;
  pain: string;
  forWho: string;
  outcomes: readonly string[];
  doneBefore: { text: string; href: string };
  start: string;
  modes?: string;
  priceNote?: string;
  ctaLabel: string;
};

export const services: readonly Service[] = [
  {
    slug: 'technical-lead',
    title: 'A technical lead for your zero-to-one product',
    pain: 'You have an idea or an early product, but nobody owns the technical decisions, the team and the roadmap. Things get built, but not the right things, and not in the right order.',
    forWho: 'Founders building fintech, SaaS or AI products without a CTO, and teams between engineering leads.',
    outcomes: [
      'The idea shaped into a first version worth building: the customer, the problem, and what to cut.',
      'Architecture and stack decisions made early and written down, so the team is not guessing.',
      'Your first engineers hired, mentored and working to clear review and release habits.',
      'Version one shipped, with a roadmap for what comes next.',
    ],
    doneBefore: {
      text: "Done before: grew LINK's engineering team from just me to four, led the product from a v1 retail app to an API platform, and took Warmline from idea to a live product.",
      href: '#path',
    },
    start:
      'Start with a one-week product and architecture sprint: a written scope, a build plan and a team plan you keep either way.',
    modes: 'Fractional lead (part-time) or advisory sessions.',
    ctaLabel: 'Talk about your product',
  },
  {
    slug: 'corridors-settlement',
    title: 'Launch payments in new markets, and settle the same day',
    pain: 'Every new market means a new bank partner, a new compliance flow and a new payout integration. Then money sits pre-funded in each country, and weekend payments wait until Monday.',
    forWho:
      'Fintechs, wallets, marketplaces and SaaS products adding payments in new countries, in Africa or anywhere else.',
    outcomes: [
      'A corridor plan: which providers, which settlement path, which compliance steps.',
      'On-ramp, off-ramp and liquidity provider integration, built and tested.',
      'Routing that switches provider when one fails, so payments keep moving.',
      'Stablecoin settlement and treasury flows that turn digital dollars into local money, any day of the week.',
    ],
    doneBefore: {
      text: 'Done before: LINK routing layer, $3M+ moved across 10+ corridors; a naira stablecoin with $2M+ on-chain volume; a Stellar anchor that onboarded 3,000+ users.',
      href: '#work-link-routing',
    },
    start: 'Start with a one-week corridor plan.',
    ctaLabel: 'Plan a market launch',
  },
] as const;
