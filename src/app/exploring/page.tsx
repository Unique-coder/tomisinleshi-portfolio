import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exploring — Tomisin Leshi',
};

const attentionItems = [
  'How trust moves in systems before contracts do',
  'Stablecoin adoption patterns in frontier markets',
  'Where the moat is invisible (not in the code, but in what the code sits on)',
  'The gap between what founders think they\'re building and what the market actually needs',
];

export default function ExploringPage() {
  return (
    <div>
      {/* Header */}
      <h1 className="text-[1.5rem] font-normal text-[#343D4D] dark:text-[#F5F0E8] mb-1">
        Exploring
      </h1>
      <p className="text-[15px] text-[#9CA3AF] mb-10">
        What I&apos;m thinking about. Where I&apos;m placing bets.
      </p>

      {/* Section 1 */}
      <div className="mb-10">
        <h2 className="text-[16px] font-semibold text-[#343D4D] dark:text-[#F5F0E8] mb-4">
          The infrastructure bet
        </h2>
        <div className="flex flex-col gap-4 leading-[1.8] text-[16px] text-[#343D4D] dark:text-[#F5F0E8]">
          <p>
            Every major economy was built on the layer that came before the products.
            Roads. Energy grids. Banking systems. Africa is in that moment right now,
            and the layer being built is financial rails.
          </p>
          <p>
            Cross-border payments, stablecoin corridors, programmable money across
            African currencies. The builders getting this right aren&apos;t just building
            companies. They&apos;re setting the foundation for the next 30 years of
            economic activity across the continent.
          </p>
          <p>This is what LINK is. Not a fintech product. A foundational layer.</p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mb-10">
        <h2 className="text-[16px] font-semibold text-[#343D4D] dark:text-[#F5F0E8] mb-4">
          Kingdom financing
        </h2>
        <div className="flex flex-col gap-4 leading-[1.8] text-[16px] text-[#343D4D] dark:text-[#F5F0E8]">
          <p>
            There is a version of wealth and building that is not separated from
            purpose. The resources, the infrastructure, the systems. All of it can
            be aligned to something that outlasts any single company or founder.
          </p>
          <p>
            That&apos;s the lens I bring to what I build and what I back. Returns matter.
            So does what the returns are in service of.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="mb-10">
        <h2 className="text-[16px] font-semibold text-[#343D4D] dark:text-[#F5F0E8] mb-4">
          What I&apos;m paying attention to
        </h2>
        <div className="flex flex-col gap-3 leading-[1.8] text-[16px] text-[#343D4D] dark:text-[#F5F0E8]">
          {attentionItems.map((item) => (
            <p key={item} className="pl-2">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
