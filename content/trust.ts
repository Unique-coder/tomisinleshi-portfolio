export type TrustItem = {
  name: string;
  slug: string;
  note: string;
  href?: string;
};

export const trustItems: readonly TrustItem[] = [
  {
    name: 'Stellar Community Fund',
    slug: 'stellar',
    note: '3 grants',
    href: 'https://communityfund.stellar.org/project/link-io-ypz',
  },
  {
    name: 'XRPL Grants',
    slug: 'xrpl',
    note: 'grant awardee',
    href: 'https://xrplgrants.org',
  },
  {
    name: 'Base',
    slug: 'base',
    note: '1st place, Base Batch',
    href: 'https://devfolio.co/projects/checkout-by-link-f763',
  },
  // [CONFIRM] Beans — hidden until confirmed
] as const;

// [CONFIRM] quote — hidden until filled
export const trustQuote: { quote: string; name: string; role: string } | null = null;
