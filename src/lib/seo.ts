export const SITE_URL = "https://imawais.engineer";

type Meta = {
  title: string;
  description: string;
  canonicalPath: string;
};

const upsert = (selector: string, create: () => HTMLElement) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

export const applyMeta = ({ title, description, canonicalPath }: Meta) => {
  const url = `${SITE_URL}${canonicalPath}`;
  document.title = title;

  const setMeta = (attr: "name" | "property", key: string, content: string) => {
    const el = upsert(`meta[${attr}="${key}"]`, () => {
      const m = document.createElement("meta");
      m.setAttribute(attr, key);
      return m;
    });
    el.setAttribute("content", content);
  };

  setMeta("name", "description", description);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:type", "website");
  setMeta("property", "og:url", url);
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);

  const link = upsert('link[rel="canonical"]', () => {
    const l = document.createElement("link");
    l.setAttribute("rel", "canonical");
    return l;
  });
  link.setAttribute("href", url);
};
