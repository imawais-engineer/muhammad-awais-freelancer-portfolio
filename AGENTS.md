
- Per-route head tags live in `src/data/routeMeta.ts`; `scripts/prerender-head.ts` (postbuild) writes `dist/<route>.html` so non-JS scrapers get correct previews. Why: SPA has no SSR.
- Share images are 1200x630 JPGs in `public/og/` (regenerate when projects change). Why: scrapers reject mismatched or webp images.
- Page JSON-LD is built only in `src/data/structuredData.ts` (no asset imports/aliases); pages and `scripts/prerender-head.ts` both use it. Why: non-JS crawlers see the same labels as the live page.
