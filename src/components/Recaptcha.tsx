"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    grecaptcha?: { reset: () => void };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

// Renders nothing if reCAPTCHA isn't configured (no NEXT_PUBLIC_RECAPTCHA_SITE_KEY),
// same graceful-degradation pattern as the SMTP env vars.
export default function Recaptcha({ resetOn }: { resetOn: boolean }) {
  useEffect(() => {
    if (resetOn) {
      window.grecaptcha?.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetOn]);

  if (!SITE_KEY) return null;

  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      <div className="g-recaptcha" data-sitekey={SITE_KEY} />
    </>
  );
}
