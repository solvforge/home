import type { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";
import ContactForm from "@/app/contact/ContactForm";

export const metadata: Metadata = {
  title: "Portfolio — SolvForge",
  description:
    "A selection of projects SolvForge has designed, built, and shipped for clients — web, mobile, e-commerce, and infrastructure.",
};

export default function PortfolioPage() {
  const projects = getAllCaseStudies();

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-bg text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-lime">
            Portfolio
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
            Completed Projects for Clients Worldwide
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            A selection of the work we&apos;ve designed, built, and shipped —
            websites, apps, e-commerce, and the infrastructure behind them.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {projects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="flex flex-col rounded-xl border border-border bg-paper p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-teal">
                  {p.client}
                </p>
                <h2 className="mt-2 text-lg font-extrabold text-heading">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                  {p.summary}
                </p>
                {p.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-paper-3 px-3 py-1 text-xs font-semibold text-accent-deep"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-border bg-paper-2 p-8 text-center text-text-muted">
            Case studies are being written up. In the meantime, tell us what
            you&apos;re working on and we&apos;ll share relevant examples directly.
          </p>
        )}
      </section>

      {/* Contact */}
      <section className="bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl">Get in Touch</h2>
            <p className="mt-3 leading-relaxed text-text-muted">
              Tell us about the project — we&apos;ll get back to you within a
              couple of business days.
            </p>
            <ul className="mt-8 space-y-3 text-text-muted">
              <li>
                <span className="font-bold text-heading">Address:</span> Hyderabad
              </li>
              <li>
                <span className="font-bold text-heading">Email:</span>{" "}
                <a href="mailto:hello@solvforge.com" className="hover:text-teal">
                  hello@solvforge.com
                </a>
              </li>
              <li>
                <span className="font-bold text-heading">WhatsApp:</span>{" "}
                <a href="https://wa.me/13658737786" className="hover:text-teal">
                  +1-365-873-7786
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl">Send a Project Brief</h2>
            <p className="mt-3 leading-relaxed text-text-muted">
              Fill out the form below and we&apos;ll be in touch shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
