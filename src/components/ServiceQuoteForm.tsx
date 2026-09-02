"use client";

import { useActionState } from "react";
import { sendQuoteRequest, type QuoteState } from "@/app/services/quoteActions";
import Recaptcha from "@/components/Recaptcha";

const initialState: QuoteState = { status: "idle", message: "" };

const inputClass =
  "mt-2 w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-teal";
const labelClass = "block text-sm font-medium text-heading";

export default function ServiceQuoteForm({ showHeader = true }: { showHeader?: boolean }) {
  const [state, formAction, pending] = useActionState(sendQuoteRequest, initialState);

  return (
    <div>
      {showHeader && (
        <>
          <h2 className="text-center text-2xl text-heading sm:text-3xl">
            Get a Free Quotation. No Advance Needed.
          </h2>
          <p className="mt-3 text-center text-text-muted">
            Tell us what you need — we&apos;ll send you a detailed plan, timeline, and cost breakdown
          </p>
        </>
      )}

      <form action={formAction} className={showHeader ? "mt-8 space-y-5" : "space-y-5"}>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company_website">Company website</label>
          <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First Name
            </label>
            <input id="firstName" name="firstName" type="text" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last Name
            </label>
            <input id="lastName" name="lastName" type="text" required className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input id="email" name="email" type="email" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input id="phone" name="phone" type="tel" required className={inputClass} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="platform" className={labelClass}>
              Preferred Platform
            </label>
            <select id="platform" name="platform" required className={inputClass}>
              <option value="">Select "Others" if you are not sure</option>
              <option>Shopify</option>
              <option>WooCommerce</option>
              <option>Magento</option>
              <option>Others</option>
            </select>
          </div>
          <div>
            <label htmlFor="businessType" className={labelClass}>
              Business Type
            </label>
            <select id="businessType" name="businessType" required className={inputClass}>
              <option value="">Select "Others" if you are not sure</option>
              <option>Fashion</option>
              <option>Electronics</option>
              <option>Services</option>
              <option>Others</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="serviceInterest" className={labelClass}>
              Service Interests
            </label>
            <select id="serviceInterest" name="serviceInterest" required className={inputClass}>
              <option value="">Select "Others" if you are not sure</option>
              <option>Marketing / SEO / Social Media</option>
              <option>Development / Mobile App / Website Development</option>
              <option>Tune Up &amp; Speed Optimization</option>
              <option>Website/Server Management</option>
              <option>Call Center Solution</option>
              <option>Others</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className={labelClass}>
              Budget Range
            </label>
            <input id="budget" name="budget" type="text" required className={inputClass} />
            <p className="mt-1 text-xs text-text-muted">
              Give us an idea so we will have better understanding of the work involved
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="timeframe" className={labelClass}>
              Timeframe to Start
            </label>
            <select id="timeframe" name="timeframe" required className={inputClass}>
              <option value="">Select an option</option>
              <option>ASAP</option>
              <option>1-2 Weeks</option>
              <option>1 Month</option>
            </select>
          </div>
          <div>
            <label htmlFor="region" className={labelClass}>
              Target Market or Region
            </label>
            <select id="region" name="region" className={inputClass}>
              <option value="">Select "Others" if you are not sure</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Middle East</option>
              <option>South East Asia</option>
              <option>Africa</option>
              <option>South America</option>
              <option>Others</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="hearAbout" className={labelClass}>
            How Did You Hear About Us?
          </label>
          <input id="hearAbout" name="hearAbout" type="text" className={inputClass} />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Additional information or questions regarding your quote
          </label>
          <textarea id="message" name="message" rows={4} required className={inputClass} />
        </div>

        <Recaptcha resetOn={state.status === "error"} />

        <button type="submit" disabled={pending} className="btn disabled:opacity-60">
          {pending ? "Submitting…" : "Submit"}
        </button>

        {state.status !== "idle" && (
          <p
            className={state.status === "success" ? "text-sm text-emerald-600" : "text-sm text-red-600"}
            role="status"
          >
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
