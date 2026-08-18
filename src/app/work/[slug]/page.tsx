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
  return { title: `${cs.title} — solvforge`, description: cs.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/work" className="text-sm font-medium text-accent hover:underline">
        ← All work
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
        {cs.client}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text">{cs.title}</h1>
      <p className="mt-4 text-lg text-text-muted">{cs.summary}</p>

      <div
        className="prose-solvforge mt-10"
        dangerouslySetInnerHTML={{ __html: cs.html }}
      />
    </article>
  );
}
