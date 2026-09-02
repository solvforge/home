import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Digital Solutions for Bakeries — SolvForge",
  description:
    "Websites, local SEO, online ordering, social media, and workflow automation built specifically for bakeries — attract more customers, increase sales, and run your bakery more efficiently.",
};

const HOW_WE_HELP = [
  {
    icon: "/media/bakery/oven-to-online.png",
    title: "From Oven to Online",
    body: "We help bakeries move beyond the counter by building digital channels that attract more customers and make daily operations smoother and more profitable.",
  },
  {
    icon: "/media/bakery/orders.png",
    title: "Orders Without the Chaos",
    body: "Reliable online ordering and WhatsApp integration so customers can browse, order, and pay effortlessly — while your team stays organized.",
  },
  {
    icon: "/media/bakery/operations.png",
    title: "Smart Bakery Operations",
    body: "Automate inventory tracking, order processing, staff scheduling, and customer communications to reduce waste, save time, and run your bakery more efficiently.",
  },
  {
    icon: "/media/bakery/presence.png",
    title: "Fresh Online Presence",
    body: "Fast, mobile-friendly websites and optimized Google Business Profiles that make your bakery easy to find and impossible to resist.",
  },
  {
    icon: "/media/bakery/reach.png",
    title: "Local Customers, Bigger Reach",
    body: "Dominate local search results with proven SEO strategies and Google Maps optimization so hungry customers in your area discover and choose your bakery first.",
  },
  {
    icon: "/media/bakery/loyalty.png",
    title: "Customers Who Keep Coming Back",
    body: "Loyalty programs, review management, and targeted social media campaigns that turn first-time visitors into regular, loyal customers.",
  },
];

const WHAT_WE_SERVE = [
  {
    icon: "wrench",
    title: "Bake More, Stress Less",
    body: "Streamline daily operations with automation tools that handle inventory, ordering, and staff coordination so you can focus on what matters most — baking.",
  },
  {
    icon: "search",
    title: "Your Bakery, Always Visible",
    body: "Get found instantly when customers search for fresh bread, cakes, or pastries nearby, through strong local SEO and Google Maps optimization.",
  },
  {
    icon: "tag",
    title: "Deliciously Simple Online Ordering",
    body: "A smooth, beautiful online menu and ordering experience that increases sales while reducing phone calls and manual order errors.",
  },
  {
    icon: "chat",
    title: "Build a Loyal Bakery Community",
    body: "Turn one-time buyers into regulars with loyalty programs, review management, and engaging social content that showcases your daily fresh bakes.",
  },
  {
    icon: "code",
    title: "Professional Website That Sells",
    body: "Showcase your creations with a modern, fast-loading website designed to convert visitors into customers 24/7.",
  },
  {
    icon: "lifebuoy",
    title: "One Partner, Complete Digital Growth",
    body: "Instead of juggling multiple freelancers, work with one team that understands how websites, SEO, social media, and automation work together to grow your bakery.",
  },
];

const PHOTOS = [
  "/media/bakery/photo-1.jpg",
  "/media/bakery/photo-2.jpg",
  "/media/bakery/photo-3.jpg",
  "/media/bakery/photo-4.jpg",
];

export default function BakeriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-bg text-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-lime">
            Industries
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
            Digital Solutions for Bakeries
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Complete digital solutions designed specifically for bakeries — from
            professional websites and local SEO to online ordering, social media,
            and workflow automation. Attract more customers, increase sales, and
            run your bakery more efficiently.
          </p>
          <Link href="/get-free-quotation" className="btn mt-7">
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* How we help */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-[1440px] px-6 py-16">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-teal">
            Services
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">From Oven to Online</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOW_WE_HELP.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-paper p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-paper-3">
                  <Image
                    src={item.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="h-9 w-9 object-contain"
                  />
                </span>
                <p className="mt-4 font-extrabold text-heading">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="mx-auto max-w-[1440px] px-6 py-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PHOTOS.map((src) => (
            <div key={src} className="aspect-square overflow-hidden rounded-xl bg-paper-2">
              <Image
                src={src}
                alt=""
                width={350}
                height={350}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* What we serve */}
      <section className="mx-auto max-w-[1440px] px-6 py-16">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-teal">
          Menu
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">What We Serve</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-text-muted">
          We provide complete digital solutions specifically designed for
          bakeries — websites, local SEO, online ordering, social media
          management, workflow automation, and customer support, all from one
          team.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_WE_SERVE.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-paper p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-paper-3 text-teal">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <p className="mt-4 font-extrabold text-heading">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-6 pb-16">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-hero-bg px-6 py-12 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Ready to grow your bakery online?
            </h2>
            <p className="mt-2 text-white/70">
              Tell us about your bakery and we&apos;ll put together a plan.
            </p>
          </div>
          <Link href="/get-free-quotation" className="btn-lime shrink-0">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
