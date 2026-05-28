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

## Deploy

```bash
op run --env-file .env.deploy -- ./deploy.sh
```

This builds Hugo and deploys to Cloudflare Pages. `.env.deploy` is ignored and should contain the local 1Password reference for `CLOUDFLARE_API_TOKEN`.

## Commit / Push / Deploy workflow

**Blog repo (`~/src/blog`)** — the dependency chain is: **commit → push → deploy**.

When the user asks for any step, always run all preceding steps first:

- **"deploy"** → commit, push, then deploy (via `op run --env-file .env.deploy -- ./deploy.sh`)
- **"push"** → commit, then push
- **"commit"** → commit only
