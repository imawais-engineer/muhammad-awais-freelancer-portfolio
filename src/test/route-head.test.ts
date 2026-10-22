import { routeHeadJs } from "@/lib/routeHead";

const routes = {
  "/": {
    title: "Home title",
    description: "Home description",
    robots: "index, follow, max-image-preview:large",
  },
  "/about": {
    title: "About title",
    description: "About description",
    robots: "index, follow, max-image-preview:large",
  },
  "/terms": {
    title: "Terms title",
    description: "Terms description",
    robots: "noindex, follow",
  },
};

const shell = () => {
  document.head.innerHTML = `
    <meta charset="UTF-8" />
    <title>Home title</title>
    <meta name="description" content="Home description" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="https://imawais.engineer/" />
    <meta property="og:url" content="https://imawais.engineer/" />
    <meta property="og:title" content="Home title" />
    <script type="application/ld+json" id="page-json-ld">{"@id":"https://imawais.engineer/#webpage","url":"https://imawais.engineer/"}</script>
    <script type="application/ld+json">{
      "@type": "Person",
      "url": "https://imawais.engineer/"
    }</script>
  `;
};

const run = (pathname: string) => {
  window.history.pushState({}, "", pathname);
  shell();
  window.eval(routeHeadJs(routes, "https://imawais.engineer"));
};

const canon = () => document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? null;
const ld = () => [...document.querySelectorAll('script[type="application/ld+json"]')].map((node) => node.id || "legacy");

describe("route head script", () => {
  it("rewrites a trailing-slash and uppercase path to the sitemap canonical", () => {
    run("/About/");
    expect(document.title).toBe("About title");
    expect(canon()).toBe("https://imawais.engineer/about");
    expect(document.querySelector('meta[name="description"]')?.getAttribute("content")).toBe("About description");
    expect(document.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe(
      "index, follow, max-image-preview:large",
    );
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute("content")).toBe(
      "https://imawais.engineer/about",
    );
    expect(ld()).toEqual([]);
  });

  it("normalizes a directory index and an html file to the clean path", () => {
    run("/about/index.html");
    expect(canon()).toBe("https://imawais.engineer/about");
    run("/about.html");
    expect(document.title).toBe("About title");
    expect(canon()).toBe("https://imawais.engineer/about");
  });

  it("noindexes an unknown path and drops the homepage canonical", () => {
    run("/nonexistent-xyz");
    expect(document.title).toBe("Page not found | Muhammad Awais");
    expect(canon()).toBeNull();
    expect(document.querySelector('meta[property="og:url"]')).toBeNull();
    expect(document.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("noindex, follow");
    expect(ld()).toEqual([]);
  });

  it("keeps a single homepage JSON-LD block", () => {
    run("/");
    expect(document.title).toBe("Home title");
    expect(canon()).toBe("https://imawais.engineer/");
    expect(ld()).toEqual(["page-json-ld"]);
  });

  it("keeps the noindex robots value for a known utility route", () => {
    run("/terms/");
    expect(document.title).toBe("Terms title");
    expect(document.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("noindex, follow");
    expect(canon()).toBe("https://imawais.engineer/terms");
  });
});
