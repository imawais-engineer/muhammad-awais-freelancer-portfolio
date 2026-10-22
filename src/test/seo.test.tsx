import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import Seo from "@/components/Seo";

const shell = () => {
  document.head.innerHTML = `
    <title>Muhammad Awais | AI Automation Engineer &amp; n8n Expert</title>
    <meta name="description" content="homepage description">
    <link rel="canonical" href="https://imawais.engineer/">
    <meta property="og:url" content="https://imawais.engineer/">
    <meta property="og:title" content="homepage">
    <script type="application/ld+json" id="site-json-ld">{"@type":"WebPage","url":"https://imawais.engineer/"}</script>
  `;
};

let root: Root | undefined;

afterEach(() => {
  act(() => {
    root?.unmount();
  });
  root = undefined;
});

const renderSeo = async (path: string, noindex = false) => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  await act(async () => {
    root?.render(
      <HelmetProvider>
        <Seo title="Page not found | Muhammad Awais" description="fallback description" path={path} noindex={noindex} />
      </HelmetProvider>,
    );
  });
};

describe("rendered head", () => {
  it("replaces the homepage shell with one self-referencing canonical", async () => {
    shell();
    await renderSeo("/about");

    const canonicals = document.head.querySelectorAll('link[rel="canonical"]');
    expect(canonicals).toHaveLength(1);
    expect(canonicals[0].getAttribute("href")).toBe("https://imawais.engineer/about");
    expect(document.title).toBe("About Muhammad Awais | AI Automation Engineer & n8n Expert");
    expect(document.head.querySelector('meta[name="description"]')?.getAttribute("content")).toMatch(
      /freelance AI automation engineer/,
    );
    expect(document.head.querySelector('meta[property="og:url"]')?.getAttribute("content")).toBe(
      "https://imawais.engineer/about",
    );
    expect(document.getElementById("site-json-ld")).toBeNull();
    expect(document.head.innerHTML).not.toContain("www.imawais.engineer");
  });

  it("strips a trailing slash and uppercase from the canonical", async () => {
    shell();
    await renderSeo("/Contact/");

    expect(document.title).toBe("Hire an AI Automation Engineer | Contact Muhammad Awais");
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(
      "https://imawais.engineer/contact",
    );
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
  });

  it("does not leave the homepage canonical on an unknown URL", async () => {
    shell();
    await renderSeo("/nonexistent-page", true);

    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(0);
    expect(document.querySelector('meta[property="og:url"]')).toBeNull();
    expect(document.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("noindex, follow");
    expect(document.title).toBe("Page not found | Muhammad Awais");
  });

  it("uses the project title and canonical", async () => {
    shell();
    await renderSeo("/projects/hierarchical-support-swarm");

    expect(document.title).toBe("Hierarchical L1/L2 Customer Support Swarm Orchestrator");
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(
      "https://imawais.engineer/projects/hierarchical-support-swarm",
    );
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
  });
});
