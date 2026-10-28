'use client';
import { useEffect, useState } from 'react';
import { hero } from '../../content/home';

export function StickyCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const heroCTA = document.getElementById('hero-cta');
    const contactSection = document.getElementById('contact');
    if (!heroCTA) return;

    let heroOut = false;
    let contactIn = false;
    const update = () => setShow(heroOut && !contactIn);

    const heroObs = new IntersectionObserver(
      ([e]) => { heroOut = !e.isIntersecting; update(); },
      { threshold: 0 }
    );
    heroObs.observe(heroCTA);

    const contactObs = contactSection
      ? new IntersectionObserver(
          ([e]) => { contactIn = e.isIntersecting; update(); },
          { threshold: 0.1 }
        )
      : null;
    if (contactSection && contactObs) contactObs.observe(contactSection);

    return () => { heroObs.disconnect(); contactObs?.disconnect(); };
  }, []);

  useEffect(() => {
    if (!show) return;
    document.body.style.paddingBottom = '72px';
    return () => { document.body.style.paddingBottom = ''; };
  }, [show]);

  return (
    <div
      role="region"
      aria-label="Quick booking"
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[var(--bg)] border-t border-[var(--border)] px-4 transition-transform duration-200 ${show ? 'translate-y-0' : 'translate-y-full'}`}
      style={{ paddingTop: '0.75rem', paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
    >
      <a
        href={hero.calUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full min-h-[44px] bg-[#343D4D] dark:bg-[#F5F0E8] text-[#F5F0E8] dark:text-[#343D4D] text-[15px] font-medium hover:opacity-90 transition-opacity rounded-sm"
      >
        Book a call
      </a>
    </div>
  );
}
