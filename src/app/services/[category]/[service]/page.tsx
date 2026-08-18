import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCategories, getService } from "@/lib/services";

export function generateStaticParams() {
  return getAllCategories().flatMap((category) =>
    category.services.map((service) => ({
      category: category.slug,
      service: service.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}): Promise<Metadata> {
  const { category: categorySlug, service: serviceSlug } = await params;
  const result = getService(categorySlug, serviceSlug);
  if (!result) return {};
  return { title: `${result.service.name} — solvforge`, description: result.service.summary };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category: categorySlug, service: serviceSlug } = await params;
  const result = getService(categorySlug, serviceSlug);
  if (!result) notFound();
  const { category, service } = result;

  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Link
            href={`/services/${category.slug}`}
            className="text-sm font-medium text-accent hover:underline"
          >
            ← {category.name}
          </Link>
          <span className="mt-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
            {service.billing === "recurring" ? "Recurring" : "Project-based"}
          </span>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">{service.name}</h1>
          <p className="mt-4 max-w-xl text-white/70">{service.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-lg font-semibold text-text">What's included</h2>
        <ul className="mt-4 space-y-3">
          {service.details.map((detail) => (
            <li key={detail} className="flex gap-3 text-text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {detail}
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-2xl bg-paper-2 p-8 text-center">
          <p className="text-text-muted">Interested in {service.name.toLowerCase()}?</p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
