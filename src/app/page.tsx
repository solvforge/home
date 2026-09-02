import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";

export const metadata = {
  title: "SolvForge — Your Partner in Digital Growth",
  description:
    "At SolvForge we build, manage, and market websites that help businesses grow — web development, managed hosting, server management, security, and SEO.",
};

const HOSTING_TOGGLES = [
  {
    title: "Reliability and Uptime",
    body: "One of the most crucial factors in website and server hosting is reliability. A reliable hosting service ensures that your website and server are consistently available to users without frequent interruptions. Downtime can lead to lost business opportunities, decreased user satisfaction, and negatively impact your online presence.",
  },
  {
    title: "Security and Data Protection",
    body: "Security is paramount when it comes to hosting your website and server. A secure hosting environment protects your data from unauthorized access, data breaches, and other cyber threats. Your hosting provider should implement industry-standard security measures such as firewalls, SSL certificates, regular security updates, and proactive monitoring to safeguard your website and server from potential risks.",
  },
  {
    title: "Scalability and Performance",
    body: "As your website and business grow, you'll need a hosting service that can scale accordingly. Scalability allows your hosting environment to accommodate increased traffic and resource demands without compromising performance. A well-performing server ensures that your website loads quickly and responds to user interactions smoothly. Factors such as server hardware, bandwidth, and caching mechanisms play a significant role in determining the performance of your website.",
  },
  {
    title: "Routine Updates",
    body: "We will update your website periodically as per your instructions i.e. contact details update, article posting, modifications in design etc.",
  },
  {
    title: "Daily Backups",
    body: "We safeguard your valuable data with daily backups. Our automated and secure backup solutions ensure that your files, databases, and critical information are protected against data loss. Focus on your work while we handle the rest.",
  },
  {
    title: "Security Patches",
    body: "We regularly update your software ensures vulnerabilities are fixed, preventing potential breaches. Stay ahead in the battle against hackers and keep your data safe. #CyberSecurity #StayProtected",
  },
];

const MAINTENANCE_TOGGLES = [
  {
    title: "Performance Optimization",
    body: "Performance optimization is another critical factor that involves fine-tuning the server's configurations, software settings, and website elements to enhance loading speeds and overall performance. An optimized website and server not only improve user satisfaction but also contribute to better search engine rankings.",
  },
  {
    title: "Website Monitoring",
    body: "Monitoring is an essential aspect of website and server maintenance. Continuous monitoring allows you to track the performance, availability, and resource usage of your website and server. It helps detect and address issues promptly before they escalate, minimizing downtime and ensuring a smooth user experience.",
  },
  {
    title: "Disaster Recovery Plans",
    body: "In addition to backups, a well-designed disaster recovery plan outlines the steps to be taken in case of a major outage or catastrophic event, allowing you to recover your website and server functionality swiftly and efficiently.",
  },
];

const SECONDARY_SERVICES = [
  {
    title: "Website Maintenance",
    text: "Comprehensive website maintenance included for worry-free management!",
    image: "/media/Website-Management-scaled.png",
    href: "/services/website-maintenance",
  },
  {
    title: "Local SEO",
    text: "Boost visibility, reach locals! Maximize local SEO",
    image: "/media/Local-SEO-Service-scaled.png",
    href: "/services/local-seo",
  },
  {
    title: "WordPress Package",
    text: "Exciting website packages for all needs! Custom, E-commerce, Blog, and more!",
    image: "/media/Web-Development-Services-scaled.png",
    href: "/services/website-development",
  },
  {
    title: "Server Management Service",
    text: "Efficient server management service for seamless performance.",
    image: "/media/Server-Management-Services-2-scaled.png",
    href: "/services/server-management",
  },
];

