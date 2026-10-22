import { useEffect, useLayoutEffect } from "react";
import { Helmet } from "react-helmet-async";

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

/**
 * Lovable's host serves one `index.html` for every extensionless URL, so the
 * shell's homepage canonical stays in the raw response. These tags are what
 * Google sees after it runs JavaScript. react-helmet-async only manages
 * elements it created (`data-rh`); the shell copies are removed here so the
 * page does not publish two canonicals.
 */
const SHELL_SELECTORS = [
  'meta[name="description"]',
  'meta[name="robots"]',
  'link[rel="canonical"]',
  'meta[property^="og:"]',
  'meta[name^="twitter:"]',
  'meta[property^="article:"]',
];

const dropShellTags = () => {
  for (const selector of SHELL_SELECTORS) {
    document.head.querySelectorAll(selector).forEach((el) => {
      if (el.getAttribute("data-rh") !== "true") el.remove();
    });
  }
};

/** Sitemap URLs are lowercase and have no trailing slash. */
const canonicalPathFor = (path: string) => {
  const stripped = path.length > 1 ? path.replace(/\/+$/, "") : path || "/";
  const lower = stripped.toLowerCase();
  return lower === "" ? "/" : lower;
};

const Seo = ({ title: t, description: d, path, noindex: n, jsonLd }: SeoProps) => {
  const canonicalPath = canonicalPathFor(path);
  const meta = getRouteMeta(canonicalPath);
  const title = meta?.title ?? t;
  const description = meta?.description ?? d;
  const noindex = meta?.noindex ?? n;
  const image = absoluteUrl(meta?.ogImage ?? "/og/home.jpg");
  const alt = meta?.ogImageAlt ?? "Muhammad Awais, AI Automation Engineer";
  const href = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const robots = noindex ? "noindex, follow" : "index, follow, max-image-preview:large";

  useLayoutEffect(() => {
    dropShellTags();
  }, [path]);

  useEffect(() => {
    if (path !== "/" || jsonLd) document.getElementById("site-json-ld")?.remove();

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
  }, [path, jsonLd]);

  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {meta ? <link rel="canonical" href={href} /> : null}
      <meta property="og:type" content={meta?.article ? "article" : "website"} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_US" />
      {meta ? <meta property="og:url" content={href} /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={String(OG_WIDTH)} />
      <meta property="og:image:height" content={String(OG_HEIGHT)} />
      <meta property="og:image:alt" content={alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={alt} />
      {meta?.article && (
        <meta property="article:published_time" content={meta.article.publishedTime} />
      )}
      {meta?.article && (
        <meta property="article:modified_time" content={meta.article.modifiedTime} />
      )}
      {meta?.article && <meta property="article:author" content={site.name} />}
      {meta?.article && <meta property="article:section" content={meta.article.section} />}
      {meta?.article?.tags.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}
    </Helmet>
  );
};

export default Seo;
