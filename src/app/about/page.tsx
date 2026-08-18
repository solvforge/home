import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAboutContent } from "@/lib/pages";
import { HERO_TAGLINE, ROLE_TITLE, PROCESS_STEPS, WORK_EXPERIENCE, TOOLS, EDUCATION, TAGLINES } from "@/lib/about";
import ExperienceTabs from "@/components/ExperienceTabs";
import ContactForm from "@/app/contact/ContactForm";

export const metadata: Metadata = {
  title: "About Us — solvforge",
  description: "Who's behind solvforge and how we work.",
};

export default function AboutPage() {
  const about = getAboutContent();

  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight">About Us</h1>
          <p className="mt-4 max-w-xl text-white/70">{HERO_TAGLINE}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl bg-paper-2">
            <Image
              src="/about-photo.webp"
              alt=""
              width={636}
              height={740}
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">About Me</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text">
              I&apos;m Shoaib Sheikh, {ROLE_TITLE}
            </h2>
            <p className="mt-6 text-text-muted">{about.intro}</p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Hire Me!
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Key Factors</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text">
            Create Digital Solutions
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="rounded-2xl border border-border bg-paper p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">{step.step}</p>
                <p className="mt-2 font-semibold text-text">{step.name}</p>
                <p className="mt-3 text-sm text-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Experience</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text">
          Creative and Professional Skills
        </h2>

        <div className="mt-10">
          <ExperienceTabs work={WORK_EXPERIENCE} tools={TOOLS} education={EDUCATION} />
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Trust Me</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text">
            Professional Product Designer Services You Can Trust
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {TAGLINES.map((tagline) => (
              <span key={tagline} className="flex items-center gap-2 text-text-muted">
                <span className="text-accent">✓</span> {tagline}
              </span>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            View All Services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text">Contact With Me!</h2>
            <p className="mt-3 text-text-muted">
              Feel free to reach out! I am excited to begin our collaboration.
            </p>
            <ul className="mt-8 space-y-3 text-text-muted">
              <li>
                <span className="font-medium text-text">Address:</span> Hyderabad
              </li>
              <li>
                <span className="font-medium text-text">Email:</span>{" "}
                <a href="mailto:hello@solvforge.com" className="hover:text-accent">
                  hello@solvforge.com
                </a>
              </li>
              <li>
                <span className="font-medium text-text">WhatsApp:</span>{" "}
                <a href="https://wa.me/13658737786" className="hover:text-accent">
                  +1-365-873-7786
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text">Send a Project Brief</h2>
            <p className="mt-3 text-text-muted">
              Please fill out the form below. I will contact you promptly!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
