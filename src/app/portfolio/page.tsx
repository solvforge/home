import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/app/contact/ContactForm";

export const metadata: Metadata = {
  title: "Portfolio — SolvForge",
  description:
    "A selection of projects SolvForge has designed, built, and shipped for clients — web, mobile, e-commerce, and infrastructure. Full portfolio on Behance.",
};

const BEHANCE_URL = "https://www.behance.net/solvforge";

type Project = { title: string; image: string; href: string };

const PROJECTS: Project[] = [
  {
    title: "TaskFlow — App UI/UX Design & Development",
    image: "/media/behance/taskflow.png",
    href: "https://www.behance.net/gallery/252068977/TaskFlow-App-UIUX-Design-Development-Case-Study",
  },
  {
    title: "Jobaara",
    image: "/media/behance/jobaara.png",
    href: "https://www.behance.net/gallery/237833007/Jobaara",
  },
  {
    title: "Hawabaz",
    image: "/media/behance/hawabaz.png",
    href: "https://www.behance.net/gallery/237830723/Hawabaz",
  },
  {
    title: "CureCork",
    image: "/media/behance/curecork.jpg",
    href: "https://www.behance.net/gallery/237827889/CureCork",
  },
  {
    title: "My New Beginning",
    image: "/media/behance/my-new-beginning.jpg",
    href: "https://www.behance.net/gallery/237826095/My-New-Beginning",
  },
  {
    title: "Remote Coffee",
    image: "/media/behance/remote-coffee.png",
    href: "https://www.behance.net/gallery/237824955/Remote-Coffee",
  },
  {
    title: "Josh Nardi",
    image: "/media/behance/josh-nardi.jpg",
    href: "https://www.behance.net/gallery/237824581/Josh-Nardi",
  },
  {
    title: "Brazil USA Online",
    image: "/media/behance/brazil-usa-online.jpg",
    href: "https://www.behance.net/gallery/237823055/Brazil-USA-Online",
  },
  {
    title: "CampCursos",
    image: "/media/behance/campcursos.jpg",
    href: "https://www.behance.net/gallery/237822505/CampCursos",
  },
  {
    title: "Westchester Concierge",
    image: "/media/behance/westchester-concierge.png",
    href: "https://www.behance.net/gallery/237819657/Westchester-Concierge",
  },
  {
    title: "Latin America Bridge",
    image: "/media/behance/latin-america-bridge.png",
    href: "https://www.behance.net/gallery/237709533/Latin-America-Bridge",
  },
  {
    title: "Aero Flow Dynamics",
    image: "/media/behance/aero-flow-dynamics.png",
    href: "https://www.behance.net/gallery/237709115/Aero-Flow-Dynamics",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-bg text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-lime">
            Portfolio
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
            Completed Projects for Clients Worldwide
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            A selection of the work we&apos;ve designed, built, and shipped —
            websites, apps, e-commerce, and the infrastructure behind them.
          </p>
          <a
            href={BEHANCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime mt-7 inline-block"
          >
            View the full portfolio on Behance ↗
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl border border-border bg-paper shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-paper-2">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={404}
                  height={316}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <h2 className="text-sm font-extrabold text-heading">{p.title}</h2>
                <span className="shrink-0 text-sm font-bold text-teal opacity-0 transition-opacity group-hover:opacity-100">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* See more on Behance */}
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-hero-bg px-6 py-10 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              See more of our work
            </h2>
            <p className="mt-2 text-white/70">
              Full project write-ups, mockups, and shipped builds on Behance.
            </p>
          </div>
          <a
            href={BEHANCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lime shrink-0"
          >
            Open Behance ↗
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl">Get in Touch</h2>
            <p className="mt-3 leading-relaxed text-text-muted">
              Tell us about the project — we&apos;ll get back to you within a
              couple of business days.
            </p>
            <ul className="mt-8 space-y-3 text-text-muted">
              <li>
                <span className="font-bold text-heading">Address:</span> Hyderabad
              </li>
              <li>
                <span className="font-bold text-heading">Email:</span>{" "}
                <a href="mailto:hello@solvforge.com" className="hover:text-teal">
                  hello@solvforge.com
                </a>
              </li>
              <li>
                <span className="font-bold text-heading">WhatsApp:</span>{" "}
                <a href="https://wa.me/13658737786" className="hover:text-teal">
                  +1-365-873-7786
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl">Send a Project Brief</h2>
            <p className="mt-3 leading-relaxed text-text-muted">
              Fill out the form below and we&apos;ll be in touch shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
