export type AudienceKey = 'any' | 'fintech' | 'saas-ai';

export type Audience = {
  key: AudienceKey;
  label: string;
  subLine: string;
  pill: string;
  proofOrder: readonly string[];
  serviceOrder: readonly string[];
  workOrder: 'payments-first' | 'beyond-first';
  contactHeading: string;
};

export const audiences: readonly Audience[] = [
  {
    key: 'any',
    label: 'Any product',
    subLine:
      'Co-founder and CTO at LINK GLOBAL, where I grew engineering from just me to four engineers and built payment systems that have moved three to four million dollars. I also help founders shape the idea before a line of code is written.',
    pill: 'Taking on: technical lead roles, product advisory, payment and corridor launches',
    proofOrder: ['3m', '1-to-4', '10plus', '1st'],
    serviceOrder: ['technical-lead', 'corridors-settlement'],
    workOrder: 'payments-first',
    contactHeading: "Building something new? Let's talk.",
  },
  {
    key: 'fintech',
    label: 'Fintech',
    subLine:
      'Co-founder and CTO at LINK GLOBAL. I designed the routing layer that moves money across 10+ corridors, and the payment systems I built have moved three to four million dollars.',
    pill: 'Taking on: corridor launches, same-day settlement, technical lead roles',
    proofOrder: ['3m', '10plus', '1st', '1-to-4'],
    serviceOrder: ['corridors-settlement', 'technical-lead'],
    workOrder: 'payments-first',
    contactHeading: "Building something that moves money? Let's talk.",
  },
  {
    key: 'saas-ai',
    label: 'SaaS and AI',
    subLine:
      'I take products from idea to first release: shaping the scope with the founder, choosing the architecture, and leading the engineers who build it. Five years doing this at LINK GLOBAL, plus SaaS and AI builds along the way.',
    pill: 'Taking on: technical lead roles, product advisory, zero-to-one builds',
    proofOrder: ['1-to-4', '3m', '1st', '10plus'],
    serviceOrder: ['technical-lead', 'corridors-settlement'],
    workOrder: 'beyond-first',
    contactHeading: "Building a SaaS or AI product? Let's talk.",
  },
] as const;

export function getAudience(key: string): Audience {
  return (audiences.find((a) => a.key === key) ?? audiences[0]) as Audience;
}

export function resolveAudienceKey(param: string | string[] | undefined): AudienceKey {
  const k = Array.isArray(param) ? param[0] : param;
  if (k === 'fintech' || k === 'saas-ai') return k;
  return 'any';
}
