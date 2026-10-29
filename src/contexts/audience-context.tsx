'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import type { Audience, AudienceKey } from '../../content/audiences';
import { getAudience } from '../../content/audiences';

type AudienceContextValue = {
  audience: Audience;
  setAudience: (key: AudienceKey) => void;
};

const AudienceContext = createContext<AudienceContextValue>({
  audience: getAudience('any'),
  setAudience: () => {},
});

export function AudienceProvider({
  children,
  initialKey,
}: {
  children: React.ReactNode;
  initialKey: AudienceKey;
}) {
  const [audience, setAudienceState] = useState<Audience>(() => getAudience(initialKey));
  const router = useRouter();
  const pathname = usePathname();

  // Sync when initialKey changes via soft navigation (e.g. browser back/forward or direct URL entry)
  useEffect(() => {
    setAudienceState(getAudience(initialKey));
  }, [initialKey]);

  function setAudience(key: AudienceKey) {
    setAudienceState(getAudience(key));
    const url = key === 'any' ? pathname : `${pathname}?for=${key}`;
    router.replace(url, { scroll: false });
  }

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  return useContext(AudienceContext);
}
