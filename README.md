# samek.fyi

Source for [samek.fyi](https://samek.fyi).

## Preview locally

```bash
hugo server -D
```

Open http://localhost:1313. The `-D` flag includes draft posts.

## Deploy

```bash
hugo && npx wrangler pages deploy public --project-name blog
```
