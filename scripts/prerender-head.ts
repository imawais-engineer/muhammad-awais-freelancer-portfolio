/**
 * Post-build: writes one static HTML file per route into `dist/` with that
 * route's own <title>, description, canonical, Open Graph and Twitter tags.
 *
 * Social scrapers don't run JavaScript, so without this every shared link
 * would show the homepage preview.
 *
 * Lovable's host (html handling off, SPA fallback on) serves these files only
 * at their real paths (`/about.html`), not at `/about`. `dist/_redirects`
 * asks a Cloudflare-style asset server to rewrite the clean URL to that file.
 * Lovable may ignore `_redirects`; the in-app <Seo> tags still cover crawlers
 * that run JavaScript.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

import { OG_HEIGHT, OG_WIDTH, routeMeta } from "../src/data/routeMeta";
import { routeHeadJs } from "../src/lib/routeHead";
import { SITE_URL } from "../src/lib/seo";
import { getPageJsonLd } from "../src/data/structuredData";
import { projects } from "../src/data/projects";
import { projectSeo } from "../src/data/projectSeo";

/**
 * Head copy comes from route modules, not from strings in this file:
 * - src/data/routeMeta.ts — title, description, robots, Open Graph image, article dates
 * - src/data/structuredData.ts — per-route JSON-LD via getPageJsonLd
 * - src/data/projectSeo.ts — optional case-study h1 (projectSeo[slug].h1)
 * - src/data/projects.ts — case-study h1 fallback (project.name) when no h1 field exists yet
 * - src/data/seoPages.ts — optional pageH1 map, used when that module is present
 * - src/lib/seo.ts — canonical origin
 * Canonical path is the route key itself (apex, no trailing slash).
 */
const seoPagesFile = join(process.cwd(), "src/data/seoPages.ts");
const pageH1: Record<string, string> = seoPagesFile && existsSync(seoPagesFile)
  ? ((await import(pathToFileURL(seoPagesFile).href)) as { pageH1?: Record<string, string> }).pageH1 ?? {}
  : {};

const h1For = (path: string) => {
  if (pageH1[path]) return pageH1[path];
  const slug = path.startsWith("/projects/") ? path.slice("/projects/".length) : "";
  if (!slug) return undefined;
  const seo = projectSeo[slug] as { h1?: string } | undefined;
  return seo?.h1 || projects.find((p) => p.slug === slug)?.name;
};

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
const built = readFileSync(join(DIST, "index.html"), "utf8");

/**
 * Lovable serves dist/index.html for every URL that is not an exact file.
 * `_redirects` is published (it returns 200) and not applied. Each route is
 * therefore also written to `<route>/index.html` in case a directory index is
 * used. The head script rewrites title, canonical, description, robots and
 * og:url from the route map, and noindexes unknown paths. It is the first
 * script, inlined and loaded from /route-head.js, because a previous publish
 * omitted the inline copy. A root 404.html is not emitted: on this host that
 * file is served for every miss, which would replace real routes such as /about.
 */
const headRoutes = Object.fromEntries(
  Object.entries(routeMeta).map(([path, m]) => [
    path,
    {
      title: m.title,
      description: m.description,
      robots: m.noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
    },
  ]),
);
const routeHeadSource = routeHeadJs(headRoutes, SITE_URL);
writeFileSync(join(DIST, "route-head.js"), routeHeadSource);
const routeHeadTags = `<script id="route-head">\n${routeHeadSource}</script>\n    <script src="/route-head.js"></script>`;
const withRouteHead = (html: string) =>
  html
    .replace(/<script id="route-head">[\s\S]*?<\/script>\s*/gi, "")
    .replace(/<script src="\/route-head\.js"><\/script>\s*/gi, "")
    .replace(/<meta\s+charset[^>]*>/i, (tag) => `${tag}\n    ${routeHeadTags}`);
const template = built;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Remove the sitewide tags we are about to replace. */
const strip = (html: string) =>
  html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name="(description|robots)"[^>]*>\s*/gi, "")
    .replace(/<meta\s+(property|name)="(og:[^"]+|twitter:[^"]+|article:[^"]+)"[^>]*>\s*/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, "")
    .replace(/<script\s+type="application\/ld\+json"[\s\S]*?<\/script>\s*/gi, "");

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
  html = withRouteHead(html);
  const file = path === "/" ? join(DIST, "index.html") : join(DIST, `${path.slice(1)}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  if (path !== "/") {
    const directoryIndex = join(DIST, path.slice(1), "index.html");
    mkdirSync(dirname(directoryIndex), { recursive: true });
    writeFileSync(directoryIndex, html);
  }
  count++;
}

// Exact clean URL → that route's HTML, and a slash URL → the sitemap URL.
// 200 keeps the browser URL. No catch-all, so unknown paths still use the SPA shell.
const redirectLines = Object.keys(routeMeta)
  .filter((path) => path !== "/")
  .flatMap((path) => [`${path}/ ${path} 301`, `${path} ${path}.html 200`]);
writeFileSync(join(DIST, "_redirects"), `${redirectLines.join("\n")}\n`);
console.log(
  `prerender-head: wrote ${count} route files, ${count - 1} directory indexes and ${redirectLines.length} redirect rules`,
);
