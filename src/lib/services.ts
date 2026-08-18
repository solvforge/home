export type ServiceItem = {
  slug: string;
  name: string;
  summary: string;
  billing: "recurring" | "project";
  details: string[];
};

export type ServiceCategory = {
  slug: string;
  name: string;
  summary: string;
  services: ServiceItem[];
};

// Placeholder copy throughout — edit freely, this isn't final marketing content.
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "marketing",
    name: "Marketing",
    summary: "Get found, and get chosen once you are.",
    services: [
      {
        slug: "bundled-seo",
        name: "Bundled SEO",
        summary: "Local, on-page, and off-page SEO combined into one ongoing engagement.",
        billing: "recurring",
        details: [
          "Covers local, on-page, and off-page work under one retainer",
          "Monthly reporting on rankings and traffic",
          "The right starting point if you don't already know which SEO service you need",
        ],
      },
      {
        slug: "local-seo",
        name: "Local SEO",
        summary: "Show up when nearby customers search for what you do.",
        billing: "recurring",
        details: [
          "Google Business Profile setup and optimization",
          "Local citation building and cleanup",
          "Review management strategy",
        ],
      },
      {
        slug: "on-page-seo",
        name: "On-Page SEO",
        summary: "Structure and content changes made directly on your site.",
        billing: "recurring",
        details: [
          "Keyword-targeted page structure and copy",
          "Technical SEO cleanup (metadata, headings, internal linking)",
          "Core Web Vitals / page-speed factors that affect ranking",
        ],
      },
      {
        slug: "off-page-seo",
        name: "Off-Page SEO",
        summary: "Build the external signals search engines use to rank you.",
        billing: "recurring",
        details: [
          "Backlink outreach and acquisition",
          "Directory and citation building",
          "Brand mention monitoring",
        ],
      },
      {
        slug: "social-media-management",
        name: "Social Media Management",
        summary: "Consistent posting and engagement across your business's social accounts.",
        billing: "recurring",
        details: [
          "Content calendar and scheduled posting",
          "Community management and response handling",
          "Monthly performance reporting",
        ],
      },
    ],
  },
  {
    slug: "security",
    name: "Security",
    summary: "Keep sites and servers from becoming someone else's problem.",
    services: [
      {
        slug: "server-hardening",
        name: "Server Hardening",
        summary: "Lock down server configuration against common attack vectors.",
        billing: "project",
        details: [
          "Firewall, SSH, and access-control configuration",
          "Removal of unused services and default credentials",
          "Ongoing hardening available as a recurring add-on",
        ],
      },
      {
        slug: "malware-removal",
        name: "Malware Removal",
        summary: "Clean an infected site or server and close the hole that let it in.",
        billing: "project",
        details: [
          "Full infection scan and removal",
          "Root-cause identification, not just symptom cleanup",
          "Blacklist removal requests (Google Safe Browsing, etc.)",
        ],
      },
    ],
  },
  {
    slug: "performance-optimization",
    name: "Performance Optimization",
    summary: "Make an existing site faster, on whatever platform it's already built on.",
    services: [
      {
        slug: "wordpress-performance",
        name: "WordPress Performance Optimization",
        summary: "Speed up a WordPress site without a rebuild.",
        billing: "project",
        details: [
          "Caching, image, and database optimization",
          "Plugin audit — remove or replace what's slowing things down",
          "Before/after Core Web Vitals reporting",
        ],
      },
      {
        slug: "wix-performance",
        name: "Wix Performance Optimization",
        summary: "Speed up a Wix site within the platform's constraints.",
        billing: "project",
        details: [
          "Image and asset optimization",
          "Third-party embed/script audit",
          "Before/after load-time reporting",
        ],
      },
    ],
  },
  {
    slug: "call-center",
    name: "Call Center",
    summary: "Phone infrastructure for businesses that live on the phone.",
    services: [
      {
        slug: "new-setup",
        name: "New Setup",
        summary: "Stand up a call center from scratch.",
        billing: "project",
        details: [
          "Requirements scoping (call volume, agents, routing needs)",
          "Full setup and configuration",
          "Agent onboarding and training",
        ],
      },
      {
        slug: "custom-asterisk-development",
        name: "Custom Asterisk Development",
        summary: "Custom dialplan and integration work on Asterisk.",
        billing: "project",
        details: [
          "Custom IVR and call-routing logic",
          "CRM / third-party system integration",
          "Ongoing support available as a recurring add-on",
        ],
      },
      {
        slug: "hosted-solution",
        name: "Hosted Solution",
        summary: "A fully hosted call center — no on-prem hardware to manage.",
        billing: "recurring",
        details: [
          "Hosted PBX, managed and monitored",
          "Scales with agent count",
          "Includes ongoing maintenance",
        ],
      },
      {
        slug: "sip-trunk-service",
        name: "SIP Trunk Service",
        summary: "Reliable SIP trunking for your existing phone system.",
        billing: "recurring",
        details: [
          "Trunk provisioning and configuration",
          "Failover and redundancy setup",
          "Usage and call-quality monitoring",
        ],
      },
    ],
  },
  {
    slug: "white-label-support",
    name: "White Label Support for Agencies",
    summary: "Backend support other agencies resell under their own name.",
    services: [
      {
        slug: "white-label-support",
        name: "White Label Support for Agencies",
        summary: "We do the work, you keep the client relationship — under your brand.",
        billing: "recurring",
        details: [
          "Fulfillment across hosting, maintenance, SEO, and development",
          "No client-facing branding from us, ever",
          "Flexible scope — plug in for one service or your whole delivery backend",
        ],
      },
    ],
  },
  {
    slug: "website-app-development",
    name: "Website & Application Development",
    summary: "Net-new builds — a project with a defined scope and end date.",
    services: [
      {
        slug: "website-development",
        name: "Website Development",
        summary: "Custom website builds, from marketing sites to complex web apps.",
        billing: "project",
        details: [
          "Design-to-build or build-from-your-designs",
          "Built to be handed off, not locked to us",
          "Ongoing management available separately once it ships",
        ],
      },
      {
        slug: "mobile-app-development",
        name: "Mobile App Development",
        summary: "Native or cross-platform mobile apps.",
        billing: "project",
        details: [
          "iOS and Android",
          "API/backend work included where the app needs it",
          "App store submission support",
        ],
      },
      {
        slug: "custom-software-development",
        name: "Custom Software Development",
        summary: "Bespoke software for a process that doesn't fit an off-the-shelf tool.",
        billing: "project",
        details: [
          "Requirements scoping through to delivery",
          "Internal tools, integrations, or full products",
          "Documented handoff, not a black box",
        ],
      },
    ],
  },
  {
    slug: "website-app-management",
    name: "Website & Application Management",
    summary: "Ongoing care for something that already exists.",
    services: [
      {
        slug: "website-maintenance",
        name: "Website Maintenance",
        summary: "Keep an existing site updated, backed up, and running.",
        billing: "recurring",
        details: [
          "Core, plugin, and dependency updates",
          "Scheduled backups",
          "A single point of contact instead of a rotating cast of freelancers",
        ],
      },
      {
        slug: "ecommerce-store-management",
        name: "Ecommerce Store Management",
        summary: "Ongoing management for a live online store.",
        billing: "recurring",
        details: [
          "Platform and plugin/app updates",
          "Catalog, inventory, and order-flow troubleshooting",
          "Uptime monitoring during peak sales periods",
        ],
      },
      {
        slug: "magento-site-management",
        name: "Magento Site Management",
        summary: "Specialized ongoing management for Magento stores.",
        billing: "recurring",
        details: [
          "Magento-specific patching and security updates",
          "Performance tuning for catalog-heavy stores",
          "Extension conflict troubleshooting",
        ],
      },
    ],
  },
];

export function getAllCategories(): ServiceCategory[] {
  return SERVICE_CATEGORIES;
}

export function getCategory(categorySlug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((c) => c.slug === categorySlug);
}

export function getService(
  categorySlug: string,
  serviceSlug: string
): { category: ServiceCategory; service: ServiceItem } | undefined {
  const category = getCategory(categorySlug);
  const service = category?.services.find((s) => s.slug === serviceSlug);
  if (!category || !service) return undefined;
  return { category, service };
}
