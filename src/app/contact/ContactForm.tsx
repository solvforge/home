"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "./actions";

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

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
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
