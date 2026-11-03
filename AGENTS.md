# Blog — samek.fyi

Source for [samek.fyi](https://samek.fyi).

| Repo | Path | Branch | Purpose |
|------|------|--------|---------|
| `bsamek/blog` | `~/src/blog` | `main` | Hugo blog (this repo) |

## Preview locally

Hugo blog:

```bash
hugo server -D          # http://localhost:1313
```

## Dates

For blog content and repo work, interpret relative dates such as "today" and "tomorrow" in the user's timezone, `America/New_York`. Do not use UTC for user-facing dates unless explicitly requested.

## URLs

Posts render at the site root, not under `/posts/`: a post with slug `foo` is live at `https://samek.fyi/foo/`. Don't verify deploys against `/posts/<slug>/` — that path returns 200 even when wrong (redirect/fallback). Check content at the root URL instead.

## Deploy

`./deploy.sh` builds Hugo and deploys to the Cloudflare Pages project `blog` using Wrangler.

For local deployment, authenticate with Cloudflare's browser OAuth flow:

```bash
npx wrangler login    # first use, or when the saved login expires
./deploy.sh
```

Use Wrangler OAuth exclusively for deployment. Wrangler saves the login for later deployments; use `npx wrangler whoami` to check authentication. If the login has expired, run `npx wrangler login` and have the user complete the browser authorization before deploying.

## Commit / Push / Deploy workflow

**Blog repo (`~/src/blog`)** — the dependency chain is: **commit → push → deploy**.

When the user asks for any step, always run all preceding steps first:

- **"deploy"** → commit, push, then deploy (via `./deploy.sh` after Wrangler OAuth login)
- **"push"** → commit, then push
- **"commit"** → commit only

## BJJ Flowchart

The application lives at `/bjj/` and opens in Map by default. `static/bjj/data.js` is the single source of truth for positions and techniques; `static/bjj/app.js` implements Map and Explorer. The page template is `layouts/bjj/single.html`, with scoped styles in `assets/css/bjj.css` and introductory copy/menu entry in `content/bjj.md`.

Add only Brian's recorded learning or additions he requests and sources verify. Preserve IDs, qualifications, provenance, and uncertainty. SLX is canonical for ashi; shallow K guard and K guard remain distinct. Empty outgoing lists mean nothing recorded yet. Unspecified finishes must remain unspecified. Source titles must remain visible even without a URL. Both views share technique cards and must not hard-code technique content.

Verify affected interactions in both views, in light/dark mode and at 390px phone width. Preserve script order and the pinned CDN scripts' integrity hashes. See `docs/bjj-migration.md` for migration details. The former BJJ repository and its private vault are not build inputs.
