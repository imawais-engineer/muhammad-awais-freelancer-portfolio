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
import { getPageJsonLd } from "../src/data/structuredData";
import { projects } from "../src/data/projects";

/** Visible <h1> per static route (matches the rendered page; "/" keeps the index.html fallback). */
const staticH1: Record<string, string> = {
  "/projects": "AI automation projects, documented end to end",
  "/services": "AI Automation & Agentic Systems Services",
  "/services/agentic-systems": "Agentic Systems & State Graph Architecture",
  "/services/mcp-engineering": "Model Context Protocol (MCP) Server Engineering",
  "/services/full-stack-ai-apps": "Full-Stack AI Products & Internal Tools",
  "/services/hybrid-automation": "Deterministic Automation & Hybrid Orchestration",
  "/services/n8n-workflow-automation": "n8n Workflow Automation Engineer",
  "/services/lead-qualification-crm-automation": "AI Lead Qualification & CRM Automation",
  "/about": "About Muhammad Awais — AI Automation Engineer",
  "/contact": "Start an AI automation project",
  "/media-kit": "Muhammad Awais",
  "/terms": "Terms of Service",
};
const h1For = (path: string) =>
  staticH1[path] ?? projects.find((p) => `/projects/${p.slug}` === path)?.name;

/** Workflow screenshot URL per project, read from the asset pointers imported by projectImages.ts. */
const projectImageUrl = (() => {
  const src = readFileSync(join(process.cwd(), "src/data/projectImages.ts"), "utf8");
  const files = Object.fromEntries(
    [...src.matchAll(/import (\w+) from "@\/(assets\/projects\/[^"]+)"/g)].map((m) => [m[1], m[2]]),
  );
  const out: Record<string, string> = {};
  for (const m of src.matchAll(/"([\w-]+)": (\w+)\.url/g)) {
    const file = files[m[2]];
    if (file) out[m[1]] = JSON.parse(readFileSync(join(process.cwd(), "src", file), "utf8")).url;
  }
  return out;
})();

const PROFILE_PRELOAD = /<link\s+rel="preload"\s+as="image"[\s\S]*?\/>\s*/i;

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
  const ld = getPageJsonLd(path);
  if (ld) tags.push(`<script type="application/ld+json" id="page-json-ld">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`);
  let html = strip(template).replace(/(<meta charset[^>]*>)/i, `$1\n    ${tags.join("\n    ")}`);

  // LCP preload: profile photo only where it is shown; the workflow canvas on case studies.
  const slug = path.startsWith("/projects/") ? path.slice("/projects/".length) : "";
  if (slug && projectImageUrl[slug]) {
    html = html.replace(
      PROFILE_PRELOAD,
      `<link rel="preload" as="image" type="image/webp" href="${projectImageUrl[slug]}" fetchpriority="high" />\n    `,
    );
  } else if (path !== "/" && path !== "/about") {
    html = html.replace(PROFILE_PRELOAD, "");
  }

  // Static body fallback: this route's own <h1> and summary for non-JS crawlers.
  const h1 = h1For(path);
  if (h1) {
    html = html.replace(
      /(<div id="root">\s*<!--[^>]*-->\s*)<h1>[\s\S]*?<\/h1>\s*<p>[\s\S]*?<\/p>/,
      `$1<h1>${esc(h1)}</h1>\n      <p>${esc(m.description)}</p>`,
    );
  }
  const file = path === "/" ? join(DIST, "index.html") : join(DIST, `${path.slice(1)}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  count++;
}
console.log(`prerender-head: wrote ${count} route files`);
