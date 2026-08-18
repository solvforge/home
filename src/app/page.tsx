import Link from "next/link";
import { getAllCategories } from "@/lib/services";
import { getAllCaseStudies } from "@/lib/case-studies";
import { getHomeContent } from "@/lib/pages";

export default function Home() {
  const categories = getAllCategories();
  const caseStudies = getAllCaseStudies().slice(0, 3);
  const home = getHomeContent();

  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {home.eyebrow}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {home.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">{home.subheadline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={home.ctaHref}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              {home.ctaText}
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold tracking-tight text-text">What we do</h2>
          <Link href="/services" className="text-sm font-medium text-accent hover:underline">
            View all services →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/services/${category.slug}`}
              className="rounded-2xl border border-border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-text">{category.name}</h3>
              <p className="mt-2 text-sm text-text-muted">{category.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {caseStudies.length > 0 && (
        <section className="bg-paper-2">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-2xl font-semibold tracking-tight text-text">Selected work</h2>
              <Link href="/work" className="text-sm font-medium text-accent hover:underline">
                View all work →
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/work/${cs.slug}`}
                  className="block rounded-2xl border border-border bg-paper p-6 transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {cs.client}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-text">{cs.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{cs.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-text">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-text-muted">
          Tell us what you&apos;re building — we&apos;ll get back to you within a
          couple of business days.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Start a project
        </Link>
      </section>
    </>
  );
}
