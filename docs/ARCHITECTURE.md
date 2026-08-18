# Architecture

## Rendering model

Pure client-side SPA. `src/main.tsx` mounts `App`, which wraps the tree in
`QueryClientProvider`, `TooltipProvider`, toasters, and `BrowserRouter`. There is no SSR, no
server code, and no database in this repository.

## Routes (`src/App.tsx`)

| Path | Page | Notes |
| --- | --- | --- |
| `/` | `pages/Index.tsx` | Eagerly imported (LCP route) |
| `/projects` | `pages/Projects.tsx` | Split into "Real client projects" and "Demonstration projects" |
| `/projects/:slug` | `pages/ProjectDetail.tsx` | Full case study; redirects to `/projects` on unknown slug |
| `/about` | `pages/About.tsx` | |
| `/contact` | `pages/Contact.tsx` | Hosts the two n8n forms |
| `/terms` | `pages/Terms.tsx` | |
| `/media-kit` | `pages/MediaKit.tsx` | |
| `*` | `pages/NotFound.tsx` | Must stay last |

All routes except `/` are `React.lazy` code-split behind a `Suspense` fallback.
`ScrollToTop` resets scroll position on navigation.

## Data layer (`src/data`)

- **`site.ts`** — single source of truth for identity, canonical title, contact links,
  services, process steps, proof metrics, credentials, testimonials, integrations, stack,
  architecture patterns, reliability practices, and about copy.
- **`projects.ts`** — the `Project` type and every case study. Exposes `projects`, plus
  client/demo splits and `getProject(slug)`. `clientWork: true` marks a real engagement.
- **`projectImages.ts`** — `slug → image URL` map built from `.asset.json` pointers.
  `getProjectImage(slug)` returns `undefined` for projects without a screenshot, and the UI
  renders without an image in that case.

Pages read data and stay presentational. Adding content should not require touching JSX.

## Components (`src/components`)

| Component | Responsibility |
| --- | --- |
| `SiteHeader` | Nav (Projects · Services · Process · About · Contact), single "Start a Project" CTA, mobile menu, `handleNav` for homepage anchors from inner routes |
| `SiteFooter` | Secondary nav, legal links, contact routes |
| `Seo` | Per-page `<title>`, meta description, canonical, OG/Twitter tags, optional JSON-LD |
| `FeaturedProjectCard` | Homepage outcome-first card: identity → result → summary → tools → CTA |
| `ProjectCard` | Grid card used on `/projects` |
| `HomeServiceCard` | Problem / Solution / Outcome definition list |
| `ProcessStep` | Numbered step with action + outcome |
| `EngineeringValueCard` | Differentiator card (client benefit above technical label) |
| `ContactForms` | Both n8n forms, validation, submission state, success focus management |
| `TechTag` / `BrandLogo` | Tool chips with real vendor marks |
| `NavLink`, `ScrollToTop` | Nav helper and route scroll reset |
| `ui/*` | Unmodified shadcn primitives — extend rather than fork |

## Libraries (`src/lib`)

- `seo.ts` — canonical URL and metadata helpers used by `Seo`.
- `contactForms.ts` — endpoint URLs and field mapping for the n8n webhooks.
- `utils.ts` — `cn()` class merger.

## Performance decisions

- Route-level code splitting; only the homepage is in the initial chunk.
- Screenshots are WebP, ≤1280px wide, `loading="lazy"` in grids and `loading="eager"` on the
  case-study hero, with explicit `width`/`height` to prevent layout shift.
- Framer Motion animations are entrance-only and disabled under `prefers-reduced-motion`.