const PARTNERS = [
  { src: "/media/google-cloud_.png", alt: "Google Cloud" },
  { src: "/media/ionos-partner_.png", alt: "IONOS Partner" },
  { src: "/media/Microsoft-Partners.webp", alt: "Microsoft Partner" },
  { src: "/media/microsoft-azure_.png", alt: "Microsoft Azure" },
  { src: "/media/amazon-webservices_.png", alt: "Amazon Web Services" },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO (dark) ===== */}
      <section className="bg-hero-bg text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl leading-tight text-white sm:text-5xl">
              We&apos;re SolvForge — Your Partner in Digital Growth
            </h1>
            <p className="mt-5 max-w-xl text-white/75">
              At SolvForge, we build, manage, and market websites that help
              businesses grow. From web development and hosting to SEO and
              marketing solutions, we focus on creating digital experiences that
              drive real results. Our goal is simple — to help your brand perform
              better online and reach more customers with ease.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/get-free-quotation" className="btn">
                Get a Free Quote
              </Link>
              <Link href="/portfolio" className="btn-outline text-white">
                Portfolio
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/media/servers-hero.jpg"
              alt="SolvForge engineer working in a managed data center"
              width={1600}
              height={1068}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== OUR SERVICES (accordions) ===== */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-teal">
            Our Services
          </p>

          {/* Row 1 — text left, 3 accordions right */}
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl">Website &amp; Server Hosting</h3>
              <p className="mt-4 leading-relaxed text-text-muted">
                Unlock the true potential of your online presence with our
                top-notch Website &amp; Server Hosting services. Whether you need a
                reliable hosting solution for your website, an efficient server
                infrastructure, or both, we&apos;ve got you covered. Enjoy
                unparalleled performance, security, and support, backed by
                cutting-edge technology. Our team of experts ensures seamless
                management, allowing you to focus on your business while we handle
                the technicalities. Trust us to keep your website and servers
                running smoothly 24/7.
              </p>
            </div>
            <Accordion items={HOSTING_TOGGLES.slice(0, 3)} />
          </div>

          {/* Row 2 — 3 accordions left, text right */}
          <div className="mt-12 grid items-start gap-8 border-t border-border pt-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Accordion items={HOSTING_TOGGLES.slice(3, 6)} />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl">Website &amp; Server Management</h3>
              <p className="mt-4 leading-relaxed text-text-muted">
                Effective Website &amp; Server Management is the backbone of a
                successful online presence. From optimizing website performance
                and security to ensuring server reliability, it&apos;s vital for
                businesses to have expert professionals handle these critical
                aspects. Our team provides comprehensive solutions, including
                server setup, configuration, monitoring, backups, and ongoing
                maintenance. With our proactive approach, you can focus on growing
                your business while we ensure seamless operations, maximum uptime,
                and data protection.
              </p>
            </div>
          </div>

          {/* Row 3 — text left, 3 accordions right */}
          <div className="mt-12 grid items-start gap-8 border-t border-border pt-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl">Website &amp; Server Maintenance</h3>
              <p className="mt-4 leading-relaxed text-text-muted">
                When it comes to server maintenance, we go above and beyond to
                safeguard your data and keep your online operations running
                seamlessly. Our 24/7 monitoring and proactive troubleshooting
                ensure that potential server hiccups are identified and addressed
                before they escalate into critical problems. We also prioritize
                security measures, implementing the latest patches and firewalls
                to protect your servers from potential threats.
              </p>
            </div>
            <Accordion items={MAINTENANCE_TOGGLES} />
          </div>
        </div>
      </section>

      {/* ===== OUR SERVICES (secondary — image cards) ===== */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-3xl sm:text-4xl">Our Services</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SECONDARY_SERVICES.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-paper transition-shadow hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-paper-3">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={640}
                    height={480}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 text-center">
                  <h4 className="text-base">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {s.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RELIABLE / TRUST ===== */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-16 lg:grid-cols-[1fr_auto]">
          <div>
            <h3 className="text-3xl">
              Reliable, Highly Available, Secure and Hassle-Free Hosting
            </h3>
            <h5 className="mt-5 text-text-muted">Just ask our loyal customers</h5>
            <p className="mt-4 leading-relaxed text-text-muted">
              We understand that to achieve your vision you need a partner to
              provide a technological advantage and a get-it-done attitude.
              SolvForge pairs exceptional customer support with a broad technology
              portfolio to deliver all the hosting power you will ever need to
              help realize your true potential.
            </p>
            <p className="mt-4 font-semibold text-text">
              That&apos;s why SolvForge is one of the most loved managed hosting
              providers in the industry.
            </p>
          </div>
          <Image
            src="/media/BBB-A-plus-2-174x300.webp"
            alt="BBB Accredited Business — A+ Rating"
            width={174}
            height={300}
            className="h-auto w-[150px] justify-self-start lg:justify-self-end"
          />
        </div>

        {/* partner logos */}
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 border-t border-border pt-12">
            {PARTNERS.map((p) => (
              <Image
                key={p.alt}
                src={p.src}
                alt={p.alt}
                width={160}
                height={48}
                className="h-8 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-9"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAKE THE SWITCH (black) ===== */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-light text-white sm:text-4xl">
            We&apos;ll Make it Easy for You to Make the Switch
          </h2>
          <p className="mt-5 leading-relaxed text-white/70">
            No contracts. Transparent pricing. And an entire team dedicated to
            helping you migrate your data from your current host. We provide
            complimentary migrations for new server orders for most hosting
            control panels (Interworx, Plesk, and cPanel). We are always
            available for free advice and can also offer custom migrations from
            nearly all other types of hosting and CMS systems.
          </p>
          <Link href="/contact" className="btn mt-8 !bg-teal">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
