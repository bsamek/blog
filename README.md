# samek.fyi

Source for [samek.fyi](https://samek.fyi).

## Preview

```bash
hugo server -D
```

## Deploy

Commit and push changes before deploying. For local deployment, use Wrangler's browser OAuth login:

```bash
npx wrangler login    # first use, or when the saved login expires
./deploy.sh
```

The script builds Hugo and deploys to the Cloudflare Pages project `blog`. Check authentication with `npx wrangler whoami`.

Use Wrangler OAuth exclusively for deployment. If authentication expires, run `npx wrangler login` again and complete the browser authorization.

## BJJ Flowchart

The flowchart lives at `/bjj/` and opens in Map. Technique content has one source: `static/bjj/data.js`.
Run `hugo server` and open <http://localhost:1313/bjj/> to preview it.
See [the migration notes](docs/bjj-migration.md) for ownership, integration details, and verification.
