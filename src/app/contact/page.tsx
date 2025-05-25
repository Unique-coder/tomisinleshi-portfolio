import { Header } from '@/components/Header';
import { ContactForm } from '@/components/ContactForm';
import { socialLinks } from '@/constants';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container py-16 max-w-2xl">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">Lets Talk</h1>
          <p className="text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to reach out using
            the form below or directly via{' '}
            <a
              href={`mailto:${socialLinks.email}`}
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              {socialLinks.email}
            </a>
          </p>
          <div className="flex space-x-4">
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:underline underline-offset-4"
            >
              Twitter
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-12">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
