/**
 * Site-wide JSON-LD entities (Person, ProfessionalService, WebSite) plus small helpers.
 * Split out of structuredData.ts so the home page can build its graph without pulling
 * every service FAQ into the entry chunk. Alias-free and asset-free (build scripts import it).
 */
import { SITE_URL, faqPageJsonLd } from "../lib/seo";
import { homeFaqs } from "./faqs";
import { identity } from "./identity";
import { routeMeta } from "./routeMeta";
import { servicePages } from "./seoPages";

export type Node = Record<string, unknown>;
export type Graph = { "@context": string; "@graph": Node[] };
export const graph = (nodes: Node[]): Graph => ({ "@context": "https://schema.org", "@graph": nodes });

export const abs = (path: string) => `${SITE_URL}${path}`;
const PERSON_ID = abs("/#person");
const BUSINESS_ID = abs("/#business");
const WEBSITE_ID = abs("/#website");
export const personRef = { "@id": PERSON_ID };
export const businessRef = { "@id": BUSINESS_ID };
export const websiteRef = { "@id": WEBSITE_ID };
const sameAs = Object.values(identity.links);

export const personNode: Node = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: identity.name,
  alternateName: [...identity.alternateName],
  jobTitle: identity.jobTitle,
  description: identity.description,
  disambiguatingDescription: identity.disambiguatingDescription,
  url: abs("/"),
  email: `mailto:${identity.email}`,
  image: {
    "@type": "ImageObject",
    "@id": abs("/#primaryimage"),
    url: abs(identity.image),
    width: 512,
    height: 512,
    caption: `${identity.name}, ${identity.jobTitle}`,
  },
  homeLocation: { "@type": "Country", name: identity.country.name },
  knowsAbout: [...identity.knowsAbout],
  hasCredential: identity.credentials.map((name) => ({
    "@type": "EducationalOccupationalCredential",
    name,
    credentialCategory: "certificate",
  })),
  worksFor: businessRef,
  sameAs,
};

export const websiteNode: Node = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: abs("/"),
  name: identity.name,
  alternateName: `${identity.name} — ${identity.jobTitle}`,
  inLanguage: "en",
  publisher: personRef,
};

const offerCatalog = {
  "@type": "OfferCatalog",
  name: "AI automation services",
  itemListElement: servicePages.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@id": abs(`${s.path}#service`), "@type": "Service", name: s.schema.name, url: abs(s.path) },
  })),
};

/** Remote freelance practice. No street address (service-area/online business). */
export const businessNode: Node = {
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: `${identity.name} — ${identity.jobTitle}`,
  url: abs("/"),
  image: abs("/og/home.jpg"),
  logo: abs("/icon-512.png"),
  email: identity.email,
  description: identity.description,
  founder: personRef,
  address: { "@type": "PostalAddress", addressCountry: identity.country.code },
  areaServed: "Worldwide",
  knowsAbout: [...identity.knowsAbout],
  hasOfferCatalog: offerCatalog,
  sameAs,
};

export const crumbs = (path: string, items: [string, string][]) => ({
  "@type": "BreadcrumbList",
  "@id": abs(`${path}#breadcrumb`),
  itemListElement: items.map(([name, p], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: abs(p),
  })),
});

export const webPage = (path: string, type = "WebPage", extra: Node = {}): Node => ({
  "@type": type,
  "@id": abs(`${path === "/" ? "/" : path}#webpage`),
  url: abs(path),
  name: routeMeta[path]?.title,
  description: routeMeta[path]?.description,
  inLanguage: "en",
  isPartOf: websiteRef,
  about: personRef,
  ...(path === "/" ? {} : { breadcrumb: { "@id": abs(`${path}#breadcrumb`) } }),
  ...extra,
});

export const homeJsonLd = (): Graph =>
  graph([
    websiteNode,
    webPage("/", "WebPage", { mainEntity: personRef, primaryImageOfPage: { "@id": abs("/#primaryimage") } }),
    personNode,
    businessNode,
    faqPageJsonLd(homeFaqs),
  ]);
