export type Service = {
  slug: string;
  title: string;
  pain: string;
  forWho: string;
  outcomes: readonly string[];
  doneBefore: { text: string; href: string };
  start: string;
  priceNote?: string;
  ctaLabel: string;
};

export const services: readonly Service[] = [
  {
    slug: "corridor-launch",
    title:
      "Launch a new African corridor in weeks, not months",
    pain: "Every new country means a new bank partner, a new compliance flow and a new payout integration. Three to six months before a single user can send money.",
    forWho:
      "Wallets, exchanges and fintechs expanding beyond one market.",
    outcomes: [
      "A corridor plan: which providers, which settlement path, which compliance steps.",
      "On-ramp, off-ramp and liquidity provider integration, built and tested.",
      "Routing that switches provider when one fails, so payments keep moving.",
    ],
    doneBefore: {
      text: "Done before: LINK routing layer, $3M+ moved across 10+ corridors",
      href: "#work-link-routing",
    },
    start: "Start with a one-week corridor plan.",
    ctaLabel: "Plan a corridor",
  },
  {
    slug: "stablecoin-settlement",
    title:
      "Settle same day without parking cash in every market",
    pain: "Pre-funding accounts in each country ties up money you could be using, and weekend payments wait until Monday.",
    forWho:
      "Teams paying suppliers, users or partners across borders.",
    outcomes: [
      "Stablecoin settlement designed on Stellar or Solana, with the right anchor and wallet flows.",
      "Treasury and conversion flows that turn stablecoins into local money.",
      "A working first version, shipped and tested end to end.",
    ],
    doneBefore: {
      text: "Done before: naira stablecoin with $2M+ on-chain volume, and a Stellar anchor that onboarded 3,000+ users",
      href: "#work-stablecoin",
    },
    start: "Start with a two-week testnet prototype.",
    ctaLabel: "Talk settlement",
  },
  {
    slug: "architecture-review",
    title: "Find the payment bugs before your users do",
    pain: "Lost webhooks, double charges and reconciliation by hand usually show up right after launch or right before a raise.",
    forWho:
      "Early fintech teams before a raise, launch or big rebuild.",
    outcomes: [
      "A written review of your payment system and its risks.",
      "A clear fix list, ranked by what can lose money first.",
      "Hands-on help guiding or hiring your first engineers.",
    ],
    doneBefore: {
      text: "Done before: LINK's reliability rules and BridgeCore's no-lost-event, no-double-payment design",
      href: "#work-bridgecore",
    },
    start:
      "Start with a one-week review and a written report.",
    ctaLabel: "Book a review",
  },
] as const;
