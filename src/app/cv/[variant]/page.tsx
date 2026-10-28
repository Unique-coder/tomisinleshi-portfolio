import type { Metadata } from 'next';
import { getCVVariant, cvVariants } from '../../../../content/cv';
import { CVLayout } from '@/components/CVLayout';

export function generateStaticParams() {
  return cvVariants
    .filter((v) => v.slug !== '')
    .map((v) => ({ variant: v.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { variant: string };
}): Metadata {
  const v = getCVVariant(params.variant);
  return {
    title: `CV (${v.label}) — Tomisin Leshi`,
    robots: 'noindex',
  };
}

export default function CVVariantPage() {
  return <CVLayout />;
}
