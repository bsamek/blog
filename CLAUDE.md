# Blog — samek.fyi

Source for [samek.fyi](https://samek.fyi). Built with Hugo, deployed to Cloudflare Pages.

## Preview locally

```bash
hugo server -D
```

Open http://localhost:1313. The `-D` flag includes draft posts.

## Deploy

```bash
hugo && \
  (cd ~/src/bjj-quartz && npx quartz build -o public) && \
  cp -r ~/src/bjj-quartz/public/ public/bjj/ && \
  npx wrangler pages deploy public --project-name blog
```

## BJJ Notes (Quartz)

The `/bjj` subpath serves an Obsidian vault (`~/src/bjj`) via [Quartz v4](https://quartz.jzhao.xyz), set up at `~/src/bjj-quartz`. It is not linked in the site nav (hidden/unlisted).

Preview Quartz locally:

```bash
cd ~/src/bjj-quartz && npx quartz build --serve --port 8080
```

## Commit / Push / Deploy workflow

The dependency chain is: **commit → push → deploy**.

When the user asks for any step, always run all preceding steps first:

- **"deploy"** → commit, push, then deploy
- **"push"** → commit, then push
- **"commit"** → commit only
