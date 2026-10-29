export type Question = {
  id: string;
  chip: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
};

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
    id: 'zero-to-one',
    chip: 'How do you take a product from zero to one?',
    answer:
      'I start with the customer and the problem, not the code. We cut the idea to the smallest version someone would pay for, pick a stack the team can run, then build in short releases. At LINK that took us from a v1 retail app to an API platform.',
    linkText: 'See services',
    linkHref: '#services',
  },
  {
    id: 'help-product',
    chip: 'Can you help my product or team?',
    answer:
      'Yes, if it is early and moving. I take on a small number of lead and advisory projects each quarter, across fintech, SaaS and AI. The fastest way to find out is a short call.',
    linkText: 'Book a call',
    linkHref: '#contact',
  },
  {
    id: 'working-with-you',
    chip: 'What does working with you look like?',
    answer:
      'Every project starts small: a short call, then a fixed first step like a one-week product sprint or a corridor plan. You get something written and useful before you commit to a full build.',
    linkText: 'See services',
    linkHref: '#services',
  },
] as const;
