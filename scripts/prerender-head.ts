/**
 * Post-build: writes one static HTML file per route into `dist/` with that
 * route's own <title>, description, canonical, Open Graph and Twitter tags.
 *
 * Social scrapers don't run JavaScript, so without this every shared link
 * would show the homepage preview. Vercel serves `dist/about.html` for
 * `/about` via `cleanUrls: true` before the SPA rewrite kicks in.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

import { OG_HEIGHT, OG_WIDTH, routeMeta } from "../src/data/routeMeta";
import { SITE_URL } from "../src/lib/seo";

const DIST = join(process.cwd(), "dist");
const template = readFileSync(join(DIST, "index.html"), "utf8");

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Remove the sitewide tags we are about to replace. */
const strip = (html: string) =>
  html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name="(description|robots)"[^>]*>\s*/gi, "")
    .replace(/<meta\s+(property|name)="(og:[^"]+|twitter:[^"]+|article:[^"]+)"[^>]*>\s*/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, "");

let count = 0;
for (const [path, m] of Object.entries(routeMeta)) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const img = `${SITE_URL}${m.ogImage}`;
  const tags = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}">`,
    `<meta name="robots" content="${m.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="${m.article ? "article" : "website"}">`,
    `<meta property="og:site_name" content="Muhammad Awais">`,
    `<meta property="og:locale" content="en_US">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="${esc(m.title)}">`,
    `<meta property="og:description" content="${esc(m.description)}">`,
    `<meta property="og:image" content="${img}">`,
    `<meta property="og:image:secure_url" content="${img}">`,
    `<meta property="og:image:type" content="image/jpeg">`,
    `<meta property="og:image:width" content="${OG_WIDTH}">`,
    `<meta property="og:image:height" content="${OG_HEIGHT}">`,
    `<meta property="og:image:alt" content="${esc(m.ogImageAlt)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(m.title)}">`,
    `<meta name="twitter:description" content="${esc(m.description)}">`,
    `<meta name="twitter:image" content="${img}">`,
    `<meta name="twitter:image:alt" content="${esc(m.ogImageAlt)}">`,
  ];
  if (m.article) {
    tags.push(
      `<meta property="article:published_time" content="${m.article.publishedTime}">`,
      `<meta property="article:modified_time" content="${m.article.modifiedTime}">`,
      `<meta property="article:author" content="Muhammad Awais">`,
      `<meta property="article:section" content="${esc(m.article.section)}">`,
      ...m.article.tags.map((t) => `<meta property="article:tag" content="${esc(t)}">`),
    );
  }
  const html = strip(template).replace(/(<meta charset[^>]*>)/i, `$1\n    ${tags.join("\n    ")}`);
  const file = path === "/" ? join(DIST, "index.html") : join(DIST, `${path.slice(1)}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  count++;
}
console.log(`prerender-head: wrote ${count} route files`);
