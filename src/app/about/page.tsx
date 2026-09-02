import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAboutContent } from "@/lib/pages";
import {
  HERO_TAGLINE,
  ROLE_TITLE,
  YEARS_BADGE,
  PROCESS_STEPS,
  WORK_EXPERIENCE,
  TOOLS,
  EDUCATION,
  TAGLINES,
} from "@/lib/about";
import ExperienceTabs from "@/components/ExperienceTabs";
import ProcessTimeline from "@/components/ProcessTimeline";
import Icon from "@/components/Icon";
import ContactForm from "@/app/contact/ContactForm";

export const metadata: Metadata = {
  title: "About Us — SolvForge",
  description: "Who's behind SolvForge and how we work.",
};

const STATS = [
  { value: "7+", label: "Years of hands-on experience", icon: "gauge" },
  { value: "1:1", label: "Direct line to the person building it", icon: "chat" },
  { value: "24/7", label: "Monitoring on managed servers", icon: "server" },
  { value: "No", label: "Long-term contracts, ever", icon: "tag" },
];

const STACK = ["WordPress", "Laravel", "Asterisk / FreePBX", "Linux", "SEO", "Cloudflare"];

export default function AboutPage() {
  const about = getAboutContent();

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-bg text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl text-white sm:text-5xl">About Us</h1>
            <p className="mt-4 text-xl font-light leading-snug text-white/90">
              {HERO_TAGLINE}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-white/65">
              {about.intro}
            </p>
            <Link href="/contact" className="btn mt-7">
              Start a Project
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-xl font-black tracking-tight">
              Solv<span className="text-lime">Forge</span>
            </p>
            <p className="mt-2 text-lg font-extrabold leading-snug text-white">
              {ROLE_TITLE}
            </p>
            <p className="mt-1 text-sm font-bold uppercase tracking-wide text-lime">
              {YEARS_BADGE}
            </p>
            <div className="mt-6 border-t border-white/15 pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                Works with
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {STACK.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-paper-3 text-teal">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-3xl font-black text-heading">{s.value}</p>
                <p className="text-sm text-text-muted">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-teal">Key Factors</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Create Digital Solutions</h2>

        <ProcessTimeline steps={PROCESS_STEPS} />
      </section>

      {/* Skills / experience */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-widest text-teal">What We Bring</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Skills &amp; Capabilities</h2>
          <div className="mt-10">
            <ExperienceTabs work={WORK_EXPERIENCE} tools={TOOLS} education={EDUCATION} />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/media/about-tilt.webp"
              alt=""
              width={900}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal">Why SolvForge</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Professional Services You Can Trust
            </h2>
            <ul className="mt-6 space-y-3">
              {TAGLINES.map((tagline) => (
                <li key={tagline} className="flex items-center gap-3 text-text-muted">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal text-xs text-white">
                    ✓
                  </span>
                  {tagline}
                </li>
              ))}
            </ul>
            <Link href="/services" className="btn mt-8">
              View All Services
            </Link>
          </div>
        </div>
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
