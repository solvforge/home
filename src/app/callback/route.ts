import { NextRequest, NextResponse } from "next/server";

// Completes the GitHub OAuth flow started by /auth: exchanges the code for
// an access token, then hands it back to the /admin popup's opener window
// via postMessage, matching the protocol Sveltia/Decap CMS expects.
function renderCallbackHtml(status: "success" | "error", data: Record<string, string>) {
  const content = JSON.stringify({ provider: "github", ...data });
  const message = `authorization:github:${status}:${content}`;
  return `<!DOCTYPE html>
<html>
  <body>
    <script>
      (function() {
        if (window.opener) {
          window.opener.postMessage(${JSON.stringify(message)}, "*");
        }
        window.close();
      })();
    </script>
  </body>
</html>`;
}

function htmlResponse(status: "success" | "error", data: Record<string, string>) {
  return new NextResponse(renderCallbackHtml(status, data), {
    headers: { "Content-Type": "text/html" },
  });
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const csrfCookie = request.cookies.get("csrf-token")?.value;

  if (!code || !state || csrfCookie !== `github_${state}`) {
    return htmlResponse("error", { error: "csrf_mismatch", errorCode: "csrf_mismatch" });
  }

  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return htmlResponse("error", { error: "not_configured", errorCode: "not_configured" });
  }

  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ code, client_id: clientId, client_secret: clientSecret }),
    });
    const tokenJson = await tokenRes.json();

    if (!tokenJson.access_token) {
      const error = tokenJson.error ?? "no_access_token";
      return htmlResponse("error", { error, errorCode: error });
    }

    return htmlResponse("success", { token: tokenJson.access_token });
  } catch {
    return htmlResponse("error", { error: "exchange_failed", errorCode: "exchange_failed" });
  }
}
