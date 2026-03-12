# Blog — samek.fyi

Source for [samek.fyi](https://samek.fyi). Built with Hugo, deployed to Cloudflare Pages.

## Preview locally

```bash
hugo server -D
```

Open http://localhost:1313. The `-D` flag includes draft posts.

## Deploy

```bash
hugo && npx wrangler pages deploy public --project-name blog
```

## Commit / Push / Deploy workflow

The dependency chain is: **commit → push → deploy**.

When the user asks for any step, always run all preceding steps first:

- **"deploy"** → commit, push, then deploy
- **"push"** → commit, then push
- **"commit"** → commit only
