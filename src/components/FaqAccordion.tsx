"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/services";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-text">{item.question}</span>
              <span
                className={`shrink-0 text-text-muted transition-transform ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && <p className="px-6 pb-4 text-text-muted">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
