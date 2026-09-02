import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllServices, getServiceBySlug } from "@/lib/services";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";

export function generateStaticParams() {
  return getAllServices().map(({ service }) => ({ service: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const result = getServiceBySlug(serviceSlug);
  if (!result) return {};
  return { title: `${result.service.name} — SolvForge`, description: result.service.summary };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: serviceSlug } = await params;
  const result = getServiceBySlug(serviceSlug);
  if (!result) notFound();
  const { category, service } = result;

  const secondaryDetailsBlock = service.secondaryDetails && (
    <>
      {service.secondaryHeading && (
        <h3 className="mt-14 text-lg font-extrabold text-heading">{service.secondaryHeading}</h3>
      )}
      {service.secondaryIntro && (
        <p className="mt-4 text-text-muted">{service.secondaryIntro}</p>
      )}
      {service.secondaryAsCards ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.secondaryDetails.map((detail, i) => {
            const [title, ...rest] = detail.split(" — ");
            return (
              <div key={`${title}-${i}`} className="rounded-2xl border border-border p-5">
                <p className="font-semibold text-heading">{title}</p>
                <p className="mt-2 text-sm text-text-muted">{rest.join(" — ")}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <ul className="mt-4 space-y-3">
          {service.secondaryDetails.map((detail) => (
            <li key={detail} className="flex gap-3 text-text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              {detail}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  const featuresAndFormSection = (
    <section className="bg-paper-2">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className={`grid gap-16 ${service.features ? "lg:grid-cols-2" : "mx-auto max-w-xl"}`}>
          {service.features && (
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-heading">
                {service.featuresHeading ?? `Why Choose SolvForge for ${service.name}?`}
              </h2>
              {service.featuresAsList ? (
                <ul className="mt-8 space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={`${feature.title}-${i}`} className="flex gap-3 text-text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      <span>
                        <span className="font-medium text-heading">{feature.title}</span>
                        {feature.description && <> — {feature.description}</>}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {service.features.map((feature, i) => (
                    <div key={`${feature.title}-${i}`}>
                      <p className="font-semibold text-heading">{feature.title}</p>
                      <p className="mt-2 text-sm text-text-muted">{feature.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div>
            <ServiceQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      {service.customHero?.image ? (
        <section className="bg-paper">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={service.customHero.image.src}
                alt={service.customHero.image.alt}
                width={1024}
                height={683}
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <Link href="/services" className="text-sm font-medium text-teal hover:underline">
                ← {category.name}
              </Link>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-heading">
                {service.customHero.headline}
              </h1>
              {service.customHero.body.split("\n\n").map((para) => (
                <p key={para} className="mt-4 text-text-muted">
                  {para}
                </p>
              ))}
              <Link
                href="/contact"
                className="mt-6 inline-block btn"
              >
                {service.customHero.ctaLabel}
              </Link>
            </div>
          </div>
        </section>
      ) : service.customHero ? (
        (() => {
          const hero = service.customHero!;
          const dark = hero.background === "dark";
          const left = hero.align === "left";
          return (
            <section
              className={
                dark
                  ? "bg-hero-bg text-white [background-image:radial-gradient(rgba(255,255,255,0.12)_1.5px,transparent_1.5px)] [background-size:22px_22px]"
                  : left
                    ? "bg-paper [background-image:linear-gradient(30deg,rgba(0,0,0,0.05)_12%,transparent_12.5%,transparent_87%,rgba(0,0,0,0.05)_87.5%,rgba(0,0,0,0.05)_100%)] [background-size:44px_76px]"
                    : "bg-paper"
              }
            >
              <div
                className={
                  left
                    ? "mx-auto max-w-3xl px-6 py-20 text-left"
                    : "mx-auto max-w-3xl px-6 py-20 text-center"
                }
              >
                <Link
                  href="/services"
                  className={
                    dark
                      ? "text-sm font-medium text-white/80 hover:underline"
                      : "text-sm font-medium text-teal hover:underline"
                  }
                >
                  ← {category.name}
                </Link>
                <h1
                  className={
                    dark
                      ? "mt-3 text-3xl font-bold tracking-tight text-white"
                      : "mt-3 text-2xl font-semibold tracking-tight text-heading"
                  }
                >
                  {hero.headline}
                </h1>
                {hero.body &&
                  hero.body.split("\n\n").map((para) => (
                    <p key={para} className={dark ? "mt-4 text-white/80" : "mt-4 text-text-muted"}>
                      {para}
                    </p>
                  ))}
                {hero.secondaryHeadline && (
                  <h2 className={dark ? "mt-8 text-xl font-bold text-white" : "mt-8 text-xl font-bold text-heading"}>
                    {hero.secondaryHeadline}
                  </h2>
                )}
                {hero.bullets && (
                  <ul className="mt-4 inline-block text-left">
                    {hero.bullets.map((bullet) => (
                      <li key={bullet} className={dark ? "mt-2 flex gap-2 text-white/80" : "mt-2 flex gap-2 text-text-muted"}>
                        <span className="text-teal">✓</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href="/contact"
                  className={
                    hero.ctaStyle === "outline"
                      ? dark
                        ? "mt-6 inline-block btn-outline text-white"
                        : "mt-6 inline-block btn-outline text-teal"
                      : "mt-6 inline-block btn"
                  }
                >
                  {hero.ctaLabel}
                </Link>
              </div>
            </section>
          );
        })()
      ) : (
        <section className="bg-hero-bg text-white">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <Link href="/services" className="text-sm font-medium text-teal hover:underline">
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

      {service.formPosition === "early" && featuresAndFormSection}

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
                <p className="text-3xl font-semibold text-teal">{stat.value}</p>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {!service.features && service.details.length > 0 && (
          <>
            <h3 className="mt-10 text-lg font-extrabold text-heading">What&apos;s included</h3>
            <ul className="mt-4 space-y-3">
              {service.details.map((detail) => (
                <li key={detail} className="flex gap-3 text-text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {detail}
                </li>
              ))}
            </ul>
          </>
        )}

        {service.secondaryDetails && service.secondaryPosition !== "late" && secondaryDetailsBlock}

        {service.pricing && (
          <>
            <h3 className="mt-14 text-lg font-extrabold text-heading">Plans</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-3">
              {service.pricing.map((tier) => (
                <div
                  key={tier.name}
                  className={
                    tier.highlighted
                      ? "rounded-2xl border-2 border-teal p-6 shadow-lg"
                      : "rounded-2xl border border-border p-6"
                  }
                >
                  {tier.highlighted && (
                    <p className="-mt-6 -mx-6 mb-4 rounded-t-2xl bg-teal px-6 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white">
                      Most Popular
                    </p>
                  )}
                  <p className="font-semibold text-heading">{tier.name}</p>
                  {tier.price && (
                    <p
                      className={
                        tier.highlighted
                          ? "mt-1 text-2xl font-bold text-teal"
                          : "mt-1 text-sm font-medium text-teal"
                      }
                    >
                      {tier.price}
                    </p>
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
            <h3 className="mt-14 text-lg font-extrabold text-heading">{service.howItWorksHeading ?? "How it works"}</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-3">
              {service.howItWorks.map((step, i) => (
                <div key={step.title}>
                  <p className="text-sm font-semibold text-teal">Step {i + 1}</p>
                  <p className="mt-1 font-medium text-heading">{step.title}</p>
                  <p className="mt-2 text-sm text-text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {service.comparison && (
          <>
            <h3 className="mt-14 text-lg font-extrabold text-heading">
              {service.comparison.columnA} vs. {service.comparison.columnB}
            </h3>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 font-medium text-text-muted"></th>
                    <th className="p-4 font-semibold text-teal">{service.comparison.columnA}</th>
                    <th className="p-4 font-semibold text-text-muted">{service.comparison.columnB}</th>
                  </tr>
                </thead>
                <tbody>
                  {service.comparison.rows.map((row) => (
                    <tr key={row.label} className="border-b border-border last:border-0">
                      <td className="p-4 font-medium text-heading">{row.label}</td>
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
          <blockquote className="mt-14 border-l-2 border-teal pl-6">
            <p className="text-lg text-heading">&ldquo;{service.testimonial.quote}&rdquo;</p>
            <footer className="mt-3 text-sm text-text-muted">— {service.testimonial.author}</footer>
          </blockquote>
        )}
      </section>

      {service.formPosition !== "early" && featuresAndFormSection}

      {service.secondaryDetails && service.secondaryPosition === "late" && (
        <section className="mx-auto max-w-3xl px-6 py-20">{secondaryDetailsBlock}</section>
      )}

      {service.faq && (
        <section className="mx-auto max-w-3xl px-6 py-20">
          <h3 className="text-lg font-extrabold text-heading">Frequently asked questions</h3>
          <div className="mt-4">
            <FaqAccordion items={service.faq} />
          </div>
        </section>
      )}
    </>
  );
}
