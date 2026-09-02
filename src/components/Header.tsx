"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getAllCategories } from "@/lib/services";
import ServicesNavMenu from "@/components/ServicesNavMenu";

const NAV_AFTER_SERVICES = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact Me" },
];

const itemBase =
  "whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-colors";
const activeClass = `${itemBase} bg-teal text-white shadow-sm`;
const inactiveClass = `${itemBase} text-text-muted hover:bg-paper-2 hover:text-teal`;

function Divider() {
  return <span aria-hidden="true" className="h-4 w-px shrink-0 bg-border" />;
}

export default function Header() {
  const categories = getAllCategories();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/media/solvforge_logo_308x121-1.png"
            alt="SolvForge"
            width={308}
            height={121}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop pill nav — boxed items, shadow, hairline separators */}
        <nav className="hidden items-center gap-1.5 rounded-full border border-border bg-paper px-2 py-1.5 shadow-md lg:flex">
          <Link href="/" className={pathname === "/" ? activeClass : inactiveClass}>
            Home
          </Link>
          <Divider />
          <Link
            href="/about"
            className={pathname === "/about" ? activeClass : inactiveClass}
          >
            About Us
          </Link>
          <Divider />
          <ServicesNavMenu
            categories={categories}
            active={pathname.startsWith("/services")}
          />
          {NAV_AFTER_SERVICES.map((link) => (
            <span key={link.href} className="flex items-center gap-1.5">
              <Divider />
              <Link
                href={link.href}
                className={pathname === link.href ? activeClass : inactiveClass}
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        <Link href="/contact" className="btn-lime hidden whitespace-nowrap sm:inline-block">
          Start a Project
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-md p-2 text-text lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={mobileOpen ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-paper px-6 py-4 lg:hidden">
          {/* boxed list with horizontal separators between items */}
          <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-paper shadow-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              ...NAV_AFTER_SERVICES,
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block whitespace-nowrap px-4 py-3 text-sm font-bold text-text-muted hover:bg-paper-2 hover:text-teal"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-lime mt-3 block text-center"
          >
            Start a Project
          </Link>
        </div>
      )}
    </header>
  );
}
