import Link from 'next/link';

const pages = [
  { label: 'CV',        href: '/cv' },
  { label: 'Story',     href: '/gaiyo' },
  { label: 'Worldview', href: '/worldview' },
  { label: 'Bookshelf', href: '/bookshelf' },
  { label: 'Exploring', href: '/exploring' },
] as const;

export function SiteFooter() {
  return (
    <footer className="md:ml-[200px] border-t border-[var(--border)]">
      <div className="max-w-[860px] mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <p className="text-[15px] font-semibold text-[#343D4D] dark:text-[#F5F0E8]">
              Tomisin Leshi
            </p>
            <p className="text-[13px] text-[var(--muted)]">
              /toh&middot;mi&middot;sin leh&middot;shi/ &middot; Lagos, Nigeria &middot; remote-friendly
            </p>
          </div>
          <p className="text-[13px] text-[var(--muted)]">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
        <nav aria-label="Site pages" className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {pages.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-[13px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
