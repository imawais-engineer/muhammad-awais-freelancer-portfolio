import { useEffect } from "react";

import { site } from "@/data/site";
import { OG_HEIGHT, OG_WIDTH, getRouteMeta } from "@/data/routeMeta";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  /** Unused for share previews — share images come from `routeMeta`. Kept for API compatibility. */
  image?: string;
  /** Set for thin/utility pages that should stay out of the index. */
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const clearArticleTags = () =>
  document.head.querySelectorAll('meta[property^="article:"]').forEach((el) => el.remove());

const Seo = ({ title: t, description: d, path, noindex: n, jsonLd }: SeoProps) => {
  useEffect(() => {
    const meta = getRouteMeta(path);
    const title = meta?.title ?? t;
    const description = meta?.description ?? d;
    const noindex = meta?.noindex ?? n;
    const image = absoluteUrl(meta?.ogImage ?? "/og/home.jpg");
    const alt = meta?.ogImageAlt ?? "Muhammad Awais, AI Automation Engineer";
    const href = `${SITE_URL}${path === "/" ? "/" : path}`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow, max-image-preview:large");

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", meta?.article ? "article" : "website");
    setMeta("property", "og:site_name", site.name);
    setMeta("property", "og:locale", "en_US");
    setMeta("property", "og:url", href);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:secure_url", image);
    setMeta("property", "og:image:type", "image/jpeg");
    setMeta("property", "og:image:width", String(OG_WIDTH));
    setMeta("property", "og:image:height", String(OG_HEIGHT));
    setMeta("property", "og:image:alt", alt);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:image:alt", alt);

    clearArticleTags();
    if (meta?.article) {
      const add = (key: string, content: string) => {
        const tag = document.createElement("meta");
        tag.setAttribute("property", key);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      };
      add("article:published_time", meta.article.publishedTime);
      add("article:modified_time", meta.article.modifiedTime);
      add("article:author", site.name);
      add("article:section", meta.article.section);
      meta.article.tags.forEach((tag) => add("article:tag", tag));
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = href;

    const scriptId = "page-json-ld";
    document.getElementById(scriptId)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => document.getElementById(scriptId)?.remove();
  }, [t, d, path, n, jsonLd]);

  return null;
};

export default Seo;
