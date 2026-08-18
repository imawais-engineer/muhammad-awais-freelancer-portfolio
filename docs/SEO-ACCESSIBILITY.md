# SEO and accessibility

## Per-page metadata

`src/components/Seo.tsx` sets, for every route:

- `<title>` (keyword-led, under 60 characters)
- `<meta name="description">` (under 160 characters)
- canonical URL, derived from the route `path`
- Open Graph (`og:title`, `og:description`, `og:type`) and `twitter:card`
- optional JSON-LD passed by the page

Helpers live in `src/lib/seo.ts`. Defaults for the document shell (title, description, viewport)
are in `index.html`.

## Structured data

`ProjectDetail.tsx` emits a `CreativeWork` JSON-LD node per case study (name, description,
author, keywords, dateCreated). The homepage/about surface the `Person` identity. Keep the
author name in sync with `site.name`.

## Semantics

- One `<h1>` per page; section headings step down without skipping levels.
- Landmarks: `<header>`, `<main id="main">`, `<aside>`, `<footer>`.
- Case-study lists use real `<ol>`/`<ul>`, meta grids use `<dl>`, quotes use
  `<figure>`/`<blockquote>`/`<figcaption>`.

## Accessibility guarantees

- "Skip to content" link targeting `#main`.
- Visible `:focus-visible` outlines on all interactive elements.
- 44px minimum touch targets.
- Every image has descriptive `alt` text (workflow screenshots name the project); decorative
  icons are `aria-hidden`.
- Form fields have associated labels, inline error messaging, and an announced, focused success
  state after submission.
- All motion is disabled under `prefers-reduced-motion`.

## Performance

- Route-level code splitting; homepage is the only eager route.
- WebP screenshots with explicit `width`/`height` so no layout shift occurs.
- `loading="lazy"` on grid images, `loading="eager"` on the case-study hero image.

## When adding a page

1. Render `<Seo>` with a unique title, description, and `path`.
2. Add the route above the catch-all in `App.tsx` and lazy-load it.
3. Add the link to `SiteHeader` and/or `SiteFooter` if it is public-facing.
4. Confirm a single `<h1>` and that `#main` exists for the skip link.
