import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Hire Unity Developers — SolvForge",
  description:
    "Hire Unity developers for games, AR/VR, simulations, and interactive 3D. Dedicated, project-based, or team-augmentation engagements — with a trial period, transparent pricing, and month-to-month terms.",
};

const BUILD = [
  {
    icon: "code",
    title: "Games — 2D & 3D",
    body: "Mobile, PC, and WebGL games — gameplay systems, level design tooling, UI, and store submission for iOS and Android.",
  },
  {
    icon: "gauge",
    title: "AR & VR Experiences",
    body: "AR Foundation (ARKit / ARCore) and XR headset builds for training, retail, marketing, and product visualisation.",
  },
  {
    icon: "chart",
    title: "Simulations & Training",
    body: "Interactive simulations and training tools with realistic physics, scoring, analytics, and reporting.",
  },
  {
    icon: "layers",
    title: "Interactive 3D & Configurators",
    body: "Real-time 3D product configurators and visualisers embedded in websites or shipped as standalone apps.",
  },
  {
    icon: "branch",
    title: "Multiplayer & Backend",
    body: "Netcode, matchmaking, leaderboards, and cloud saves, with Firebase or a custom backend behind them.",
  },
  {
    icon: "rocket",
    title: "Prototypes & MVPs",
    body: "Playable prototypes and MVPs to validate an idea quickly before committing to a full production build.",
  },
];

const MODELS = [
  {
    icon: "search",
    title: "Dedicated Developer",
    body: "A Unity developer working full-time on your project, reporting to you directly. Best for ongoing product work.",
  },
  {
    icon: "tag",
    title: "Project-Based",
    body: "A fixed scope, timeline, and quote agreed up front. Best when the deliverable is well defined.",
  },
  {
    icon: "chat",
    title: "Team Augmentation",
    body: "Unity capacity added to your existing team for a sprint or a season, then scaled back down.",
  },
];

const STACK = [
  "Unity (URP / HDRP / built-in)",
  "C# scripting & editor tooling",
  "AR Foundation — ARKit & ARCore",
  "XR / VR (OpenXR, Meta, PICO)",
  "Multiplayer (Netcode, Mirror, Photon)",
  "Physics, animation & timeline",
  "Shaders & rendering optimisation",
  "Addressables & asset/build optimisation",
  "CI/CD builds (Cloud Build, GitHub Actions)",
  "Firebase, PlayFab & custom backends",
];

const STEPS = [
  { title: "Tell us the brief", body: "Share the goal, platform, timeline, and any existing project files or designs." },
  { title: "We match a developer", body: "You get a developer whose experience fits the work, plus a clear rate and start date." },
  { title: "Trial period", body: "Start with a short trial so you can evaluate the fit before committing to a longer engagement." },
  { title: "Ongoing work", body: "Once you're happy, work continues month to month with regular check-ins and demos." },
];

const WHY = [
  "You work directly with the developer — not an account manager relaying messages.",
  "Transparent hourly or monthly rates, agreed before anything starts.",
  "Month to month — scale up, scale down, or stop whenever you need to.",
  "One point of contact for the whole engagement.",
  "Your code and IP are yours, handed over in a repo you own.",
];

const FAQ = [
  {
    question: "How quickly can a Unity developer start?",
    answer: "For most engagements we can match a developer and start within a week. A more specialised need (a specific XR headset, heavy multiplayer, a niche SDK) may take a little longer.",
  },
  {
    question: "What if the developer isn't the right fit?",
    answer: "That's what the trial period is for. If it isn't working, you're not locked in — we either swap the developer or stop, with no long-term commitment.",
  },
  {
    question: "Who owns the code and assets?",
    answer: "You do. Work is committed to a repository you own, and all project assets and IP are handed over to you.",
  },
  {
    question: "How does communication and time-zone overlap work?",
    answer: "We agree a daily overlap window and a check-in cadence up front. You get direct access to the developer over your preferred channel — Slack, email, or calls.",
  },
  {
    question: "Is there a minimum commitment?",
    answer: "After the trial, engagements run month to month. There's no minimum term beyond that.",
  },
  {
    question: "Will you sign an NDA?",
    answer: "Yes. We're happy to sign your NDA before we see any project details.",
  },
];

export default function HireUnityDevelopersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-bg text-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-lime">
            Hire Developers
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
            Hire Unity Developers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Unity developers for games, AR/VR, simulations, and interactive 3D —
            available as a dedicated developer, on a fixed project, or as extra
            capacity for your team. Start with a trial period, pay transparent
            rates, and stay month to month.
          </p>
          <Link href="/get-free-quotation" className="btn mt-7">
            Request Developers
          </Link>
        </div>
      </section>

      {/* What we build */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-[1440px] px-6 py-16">
          <h2 className="text-3xl sm:text-4xl">What We Build With Unity</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BUILD.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-border bg-paper p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-paper-3 text-teal">
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
          {MODELS.map((m) => (
            <div
              key={m.title}
              className="rounded-xl border border-border bg-paper p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-paper-3 text-teal">
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
          <h2 className="text-3xl sm:text-4xl">Unity Skills & Tooling</h2>
          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
            {STACK.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-paper px-4 py-1.5 text-sm font-semibold text-accent-deep"
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
              <p className="text-sm font-bold text-teal">Step {i + 1}</p>
              <p className="mt-1 font-extrabold text-heading">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why SolvForge */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-3xl sm:text-4xl">Why Hire Through SolvForge</h2>
          <ul className="mx-auto mt-10 max-w-2xl space-y-3 text-center">
            {WHY.map((w) => (
              <li key={w} className="flex items-start justify-center gap-3 text-text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
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
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-6 pb-16">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-hero-bg px-6 py-12 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Need Unity developers?
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
