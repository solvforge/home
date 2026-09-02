"use client";

import { useState } from "react";
import Link from "next/link";
import type { ServiceCategory } from "@/lib/services";

const triggerBase =
  "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-colors";

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
            ? `${triggerBase} bg-teal text-white shadow-sm`
            : `${triggerBase} text-text-muted hover:bg-paper-2 hover:text-teal`
        }
      >
        Services
        <svg
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2.5 4.5 6 8l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-[1040px] max-w-[94vw] -translate-x-1/2 pt-3">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 rounded-2xl border border-border bg-paper p-6 shadow-xl sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category.slug}>
                <p className="whitespace-nowrap border-b border-border pb-2 text-sm font-extrabold text-heading">
                  {category.name}
                </p>
                <ul className="mt-1 divide-y divide-border/60">
                  {category.services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="block whitespace-nowrap py-2 text-sm text-text-muted transition-colors hover:text-teal"
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
