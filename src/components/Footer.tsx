import Link from "next/link";
import Image from "next/image";
import { getAllIndustries } from "@/lib/industries";
import { getAllHireRoles } from "@/lib/hire";

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

const COMPANY_NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/get-free-quotation", label: "Get a Free Quote" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const industries = getAllIndustries();
  const hireRoles = getAllHireRoles();

  return (
    <>
      {/* Site-wide CTA band */}
      <section className="bg-teal-band">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Ready to Get Started on Your Project?
          </h2>
          <Link href="/contact" className="btn shrink-0 !bg-white !text-teal">
            Let&apos;s Talk to Me
          </Link>
        </div>
      </section>

      <footer className="bg-hero-bg text-white/70">
        <div className="mx-auto max-w-6xl px-6 py-14">
          {/* Top: brand + project form */}
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
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

          {/* Link grid */}
          <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <nav className="flex flex-col gap-2 text-sm">
              <p className="mb-1 font-bold text-white">Company</p>
              {COMPANY_NAV.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-lime">
                  {l.label}
                </Link>
              ))}
            </nav>

            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/hire" className="mb-1 font-bold text-white hover:text-lime">
                Hire Developers
              </Link>
              {hireRoles.map((r) => (
                <Link key={r.slug} href={`/hire/${r.slug}`} className="hover:text-lime">
                  Hire {r.short}
                </Link>
              ))}
            </nav>

            <nav className="flex flex-col gap-2 text-sm sm:col-span-2 lg:col-span-2">
              <Link
                href="/industries"
                className="mb-1 font-bold text-white hover:text-lime"
              >
                Industry Specific
              </Link>
              <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {industries.map((i) => (
                  <Link
                    key={i.slug}
                    href={`/industries/${i.slug}`}
                    className="hover:text-lime"
                  >
                    {i.short}
                  </Link>
                ))}
              </div>
            </nav>
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
