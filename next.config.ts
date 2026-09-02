import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      // ---- Old WordPress leaf URLs whose slug was renamed (must precede the
      //      generic nested→flat rules below) ----
      { source: "/services/websites-applications/web-development-services", destination: "/services/website-development", permanent: true },
      { source: "/services/websites-applications/server-management-services", destination: "/services/server-management", permanent: true },
      { source: "/services/websites-applications/magento-website-development-management", destination: "/services/magento-site-management", permanent: true },
      { source: "/services/websites-applications/ecommerce-website-solutions", destination: "/services/ecommerce-store-management", permanent: true },
      { source: "/services/websites-applications/website-support-maintenance-plan", destination: "/services/website-maintenance", permanent: true },
      { source: "/services/performance-optimization/wordpress-speed-optimization", destination: "/services/wordpress-performance", permanent: true },
      { source: "/services/performance-optimization/wix-website-speed-optimization", destination: "/services/wix-performance", permanent: true },
      { source: "/services/marketing/social-media-marketing", destination: "/services/social-media-management", permanent: true },
      { source: "/services/marketing/seo-services/on-page-seo-services", destination: "/services/on-page-seo", permanent: true },
      { source: "/services/marketing/seo-services/local-seo-service", destination: "/services/local-seo", permanent: true },
      { source: "/services/white-label-website-support-for-agencies", destination: "/services/white-label-support", permanent: true },

      // Old pages with no current equivalent → services index
      { source: "/services/websites-applications/data-management-services", destination: "/services", permanent: true },
      { source: "/services/websites-applications/chatbot-for-website", destination: "/services", permanent: true },
      { source: "/services/marketing/ppc-advertising", destination: "/services", permanent: true },

      // ---- Generic: any remaining nested service path collapses to /services/<last-segment> ----
      { source: "/services/:a/:b/:service", destination: "/services/:service", permanent: true },
      { source: "/services/:category/:service", destination: "/services/:service", permanent: true },

      // ---- Bare category paths are menu groupings only, not pages ----
      { source: "/services/marketing", destination: "/services", permanent: true },
      { source: "/services/security", destination: "/services", permanent: true },
      { source: "/services/performance-optimization", destination: "/services", permanent: true },
      { source: "/services/call-center", destination: "/services", permanent: true },
      { source: "/services/call-center-solutions", destination: "/services", permanent: true },
      { source: "/services/website-app-development", destination: "/services", permanent: true },
      { source: "/services/website-app-management", destination: "/services", permanent: true },
      { source: "/services/websites-applications", destination: "/services", permanent: true },
      { source: "/services/server-hardening", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
