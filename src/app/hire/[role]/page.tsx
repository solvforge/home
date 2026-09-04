import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import FaqAccordion from "@/components/FaqAccordion";
import { getAllHireRoles, getHireRole } from "@/lib/hire";

export function generateStaticParams() {
  return getAllHireRoles().map((r) => ({ role: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ role: string }>;
}): Promise<Metadata> {
  const { role } = await params;
  const r = getHireRole(role);
  if (!r) return {};
  return {
    title: `Hire ${r.role} — SolvForge`,
    description: r.heroBlurb,
  };
}

// Rotate icon-tile colors so card grids don't read as flat grayscale.
const TILE_STYLES = [
  "bg-teal/10 text-teal",
  "bg-lime/25 text-teal-dark",
  "bg-teal-band/10 text-teal-band",
  "bg-hero-bg text-lime",
];

const PILL_STYLES = [
  "border-teal/25 bg-teal/8 text-teal",
  "border-teal-band/25 bg-teal-band/8 text-teal-band",
];

const MODELS = [
  { icon: "search", title: "Dedicated Developer", body: "A developer working full-time on your project, reporting to you directly. Best for ongoing product work." },
  { icon: "tag", title: "Project-Based", body: "A fixed scope, timeline, and quote agreed up front. Best when the deliverable is well defined." },
  { icon: "chat", title: "Team Augmentation", body: "Extra capacity added to your existing team for a sprint or a season, then scaled back down." },
];

const STEPS = [
  { title: "Tell us the brief", body: "Share the goal, platform, timeline, and any existing project files or designs." },
  { title: "We match a developer", body: "You get a developer whose experience fits the work, plus a clear rate and start date." },
  { title: "Trial period", body: "Start with a short trial so you can evaluate fit before committing to a longer engagement." },
  { title: "Ongoing work", body: "Once you're happy, work continues month to month with regular check-ins and demos." },
];

const WHY = [
  "You work directly with the developer — not an account manager relaying messages.",
  "Transparent hourly or monthly rates, agreed before anything starts.",
  "Month to month — scale up, scale down, or stop whenever you need to.",
  "One point of contact for the whole engagement.",
  "Your code and IP are yours, handed over in a repo you own.",
];

const BASE_FAQ = [
  { question: "How quickly can a developer start?", answer: "For most engagements we can match a developer and start within a week. A more specialised need may take a little longer." },
  { question: "What if the developer isn't the right fit?", answer: "That's what the trial period is for. If it isn't working, you're not locked in — we either swap the developer or stop, with no long-term commitment." },
  { question: "Who owns the code and assets?", answer: "You do. Work is committed to a repository you own, and all project assets and IP are handed over to you." },
  { question: "How does communication and time-zone overlap work?", answer: "We agree a daily overlap window and a check-in cadence up front. You get direct access to the developer over your preferred channel." },
  { question: "Is there a minimum commitment?", answer: "After the trial, engagements run month to month. There's no minimum term beyond that." },
  { question: "Will you sign an NDA?", answer: "Yes. We're happy to sign your NDA before we see any project details." },
];

export default async function HireRolePage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  const r = getHireRole(role);
  if (!r) notFound();

  const faq = [...BASE_FAQ, ...(r.faqExtra ?? [])];

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
            Hire Developers
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
            Hire {r.role}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {r.heroBlurb}
          </p>
          <Link href="/get-free-quotation" className="btn mt-7">
            Request Developers
          </Link>
        </div>
      </section>

      {/* What we build */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-[1440px] px-6 py-16">
          <h2 className="text-3xl sm:text-4xl">{r.buildHeading}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {r.build.map((b, i) => (
              <div
                key={b.title}
                className="rounded-xl border border-border bg-paper p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-lg ${TILE_STYLES[i % TILE_STYLES.length]}`}
                >
                  <Icon name={b.icon} className="h-5 w-5" />
                </span>
                <p className="mt-4 font-extrabold text-heading">{b.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="mx-auto max-w-[1440px] px-6 py-16">
        <h2 className="text-3xl sm:text-4xl">Ways to Engage</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {MODELS.map((m, i) => (
            <div
              key={m.title}
              className="rounded-xl border border-border bg-paper p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-lg ${TILE_STYLES[i % TILE_STYLES.length]}`}
              >
                <Icon name={m.icon} className="h-5 w-5" />
              </span>
              <p className="mt-4 font-extrabold text-heading">{m.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl sm:text-4xl">Skills &amp; Tooling</h2>
          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
            {r.stack.map((s, i) => (
              <li
                key={s}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold shadow-sm ${PILL_STYLES[i % PILL_STYLES.length]}`}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-[1440px] px-6 py-16">
        <h2 className="text-3xl sm:text-4xl">How It Works</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.title}>
              <span
                className={`grid h-9 w-9 place-items-center rounded-full text-sm font-extrabold shadow-sm ${
                  i % 2 === 0 ? "bg-teal text-white" : "bg-lime text-lime-ink"
                }`}
              >
                {i + 1}
              </span>
              <p className="mt-3 font-extrabold text-heading">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why SolvForge */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-3xl sm:text-4xl">Why Hire Through SolvForge</h2>
          <ul className="mx-auto mt-10 max-w-2xl space-y-3">
            {WHY.map((w, i) => (
              <li
                key={w}
                className="flex items-start gap-4 rounded-xl border border-border bg-paper p-4 text-text-muted shadow-sm"
              >
                <span
                  className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs ${
                    i % 2 === 0 ? "bg-teal text-white" : "bg-lime text-lime-ink"
                  }`}
                >
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-extrabold text-heading sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8">
          <FaqAccordion items={faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-6 pb-16">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-hero-bg px-6 py-12 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Need {r.role.toLowerCase()}?
            </h2>
            <p className="mt-2 text-white/70">
              Tell us about the project and we&apos;ll match you with the right
              developer and a clear quote.
            </p>
          </div>
          <Link href="/get-free-quotation" className="btn-lime shrink-0">
            Request Developers
          </Link>
        </div>
      </section>
    </>
  );
}
