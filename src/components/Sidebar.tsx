'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const navLinks = [
  { label: 'ABOUT', href: '/' },
  { label: 'BOOKSHELF', href: '/bookshelf' },
  { label: 'WRITING', href: '/writing' },
  { label: 'EXPLORING', href: '/exploring' },
  { label: 'GAIYŌ', href: '/gaiyo' },
];

const socialLinks = [
  { label: 'TWITTER', href: 'https://twitter.com/tomlesh' },
  { label: 'GITHUB', href: 'https://github.com/tomisinleshi' },
  { label: 'LINKEDIN', href: 'https://linkedin.com/in/tomisin-leshi' },
  { label: 'SUBSTACK', href: 'https://substack.com/@tomlesh' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isDark, toggle } = useTheme();
  // Mounted guard — prevents hydration mismatch from localStorage-driven icon swap
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Show Moon/DARK on both server and initial client render; corrects after mount
  const toggleIcon = mounted
    ? isDark
      ? <><Sun size={14} /><span className="text-[11px] tracking-[0.1em] font-medium">LIGHT</span></>
      : <><Moon size={14} /><span className="text-[11px] tracking-[0.1em] font-medium">DARK</span></>
    : <><Moon size={14} /><span className="text-[11px] tracking-[0.1em] font-medium">DARK</span></>;

  const mobileToggleIcon = mounted
    ? isDark ? <Sun size={14} /> : <Moon size={14} />
    : <Moon size={14} />;

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside
        className="hidden md:flex fixed left-0 top-0 h-screen w-[160px] flex-col px-6 py-8 bg-[var(--bg)] border-r border-[#E5E7EB] dark:border-[#4A5568]"
        style={{ zIndex: 50 }}
      >
        {/* TL initials */}
        <div className="mb-10">
          <span className="font-serif text-sm font-semibold text-[#343D4D] dark:text-[#F5F0E8]">
            TL
          </span>
        </div>

        {/* Nav links — gap-5 for more breathing room */}
        <nav className="flex flex-col gap-5 mb-8">
          {navLinks.map(({ label, href }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-[11px] tracking-[0.1em] font-medium no-underline transition-colors ${
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

        {/* Dark/Light toggle — icon + label, hydration-safe */}
        <button
          onClick={toggle}
          className="mb-8 w-fit flex items-center gap-2 text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8] transition-colors"
          aria-label="Toggle dark mode"
          suppressHydrationWarning
        >
          {toggleIcon}
        </button>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Social links */}
        <div className="flex flex-col gap-2 mb-6">
          {socialLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.05em] text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8] transition-colors no-underline"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-[#9CA3AF] leading-tight">
          &copy; TOMISIN LESHI
          <br />· {new Date().getFullYear()}
        </p>
      </aside>

      {/* ── Mobile header: two rows ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]">
        {/* Row 1: TL logo (left) + dark mode toggle (right) */}
        <div className="flex items-center justify-between px-5 py-3">
          <span className="font-serif text-sm font-semibold text-[#343D4D] dark:text-[#F5F0E8]">TL</span>
          <button
            onClick={toggle}
            className="text-[#9CA3AF] hover:text-[#343D4D] dark:hover:text-[#F5F0E8] transition-colors"
            aria-label="Toggle dark mode"
            suppressHydrationWarning
          >
            {mobileToggleIcon}
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border)]" />

        {/* Row 2: Nav links — evenly spread, no scroll */}
        <nav className="flex items-center justify-around px-2 py-[9px]">
          {navLinks.map(({ label, href }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-[10px] tracking-[0.08em] font-medium no-underline transition-colors ${
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
