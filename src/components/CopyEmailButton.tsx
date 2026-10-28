'use client';

import { useState } from 'react';

interface Props { email: string; }

export function CopyEmailButton({ email }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable: fall back to mailto
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center justify-center min-h-[44px] px-6 border border-[var(--border)] text-[15px] font-medium text-[#343D4D] dark:text-[#F5F0E8] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors rounded-sm"
      >
        {copied ? 'Copied!' : 'Copy email'}
      </button>
      <div role="status" aria-live="polite" className="sr-only">
        {copied ? 'Email address copied to clipboard' : ''}
      </div>
    </>
  );
}
