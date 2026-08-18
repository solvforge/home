"use server";

import nodemailer from "nodemailer";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendQuoteRequest(
  _prev: QuoteState,
  formData: FormData
): Promise<QuoteState> {
  // Honeypot: real users never fill this hidden field in.
  if (formData.get("company_website")) {
    return { status: "success", message: "Thanks — we'll be in touch shortly." };
  }

  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const platform = String(formData.get("platform") ?? "").trim();
  const businessType = String(formData.get("businessType") ?? "").trim();
  const serviceInterest = String(formData.get("serviceInterest") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const timeframe = String(formData.get("timeframe") ?? "").trim();
  const region = String(formData.get("region") ?? "").trim();
  const hearAbout = String(formData.get("hearAbout") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !platform ||
    !businessType ||
    !serviceInterest ||
    !budget ||
    !timeframe ||
    !message
  ) {
    return { status: "error", message: "Please fill in all the required fields." };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    console.error(
      "Quote request submitted but SMTP_HOST/SMTP_USER/SMTP_PASS/CONTACT_TO_EMAIL are not configured."
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

  const lines = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    platform && `Preferred Platform: ${platform}`,
    businessType && `Business Type: ${businessType}`,
    serviceInterest && `Service Interests: ${serviceInterest}`,
    budget && `Budget Range: ${budget}`,
    timeframe && `Timeframe to Start: ${timeframe}`,
    region && `Target Market or Region: ${region}`,
    hearAbout && `How Did You Hear About Us: ${hearAbout}`,
    "",
    "Additional information:",
    message,
  ].filter(Boolean);

  try {
    await transport.sendMail({
      from: CONTACT_FROM_EMAIL ?? SMTP_USER,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New quote request from ${firstName} ${lastName}`,
      text: lines.join("\n"),
    });
  } catch (error) {
    console.error("Failed to send quote request:", error);
    return {
      status: "error",
      message: "Sorry, something went wrong sending your request. Please email us directly.",
    };
  }

  return { status: "success", message: "Thanks — we'll send you a detailed plan, timeline, and cost breakdown shortly." };
}
