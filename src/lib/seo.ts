/** Canonical production origin. Apex host, no trailing slash, HTTPS only. www is not canonical. */
export const SITE_URL = "https://imawais.engineer";

/** Turns a root-relative path into an absolute canonical URL. */
export const absoluteUrl = (pathOrUrl: string) =>
  /^https?:\/\//i.test(pathOrUrl) ? pathOrUrl : `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;

/** FAQPage schema from visible on-page Q&As. Only use with FAQs rendered on the same page. */
export const faqPageJsonLd = (faqs: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
