export interface RouteHeadEntry {
  title: string;
  description: string;
  robots: string;
}

/**
 * Runs during HTML parse, before the deferred module bundle. Lovable serves
 * one shell for every clean URL and has dropped this inline script on publish,
 * so the same source is also written to `/route-head.js` and loaded with a
 * blocking `src`.
 */
export const routeHeadJs = (routes: Record<string, RouteHeadEntry>, siteUrl: string, siteName = "Muhammad Awais") => {
  const payload = JSON.stringify(routes).replace(/</g, "\\u003c");
  const origin = JSON.stringify(siteUrl);
  const name = JSON.stringify(siteName);
  return `(function () {
  var routes = ${payload};
  var path = location.pathname || "/";
  if (path.length > 1) path = path.replace(/\\/+$/, "");
  path = path.toLowerCase();
  if (path.endsWith("/index.html")) path = path.slice(0, -"/index.html".length) || "/";
  else if (path.endsWith(".html")) path = path.slice(0, -5) || "/";
  if (!path) path = "/";
  var ensure = function (attr, name, value) {
    var el = document.head.querySelector("meta[" + attr + '="' + name + '"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", value);
  };
  var dropUrl = function (sel) {
    var el = document.head.querySelector(sel);
    if (el) el.remove();
  };
  var url = ${origin} + (path === "/" ? "/" : path);
  var quoted = '"' + url + '"';
  var hashed = '"' + url + '#';
  var nodes = document.head.querySelectorAll('script[type="application/ld+json"]');
  var fitting = [];
  var i;
  for (i = 0; i < nodes.length; i++) {
    var text = nodes[i].textContent || "";
    if (text.indexOf(quoted) !== -1 || text.indexOf(hashed) !== -1) fitting.push(nodes[i]);
  }
  var prefer = [];
  for (i = 0; i < fitting.length; i++) {
    if (fitting[i].id === "page-json-ld") prefer.push(fitting[i]);
  }
  if (!prefer.length) {
    for (i = 0; i < fitting.length; i++) {
      if ((fitting[i].textContent || "").indexOf("\\n") === -1) prefer.push(fitting[i]);
    }
  }
  ensure("property", "og:site_name", ${name});
  var page = routes[path];
  for (i = 0; i < nodes.length; i++) {
    var keep = page && prefer.length ? prefer.indexOf(nodes[i]) !== -1 : page && !prefer.length && fitting.indexOf(nodes[i]) !== -1;
    if (!keep) nodes[i].remove();
  }
  if (!page) {
    ensure("name", "robots", "noindex, follow");
    dropUrl('link[rel="canonical"]');
    dropUrl('meta[property="og:url"]');
    document.title = "Page not found | Muhammad Awais";
    return;
  }
  document.title = page.title;
  ensure("name", "description", page.description);
  ensure("name", "robots", page.robots);
  var link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
  ensure("property", "og:url", url);
  ensure("property", "og:title", page.title);
  ensure("property", "og:description", page.description);
  ensure("name", "twitter:title", page.title);
  ensure("name", "twitter:description", page.description);
})();
`;
};
