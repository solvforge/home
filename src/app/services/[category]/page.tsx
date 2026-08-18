import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCategories, getCategory } from "@/lib/services";

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return {};
  return { title: `${category.name} — solvforge`, description: category.summary };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link href="/services" className="text-sm font-medium text-accent hover:underline">
            ← All services
          </Link>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">{category.name}</h1>
          <p className="mt-4 max-w-xl text-white/70">{category.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${category.slug}/${service.slug}`}
              className="block rounded-2xl border border-border p-6 transition-shadow hover:shadow-md"
            >
              <span className="inline-block rounded-full bg-paper-2 px-3 py-1 text-xs font-medium text-text-muted">
                {service.billing === "recurring" ? "Recurring" : "Project-based"}
              </span>
              <h2 className="mt-3 text-lg font-semibold text-text">{service.name}</h2>
              <p className="mt-2 text-sm text-text-muted">{service.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
