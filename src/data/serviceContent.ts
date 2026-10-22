export interface ModernService {
  id: string;
  title: string;
  tagline: string;
  idealFor: string;
  deliverables: string[];
  techStack: string[];
  href: string;
}

export const modernServices: ModernService[] = [
  {
    id: "n8n-workflow-automation-service",
    title: "n8n Workflow Automation",
    tagline: "Production n8n workflows that connect your tools and run the same way every time.",
    idealFor:
      "Agencies, SaaS teams and small businesses with repetitive work spread across disconnected tools, or n8n workflows that keep breaking.",
    deliverables: [
      "Webhook and event-driven workflows triggered by forms, apps or incoming data",
      "REST API integrations, including tools without a ready-made connector",
      "Error handling, retries and fallback branches on every external call",
      "Fixes, clean-up and documentation for existing n8n and Make.com workflows",
    ],
    techStack: ["n8n", "Make.com", "REST APIs", "Webhooks", "OpenAI", "JavaScript"],
    href: "/services/n8n-workflow-automation",
  },
  {
    id: "lead-qualification-crm-automation-service",
    title: "AI Lead Qualification & CRM Automation",
    tagline: "Every inquiry enriched, scored and routed to the right person before it goes cold.",
    idealFor:
      "Sales teams and agencies whose leads arrive faster than anyone can qualify, route and follow up.",
    deliverables: [
      "Lead capture from web forms, landing pages, email and social channels",
      "AI lead scoring against your ideal-customer criteria",
      "Lead routing to the right owner, channel or pipeline stage",
      "CRM sync across HubSpot, Pipedrive, GoHighLevel, Airtable and Notion",
    ],
    techStack: ["n8n", "HubSpot", "GoHighLevel", "Airtable", "OpenAI", "Gmail"],
    href: "/services/lead-qualification-crm-automation",
  },
  {
    id: "agentic-systems",
    title: "Agentic Systems & State Graph Architecture",
    tagline: "Custom multi-agent workflows that plan, reason, and self-heal.",
    idealFor:
      "SaaS companies and operations-heavy agencies needing autonomous pipelines that manage ambiguous tasks without breaking.",
    deliverables: [
      "Custom state graph workflows built on LangGraph and Python",
      "Actor-Critic and Evaluator-Optimizer loops with automated self-correction",
      "Human-in-the-Loop approval interfaces with persistent state checkpoints",
      "Structured output extraction using Pydantic validation and strict schema enforcement",
    ],
    techStack: ["Python", "LangGraph", "FastAPI", "Claude 3.5 Sonnet", "GPT-4o", "PostgreSQL"],
    href: "/services/agentic-systems",
  },
  {
    id: "mcp-engineering",
    title: "Model Context Protocol (MCP) Server Engineering",
    tagline: "Secure, privacy-first bridges connecting LLMs to your private data and APIs.",
    idealFor:
      "Enterprise teams, fintech, and startups looking to integrate tools like Claude Desktop, Cursor, or proprietary models with their internal databases without exposing credentials or leaking PII.",
    deliverables: [
      "Custom MCP servers built via the official Python/TypeScript SDKs (stdio / SSE transports)",
      "Read-only database bridges for Postgres, MySQL, MongoDB, and internal REST APIs",
      "Dynamic schema introspection and AST-based SQL query validation via sqlglot",
      "Sandboxed execution environments with zero-retention data policies",
    ],
    techStack: ["FastMCP", "Python", "Node.js", "JSON-RPC 2.0", "PostgreSQL", "Docker"],
    href: "/services/mcp-engineering",
  },
  {
    id: "full-stack-ai-apps",
    title: "Full-Stack AI Products & Internal Tools",
    tagline: "Production web applications built to operationalize autonomous intelligence.",
    idealFor:
      "Founders needing customer-facing AI applications, and teams requiring purpose-built dashboards to monitor and steer autonomous agents.",
    deliverables: [
      "Modern, responsive frontends built with Next.js 15, React, and Tailwind CSS",
      "Real-time agent monitoring interfaces using Server-Sent Events (SSE) and WebSockets",
      "Dynamic data visualization dashboards using Recharts and D3",
      "Robust authentication, role-based access control (RBAC), and multi-tenant database architectures",
    ],
    techStack: ["Next.js 15", "TypeScript", "FastAPI", "Supabase", "Tailwind CSS", "Vercel"],
    href: "/services/full-stack-ai-apps",
  },
  {
    id: "hybrid-automation",
    title: "Deterministic Automation & Hybrid Orchestration",
    tagline: "Hardened infrastructure pipelines combining traditional automation with intelligent agents.",
    idealFor:
      "Businesses with established n8n, Make, or Zapier setups that have hit scaling limits and need to integrate custom Python backends and agent loops.",
    deliverables: [
      "Architecture migrations from fragile no-code workflows to robust Python microservices",
      "Hybrid setups linking n8n webhook triggers to LangGraph-powered reasoning engines",
      "High-throughput API integrations, webhook pipelines, and error-handling harnesses",
      "Automated data syncing across CRMs, ERPs, and internal databases with guaranteed at-least-once delivery",
    ],
    techStack: ["n8n (Self-Hosted)", "Python", "Redis", "Celery", "Docker", "REST APIs"],
    href: "/services/hybrid-automation",
  },
];

