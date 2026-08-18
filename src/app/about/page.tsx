import type { Metadata } from "next";
import Link from "next/link";
import { getAboutContent } from "@/lib/pages";

export const metadata: Metadata = {
  title: "About Us — solvforge",
  description: "Who's behind solvforge and how we work.",
};

export default function AboutPage() {
  const about = getAboutContent();

  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight">About Us</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-lg text-text-muted">{about.intro}</p>

        <h2 className="mt-12 text-xl font-semibold text-text">How we work</h2>
        <ul className="mt-4 space-y-3 text-text-muted">
          {about.principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl bg-paper-2 p-8 text-center">
          <p className="text-text-muted">Want to work together?</p>
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
