import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCaseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return getAllCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return { title: `${cs.title} — SolvForge`, description: cs.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16">
          <Link href="/portfolio" className="text-sm font-bold text-lime hover:underline">
            ← All projects
          </Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-lime">
            {cs.client}
          </p>
          <h1 className="mt-2 text-4xl leading-tight text-white sm:text-5xl">
            {cs.title}
          </h1>
          <p className="mt-4 text-lg text-white/70">{cs.summary}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div
          className="prose-solvforge"
          dangerouslySetInnerHTML={{ __html: cs.html }}
        />
      </article>
    </>
  );
}
