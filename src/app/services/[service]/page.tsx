import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllServices, getServiceBySlug } from "@/lib/services";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";
import Icon from "@/components/Icon";

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
  return {
    title: `${result.service.name} — SolvForge`,
    description: result.service.summary,
  };
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

  /* ---------- Hero ---------- */
  const hero = service.customHero;
  const heroImage = hero?.image;

  const heroBlock = heroImage ? (
    <section className="bg-hero-bg text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <Link href="/services" className="text-sm font-bold text-lime hover:underline">
            ← {category.name}
          </Link>
          <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
            {hero!.headline}
          </h1>
          {hero!.body.split("\n\n").map((para) => (
            <p key={para} className="mt-4 text-white/70">
              {para}
            </p>
          ))}
          <Link href="/contact" className="btn mt-7">
            {hero!.ctaLabel}
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={1024}
            height={683}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  ) : hero ? (
    <section className="bg-hero-bg text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
        <Link href="/services" className="text-sm font-bold text-lime hover:underline">
          ← {category.name}
        </Link>
        <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
          {hero.headline}
        </h1>
        {hero.body &&
          hero.body.split("\n\n").map((para) => (
            <p key={para} className="mt-4 text-white/70">
              {para}
            </p>
          ))}
        {hero.secondaryHeadline && (
          <h2 className="mt-8 text-xl font-extrabold text-white">
            {hero.secondaryHeadline}
          </h2>
        )}
        {hero.bullets && (
          <ul className="mt-4 inline-block text-left">
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="mt-2 flex gap-2 text-white/70">
                <span className="text-lime">✓</span>
                {bullet}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-7">
          <Link
            href="/contact"
            className={hero.ctaStyle === "outline" ? "btn-outline text-white" : "btn"}
          >
            {hero.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  ) : (
    <section className="bg-hero-bg text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <Link href="/services" className="text-sm font-bold text-lime hover:underline">
          ← {category.name}
        </Link>
        <span className="mt-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white/80">
          {service.billing === "recurring" ? "Recurring" : "Project-based"}
        </span>
        <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
          {service.name}
        </h1>
        <p className="mt-4 max-w-xl text-white/70">{service.summary}</p>
        <Link href="/contact" className="btn mt-7">
          Get a Free Quote
        </Link>
      </div>
    </section>
  );

  /* ---------- Features (icon-blurb grid) ---------- */
  const featuresGridCols =
    service.featuresColumns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  const featuresSection = service.features && (
    <section className="bg-paper-2">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="max-w-3xl text-3xl sm:text-4xl">
          {service.featuresHeading ?? `Why Choose SolvForge for ${service.name}?`}
        </h2>
        {service.featuresIntro && (
          <p className="mt-2 text-lg font-bold text-teal">{service.featuresIntro}</p>
        )}
        <div className={`mt-10 grid gap-6 ${featuresGridCols}`}>
          {service.features.map((feature, i) => (
            <div
              key={`${feature.title}-${i}`}
              className="rounded-xl border border-border bg-paper p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-paper-3 text-teal">
                <Icon name="check" className="h-5 w-5" />
              </span>
              <p className="mt-4 font-extrabold text-heading">{feature.title}</p>
              {feature.description && (
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  /* ---------- Explainer (image left, text right) ---------- */
  const explainerSection = service.explainer && (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[2fr_3fr]">
        <div className="overflow-hidden rounded-2xl bg-paper-2">
          <Image
            src={service.explainer.image.src}
            alt={service.explainer.image.alt}
            width={700}
            height={500}
            className="h-auto w-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl">{service.explainer.heading}</h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            {service.explainer.body}
          </p>
        </div>
      </div>
    </section>
  );

  /* ---------- Quote form (standalone, centered) ---------- */
  const quoteSection = (
    <section className="bg-paper-2">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <ServiceQuoteForm />
      </div>
    </section>
  );

  /* ---------- secondaryDetails — standalone full-width section ---------- */
  const secondaryHead =
    (service.secondaryHeading || service.secondaryIntro) &&
    (service.secondaryImage ? (
      <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
        <div>
          {service.secondaryHeading && (
            <h2 className="text-3xl sm:text-4xl">{service.secondaryHeading}</h2>
          )}
          {service.secondaryIntro && (
            <p className="mt-4 leading-relaxed text-text-muted">{service.secondaryIntro}</p>
          )}
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={service.secondaryImage.src}
            alt={service.secondaryImage.alt}
            width={600}
            height={600}
            className="mx-auto h-auto w-full max-w-sm object-contain"
          />
        </div>
      </div>
    ) : (
      <>
        {service.secondaryHeading && (
          <h2 className="max-w-3xl text-3xl sm:text-4xl">{service.secondaryHeading}</h2>
        )}
        {service.secondaryIntro && (
          <p className="mt-4 max-w-3xl leading-relaxed text-text-muted">
            {service.secondaryIntro}
          </p>
        )}
      </>
    ));

  const secondarySection = service.secondaryDetails && (
    <section className="bg-paper-2">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {secondaryHead}
        {service.secondaryAsCards ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.secondaryDetails.map((detail, i) => {
              const [title, ...rest] = detail.split(" — ");
              return (
                <div
                  key={`${title}-${i}`}
                  className="rounded-xl border border-border bg-paper p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <p className="font-extrabold text-heading">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {rest.join(" — ")}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.secondaryDetails.map((detail) => (
              <li key={detail} className="flex gap-3 text-text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );

  /* ---------- Main content block ---------- */
  const contentBlock = (
    <section className="mx-auto max-w-4xl px-6 py-16">
      {service.bodyParagraphs && (
        <div>
          {service.bodyParagraphs.map((para) => (
            <p key={para} className="mt-4 leading-relaxed text-text-muted first:mt-0">
              {para}
            </p>
          ))}
        </div>
      )}

      {service.intro && (
        <p className="rounded-xl bg-paper-2 p-5 leading-relaxed text-text-muted">
          {service.intro}
        </p>
      )}

      {service.stats && (
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {service.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-teal">{stat.value}</p>
              <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {!service.features && service.details.length > 0 && (
        <>
          <h3 className="mt-10 text-lg font-extrabold text-heading">
            What&apos;s included
          </h3>
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

      {service.howItWorks && (
        <>
          <h3 className="mt-14 text-lg font-extrabold text-heading">
            {service.howItWorksHeading ?? "How it works"}
          </h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            {service.howItWorks.map((step, i) => (
              <div key={step.title}>
                <p className="text-sm font-bold text-teal">Step {i + 1}</p>
                <p className="mt-1 font-bold text-heading">{step.title}</p>
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
                  <th className="p-4 font-bold text-teal">{service.comparison.columnA}</th>
                  <th className="p-4 font-bold text-text-muted">{service.comparison.columnB}</th>
                </tr>
              </thead>
              <tbody>
                {service.comparison.rows.map((row) => (
                  <tr key={row.label} className="border-b border-border last:border-0">
                    <td className="p-4 font-bold text-heading">{row.label}</td>
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
          <p className="text-lg text-heading">
            &ldquo;{service.testimonial.quote}&rdquo;
          </p>
          <footer className="mt-3 text-sm text-text-muted">
            — {service.testimonial.author}
          </footer>
        </blockquote>
      )}
    </section>
  );

  const hasContent =
    service.bodyParagraphs ||
    service.intro ||
    service.stats ||
    (!service.features && service.details.length > 0) ||
    service.howItWorks ||
    service.comparison ||
    service.testimonial;

  /* ---------- Pricing ---------- */
  const pricingSection = service.pricing && (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-center text-3xl sm:text-4xl">Plans</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {service.pricing.map((tier) => (
          <div
            key={tier.name}
            className={
              tier.highlighted
                ? "relative rounded-2xl border-2 border-teal p-6 shadow-lg"
                : "rounded-2xl border border-border p-6"
            }
          >
            {tier.highlighted && (
              <p className="absolute -top-3 left-6 rounded-full bg-teal px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Most Popular
              </p>
            )}
            <p className="font-extrabold text-heading">{tier.name}</p>
            {tier.price && (
              <p
                className={
                  tier.highlighted
                    ? "mt-1 text-2xl font-black text-teal"
                    : "mt-1 text-sm font-bold text-teal"
                }
              >
                {tier.price}
              </p>
            )}
            <ul className="mt-4 space-y-2">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn mt-6 w-full text-center">
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      {heroBlock}

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
            <Image
              key={src}
              src={src}
              alt=""
              width={110}
              height={110}
              className="h-16 w-16 object-contain"
            />
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

      {featuresSection}

      {explainerSection}

      {hasContent && contentBlock}

      {service.secondaryPosition !== "late" && secondarySection}

      {pricingSection}

      {service.secondaryPosition === "late" && secondarySection}

      {quoteSection}

      {service.faq && (
        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-8">
            <FaqAccordion items={service.faq} />
          </div>
        </section>
      )}
    </>
  );
}
