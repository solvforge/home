import type { Metadata } from "next";
import Link from "next/link";
import { getAllIndustries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries We Work With — SolvForge",
  description:
    "Digital solutions tailored to specific industries — websites, local SEO, online booking and ordering, reviews, and automation for bakeries, cafés, real estate, HVAC, plumbers, dentists, and more.",
};

export default function IndustriesIndexPage() {
  const industries = getAllIndustries();

  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
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
          {industries.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="group rounded-xl border border-border bg-paper p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="font-extrabold text-heading group-hover:text-teal">
                {i.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {i.heroBlurb}
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-teal">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
