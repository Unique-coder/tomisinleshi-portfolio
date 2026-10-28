export type LinkedInPost = {
  title: string;
  hook: string;       // one-line hook shown as the summary
  impressions: string;
  url: string;
};

export const posts: readonly LinkedInPost[] = [
  {
    title: 'Stablecoins have gone deep in Nigeria',
    hook: "I was at a beach in Lagos. I told him I didn't have cash. He said: Transfer. Or USDT, I get wallet.",
    impressions: '17.9K',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7516792660746141696/',
  },
  {
    title: 'Pattern recognition is the actual function',
    hook: 'Someone asked me what I do for a living. I said software engineer. Then I stopped.',
    impressions: '16K',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7440683699265896448/',
  },
  {
    title: "What land tokenization can and can't fix in Nigeria",
    hook: 'My uncle bought land in Abuja. He was almost done with the roofing. Then someone demolished it and said the land was his.',
    impressions: '11.7K',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7519337169350721536/',
  },
] as const;
