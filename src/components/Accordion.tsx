"use client";

import { useState } from "react";

export type AccordionItem = { title: string; body: string };

export default function Accordion({ items }: { items: AccordionItem[] }) {
  // Independent toggles (matches the old site's Divi toggle modules) — all
  // start closed, and opening one does not close the others.
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const toggle = (i: number) =>
    setOpen((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = !!open[i];
        return (
          <div
            key={item.title}
            className="rounded-md border border-border bg-paper"
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left"
            >
              <span className="text-sm font-bold uppercase tracking-wide text-heading">
                {item.title}
              </span>
              <span
                aria-hidden="true"
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal text-white transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            {isOpen && (
              <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-muted">
                {item.body}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
