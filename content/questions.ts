export type Question = {
  id: string;
  chip: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
};

// TODO: review each answer before publishing
export const questions: readonly Question[] = [
  {
    id: 'building-now',
    chip: 'What are you building right now?',
    answer:
      'At LINK we are scaling a multi-corridor routing layer and public API that partners use to move money across 10+ African payment corridors without integrating each provider themselves. We are also building BridgeCore: an event-driven payments core designed so no payment is ever lost and no transaction runs twice.',
    linkText: 'See the work',
    linkHref: '#work',
  },
  {
    id: 'payment-corridor',
    chip: 'How does a payment corridor work?',
    answer:
      'A corridor is a route between two currencies: you send NGN and the recipient receives KES. Our routing layer evaluates multiple providers in real time, picks the best one for that pair, and handles settlement, reconciliation, and webhook delivery. The same system works across 10+ corridors without you changing your integration.',
    linkText: 'See how we built it',
    linkHref: '#work',
  },
  {
    id: 'help-fintech',
    chip: 'Can you help my fintech?',
    answer:
      'Yes. I take on a small number of builds and advisory projects each quarter: cross-border rails, stablecoin settlement products, and architecture reviews for teams before a raise or launch. The fastest way to find out is a short call.',
    linkText: 'Book a call',
    linkHref: '#contact',
  },
  {
    id: 'working-with-you',
    chip: 'What does working with you look like?',
    answer:
      'Every project starts small: a short call, then a fixed first step like a one-week review or a corridor plan. You get something written and useful before you commit to a full build.',
    linkText: 'See services',
    linkHref: '#services',
  },
] as const;
