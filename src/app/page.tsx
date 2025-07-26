import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { currentWork, socialLinks } from '@/constants';

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto py-16 space-y-16 w-[80vw] max-w-xl sm:w-[75vw] sm:max-w-2xl md:w-[60vw] md:max-w-3xl lg:w-[55vw]">
        <section className="flex flex-col items-start text-left space-y-6">
          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl animate-fade-up">
            Tomisin Leshi
          </h1>
          <h2 className="text-xl text-muted-foreground">
            Full-Stack Lead Engineer, | Technical Advisor | Trader
          </h2>
          <div className="space-y-1">
            <div className="text-lg font-semibold">Hey there,</div>
            <div className="font-semibold">About Me:</div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Driven by curiosity — the kind that pokes, pulls, and unpacks the world until it makes sense. A thinker who writes, a builder who questions, and a problem solver at heart. Whether it’s code, currencies, or chaos, I’m drawn to understanding how systems work and then making them better.
            </p>
          </div>
          {/* <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Connect on LinkedIn
            </Link>
            <Link
              href="/highlights"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View History
            </Link>
          </div> */}
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight">Roles</h2>
          <div className="space-y-4 text-left">
            {/* Current role */}
            <div className="mb-2">
              <span className="font-medium">{currentWork.company.role}, {currentWork.company.name}</span> — {currentWork.company.description}
            </div>
            {/* Previous roles */}
            {currentWork.previousRoles.map((role, idx) => (
              <div className="mb-2" key={role.company + idx}>
                <span className="font-medium">{role.role}, {role.company}</span> — {role.description}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold tracking-tight pt-8">Projects</h2>
          <div className="space-y-6 text-left">
            <div>
              <span className="font-medium">Blockchain Platform:</span> Staking platform to stake tokens and redeem depending on duration. Includes a crowdfunding feature similar to Kickstarter.
            </div>
            <div>
              <span className="font-medium">Game/App Development:</span> Developed a mobile app that tracks users' spending habits while in university. Built using Java.
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
