/**
 * Contact page depth content (engagement options, timelines, FAQ). Every statement reuses
 * a claim already made elsewhere on the site (home FAQ, process, terms, meta description).
 * Alias-free: structuredData.ts imports `contactFaqs` for the FAQPage JSON-LD.
 *
 * TODO(Awais): fill the `priceNote` placeholders with your real starting prices (or delete
 * them) before publishing. They render only when `showPricePlaceholders` is true.
 */
export const showPricePlaceholders = false;

export const engagementOptions = [
  {
    title: "Single workflow, fixed scope",
    detail:
      "One process automated end to end: trigger, logic, AI steps where they help, error handling and a handover walkthrough. Most single workflows are delivered within 48 hours.",
    priceNote: "[Awais: starting price for a single workflow]",
  },
  {
    title: "Multi-workflow automation project",
    detail:
      "Several connected workflows, CRM or lead pipelines, AI agents or a custom MCP server. You approve the architecture diagram before any build starts. Complex builds are delivered within a week.",
    priceNote: "[Awais: typical range for a multi-workflow project]",
  },
  {
    title: "Fix, rescue or maintain",
    detail:
      "Debugging and stabilising an existing n8n or Make.com workflow, documenting a build someone else left behind, or ongoing maintenance and improvements after delivery.",
    priceNote: "[Awais: hourly or monthly maintenance rate]",
  },
];

export const pricingApproach = [
  "Every project gets a written scope and a fixed quote before work starts. Nothing is billed until you approve it.",
  "The quote depends on the number of workflows, the tools that need connecting, any AI steps, and the volume each run handles.",
  "You can hire me directly or through Upwork or Fiverr if you prefer their contracts and payment protection.",
  "Payment schedules and ownership of custom deliverables follow the agreement for your project (see the terms).",
];

export const typicalProjects: { label: string; href: string }[] = [
  { label: "New n8n workflows, or fixing ones that break", href: "/services/n8n-workflow-automation" },
  { label: "AI lead qualification and HubSpot or GoHighLevel routing", href: "/services/lead-qualification-crm-automation" },
  { label: "AI customer support triage and inbox automation", href: "/projects/ai-customer-support-triage" },
  { label: "Scheduled scraping and reporting into Slack or Telegram", href: "/projects/slack-reporting-pipeline-apify-n8n" },
  { label: "RAG assistants on Supabase pgvector", href: "/projects/multi-query-rag-supabase-openai" },
  { label: "Custom MCP servers that connect Claude or ChatGPT to your data", href: "/services/mcp-engineering" },
  { label: "Multi-agent systems with human-in-the-loop review", href: "/services/agentic-systems" },
  { label: "Moving from Zapier or Make.com to n8n, extended with Python", href: "/services/hybrid-automation" },
];

export const contactFaqs = [
  {
    q: "How quickly will I hear back?",
    a: "Within 24 hours. Send the process you want automated and you get a scoped automation proposal with an approach and a fixed quote.",
  },
  {
    q: "How much does an automation project cost?",
    a: "It depends on the number of workflows, integrations, AI steps and run volume. You always get a fixed quote after a short scoping conversation, and no work starts until you approve it.",
  },
  {
    q: "How long does a typical automation project take?",
    a: "Most single workflows are delivered within 48 hours. Complex builds never take longer than a week. The timeline is agreed in the scope before work begins.",
  },
  {
    q: "Do you work through Upwork and Fiverr or directly?",
    a: "Both. I work remotely with clients worldwide through Upwork, Fiverr or direct contracts, whichever you prefer.",
  },
  {
    q: "Do you need access to my accounts?",
    a: "Only to the tools the workflow touches, using scoped, revocable API tokens or OAuth. Credentials stay in your automation platform's credential store, never inside nodes, code or exports.",
  },
  {
    q: "Can you fix an n8n workflow someone else built?",
    a: "Yes. Debugging, cleaning up and documenting existing n8n and Make.com workflows is a regular part of my work, including flows that grew into one unreadable canvas or hit rate limits.",
  },
  {
    q: "What happens after delivery?",
    a: "You get the working workflow, written documentation and a handover walkthrough. Ongoing maintenance, monitoring and improvements are available if you want them.",
  },
];
