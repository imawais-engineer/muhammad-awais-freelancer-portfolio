import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { routeMeta } from "@/data/routeMeta";
import { getPageJsonLd } from "@/data/structuredData";
import { SITE_URL } from "@/lib/seo";

const root = process.cwd();
const indexable = Object.entries(routeMeta).filter(([, m]) => !m.noindex);

describe("site name and per-route discovery", () => {
  it("canonical origin is the apex https domain", () => {
    expect(SITE_URL).toBe("https://imawais.engineer");
  });

  it("gives every indexable route a unique title and description", () => {
    const titles = new Set(indexable.map(([, m]) => m.title));
    const descs = new Set(indexable.map(([, m]) => m.description));
    expect(titles.size).toBe(indexable.length);
    expect(descs.size).toBe(indexable.length);
    for (const [path, m] of indexable) {
      expect(m.description.length, path).toBeGreaterThanOrEqual(100);
      expect(m.description.length, path).toBeLessThanOrEqual(165);
      expect(m.ogImageAlt.length, path).toBeGreaterThan(0);
    }
  });

  it("has an existing share image for every route", () => {
    for (const [path, m] of Object.entries(routeMeta)) {
      expect(existsSync(join(root, "public", m.ogImage)), `${path} -> ${m.ogImage}`).toBe(true);
    }
  });

  it("keeps noindex routes out of the sitemap", () => {
    const sitemap = readFileSync(join(root, "public/sitemap.xml"), "utf8");
    for (const [path, m] of Object.entries(routeMeta)) {
      if (m.noindex) expect(sitemap).not.toContain(`<loc>${SITE_URL}${path}</loc>`);
    }
  });

  it("keeps homepage WebSite name, og:site_name, title and index.html aligned", () => {
    const website = getPageJsonLd("/")!["@graph"].find((n) => n["@type"] === "WebSite")!;
    expect(website.name).toBe("Muhammad Awais");
    expect(website.url).toBe(`${SITE_URL}/`);
    const html = readFileSync(join(root, "index.html"), "utf8");
    expect(html).toContain(`<meta property="og:site_name" content="${website.name}" />`);
    expect(html).toContain(`<meta name="application-name" content="${website.name}" />`);
    expect(routeMeta["/"].title.startsWith(website.name as string)).toBe(true);
    const esc = routeMeta["/"].title.replace(/&/g, "&amp;");
    expect(html).toContain(`<title>${esc}</title>`);
    expect(html).toContain(`<meta property="og:title" content="${esc}" />`);
    expect(html).toMatch(/<h1>Muhammad Awais/);
  });
});
