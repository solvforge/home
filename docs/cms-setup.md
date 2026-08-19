# Connecting the Sveltia CMS admin panel

The site itself already builds/deploys without this — `/admin` just can't
log in yet. GitHub repo (`solvforge/home`) and Vercel are already
connected; this is only about wiring up GitHub OAuth so `/admin` can
authenticate.

Unlike the sherdore.com home site (a fully static Astro build with no
backend of its own, which needed a separate Cloudflare Worker), solvforge
is Next.js on Vercel and already has working serverless functions — so the
OAuth token exchange is just two API routes in this same repo
(`src/app/auth/route.ts` and `src/app/callback/route.ts`). No separate
service, account, or deployment. One account (GitHub) and two env vars in
Vercel is all this needs.

## 1. Register a GitHub OAuth App

Go to https://github.com/settings/applications/new (on the `solvforge`
GitHub account) and create an app with:

- **Application name**: `SolvForge CMS`
- **Homepage URL**: `https://solvforge.com`
- **Authorization callback URL**: `https://home-one-gray.vercel.app/callback`
  (this must match whatever domain is currently live — see the note in
  `public/admin/config.yml`; update this callback URL, the config.yml
  `base_url`, and the redeploy together whenever the live domain changes,
  e.g. once solvforge.com replaces the temporary Vercel preview domain)
- **Enable Device Flow**: leave unchecked

Save the generated **Client ID**, and generate + save a **Client Secret**.

## 2. Add the two env vars to Vercel

In the Vercel dashboard → this project → **Settings → Environment
Variables**, add:

- `GITHUB_OAUTH_CLIENT_ID` — from step 1
- `GITHUB_OAUTH_CLIENT_SECRET` — from step 1

Redeploy (or just push — every push to `main` auto-deploys).

## 3. Log in

Visit `<live domain>/admin`, click "Login with GitHub," authorize the app.
You'll be able to edit the Home hero copy, About bio, and case studies
directly, and publishing commits straight to `solvforge/home` (which
triggers a Vercel redeploy).
