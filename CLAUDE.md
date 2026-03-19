# Blog — samek.fyi

Source for [samek.fyi](https://samek.fyi). Two repos produce the site:

| Repo | Path | Branch | Purpose |
|------|------|--------|---------|
| `bsamek/blog` | `~/src/blog` | `main` | Hugo blog (this repo) |
| `bsamek/quartz` (fork) | `~/src/bjj-quartz` | `v4` | Quartz SSG for BJJ notes at `/bjj` |

The Obsidian vault at `~/src/bjj` is symlinked as `bjj-quartz/content`. It syncs via Obsidian Sync (no git).

## Preview locally

Hugo blog:

```bash
hugo server -D          # http://localhost:1313
```

Quartz BJJ notes:

```bash
cd ~/src/bjj-quartz && npx quartz build --serve --port 8080   # http://localhost:8080
```

## Deploy

```bash
./deploy.sh
```

This builds Hugo, builds Quartz, copies Quartz output into `public/bjj/`, and deploys to Cloudflare Pages.

## Commit / Push / Deploy workflow

**Blog repo (`~/src/blog`)** — the dependency chain is: **commit → push → deploy**.

When the user asks for any step, always run all preceding steps first:

- **"deploy"** → commit, push, then deploy (via `./deploy.sh`)
- **"push"** → commit, then push
- **"commit"** → commit only

**Quartz repo (`~/src/bjj-quartz`)** — committed and pushed independently when changes occur:

```bash
cd ~/src/bjj-quartz && git push origin v4
```

## SSH note

The user connects via SSH and cannot use 1Password for commit signing. Use `git -c commit.gpgsign=false` for all commits.
