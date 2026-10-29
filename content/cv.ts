export type CVVariant = 'payments' | 'backend' | 'fullstack' | 'product-engineer';

export type CVVariantData = {
  variant: CVVariant;
  slug: string;
  label: string;
  positioning: string;
  valueInsight: string;
  proofOfWork: readonly string[];
  linkTitle: string;
};

export type Education = {
  institution: string;
  qualification: string;
  years: string;
  activities?: string;
};

// Most recent first
export const education: readonly Education[] = [
  {
    institution: 'Nile University of Nigeria',
    qualification: 'Executive Development Programs, Architectural and Building Sciences',
    years: 'Oct 2026 to 2027',
  },
  {
    institution: 'Alchemy University',
    qualification: 'Blockchain, Web3 Developer',
    years: 'Jan 2023 to Jul 2023',
  },
  {
    institution: 'Eastern Mediterranean University',
    qualification: 'Bachelor of Engineering, Computer Software Engineering',
    years: '2017 to 2021',
    activities: 'Robotics, basketball, Dance',
  },
] as const;

// TODO: review all copy before publishing
export const cvVariants: readonly CVVariantData[] = [
  {
    variant: 'payments',
    slug: '',
    label: 'Payments engineer',
    positioning:
      'Payment infrastructure engineer. Five years at LINK building the systems that move money across African borders.',
    valueInsight:
      'I build at the layer most engineers do not see: the payment corridor. The gap between what a provider API promises and what reliably reaches the recipient is where I work. At LINK GLOBAL I designed the routing architecture, wrote the reconciliation logic, and grew the team from just me to four engineers, and built the routing layer that has moved three to four million dollars across 10+ corridors.',
    proofOfWork: [
      '$270K+ in Stellar Community Fund grants across 3 awards, for building compliant cross-border payment infrastructure.',
      'Built and scaled the LINK GLOBAL routing layer from zero to $3M+ moved across 10+ African payment corridors.',
      'Designed and shipped a SEP-24 anchor on Stellar that onboarded 3,000+ Nigerian users through NGN on-ramp and off-ramp.',
      'Issued a naira-backed stablecoin across five networks: Stellar, Ethereum, Polygon, Arbitrum and Base, with $2M+ in on-chain volume.',
      '1st place, Base Batch hackathon Europe, for Checkout by LINK GLOBAL: on-chain merchant checkout on Base and Solana.',
    ],
    linkTitle: 'Co-founder and CTO',
  },
  {
    variant: 'backend',
    slug: 'backend',
    label: 'Backend engineer',
    positioning: 'Backend engineer. Five years at LINK building the systems that move money across African borders.',
    valueInsight:
      'I specialise in the reliability layer: event-driven systems, outbox patterns, idempotency guarantees, and corridor routing that survives a provider failing mid-flow. I design the architecture, write the code, and operate what I ship.',
    proofOfWork: [
      'Designed a multi-corridor routing layer that evaluates providers in real time and handles guaranteed webhook delivery, reconciliation, and settlement failover.',
      'Built BridgeCore: an event-driven payments core using Kafka, the outbox pattern, and an idempotency layer so no payment runs twice.',
      '$270K+ in Stellar Community Fund grants for building compliant cross-border payment infrastructure.',
      'Shipped a SEP-24 anchor on Stellar handling interactive deposit and withdrawal flows, with KYC built in.',
      'Issued a naira-backed stablecoin on Stellar, Ethereum, Polygon, Arbitrum and Base, with $2M+ in on-chain volume.',
    ],
    linkTitle: 'Engineering Lead', // TODO: confirm title with Tomisin
  },
  {
    variant: 'fullstack',
    slug: 'fullstack',
    label: 'Full-stack engineer',
    positioning:
      'Full-stack engineer. Five years at LINK building the systems that move money across African borders.',
    valueInsight:
      'I joined LINK GLOBAL on the frontend. As the routing layer became the product, I moved to backend, designed the multi-corridor architecture, and ended up leading all technical decisions. I ship from API design to the React dashboard.',
    proofOfWork: [
      'Built the product UI and internal tooling, then moved to backend as the routing layer became the core product.',
      'Designed the multi-corridor routing architecture that now handles 10+ corridors, including NGN, GHS, KES and ZAR.',
      '$270K+ in Stellar Community Fund grants for building compliant cross-border payment infrastructure.',
      '1st place, Base Batch hackathon Europe, for Checkout by LINK GLOBAL: on-chain merchant checkout on Base and Solana.',
    ],
    linkTitle: 'Engineering Lead', // TODO: confirm title with Tomisin
  },
  {
    variant: 'product-engineer',
    slug: 'product-engineer',
    label: 'Product engineer',
    positioning: 'Product engineer. Five years at LINK building the systems that move money across African borders.',
    valueInsight:
      'I have been the founding engineer, the technical lead, and the co-founder of a payments company. I know which decisions matter for a product launch and which can wait. At LINK GLOBAL I built the routing layer, shipped the corridors, and grew the team from founding engineer to co-founder. The routing layer has moved three to four million dollars across 10+ corridors.',
    proofOfWork: [
      'Grew from founding engineer to co-founder at LINK GLOBAL: built the product, scaled the team, and drove all technical direction.',
      'Built and scaled the routing layer and public API from zero to $3M+ moved across 10+ African payment corridors.',
      '$270K+ in Stellar Community Fund grants for building compliant cross-border payment infrastructure.',
      '1st place, Base Batch hackathon Europe, for Checkout by LINK GLOBAL: on-chain merchant checkout on Base and Solana.',
      'Designed and shipped a SEP-24 anchor that onboarded 3,000+ Nigerian users through NGN on-ramp and off-ramp.',
    ],
    linkTitle: 'Co-founder and CTO',
  },
] as const;

export function getCVVariant(slug: string): CVVariantData {
  return cvVariants.find((v) => v.slug === slug) ?? cvVariants[0];
}
