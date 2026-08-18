import Link from "next/link";
import Image from "next/image";
import { getAllCategories } from "@/lib/services";
import ServicesNavMenu from "@/components/ServicesNavMenu";

const NAV_LINKS_AFTER_SERVICES = [
  { href: "/work", label: "Work" },
  { href: "https://blog.solvforge.com", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const categories = getAllCategories();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="solvforge" width={137} height={49} priority className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          <Link
            href="/"
            className="text-sm font-medium text-text-muted transition-colors hover:text-text"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-text-muted transition-colors hover:text-text"
          >
            About Us
          </Link>

          <ServicesNavMenu categories={categories} />

          {NAV_LINKS_AFTER_SERVICES.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}
