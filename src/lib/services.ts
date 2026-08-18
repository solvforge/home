export type PricingTier = {
  name: string;
  price?: string;
  features: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
};

export type ServiceItem = {
  slug: string;
  name: string;
  summary: string;
  billing: "recurring" | "project";
  intro?: string;
  details: string[];
  pricing?: PricingTier[];
  testimonial?: Testimonial;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  summary: string;
  services: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "marketing",
    name: "Marketing",
    summary: "Get found, and get chosen once you are.",
    services: [
      {
        slug: "seo-services",
        name: "SEO Services",
        summary: "Custom SEO packages covering on-page, off-page, and technical work.",
        billing: "recurring",
        intro:
          "Instead of a fixed-price package, we scope SEO around what your business actually needs. Most projects run $150–$500/month depending on scope and competition.",
        details: [
          "Full-spectrum SEO: on-page, off-page, and technical, across all devices",
          "Custom strategy per business — no one-size-fits-all package",
          "Keyword research targeted at revenue-driving search terms, not just traffic",
          "White-hat backlink building through outreach, directories, and guest posts",
          "In-house content team for SEO-optimized articles, landing pages, and metadata",
          "Monthly reporting: keyword rankings, traffic analytics, link progress, competitor analysis",
          "Technical SEO audits and fixes — crawl issues, schema markup, and more",
          "No lock-in contracts — scale up or down anytime",
        ],
      },
      {
        slug: "local-seo",
        name: "Local SEO",
        summary: "Show up when nearby customers search for what you do.",
        billing: "recurring",
        details: [
          "Hyperlocal keyword targeting for location-specific search terms",
          "Google Business Profile setup, optimization, and ongoing management",
          "Consistent NAP (Name, Address, Phone) citations across directories",
          "Localized content creation tailored to your community and services",
          "Review and reputation management to build trust and improve rankings",
          "Monthly local SEO performance reporting",
        ],
      },
      {
        slug: "on-page-seo",
        name: "On-Page SEO",
        summary: "Structure and content changes made directly on your site.",
        billing: "recurring",
        details: [
          "Technical SEO cleanup — metadata, headings, internal linking, indexation",
          "Keyword-targeted page structure and copy",
          "Content optimization built around real search intent, not just keyword stuffing",
          "Custom-built, self-maintaining performance architecture, not a one-off audit",
        ],
      },
      {
        slug: "link-building",
        name: "Link Building",
        summary: "Earn the backlinks that move search rankings.",
        billing: "recurring",
        intro: "Over 400 orders delivered, trusted by 250+ customers.",
        details: [
          "Backlinks from Web 2.0 properties, bookmarking sites, wikis, and social signals",
          "High PA/DA and .edu/.gov domain placements where relevant",
          "Full refund if a purchased link isn't placed within 30 business days",
          "Customers have typically seen higher rankings within 4 weeks",
        ],
      },
      {
        slug: "social-media-management",
        name: "Social Media Management",
        summary: "Consistent posting and real engagement across your social accounts.",
        billing: "recurring",
        details: [
          "Platform-specific strategy — content and tactics tailored per channel",
          "Original branded graphics, captions, and CTAs, not generic templates",
          "Hashtag and trend research to maximize organic reach",
          "Real engagement: replying to messages and comments, not just scheduling posts",
          "Content calendar with client approval built in before anything goes live",
          "Monthly analytics reporting on reach, engagement, clicks, and conversions",
        ],
        pricing: [
          {
            name: "Basic",
            features: [
              "2 branded posts/week",
              "1 platform of your choice",
              "5 hashtag research",
              "Monthly analytics",
              "Min. 60s video for YouTube",
            ],
          },
          {
            name: "Standard",
            features: [
              "5 posts/week",
              "5 platforms of your choice",
              "10 hashtag research",
              "Weekly analytics",
              "Min. 300s video for YouTube",
            ],
          },
          {
            name: "Business",
            features: [
              "15 posts/week",
              "All 6 major platforms covered",
              "25 hashtag research",
              "Daily analytics",
              "Min. 600s video for YouTube",
            ],
          },
        ],
      },
      {
        slug: "internet-radio-setup",
        name: "Internet Radio Setup",
        summary: "Set up and configure internet radio streaming for your business or project.",
        billing: "project",
        details: [
          "Full streaming setup and configuration",
          "A newer addition to what we offer — get in touch to talk through your specific setup",
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
          "Secures system configurations and disables unnecessary services",
          "Strict SSH and TLS policies, default ports eliminated",
          "Principle of Least Privilege (PoLP) enforcement, IDS where applicable",
          "CIS benchmark standards applied across Linux, Windows, and cloud infrastructure",
          "Ongoing hardening available as a ongoing security plan, not just a one-time pass",
        ],
      },
      {
        slug: "malware-removal",
        name: "Malware Removal",
        summary: "Clean an infected site or server and close the hole that let it in.",
        billing: "project",
        intro: "$149 flat rate, complete removal within 24 hours, one-year warranty.",
        details: [
          "Deep scans for hidden backdoors, injected scripts, and suspicious files",
          "Manual and automated removal — expert inspection, not just an automated scan",
          "Google blacklist removal assistance (+$29 if your site's been flagged)",
          "Server-side security audit to find how the infection happened, not just clean it",
          "Firewall setup and hardening afterward to prevent reinfection",
          "Work done without disrupting your live site",
        ],
      },
      {
        slug: "one-time-fix",
        name: "One-Time Fix",
        summary: "A single specific issue, fixed fast, no ongoing commitment.",
        billing: "project",
        intro: "$49 for 2 hours of unlimited fixes.",
        details: [
          "Covers broken layouts, plugin conflicts, CSS glitches, PHP errors, login issues",
          "Full backup taken before anything is touched",
          "We fix the root cause, not just patch the symptom",
          "Pay only once you're happy with the result",
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
        name: "WordPress Speed Optimization",
        summary: "Speed up a WordPress site without a rebuild.",
        billing: "project",
        details: [
          "Real-world load times, not just a better score on a testing tool",
          "Core Web Vitals optimization — LCP, FID, CLS",
          "Plugin and theme bloat cleanup, replaced with lightweight alternatives",
          "Database optimization and image compression (WebP conversion included)",
          "Works with whatever you're already running — Elementor, Divi, WPBakery, or custom code",
          "Full backups and staging environments used for anything major",
        ],
        pricing: [
          {
            name: "Basic",
            features: [
              "Initial speed audit",
              "Image optimization",
              "Caching configuration",
              "CSS/JS/HTML minification",
              "Database optimization",
              "Basic CDN setup",
            ],
          },
          {
            name: "Standard",
            features: [
              "Everything in Basic",
              "Advanced caching techniques",
              "Lazy loading for images/video",
              "Plugin audit and cleanup",
              "30 days of monitoring and reporting",
            ],
          },
          {
            name: "Premium",
            features: [
              "Everything in Standard",
              "Custom CDN configuration",
              "Code-level optimization",
              "Mobile-specific optimization",
              "Deep database optimization (indexing, query tuning)",
              "60 days of priority support",
            ],
          },
        ],
      },
      {
        slug: "wix-performance",
        name: "Wix Website Speed Optimization",
        summary: "Speed up a Wix site within the platform's constraints.",
        billing: "project",
        details: [
          "Wix-specific optimization — built around the platform's real structure and limits",
          "Image and asset optimization, unused sections stripped, animations streamlined",
          "Audit of installed apps/integrations to remove bloat",
          "Mobile-first speed adjustments",
          "Before/after speed reports via GTmetrix and Google PageSpeed Insights",
          "Full backup taken before any change",
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
        slug: "call-center-setup",
        name: "Call Center Setup",
        summary: "Stand up a call center from scratch.",
        billing: "project",
        details: [
          "Click-to-call, call recording, voicemail, queue management (6 queuing methods)",
          "Progressive and advanced auto-dialers with configurable dialing ratios",
          "Multi-level IVR (up to 3 levels), automatic call distribution, custom SMS API",
          "Lead management dashboard with automatic distribution and contact history",
          "Live call monitoring, activity dashboards, account-based analytics",
          "Can be combined with a hosted cloud contact center for remote-agent flexibility",
          "Need a server too? We can point you to our partner site, managedservers.us",
        ],
      },
      {
        slug: "call-center-management",
        name: "Call Center Management",
        summary: "Ongoing management of an existing call center operation.",
        billing: "recurring",
        details: [
          "Click-to-call, call recording, voicemail, 6-method queue manager",
          "Progressive and advanced dialers, multi-level IVR, custom SMS API",
          "Lead management dashboard, contact history, call disposition tracking",
          "Live monitoring, activity dashboards, and account-based analytics",
          "In-call transfer, warm/cold transfer, barge/whisper/snooping for supervisors",
          "No limit on the number of campaigns you run",
        ],
      },
      {
        slug: "asterisk-development",
        name: "Custom Asterisk Development",
        summary: "Custom dialplan, IVR, and integration work on the Asterisk platform.",
        billing: "project",
        details: [
          "Installation and configuration tailored to your setup",
          "Custom IVR systems, call routing, and telephony applications",
          "AMI & AGI development for real-time call control and CRM integration",
          "Dial plan design, high-availability cluster setup with failover",
          "Call transfer, text-to-speech, call monitoring/recording, DID & ANI routing",
          "Database integration so agents get caller info and history during calls",
          "Call Detail Records (CDR), automated attendant, calling card functionality",
          "Ongoing support, maintenance, and training available",
        ],
      },
      {
        slug: "hosted-call-center-solution",
        name: "Hosted Call Center Solution",
        summary: "A fully hosted call center — no on-prem hardware to manage.",
        billing: "recurring",
        details: [
          "Quick cloud-based deployment — no hardware, just an internet connection",
          "Scales from a 3-agent startup to a 300-agent operation",
          "Custom IVR flows, skill-based routing, call queue management",
          "Live agent monitoring, call quality tracking, and satisfaction dashboards",
          "CRM/ticketing integration (Zoho, HubSpot, Salesforce, Freshdesk, and more)",
          "Omnichannel: voice, email, SMS, and WhatsApp in one platform",
          "Transparent monthly billing, no surprise fees",
          "Custom hold tunes, call announcements, whitelisting/blacklisting, toll-free numbers",
        ],
      },
      {
        slug: "sip-trunk-service",
        name: "SIP Trunk Service",
        summary: "Reliable SIP trunking for your existing phone system.",
        billing: "recurring",
        details: [
          "No account activation charges",
          "Competitive call rates to any country",
          "Works on a recharge basis — pay for what you use",
          "Can be merged with a hosted cloud contact center for remote-agent flexibility",
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
          "We operate as an invisible extension of your agency — clients never see us",
          "24/7 monitoring, maintenance, and technical support",
          "Content edits, plugin updates, performance tuning, and malware cleanup, all covered",
          "White-labeled monthly reports you can present directly to your clients",
          "Communicate via your agency's own email addresses and workflows",
          "Strict confidentiality — signed NDAs, your clients stay yours",
          "Agency-centric pricing designed to leave room for your own markup",
          "Scales with you — a handful of sites or hundreds",
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
        summary: "Custom WordPress website builds, from marketing sites to full e-commerce.",
        billing: "project",
        details: [
          "Custom design tailored to your brand, not a generic template",
          "Responsive across desktop, tablet, and mobile",
          "Built-in SEO best practices from the start",
          "WooCommerce integration available for e-commerce",
          "Theme customization and plugin development as needed",
          "Ongoing support and maintenance available separately once it ships",
        ],
        pricing: [
          {
            name: "Basic",
            features: [
              "Up to 5 pages (Home, About, Services, Blog, Contact)",
              "Responsive design",
              "Basic SEO setup",
              "Standard theme customization",
              "1 revision, 1 month of support",
            ],
          },
          {
            name: "Standard",
            features: [
              "Up to 10 pages",
              "Custom design tailored to your brand",
              "Advanced SEO setup",
              "WooCommerce integration",
              "Blog setup, 3 revisions, 3 months of support",
            ],
          },
          {
            name: "Professional",
            features: [
              "Up to 50 pages",
              "Fully custom design and custom plugin development",
              "WooCommerce with payment gateway",
              "Membership/subscription features",
              "5 revisions, 6 months of support",
            ],
          },
        ],
      },
      {
        slug: "mobile-app-development",
        name: "Mobile App Development",
        summary: "Native or cross-platform mobile apps.",
        billing: "project",
        details: [
          "iOS, Android, or hybrid (React Native/Flutter)",
          "Custom-built for your goals, not a templated app",
          "End-to-end: wireframing, prototyping, development, store deployment",
          "API and third-party integrations — CRMs, payment gateways, databases",
          "Agile workflow with sprint-based milestones and full visibility",
          "Post-launch support, bug fixes, and new features",
          "App Store / Google Play submission and optimization support",
        ],
      },
      {
        slug: "custom-software-development",
        name: "Custom Software Development",
        summary: "Bespoke software for a process that doesn't fit an off-the-shelf tool.",
        billing: "project",
        details: [
          "Requirements scoping through to delivery",
          "Cross-platform expertise where the project needs it",
          "API and third-party integrations",
          "Agile, transparent workflow with regular updates",
          "Post-launch support and maintenance",
          "Secure coding standards throughout",
        ],
      },
      {
        slug: "landing-page-design",
        name: "Landing Page Design",
        summary: "A single-purpose page built to convert visitors into leads or customers.",
        billing: "project",
        details: [
          "Custom design built around your brand and one clear call to action",
          "Mobile-responsive and SEO-friendly from the start",
          "Fast-loading — a slow landing page loses conversions before it earns them",
          "A/B testing available to refine what actually converts",
          "CRM / email marketing integration",
        ],
        pricing: [
          {
            name: "Basic",
            features: ["Up to 3 sections", "Mobile optimization", "SEO-friendly structure", "1 revision"],
          },
          {
            name: "Standard",
            features: ["Up to 5 sections", "Mobile & tablet optimization", "Basic A/B testing", "3 revisions"],
          },
          {
            name: "Business",
            features: ["Up to 20 sections", "Advanced A/B testing", "Full SEO optimization", "5 revisions"],
          },
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
        intro: "Plans scale with your site's size and update frequency — get in touch for a quote. 30-day money-back guarantee on every plan. Prefer a single fix instead? One-time support starts at $49.",
        details: [
          "WordPress core, plugin, and theme updates",
          "Cloud backups and uptime monitoring",
          "Security scans and speed optimization",
          "On-page SEO monitoring, broken-link checks",
          "Content and design updates — new sections, blog posts, image swaps",
          "No long-term contracts, cancel anytime",
        ],
      },
      {
        slug: "server-management",
        name: "Server Management",
        summary: "Ongoing management of the server your site or app runs on.",
        billing: "recurring",
        details: [
          "Linux and Windows server support — cPanel, Plesk, DirectAdmin, SolusVM, Virtualizor",
          "Xen, KVM, VMware, and Hyper-V virtualization support",
          "24/7 monitoring, uptime tracking, and incident response",
          "Security hardening, firewall configuration, malware scanning",
          "Application-specific tuning — Apache, NGINX, MySQL, and more",
          "Scheduled backups with secure storage and restore protocols",
          "Custom stack support — Redis, Elasticsearch, Node.js, Docker, and more",
          "Real server admins for support, not a ticketing bot",
        ],
        pricing: [
          {
            name: "Management",
            price: "$39.95/mo per server",
            features: [
              "Unlimited admin tasks",
              "Certified admins, 1-hour response time",
              "Full server setup and smart migration",
              "Complete server management and performance optimization",
            ],
          },
          {
            name: "Combo Offer",
            price: "$79.95/mo (20% off, $35 second month)",
            features: [
              "cPanel server management + cPanel security included",
              "1-hour response time",
              "Certified specialist",
            ],
          },
          {
            name: "Security",
            price: "$49.95 one-time per server",
            features: [
              "In-depth server analysis and firewall installation",
              "Antivirus configuration",
              "Disaster/hack recovery, spam security, IP blacklisting",
            ],
          },
        ],
      },
      {
        slug: "ecommerce-store-management",
        name: "Ecommerce Store Management",
        summary: "Ongoing management for a live online store.",
        billing: "recurring",
        details: [
          "Product uploads, inventory management, and order processing",
          "Platform and plugin/app updates across Shopify, WooCommerce, Magento, BigCommerce, Wix, and more",
          "On-page, technical, and off-page SEO for the store",
          "Social media management and content bundled in on higher tiers",
          "Multichannel sync — Amazon, eBay, Walmart, Facebook Shops",
          "Security scanning and regular backups",
          "Custom performance reporting: traffic, sales, cart abandonment",
        ],
        pricing: [
          {
            name: "Starter",
            features: [
              "Up to 200 product uploads/updates monthly",
              "Essential speed optimization",
              "On-page SEO for homepage, categories, products",
              "1 platform social media (4 posts/mo)",
              "1 SEO article/mo, security scan + monthly backup",
            ],
          },
          {
            name: "Growth",
            features: [
              "Up to 1,000 product uploads/updates monthly",
              "CDN + caching setup",
              "2 platforms social media (12 posts/mo)",
              "2 SEO articles/mo, bi-weekly audit + backup",
              "Automated inventory sync",
            ],
          },
          {
            name: "Enterprise",
            features: [
              "Up to 2,000 product uploads/updates monthly",
              "Full speed optimization incl. code cleanup + CDN",
              "3 platforms social media (20 posts/mo + engagement)",
              "4 SEO articles/mo, weekly audit + backup",
              "Multichannel integration, email/chat/phone support",
            ],
          },
        ],
        testimonial: {
          quote: "They took our store from chaos to calm. Everything runs smoothly now — orders, stock, and even customer queries.",
          author: "Anna M., Shopify Store Owner",
        },
      },
      {
        slug: "magento-site-management",
        name: "Magento Site Management",
        summary: "Specialized ongoing management for Magento stores.",
        billing: "recurring",
        details: [
          "Magento-specific patching and security updates",
          "Performance tuning for catalog-heavy stores — Magento scales to 500,000+ products",
          "Third-party service integration (CRM, ERP, payment modules)",
          "Extension conflict troubleshooting",
          "SEO-ready configuration and ongoing optimization",
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
