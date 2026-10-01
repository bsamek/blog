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

OAuth deployment does not require `.env.deploy`. For the optional 1Password API-token method, see [AGENTS.md](AGENTS.md#deploy).
