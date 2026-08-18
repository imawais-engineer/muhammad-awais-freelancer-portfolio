import { useEffect } from "react";

import { site } from "@/data/site";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  /** Absolute or root-relative image used for social previews. */
  image?: string;
  /** Set for thin/utility pages that should stay out of the index. */
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const setMeta = (selector: string, attr: string, key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const Seo = ({ title, description, path, image, noindex, jsonLd }: SeoProps) => {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", site.name);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
    );

    if (image) {
      const imageUrl = absoluteUrl(image);
      setMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
      setMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);
    }

    const href = `${SITE_URL}${path === "/" ? "/" : path}`;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = href;
    setMeta('meta[property="og:url"]', "property", "og:url", href);

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
  }, [title, description, path, image, noindex, jsonLd]);

  return null;
};

export default Seo;
