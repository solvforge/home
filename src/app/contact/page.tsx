import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { TESTIMONIALS, REVIEW_STAT } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Contact Us — solvforge",
  description: "Get in touch with solvforge about a project.",
};

const SOCIAL_LINKS = [
  { label: "Behance", href: "https://www.behance.net/solvforge", initials: "Be" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/solvforge", initials: "in" },
  { label: "X", href: "https://x.com/solvforge", initials: "X" },
  { label: "Facebook", href: "https://www.facebook.com/solvforge", initials: "f" },
  { label: "Instagram", href: "https://www.instagram.com/solvforgeofficial/", initials: "IG" },
  { label: "Pinterest", href: "https://pinterest.com/solvforge/", initials: "P" },
];

const CONTACT_DETAILS = [
  { label: "Address", value: "Hyderabad", href: undefined },
  { label: "Email", value: "hello@solvforge.com", href: "mailto:hello@solvforge.com" },
  { label: "WhatsApp", value: "+1-365-873-7786", href: "https://wa.me/13658737786" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight">Contact Us</h1>
          <p className="mt-4 max-w-xl text-white/70">
            Your idea, my effort — let&apos;s make it happen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-heading">
              I&apos;m Ready to Help You Send Me Message
            </h2>
            <p className="mt-3 text-text-muted">
              Feel free to reach out! I am excited to begin our collaboration!
            </p>

            <ul className="mt-8 space-y-4">
              {CONTACT_DETAILS.map((detail) => (
                <li key={detail.label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-text-muted">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="text-text-muted">
                    <span className="font-medium text-text">{detail.label}:</span>{" "}
                    {detail.href ? (
                      <a href={detail.href} className="hover:text-accent">
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm font-medium text-text">Follow</p>
            <div className="mt-3 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-semibold text-text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {social.initials}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-heading">Send A Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-ink px-8 py-16 text-center text-white">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Looking for Digital Solutions?
          </h2>
          <p className="mt-3 text-white/70">I&apos;m here to help bring your next project to life.</p>
          <Link
            href="/services"
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            See Available Services
          </Link>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Testimonial</p>
          <h2 className="mt-2 text-2xl font-extrabold text-heading">
            Hear from Happy Clients
          </h2>
          <p className="mt-3 max-w-xl text-text-muted">
            Some kind words from the clients I&apos;ve worked with — their feedback means a lot
            and reflects the effort I put into every project.
          </p>
          <p className="mt-4 text-sm font-medium text-text">
            <span aria-hidden="true" className="text-accent">★★★★★</span> {REVIEW_STAT}
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="rounded-2xl border border-border bg-paper p-6">
                <p className="text-text-muted">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <Image
                    src="/testimonial-avatar.webp"
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-text">{testimonial.author}</p>
                    <p className="text-sm text-text-muted">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
