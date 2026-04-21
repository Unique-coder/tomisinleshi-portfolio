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
          ? 'bg-[#343D4D] border border-[#4A5568]'
          : 'bg-[#E5E7EB] border border-[#D1D5DB]'
        }
      `}
    >
      <span
        suppressHydrationWarning
        className={`
          absolute w-4 h-4 rounded-full shadow-sm transition-transform duration-200
          ${isDark
            ? 'translate-x-5 bg-[#F5F0E8]'
            : 'translate-x-1 bg-white'
          }
        `}
      />
    </button>
  );
}
