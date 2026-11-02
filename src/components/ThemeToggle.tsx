'use client';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      suppressHydrationWarning
      className={`
        relative inline-flex items-center w-10 h-[22px] rounded-full
        transition-colors duration-200 focus:outline-none flex-shrink-0
        ${isDark
          ? 'bg-[var(--button-bg)] border border-[var(--border)]'
          : 'bg-[var(--surface)] border border-[var(--border)]'
        }
      `}
    >
      <span
        suppressHydrationWarning
        className={`
          absolute w-4 h-4 rounded-full shadow-sm transition-transform duration-200
          ${isDark
            ? 'translate-x-5 bg-[var(--button-fg)]'
            : 'translate-x-1 bg-white'
          }
        `}
      />
    </button>
  );
}
