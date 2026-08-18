/** Canonical production origin. No trailing slash, no www, HTTPS only. */
export const SITE_URL = "https://imawais.engineer";

/** Turns a root-relative path into an absolute canonical URL. */
export const absoluteUrl = (pathOrUrl: string) =>
  /^https?:\/\//i.test(pathOrUrl) ? pathOrUrl : `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
