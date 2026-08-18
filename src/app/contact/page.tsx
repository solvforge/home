import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — solvforge",
  description: "Get in touch with solvforge about a project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight">Let&apos;s talk</h1>
          <p className="mt-4 max-w-xl text-white/70">
            Tell us what you&apos;re building. We reply within a couple of
            business days.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-xl px-6 py-20">
        <ContactForm />
      </section>
    </>
  );
}
