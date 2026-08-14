import { useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Maps a platform / tool label to the brand's primary domain so we can render
 * the real logo instead of a generic dot. Keys are matched loosely (lowercase,
 * substring) so "OpenAI GPT-4o-mini" still resolves to openai.com.
 */
const BRAND_DOMAINS: Array<[match: string, domain: string]> = [
  ["n8n", "n8n.io"],
  ["make.com", "make.com"],
  ["zapier", "zapier.com"],
  ["openai", "openai.com"],
  ["gpt", "openai.com"],
  ["claude", "anthropic.com"],
  ["anthropic", "anthropic.com"],
  ["gemini", "gemini.google.com"],
  ["groq", "groq.com"],
  ["openrouter", "openrouter.ai"],
  ["langchain", "langchain.com"],
  ["crewai", "crewai.com"],
  ["nvidia", "nvidia.com"],
  ["supabase", "supabase.com"],
  ["pinecone", "pinecone.io"],
  ["postgres", "postgresql.org"],
  ["mysql", "mysql.com"],
  ["airtable", "airtable.com"],
  ["notion", "notion.so"],
  ["google sheets", "sheets.google.com"],
  ["google docs", "docs.google.com"],
  ["google drive", "drive.google.com"],
  ["google workspace", "workspace.google.com"],
  ["gmail", "gmail.com"],
  ["outlook", "outlook.com"],
  ["slack", "slack.com"],
  ["telegram", "telegram.org"],
  ["whatsapp", "whatsapp.com"],
  ["kapso", "kapso.ai"],
  ["discord", "discord.com"],
  ["youtube", "youtube.com"],
  ["instagram", "instagram.com"],
  ["linkedin", "linkedin.com"],
  ["upwork", "upwork.com"],
  ["fiverr", "fiverr.com"],
  ["hubspot", "hubspot.com"],
  ["pipedrive", "pipedrive.com"],
  ["gohighlevel", "gohighlevel.com"],
  ["clickup", "clickup.com"],
  ["stripe", "stripe.com"],
  ["twilio", "twilio.com"],
  ["apify", "apify.com"],
  ["browseract", "browseract.com"],
  ["serpapi", "serpapi.com"],
  ["streamlit", "streamlit.io"],
  ["aws", "aws.amazon.com"],
  ["azure", "azure.microsoft.com"],
  ["oracle", "oracle.com"],
  ["alibaba", "alibabacloud.com"],
  ["node", "nodejs.org"],
  ["typescript", "typescriptlang.org"],
  ["python", "python.org"],
];

export const getBrandDomain = (label: string): string | null => {
  const value = label.toLowerCase();
  const hit = BRAND_DOMAINS.find(([match]) => value.includes(match));
  return hit ? hit[1] : null;
};

const BrandLogo = ({ label, className }: { label: string; className?: string }) => {
  const domain = getBrandDomain(label);
  const [failed, setFailed] = useState(false);

  if (!domain || failed) return null;

  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
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
