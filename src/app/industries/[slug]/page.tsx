import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { getAllIndustries, getIndustry } from "@/lib/industries";

export function generateStaticParams() {
  return getAllIndustries().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return { title: `${ind.title} — SolvForge`, description: ind.heroBlurb };
}

// Rotate icon-tile colors so card grids don't read as flat grayscale.
const TILE_STYLES = [
  "bg-teal/10 text-teal",
  "bg-lime/25 text-teal-dark",
  "bg-teal-band/10 text-teal-band",
  "bg-hero-bg text-lime",
];

function CardGrid({
  heading,
  intro,
  cards,
}: {
  heading: string;
  intro?: string;
  cards: { icon: string; title: string; body: string }[];
}) {
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-16">
      <h2 className="text-3xl sm:text-4xl">{heading}</h2>
      {intro && (
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-text-muted">
          {intro}
        </p>
      )}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className="rounded-xl border border-border bg-paper p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <span
              className={`grid h-12 w-12 place-items-center rounded-lg ${TILE_STYLES[i % TILE_STYLES.length]}`}
            >
              <Icon name={c.icon} className="h-5 w-5" />
            </span>
            <p className="mt-4 font-extrabold text-heading">{c.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-bg text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(560px circle at 15% 20%, rgba(186,252,80,0.16), transparent 60%), radial-gradient(560px circle at 85% 80%, rgba(0,154,154,0.22), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-lime">
            Industries
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
            {ind.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {ind.heroBlurb}
          </p>
          <Link href="/get-free-quotation" className="btn mt-7">
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* How we help */}
      <section className="bg-paper-2">
        <CardGrid heading={ind.helpHeading} cards={ind.help} />
      </section>

      {/* Photos (bakeries only, for now) */}
      {ind.photos && ind.photos.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-6 py-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {ind.photos.map((src) => (
              <div
                key={src}
                className="aspect-square overflow-hidden rounded-xl bg-paper-2 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={src}
                  alt=""
                  width={350}
                  height={350}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* What we serve */}
      <CardGrid
        heading={ind.serveHeading}
        intro={`A complete digital toolkit for ${ind.name} — website, local SEO, booking and enquiries, reviews, and automation, all from one team.`}
        cards={ind.serve}
      />

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-6 pb-16">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-hero-bg px-6 py-12 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Ready to grow your business online?
            </h2>
            <p className="mt-2 text-white/70">
              Tell us about your business and we&apos;ll put together a plan.
            </p>
          </div>
          <Link href="/get-free-quotation" className="btn-lime shrink-0">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
