"use client";

import { useState } from "react";
import Link from "next/link";
import type { ServiceCategory } from "@/lib/services";

export default function ServicesNavMenu({
  categories,
  active = false,
}: {
  categories: ServiceCategory[];
  active?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/services"
        className={
          active
            ? "inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-sm font-medium text-white"
            : "inline-flex items-center gap-1 text-sm font-medium text-text-muted transition-colors hover:text-text"
        }
      >
        Services
        <svg
          className={`h-3 w-3 transition-transform ${active ? "text-white" : "text-text-muted"} ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {open && (
        <div className="absolute left-1/2 top-full w-[720px] max-w-[85vw] -translate-x-1/2 pt-3">
          <div className="grid grid-cols-4 gap-6 rounded-2xl border border-border bg-paper p-6 shadow-xl">
            {categories.map((category) => (
              <div key={category.slug}>
                <Link
                  href={`/services/${category.slug}`}
                  className="text-sm font-semibold text-text hover:text-accent"
                >
                  {category.name}
                </Link>
                <ul className="mt-2 space-y-1.5">
                  {category.services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${category.slug}/${service.slug}`}
                        className="text-sm text-text-muted hover:text-accent"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
