import aaronAvatar from "@/assets/aaron-auf-der-maur.jpg.asset.json";
import { projects } from "@/data/projects";

export const site = {
  name: "Muhammad Awais",
  title: "AI Automation Engineer — n8n Workflow Automation",
  tagline:
    "Helping agencies, SaaS teams, and small businesses cut 20+ hours of manual work a week with smart automations.",
  positioning:
    "As an AI Automation Engineer and n8n Expert, I help agencies, SaaS teams, and small businesses cut 20+ hours of manual work a week. I specialise in n8n workflow automation, AI integrations, and custom APIs — turning manual processes into clean, reliable systems that save time, reduce errors, and keep your tools connected.",
  location: "Pakistan — working remotely with clients worldwide",
  email: "alpha.se.awais@gmail.com",
  website: "https://www.imawais.engineer",
  links: {
    upwork: "https://www.upwork.com/freelancers/awaisai",
    fiverr: "https://www.fiverr.com/mawais_pk",
    linkedin: "https://linkedin.com/in/imawais-engineer",
    github: "https://github.com/imawais-engineer",
  },
};

export const proofStats = [
  { value: "5.0 / 5.0", label: "Upwork rating" },
  { value: String(projects.length), label: "Portfolio projects documented" },
  { value: "20+ hrs", label: "Saved per client, per week" },
  { value: "100%", label: "Job success & repeat clients" },
];

export const services = [
  {
    title: "AI Agents & Chatbots",
    summary: "LLM-powered assistants that answer, classify, and decide.",
    items: [
      "AI agents and chatbots (WhatsApp, Slack, web)",
      "LLM workflows with OpenAI, Claude, Gemini",
      "AI classification and data extraction",
      "AI content processing and generation",
      "AI-assisted decision making and research",
    ],
  },
  {
    title: "Workflow Automation Pipelines",
    summary: "End-to-end systems that run without you touching them.",
    items: [
      "End-to-end n8n, Make, and Zapier automations",
      "Multi-step workflows with error handling",
      "Workflow debugging, cleanup, and optimisation",
      "Webhook and API integrations",
      "Scheduled and trigger-based automations",
    ],
  },
  {
    title: "CRM & Lead Automation",
    summary: "From first form fill to a booked, qualified call.",
    items: [
      "Lead capture from forms, websites, email, and social",
      "Lead qualification and scoring",
      "CRM and pipeline automation (HubSpot, Airtable, Notion, Pipedrive, GoHighLevel)",
      "Follow-up emails, reminders, and calendar booking",
    ],
  },
  {
    title: "Google Workspace Automation",
    summary: "Gmail, Sheets, Docs, Drive, Calendar and Forms, wired together.",
    items: [
      "Gmail, Sheets, Docs, Drive, Calendar, and Forms automation",
      "Google Forms to CRM / email / Sheets workflows",
      "Drive file management, reporting, and scheduling",
    ],
  },
  {
    title: "Business Process Automation",
    summary: "Kill the copy-paste work between disconnected tools.",
    items: [
      "Data syncing between disconnected tools",
      "Automated reporting and dashboards",
      "Social media and content workflow automation",
      "Task routing and intelligent notifications",
      "Data processing, cleaning, and enrichment",
    ],
  },
  {
    title: "Scraping & Data Automation",
    summary: "Reliable data in, structured insight out.",
    items: [
      "Web scraping and social media data workflows",
      "Extraction, cleaning, deduplication, and enrichment",
      "Scheduled collection and real-time monitoring",
      "API-based data integration",
    ],
  },
];

export const techStack = [
  {
    category: "Automation Platforms",
    tools: ["n8n (expert)", "Make.com (advanced)", "Zapier", "Shell scripting", "Python scripting"],
  },
  {
    category: "AI & LLMs",
    tools: ["OpenAI (GPT-4o, GPT-5)", "Claude", "Gemini", "Groq", "OpenRouter", "LangChain", "CrewAI", "RAG"],
  },
  {
    category: "Vector & Databases",
    tools: ["Supabase (pgvector)", "Pinecone", "PostgreSQL", "MySQL", "Airtable", "Notion", "Google Sheets"],
  },
  {
    category: "APIs & Integrations",
    tools: ["REST APIs", "Webhooks", "OAuth", "Gmail", "Slack", "Telegram", "WhatsApp", "Discord", "YouTube", "SerpAPI"],
  },
  {
    category: "CRM & Business Tools",
    tools: ["HubSpot", "Pipedrive", "GoHighLevel", "ClickUp", "Stripe", "Twilio", "Google Workspace"],
  },
  {
    category: "Scraping & Data",
    tools: ["Apify", "SocialCrawl", "BrowserAct", "Python scraping", "Data enrichment", "Deduplication"],
  },
  {
    category: "Programming",
    tools: ["JavaScript (ES6, Node.js)", "Python", "JSON", "HTML/CSS", "TypeScript"],
  },
  {
    category: "Deployment & Hosting",
    tools: ["Self-hosted n8n", "AWS", "Oracle Cloud", "Azure", "Alibaba Cloud", "Virtual machines", "Streamlit"],
  },
];

