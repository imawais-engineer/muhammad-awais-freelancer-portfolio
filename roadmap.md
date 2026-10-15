- [x] Align footer sections and add theme-aligned link logos.
- [x] Replace outdated project counts with the catalog total and verify.
- [x] Replace emoji and text-only logo substitutes globally with theme-aligned marks or icons.
- [x] Remove the three service footer links and add GitHub alongside the other platforms.
- [x] Verify updated icons and footer on desktop and mobile.
- [x] Add the role line and profile logos to the homepage hero card, without the tool suffix.
- [x] Set the homepage card role line to "Forward Deployed AI Engineer" and verify at desktop and mobile.
- [x] Show "Forward Deployed AI Engineer" in the footer and copyright; keep search-facing titles unchanged.
- [x] Point the header "About" link at the About page instead of the homepage section.
- [x] Change the hero strip to "5 Star Rated" with the Upwork mark only, keeping a hidden Upwork label.

- [x] About profile card rebuilt to match homepage card (circular photo, badge, title, social logos) + global axe scan clean (2026-10-14)

## Google indexing (Oct 15 2026)
- GSC index read via API: only homepage known to Google (stale www canonical from Sep 30 crawl); /projects, /services, /about, /contact = "URL is unknown to Google". Sitemap: 36 URLs, 0 errors, downloaded Oct 15.
- Live-check from sandbox: all main pages 200, robots "index, follow", sitemap + robots.txt OK.
- BLOCKER: Test Live URL + Request Indexing buttons are GSC-UI only (no API). User must click per URL, priority: / → /projects → /services → /about → /contact → top case studies. Daily quota ~10.
- Open: Lovable hosting serves SPA shell for all routes (same <title> in raw HTML); per-route prerendered head from scripts/prerender-head.ts not active — Googlebot must render JS. Consider re-checking after indexing.
