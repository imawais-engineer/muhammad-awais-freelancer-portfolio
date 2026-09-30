/** Content shared by the service pages and their structured data (also read at build time). */

export interface ServiceGroup {
  id: string;
  title: string;
  intro: string;
  items: string[];
  link?: { href: string; label: string };
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: "n8n-workflow-automation",
    title: "n8n Workflow Automation",
    link: {
      href: "/services/n8n-workflow-automation",
      label: "More on n8n workflow automation →",
    },
    intro:
      "Event-driven workflows that connect your tools and run the process the same way every time — built to survive real production traffic, not just a happy-path demo.",
    items: [
      "Webhook and event-driven workflows triggered by forms, apps or incoming data",
      "REST API integrations, including tools without a ready-made connector",
      "Multi-step business processes split into readable, maintainable sub-workflows",
      "Error handling, retries and fallback branches on every external call",
      "Scheduled and cron-based automation for recurring work",
      "Self-hosted n8n set-up where data control or volume makes it the better fit",
    ],
  },
  {
    id: "ai-automation-ai-agents",
    title: "AI Automation & AI Agents",
    intro:
      "AI used where it genuinely beats a rule — reading messy input, classifying it, and deciding what happens next inside a workflow you can audit.",
    items: [
      "AI agents that answer, classify and take action inside your workflows",
      "Classification, extraction and summarisation of emails, tickets and documents",
      "Decision support: the AI drafts or scores, a rule or a human approves",
      "RAG knowledge assistants answering from your own documents and data",
      "WhatsApp, Slack and web assistants with conversation memory",
    ],
  },
  {
    id: "crm-lead-automation",
    title: "CRM & Lead Automation",
    link: {
      href: "/services/lead-qualification-crm-automation",
      label: "More on lead qualification & CRM automation →",
    },
    intro:
      "Most businesses do not have a lead problem — they have a response-time problem. Lead qualification automation closes the gap between an inquiry arriving and someone useful acting on it.",
    items: [
      "Lead capture from web forms, landing pages, email and social channels",
      "Lead qualification automation that enriches and scores each inquiry before it reaches sales",
      "Lead routing to the right owner, channel or pipeline stage automatically",
      "CRM synchronisation across HubSpot, Pipedrive, GoHighLevel, Airtable and Notion",
      "Pipeline management: stage updates, task creation and owner notifications",
      "Follow-up automation, appointment booking, reminders and re-engagement sequences",
    ],
  },
  {
    id: "business-process-data-automation",
    title: "Business Process & Data Automation",
    intro:
      "The unglamorous work that eats the week: copying data, chasing numbers, assembling the same report. Automated once, documented, and left running.",
    items: [
      "Google Workspace automation — Sheets, Docs, Drive and Gmail",
      "Operational and management reporting delivered to Slack, Telegram or email",
      "Data synchronisation between apps, sheets and databases",
      "Scraping and enrichment pipelines for monitoring and research",
      "Notification and alerting workflows so exceptions surface immediately",
      "Document workflows: generation, routing, storage and approvals",
    ],
  },
];


export const servicesFaqs = [
  {
    q: "What kinds of business processes can you automate?",
    a: "Anything that follows a repeatable rule and touches a tool with an API or a webhook: lead capture and qualification, CRM updates, client intake and onboarding, support triage, review and reputation workflows, reporting, scraping and enrichment, document generation, and content publishing. The projects on this site are real examples across all of those categories.",
  },
  {
    q: "When should I use n8n instead of Make.com or Zapier?",
    a: "Zapier is fine for simple, linear task-to-task automation. Make.com suits visual multi-branch scenarios with moderate logic. n8n is the better fit when you need custom code inside the flow, real error handling and retries, sub-workflows, heavier data volume, or self-hosting for data control. I will tell you honestly if your use case does not need n8n.",
  },
  {
    q: "Can you connect my CRM and existing tools?",
    a: "Yes. HubSpot, Pipedrive, GoHighLevel, Airtable, Notion, Google Workspace, Slack, Telegram and WhatsApp are all systems I have integrated in delivered work. Where no native connector exists, I integrate through the REST API or webhooks directly.",
  },
  {
    q: "Can AI qualify and route my leads?",
    a: "Yes — that is one of the most common builds. An inquiry is enriched, scored against your own criteria, and either routed to sales as qualified or logged and placed into a nurture path. The scoring rules stay yours and remain visible, so you can see why a lead was scored the way it was.",
  },
  {
    q: "Do you build and document the workflow?",
    a: "Both. You get an approved architecture before nodes are built, an annotated workflow with named and commented nodes, written documentation covering each branch and where credentials live, and a handover walkthrough.",
  },
  {
    q: "Can you work with an existing n8n workflow?",
    a: "Yes. Debugging, cleaning up and extending existing n8n, Make or Zapier automations is regular work — often the fastest way to get value if a workflow already exists but keeps breaking.",
  },
  {
    q: "What happens after deployment?",
    a: "The system ships with run logs, execution history and failure alerts so problems surface before your customers notice. After handover you can run it yourself with the documentation, or keep me on for maintenance and changes as your process evolves.",
  },
];


