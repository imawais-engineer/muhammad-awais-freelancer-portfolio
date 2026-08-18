# Editing content

All copy lives in `src/data`. You should rarely need to open a page component to change words.

## Change identity, title, or contact links

`src/data/site.ts` → the `site` object. The professional title
(`AI Automation & Workflow Engineer`) is defined once here and consumed by the header, hero,
about page, SEO metadata, and media kit. Change it in one place only.

## Add a case study

1. Append an entry to `projects` in `src/data/projects.ts`. Required shape:

   | Field | Meaning |
   | --- | --- |
   | `slug` | URL segment; must be unique and stable (it is a permalink) |
   | `name` / `shortName` | Full title and the compact title used in SEO |
   | `category`, `industry`, `platform`, `role`, `timeframe` | Meta grid on the detail page |
   | `clientWork` | `true` = real engagement, `false` = demonstration build |
   | `clientType`, `rating` | Only rendered when `clientWork` is `true` |
   | `summary`, `headlineResult` | Card copy; `headlineResult` is the prominent outcome line |
   | `problem`, `requirements`, `logic`, `output`, `results`, `proof` | String arrays rendered as bullet lists |
   | `architecture` | One paragraph, rendered in monospace |
   | `workflow` | Ordered steps, rendered as a numbered list |
   | `scale` | `{ label, value }[]` for the sidebar |
   | `tools` | Tool names; must match `BrandLogo` keys to get a real vendor mark |
   | `feedback` | Optional quote |

2. Add a screenshot — see [ASSETS.md](ASSETS.md) — and register it in `projectImages.ts`.

### Demonstration vs client projects

`ProjectDetail.tsx` swaps two meta cards based on `clientWork`:

- `clientWork: true` → **Client** and **Rating**
- `clientWork: false` → **Build type** ("Self-initiated demonstration build") and
  **Automation depth** (derived from `workflow.length` and `tools.length`)

This is a deliberate credibility rule. Do not show a client name or a star rating on a
self-initiated build.

## Featured work on the homepage

The homepage shows exactly **three client projects**. The selection is made in
`src/pages/Index.tsx` from the client-work list. To feature a different project, either reorder
`projects.ts` or adjust that curated selection — do not increase the count.

## Testimonials and credentials

Both live in `src/data/site.ts`. Testimonials render **before** credentials on the homepage
("Trusted by clients. Built with discipline."). Only verified, attributable reviews belong
here — the named client testimonial carries a photo, role, and company.

## Services and process

`services` (4 shown on the homepage, each with problem / solution / outcome) and `process`
(5 steps, each with action + outcome) are both arrays in `site.ts`. Keep the counts as-is; the
grids are tuned for them.
