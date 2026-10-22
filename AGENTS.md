
- Per-route head tags live in `src/data/routeMeta.ts`; `scripts/prerender-head.ts` (postbuild) writes `dist/<route>.html` so non-JS scrapers get correct previews. Why: SPA has no SSR.
- Share images are 2400x1260 HD JPGs (<350KB) in `public/og/`, rendered by scripts/og/render_og.py (regenerate when projects change). Why: scrapers reject mismatched or webp images.
- Page JSON-LD is built only in `src/data/structuredData.ts` (no asset imports/aliases); pages and `scripts/prerender-head.ts` both use it. Why: non-JS crawlers see the same labels as the live page.
- No Vercel Web Analytics on this site. The component requested `/_vercel/insights` and 404s on Lovable hosting. Why: the live site is Lovable, not Vercel.
- Derive portfolio totals from the shared projects catalog rather than fixed marketing counts. Why: homepage totals stay consistent as projects are added.
- Render platform marks through BrandLogo using self-hosted SVG masks and currentColor, with a neutral icon for unsupported tools. Why: logos remain available, theme-aligned, and consistent across pages.
