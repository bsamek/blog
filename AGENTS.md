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

Wrangler saves the OAuth login for later deployments. Use `npx wrangler whoami` to check authentication. No `.env.deploy` file or API token is required for this flow.

Alternatively, use a Cloudflare API token supplied through 1Password:

```bash
op run --env-file .env.deploy -- ./deploy.sh
```

Only this API-token method needs `.env.deploy`. The file is ignored and should contain the local 1Password reference for `CLOUDFLARE_API_TOKEN`.

## Commit / Push / Deploy workflow

**Blog repo (`~/src/blog`)** — the dependency chain is: **commit → push → deploy**.

When the user asks for any step, always run all preceding steps first:

- **"deploy"** → commit, push, then deploy (via `./deploy.sh` after Wrangler login, or the optional 1Password API-token method)
- **"push"** → commit, then push
- **"commit"** → commit only
