"use server";

import nodemailer from "nodemailer";
import { verifyRecaptcha } from "@/lib/recaptcha";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field in.
  if (formData.get("company_website")) {
    return { status: "success", message: "Thanks — we'll be in touch shortly." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in every field." };
  }

  if (!(await verifyRecaptcha(formData.get("g-recaptcha-response")))) {
    return { status: "error", message: "Please complete the reCAPTCHA verification." };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    console.error(
      "Contact form submitted but SMTP_HOST/SMTP_USER/SMTP_PASS/CONTACT_FROM_EMAIL/CONTACT_TO_EMAIL are not configured."
    );
    return {
      status: "error",
      message: "Sorry, something went wrong on our end. Please email us directly instead.",
    };
  }

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transport.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch (error) {
    console.error("Failed to send contact message:", error);
    return {
      status: "error",
      message: "Sorry, something went wrong sending your message. Please email us directly.",
    };
  }

  return { status: "success", message: "Thanks — we'll be in touch within a couple of business days." };
}
