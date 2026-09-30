/**
 * Page-level JSON-LD per route. Used by pages at runtime (via <Seo jsonLd>) and by
 * `scripts/prerender-head.ts`, which bakes the same graph into each static HTML
 * file so non-JS crawlers and validators see it. Keep this module free of
 * asset imports and "@/" aliases so the build script can load it.
 */
import { SITE_URL, faqPageJsonLd } from "../lib/seo";
import { homeFaqs, projectFaqs } from "./faqs";
import { projects } from "./projects";
import { projectSeo } from "./projectSeo";
import { routeMeta } from "./routeMeta";
import { leadFaqs, n8nFaqs, serviceGroups, servicesFaqs } from "./serviceContent";

const NAME = "Muhammad Awais";
const person = { "@type": "Person", "@id": `${SITE_URL}/#person`, name: NAME };
const website = { "@type": "WebSite", "@id": `${SITE_URL}/#website` };

const crumbs = (items: [string, string][]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: `${SITE_URL}${path}`,
  })),
});

type Graph = { "@context": string; "@graph": Record<string, unknown>[] };
const graph = (nodes: Record<string, unknown>[]): Graph => ({ "@context": "https://schema.org", "@graph": nodes });

const servicePage = (
  path: string,
  pageName: string,
  crumbName: string,
  service: { name: string; description: string; serviceType: string },
  faqs: { q: string; a: string }[],
) =>
  graph([
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}#webpage`,
      url: `${SITE_URL}${path}`,
      name: pageName,
      description: routeMeta[path]?.description,
      inLanguage: "en",
      isPartOf: website,
      about: { "@id": `${SITE_URL}/#person` },
      breadcrumb: { "@id": `${SITE_URL}${path}#breadcrumb` },
    },
    {
      ...crumbs([["Home", "/"], ["Services", "/services"], [crumbName, path]]),
      "@id": `${SITE_URL}${path}#breadcrumb`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}${path}#service`,
      url: `${SITE_URL}${path}`,
      ...service,
      provider: person,
      areaServed: "Worldwide",
    },
    faqPageJsonLd(faqs),
  ]);

const staticGraphs: Record<string, Graph> = {
  "/": graph([
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: routeMeta["/"]?.title,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
    },
    faqPageJsonLd(homeFaqs),
  ]),
  "/projects": graph([
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/projects#collection`,
      url: `${SITE_URL}/projects`,
      name: "AI Automation Projects & n8n Case Studies",
      isPartOf: website,
      author: { "@type": "Person", "@id": `${SITE_URL}/#person` },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: projects.length,
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/projects/${p.slug}`,
          name: p.name,
        })),
      },
    },
    crumbs([["Home", "/"], ["Projects", "/projects"]]),
  ]),
  "/services": graph([
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/services#webpage`,
      url: `${SITE_URL}/services`,
      name: "AI Automation Services",
      description: routeMeta["/services"]?.description,
      inLanguage: "en",
      isPartOf: website,
      about: { "@id": `${SITE_URL}/#person` },
    },
    crumbs([["Home", "/"], ["Services", "/services"]]),
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/services#service`,
      name: "AI Automation Services — Muhammad Awais",
      url: `${SITE_URL}/services`,
      description:
        "Freelance AI automation engineering: n8n workflow automation, AI agents and assistants, CRM and lead qualification automation, and business process and data automation.",
      provider: person,
      areaServed: "Worldwide",
      serviceType: [
        "AI automation services",
        "n8n workflow automation",
        "AI workflow automation",
        "Business process automation",
        "CRM automation",
        "Lead qualification automation",
        "AI agents and integrations",
        "Make.com automation",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Automation services",
        itemListElement: serviceGroups.map((g) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: g.title, description: g.intro },
        })),
      },
    },
    faqPageJsonLd(servicesFaqs),
  ]),
  "/services/n8n-workflow-automation": servicePage(
    "/services/n8n-workflow-automation",
    "n8n Workflow Automation Engineer",
    "n8n Workflow Automation",
    {
      name: "n8n Workflow Automation",
      description:
        "Design, build, documentation and rescue of production n8n workflows: webhook and API integrations, AI-assisted steps, error handling, retries, sub-workflows and logging.",
      serviceType: "n8n workflow automation",
    },
    n8nFaqs,
  ),
  "/services/lead-qualification-crm-automation": servicePage(
    "/services/lead-qualification-crm-automation",
    "AI Lead Qualification & CRM Automation",
    "Lead Qualification & CRM Automation",
    {
      name: "Lead Qualification & CRM Automation",
      description:
        "Lead capture, AI-assisted lead qualification and scoring, lead routing, CRM and sales pipeline automation, and automated follow-up built on n8n and Make.com.",
      serviceType: "Lead qualification automation",
    },
    leadFaqs,
  ),
};

const projectGraph = (slug: string): Graph | undefined => {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return undefined;
  const seo = projectSeo[slug];
  const route = routeMeta[`/projects/${slug}`];
  const topic = seo?.topic ?? p.category.toLowerCase();
  const url = `${SITE_URL}/projects/${slug}`;
  return graph([
    {
      "@type": "BlogPosting",
      "@id": `${url}#case-study`,
      url,
      headline: p.name,
      name: p.name,
      description: route?.description ?? p.summary,
      abstract: p.summary,
      about: topic,
      articleSection: p.category,
      inLanguage: "en",
      datePublished: route?.article?.publishedTime,
      dateModified: route?.article?.modifiedTime,
      isPartOf: website,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { ...person, url: `${SITE_URL}/` },
      publisher: person,
      keywords: [topic, ...p.tools].join(", "),
      image: `${SITE_URL}${route?.ogImage ?? "/og/projects.jpg"}`,
    },
    crumbs([["Home", "/"], ["Projects", "/projects"], [p.name, `/projects/${slug}`]]),
    faqPageJsonLd(projectFaqs(p)),
  ]);
};

export const getPageJsonLd = (path: string): Graph | undefined =>
  staticGraphs[path] ?? (path.startsWith("/projects/") ? projectGraph(path.slice("/projects/".length)) : undefined);
