import type { Metadata } from "next";
import Link from "next/link";
import { getAllIndustries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries We Work With — SolvForge",
  description:
    "Digital solutions tailored to specific industries — websites, local SEO, online booking and ordering, reviews, and automation for bakeries, cafés, real estate, HVAC, plumbers, dentists, and more.",
};

// Rotate left-accent colors so the link-card grid doesn't read as flat grayscale.
const ACCENT_STYLES = ["bg-teal", "bg-lime", "bg-teal-band"];

export default function IndustriesIndexPage() {
  const industries = getAllIndustries();

  return (
    <>
      <section className="relative overflow-hidden bg-hero-bg text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(560px circle at 15% 20%, rgba(186,252,80,0.16), transparent 60%), radial-gradient(560px circle at 85% 80%, rgba(0,154,154,0.22), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-lime">
            Industries
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
            Industries We Work With
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            The digital work is similar across small businesses — a fast website,
            local SEO, easy booking, reviews, and automation — but the details
            differ by industry. Here&apos;s how we tailor it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16">
        <h2 className="text-3xl sm:text-4xl">Pick Your Industry</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i, idx) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="group overflow-hidden rounded-xl border border-border bg-paper shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className={`block h-1.5 w-full ${ACCENT_STYLES[idx % ACCENT_STYLES.length]}`}
              />
              <div className="p-6">
                <p className="font-extrabold text-heading group-hover:text-teal">
                  {i.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {i.heroBlurb}
                </p>
                <span className="mt-4 inline-block text-sm font-bold text-teal">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
