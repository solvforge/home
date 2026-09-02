export type ProcessStep = {
  step: string;
  name: string;
  description: string;
  icon: string;
};

export type ExperienceEntry = {
  title: string;
  level: string;
  description: string;
  icon: string;
};

export const HERO_TAGLINE =
  "Built, hosted, and maintained by the same hands — from the first line of code to ongoing support.";
export const ROLE_TITLE = "Web Developer & Systems Engineer";
export const YEARS_BADGE = "7+ Years of Experience";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "Step 01",
    name: "Strategy & Research",
    icon: "search",
    description:
      "We start with a conversation to understand the business, the goal, and the constraints — then agree on scope before any build work begins.",
  },
  {
    step: "Step 02",
    name: "Define & Build",
    icon: "layers",
    description:
      "The plan turns into a working build — site, server, or integration — with regular check-ins so there are no surprises at the end.",
  },
  {
    step: "Step 03",
    name: "Test & Refine",
    icon: "check",
    description:
      "We review it together, fix what needs fixing, and tune performance and security before anything goes live.",
  },
  {
    step: "Step 04",
    name: "Launch & Maintain",
    icon: "rocket",
    description:
      "We ship, hand over, and stay on for hosting, monitoring, and ongoing changes so the result keeps working.",
  },
];

/** Tab 1 — "What I Do" */
export const WORK_EXPERIENCE: ExperienceEntry[] = [
  {
    title: "Web Development",
    level: "WordPress & Laravel",
    icon: "code",
    description:
      "Custom WordPress themes and plugins, and full Laravel applications — from brochure sites and e-commerce to bespoke internal tools and dashboards.",
  },
  {
    title: "Managed Hosting & Server Management",
    level: "Linux",
    icon: "server",
    description:
      "Provisioning, hardening, monitoring, and day-to-day management of Linux servers — web stacks, databases, mail, backups, and updates.",
  },
  {
    title: "SEO & Digital Marketing",
    level: "On-page · Technical · Off-page",
    icon: "chart",
    description:
      "Keyword research, on-page and technical SEO, content, and link building, with monthly reporting on rankings and traffic.",
  },
  {
    title: "Call Center & VoIP",
    level: "Asterisk / FreePBX",
    icon: "phone",
    description:
      "Asterisk and FreePBX builds, SIP trunking, IVR and call-queue setup, and hosted call-center configurations for inbound and outbound teams.",
  },
  {
    title: "Website Maintenance & Support",
    level: "Ongoing",
    icon: "wrench",
    description:
      "Updates, backups, uptime monitoring, security patching, and small changes handled on a predictable monthly plan.",
  },
  {
    title: "Performance Optimization",
    level: "Core Web Vitals",
    icon: "gauge",
    description:
      "Speed and Core Web Vitals work for WordPress and Wix sites — caching, asset optimisation, database cleanup, and hosting-level tuning.",
  },
];

/** Tab 2 — "Tools & Tech" */
export const TOOLS: ExperienceEntry[] = [
  {
    title: "WordPress",
    level: "CMS & E-commerce",
    icon: "code",
    description:
      "Theme and plugin development, WooCommerce, multisite, and migrations between hosts.",
  },
  {
    title: "Laravel / PHP",
    level: "Application Framework",
    icon: "code",
    description:
      "APIs, queues, dashboards, and custom business applications on modern PHP.",
  },
  {
    title: "Asterisk & FreePBX",
    level: "Telephony",
    icon: "phone",
    description:
      "Dial plans, SIP trunks, IVR menus, call queues, and CDR reporting.",
  },
  {
    title: "Linux",
    level: "Server Administration",
    icon: "terminal",
    description:
      "Ubuntu and Debian, Nginx and Apache, systemd, firewalls, and shell scripting.",
  },
  {
    title: "MySQL / MariaDB",
    level: "Databases",
    icon: "database",
    description: "Schema design, query tuning, backups, and replication.",
  },
  {
    title: "Cloudflare & DNS",
    level: "Edge & Networking",
    icon: "cloud",
    description: "DNS, caching, WAF rules, and SSL for websites and mail.",
  },
  {
    title: "Git",
    level: "Version Control",
    icon: "branch",
    description: "Branch-based workflows and deployment pipelines.",
  },
  {
    title: "Bash & Cron",
    level: "Automation",
    icon: "terminal",
    description: "Scheduled jobs, backup routines, and maintenance scripts.",
  },
];

/** Tab 3 — "How I Work" */
export const EDUCATION: ExperienceEntry[] = [
  {
    title: "Direct communication",
    level: "No middlemen",
    icon: "chat",
    description:
      "You talk to the person doing the work — not a ticket queue or an account manager relaying messages.",
  },
  {
    title: "Transparent pricing",
    level: "No surprises",
    icon: "tag",
    description:
      "Clear monthly rates for ongoing work and clear quotes for projects, agreed before anything starts.",
  },
  {
    title: "No lock-in",
    level: "Month to month",
    icon: "refresh",
    description:
      "Ongoing plans run month to month. Scale up, scale down, or stop whenever you need to.",
  },
  {
    title: "Long-term support",
    level: "After launch",
    icon: "lifebuoy",
    description:
      "The relationship doesn't end at launch — most clients stay on for hosting, maintenance, and iterative improvements.",
  },
];

export const TAGLINES = [
  "Websites and servers that just work",
  "One point of contact, from build to maintenance",
  "Honest scoping, no lock-in contracts",
];
