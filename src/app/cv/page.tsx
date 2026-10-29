import type { Metadata } from 'next';
import { SITE_URL } from '../../../lib/site';
import { CVLayout } from '@/components/CVLayout';

export const metadata: Metadata = {
  title: 'CV: Tomisin Leshi',
  description:
    'Payment infrastructure engineer. Five years at LINK building the systems that move money across African borders.',
  alternates: { canonical: `${SITE_URL}/cv` },
};

export default function CVPage() {
  return <CVLayout />;
}
