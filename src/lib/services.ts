export type Service = {
  slug: string;
  name: string;
  summary: string;
  details: string[];
};

// Placeholder copy — edit freely, this isn't final marketing content.
export const SERVICES: Service[] = [
  {
    slug: "web-app-development",
    name: "Web & App Development",
    summary: "Custom web applications built for speed, reliability, and growth.",
    details: [
      "Full-stack builds from a blank repo to a live product",
      "Modern frameworks, chosen to fit the project, not a one-size-fits-all default",
      "Clean handoff: documented, tested, and easy for your team to pick up",
    ],
  },
  {
    slug: "saas-product-engineering",
    name: "SaaS & Product Engineering",
    summary: "End-to-end product builds for teams launching a new SaaS.",
    details: [
      "Billing, auth, and multi-tenant foundations done right the first time",
      "Iterative delivery — ship a real v1 fast, then build on it",
      "Built to be maintained, not just demoed",
    ],
  },
  {
    slug: "automation-integrations",
    name: "Automation & Integrations",
    summary: "Connect the tools you already use and cut out manual busywork.",
    details: [
      "API integrations between the systems your business runs on",
      "Internal tools and dashboards that replace spreadsheets",
      "Scheduled jobs, webhooks, and data pipelines that just work",
    ],
  },
  {
    slug: "support-maintenance",
    name: "Ongoing Support & Maintenance",
    summary: "Keep an existing product healthy without hiring a full team.",
    details: [
      "Bug fixes, security patches, and dependency upgrades",
      "Performance and reliability monitoring",
      "A steady point of contact instead of a rotating cast of freelancers",
    ],
  },
];
