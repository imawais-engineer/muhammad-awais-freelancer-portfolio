# Muhammad Awais — AI Automation & Workflow Engineer (Portfolio)

Production portfolio website presenting automation case studies, services, process, and
contact routes for **Muhammad Awais** — AI Automation Engineer specializing in n8n, Make.com,
and AI-powered workflow systems.

Live preview: managed by Lovable. Production deploy: Vercel (from the connected GitHub repo).

---

## 1. What this site is

A content-driven, single-purpose marketing site. There is **no database and no backend inside
this repo**. Every piece of content is authored as typed data in `src/data/*` and rendered by
React components. The only network call the site makes at runtime is the contact form
submission, which posts to external n8n webhooks.

Information architecture of the homepage (fixed order, decided during the phased redesign):

1. Hero (identity + primary CTA)
2. Proof strip (headline metrics)
3. Featured client work (exactly 3 real client projects)
4. Services (4 categories, Problem → Solution → Outcome)
5. Process (5 steps, Step → Action → Outcome)
6. Why work with me (4 engineering-value cards)
7. About preview (identity, principles, who I help)
8. Trust (testimonials first, then credentials)
9. Final CTA

Deeper technical material (integrations, stack, architecture patterns, scraping, documentation
practice) still lives in `src/data/site.ts` and is surfaced on inner pages, not the homepage.

---

## 2. Tech stack

| Layer | Choice |
| --- | --- |
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v3 with semantic tokens in `src/index.css` |
| UI primitives | shadcn/ui (Radix) in `src/components/ui` |
| Routing | react-router-dom (client-side SPA) |
| Forms | react-hook-form + zod |
| Motion | framer-motion (respects `prefers-reduced-motion`) |
| Icons | lucide-react + custom brand marks in `BrandLogo.tsx` |
| Tests | Vitest |

---

## 3. Local development

```bash
npm install          # or: bun install
npm run dev          # http://localhost:8080
npm run build        # production build to dist/
npm run preview      # serve the production build
npm run test         # vitest
npm run lint         # eslint
```

---

## 4. Repository map

```
public/                     Static files copied verbatim into dist/
  __l5e/assets-v1/…         Workflow screenshots & photos (see docs/ASSETS.md)
  robots.txt, favicon.ico
src/
  App.tsx                   Routes (all inner pages are lazy-loaded)
  index.css                 Design tokens, root font scale, component classes
  data/
    site.ts                 Identity, services, process, proof, credentials, testimonials
    projects.ts             All case studies (client + demonstration)
    projectImages.ts        slug → screenshot URL map
  components/               Site-specific components (see docs/ARCHITECTURE.md)
  pages/                    One file per route
  lib/                      seo helpers, contact form config, utils
docs/                       This documentation set
```

---

## 5. Documentation index

| Document | Covers |
| --- | --- |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Routes, component responsibilities, rendering model |
| [docs/CONTENT.md](docs/CONTENT.md) | How to edit copy, add a project, add a testimonial |
| [docs/ASSETS.md](docs/ASSETS.md) | How images are stored and served, and why they live in `public/` |
| [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) | Tokens, card treatments, the root font scale rule |
| [docs/CONTACT-FORMS.md](docs/CONTACT-FORMS.md) | The two n8n-backed forms and their field contracts |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Vercel settings, SPA rewrites, the npm peer-dep fix |
| [docs/SEO-ACCESSIBILITY.md](docs/SEO-ACCESSIBILITY.md) | Metadata, JSON-LD, a11y guarantees |

---

## 6. Conventions that must not be broken

- **No hardcoded colors.** Use semantic Tailwind tokens; raw `text-white` / `bg-[#…]` bypass theming.
- **Content lives in `src/data`,** never inline in JSX, so pages stay presentational.
- **One canonical professional title:** `AI Automation & Workflow Engineer`, sourced from `src/data/site.ts`.
- **Demonstration projects never show client or rating fields** — they show *Build type* and *Automation depth* instead.
- **Images must resolve on any host** (see `docs/ASSETS.md`).
