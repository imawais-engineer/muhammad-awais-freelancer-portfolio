import type { Project } from "./projects";

export const homeFaqs = [
  {
    q: "What does an AI Automation Engineer do?",
    a: "I design and build systems that take repetitive work off your team: workflows in n8n or Make.com that connect your tools, AI steps that read, classify and write, and the error handling and logging that keep them running in production.",
  },
  {
    q: "Which tools do you build with?",
    a: "Mainly n8n and Make.com, connected to tools like HubSpot, Zoho CRM, GoHighLevel, Airtable, Google Workspace, Slack, Telegram and WhatsApp, with OpenAI, Gemini or Claude for the AI steps.",
  },
  {
    q: "How long does a typical automation project take?",
    a: "Most single workflows are usually delivered within 48 hours. Complex builds never take longer than a week. You get a clear scope and timeline before any work starts.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. I work remotely with agencies, SaaS teams and small businesses worldwide, through Upwork or direct contracts.",
  },
  {
    q: "What happens after the workflow is delivered?",
    a: "You receive the working workflow, documentation of how it runs, and a handover walkthrough. Ongoing maintenance and improvements are available if you want them.",
  },
];

/** Per-case-study FAQs built strictly from the documented project content. */
export const projectFaqs = (p: Project) => [
  { q: `What problem does the ${p.shortName} solve?`, a: p.problem.join(" ") },
  { q: `How does the ${p.shortName} work?`, a: p.workflow.join(" ") },
  { q: "Which tools and integrations does it use?", a: `It is built on ${p.platform} and integrates ${p.tools.join(", ")}.` },
  { q: "What results does it deliver?", a: p.results.join(" ") },
];
