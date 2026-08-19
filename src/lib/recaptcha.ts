export async function verifyRecaptcha(token: FormDataEntryValue | null): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true; // reCAPTCHA not configured — skip (e.g. local dev without keys)
  if (typeof token !== "string" || !token) return false;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }).toString(),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}
