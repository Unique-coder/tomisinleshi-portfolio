export type WorkItem = {
  slug: string;
  anchorId?: string;
  name: string;
  role: string;
  years?: string;
  status: 'live' | 'in progress' | 'validation' | 'framework' | 'completed' | 'hackathon';
  group: 'payments' | 'beyond';
  featured: boolean;
  problem?: string;
  built: readonly string[];
  result?: string;
  stack: readonly string[];
  link?: string;
  diagram?: boolean;
};

export const work: readonly WorkItem[] = [
  // ── Group A: Payments infrastructure ─────────────────────────────────
  {
    slug: 'link-routing-api',
    anchorId: 'work-link-routing',
    name: 'LINK routing layer and public API',
    role: 'Co-founder and CTO, LINK GLOBAL',
    years: '2023 to now',
    status: 'live',
    group: 'payments',
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
    group: 'payments',
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
    anchorId: 'work-stablecoin',
    name: 'Naira-backed stablecoin',
    role: 'Engineering, LINK GLOBAL',
    status: 'live',
    group: 'payments',
    featured: true,
    problem: 'Moving naira on-chain meant converting to dollars first.',
    built: [
      'A naira-backed stablecoin issued across five networks: Stellar, Ethereum, Polygon, Arbitrum and Base.',
    ],
    result: '$2M+ in on-chain volume.',
    stack: ['Stellar', 'Polygon', 'Solidity/EVM', 'Node.js'],
  },
  {
    slug: 'bridgecore',
    anchorId: 'work-bridgecore',
    name: 'BridgeCore',
    role: 'Lead, LINK GLOBAL',
    status: 'in progress',
    group: 'payments',
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
    group: 'payments',
    featured: false,
    built: [
      'On-chain merchant checkout so businesses can take payment in stablecoins instead of fiat, on Base and Solana.',
    ],
    result: '1st place, Base Batch hackathon Europe.',
    stack: ['TypeScript', 'Base', 'Solana'],
    link: 'https://devfolio.co/projects/checkout-by-link-f763',
  },

  // ── Group B: Beyond payments ──────────────────────────────────────────
  {
    slug: 'warmline',
    name: 'Warmline',
    role: '',
    status: 'live',
    group: 'beyond',
    featured: false,
    built: [
      'AI-written outreach for founders who have not hired sales yet. Every message is reviewed by a person before it sends, so it reads like the founder wrote it.',
    ],
    stack: ['TypeScript', 'PostgreSQL (Neon)', 'Resend', 'AI'],
    link: 'https://warmline.lovable.app',
  },
  {
    slug: 'voyza',
    name: 'Voyza',
    role: '',
    status: 'validation',
    group: 'beyond',
    featured: false,
    built: [
      'Travel planning for African passport holders: destinations you can actually get a visa for, flights that fit your budget, and hotel bookings for your visa application. Waitlist open.',
    ],
    stack: ['TypeScript', 'React', 'AI'],
    link: 'https://voyza-path.lovable.app',
  },
  {
    slug: 'property-management-platform',
    name: 'Property management platform',
    role: '',
    status: 'framework',
    group: 'beyond',
    featured: false,
    built: [
      'Designed the skeleton framework for a property and facility management platform: the data model, user roles, KYB onboarding and the module structure for facilities, tenants and invoicing.',
    ],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    slug: 'himylink-ai-dashboard',
    name: 'himylink AI dashboard',
    role: '',
    status: 'completed',
    group: 'beyond',
    featured: false,
    built: [
      'Built Python/Django endpoints for an AI business dashboard serving 2K+ concurrent users. Shipped and handed over in 2021.',
    ],
    stack: ['Python', 'Django'],
  },
  {
    slug: 'stellarbrief',
    name: 'StellarBrief',
    role: '',
    status: 'hackathon',
    group: 'beyond',
    featured: false,
    built: [
      'Hackathon project for Stellar Hacks: Agents. An AI agent that pays for data per request with x402 micropayments, built with the Claude SDK and tested on Stellar testnet.',
    ],
    stack: ['TypeScript', 'Express', 'Claude SDK', 'Stellar'],
  },
];
