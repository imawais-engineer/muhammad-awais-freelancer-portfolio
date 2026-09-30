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
  "automated-business-kpi-analysis-growth-insights": {
    topic: "automated KPI reporting",
    title: "Automated Business KPI Analysis & AI Growth Insights with n8n",
    description: "Case study: an n8n workflow that pulls business metrics on a schedule, normalises them into Google Sheets, flags period-over-period anomalies and writes an AI growth summary.",
    ctaHeading: "Still building KPI reports by hand?",
    ctaLabel: "Build a similar KPI reporting system",
    related: ["slack-reporting-pipeline-apify-n8n", "instagram-reels-outlier-telegram-n8n", "ai-review-management-system"],
  },
  "automated-offer-letter-response-tracking": {
    topic: "HR document automation",
    title: "Automated Offer Letter Generation & Response Tracking with n8n",
    description: "Case study: an n8n HR automation that generates offer letters from Google Docs templates, emails PDFs with Accept/Decline buttons and tracks every candidate response in Google Sheets.",
    ctaHeading: "Sending documents and chasing replies by hand?",
    ctaLabel: "Build a similar document workflow",
    related: ["client-intake-onboarding-automation", "ai-email-labeling-agent-gmail", "lead-reply-sync-gohighlevel-clickup"],
  },
  "hubspot-lead-routing-gpt4-airtable": {
    topic: "AI lead routing automation",
    title: "Dynamic HubSpot Lead Routing with GPT-4, Airtable & n8n",
    description: "Case study: an n8n AI lead routing workflow where a GPT-4 agent scores every new HubSpot contact against an Airtable team database and assigns the right rep in seconds.",
    ctaHeading: "Leads waiting in a queue for someone to assign them?",
    ctaLabel: "Build a similar lead routing system",
    related: ["ai-lead-qualification-real-estate", "lead-reply-sync-gohighlevel-clickup", "ai-lead-meeting-scheduling-zoho-gemini", "client-intake-onboarding-automation"],
  },
  "ai-lead-meeting-scheduling-zoho-gemini": {
    topic: "AI meeting scheduling automation",
    title: "AI Lead Meeting Scheduling with Zoho CRM, Google Calendar & Gemini",
    description: "Case study: an n8n workflow that turns new Zoho CRM leads into conflict-free meetings with timezone detection, Zoom links, Gemini-written invites and CRM logging.",
    ctaHeading: "Losing warm leads to scheduling emails?",
    ctaLabel: "Build a similar scheduling automation",
    related: ["hubspot-lead-routing-gpt4-airtable", "lead-reply-sync-gohighlevel-clickup", "voice-ai-appointment-booking-elevenlabs-calcom", "ai-lead-qualification-real-estate"],
  },
  "voice-ai-appointment-booking-elevenlabs-calcom": {
    topic: "voice AI booking automation",
    title: "Voice AI Appointment Booking with ElevenLabs, Cal.com & n8n",
    description: "Case study: a voice AI booking system where an ElevenLabs agent calls an n8n webhook to check live Cal.com availability and book appointments before the call ends.",
    ctaHeading: "Missing bookings from calls you can't answer?",
    ctaLabel: "Build a similar voice booking agent",
    related: ["whatsapp-ai-assistant-google-docs", "ai-lead-meeting-scheduling-zoho-gemini", "ai-customer-support-triage"],
  },
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
    related: ["instagram-reels-outlier-telegram-n8n", "ai-review-management-system", "automated-business-kpi-analysis-growth-insights"],
  },
  "instagram-reels-outlier-telegram-n8n": {
    topic: "Instagram analytics automation",
    title: "Instagram Reels Outlier Detection & Telegram Reporting",
    description:
      "Case study: an n8n Instagram analytics automation that monitors 50+ business accounts, scores each Reel against its account median, and reports genuine outliers to Telegram.",
    ctaHeading: "Want social analytics monitored and reported automatically?",
    ctaLabel: "Build a similar analytics automation",
    related: ["slack-reporting-pipeline-apify-n8n", "real-estate-lead-generation-browseract-make", "automated-business-kpi-analysis-growth-insights"],
  },
  "ai-lead-qualification-real-estate": {
    topic: "AI lead qualification automation",
    title: "AI Lead Qualification Automation for Real Estate Inquiries",
    description:
      "Case study: an AI lead qualification automation that enriches web-form inquiries, scores them 0–100, routes qualified buyers to the sales team, and logs every lead to Airtable.",
    ctaHeading: "Need AI lead qualification for your inquiries?",
    ctaLabel: "Build a similar lead qualification system",
    related: ["lead-reply-sync-gohighlevel-clickup", "client-intake-onboarding-automation", "hubspot-lead-routing-gpt4-airtable", "ai-lead-meeting-scheduling-zoho-gemini"],
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
    related: ["ai-customer-support-triage", "lead-reply-sync-gohighlevel-clickup", "automated-offer-letter-response-tracking"],
  },
  "ai-customer-support-triage": {
    topic: "AI customer support automation",
    title: "AI Customer Support Triage & Ticket Routing System",
    description:
      "Case study: an AI customer support automation that normalises multi-channel tickets, classifies topic, urgency and sentiment, then routes them to Slack and Sheets with an instant auto-reply.",
    ctaHeading: "Need support tickets triaged and answered faster?",
    ctaLabel: "Build a similar support automation",
    related: ["whatsapp-ai-assistant-google-docs", "ai-email-labeling-agent-gmail", "voice-ai-appointment-booking-elevenlabs-calcom"],
  },
  "whatsapp-ai-assistant-google-docs": {
    topic: "WhatsApp AI assistant",
    title: "WhatsApp AI Assistant with a Google Docs Knowledge Base",
    description:
      "Case study: a document-aware WhatsApp AI assistant that answers customers 24/7 from a live Google Doc knowledge base while keeping conversation memory per contact.",
    ctaHeading: "Want an AI assistant answering on WhatsApp?",
    ctaLabel: "Build a similar AI assistant",
    related: ["multi-query-rag-supabase-openai", "ai-customer-support-triage", "voice-ai-appointment-booking-elevenlabs-calcom"],
  },
  "ai-review-management-system": {
    topic: "AI review management automation",
    title: "AI Review Management & Response Automation",
    description:
      "Case study: an AI review management automation that collects Google Maps reviews daily, deduplicates them, drafts a reply per review, and routes positive and negative feedback separately.",
    ctaHeading: "Need reviews monitored and replies drafted for you?",
    ctaLabel: "Build a similar review automation",
    related: ["ai-customer-support-triage", "slack-reporting-pipeline-apify-n8n", "automated-business-kpi-analysis-growth-insights"],
  },
  "client-intake-onboarding-automation": {
    topic: "client intake automation",
    title: "End-to-End Client Intake & Onboarding Automation",
    description:
      "Case study: a client intake and onboarding automation of four connected workflows covering form submission, booking, reminders, payment and a generated Notion onboarding checklist.",
    ctaHeading: "Want intake and onboarding to run itself?",
    ctaLabel: "Build a similar onboarding system",
    related: ["ai-lead-qualification-real-estate", "lead-reply-sync-gohighlevel-clickup", "automated-offer-letter-response-tracking", "hubspot-lead-routing-gpt4-airtable"],
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
    related: ["ai-lead-qualification-real-estate", "client-intake-onboarding-automation", "automated-offer-letter-response-tracking", "hubspot-lead-routing-gpt4-airtable", "ai-lead-meeting-scheduling-zoho-gemini"],
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
