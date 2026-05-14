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

## Deploy

```bash
./deploy.sh
```

This builds Hugo and deploys to Cloudflare Pages.

## Commit / Push / Deploy workflow

**Blog repo (`~/src/blog`)** — the dependency chain is: **commit → push → deploy**.

When the user asks for any step, always run all preceding steps first:

- **"deploy"** → commit, push, then deploy (via `./deploy.sh`)
- **"push"** → commit, then push
- **"commit"** → commit only
