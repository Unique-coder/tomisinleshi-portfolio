import { Section } from './Section';
import { CopyEmailButton } from './CopyEmailButton';
import { hero } from '../../content/home';

const socials = [
  { label: 'LinkedIn',        href: 'https://www.linkedin.com/in/tomisin-leshi/' },
  { label: 'X (@TommLesh)',   href: 'https://twitter.com/TommLesh' },
  { label: 'GitHub',          href: 'https://github.com/tomisinleshi' },
  { label: 'Substack',        href: 'https://tomlesh.substack.com' },
] as const;

export function ContactSection() {
  return (
    <Section
      id="contact"
      kicker="06 · CONTACT"
      title="Building something that has to move money? Let's talk."
      className="mb-16"
    >
      <p className="text-[16px] text-[var(--muted)] leading-[1.8] mb-8 max-w-[56ch]">
        I take on a small number of builds and advisory projects each quarter. The fastest way to
        start is a short call.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <a
          href={hero.calUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center min-h-[44px] px-6 bg-[#343D4D] dark:bg-[#F5F0E8] text-[#F5F0E8] dark:text-[#343D4D] text-[15px] font-medium hover:opacity-90 transition-opacity rounded-sm"
        >
          Book a call
        </a>
        <CopyEmailButton email={hero.email} />
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {socials.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center text-[15px] text-[#343D4D] dark:text-[#F5F0E8] hover:text-[var(--accent)] transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </Section>
  );
}
