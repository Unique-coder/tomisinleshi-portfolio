import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { currentWork, socialLinks } from '@/constants';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container py-16 space-y-16">
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="space-y-6 md:w-2/3">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-fade-up">
                  Tomisin Leshi
                </h1>
                <h2 className="text-2xl text-muted-foreground">
                  CTO @ LINK | Builder | Fintech Enthusiast | Technical Advisor
                </h2>
              </div>
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-accent hidden md:block">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a backend-focused full-stack developer and technical leader with over 5 years of experience building secure, scalable systems in payments, fintech, and AI. Currently CTO at LINK—powering global FX transactions on-chain.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
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
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent md:hidden">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight">Current Work</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Current Role and Projects */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg border bg-card text-card-foreground">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{currentWork.company.name}</h3>
                  <span className="text-sm text-muted-foreground">{currentWork.company.period}</span>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-medium mb-2">{currentWork.company.role}</h4>
                  <p className="text-muted-foreground mb-4">{currentWork.company.description}</p>
                  <ul className="space-y-2 list-disc pl-5">
                    {currentWork.company.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm text-muted-foreground">{achievement}</li>
                    ))}
                  </ul>
                </div>
                <Link 
                  href={currentWork.company.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Visit Website →
                </Link>
              </div>
              
              <div className="rounded-lg border bg-card text-card-foreground p-6">
                <h3 className="text-lg font-semibold mb-4">Projects</h3>
                <div className="space-y-3">
                  {currentWork.projects.map((project, index) => (
                    <Link 
                      key={index} 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50 transition-colors"
                    >
                      <span className="font-medium">{project.name}</span>
                      <span className="text-xs text-primary">View →</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Previous Roles */}
            <div className="rounded-lg border bg-card text-card-foreground p-6">
              <h3 className="text-lg font-semibold mb-4">Previous Roles</h3>
              <div className="space-y-6">
                {currentWork.previousRoles.map((role, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">{role.company}</h4>
                      <span className="text-xs text-muted-foreground">{role.period}</span>
                    </div>
                    <p className="text-sm font-medium text-foreground mb-2">{role.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
                    {role.achievements && (
                      <ul className="space-y-1 list-disc pl-5">
                        {role.achievements.map((achievement, i) => (
                          <li key={i} className="text-xs text-muted-foreground">{achievement}</li>
                        ))}
                      </ul>
                    )}
                    {role.link && role.link !== '#' && (
                      <Link 
                        href={role.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-primary hover:underline mt-2 inline-block"
                      >
                        Visit Website →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