export interface ServiceGroup {
  id: string;
  title: string;
  intro: string;
  items: string[];
  link?: { href: string; label: string };
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: "agentic-systems",
    title: "Agentic Systems & State Graph Architecture",
    link: {
      href: "/services/agentic-systems",
      label: "Explore Agentic Systems & State Graphs →",
    },
    intro:
      "Custom multi-agent workflows that plan, reason, and self-heal without brittle prompt chains.",
    items: [
      "Custom state graph workflows built on LangGraph and Python",
      "Actor-Critic and Evaluator-Optimizer loops with automated self-correction",
      "Human-in-the-Loop approval interfaces with persistent state checkpoints",
      "Structured output extraction using Pydantic validation and strict schema enforcement",
    ],
  },
  {
    id: "mcp-engineering",
    title: "Model Context Protocol (MCP) Server Engineering",
    link: {
      href: "/services/mcp-engineering",
      label: "Explore MCP Server Engineering →",
    },
    intro:
      "Secure, privacy-first bridges connecting LLMs to your private databases and internal APIs with zero data leakage.",
    items: [
      "Custom MCP servers built via official Python/TypeScript SDKs (stdio / SSE)",
      "Read-only database bridges for Postgres, MySQL, MongoDB, and REST APIs",
      "Dynamic schema introspection and AST-based SQL query validation",
      "Sandboxed execution environments with zero-retention data policies",
    ],
  },
  {
    id: "full-stack-ai-apps",
    title: "Full-Stack AI Products & Internal Tools",
    link: {
      href: "/services/full-stack-ai-apps",
      label: "Explore Full-Stack AI Products →",
    },
    intro:
      "Production web applications built to operationalize autonomous intelligence with intuitive oversight.",
    items: [
      "Modern, responsive frontends built with Next.js 15, React, and Tailwind CSS",
      "Real-time agent monitoring interfaces using Server-Sent Events (SSE)",
      "Dynamic data visualization dashboards using Recharts and D3",
      "Robust authentication, RBAC, and multi-tenant database architectures",
    ],
  },
  {
    id: "hybrid-automation",
    title: "Deterministic Automation & Hybrid Orchestration",
    link: {
      href: "/services/hybrid-automation",
      label: "Explore Hybrid Automation →",
    },
    intro:
      "Hardened infrastructure pipelines combining traditional automation with intelligent agents.",
    items: [
      "Architecture migrations from fragile no-code workflows to Python microservices",
      "Hybrid setups linking n8n webhook triggers to LangGraph-powered engines",
      "High-throughput API integrations, webhook pipelines, and error-handling harnesses",
      "Automated data syncing across CRMs, ERPs, and databases with at-least-once delivery",
    ],
  },
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
    id: "crm-lead-automation",
    title: "CRM & Lead Automation",
    link: {
      href: "/services/lead-qualification-crm-automation",
      label: "More on lead qualification & CRM automation →",
    },
    intro:
      "Lead qualification automation closes the gap between an inquiry arriving and someone useful acting on it.",
    items: [
      "Lead capture from web forms, landing pages, email and social channels",
      "Lead qualification automation that enriches and scores each inquiry before it reaches sales",
      "Lead routing to the right owner, channel or pipeline stage automatically",
      "CRM synchronisation across HubSpot, Pipedrive, GoHighLevel, Airtable and Notion",
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

/** Visible FAQ on AgenticSystems.tsx (also emitted as FAQPage JSON-LD). */
export const agenticFaqs = [
  {
    q: "Why use state graphs in LangGraph instead of linear prompt chains?",
    a: "Linear prompt chains break the moment an LLM encounters unexpected ambiguity, format errors, or multi-step decision paths. LangGraph models processes as cyclical state machines with strongly typed state, allowing agents to branch, retry, self-correct, and pause for human approval with 100% durability.",
  },
  {
    q: "How do Human-in-the-Loop (HITL) interrupt gates work in production?",
    a: "LangGraph checkpointers freeze the complete state graph in PostgreSQL. The system generates an approval token and alerts managers via a Next.js dashboard or webhook. When the manager clicks Approve or edits a section, the graph resumes from the exact checkpoint without re-running earlier steps.",
  },
  {
    q: "Which LLMs do you use for agentic systems?",
    a: "Primarily Claude 3.5 Sonnet for deep reasoning, coding, and structured extraction, along with GPT-4o for analytical synthesis and Grok / Gemini for rapid multimodal tasks. All model calls use strict temperature settings and schema validation.",
  },
  {
    q: "How do you prevent agents from hallucinating or running in infinite loops?",
    a: "Every loop is governed by hard iteration limits (typically 3–4 passes max), Pydantic validation boundaries, and deterministic fallback branches. If an agent fails to converge, the thread safely escalates to human staff rather than burning tokens.",
  },
];

/** Visible FAQ on McpEngineering.tsx (also emitted as FAQPage JSON-LD). */
export const mcpFaqs = [
  {
    q: "What is Model Context Protocol (MCP) and why does my business need it?",
    a: "MCP is the open standard created by Anthropic for connecting AI models to external tools, databases, and business systems securely. Instead of building brittle, custom API wrappers, MCP creates an isolated, interoperable protocol bridge that prevents data leakage and enforces strict permission boundaries.",
  },
  {
    q: "How does an MCP server guarantee that production database data doesn't leak?",
    a: "The MCP server exposes database schemas (table names, column types, foreign keys) without row data. When an LLM generates a SQL query, the MCP server validates it against an AST whitelist, executes it within a sandboxed read-only transaction, and returns only aggregated results or specific answer metrics.",
  },
  {
    q: "Which transports and SDKs do you support?",
    a: "I build production MCP servers using the official FastMCP Python SDK and TypeScript SDKs, supporting both standard input/output (stdio) for local tools (Claude Desktop, Cursor) and Server-Sent Events (SSE) for distributed web applications.",
  },
  {
    q: "Can an MCP server integrate with internal company REST APIs?",
    a: "Yes. An MCP server can wrap internal microservices, CRM APIs, Stripe, Jira, or ERP endpoints, exposing them as safe tools with typed parameters and strict rate-limiting.",
  },
];

/** Visible FAQ on FullStackAiApps.tsx (also emitted as FAQPage JSON-LD). */
export const fullStackFaqs = [
  {
    q: "Why do I need a custom full-stack UI for autonomous AI agents?",
    a: "Agents without purpose-built interfaces are black boxes. A custom Next.js frontend gives your team visibility into node progression, lets managers inspect reasoning trajectories, and provides intuitive Human-in-the-Loop approval buttons before irreversible actions occur.",
  },
  {
    q: "How is real-time agent streaming handled?",
    a: "We implement Server-Sent Events (SSE) in FastAPI and Next.js 15. As the state machine transitions between graph nodes (e.g. from Extractor to Estimator to Review Gate), the frontend updates dynamically without requiring manual page refreshes.",
  },
  {
    q: "Can the UI integrate with our existing design system and identity providers?",
    a: "Yes. All interfaces are built using Tailwind CSS and shadcn/ui components, making them completely customizable to match your corporate brand standards and Single Sign-On (SSO) providers.",
  },
  {
    q: "What deployment targets do you support?",
    a: "Frontends are optimized for Vercel, AWS Amplify, or Docker containers, with Python backends containerized on AWS ECS, Railway, or Google Cloud Run.",
  },
];

/** Visible FAQ on HybridAutomation.tsx (also emitted as FAQPage JSON-LD). */
export const hybridFaqs = [
  {
    q: "Can you migrate our Zapier or Make.com automations to n8n?",
    a: "Yes. When the logic has outgrown Zapier or Make.com, I rebuild each scenario in n8n with the same triggers and outputs, add error handling and retries, and move heavy processing into Python services where it makes sense. Self-hosted n8n on Docker is an option when data control or volume matters.",
  },
  {
    q: "What is a 'hybrid automation' architecture?",
    a: "Hybrid automation combines the agility of visual workflow engines (like n8n) for webhook ingestion and CRM routing with dedicated Python microservices for heavy computation, custom cryptography, vector search, and agentic reasoning. This gives you the best of both worlds: rapid iteration without hitting no-code platform walls.",
  },
  {
    q: "When should our team migrate away from Zapier or Make?",
    a: "When you face recurring timeout errors, high per-task costs, lack of version control (git), or inability to run custom algorithms or private models. We migrate your workflows into self-hosted n8n and Python microservices that scale predictably.",
  },
  {
    q: "How do you guarantee reliability during third-party API downtime?",
    a: "Every integration features idempotent webhook processing, exponential backoff retries, dead-letter queues (DLQs), and automated alerts so transient outages never drop customer transactions.",
  },
  {
    q: "Can you maintain and monitor existing self-hosted n8n instances?",
    a: "Yes. I optimize database connection pooling, configure Redis queue execution modes for high concurrency, set up Docker backups, and monitor worker performance.",
  },
];
