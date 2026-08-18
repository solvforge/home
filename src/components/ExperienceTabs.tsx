"use client";

import { useState } from "react";
import type { ExperienceEntry } from "@/lib/about";

const TABS = [
  { key: "work", label: "Work Experience" },
  { key: "tools", label: "Experience in Tools" },
  { key: "education", label: "Educational Qualification" },
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
            className={`border-b-2 px-1 pb-3 text-sm font-medium transition-colors ${
              active === tab.key
                ? "border-accent text-text"
                : "border-transparent text-text-muted hover:text-text"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {data[active].map((entry) => (
          <div key={entry.title} className="rounded-2xl border border-border p-6">
            <p className="font-semibold text-text">{entry.title}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent">
              {entry.level}
            </p>
            <p className="mt-3 text-sm text-text-muted">{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
