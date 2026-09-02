import type { Metadata } from "next";
import { Mulish, Lato } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const GA_ID = "G-0B53Y8GTJL";
const BREVO_CONVERSATIONS_ID = "6454923a0f89f01d8d655f31";

export const metadata: Metadata = {
  title: "SolvForge — Your Partner in Digital Growth",
  description:
    "SolvForge builds, manages, and markets websites that help businesses grow — web development, managed hosting, server management, security, SEO, and call center infrastructure.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mulish.variable} ${lato.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Google Analytics (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* Brevo Conversations chat widget */}
        <Script id="brevo-conversations" strategy="lazyOnload">
          {`
            (function(d, w, c) {
              w.BrevoConversationsID = '${BREVO_CONVERSATIONS_ID}';
              w[c] = w[c] || function() {
                (w[c].q = w[c].q || []).push(arguments);
              };
              var s = d.createElement('script');
              s.async = true;
              s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
              if (d.head) d.head.appendChild(s);
            })(document, window, 'BrevoConversations');
          `}
        </Script>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
