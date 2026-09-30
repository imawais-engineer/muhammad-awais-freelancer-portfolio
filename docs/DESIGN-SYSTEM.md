# Design system

Direction: **"Automation Architect"** — professional dark theme, grid textures, node/panel
cards, monospace accents for technical labels. Not a generic gradient SaaS look.

## Tokens

All colors, gradients, shadows, and radii are HSL CSS variables in `src/index.css` and are
consumed through Tailwind semantic classes (`bg-background`, `text-muted-foreground`,
`border-panel-border`, `shadow-elevated`, …).

**Never** write literal color utilities (`text-white`, `bg-black`, `bg-[#0f172a]`) in
components — they bypass theming.

## Component classes

| Class | Use |
| --- | --- |
| `.node-card` | Standard panel: border, panel background, elevation on hover |
| `.node-card-muted` | Lower-weight panel (panel border + 40% fill, no shadow) for engineering-value and credential cards |
| `.tech-tag` | Small monospace chip for categories and tool names |
| `.system-link` | Inline link with icon, used for back-links |

Weight hierarchy is intentional: Featured Work and Services use `.node-card`; supporting proof
blocks use `.node-card-muted` so they read as secondary.

## The root font scale rule

The layout is entirely rem-based, and the intended visual scale is achieved by scaling the root
font size per breakpoint in `src/index.css`:

- `< 768px` → **16px** (mobile stays compact)
- `≥ 768px` → **16.8px**
- `≥ 1024px` → **17.6px**

This reproduces the intended "110% zoom" proportions natively at 100% browser zoom. Do **not**
add `zoom:`, `transform: scale()`, or per-component size bumps to change global scale — adjust
these root values instead. Tailwind breakpoints remain px-based, so responsive behavior is
unaffected.

Corollary: avoid hardcoded px font sizes and widths in components (`text-[11px]`, `w-[220px]`).
Use rem so everything scales together. The one accepted exception is tap-target minimums
(`min-h-[44px]`), which must stay physical.

## Responsive rules

- Desktop navigation appears at `lg` (1024px); tablets get the mobile menu.
- Grids scale 1 → 2 → 3 (→ 4/5 for compact metric rows).
- Interactive elements keep a 44px minimum touch target.
- Zero horizontal overflow is a hard requirement at 320 / 390 / 768 / 1024 / 1280 / 1440.

## Motion

Framer Motion is used for subtle entrance transitions only (opacity + small Y offset). All
motion is suppressed under `prefers-reduced-motion`.

## Phase 3 additions

- Accent tokens: `--highlight` (amber, CTAs only), `--success` / `--warning` / `--danger` (outcome, scale, window chrome).
- Fluid type scale (`xl`–`6xl`) uses `clamp()` in `tailwind.config.ts`; H1 line-height 1.05–1.1; reading text is `text-base` (16px+) at 1.7 line-height, capped at 72ch.
- `.card-interactive` (hover lift + cyan border glow), `.window-frame` (framed workflow canvas), `.eyebrow` (mono label).
- Section entry fade/rise (220ms) via `useSectionReveal`, skipped under reduced motion. Case studies show a sticky "Discuss your workflow" button after the Outcome section.
