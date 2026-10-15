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
- Sitemap: 36 URLs, 0 errors, downloaded Oct 15.
- User ran browser automator: Test Live URL + Request Indexing for 8 URLs (/ , /projects, /services, /about, /contact, 3 case studies) — all green, added to priority crawl queue, 8:49–9:21 PM.
- Homepage now "Submitted and indexed", canonical imawais.engineer, crawled Oct 15 15:57 UTC. Other 7 URLs pending Google's crawl.
- Open: Lovable hosting serves SPA shell for all routes (same <title> in raw HTML); per-route prerendered head from scripts/prerender-head.ts not active — Googlebot must render JS. Consider re-checking after indexing.
- Next check: re-run GSC diagnose in ~1 week to confirm the other 7 pages move to indexed.
- [x] Projects page page-1 push for "n8n case studies"/"n8n case study" (#15/#28, difficulty ~25): H1 now "n8n & AI Automation Case Studies", intro rewritten with n8n case studies / workflow examples / use cases phrasing, static H1 in prerender-head.ts aligned (Oct 15).
- Open (user): finish disavow upload; add site link to Upwork/LinkedIn/GitHub/Fiverr profiles; post LinkedIn write-ups per case study.