export const n8nFaqs = [
  {
    q: "What is n8n workflow automation?",
    a: "n8n is a workflow automation platform where each step is a node on a canvas: a trigger starts the run, and the following nodes call APIs, transform data, branch on conditions, run code or call an AI model. Because it supports custom code, sub-workflows, real error handling and self-hosting, it behaves closer to a small integration service than to a simple task-connector tool.",
  },
  {
    q: "When is n8n a better fit than Zapier or Make.com?",
    a: "Zapier is a reasonable choice for short linear task automation. Make.com works well for visual multi-branch scenarios with moderate logic. n8n becomes the better fit when you need code inside the flow, deliberate error handling and retries, reusable sub-workflows, larger data volumes, or self-hosting for data control. If your process genuinely does not need that, I will say so — one of the projects on this site was built on Make.com because it was the right tool for that job.",
  },
  {
    q: "Can you work with an existing n8n workflow?",
    a: "Yes. Debugging, restructuring, documenting and extending existing n8n workflows is regular work, and it is often the fastest route to value when something already exists but keeps failing or nobody understands it any more.",
  },
  {
    q: "Do you set up self-hosted n8n?",
    a: "Yes, where data control, credential handling or execution volume makes it the better option. If n8n Cloud is enough for your case, I will recommend that instead rather than adding infrastructure you would have to maintain.",
  },
  {
    q: "How do you handle credentials and access?",
    a: "Credentials stay in your own n8n credential store, connected to your accounts rather than mine. The documentation records which credential each node uses so access can be rotated or revoked without breaking the flow.",
  },
  {
    q: "What does delivery and handover look like?",
    a: "An agreed architecture before building starts, then the workflow itself with named and annotated nodes, error handling and logging in place, written documentation of each branch, and a walkthrough call. After that you can run it yourself, or keep me on for changes as the process evolves.",
  },
];


export const leadFaqs = [
  {
    q: "How are inbound leads captured automatically?",
    a: "Every source posts into one entry point — a webhook from your form or landing page, an inbox watcher for emailed enquiries, or an API poll where a platform offers no webhook. From there a single pipeline handles all of them, so no channel has its own private process.",
  },
  {
    q: "How does AI lead qualification stay reliable?",
    a: "AI is scoped to the part it is good at: reading free text and extracting intent. Thresholds, routing and CRM writes stay deterministic. If the model fails or returns something unexpected, the fallback branch sends the lead to a human rather than dropping it — the pipeline never depends on the AI being correct to keep moving.",
  },
  {
    q: "Can it work with my existing CRM?",
    a: "Yes. HubSpot, Pipedrive, GoHighLevel, Airtable, Notion and ClickUp are systems already integrated in work documented on this site. Anything with a REST API can be connected even without a native connector.",
  },
  {
    q: "How do you stop duplicate leads and double replies?",
    a: "Inbound payloads are keyed on a stable identifier and checked before processing, and the CRM is searched for an existing contact before a record is created. Repeated webhook deliveries hit an already-seen key and stop there.",
  },
  {
    q: "Do I lose control over what sales sees?",
    a: "No. The scoring criteria are yours, visible and editable, and the reasoning is stored on each record. You can also keep an approval step in front of any outbound message so nothing is sent in your name without a human seeing it.",
  },
  {
    q: "How long does a lead pipeline take to build?",
    a: "Most single workflows are usually delivered within 48 hours. Complex builds never take longer than a week. You get a clear scope and timeline before any work starts.",
  },
];

