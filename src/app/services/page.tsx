import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — solvforge",
  description: "Everything solvforge offers: marketing, security, performance, call center, white label support, and website/application development & management.",
};

export default function ServicesPage() {
  const categories = getAllCategories();

  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
          <p className="mt-4 max-w-xl text-white/70">
            Every engagement starts with the same question: what does this
            business actually need? Below is everything we offer — pick a
            category to see it broken down, or a specific service if you
            already know what you need.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-14">
          {categories.map((category) => (
            <div key={category.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-xl font-semibold text-text">{category.name}</h2>
                <p className="text-sm text-text-muted">{category.summary}</p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-xl border border-border p-4 transition-shadow hover:shadow-md"
                  >
                    <p className="font-medium text-text">{service.name}</p>
                    <p className="mt-1 text-sm text-text-muted">{service.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-paper-2 p-10 text-center">
          <h2 className="text-xl font-semibold text-text">Not sure what you need?</h2>
          <p className="mx-auto mt-2 max-w-md text-text-muted">
            Tell us about the problem, not the solution — we&apos;ll help you
            figure out the right scope.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
