'use client';
import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    // Check localStorage first, fallback to system preference
    const stored = localStorage.getItem('theme');
    if (stored) {
      const isDarkTheme = stored === 'dark';
      if (isDarkTheme) {
        document.documentElement.classList.add('dark');
      }
      return isDarkTheme;
    }
    // Fallback to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
    return prefersDark;
  });

  useEffect(() => {
    // This useEffect is now idempotent - only syncs changes
    const stored = localStorage.getItem('theme');
    const shouldBeDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Only update if there's a mismatch
    if (isDark !== shouldBeDark) {
      setIsDark(shouldBeDark);
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDark]);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return { isDark, toggle };
}
