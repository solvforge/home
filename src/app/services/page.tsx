import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — solvforge",
  description: "What solvforge builds: web apps, SaaS products, automation, and ongoing support.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
          <p className="mt-4 max-w-xl text-white/70">
            Every engagement starts with the same question: what does this
            business actually need to ship? The scope below is a starting
            point, not a rigid package.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div key={service.slug} className="rounded-2xl border border-border p-8">
              <h2 className="text-xl font-semibold text-text">{service.name}</h2>
              <p className="mt-2 text-text-muted">{service.summary}</p>
              <ul className="mt-6 space-y-2">
                {service.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm text-text-muted">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {detail}
                  </li>
                ))}
              </ul>
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
