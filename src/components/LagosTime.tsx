'use client';

import { useState, useEffect } from 'react';

const fmt = () =>
  new Date().toLocaleTimeString('en-US', {
    timeZone: 'Africa/Lagos',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

export function LagosTime() {
  // Empty string on server so first render matches (no hydration mismatch)
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 60_000);
    return () => clearInterval(id);
  }, []);

  return <>{time || '–'}</>;
}
