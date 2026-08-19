import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Starts the GitHub OAuth flow for the Sveltia CMS admin panel at /admin.
// The CMS opens this route in a popup, we redirect to GitHub, and GitHub
// sends the user back to /callback.
export async function GET(request: NextRequest) {
  const provider = request.nextUrl.searchParams.get("provider");
  if (provider !== "github") {
    return new NextResponse("Unsupported provider", { status: 400 });
  }

  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  if (!clientId) {
    return new NextResponse("GitHub OAuth is not configured", { status: 500 });
  }

  const csrfToken = crypto.randomUUID().replaceAll("-", "");

  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", csrfToken);

  const response = NextResponse.redirect(authorizeUrl);
  response.cookies.set("csrf-token", `github_${csrfToken}`, {
    httpOnly: true,
    maxAge: 600,
    sameSite: "lax",
    secure: true,
    path: "/",
  });
  return response;
}