export const methodologies = [
  "Event-driven architecture",
  "State-based logic",
  "Idempotency",
  "Error resilience",
  "Parallel execution",
  "Sub-workflow design",
];

export const testimonials = [
  {
    quote:
      "Everything you need. Professional, responds extremely quickly, and works in a structured and reliable manner. Top-notch! There's really nothing more to say.",
    author: "Aaron Auf der Maur",
    role: "Managing Director",
    company: "Brand Aktuell",
    companyUrl: "https://brand-aktuell.ch",
    avatar: aaronAvatar.url,
    meta: "Switzerland · Upwork 5.0/5.0",
    rating: 5,
  },
  {
    quote: "You did amazing work again – exactly as expected. Thanks a lot!",
    author: "Diego Armandon",
    role: "Direct client",
    company: "Switzerland",
    meta: "Switzerland · Direct client referral 5.0/5.0",
    rating: 5,
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery & Requirements",
    detail:
      "I start by understanding your business goals, current pain points, and existing tools. We define scope, success metrics, and timeline together.",
  },
  {
    step: "02",
    title: "System Design",
    detail:
      "I map the architecture, data flow, and logic in a clear visual diagram. You approve the design before any build starts.",
  },
  {
    step: "03",
    title: "Build & Test",
    detail:
      "I develop the workflow in your chosen platform, rigorously testing each step, handling edge cases, and ensuring error resilience.",
  },
  {
    step: "04",
    title: "Deployment & Training",
    detail:
      "I deploy to production, set up monitoring, and walk you through the system so you understand exactly how it works.",
  },
  {
    step: "05",
    title: "Maintenance & Support",
    detail:
      "Ongoing support, updates, and enhancements as your business evolves. You're never left stranded.",
  },
];

export const about = {
  intro:
    "I'm an AI Automation Engineer and n8n Expert with hands-on experience building production-grade workflows for agencies, SaaS teams, and small businesses.",
  paragraphs: [
    "I design and implement end-to-end automations using n8n, Make, Zapier, and Python — connecting CRMs, Google Workspace, AI APIs (OpenAI, Claude, Gemini), and communication tools like Slack, Telegram, and WhatsApp. My work ranges from lead capture and qualification pipelines to AI-powered assistants and automated reporting systems.",
    "Over the past few years I've helped businesses across industries — from real estate and construction to SaaS and content marketing — save thousands of hours, eliminate human error, and unlock new revenue streams. I don't just build workflows, I build systems that integrate with your existing stack and grow with your business.",
    "I'm based in Pakistan and work with clients remotely and globally. My clients trust me for speed, structure, and reliability — backed by a 100% success rate on Upwork and a growing list of repeat clients.",
  ],
  whoIHelp:
    "Small businesses, agencies, SaaS teams, creators, and operations teams who are tired of moving data between spreadsheets, manually following up with leads, updating CRMs, or handling repetitive email and form tasks.",
  approach: [
    "Understand your current workflow and pain points.",
    "Identify what can realistically be automated — using AI only where it adds real value.",
    "Build a tested, documented, easy-to-use system that saves time and keeps your tools connected.",
  ],
  principle:
    "I don't use AI for the sake of it. If a simple automation works better, I keep it simple.",
  credentials: [
    {
      title: "n8n Certified — Essentials & APIs",
      detail: "Official n8n certification covering workflow fundamentals and API integration.",
    },
    {
      title: "GenAI Workflow Orchestration — DeepLearning.AI",
      detail: "Certification in orchestrating generative AI inside production workflows.",
    },
    {
      title: "USAII Global AI Hackathon 2026 — Finalist",
      detail:
        "Built an AI agent that turns vague ideas into structured action plans with human-in-the-loop review and AI guardrails.",
    },
    {
      title: "QWEN Cloud Hackathon 2026 — Finalist",
      detail: "Recognised for applied AI workflow engineering.",
    },
    {
      title: "Upwork — 5.0/5.0 rating",
      detail: "Delivering automation systems to clients globally, with repeat and referral work.",
    },
  ],
};

export const businessProblems = [
  {
    title: "Repetitive manual work",
    detail:
      "Moving data between tools, updating spreadsheets, processing forms and handling routine email by hand.",
  },
  {
    title: "Disconnected tools",
    detail:
      "CRM, sheets, inbox and chat apps that never talk to each other, so the same record gets typed three times.",
  },
  {
    title: "Slow, leaky lead handling",
    detail:
      "Leads arriving faster than anyone can qualify or follow up — the good ones go cold before you reach them.",
  },
  {
    title: "Manual reporting",
    detail:
      "Hours each week rebuilding the same digest, dashboard or status update from scattered sources.",
  },
  {
    title: "Human error at scale",
    detail:
      "Typos, duplicates and missed steps that quietly cost money once volume grows past a few dozen records a day.",
  },
  {
    title: "No visibility",
    detail:
      "Nobody can answer \"where is this in the process right now?\" without asking three people.",
  },
];

