// Runs before `vite dev` and `vite build` (predev/prebuild hooks).
// Writes public/sitemap.xml (with <lastmod> + <image:image>) and public/feed.xml (RSS of case studies).
// Only canonical, indexable URLs. /terms is intentionally excluded (noindex utility page).
// <lastmod> is emitted only for case studies, from their real build/update dates in routeMeta.

import { existsSync, statSync, writeFileSync } from "fs";
import { resolve } from "path";

import { projects } from "../src/data/projects";
import { routeMeta } from "../src/data/routeMeta";

const BASE_URL = "https://imawais.engineer";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/projects", changefreq: "weekly", priority: "0.9" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/services/agentic-systems", changefreq: "monthly", priority: "0.9" },
  { path: "/services/mcp-engineering", changefreq: "monthly", priority: "0.9" },
  { path: "/services/full-stack-ai-apps", changefreq: "monthly", priority: "0.9" },
  { path: "/services/hybrid-automation", changefreq: "monthly", priority: "0.9" },
  { path: "/services/n8n-workflow-automation", changefreq: "monthly", priority: "0.9" },
  { path: "/services/lead-qualification-crm-automation", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/media-kit", changefreq: "monthly", priority: "0.5" },
  ...projects.map((p) => ({ path: `/projects/${p.slug}`, changefreq: "monthly" as const, priority: "0.7" })),
];

const urls = entries.map((e) => {
  const m = routeMeta[e.path];
  const lastmod = m?.article ? (m.article.modifiedTime ?? m.article.publishedTime).slice(0, 10) : null;
  const image =
    m && e.path.startsWith("/projects/")
      ? [
          `    <image:image>`,
          `      <image:loc>${BASE_URL}${m.ogImage}</image:loc>`,
          `    </image:image>`,
        ].join("\n")
      : null;
  return [
    `  <url>`,
    `    <loc>${BASE_URL}${e.path}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
    e.priority ? `    <priority>${e.priority}</priority>` : null,
    image,
    `  </url>`,
  ]
    .filter(Boolean)
    .join("\n");
});

writeFileSync(
  resolve("public/sitemap.xml"),
  [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
    ...urls,
    `</urlset>`,
    ``,
  ].join("\n"),
);

// RSS feed — newest case study first.
const items = projects
  .map((p) => ({ p, m: routeMeta[`/projects/${p.slug}`] }))
  .sort((a, b) => (b.m.article!.publishedTime > a.m.article!.publishedTime ? 1 : -1));

const newest = items[0].m.article!.modifiedTime;
writeFileSync(
  resolve("public/feed.xml"),
  [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
    `  <channel>`,
    `    <title>Muhammad Awais — AI Automation Case Studies</title>`,
    `    <link>${BASE_URL}/projects</link>`,
    `    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />`,
    `    <description>Documented n8n, Make.com and AI automation case studies by Muhammad Awais, AI Automation Engineer.</description>`,
    `    <language>en-us</language>`,
    `    <lastBuildDate>${new Date(newest).toUTCString()}</lastBuildDate>`,
    ...items.map(({ p, m }) =>
      [
        `    <item>`,
        `      <title>${esc(p.name)}</title>`,
        `      <link>${BASE_URL}/projects/${p.slug}</link>`,
        `      <guid isPermaLink="true">${BASE_URL}/projects/${p.slug}</guid>`,
        `      <pubDate>${new Date(m.article!.publishedTime).toUTCString()}</pubDate>`,
        `      <category>${esc(p.category)}</category>`,
        `      <description>${esc(m.description)}</description>`,
        `      <enclosure url="${BASE_URL}${m.ogImage}" type="image/jpeg" length="${
          existsSync(resolve(`public${m.ogImage}`))
            ? statSync(resolve(`public${m.ogImage}`)).size
            : statSync(resolve("public/og/projects.jpg")).size
        }" />`,
        `    </item>`,
      ].join("\n"),
    ),
    `  </channel>`,
    `</rss>`,
    ``,
  ].join("\n"),
);

console.log(`sitemap.xml written (${entries.length} entries), feed.xml written (${items.length} items)`);
