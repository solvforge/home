import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight text-white">solvforge</p>
          <p className="mt-1 text-sm">Managed websites, servers, and marketing.</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/work" className="hover:text-white">Work</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="https://blog.solvforge.com" className="hover:text-white">Blog</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs">
        © {new Date().getFullYear()} solvforge. All rights reserved.
      </div>
    </footer>
  );
}