export const integrationMap = [
  {
    layer: "Triggers & intake",
    nodes: ["Webforms", "Gmail", "Google Forms", "Webhooks", "Calendly", "Stripe", "Schedules", "WhatsApp"],
  },
  {
    layer: "Processing & intelligence",
    nodes: ["n8n", "Make.com", "Zapier", "OpenAI", "Claude", "Gemini", "Groq", "OpenRouter", "JavaScript", "Python"],
  },
  {
    layer: "Data & storage",
    nodes: ["Google Sheets", "Airtable", "Notion", "Supabase (pgvector)", "PostgreSQL", "Pinecone", "Google Drive"],
  },
  {
    layer: "Delivery & action",
    nodes: ["Slack", "Telegram", "Gmail", "WhatsApp", "HubSpot", "Pipedrive", "GoHighLevel", "ClickUp", "Twilio", "YouTube"],
  },
];

export const architecturePatterns = [
  {
    title: "Event-driven triggers",
    detail:
      "Webhooks, inbox and sheet triggers fire the moment something happens — no polling, no waiting on a cron.",
  },
  {
    title: "Conditional routing",
    detail:
      "IF/switch branches send each record down the right path: qualified vs. nurture, replied vs. follow-up.",
  },
  {
    title: "Parallel execution",
    detail:
      "One trigger fans out to Slack, the CRM, the sheet and an auto-reply at the same time instead of in sequence.",
  },
  {
    title: "Sub-workflow design",
    detail:
      "Shared logic lives in reusable sub-workflows, so systems stay readable as they grow past 20 nodes.",
  },
  {
    title: "State-based locking",
    detail:
      "A processed flag on every record guarantees each item is handled exactly once, even if triggers double-fire.",
  },
  {
    title: "Batch & loop processing",
    detail:
      "Iterators walk hundreds of records per run with rate-limit-aware pacing and per-item error isolation.",
  },
];

export const aiCapabilities = [
  {
    title: "Classification & routing",
    detail: "LLM-based labelling of emails, tickets and leads, with confidence thresholds and rule-based fallbacks.",
  },
  {
    title: "Extraction & structuring",
    detail: "Turning free text, documents and scraped pages into strict JSON your systems can act on.",
  },
  {
    title: "Scoring & qualification",
    detail: "AI scoring of inbound leads against your ideal-customer criteria before a human ever sees them.",
  },
  {
    title: "Conversational agents",
    detail: "WhatsApp, Slack and web assistants with memory, context windows and logged conversations.",
  },
  {
    title: "RAG over your knowledge base",
    detail: "Multi-query retrieval with Supabase pgvector or Pinecone for grounded, source-backed answers.",
  },
  {
    title: "Content generation",
    detail: "Drafted replies, summaries, SEO metadata and reports — always reviewable before they go out.",
  },
];

export const scrapingCapabilities = [
  {
    title: "Collection",
    items: ["Apify actors (pre-built & custom)", "SocialCrawl for social data", "BrowserAct web automation", "Python scrapers", "API-based ingestion"],
  },
  {
    title: "Cleaning",
    items: ["Normalisation & type coercion", "Deduplication by stable keys", "Validation & rejection rules", "Field mapping to your schema"],
  },
  {
    title: "Enrichment",
    items: ["Third-party enrichment APIs", "Median & outlier scoring", "AI summarisation of records", "Derived metrics and flags"],
  },
  {
    title: "Delivery",
    items: ["Scheduled digests", "Real-time monitoring alerts", "Google Sheets / Airtable sync", "CRM push with dedupe"],
  },
];

export const reliability = [
  {
    title: "Error handling on every branch",
    detail:
      "Workflows continue on API failures — private accounts, rate limits and timeouts are caught, logged and skipped rather than breaking the run.",
  },
  {
    title: "Retries with backoff",
    detail: "Failed writes retry up to three times before the run is logged as failed and you are notified.",
  },
  {
    title: "Idempotency",
    detail: "State flags and stable keys guarantee each record is processed exactly once — no duplicate tasks or emails.",
  },
  {
    title: "Credential hygiene",
    detail: "Keys live in the platform's credential store or environment variables, never inside nodes, code or exports.",
  },
  {
    title: "Least-privilege access",
    detail: "Scoped OAuth and API tokens limited to the exact resources a workflow needs, and revocable independently.",
  },
  {
    title: "Monitoring & logging",
    detail: "Run logs, execution history and failure alerts so you find out before your customers do.",
  },
];

export const deliverables = [
  {
    title: "Architecture diagram",
    detail: "The full data flow, approved by you before a single node is built.",
  },
  {
    title: "Annotated workflow",
    detail: "Named, commented nodes and sticky notes so any developer can pick it up later.",
  },
  {
    title: "Written documentation",
    detail: "How it runs, what each branch does, where credentials live and how to change the logic.",
  },
  {
    title: "Handover walkthrough",
    detail: "A recorded or live session showing exactly how to operate and monitor the system.",
  },
  {
    title: "Case-study breakdowns",
    detail: "Every project on this site is documented end to end — problem, architecture, logic and measured results.",
  },
  {
    title: "Live demo on request",
    detail: "Happy to screen-share a running workflow relevant to your use case before you commit.",
  },
];
