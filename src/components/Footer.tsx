import Link from "next/link";
import Image from "next/image";

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/services", label: "Service" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <>
      {/* Site-wide CTA band */}
      <section className="bg-teal-band">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
          <h2 className="text-2xl font-light text-white sm:text-3xl">
            Ready to Get Started on Your Project?
          </h2>
          <Link href="/contact" className="btn shrink-0 !bg-white !text-teal">
            Let&apos;s Talk to Me
          </Link>
        </div>
      </section>

      <footer className="bg-hero-bg text-white/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Image
              src="/media/solvforge_logo_transparent_308x121.png"
              alt="SolvForge"
              width={308}
              height={121}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              We build, manage, and market websites that help businesses grow —
              one team across hosting, security, development, and marketing.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xs font-bold text-white transition-colors hover:bg-lime hover:text-lime-ink"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            <p className="mb-1 font-bold text-white">SolvForge</p>
            {FOOTER_NAV.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-lime">
                {l.label}
              </Link>
            ))}
            <Link
              href="/industries/digital-solutions-for-bakeries"
              className="mt-2 w-fit rounded-full bg-white/10 px-3 py-1 text-xs hover:bg-white/20"
            >
              Bakeries
            </Link>
          </nav>

          <div className="text-sm">
            <p className="mb-2 font-bold text-white">Start a Project</p>
            <p className="mb-3">
              Tell us what you&apos;re building and we&apos;ll get back to you.
            </p>
            <form action="/contact" method="get" className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                className="rounded border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-lime focus:outline-none"
              />
              <button type="submit" className="btn-lime text-center">
                Start a Project
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-5 text-center text-xs">
            © All Rights Reserved {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </>
  );
}
