"use client";

import { useState } from "react";
import type { ExperienceEntry } from "@/lib/about";
import Icon from "@/components/Icon";

const TABS = [
  { key: "work", label: "What We Do" },
  { key: "tools", label: "Tools & Tech" },
  { key: "education", label: "How We Work" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function ExperienceTabs({
  work,
  tools,
  education,
}: {
  work: ExperienceEntry[];
  tools: ExperienceEntry[];
  education: ExperienceEntry[];
}) {
  const [active, setActive] = useState<TabKey>("work");
  const data: Record<TabKey, ExperienceEntry[]> = { work, tools, education };

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={`border-b-2 px-1 pb-3 text-sm font-bold transition-colors ${
              active === tab.key
                ? "border-teal text-heading"
                : "border-transparent text-text-muted hover:text-heading"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {data[active].map((entry) => (
          <div key={entry.title} className="flex gap-4 rounded-xl border border-border p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-paper-3 text-teal">
              <Icon name={entry.icon} className="h-5 w-5" />
            </span>
            <div>
              <p className="font-extrabold text-heading">{entry.title}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-teal">
                {entry.level}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
