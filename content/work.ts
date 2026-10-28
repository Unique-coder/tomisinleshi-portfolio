export type WorkItem = {
  slug: string;
  name: string;
  role: string;
  years?: string;
  status: 'live' | 'in progress';
  featured: boolean;
  problem?: string;
  built: readonly string[];
  result?: string;
  stack: readonly string[];
  link?: string;
  diagram?: boolean;
};

export const work: readonly WorkItem[] = [
  {
    slug: 'link-routing-api',
    name: 'LINK routing layer and public API',
    role: 'Co-founder and CTO, LINK GLOBAL',
    years: '2023 to now',
    status: 'live',
    featured: true,
    problem:
      'No single payment provider is best in every corridor. Most teams integrate one provider per market and rebuild for every new country.',
    built: [
      'A multi-corridor routing layer that picks the best provider for each currency pair, instead of one provider per market.',
      'A metered public API: rate limiting, balance tracking, call metrics, and on-ramp and off-ramp transaction tracking for partners.',
      'Modular corridor activation: one config file turns on a new currency, so adding a corridor takes days, not months.',
      'Reliability rules the team builds to: guaranteed webhook delivery, reconciliation that closes without manual work, settlement paths that survive a provider failing mid-flow.',
    ],
    result: 'Three to four million dollars has moved through what we built.',
    stack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Stellar', 'AWS'],
    link: 'https://linkio.world',
    diagram: true,
  },
  {
    slug: 'stellar-sep24-anchor',
    name: 'Stellar SEP-24 anchor',
    role: 'Engineering, LINK GLOBAL',
    status: 'live',
    featured: true,
    problem:
      'Wallets in Nigeria needed a compliant way for users to move between naira and digital dollars.',
    built: [
      'A SEP-24 anchor on Stellar handling interactive deposit and withdrawal flows between NGN and stablecoins, with KYC built in.',
    ],
    result: 'Helped partner wallet Beans onboard 3,000+ Nigerian users through NGN on-ramp and off-ramp.',
    stack: ['Python', 'Django', 'PostgreSQL', 'Stellar (SEP-24)'],
  },
  {
    slug: 'naira-stablecoin',
    name: 'Naira-backed stablecoin',
    role: 'Engineering, LINK GLOBAL',
    status: 'live',
    featured: true,
    problem: 'Moving naira on-chain meant converting to dollars first.',
    built: [
      'A naira-backed stablecoin issued across five networks: Stellar, Ethereum, Polygon, Arbitrum and Base.',
    ],
    result: '$2M+ in on-chain volume.',
    stack: ['Stellar', 'Polugon', 'Solidity/EVM', 'Node.js'],
  },
  {
    slug: 'bridgecore',
    name: 'BridgeCore',
    role: 'Lead, LINK GLOBAL',
    status: 'in progress',
    featured: false,
    built: [
      'An event-driven payments core: API to worker handoff over Kafka, the outbox pattern so no event is lost, and an idempotency layer so no payment runs twice.',
    ],
    stack: ['TypeScript', 'Hono', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Turborepo'],
  },
  {
    slug: 'checkout-by-link',
    name: 'Checkout by LINK',
    role: 'Engineering, LINK GLOBAL',
    status: 'live',
    featured: false,
    built: [
      'On-chain merchant checkout so businesses can take payment in stablecoins instead of fiat, on Base and Solana.',
    ],
    result: '1st place, Base Batch hackathon Europe.',
    stack: ['TypeScript', 'Base', 'Solana'],
    link: 'https://devfolio.co/projects/checkout-by-link-f763',
  },
];
