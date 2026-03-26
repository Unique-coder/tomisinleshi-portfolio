import type { Metadata } from 'next';
import Collapsible from '@/components/Collapsible';

export const metadata: Metadata = {
  title: 'Gaiy\u014d \u2014 Tomisin Leshi',
};

const accomplishments = [
  'Two-time Stellar Community Fund award winner with LINK',
  'Placed first for Consumer App at the Base Hackathon in Africa',
  'Speaker at Stellar Meridian',
  'Mentor at DFS Labs',
];

export default function GaiyoPage() {
  return (
    <div>
      {/* Title */}
      <h1 className="text-[1.5rem] font-normal text-[#343D4D] dark:text-[#F5F0E8] mb-1">
        Gaiy&#x014D;
      </h1>

      {/* Subtitle */}
      <p className="text-[13px] text-[#9CA3AF] mb-8">my story</p>

      {/* Prose */}
      <div className="flex flex-col gap-5 leading-[1.75] text-[15px] text-[#343D4D] dark:text-[#F5F0E8] mb-2">
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
          the function. The environment changes &mdash; code, charts, conversations &mdash;
          but the skill transfers.
        </p>
        <p>
          I am Nigerian. I grew up watching what happens when financial infrastructure
          does not exist for the people who need it most. That is not background noise.
          That is direction.
        </p>
      </div>

      {/* Collapsible: Little accomplishments — defaults open */}
      <Collapsible label="little accomplishments" defaultOpen={true}>
        {/*
          Timeline: flex column — each row is [dot column | text].
          The dot column is 20px wide; an absolute vertical line sits at
          left-[10px] (= column center) to pass through each dot's center.
        */}
        <div className="relative flex flex-col mt-4">
          {/* Full-height connecting line — from first dot to last dot */}
          <div
            className="absolute w-px bg-[#D1D5DB] dark:bg-[#4A5568]"
            style={{ left: '10px', top: '15px', bottom: '15px' }}
          />

          {accomplishments.map((item) => (
            <div key={item} className="flex items-start gap-5 mb-6 last:mb-0">
              {/* Dot column — 20px wide, dot centered → center at 10px = line position */}
              <div className="w-5 flex-shrink-0 flex justify-center mt-[6px]">
                <div className="w-[9px] h-[9px] rounded-full bg-[#343D4D] dark:bg-[#F5F0E8]" />
              </div>
              {/* Text */}
              <span className="text-[15px] text-[#343D4D] dark:text-[#F5F0E8] leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Collapsible>
    </div>
  );
}
