import type { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Work — solvforge",
  description: "Case studies from solvforge client projects.",
};

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight">Work</h1>
          <p className="mt-4 max-w-xl text-white/70">
            A selection of projects we&apos;ve shipped for clients.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="block rounded-2xl border border-border p-6 transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {cs.client}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-text">{cs.title}</h2>
              <p className="mt-2 text-sm text-text-muted">{cs.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-paper-2 px-3 py-1 text-xs text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
