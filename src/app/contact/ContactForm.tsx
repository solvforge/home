"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "./actions";
import Recaptcha from "@/components/Recaptcha";

const initialState: ContactState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  return (
    <form action={formAction} className="mt-10 space-y-6">
      {/* Honeypot field — hidden from real users via CSS, bots tend to fill every field. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-heading">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-teal"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-heading">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-teal"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-heading">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-teal"
        />
        <p className="mt-1 text-xs text-text-muted">Describe your project details...</p>
      </div>

      <Recaptcha resetOn={state.status === "error"} />

      <button
        type="submit"
        disabled={pending}
        className="btn disabled:opacity-60"
      >
        {pending ? "Sending..." : "Submit Now"}
      </button>

      {state.status !== "idle" && (
        <p
          className={
            state.status === "success" ? "text-sm text-emerald-600" : "text-sm text-red-600"
          }
          role="status"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
