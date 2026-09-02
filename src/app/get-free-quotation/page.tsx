import type { Metadata } from "next";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Quotation — SolvForge",
  description:
    "Share your requirements and get a free, no-obligation quotation from SolvForge — a detailed plan, timeline, and cost breakdown. You're only billed if you decide to move forward.",
};

export default function GetFreeQuotationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-bg text-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-lime">
            Free Quote
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-white sm:text-5xl">
            Get a Free Quotation. No Advance Needed.
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/70">
            Share your requirements and get a free quotation from us. You don&apos;t
            have to buy anything — you&apos;re only billed if you want us to work
            on your project, so this quote is completely free.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-center leading-relaxed text-text-muted">
            Tell us what you need — we&apos;ll send you a detailed plan, timeline,
            and cost breakdown.
          </p>
          <div className="mt-8">
            <ServiceQuoteForm showHeader={false} />
          </div>
        </div>
      </section>
    </>
  );
}
