/**
 * Per-case-study search intent + conversion metadata.
 * Optimized for SEMrush / Ahrefs ranking potential and client conversion.
 */
export interface ProjectSeo {
  /** Primary search topic the case study can realistically rank for. */
  topic: string;
  /** Unique <title> body — the site suffix is appended by the page. */
  title: string;
  /** Visible <h1> when it should carry the target keyword better than the project name. */
  h1?: string;
  /** Unique meta description: what was built, topic, key tech, outcome (145-158 chars). */
  description: string;
  /** Contextual CTA headline used near the end of the page. */
  ctaHeading: string;
  /** Contextual CTA button label. */
  ctaLabel: string;
  /** Genuinely related case studies (slugs), shown as contextual links. */
  related: string[];
}

export const projectSeo: Record<string, ProjectSeo> = {
  "human-in-the-loop-proposal-swarm": {
    topic: "LangGraph proposal generator human in the loop",
    title: "Autonomous Proposal Swarm with Human-in-the-Loop Governance",
    description: "LangGraph multi-agent state machine with human-in-the-loop interrupts that turns raw discovery audio into executive-ready proposals in 3 minutes.",
    ctaHeading: "Ready to deploy human-governed agentic workflows?",
    ctaLabel: "Build a custom LangGraph agent swarm",
    related: ["privacy-first-sql-mcp-analyst", "autonomous-cicd-code-reviewer", "client-intake-onboarding-automation"],
  },
  "privacy-first-sql-mcp-analyst": {
    topic: "Model Context Protocol MCP SQL analyst",
    title: "Privacy-First SQL AI Analyst via Custom Model Context Protocol (MCP)",
    h1: "Custom MCP Server for a Privacy-First SQL AI Analyst",
    description: "Custom Python Model Context Protocol (MCP) server with self-correcting ReAct SQL loops, read-only PostgreSQL sandboxing, and zero PII data leakage.",
    ctaHeading: "Need to chat with your production database securely?",
    ctaLabel: "Build a custom MCP server",
    related: ["human-in-the-loop-proposal-swarm", "autonomous-cicd-code-reviewer", "automated-business-kpi-analysis-growth-insights"],
  },
  "autonomous-cicd-code-reviewer": {
    topic: "Autonomous CI/CD code reviewer Evaluator Optimizer",
    title: "Autonomous CI/CD Code Reviewer & Refactoring Harness",
    description: "Evaluator-Optimizer agent harness testing git diffs in Docker sandboxes and committing verified refactor patches directly via GitHub MCP.",
    ctaHeading: "Want your pull requests reviewed and refactored on autopilot?",
    ctaLabel: "Build an autonomous SDLC review harness",
    related: ["privacy-first-sql-mcp-analyst", "human-in-the-loop-proposal-swarm", "hierarchical-support-swarm"],
  },
  "hierarchical-support-swarm": {
    topic: "Hierarchical multi-agent customer support swarm",
    title: "Hierarchical L1/L2 Customer Support Swarm Orchestrator",
    description: "Supervisor-Worker multi-agent swarm in LangGraph that semantically coordinates Stripe billing, Linear/GitHub APIs, and Pinecone vector RAG.",
    ctaHeading: "Looking to automate complex multi-domain support tickets?",
    ctaLabel: "Build a hierarchical support swarm",
    related: ["ai-customer-support-triage", "whatsapp-ai-assistant-google-docs", "human-in-the-loop-proposal-swarm"],
  },
  "brand-governed-content-critic": {
    topic: "Brand-governed AI content engine Actor Critic loop",
    title: "Brand-Governed AI Content Engine with Deterministic Critic Loop",
    description: "Actor-Critic content compiler with JSON schema enforcement: turns long-form audio into 30+ compliant social posts daily with 100% brand voice alignment.",
    ctaHeading: "Want content generated without off-brand hallucinations?",
    ctaLabel: "Build a brand-governed content engine",
    related: ["youtube-publishing-automation", "instagram-reel-recreation-gemini-minimax", "human-in-the-loop-proposal-swarm"],
  },
  "instagram-reel-recreation-gemini-minimax": {
    topic: "AI video generation n8n workflow",
    title: "Instagram Reel Recreation with Gemini 2.0 & MiniMax AI",
    description: "Production n8n workflow that downloads Instagram Reels, extracts prompts with Gemini 2.0 Flash and generates fresh AI videos with MiniMax on Replicate.",
    ctaHeading: "Want AI video content produced on autopilot?",
    ctaLabel: "Build a similar AI video workflow",
    related: ["instagram-reels-outlier-telegram-n8n", "youtube-publishing-automation", "slack-reporting-pipeline-apify-n8n"],
  },
  "automated-business-kpi-analysis-growth-insights": {
    topic: "automated KPI reporting with n8n",
    title: "Automated KPI Reporting & AI Growth Insights with n8n",
    description: "Automated n8n reporting system that syncs business metrics to Google Sheets, flags revenue anomalies with AI and sends executive summaries on schedule.",
    ctaHeading: "Still building KPI reports by hand?",
    ctaLabel: "Build a similar KPI reporting system",
    related: ["slack-reporting-pipeline-apify-n8n", "instagram-reels-outlier-telegram-n8n", "ai-review-management-system"],
  },
  "automated-offer-letter-response-tracking": {
    topic: "HR document automation with n8n",
    title: "Automated Offer Letter & Signature Tracking via n8n",
    description: "n8n HR document workflow that compiles PDF offer letters from Google Docs, tracks one-click recipient replies and syncs status updates to Google Sheets.",
    ctaHeading: "Sending documents and chasing replies by hand?",
    ctaLabel: "Build a similar document workflow",
    related: ["client-intake-onboarding-automation", "ai-email-labeling-agent-gmail", "lead-reply-sync-gohighlevel-clickup"],
  },
  "hubspot-lead-routing-gpt4-airtable": {
    topic: "HubSpot AI lead routing n8n",
    title: "HubSpot AI Lead Routing with GPT-4 & Airtable via n8n",
    description: "n8n AI lead qualification system that scores incoming HubSpot contacts using GPT-4, matches team availability in Airtable and assigns reps in real time.",
    ctaHeading: "Leads waiting in a queue for someone to assign them?",
    ctaLabel: "Build a similar lead routing system",
    related: ["ai-lead-qualification-real-estate", "lead-reply-sync-gohighlevel-clickup", "ai-lead-meeting-scheduling-zoho-gemini", "client-intake-onboarding-automation"],
  },
  "ai-lead-meeting-scheduling-zoho-gemini": {
    topic: "AI meeting scheduling CRM automation",
    title: "AI Meeting Scheduling: Zoho CRM, Calendar & Gemini",
    description: "Automated n8n scheduling system turning Zoho CRM leads into confirmed calendar bookings with timezone intelligence, Zoom links and Gemini invite copy.",
    ctaHeading: "Losing warm leads to scheduling emails?",
    ctaLabel: "Build a similar scheduling automation",
    related: ["hubspot-lead-routing-gpt4-airtable", "lead-reply-sync-gohighlevel-clickup", "voice-ai-appointment-booking-elevenlabs-calcom", "ai-lead-qualification-real-estate"],
  },
  "voice-ai-appointment-booking-elevenlabs-calcom": {
    topic: "voice AI appointment booking agent",
    title: "Voice AI Booking Agent: ElevenLabs, Cal.com & n8n",
    description: "Production voice AI appointment agent: ElevenLabs calls an n8n webhook to check live Cal.com calendar slots and books verified meetings over the phone.",
    ctaHeading: "Missing bookings from calls you can't answer?",
    ctaLabel: "Build a similar voice booking agent",
    related: ["whatsapp-ai-assistant-google-docs", "ai-lead-meeting-scheduling-zoho-gemini", "ai-customer-support-triage"],
  },
  "linkedin-job-search-automation-openai-telegram": {
    topic: "LinkedIn job search automation n8n",
    title: "LinkedIn Job Automation with OpenAI & Telegram Alerts",
    description: "n8n automation that scrapes LinkedIn openings daily, matches candidate profiles using OpenAI, drafts custom proposals and dispatches alerts to Telegram.",
    ctaHeading: "Ready to automate your job search?",
    ctaLabel: "Build a similar job search automation",
    related: ["ai-email-labeling-agent-gmail", "slack-reporting-pipeline-apify-n8n"],
  },
  "slack-reporting-pipeline-apify-n8n": {
    topic: "automated Slack reporting pipeline",
    title: "Automated Slack Reporting Pipeline with n8n & Apify",
    h1: "Automated Slack Reporting with Apify & n8n",
    description: "Client build: Apify scrapes industry feeds daily, then n8n and Make.com post actionable Slack summaries to the team, saving 10+ hours a week.",
    ctaHeading: "Need automated reporting into Slack or email?",
    ctaLabel: "Build a similar reporting system",
    related: ["instagram-reels-outlier-telegram-n8n", "ai-review-management-system", "automated-business-kpi-analysis-growth-insights"],
  },
  "instagram-reels-outlier-telegram-n8n": {
    topic: "Instagram video analytics n8n automation",
    title: "Instagram Reels Outlier Detection with n8n & Telegram",
    h1: "Instagram Reels Outlier Detection with n8n & Telegram",
    description: "n8n social analytics system monitoring 50+ competitor accounts, scoring video views against account medians and sending viral outlier alerts to Telegram.",
    ctaHeading: "Want social analytics monitored and reported automatically?",
    ctaLabel: "Build a similar analytics automation",
    related: ["slack-reporting-pipeline-apify-n8n", "real-estate-lead-generation-browseract-make", "automated-business-kpi-analysis-growth-insights", "instagram-reel-recreation-gemini-minimax"],
  },
  "ai-lead-qualification-real-estate": {
    topic: "AI lead qualification real estate n8n",
    title: "AI Lead Qualification for Real Estate via n8n",
    h1: "AI Lead Qualification for Real Estate Inquiries with n8n",
    description: "AI lead scoring system that enriches buyer inquiries with AI, scores buying intent from 0–100, routes hot leads to agents and logs records to Airtable.",
    ctaHeading: "Need AI lead qualification for your inquiries?",
    ctaLabel: "Build a similar lead qualification system",
    related: ["lead-reply-sync-gohighlevel-clickup", "client-intake-onboarding-automation", "hubspot-lead-routing-gpt4-airtable", "ai-lead-meeting-scheduling-zoho-gemini"],
  },
  "real-estate-lead-generation-browseract-make": {
    topic: "real estate lead scraping automation",
    title: "Real Estate Property Monitoring & Lead Automation",
    description: "Make.com & BrowserAct web automation tracking real estate listings against custom criteria with instant multi-channel push to Telegram and CRM systems.",
    ctaHeading: "Want new listings or leads captured the moment they appear?",
    ctaLabel: "Build a similar monitoring system",
    related: ["ai-lead-qualification-real-estate", "instagram-reels-outlier-telegram-n8n"],
  },
  "ai-email-labeling-agent-gmail": {
    topic: "AI email categorization agent n8n",
    title: "AI Email Labeling & Inbox Management Agent for Gmail",
    description: "Gmail AI agent built with n8n that reads incoming client inquiries, classifies urgency and applies smart labels automatically to keep the inbox organized.",
    ctaHeading: "Drowning in an inbox that needs sorting?",
    ctaLabel: "Build a similar inbox automation",
    related: ["ai-customer-support-triage", "lead-reply-sync-gohighlevel-clickup", "automated-offer-letter-response-tracking"],
  },
  "ai-customer-support-triage": {
    topic: "AI customer support triage system",
    title: "AI Customer Support Triage & Ticket Routing Pipeline",
    h1: "AI Customer Support Triage with n8n & GPT-4o-mini",
    description: "Multi-channel support triage system that classifies incoming customer tickets with LLMs by urgency and sentiment, notifies Slack and drafts responses.",
    ctaHeading: "Need support tickets triaged and answered faster?",
    ctaLabel: "Build a similar support automation",
    related: ["whatsapp-ai-assistant-google-docs", "ai-email-labeling-agent-gmail", "voice-ai-appointment-booking-elevenlabs-calcom"],
  },
  "whatsapp-ai-assistant-google-docs": {
    topic: "WhatsApp AI chatbot knowledge base",
    title: "WhatsApp AI Assistant with Google Docs Knowledge Base",
    h1: "WhatsApp AI Chatbot with a Google Docs Knowledge Base",
    description: "24/7 WhatsApp AI customer agent built with n8n that grounds conversations in live Google Docs, maintains per-contact memory and escalates complex queries.",
    ctaHeading: "Want an AI assistant answering on WhatsApp?",
    ctaLabel: "Build a similar AI assistant",
    related: ["multi-query-rag-supabase-openai", "ai-customer-support-triage", "voice-ai-appointment-booking-elevenlabs-calcom"],
  },
  "ai-review-management-system": {
    topic: "AI review management and reply automation",
    title: "Automated Google Review Monitoring & AI Reply System",
    description: "n8n reputation management workflow that captures Google Maps reviews, alerts operations on low ratings and auto-generates contextual reply drafts.",
    ctaHeading: "Need reviews monitored and replies drafted for you?",
    ctaLabel: "Build a similar review automation",
    related: ["ai-customer-support-triage", "slack-reporting-pipeline-apify-n8n", "automated-business-kpi-analysis-growth-insights"],
  },
  "client-intake-onboarding-automation": {
    topic: "client onboarding workflow automation",
    title: "Automated Client Intake & Onboarding Pipeline with n8n",
    description: "End-to-end client onboarding automation chaining intake forms, calendar booking, invoice generation and Notion workspace provisioning seamlessly.",
    ctaHeading: "Want intake and onboarding to run itself?",
    ctaLabel: "Build a similar onboarding system",
    related: ["ai-lead-qualification-real-estate", "lead-reply-sync-gohighlevel-clickup", "automated-offer-letter-response-tracking", "hubspot-lead-routing-gpt4-airtable"],
  },
  "youtube-publishing-automation": {
    topic: "YouTube video publishing automation",
    title: "AI YouTube Publishing & SEO Metadata Pipeline",
    description: "Automated content pipeline that ingests raw video files from Google Drive, generates optimized YouTube titles and tags with AI and schedules publishing.",
    ctaHeading: "Publishing content manually every week?",
    ctaLabel: "Build a similar content automation",
    related: ["ai-review-management-system", "slack-reporting-pipeline-apify-n8n", "instagram-reel-recreation-gemini-minimax"],
  },
  "lead-reply-sync-gohighlevel-clickup": {
    topic: "GoHighLevel CRM ClickUp automation",
    title: "GoHighLevel Lead Sync & ClickUp Task Automation",
    description: "Two-way CRM integration linking GoHighLevel and ClickUp: auto-assigns sales follow-ups, syncs reply sentiment and eliminates lead response delays.",
    ctaHeading: "Leads going cold between replies?",
    ctaLabel: "Build a similar follow-up system",
    related: ["ai-lead-qualification-real-estate", "client-intake-onboarding-automation", "automated-offer-letter-response-tracking", "hubspot-lead-routing-gpt4-airtable", "ai-lead-meeting-scheduling-zoho-gemini"],
  },
  "multi-query-rag-supabase-openai": {
    topic: "Supabase pgvector RAG with n8n",
    title: "Supabase pgvector RAG Agent with n8n",
    h1: "Multi-Query RAG on Supabase pgvector with n8n & OpenAI",
    description: "n8n RAG agent on Supabase pgvector and OpenAI: splits questions into 1-5 sub-queries, keeps chunks above 0.4 similarity and answers only from your docs.",
    ctaHeading: "Need an AI system that answers from your own documents?",
    ctaLabel: "Build a similar RAG system",
    related: ["whatsapp-ai-assistant-google-docs", "ai-customer-support-triage"],
  },
};

const seoAliases: Record<string, string> = {
  "human-in-the-loop-proposal-agent": "human-in-the-loop-proposal-swarm",
  "local-mcp-bi-analyst": "privacy-first-sql-mcp-analyst",
  "autonomous-code-reviewer": "autonomous-cicd-code-reviewer",
  "omni-channel-support-swarm": "hierarchical-support-swarm",
};

export const getProjectSeo = (slug: string): ProjectSeo | undefined => {
  const target = seoAliases[slug] || slug;
  return projectSeo[target];
};
