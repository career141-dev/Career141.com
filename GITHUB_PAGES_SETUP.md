# GitHub Pages Setup (GitHub Actions)

This repository deploys to GitHub Pages using the workflow in `.github/workflows/nextjs.yml`.

## Current Deployment Behavior

- Deploy trigger branch: `deve`
- Build type: Next.js static export (`output: 'export'`)
- Publish target: GitHub Pages environment (`github-pages`)

## Required GitHub Pages Settings

1. Open repository settings: `https://github.com/career141-dev/Career141.com/settings/pages`
2. Set **Source** to: **GitHub Actions**

Do not use **Deploy from a branch** for this project.

## URL

- Pages URL: `https://career141-dev.github.io/Career141.com/`

## Why Images Can Break on Pages

GitHub Pages project sites are hosted under a subpath (`/Career141.com`), not domain root.
So URLs like `/figmaAssets/file.png` resolve to `https://career141-dev.github.io/figmaAssets/file.png` and return 404.

## Image Path Rule for This Repo

Always use the helper in `src/lib/assetPath.ts` for assets in `public/`:

```ts
import { withBasePath } from '@/lib/assetPath'

const imageSrc = withBasePath('/figmaAssets/example.png')
```

For CSS background images:

```ts
style={{ backgroundImage: `url(${withBasePath('/figmaAssets/example.png')})` }}
```

Avoid hardcoded root paths such as `/figmaAssets/...` in components.

## Next.js Config Notes

`next.config.ts` now includes:

- `output: 'export'`
- `images.unoptimized: true`
- branch-aware `basePath` for GitHub Pages project URLs
- `NEXT_PUBLIC_BASE_PATH` env injection for client asset URLs

## Deployment Flow

```text
feature branch -> deve -> GitHub Actions build/deploy -> GitHub Pages
```

## Quick Verification

After pushing to `deve`:

1. Confirm the latest Actions run succeeded.
2. Open the Pages URL and hard-refresh.
3. In browser devtools network tab, verify image requests include `/Career141.com/`.
