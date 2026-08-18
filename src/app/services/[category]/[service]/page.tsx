import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllCategories, getService } from "@/lib/services";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";

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
      {service.customHero ? (
        <section className="bg-paper">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
            {service.customHero.image && (
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={service.customHero.image.src}
                  alt={service.customHero.image.alt}
                  width={1024}
                  height={683}
                  className="h-auto w-full object-cover"
                />
              </div>
            )}
            <div>
              <Link
                href={`/services/${category.slug}`}
                className="text-sm font-medium text-accent hover:underline"
              >
                ← {category.name}
              </Link>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text">
                {service.customHero.headline}
              </h1>
              {service.customHero.body.split("\n\n").map((para) => (
                <p key={para} className="mt-4 text-text-muted">
                  {para}
                </p>
              ))}
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                {service.customHero.ctaLabel}
              </Link>
            </div>
          </div>
        </section>
      ) : (
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
      )}

      {service.platformLogos && (
        <div className="mx-auto max-w-3xl px-6 pt-10">
          <Image
            src={service.platformLogos}
            alt="Platforms supported"
            width={1040}
            height={230}
            className="mx-auto h-auto w-full max-w-md"
          />
        </div>
      )}

      {service.logoRow && (
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-8 px-6 pt-10">
          {service.logoRow.map((src) => (
            <Image key={src} src={src} alt="" width={110} height={110} className="h-16 w-16 object-contain" />
          ))}
        </div>
      )}

      {service.supplementaryImage && (
        <div className="mx-auto max-w-md px-6 pt-10">
          <Image
            src={service.supplementaryImage.src}
            alt={service.supplementaryImage.alt}
            width={800}
            height={800}
            className="mx-auto h-auto w-full rounded-2xl"
          />
        </div>
      )}

      <section className="mx-auto max-w-3xl px-6 py-20">
        {service.bodyParagraphs && (
          <div className="text-center">
            {service.bodyParagraphs.map((para) => (
              <p key={para} className="mt-4 text-text-muted first:mt-0">
                {para}
              </p>
            ))}
          </div>
        )}

        {service.intro && (
          <p className="rounded-xl bg-paper-2 p-5 text-text-muted">{service.intro}</p>
        )}

        {service.stats && (
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {service.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-semibold text-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {!service.features && service.details.length > 0 && (
          <>
            <h2 className="mt-10 text-lg font-semibold text-text">What's included</h2>
            <ul className="mt-4 space-y-3">
              {service.details.map((detail) => (
                <li key={detail} className="flex gap-3 text-text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {detail}
                </li>
              ))}
            </ul>
          </>
        )}

        {service.secondaryDetails && (
          <>
            {service.secondaryHeading && (
              <h2 className="mt-14 text-lg font-semibold text-text">{service.secondaryHeading}</h2>
            )}
            {service.secondaryIntro && (
              <p className="mt-4 text-text-muted">{service.secondaryIntro}</p>
            )}
            <ul className="mt-4 space-y-3">
              {service.secondaryDetails.map((detail) => (
                <li key={detail} className="flex gap-3 text-text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {detail}
                </li>
              ))}
            </ul>
          </>
        )}

        {service.pricing && (
          <>
            <h2 className="mt-14 text-lg font-semibold text-text">Plans</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-3">
              {service.pricing.map((tier) => (
                <div key={tier.name} className="rounded-2xl border border-border p-6">
                  <p className="font-semibold text-text">{tier.name}</p>
                  {tier.price && (
                    <p className="mt-1 text-sm font-medium text-accent">{tier.price}</p>
                  )}
                  <ul className="mt-4 space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="text-sm text-text-muted">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {service.howItWorks && (
          <>
            <h2 className="mt-14 text-lg font-semibold text-text">How it works</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-3">
              {service.howItWorks.map((step, i) => (
                <div key={step.title}>
                  <p className="text-sm font-semibold text-accent">Step {i + 1}</p>
                  <p className="mt-1 font-medium text-text">{step.title}</p>
                  <p className="mt-2 text-sm text-text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {service.comparison && (
          <>
            <h2 className="mt-14 text-lg font-semibold text-text">
              {service.comparison.columnA} vs. {service.comparison.columnB}
            </h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 font-medium text-text-muted"></th>
                    <th className="p-4 font-semibold text-accent">{service.comparison.columnA}</th>
                    <th className="p-4 font-semibold text-text-muted">{service.comparison.columnB}</th>
                  </tr>
                </thead>
                <tbody>
                  {service.comparison.rows.map((row) => (
                    <tr key={row.label} className="border-b border-border last:border-0">
                      <td className="p-4 font-medium text-text">{row.label}</td>
                      <td className="p-4 text-text-muted">{row.a}</td>
                      <td className="p-4 text-text-muted">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {service.testimonial && (
          <blockquote className="mt-14 border-l-2 border-accent pl-6">
            <p className="text-lg text-text">&ldquo;{service.testimonial.quote}&rdquo;</p>
            <footer className="mt-3 text-sm text-text-muted">— {service.testimonial.author}</footer>
          </blockquote>
        )}

      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className={`grid gap-16 ${service.features ? "lg:grid-cols-2" : "mx-auto max-w-xl"}`}>
            {service.features && (
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-text">
                  {service.featuresHeading ?? `Why Choose solvforge for ${service.name}?`}
                </h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {service.features.map((feature, i) => (
                    <div key={`${feature.title}-${i}`}>
                      <p className="font-semibold text-text">{feature.title}</p>
                      <p className="mt-2 text-sm text-text-muted">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <ServiceQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {service.faq && (
        <section className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-lg font-semibold text-text">Frequently asked questions</h2>
          <div className="mt-4">
            <FaqAccordion items={service.faq} />
          </div>
        </section>
      )}
    </>
  );
}
