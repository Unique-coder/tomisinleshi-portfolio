import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Worldview — Tomisin Leshi',
};

const principles = [
  {
    title: 'First principles over convention',
    body: "Strip problems to fundamentals. Understand what something actually is before deciding what to do about it. Convention is someone else's shortcut. First principles thinking is slower and harder, but it gets to truth.",
  },
  {
    title: 'Distribution is rarer than building ability',
    body: "Most founders can build. Almost nobody knows how to get people to care. I think about both. A product without distribution is a hobby. Distribution without a product is fraud. The overlap is where the business lives.",
  },
  {
    title: 'Infrastructure over consumer apps',
    body: "The companies that own infrastructure don't compete. They collect rent. Stripe doesn't compete with apps built on it. AWS doesn't compete with startups running on it. They sit underneath. Invisible. Essential. In Africa, most of that layer doesn't exist yet. Whoever builds it won't just own a product. They'll own the floor.",
  },
  {
    title: 'Build for yourself first, then offer the tool',
    body: "Don't sell infrastructure to people who don't want it. Use it for your own business, generate real results, let outcomes drive adoption. The best proof of a product is a founder who depends on it.",
  },
  {
    title: 'Systems over luck',
    body: "Rules, feedback loops, and systems that work without you. Whether it's trading discipline, content generation, or product validation. I build enforcement mechanisms, not aspirations. Luck is noise. Systems are signal.",
  },
  {
    title: 'Simplicity wins where complexity struggles',
    body: "Almost every founder I've observed built something comprehensive and struggled to get adoption. The ones that worked were narrow, simple, and distribution-first. Complexity is a feature you pay for with attention. Most markets won't pay.",
  },
  {
    title: 'Your brand is a filing cabinet',
    body: "When someone has a problem, their brain searches for a name. The people who win that search didn't get there by being the best. They got there by showing up in one specific drawer, consistently, until the association became automatic. The narrower the drawer, the faster you own it.",
  },
];

export default function WorldviewPage() {
  return (
    <div>
      {/* Header */}
      <h1 className="text-[1.5rem] font-normal text-[#343D4D] dark:text-[#F5F0E8] mb-1">
        Worldview
      </h1>
      <p className="text-[15px] text-[#9CA3AF] mb-10">
        Operating principles. How I see the game.
      </p>

      {/* Principles */}
      <div>
        {principles.map((p, i) => (
          <div key={i}>
            {i > 0 && (
              <hr className="border-t border-[#E5E7EB] dark:border-[#4A5568] my-8" />
            )}
            <h3 className="text-[16px] font-semibold text-[#343D4D] dark:text-[#F5F0E8] mb-3">
              {p.title}
            </h3>
            <p className="text-[16px] text-[#343D4D] dark:text-[#F5F0E8] leading-[1.8]">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
