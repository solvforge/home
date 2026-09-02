export type HireCard = { icon: string; title: string; body: string };

export type HireRole = {
  slug: string;
  role: string; // e.g. "Unity Developers"
  short: string; // footer / index label
  heroBlurb: string;
  buildHeading: string;
  build: HireCard[];
  stack: string[];
  faqExtra?: { question: string; answer: string }[];
};

export const HIRE_ROLES: HireRole[] = [
  {
    slug: "unity-developers",
    role: "Unity Developers",
    short: "Unity Developers",
    heroBlurb:
      "Unity developers for games, AR/VR, simulations, and interactive 3D — as a dedicated developer, on a fixed project, or as extra capacity for your team.",
    buildHeading: "What We Build With Unity",
    build: [
      { icon: "code", title: "Games — 2D & 3D", body: "Mobile, PC, and WebGL games — gameplay systems, tooling, UI, and store submission for iOS and Android." },
      { icon: "gauge", title: "AR & VR Experiences", body: "AR Foundation (ARKit / ARCore) and XR headset builds for training, retail, and product visualisation." },
      { icon: "chart", title: "Simulations & Training", body: "Interactive simulations with realistic physics, scoring, analytics, and reporting." },
      { icon: "layers", title: "Interactive 3D & Configurators", body: "Real-time 3D product configurators embedded in websites or shipped as standalone apps." },
      { icon: "branch", title: "Multiplayer & Backend", body: "Netcode, matchmaking, leaderboards, and cloud saves with Firebase or a custom backend." },
      { icon: "rocket", title: "Prototypes & MVPs", body: "Playable prototypes to validate an idea quickly before a full production build." },
    ],
    stack: ["Unity (URP / HDRP)", "C# scripting & editor tooling", "AR Foundation — ARKit & ARCore", "XR / VR (OpenXR, Meta, PICO)", "Multiplayer (Netcode, Mirror, Photon)", "Physics, animation & timeline", "Shaders & rendering optimisation", "Addressables & build optimisation", "CI/CD (Cloud Build, GitHub Actions)", "Firebase, PlayFab & custom backends"],
  },
  {
    slug: "wordpress-developers",
    role: "WordPress Developers",
    short: "WordPress Developers",
    heroBlurb:
      "WordPress developers for custom themes, plugins, WooCommerce, and performance work — as a dedicated developer, on a fixed project, or alongside your team.",
    buildHeading: "What We Build With WordPress",
    build: [
      { icon: "code", title: "Custom Themes", body: "Hand-built themes and full-site editing block themes designed around your brand — no bloated page builders required." },
      { icon: "wrench", title: "Custom Plugins", body: "Bespoke plugins and integrations for functionality that off-the-shelf plugins don't cover." },
      { icon: "tag", title: "WooCommerce Stores", body: "Product catalogues, checkout customisation, subscriptions, and payment gateway integrations." },
      { icon: "gauge", title: "Speed & Core Web Vitals", body: "Caching, asset optimisation, database cleanup, and hosting-level tuning to pass Core Web Vitals." },
      { icon: "refresh", title: "Migrations & Rescues", body: "Host-to-host migrations, PHP version upgrades, and cleanup of hacked or broken sites." },
      { icon: "lifebuoy", title: "Maintenance & Care", body: "Updates, backups, uptime monitoring, security patching, and small changes on a monthly plan." },
    ],
    stack: ["WordPress core & block editor", "PHP 8 & modern WP APIs", "WooCommerce & extensions", "ACF & custom fields", "REST API & headless WP", "MySQL / MariaDB", "Nginx / Apache & caching", "WP-CLI & CI deploys", "Multisite", "SEO plugin config (Yoast / Rank Math)"],
  },
  {
    slug: "web-designers",
    role: "Web Designers",
    short: "Web Designers",
    heroBlurb:
      "Web designers for landing pages, marketing sites, and full product UI — from wireframes to a polished, responsive design ready to build.",
    buildHeading: "What We Design",
    build: [
      { icon: "layers", title: "Marketing Websites", body: "Multi-page sites with a clear structure, strong hierarchy, and a design system that scales." },
      { icon: "rocket", title: "Landing Pages", body: "Conversion-focused pages with message match, one clear CTA, and a tight attention ratio." },
      { icon: "code", title: "Product & App UI", body: "Dashboards, flows, and component libraries designed for real states, not just happy paths." },
      { icon: "tag", title: "Design Systems", body: "Reusable tokens, components, and documentation so your product stays consistent as it grows." },
      { icon: "chart", title: "Redesigns", body: "Refreshing a dated site while keeping what works — structure, SEO, and conversion intact." },
      { icon: "check", title: "Handoff-Ready Files", body: "Figma files with proper layout, specs, and assets that developers can build from directly." },
    ],
    stack: ["Figma", "Responsive & mobile-first layout", "Design systems & tokens", "Accessibility (WCAG basics)", "Prototyping & user flows", "Tailwind-friendly output", "Brand & visual identity", "Landing-page conversion patterns", "Design-to-code handoff", "Basic HTML/CSS awareness"],
  },
  {
    slug: "react-native-developers",
    role: "React Native Developers",
    short: "React Native Developers",
    heroBlurb:
      "React Native developers for cross-platform iOS and Android apps from one codebase — dedicated, project-based, or team augmentation.",
    buildHeading: "What We Build With React Native",
    build: [
      { icon: "code", title: "Cross-Platform Apps", body: "One codebase for iOS and Android, with native modules where the platform needs them." },
      { icon: "branch", title: "API Integration", body: "REST and GraphQL integration, offline caching, and background sync." },
      { icon: "chat", title: "Push & Real-Time", body: "Push notifications, in-app messaging, and live data with WebSockets or Firebase." },
      { icon: "tag", title: "Payments & Auth", body: "In-app purchases, Stripe, social login, and biometric authentication." },
      { icon: "gauge", title: "Performance", body: "Startup time, list virtualisation, and Hermes/New Architecture tuning." },
      { icon: "rocket", title: "Store Submission", body: "Build pipelines, code signing, and App Store / Play Store release management." },
    ],
    stack: ["React Native (New Architecture)", "TypeScript", "Expo & bare workflow", "React Navigation", "Redux Toolkit / Zustand / Query", "Native modules (Swift / Kotlin)", "Firebase & push notifications", "Reanimated & Gesture Handler", "EAS / Fastlane CI", "Jest & Detox testing"],
  },
  {
    slug: "angularjs-developers",
    role: "AngularJS Developers",
    short: "AngularJS Developers",
    heroBlurb:
      "Angular developers for enterprise web apps and dashboards — new builds, feature work, and upgrades from older AngularJS versions.",
    buildHeading: "What We Build With Angular",
    build: [
      { icon: "code", title: "Enterprise Web Apps", body: "Large single-page applications with modular architecture and lazy-loaded routes." },
      { icon: "chart", title: "Dashboards & Admin", body: "Data-heavy dashboards with tables, charts, filtering, and role-based access." },
      { icon: "refresh", title: "AngularJS → Angular Upgrades", body: "Incremental migration from AngularJS (1.x) to modern Angular without a full rewrite." },
      { icon: "layers", title: "Component Libraries", body: "Shared UI libraries and design-system components used across multiple apps." },
      { icon: "branch", title: "API & State", body: "RxJS-based data flows, NgRx state management, and typed API clients." },
      { icon: "check", title: "Testing & Quality", body: "Unit and end-to-end coverage, linting, and CI gates before every merge." },
    ],
    stack: ["Angular (standalone components)", "TypeScript", "RxJS", "NgRx / Signals", "Angular Material / PrimeNG", "SCSS & theming", "Jest / Karma & Cypress", "Nx monorepos", "SSR with Angular Universal", "AngularJS (1.x) legacy"],
  },
  {
    slug: "nodejs-developers",
    role: "Node.js Developers",
    short: "Node.js Developers",
    heroBlurb:
      "Node.js developers for APIs, real-time services, and backend systems — dedicated, project-based, or added to your existing team.",
    buildHeading: "What We Build With Node.js",
    build: [
      { icon: "server", title: "REST & GraphQL APIs", body: "Well-structured APIs with validation, auth, rate limiting, and clear documentation." },
      { icon: "chat", title: "Real-Time Services", body: "WebSocket and SSE services for chat, notifications, and live dashboards." },
      { icon: "database", title: "Data Layers", body: "Schema design, migrations, and query tuning for PostgreSQL, MySQL, or MongoDB." },
      { icon: "refresh", title: "Jobs & Queues", body: "Background workers, scheduled jobs, and message queues with BullMQ or RabbitMQ." },
      { icon: "branch", title: "Integrations", body: "Third-party APIs, webhooks, payment providers, and internal service-to-service calls." },
      { icon: "cloud", title: "Deploy & Scale", body: "Dockerised services, health checks, logging, and horizontal scaling." },
    ],
    stack: ["Node.js (LTS)", "TypeScript", "Express / Fastify / NestJS", "PostgreSQL, MySQL, MongoDB", "Prisma / TypeORM / Knex", "Redis & BullMQ", "GraphQL (Apollo / Yoga)", "Docker & CI/CD", "Jest / Vitest", "OpenAPI / Swagger"],
  },
  {
    slug: "android-app-developers",
    role: "Android App Developers",
    short: "Android Developers",
    heroBlurb:
      "Android developers for native apps in Kotlin — new builds, feature work, and Play Store releases, as a dedicated developer or project team.",
    buildHeading: "What We Build for Android",
    build: [
      { icon: "code", title: "Native Android Apps", body: "Kotlin apps built with Jetpack Compose and modern Android architecture components." },
      { icon: "branch", title: "API & Offline", body: "Retrofit networking, Room storage, WorkManager sync, and offline-first behaviour." },
      { icon: "tag", title: "Payments & Billing", body: "Google Play Billing, subscriptions, and third-party payment SDK integration." },
      { icon: "chat", title: "Notifications & Messaging", body: "Firebase Cloud Messaging, in-app messaging, and deep links." },
      { icon: "gauge", title: "Performance & Battery", body: "Startup profiling, memory leaks, jank, and background work optimisation." },
      { icon: "rocket", title: "Play Store Release", body: "Signing, staged rollouts, Play Console setup, and release management." },
    ],
    stack: ["Kotlin", "Jetpack Compose", "Coroutines & Flow", "Room & DataStore", "Retrofit / Ktor", "Hilt / Koin DI", "WorkManager", "Firebase (Auth, FCM, Crashlytics)", "Gradle & CI (GitHub Actions / Bitrise)", "Espresso & JUnit"],
  },
  {
    slug: "iphone-app-developers",
    role: "iPhone App Developers",
    short: "iPhone Developers",
    heroBlurb:
      "iOS developers for native iPhone and iPad apps in Swift — new builds, feature work, and App Store releases, dedicated or project-based.",
    buildHeading: "What We Build for iOS",
    build: [
      { icon: "code", title: "Native iOS Apps", body: "Swift apps built with SwiftUI (or UIKit where needed) and a clean, testable architecture." },
      { icon: "branch", title: "API & Sync", body: "URLSession / async-await networking, Core Data or SwiftData, and background sync." },
      { icon: "tag", title: "In-App Purchases", body: "StoreKit 2, subscriptions, and receipt validation." },
      { icon: "chat", title: "Push & Widgets", body: "APNs push, notification service extensions, widgets, and App Clips." },
      { icon: "gauge", title: "Performance", body: "Launch time, memory, Instruments profiling, and smooth 120 Hz scrolling." },
      { icon: "rocket", title: "App Store Release", body: "Signing, TestFlight, App Store Connect setup, and review submission." },
    ],
    stack: ["Swift", "SwiftUI & UIKit", "async / await & Combine", "Core Data / SwiftData", "StoreKit 2", "APNs & notification extensions", "Xcode Cloud / Fastlane", "WidgetKit & App Intents", "XCTest & snapshot tests", "TestFlight"],
  },
  {
    slug: "python-developers",
    role: "Python Developers",
    short: "Python Developers",
    heroBlurb:
      "Python developers for backends, automation, data pipelines, and scripting — dedicated, project-based, or added to your team.",
    buildHeading: "What We Build With Python",
    build: [
      { icon: "server", title: "APIs & Backends", body: "FastAPI and Django services with auth, validation, background tasks, and docs." },
      { icon: "refresh", title: "Automation & Scripting", body: "Scheduled jobs, scrapers, report generators, and internal tooling." },
      { icon: "database", title: "Data Pipelines", body: "ETL jobs, scheduled ingests, and data cleaning with pandas and SQL." },
      { icon: "chart", title: "Reporting & Dashboards", body: "Analytics endpoints, exports, and lightweight dashboards over your data." },
      { icon: "branch", title: "Integrations", body: "Third-party APIs, webhooks, payment providers, and internal services." },
      { icon: "cloud", title: "Deploy & Ops", body: "Dockerised services, cron, logging, and monitoring on your infrastructure." },
    ],
    stack: ["Python 3.12", "FastAPI & Django", "SQLAlchemy / Django ORM", "PostgreSQL & Redis", "Celery / RQ", "pandas & NumPy", "pytest", "Docker & CI/CD", "Pydantic", "Requests / httpx & BeautifulSoup"],
  },
  {
    slug: "laravel-developers",
    role: "Laravel Developers",
    short: "Laravel Developers",
    heroBlurb:
      "Laravel developers for web apps, APIs, dashboards, and SaaS products — dedicated, project-based, or alongside your existing team.",
    buildHeading: "What We Build With Laravel",
    build: [
      { icon: "code", title: "Web Apps & SaaS", body: "Full applications with auth, billing, teams, roles, and an admin panel." },
      { icon: "server", title: "APIs", body: "REST APIs with Sanctum / Passport auth, resources, versioning, and documentation." },
      { icon: "chart", title: "Dashboards & Admin", body: "Filament or custom admin panels with tables, filters, exports, and metrics." },
      { icon: "refresh", title: "Queues & Scheduling", body: "Background jobs, scheduled tasks, notifications, and event-driven workflows." },
      { icon: "tag", title: "Payments & Subscriptions", body: "Stripe / Paddle via Cashier, plans, trials, invoices, and dunning." },
      { icon: "branch", title: "Integrations", body: "Third-party APIs, webhooks, and internal service connections." },
    ],
    stack: ["Laravel 11", "PHP 8.3", "Livewire / Inertia + Vue or React", "Filament", "MySQL / PostgreSQL", "Redis, Horizon & queues", "Sanctum / Passport", "Cashier (Stripe / Paddle)", "Pest / PHPUnit", "Docker (Sail) & CI/CD"],
  },
];

export function getAllHireRoles(): HireRole[] {
  return HIRE_ROLES;
}

export function getHireRole(slug: string): HireRole | undefined {
  return HIRE_ROLES.find((r) => r.slug === slug);
}
