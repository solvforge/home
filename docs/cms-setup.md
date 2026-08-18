# Connecting the Sveltia CMS admin panel

The site itself already builds/deploys without this — `/admin` just can't
log in yet. This is the one-time, account-bound step needed to make it work.
GitHub repo (`solvforge/home`) and Vercel are already connected; this is
only about wiring up GitHub OAuth so `/admin` can authenticate. Needs your
GitHub/Cloudflare accounts, so it has to be done by you — not me.

## 1. Register a GitHub OAuth App

Go to https://github.com/settings/applications/new (make sure you're on the
`solvforge` GitHub account, not your personal one) and create an app with:

- **Homepage URL**: `https://solvforge.com` (anything reasonable works here)
- **Authorization callback URL**: `https://<your-worker-subdomain>.workers.dev/callback`
  (you'll get the exact worker URL in step 2 — you can come back and fill
  this in after deploying it)

Save the generated **Client ID** and **Client Secret** — you'll need both next.

## 2. Deploy the Sveltia CMS auth worker to Cloudflare Workers

This is a small, officially maintained OAuth proxy
(https://github.com/sveltia/sveltia-cms-auth) that lets the `/admin` UI log
in via GitHub. It only deploys to Cloudflare Workers.

1. Fork or clone https://github.com/sveltia/sveltia-cms-auth
2. Deploy it (either the repo's "Deploy to Cloudflare" button, or locally via
   `wrangler deploy` after `npm install`)
3. In the Cloudflare Workers dashboard, under the deployed worker's
   **Settings → Variables**, set:
   - `GITHUB_CLIENT_ID` — from step 1
   - `GITHUB_CLIENT_SECRET` — from step 1 (encrypt it)
   - `ALLOWED_DOMAINS` — `*.solvforge.com,*.vercel.app` (the `vercel.app`
     entry covers the current temporary preview domain; once solvforge.com
     is the real live domain you can drop it)
4. Note the worker's URL, e.g. `https://sveltia-cms-auth.<you>.workers.dev`
5. Go back to the GitHub OAuth App from step 1 and set its callback URL to
   `<that worker URL>/callback`

## 3. Point the CMS at the worker

Send me the worker's URL from step 2 and I'll update
`public/admin/config.yml`'s `base_url`, commit, and let you push. Once
that's live, `/admin` on whichever domain is currently serving the site
will be able to log in with GitHub and publish edits directly to
`solvforge/home` (which triggers a Vercel redeploy).
