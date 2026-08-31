/**
 * Per-case-study search intent + conversion metadata.
 *
 * Everything here is derived from the real project content in `projects.ts`.
 * No metrics, clients, dates or technologies are introduced that are not
 * already documented in the project data.
 */
export interface ProjectSeo {
  /** Primary search topic the case study can realistically rank for. */
  topic: string;
  /** Unique <title> body — the site suffix is appended by the page. */
  title: string;
  /** Unique meta description: what was built, topic, key tech, outcome. */
  description: string;
  /** Contextual CTA headline used near the end of the page. */
  ctaHeading: string;
  /** Contextual CTA button label. */
  ctaLabel: string;
  /** Genuinely related case studies (slugs), shown as contextual links. */
  related: string[];
}

export const projectSeo: Record<string, ProjectSeo> = {
  "linkedin-job-search-automation-openai-telegram": {
    topic: "LinkedIn job search automation",
    title: "Automated LinkedIn Job Search with OpenAI & Telegram Alerts",
    description:
      "Case study: an n8n workflow that scrapes LinkedIn jobs daily, matches them against a resume with Gemini or OpenAI, generates tailored cover letters, and delivers matches to Google Sheets and Telegram.",
    ctaHeading: "Ready to automate your job search?",
    ctaLabel: "Build a similar job search automation",
    related: ["ai-email-labeling-agent-gmail", "slack-reporting-pipeline-apify-n8n"],
  },
  "slack-reporting-pipeline-apify-n8n": {
    topic: "automated reporting with n8n",
    title: "Automated Slack Reporting with n8n and Apify",
    description:
      "Case study: an automated reporting workflow built with Apify, Make.com and n8n that scrapes web sources daily and posts a formatted Slack digest, replacing hours of manual reporting.",
    ctaHeading: "Need automated reporting into Slack or email?",
    ctaLabel: "Build a similar reporting system",
    related: ["instagram-reels-outlier-telegram-n8n", "ai-review-management-system"],
  },
  "instagram-reels-outlier-telegram-n8n": {
    topic: "Instagram analytics automation",
    title: "Instagram Reels Outlier Detection & Telegram Reporting",
    description:
      "Case study: an n8n Instagram analytics automation that monitors 50+ business accounts, scores each Reel against its account median, and reports genuine outliers to Telegram.",
    ctaHeading: "Want social analytics monitored and reported automatically?",
    ctaLabel: "Build a similar analytics automation",
    related: ["slack-reporting-pipeline-apify-n8n", "real-estate-lead-generation-browseract-make"],
  },
  "ai-lead-qualification-real-estate": {
    topic: "AI lead qualification automation",
    title: "AI Lead Qualification Automation for Real Estate Inquiries",
    description:
      "Case study: an AI lead qualification automation that enriches web-form inquiries, scores them 0–100, routes qualified buyers to the sales team, and logs every lead to Airtable.",
    ctaHeading: "Need AI lead qualification for your inquiries?",
    ctaLabel: "Build a similar lead qualification system",
    related: ["lead-reply-sync-gohighlevel-clickup", "client-intake-onboarding-automation"],
  },
  "real-estate-lead-generation-browseract-make": {
    topic: "real estate lead generation automation",
    title: "Real Estate Lead Generation & Property Monitoring Automation",
    description:
      "Case study: a marketplace monitoring automation that tracks property listings against custom criteria and pushes every new match to Telegram, email and the CRM in real time.",
    ctaHeading: "Want new listings or leads captured the moment they appear?",
    ctaLabel: "Build a similar monitoring system",
    related: ["ai-lead-qualification-real-estate", "instagram-reels-outlier-telegram-n8n"],
  },
  "ai-email-labeling-agent-gmail": {
    topic: "AI email classification automation",
    title: "AI Email Labeling Agent for Gmail Inbox Management",
    description:
      "Case study: an AI email classification automation that reads every incoming Gmail message and applies the right label — sponsorship, collaboration, business inquiry or other.",
    ctaHeading: "Drowning in an inbox that needs sorting?",
    ctaLabel: "Build a similar inbox automation",
    related: ["ai-customer-support-triage", "lead-reply-sync-gohighlevel-clickup"],
  },
  "ai-customer-support-triage": {
    topic: "AI customer support automation",
    title: "AI Customer Support Triage & Ticket Routing System",
    description:
      "Case study: an AI customer support automation that normalises multi-channel tickets, classifies topic, urgency and sentiment, then routes them to Slack and Sheets with an instant auto-reply.",
    ctaHeading: "Need support tickets triaged and answered faster?",
    ctaLabel: "Build a similar support automation",
    related: ["whatsapp-ai-assistant-google-docs", "ai-email-labeling-agent-gmail"],
  },
  "whatsapp-ai-assistant-google-docs": {
    topic: "WhatsApp AI assistant",
    title: "WhatsApp AI Assistant with a Google Docs Knowledge Base",
    description:
      "Case study: a document-aware WhatsApp AI assistant that answers customers 24/7 from a live Google Doc knowledge base while keeping conversation memory per contact.",
    ctaHeading: "Want an AI assistant answering on WhatsApp?",
    ctaLabel: "Build a similar AI assistant",
    related: ["multi-query-rag-supabase-openai", "ai-customer-support-triage"],
  },
  "ai-review-management-system": {
    topic: "AI review management automation",
    title: "AI Review Management & Response Automation",
    description:
      "Case study: an AI review management automation that collects Google Maps reviews daily, deduplicates them, drafts a reply per review, and routes positive and negative feedback separately.",
    ctaHeading: "Need reviews monitored and replies drafted for you?",
    ctaLabel: "Build a similar review automation",
    related: ["ai-customer-support-triage", "slack-reporting-pipeline-apify-n8n"],
  },
  "client-intake-onboarding-automation": {
    topic: "client intake automation",
    title: "End-to-End Client Intake & Onboarding Automation",
    description:
      "Case study: a client intake and onboarding automation of four connected workflows covering form submission, booking, reminders, payment and a generated Notion onboarding checklist.",
    ctaHeading: "Want intake and onboarding to run itself?",
    ctaLabel: "Build a similar onboarding system",
    related: ["ai-lead-qualification-real-estate", "lead-reply-sync-gohighlevel-clickup"],
  },
  "youtube-publishing-automation": {
    topic: "YouTube publishing automation",
    title: "AI-Powered YouTube Publishing Automation",
    description:
      "Case study: a YouTube publishing automation that reads pending videos from a sheet, pulls files from Drive, generates SEO metadata with AI, uploads in batches and reports back.",
    ctaHeading: "Publishing content manually every week?",
    ctaLabel: "Build a similar content automation",
    related: ["ai-review-management-system", "slack-reporting-pipeline-apify-n8n"],
  },
  "lead-reply-sync-gohighlevel-clickup": {
    topic: "automated lead follow-up",
    title: "Automated Lead Follow-Up System with GoHighLevel & ClickUp",
    description:
      "Case study: an automated lead follow-up workflow that updates GoHighLevel for engaged leads and creates ClickUp tasks for silent ones, with idempotent logic so nothing runs twice.",
    ctaHeading: "Leads going cold between replies?",
    ctaLabel: "Build a similar follow-up system",
    related: ["ai-lead-qualification-real-estate", "client-intake-onboarding-automation"],
  },
  "multi-query-rag-supabase-openai": {
    topic: "RAG system with Supabase and OpenAI",
    title: "Multi-Query RAG System with Supabase and OpenAI",
    description:
      "Case study: a multi-query RAG system on Supabase and OpenAI that decomposes complex questions into sub-queries, filters retrieved chunks by relevance, and reasons before answering.",
    ctaHeading: "Need an AI system that answers from your own documents?",
    ctaLabel: "Build a similar RAG system",
    related: ["whatsapp-ai-assistant-google-docs", "ai-customer-support-triage"],
  },
};

export const getProjectSeo = (slug: string): ProjectSeo | undefined => projectSeo[slug];
