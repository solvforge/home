import type { Metadata } from "next";
import Link from "next/link";
import { getAllHireRoles } from "@/lib/hire";

export const metadata: Metadata = {
  title: "Hire Developers — SolvForge",
  description:
    "Hire dedicated developers and designers — WordPress, Laravel, Node.js, Python, React Native, Angular, Android, iOS, Unity, and web design. Trial period, transparent rates, month to month.",
};

export default function HireIndexPage() {
  const roles = getAllHireRoles();

  return (
    <>
      <section className="bg-hero-bg text-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-lime">
            Hire Developers
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
            Hire Dedicated Developers &amp; Designers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Add proven talent to your team — as a dedicated developer, on a fixed
            project, or as extra capacity. Start with a trial period, pay
            transparent rates, and stay month to month.
          </p>
          <Link href="/get-free-quotation" className="btn mt-7">
            Request Developers
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16">
        <h2 className="text-3xl sm:text-4xl">Roles We Staff</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <Link
              key={r.slug}
              href={`/hire/${r.slug}`}
              className="group rounded-xl border border-border bg-paper p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="font-extrabold text-heading group-hover:text-teal">
                Hire {r.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {r.heroBlurb}
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-teal">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
