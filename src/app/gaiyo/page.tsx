import type { Metadata } from 'next';
import Collapsible from '@/components/Collapsible';

export const metadata: Metadata = {
  title: 'Story — Tomisin Leshi',
};

const accomplishments = [
  {
    title: 'Three-time Stellar Community Fund awardee',
    detail: 'SCF #10 · SCF #15 · SCF #28 · $277K+ total with LINK',
  },
  {
    title: 'First Place, Base Batch Europe',
    detail: 'Consumer App · LINK Checkout by LINK',
  },
  {
    title: 'XRPL Accelerator · Cohort 5',
    detail: '$150K grant · Ripple · London',
  },
  {
    title: 'Speaker at Stellar Meridian',
    detail: null,
  },
  {
    title: 'Mentor at DFS Labs',
    detail: null,
  },
];

export default function GaiyoPage() {
  return (
    <div>
      {/* Title */}
      <h1 className="text-[1.5rem] font-normal text-[#343D4D] dark:text-[#F5F0E8] mb-1">
        Story
      </h1>

      {/* Subtitle */}
      <p className="text-[15px] text-[#9CA3AF] mb-8">my story</p>

      {/* Milestones — moved above narrative */}
      <Collapsible label="Milestones" defaultOpen={true}>
        <div className="relative flex flex-col mt-4">
          {/* Full-height connecting line */}
          <div
            className="absolute w-px bg-[#D1D5DB] dark:bg-[#4A5568]"
            style={{ left: '10px', top: '15px', bottom: '15px' }}
          />

          {accomplishments.map((item) => (
            <div key={item.title} className="flex items-start gap-5 mb-6 last:mb-0">
              <div className="w-5 flex-shrink-0 flex justify-center mt-[6px]">
                <div className="w-[9px] h-[9px] rounded-full bg-[#343D4D] dark:bg-[#F5F0E8]" />
              </div>
              <div>
                <span className="text-[16px] text-[#343D4D] dark:text-[#F5F0E8] leading-relaxed">
                  {item.title}
                </span>
                {item.detail && (
                  <span className="block text-[13px] text-[#9CA3AF] mt-[2px]">
                    {item.detail}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Collapsible>

      {/* Prose — below milestones */}
      <div className="flex flex-col gap-5 leading-[1.8] text-[16px] text-[#343D4D] dark:text-[#F5F0E8] mt-10">
        <p>
          I didn&apos;t start as a founder. I started as someone who needed to understand
          how things worked.
        </p>
        <p>
          I taught myself to code from the early days of Udemy and Codecademy, long
          before university. Not because anyone told me to, but because I couldn&apos;t
          stop asking why. Why does this system break under pressure? Why does this
          solution stop working at scale? That habit of pulling at threads led me
          through robotics labs building underwater vehicle systems, through
          architecting APIs for SME software, and eventually to the thing I
          couldn&apos;t unsee: cross-border payments across Africa were broken at the
          foundation.
        </p>
        <p>
          I trade markets for the same reason I build systems. Pattern recognition is
          the function. The environment changes code, charts, conversations but the skill transfers.
        </p>
        <p>
          I am Nigerian. I grew up watching what happens when financial infrastructure
          does not exist for the people who need it most. That is not background noise.
          That is direction.
        </p>
      </div>
    </div>
  );
}
