import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories } from "@/lib/services";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Services — SolvForge",
  description:
    "Website and app development, managed hosting and server management, SEO and marketing, call center infrastructure, security, and ongoing website care.",
};

const CATEGORY_ICON: Record<string, string> = {
  marketing: "chart",
  security: "lifebuoy",
  "performance-optimization": "gauge",
  "call-center": "phone",
  "white-label-support": "tag",
  "website-app-development": "code",
  "website-app-management": "wrench",
};

const INTRO_POINTS = ["Build", "Host & manage", "Market & maintain"];

export default function ServicesPage() {
  const categories = getAllCategories();

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-bg text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h1 className="text-4xl text-white sm:text-5xl">Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            From website and app development to hosting, SEO, and ongoing support
            — everything your business needs online, handled in one place.
          </p>
        </div>
      </section>

      {/* Intro strip */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl">
          Digital services built around what the business actually needs
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-text-muted">
          Every engagement starts with the same question: what does this business
          actually need? Scope is agreed up front, work is done in the open, and
          the relationship carries on after launch.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {INTRO_POINTS.map((p, i) => (
            <span
              key={p}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold shadow-sm ${
                i % 2 === 0
                  ? "border-teal/25 bg-teal/8 text-teal"
                  : "border-teal-band/25 bg-teal-band/8 text-teal-band"
              }`}
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Category listing */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl space-y-14 px-6 py-16">
          {categories.map((category) => (
            <div key={category.slug}>
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-teal ring-1 ring-border">
                  <Icon name={CATEGORY_ICON[category.slug] ?? "check"} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-heading">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{category.summary}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group rounded-xl border border-border bg-paper p-4 transition-colors hover:border-teal"
                  >
                    <p className="font-bold text-heading group-hover:text-teal">
                      {service.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-muted">
                      {service.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-bg text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Not sure what you need?
            </h2>
            <p className="mt-2 text-white/70">
              Tell us about the problem, not the solution — we&apos;ll help you
              scope it.
            </p>
          </div>
          <Link href="/contact" className="btn shrink-0">
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
