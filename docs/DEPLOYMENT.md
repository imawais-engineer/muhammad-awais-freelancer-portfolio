# Deployment

Two targets share one codebase: **Lovable** (preview/publish) and **Vercel** (production, from
the connected GitHub repo).

## Vercel — build settings

Project → Settings → Build & Development Settings:

| Setting | Value |
| --- | --- |
| Framework Preset | `Vite` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install --legacy-peer-deps` |

### Why `--legacy-peer-deps`

`lovable-tagger@1.1.13` declares a peer range of `vite >=5.0.0 <8.0.0`, while the project runs
Vite 8. Plain `npm install` fails with `ERESOLVE`. `lovable-tagger` is a development-only plugin,
so accepting the mismatch is safe. The permanent alternative is downgrading Vite to 7.

### SPA routing

The Vite preset normally handles client-side routing. If deep links such as
`/projects/<slug>` return 404 after a successful build, add a rewrite:

| Source | Destination |
| --- | --- |
| `/(.*)` | `/index.html` |

## Images must be in Git

The site references images at `/__l5e/assets-v1/<asset_id>/<filename>`. That path is served by
Lovable's infrastructure only. For Vercel, the same files are committed under
`public/__l5e/assets-v1/…` so Vite copies them into `dist/` and the URLs resolve everywhere.

**If workflow screenshots are blank on a Vercel deploy, that mirror is missing or stale.**
Re-sync it with the script in [ASSETS.md](ASSETS.md), commit, and redeploy.

## Deployment checklist

1. `npm run build` passes locally.
2. `public/__l5e/assets-v1/` contains one file per `.asset.json` pointer in `src/assets/`.
3. Push to `main`; Vercel builds automatically.
4. After deploy, verify on the live URL:
   - homepage featured cards show screenshots,
   - a case-study page shows its workflow canvas,
   - the About/profile photo and testimonial avatar load,
   - a deep link opened directly (not via in-app navigation) renders instead of 404,
   - both contact forms submit and show the success card.

## Lovable publishing

Publishing from Lovable requires no configuration; it serves the CDN assets natively and the
mirrored copies in `public/` are simply unused there.

## SPA deep links on Vercel (404: NOT_FOUND)

Client-side routes such as `/contact` only exist in the browser router. Without a
fallback, Vercel looks for a `contact.html` file and returns `404: NOT_FOUND` on a
direct URL visit or refresh (in-app navigation still works).

`vercel.json` at the repo root fixes this:

- `rewrites` sends every path that is not a real file (no dot in the last segment)
  and not under `/assets` or `/__l5e` to `/index.html`, so React Router resolves it.
- `installCommand` is `npm install --legacy-peer-deps` (Vite 8 vs `lovable-tagger`
  peer range), `buildCommand` `npm run build`, `outputDirectory` `dist`.

Dashboard overrides in Settings > Build & Development Settings take precedence over
this file — clear them if a setting appears to be ignored.
