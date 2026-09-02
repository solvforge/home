// Small stroke-based icon set. All paths drawn in a 24x24 viewBox.
const PATHS: Record<string, string> = {
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM20 20l-4-4",
  layers: "M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 17l9 5 9-5",
  check: "M4 12l5 5L20 6",
  rocket: "M5 15c-1 2-1 4-1 4s2 0 4-1M9 15l-3-3a9 9 0 0 1 9-9c2 0 3 1 3 3a9 9 0 0 1-9 9ZM14 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  code: "M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14",
  server: "M4 5h16v5H4zM4 14h16v5H4ZM8 7.5h.01M8 16.5h.01",
  chart: "M4 20V4M4 20h16M8 16v-5M13 16V8M18 16v-9",
  phone: "M6 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z",
  wrench: "M14 7a4 4 0 0 1-5 5l-5 5 2 2 5-5a4 4 0 0 0 5-5l-2 2-2-2 2-2Z",
  gauge: "M12 13l4-4M4 18a9 9 0 1 1 16 0M12 13a1.5 1.5 0 1 0 0 0Z",
  terminal: "M4 5h16v14H4zM8 10l3 2-3 2M13 14h4",
  database: "M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3ZM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  cloud: "M7 18a4 4 0 0 1 0-8 6 6 0 0 1 11.6 2A3.5 3.5 0 0 1 18 18Z",
  branch: "M6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 8v8M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 6c0 6-6 4-6 10",
  chat: "M4 5h16v10H9l-4 4V5Z",
  tag: "M4 4h7l9 9-7 7-9-9V4ZM8 8h.01",
  refresh: "M4 12a8 8 0 0 1 14-5M20 5v4h-4M20 12a8 8 0 0 1-14 5M4 19v-4h4",
  lifebuoy: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM8.5 8.5 5.5 5.5M15.5 8.5l3-3M8.5 15.5l-3 3M15.5 15.5l3 3",
};

export default function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={PATHS[name] ?? PATHS.check} />
    </svg>
  );
}
