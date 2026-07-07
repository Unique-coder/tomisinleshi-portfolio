'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaXTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { SiSubstack } from 'react-icons/si';
import { useTheme } from '../../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { label: 'ABOUT', href: '/' },
  { label: 'STORY', href: '/gaiyo' },
  { label: 'WORLDVIEW', href: '/worldview' },
  { label: 'WRITING', href: '/writing' },
  { label: 'BOOKSHELF', href: '/bookshelf' },
  { label: 'EXPLORING', href: '/exploring' },
];

const socials = [
  { icon: <FaXTwitter size={14} />, href: 'https://twitter.com/tomlesh', label: 'Twitter' },
  { icon: <FaGithub size={14} />, href: 'https://github.com/tomisinleshi', label: 'GitHub' },
  { icon: <FaLinkedinIn size={14} />, href: 'https://linkedin.com/in/tomisin-leshi', label: 'LinkedIn' },
  { icon: <SiSubstack size={14} />, href: 'https://substack.com/@tomlesh', label: 'Substack' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { toggle } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside
        aria-label="Site navigation"
        className="hidden md:flex fixed left-0 top-0 h-screen w-[200px] flex-col px-6 py-8 bg-[var(--bg)] border-r border-[#E5E7EB] dark:border-[#4A5568]"
        style={{ zIndex: 50 }}
      >
        {/* TL initials + toggle on same row */}
        <div className="flex items-center justify-between mb-10">
          <span className="font-serif text-lg font-semibold text-[#343D4D] dark:text-[#F5F0E8]">
            TL
          </span>
          {mounted && <ThemeToggle />}
        </div>

        {/* Nav links */}
        <nav aria-label="Primary" className="flex flex-col gap-5 mb-8">
          {navLinks.map(({ label, href }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-[12px] tracking-[0.08em] font-medium no-underline transition-colors ${
                  isActive
                    ? 'text-[#343D4D] dark:text-[#F5F0E8]'
                    : 'text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8]'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Social icons */}
        <div className="flex items-center gap-3 mb-6">
          {socials.map(({ icon, href, label }) => (
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

        {/* Copyright — single line, pinned to bottom */}
        <div className="text-[10px] tracking-wide text-[#9CA3AF] whitespace-nowrap">
          &copy; TOMISIN LESHI &middot; {new Date().getFullYear()}
        </div>
      </aside>

      {/* ── Mobile header: two rows ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]">
        {/* Row 1: TL logo (left) + dark mode toggle (right) */}
        <div className="flex items-center justify-between px-5 py-3">
          <span className="font-serif text-sm font-semibold text-[#343D4D] dark:text-[#F5F0E8]">TL</span>
          {mounted ? (
            <ThemeToggle />
          ) : (
            <button
              onClick={toggle}
              className="text-[#9CA3AF]"
              aria-label="Toggle dark mode"
              suppressHydrationWarning
            >
              <span className="w-10 h-[22px] rounded-full bg-[#E5E7EB] border border-[#D1D5DB] inline-block" />
            </button>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border)]" />

        {/* Row 2: Nav links — evenly spread, no scroll */}
        <nav aria-label="Mobile primary" className="flex items-center justify-around px-2 py-[9px]">
          {navLinks.map(({ label, href }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-[9px] tracking-[0.06em] font-medium no-underline transition-colors ${
                  isActive
                    ? 'text-[#343D4D] dark:text-[#F5F0E8]'
                    : 'text-[#9CA3AF]'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom border */}
        <div className="border-t border-[var(--border)]" />
      </div>
    </>
  );
}
