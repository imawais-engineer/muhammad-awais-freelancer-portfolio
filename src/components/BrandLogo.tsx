import { useState } from "react";
import { Boxes } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Maps a platform / tool label to the brand's primary domain and (when
 * available) its Simple Icons slug, so we render the real brand mark instead of
 * a generic dot. Keys are matched loosely (lowercase, substring) so
 * "OpenAI GPT-4o-mini" still resolves to openai.com.
 *
 * Brand marks are self-hosted under `public/brands/<slug>.svg` (no third-party
 * CDN, so crawlers can always fetch them). Unknown brands render nothing.
 */
const BRAND_DOMAINS: Array<[match: string, domain: string, slug?: string]> = [
  ["n8n", "n8n.io", "n8n"],
  ["make.com", "make.com", "make"],
  ["zapier", "zapier.com", "zapier"],
  ["openai", "openai.com", "openai"],
  ["gpt", "openai.com", "openai"],
  ["claude", "anthropic.com", "anthropic"],
  ["anthropic", "anthropic.com", "anthropic"],
  ["gemini", "gemini.google.com", "googlegemini"],
  ["groq", "groq.com"],
  ["openrouter", "openrouter.ai", "openrouter"],
  ["langchain", "langchain.com", "langchain"],
  ["crewai", "crewai.com"],
  ["nvidia", "nvidia.com", "nvidia"],
  ["supabase", "supabase.com", "supabase"],
  ["pinecone", "pinecone.io"],
  ["postgres", "postgresql.org", "postgresql"],
  ["mysql", "mysql.com", "mysql"],
  ["airtable", "airtable.com", "airtable"],
  ["notion", "notion.so", "notion"],
  ["google sheets", "sheets.google.com", "googlesheets"],
  ["google docs", "docs.google.com", "googledocs"],
  ["google drive", "drive.google.com", "googledrive"],
  ["google workspace", "workspace.google.com"],
  ["gmail", "gmail.com", "gmail"],
  ["outlook", "outlook.com", "microsoftoutlook"],
  ["slack", "slack.com", "slack"],
  ["telegram", "telegram.org", "telegram"],
  ["whatsapp", "whatsapp.com", "whatsapp"],
  ["kapso", "kapso.ai"],
  ["discord", "discord.com", "discord"],
  ["youtube", "youtube.com", "youtube"],
  ["instagram", "instagram.com", "instagram"],
  ["linkedin", "linkedin.com", "linkedin"],
  ["github", "github.com", "github"],
  ["upwork", "upwork.com", "upwork"],
  ["fiverr", "fiverr.com", "fiverr"],
  ["hubspot", "hubspot.com", "hubspot"],
  ["pipedrive", "pipedrive.com"],
  ["gohighlevel", "gohighlevel.com"],
  ["clickup", "clickup.com", "clickup"],
  ["stripe", "stripe.com", "stripe"],
  ["twilio", "twilio.com", "twilio"],
  ["apify", "apify.com"],
  ["browseract", "browseract.com"],
  ["serpapi", "serpapi.com"],
  ["streamlit", "streamlit.io", "streamlit"],
  ["aws", "aws.amazon.com", "amazonaws"],
  ["azure", "azure.microsoft.com", "microsoftazure"],
  ["oracle", "oracle.com", "oracle"],
  ["alibaba", "alibabacloud.com"],
  ["node", "nodejs.org", "nodedotjs"],
  ["typescript", "typescriptlang.org", "typescript"],
  ["python", "python.org", "python"],
  ["docker", "docker.com", "docker"],
  ["fastapi", "fastapi.tiangolo.com", "fastapi"],
  ["langgraph", "langchain.com/langgraph", "langgraph"],
  ["next.js", "nextjs.org", "nextdotjs"],
  ["nextjs", "nextjs.org", "nextdotjs"],
  ["javascript", "developer.mozilla.org", "javascript"],
  ["html", "developer.mozilla.org", "html5"],
  ["css", "developer.mozilla.org", "css"],
  ["redis", "redis.io", "redis"],
  ["celery", "docs.celeryq.dev", "celery"],
  ["pydantic", "pydantic.dev", "pydantic"],
  ["zoho", "zoho.com", "zoho"],
  ["google calendar", "calendar.google.com", "googlecalendar"],
  ["google forms", "forms.google.com", "googleforms"],
  ["calendly", "calendly.com", "calendly"],
  ["replicate", "replicate.com", "replicate"],
  ["elevenlabs", "elevenlabs.io", "elevenlabs"],
  ["ollama", "ollama.com", "ollama"],
  ["hugging face", "huggingface.co", "huggingface"],
  ["meta business", "business.facebook.com", "meta"],
];

const findBrand = (label: string) => {
  const value = label.toLowerCase();
  return BRAND_DOMAINS.find(([match]) => value.includes(match)) ?? null;
};

export const getBrandDomain = (label: string): string | null => findBrand(label)?.[1] ?? null;

const BrandLogo = ({ label, className }: { label: string; className?: string }) => {
  const brand = findBrand(label);
  const [failed, setFailed] = useState(false);

  if (!brand) return <Boxes aria-hidden="true" className={cn("h-4 w-4 shrink-0 text-primary", className)} />;

  const [, , slug] = brand;
  if (!slug || failed) return <Boxes aria-hidden="true" className={cn("h-4 w-4 shrink-0 text-primary", className)} />;

  const src = `/brands/${slug}.svg`;

  return (
    <img
      key={src}
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      width={16}
      height={16}
      onError={() => setFailed(true)}
      className={cn("h-4 w-4 shrink-0 rounded-[3px] object-contain", className)}
    />
  );
};

export default BrandLogo;
