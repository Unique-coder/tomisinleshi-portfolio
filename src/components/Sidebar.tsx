'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaXTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { SiSubstack } from 'react-icons/si';
import { useTheme } from '../../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';

// Mobile sheet order per spec: anchors first, pages, Contact last
const MOBILE_NAV = [
  { label: 'Work',      href: '/#work' },
  { label: 'Services',  href: '/#services' },
  { label: 'Writing',   href: '/writing' },
  { label: 'Story',     href: '/gaiyo' },
  { label: 'Worldview', href: '/worldview' },
  { label: 'Bookshelf', href: '/bookshelf' },
  { label: 'Exploring', href: '/exploring' },
  { label: 'Contact',   href: '/#contact' },
];

// Desktop sidebar: new anchors on top, existing pages below a divider
const DESKTOP_TOP = [
  { label: 'WORK',     href: '/#work' },
  { label: 'SERVICES', href: '/#services' },
  { label: 'WRITING',  href: '/writing' },
  { label: 'CONTACT',  href: '/#contact' },
];
const DESKTOP_PAGES = [
  { label: 'STORY',     href: '/gaiyo' },
  { label: 'WORLDVIEW', href: '/worldview' },
  { label: 'BOOKSHELF', href: '/bookshelf' },
  { label: 'EXPLORING', href: '/exploring' },
];

const SOCIALS = [
  { icon: <FaXTwitter size={14} />, href: 'https://twitter.com/tomlesh',             label: 'Twitter' },
  { icon: <FaGithub size={14} />,   href: 'https://github.com/tomisinleshi',          label: 'GitHub' },
  { icon: <FaLinkedinIn size={14} />, href: 'https://linkedin.com/in/tomisin-leshi', label: 'LinkedIn' },
  { icon: <SiSubstack size={14} />, href: 'https://substack.com/@tomlesh',            label: 'Substack' },
];

// Anchor links (/#…) have no meaningful active state
function isActive(href: string, pathname: string): boolean {
  if (href.startsWith('/#')) return false;
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

function navLinkCls(href: string, pathname: string) {
  return `text-[12px] tracking-[0.08em] font-medium no-underline transition-colors ${
    isActive(href, pathname)
      ? 'text-[#343D4D] dark:text-[#F5F0E8]'
      : 'text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8]'
  }`;
}

export default function Sidebar() {
  const pathname = usePathname();
  const { toggle } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { setMounted(true); }, []);

  // Lock body scroll while sheet is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // Move focus to first item when sheet opens
  useEffect(() => {
    if (!open) return;
    sheetRef.current?.querySelector<HTMLElement>('a, button')?.focus();
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => menuBtnRef.current?.focus());
  }, []);

  // Escape key + focus trap
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { close(); return; }
      if (e.key !== 'Tab' || !sheetRef.current) return;
      const els = Array.from(
        sheetRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!els.length) return;
      const first = els[0], last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, close]);

  return (
    <>
      {/* ── Desktop sidebar (≥768px) ───────────────── */}
      <aside
        aria-label="Site navigation"
        className="hidden md:flex fixed left-0 top-0 h-screen w-[200px] flex-col px-6 py-8 bg-[var(--bg)] border-r border-[var(--border)]"
        style={{ zIndex: 50 }}
      >
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="font-serif text-lg font-semibold text-[#343D4D] dark:text-[#F5F0E8] no-underline"
          >
            TL
          </Link>
          {mounted && <ThemeToggle />}
        </div>

        <nav aria-label="Primary" className="flex flex-col gap-4">
          {DESKTOP_TOP.map(({ label, href }) => (
            <Link key={href} href={href} className={navLinkCls(href, pathname)}>
              {label}
            </Link>
          ))}
          <hr className="border-t border-[var(--border)] my-1" />
          {DESKTOP_PAGES.map(({ label, href }) => (
            <Link key={href} href={href} className={navLinkCls(href, pathname)}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="flex items-center gap-3 mb-6">
          {SOCIALS.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8] transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-[10px] tracking-wide text-[#9CA3AF] whitespace-nowrap">
          &copy; TOMISIN LESHI &middot; {new Date().getFullYear()}
        </p>
        <p className="text-[10px] text-[#9CA3AF] italic mt-1">/toh&middot;mi&middot;sin leh&middot;shi/</p>
      </aside>

      {/* ── Mobile sticky top bar (<768px) ─────────── */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 bg-[var(--bg)] border-b border-[var(--border)]"
      >
        <Link
          href="/"
          className="font-serif text-sm font-semibold text-[#343D4D] dark:text-[#F5F0E8] no-underline"
        >
          TL
        </Link>

        <div className="flex items-center gap-3">
          {mounted ? (
            <ThemeToggle />
          ) : (
            // Prevent hydration mismatch: render placeholder until client mounts
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="w-10 h-[22px] rounded-full bg-[#E5E7EB] border border-[#D1D5DB]"
              suppressHydrationWarning
            />
          )}
          <button
            ref={menuBtnRef}
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav-sheet"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[11px] tracking-[0.08em] font-medium text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8] transition-colors"
          >
            Menu
          </button>
        </div>
      </div>

      {/* ── Mobile nav sheet ────────────────────────── */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="md:hidden fixed inset-0 z-[60]"
        >
          {/* Backdrop — click to close */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={close}
            aria-hidden="true"
          />

          {/* Sheet panel */}
          <div
            ref={sheetRef}
            id="mobile-nav-sheet"
            className="absolute top-0 left-0 right-0 max-h-screen overflow-y-auto bg-[var(--bg)] border-b border-[var(--border)] px-4"
          >
            {/* Mirror the top bar so the sheet feels continuous */}
            <div className="flex items-center justify-between h-14">
              <Link
                href="/"
                onClick={close}
                className="font-serif text-sm font-semibold text-[#343D4D] dark:text-[#F5F0E8] no-underline"
              >
                TL
              </Link>
              <button
                onClick={close}
                aria-label="Close navigation menu"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[11px] tracking-[0.08em] font-medium text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8] transition-colors"
              >
                Close
              </button>
            </div>

            <nav aria-label="Mobile navigation">
              {MOBILE_NAV.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={close}
                  className="flex items-center min-h-[56px] border-t border-[var(--border)] text-[16px] font-medium text-[#343D4D] dark:text-[#F5F0E8] no-underline hover:text-[var(--accent)] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1 py-5 border-t border-[var(--border)]">
              {SOCIALS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  onClick={close}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8] transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-[11px] text-[#9CA3AF] italic pb-6">/toh&middot;mi&middot;sin leh&middot;shi/</p>
          </div>
        </div>
      )}
    </>
  );
}
