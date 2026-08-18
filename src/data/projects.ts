export type ProjectCategory =
  | "AI Agents"
  | "Lead & CRM"
  | "Support"
  | "Reporting"
  | "Scraping"
  | "Content";

export interface ProjectSection {
  heading: string;
  bullets: string[];
}

export interface Project {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  headlineResult: string;
  category: ProjectCategory;
  clientType: string;
  industry: string;
  timeframe: string;
  role: string;
  tools: string[];
  platform: string;
  featured?: boolean;
  clientWork?: boolean;
  rating: string;
  feedback?: string;
  problem: string[];
  requirements: string[];
  architecture: string;
  workflow: string[];
  scale: { label: string; value: string }[];
  logic: string[];
  output: string[];
  results: string[];
  proof: string[];
}

export const projects: Project[] = [
  {
    slug: "slack-reporting-pipeline-apify-n8n",
    name: "Automated Slack Reporting Pipeline with Apify and n8n",
    shortName: "Slack Reporting Pipeline",
    summary:
      "A scheduled scraping-to-Slack digest that replaced 10+ hours a day of manual data collection and formatting.",
    headlineResult: "10+ hrs/week saved",
    category: "Reporting",
    clientType: "Small business / agency",
    industry: "Digital Marketing / Operations",
    timeframe: "Jun 25 – Jul 1, 2026",
    role: "Automation Engineer (sole freelancer)",
    tools: ["Apify", "Make.com", "n8n", "Google Sheets", "Slack", "JavaScript"],
    platform: "n8n · Make.com",
    featured: true,
    clientWork: true,
    rating: "5.0 / 5.0",
    feedback:
      "Everything you need. Professional, responds extremely quickly, and works in a structured and reliable manner. Top-notch! There's really nothing more to say.",
    problem: [
      "The client needed structured data extracted from multiple web sources and delivered daily to an internal Slack channel.",
      "The team was manually collecting and formatting that data, taking 10+ hours each day.",
      "The manual process was error-prone, delayed, and did not scale as data sources grew.",
    ],
    requirements: [
      "A scheduled workflow that scrapes via Apify, processes the data, and posts a formatted Slack message.",
      "Inputs: scheduled data pulls from Apify actors.",
      "Processing: transformation and formatting in Make/n8n.",
      "Trigger: daily cron at 9 AM.",
      "Output: structured Slack message with key metrics and insights.",
    ],
    architecture: "Schedule → Apify data pull → Make/n8n processing → Slack notification",
    workflow: [
      "Cron trigger fires every morning at 9 AM.",
      "Apify actors extract data from the configured web sources.",
      "Data is normalised and mapped inside the automation platform.",
      "Conditional formatting highlights anomalies and off-track metrics.",
      "A templated digest is posted to the client's Slack channel.",
    ],
    scale: [
      { label: "Records per run", value: "~100–500" },
      { label: "Frequency", value: "Daily at 9 AM" },
      { label: "Workflow steps", value: "6–8" },
      { label: "Integrations", value: "3" },
    ],
    logic: [
      "Threshold filters keep only values above a defined percentage.",
      "Data is sorted and grouped before presentation.",
      "Conditional formatting — green when on track, red when behind.",
    ],
    output: [
      "Slack message with headlines, summaries, and key metrics.",
      "Clean, sectioned notification with bullet points for fast scanning.",
    ],
    results: [
      "10+ hours saved per week by eliminating manual reporting.",
      "100% accuracy — no copy-paste errors.",
      "Delivered on time every single day at 9 AM.",
      "Scalable — new data sources plug straight in.",
    ],
    proof: ["Upwork 5-star review", "Live production deployment"],
  },
  {
    slug: "instagram-reels-outlier-telegram-n8n",
    name: "Instagram Reels Outlier Detection & Telegram Reporting",
    shortName: "Reels Outlier Detection",
    summary:
      "Monitors 50+ Instagram business accounts, scores every new Reel against its account median, and pushes only genuine outliers to Telegram.",
    headlineResult: "100% viral detection rate",
    category: "Scraping",
    clientType: "Direct client (referral from a previous client)",
    industry: "Social Media Marketing / Agency Operations",
    timeframe: "July – August 2026 (ongoing)",
    role: "Lead Automation Engineer (sole freelancer)",
    tools: ["n8n", "SocialCrawl API", "Google Sheets", "Telegram Bot", "JavaScript"],
    platform: "n8n",
    featured: true,
    clientWork: true,
    rating: "5.0 / 5.0",
    feedback: "You did amazing work again – exactly as expected. Thanks a lot!",
    problem: [
      "The client needed to monitor 50+ Instagram business accounts and instantly identify high-performing Reels without manual checking.",
      "Manually reviewing every new Reel across all accounts took 5+ hours daily.",
      "Viral content was missed and responses to trending opportunities were delayed.",
      "There was no central system tracking which Reels had already been reviewed or notified.",
    ],
    requirements: [
      "A scheduled automation that scrapes the latest Reels, calculates performance, and notifies only exceptional content.",
      "Inputs: a Google Sheet of Instagram handles with industry categories.",
      "Processing: scrape the 12 latest Reels per account, compute the median views, calculate a performance factor.",
      "Conditions: factor ≥ 3× median and Reel age ≤ 14 days.",
      "Outputs: Telegram notification plus a Google Sheets log.",
    ],
    architecture:
      "Schedule → Google Sheets (accounts) → SocialCrawl API → n8n processing → Telegram notification + Sheets log",
    workflow: [
      "Loop over unprocessed accounts from the accounts sheet.",
      "Scrape the 12 most recent Reels per account via SocialCrawl.",
      "Normalise the data and calculate the median view count.",
      "Filter for outliers at ≥ 3× median within a 14-day window.",
      "Deduplicate against the Reels sheet so nothing is notified twice.",
      "Send a formatted Telegram message, log the Reel, and mark the account processed.",
    ],
    scale: [
      { label: "Accounts monitored", value: "50+ across 5+ industries" },
      { label: "Reels scraped per run", value: "~600 (50 × 12)" },
      { label: "Frequency", value: "Every 2 days at 11 AM" },
      { label: "Workflow steps", value: "18" },
    ],
    logic: [
      "Median window: the 12 most recent Reels per account establish the baseline.",
      "Performance factor: views ÷ median — only ≥ 3.0× qualifies.",
      "Maturity window: only Reels published in the last 14 days are considered.",
      "Deduplication: Reel IDs are stored in a sheet and never re-notified.",
      "Error handling: private accounts and rate limits are skipped without breaking the run.",
      "Batch processing with 4-second delays to respect API rate limits.",
    ],
    output: [
      "Telegram message with industry hashtag, account handle, publication date, formatted views, performance factor, and a direct Reel link.",
      "Google Sheets log with Reel ID, date posted, metrics, and link.",
    ],
    results: [
      "10+ hours saved per week by eliminating manual Reel monitoring.",
      "100% detection rate — no viral Reel missed.",
      "~20 qualified Reels notified per run on average.",
      "Client acts on viral content within hours instead of days.",
      "Scalable — accounts are added or removed via a Google Sheet.",
    ],
    proof: [
      "5-star review (referral from a previous client)",
      "Running in production, smoothly",
      "Both clients paid above contracted terms",
    ],
  },
  {
    slug: "ai-lead-qualification-real-estate",
    name: "AI Lead Qualification for Real Estate Buyer Inquiries",
    shortName: "AI Lead Qualification",
    summary:
      "Web-form inquiries are enriched and scored 0–100 by AI, routed to the sales team when qualified, and logged to Airtable either way.",
    headlineResult: "6+ hrs/week saved · 2× conversion",
    category: "Lead & CRM",
    clientType: "Direct client (real estate business)",
    industry: "Real Estate / Lead Generation",
    timeframe: "June 2026",
    role: "AI Workflow Automation Specialist (sole freelancer)",
    tools: ["n8n", "OpenAI", "Groq", "Gmail", "Airtable", "Webhooks", "JavaScript"],
    platform: "n8n",
    featured: true,
    rating: "5.0 / 5.0",
    feedback: "Great Work!",
    problem: [
      "High volumes of buyer inquiries arrived through web forms with no automated system to qualify or prioritise them.",
      "The sales team manually reviewed every lead, spending hours on low-quality inquiries.",
      "Qualified leads got lost or delayed in the manual process, reducing conversion.",
      "There was no centralised CRM tracking for buyer profiles or follow-up status.",
    ],
    requirements: [
      "Automatically capture buyer inquiry form submissions.",
      "Use AI to extract and score buyer information: budget, location, timeline, property type.",
      "Apply a score threshold to determine whether a lead is qualified.",
      "Email alerts to the sales team for qualified leads.",
      "Store every lead in Airtable for tracking and reporting.",
    ],
    architecture:
      "Web form → n8n webhook → AI enrichment & scoring → conditional routing → Gmail alert (qualified) + Airtable (all leads)",
    workflow: [
      "Webhook trigger captures the form submission.",
      "Data validation checks required fields (name, email, budget, location).",
      "OpenAI extracts structured buyer data and assigns a 0–100 qualification score, with Groq as a fallback provider.",
      "Qualification check: a score ≥ 80 marks the lead as Qualified.",
      "Gmail sends a formatted alert to the sales team for qualified leads.",
      "All leads are logged to Airtable with score, status, and timestamp.",
    ],
    scale: [
      { label: "Leads processed", value: "~100–300 / month" },
      { label: "Frequency", value: "Real-time (event-driven)" },
      { label: "Workflow steps", value: "8–10" },
      { label: "Integrations", value: "4" },
    ],
    logic: [
      "Score is driven by budget alignment, location match, timeline urgency, and property-type relevance.",
      "Qualified threshold: score ≥ 80 / 100.",
      "Fallback logic ensures AI extraction failures never break the workflow — the lead is stored with partial data and the error is logged.",
    ],
    output: [
      "Gmail alert for qualified leads with name, email, budget, location, score, and an Airtable link.",
      "Airtable record for every lead: contact details, budget, location, timeline, AI summary, score, status, timestamp.",
    ],
    results: [
      "6+ hours saved per week by eliminating manual lead review.",
      "95% qualification accuracy, validated against human decisions.",
      "60% faster response — qualified leads contacted within 10 minutes.",
      "Qualified leads convert at 2× the previous rate.",
    ],
    proof: ["Published on Upwork/Freelancer profile", "Live production deployment"],
  },
  {
    slug: "real-estate-lead-generation-browseract-make",
    name: "Real Estate Lead Generation & Property Monitoring",
    shortName: "Property Monitoring System",
    summary:
      "Monitors property marketplaces on custom criteria and fans out every new listing to Telegram, email, and the CRM in real time.",
    headlineResult: "10+ hrs/week saved",
    category: "Scraping",
    clientType: "Direct client (real estate agency / investor)",
    industry: "Real Estate / Lead Generation",
    timeframe: "June 2026",
    role: "Make.com Automation Developer (sole freelancer)",
    tools: ["Make.com", "BrowserAct", "Telegram API", "Gmail", "Outlook", "CRM"],
    platform: "Make.com",
    rating: "4.9 / 5.0",
    feedback: "Great Work!",
    problem: [
      "Real estate professionals spent hours manually searching property websites and tracking new listings.",
      "The repetitive process led to missed opportunities when properties were snapped up quickly.",
      "There was no centralised way to distribute new listings to the team in real time.",
    ],
    requirements: [
      "Monitor property marketplaces based on custom criteria.",
      "Extract title, location, price, image, and listing URL.",
      "Deliver real-time alerts via Telegram and email.",
      "Integrate with the CRM for lead tracking and follow-up.",
    ],
    architecture:
      "Schedule → BrowserAct search → Make.com processing → Iterator (per property) → parallel Telegram + Email + CRM",
    workflow: [
      "BrowserAct searches real estate platforms using filters for location, property type, bedrooms, and budget.",
      "Make.com receives the extracted data and processes it with JSON parsing and routing logic.",
      "An iterator handles each property individually so multiple listings run per execution.",
      "A Telegram bot posts property details to a group or channel.",
      "Gmail/Outlook alerts reach stakeholders by email.",
      "CRM integration pushes each property in for lead tracking and follow-up.",
    ],
    scale: [
      { label: "Listings per run", value: "~10–50" },
      { label: "Frequency", value: "Every 6 hours (configurable)" },
      { label: "Workflow steps", value: "8–10" },
      { label: "Integrations", value: "5" },
    ],
    logic: [
      "Filters are applied before scraping: location, property type, budget, bedrooms.",
      "All listings matching criteria are extracted and distributed — no secondary qualification.",
    ],
    output: [
      "Telegram alert per property with title, location, price, image, and link.",
      "Email notification (summary or per-property, depending on preference).",
      "CRM record stored for lead follow-up.",
    ],
    results: [
      "10+ hours saved per week by eliminating manual property searching.",
      "Real-time alerts — the team sees new listings within minutes of publication.",
      "Missed opportunities eliminated.",
      "Scalable across multiple property websites and locations at once.",
    ],
    proof: ["Published on Upwork/Freelancer profile", "Live production deployment"],
  },
  {
    slug: "ai-email-labeling-agent-gmail",
    name: "AI-Powered Email Labeling Agent for Inbox Management",
    shortName: "AI Email Labeling Agent",
    summary:
      "Every incoming Gmail message is classified by AI and labelled automatically — sponsorship, collaboration, business inquiry, or other.",
    headlineResult: "3+ hrs/day saved",
    category: "AI Agents",
    clientType: "Direct client (small business / agency)",
    industry: "Business Operations / Email Management",
    timeframe: "June 2026",
    role: "Workflow Automation Engineer (sole freelancer)",
    tools: ["n8n", "Gmail API", "OpenAI", "JavaScript", "Webhooks"],
    platform: "n8n",
    rating: "5.0 / 5.0",
    feedback: "Great Work!",
    problem: [
      "The client received high volumes of email across sponsorships, collaborations, business inquiries, and general messages.",
      "Manually reading, sorting, and labelling took 3+ hours daily.",
      "Important emails were delayed or missed, costing opportunities.",
      "No consistent structure for email handling caused chaos across the team.",
    ],
    requirements: [
      "AI-powered classification of every incoming email into predefined labels.",
      "Input: real-time Gmail inbox.",
      "Processing: OpenAI categorisation into Sponsorship, Collaboration, Business Inquiries, or Others.",
      "Output: automatic Gmail label application.",
    ],
    architecture:
      "Gmail trigger → n8n → OpenAI classification → conditional routing → Gmail label applied",
    workflow: [
      "Gmail trigger monitors incoming mail in real time.",
      "Subject, body, sender, and metadata are extracted.",
      "OpenAI analyses intent and assigns one of four categories.",
      "Conditional routing directs the email to the matching branch.",
      "The corresponding Gmail label is applied automatically.",
      "Optional logging writes every classified email to Google Sheets.",
    ],
    scale: [
      { label: "Emails processed", value: "~100–500 / day" },
      { label: "Frequency", value: "Real-time" },
      { label: "Workflow steps", value: "5–7" },
      { label: "Integrations", value: "2" },
    ],
    logic: [
      "Predefined categories, each with a customised classification prompt.",
      "AI classifies on email content, sender, and intent.",
      "An 'Others' fallback catches anything outside the defined labels.",
    ],
    output: [
      "Gmail label applied automatically: Sponsorship, Collaboration, Business Inquiry, or Others.",
      "Optional Slack notification for high-priority categories.",
    ],
    results: [
      "3+ hours saved per day by eliminating manual sorting.",
      "Zero delayed emails — critical messages are never missed.",
      "Improved team focus: each member only sees relevant mail.",
      "Scalable — labels can be customised for any business.",
    ],
    proof: ["Published on Upwork/Freelancer profile", "Live production deployment"],
  },
  {
    slug: "ai-customer-support-triage",
    name: "AI Customer Support Triage System",
    shortName: "AI Support Triage",
    summary:
      "Multi-channel tickets are normalised, classified for topic, urgency and sentiment, then fanned out to Slack, Sheets, and an instant customer auto-reply.",
    headlineResult: "20+ hrs/week saved · 90% faster replies",
    category: "Support",
    clientType: "Direct client (SaaS / e-commerce)",
    industry: "Customer Support / Operations",
    timeframe: "June 2026",
    role: "AI Automation Engineer & Intelligent Workflow Developer (sole freelancer)",
    tools: ["n8n", "OpenAI GPT-4o-mini", "Gmail API", "Slack API", "Google Sheets", "JavaScript"],
    platform: "n8n",
    featured: true,
    clientWork: true,
    rating: "5.0 / 5.0",
    feedback: "Great Work!",
    problem: [
      "The support team was drowning in tickets arriving from email and website forms.",
      "Customers waited hours for acknowledgement and urgent issues got buried.",
      "Classification was inconsistent with no standardised prioritisation.",
      "No auto-acknowledgement or ticket ID system existed, hurting customer experience.",
      "The client needed instant triage to scale support without hiring more agents.",
    ],
    requirements: [
      "Automated triage that processes every incoming ticket in seconds.",
      "Inputs: Gmail support inbox plus website forms.",
      "Processing: AI classification of topic, urgency, sentiment, summary, and team routing.",
      "Outputs: priority-tagged Slack alerts, Google Sheets logging, and a Gmail auto-reply.",
    ],
    architecture:
      "Multi-channel intake → normalisation → AI intelligence layer → parallel Slack + Sheets + Gmail auto-reply",
    workflow: [
      "Gmail trigger watches the support inbox while a form trigger captures website submissions.",
      "A JavaScript code node unifies both sources into one clean ticket schema.",
      "GPT-4o-mini returns structured JSON: topic, urgency, sentiment, summary, suggested routing, and a professional reply draft.",
      "A parse-and-merge node reliably extracts the AI output, fixes formatting, and recombines it with the original ticket.",
      "Slack receives a formatted, priority-tagged alert in the support channel.",
      "Google Sheets logs the complete ticket for reporting.",
      "Gmail immediately sends a personalised acknowledgement with ticket ID and expected response time.",
    ],
    scale: [
      { label: "Tickets processed", value: "~50–200 / day (scales to thousands)" },
      { label: "Frequency", value: "Real-time" },
      { label: "Workflow steps", value: "8–10" },
      { label: "Integrations", value: "5" },
    ],
    logic: [
      "Topics: billing, technical, shipping, general.",
      "Urgency levels: critical, high, medium, low.",
      "Sentiment: angry, frustrated, neutral, positive.",
      "Routing rules by urgency and topic — critical tickets trigger a Slack mention.",
      "Auto-reply templates tailored to each scenario.",
    ],
    output: [
      "Slack alert with urgency tag, ticket ID, topic, sender, sentiment, AI summary, and suggested routing.",
      "Google Sheets record with ticket ID, source, contact, body, AI classification, status, and timestamp.",
      "Gmail auto-reply to the customer with ticket ID and expected response window.",
    ],
    results: [
      "20+ hours saved per week on manual triage and reply drafting.",
      "90% faster response time — instant acknowledgement instead of hours.",
      "100% classification consistency, no more misrouted tickets.",
      "Higher customer satisfaction from instant replies and faster resolution.",
      "Scales to thousands of tickets without extra headcount.",
    ],
    proof: ["Published on Upwork/Freelancer profile", "Live production deployment"],
  },
  {
    slug: "whatsapp-ai-assistant-google-docs",
    name: "Smart WhatsApp AI Assistant with a Google Docs Knowledge Base",
    shortName: "WhatsApp AI Assistant",
    summary:
      "A document-aware WhatsApp assistant that reads the company's live Google Doc, remembers the conversation, and answers customers 24/7.",
    headlineResult: "24/7 support · 50% fewer tickets",
    category: "AI Agents",
    clientType: "Direct client (Kapso / Meta-verified WhatsApp provider)",
    industry: "Customer Support / AI Automation",
    timeframe: "June 2026",
    role: "AI Automation Engineer & WhatsApp AI Specialist (sole freelancer)",
    tools: ["n8n", "Kapso WhatsApp", "Google Docs", "Google Gemini", "Google Sheets", "JavaScript"],
    platform: "n8n",
    featured: true,
    rating: "5.0 / 5.0",
    feedback: "Great Work!",
    problem: [
      "Businesses receive the same repetitive WhatsApp questions about policies, schedules, services, and rules.",
      "Replying manually is slow and produces inconsistent answers.",
      "There was no way to offer 24/7 support without human agents.",
      "Knowledge was scattered across documents, so agents struggled to find accurate answers quickly.",
    ],
    requirements: [
      "Read the latest company information from a Google Doc in real time.",
      "Combine document content with the user query and the current date.",
      "Use AI with conversational memory to generate accurate, natural replies.",
      "Log every conversation to Google Sheets.",
      "Respect WhatsApp's 24-hour messaging window.",
    ],
    architecture:
      "WhatsApp → Kapso → n8n webhook → Google Doc reader → Gemini → Sheets logging → WhatsApp reply",
    workflow: [
      "Kapso forwards the inbound WhatsApp message to n8n.",
      "The Google Doc reader fetches the latest policies, FAQs, and service information in real time.",
      "Prompt construction combines document content, today's date, the customer query, and chat history.",
      "Gemini generates a natural, grounded reply.",
      "A cleanup step formats the response professionally.",
      "The exchange is logged to Google Sheets.",
      "Kapso sends the reply back inside the 24-hour messaging window.",
    ],
    scale: [
      { label: "Messages processed", value: "~50–500 / day" },
      { label: "Frequency", value: "Real-time" },
      { label: "Workflow steps", value: "7–9" },
      { label: "Integrations", value: "4" },
    ],
    logic: [
      "The Google Doc is the single source of truth — the client updates it, the assistant follows instantly.",
      "Conversational memory holds context across messages within the 24-hour window.",
      "Date awareness lets the AI reason about opening hours and holidays.",
      "Prompted for a friendly, professional tone.",
      "Fallback: if the AI fails, the error is logged and a polite 'please contact support' message is sent.",
    ],
    output: [
      "Natural WhatsApp reply grounded in the company knowledge base.",
      "Google Sheets log with customer name, phone, query, AI response, timestamp, and status.",
    ],
    results: [
      "24/7 automated support with no after-hours agents needed.",
      "50% reduction in support tickets — FAQs handled automatically.",
      "70% faster response time.",
      "Consistent answers across every conversation.",
      "Knowledge base updated by editing one Google Doc.",
    ],
    proof: ["Published on Upwork/Freelancer profile", "Live production deployment"],
  },
  {
    slug: "ai-review-management-system",
    name: "AI-Powered Review Management System",
    shortName: "AI Review Management",
    summary:
      "Scrapes Google Maps reviews daily, deduplicates them, drafts an AI reply per review, and routes positive and negative feedback to different Slack channels.",
    headlineResult: "90% faster review responses",
    category: "AI Agents",
    clientType: "Direct client (small business / agency)",
    industry: "Reputation Management / Customer Feedback",
    timeframe: "June 2026",
    role: "Automation Engineer & AI Workflow Architect (sole freelancer)",
    tools: ["n8n", "Apify", "OpenRouter", "Slack API", "Google Sheets", "JavaScript"],
    platform: "n8n",
    rating: "5.0 / 5.0",
    feedback: "Great Work!",
    problem: [
      "Monitoring new Google Maps reviews consistently was a manual chore.",
      "Negative feedback was not identified quickly enough.",
      "Drafting professional responses at scale was not feasible by hand.",
      "There was no centralised review database.",
    ],
    requirements: [
      "Monitor Google Maps reviews on a schedule.",
      "Detect genuinely new customer feedback.",
      "Generate AI summaries and response drafts.",
      "Alert internal teams via Slack.",
      "Store structured review data in Google Sheets.",
    ],
    architecture:
      "Schedule → Apify scraper → n8n → duplicate detection → AI analysis → Slack alerts → Sheets storage",
    workflow: [
      "Apify's Google Maps Reviews scraper retrieves reviewer name, rating, text, URL, publication date, and reviewer ID.",
      "Google Sheets acts as a lightweight datastore of processed review IDs; only new entries continue.",
      "Each new review is sent to an LLM via OpenRouter, which returns a management-friendly summary and a personalised response draft.",
      "Custom JavaScript merges the original review, the summary, and the draft into a structured record.",
      "Everything is stored centrally in Google Sheets.",
      "Reviews are routed by rating: under 4 stars to customer support, 4 stars and above to the wins channel.",
    ],
    scale: [
      { label: "Reviews per run", value: "~10–100" },
      { label: "Frequency", value: "Every 24 hours (configurable)" },
      { label: "Workflow steps", value: "10–12" },
      { label: "Integrations", value: "4" },
    ],
    logic: [
      "Duplicate prevention compares incoming review IDs against existing sheet records.",
      "Sentiment routing: ≥ 4 stars is positive, < 4 stars is flagged for immediate action.",
      "Positive prompt: write a thankful response encouraging future visits.",
      "Negative prompt: write a professional apology acknowledging concerns and showing willingness to improve.",
      "Fallback: if the AI fails, a default draft is sent and the error is logged.",
    ],
    output: [
      "Slack alerts (positive and negative variants) with reviewer, rating, AI summary, response draft, and link.",
      "Google Sheets record with review ID, reviewer, rating, text, AI summary, AI draft, URL, timestamp, and status.",
    ],
    results: [
      "100% automated review monitoring — no manual checking.",
      "90% reduction in response preparation time.",
      "Zero negative reviews missed.",
      "Improved customer sentiment from faster responses.",
      "Centralised review database in one place.",
    ],
    proof: ["Published on Upwork/Freelancer profile", "Live production deployment"],
  },
  {
    slug: "client-intake-onboarding-automation",
    name: "End-to-End Client Intake & Onboarding Automation",
    shortName: "Client Intake Automation",
    summary:
      "Four connected sub-workflows carry a lead from first form submission through booking, reminders, payment, and a generated Notion onboarding checklist.",
    headlineResult: "10+ hrs/week saved · 80% fewer no-shows",
    category: "Lead & CRM",
    clientType: "Direct client (agency)",
    industry: "Agency Operations / Client Onboarding",
    timeframe: "June 2026",
    role: "AI Workflow Automation Engineer (sole freelancer)",
    tools: [
      "n8n",
      "Airtable",
      "Notion",
      "Google Calendar",
      "Gmail",
      "Slack",
      "Clearbit",
      "Twilio",
      "Stripe",
    ],
    platform: "n8n",
    featured: true,
    rating: "5.0 / 5.0",
    feedback: "Great Work!",
    problem: [
      "The agency spent hours manually moving leads from forms to CRM to calendars to project tools to onboarding.",
      "Manual handoffs caused delays, lost data, and missed follow-ups.",
      "No centralised system tracked the client lifecycle from lead capture to paid onboarding.",
      "The team was drowning in admin instead of focusing on delivery.",
    ],
    requirements: [
      "One complete automation covering the entire client lifecycle with no manual intervention.",
      "Inputs: web form submissions, Calendly bookings, Stripe payments.",
      "Processing: lead enrichment, CRM updates, calendar sync, project creation, email automation.",
      "Outputs: Airtable records, Notion project pages, calendar events, emails, Slack notifications, onboarding checklists.",
    ],
    architecture:
      "Multi-trigger (forms, Calendly, Stripe) → n8n orchestration → parallel Airtable + Notion + Calendar + Gmail + Slack + Twilio",
    workflow: [
      "Lead intake: webhook captures the form, validates email and name, enriches via Clearbit (optional), creates Airtable and Notion records, sends an auto-reply with a booking link, and notifies Slack.",
      "Booking automation: a Calendly webhook updates Airtable to 'Booked', syncs Notion, creates a Google Calendar event, emails a pre-call survey, and posts the calendar link to Slack.",
      "Daily reminders: a 9 AM cron checks for calls in the next 24 hours, sends reminder emails, and marks them sent.",
      "Payment and onboarding: a Stripe webhook marks the lead 'Paid', builds a 9+ task Notion onboarding checklist, sends the welcome email and optional WhatsApp, updates financial tracking, and notifies Slack.",
    ],
    scale: [
      { label: "Leads processed", value: "~50–200 / month" },
      { label: "Frequency", value: "Real-time (event-driven)" },
      { label: "Workflow steps", value: "18+ across 4 sub-workflows" },
      { label: "Integrations", value: "8" },
    ],
    logic: [
      "Lead validation requires email and name before anything downstream runs.",
      "Clearbit enrichment is optional — the workflow continues if it fails.",
      "Status evolves through New → Booked → Paid → Onboarded.",
      "Reminders only fire for calls within the next 24 hours, preventing spam.",
      "Payment confirmation automatically generates a 9+ task onboarding checklist.",
      "Retry logic with 3 attempts and validation at every step.",
    ],
    output: [
      "Airtable lead records with status, enrichment data, and financial tracking.",
      "Notion project pages and onboarding checklists.",
      "Google Calendar events synced from Calendly.",
      "Gmail auto-replies, pre-call surveys, and welcome emails.",
      "Slack notifications at every stage, plus optional Twilio WhatsApp messages.",
    ],
    results: [
      "10+ hours saved per week on manual admin.",
      "Zero data entry errors — 100% accurate sync.",
      "90% faster onboarding: form to project in minutes, not days.",
      "80% fewer no-shows thanks to 24-hour reminders.",
      "Scalable — new lead sources and tools plug in easily.",
    ],
    proof: ["Published on Upwork/Freelancer profile", "Live production deployment"],
  },
  {
    slug: "youtube-publishing-automation",
    name: "AI-Powered YouTube Publishing Automation",
    shortName: "YouTube Publishing",
    summary:
      "Reads pending videos from a sheet, pulls the file from Drive, writes SEO metadata with AI, uploads to YouTube, and reports back — in batches.",
    headlineResult: "10+ hrs/week saved",
    category: "Content",
    clientType: "Direct client (content creator / agency)",
    industry: "Content Creation / Video Marketing",
    timeframe: "June 2026",
    role: "AI Workflow Automation Engineer (sole freelancer)",
    tools: ["n8n", "OpenAI", "Google Drive", "Google Sheets", "YouTube API", "Gmail", "JavaScript"],
    platform: "n8n",
    rating: "5.0 / 5.0",
    feedback: "Great Work!",
    problem: [
      "Creators and agencies spend hours manually publishing videos to YouTube.",
      "Every upload means writing titles, descriptions, hashtags, and tags by hand.",
      "Publishing status tracking and team notification were manual too.",
      "SEO optimisation was inconsistent from video to video.",
    ],
    requirements: [
      "Monitor a Google Sheet for pending video records.",
      "Download video files from Google Drive.",
      "Generate SEO-optimised metadata with AI.",
      "Upload directly to YouTube.",
      "Update tracking records and email a confirmation.",
      "Support batch processing.",
    ],
    architecture:
      "Schedule → Sheets (pending videos) → Drive (download) → OpenAI (metadata) → YouTube upload → Sheets status → Gmail notification",
    workflow: [
      "The Google Sheets trigger reads pending video records.",
      "Google Drive returns the video file from the specified path.",
      "OpenAI generates an SEO title, an engaging description with keywords and CTAs, 5–10 hashtags, and discovery tags.",
      "The YouTube API uploads the video with the generated metadata.",
      "The sheet is updated with video ID, status, published URL, and timestamp.",
      "Gmail sends a confirmation email with the published video URL.",
    ],
    scale: [
      { label: "Videos per run", value: "~5–20 (batch)" },
      { label: "Frequency", value: "Every 6 hours (configurable)" },
      { label: "Workflow steps", value: "8–10" },
      { label: "Integrations", value: "5" },
    ],
    logic: [
      "Prompted for 5 SEO title variations, a 200-word description with CTAs and timestamps, 10 hashtags, and 15 tags.",
      "Each video carries a status: Pending, Uploading, Published, or Failed.",
      "Failed uploads retry up to 3 times and log the error to the sheet.",
    ],
    output: [
      "Google Sheets update with video ID, upload status, published URL, and timestamp.",
      "Gmail notification with the AI-generated title and YouTube link.",
    ],
    results: [
      "10+ hours saved per week by eliminating manual publishing.",
      "SEO consistency — every video ships with optimised metadata.",
      "Zero human error: no typos or missing tags.",
      "Handles hundreds of videos without extra effort.",
      "Videos go live within minutes of being scheduled.",
    ],
    proof: ["Published on Upwork/Freelancer profile", "Live production deployment"],
  },
  {
    slug: "lead-reply-sync-gohighlevel-clickup",
    name: "Automated Lead Reply & Follow-Up System",
    shortName: "Lead Sync (GHL + ClickUp)",
    summary:
      "A dual-path, idempotent workflow that updates GoHighLevel for engaged leads and creates ClickUp follow-up tasks for silent ones — never twice.",
    headlineResult: "90% less manual follow-up",
    category: "Lead & CRM",
    clientType: "Direct client (marketing agency)",
    industry: "Lead Management / CRM Automation",
    timeframe: "June 2026",
    role: "Workflow Automation Engineer (sole freelancer)",
    tools: ["n8n", "Google Sheets", "GoHighLevel", "ClickUp", "JavaScript", "Webhooks"],
    platform: "n8n",
    rating: "5.0 / 5.0",
    feedback: "Great Work!",
    problem: [
      "Lead responses were missed or delayed across GoHighLevel and spreadsheets.",
      "CRM updates in GoHighLevel were manual.",
      "Follow-up tracking in ClickUp was repetitive.",
      "Duplicate automation executions meant leads were processed multiple times.",
      "There was no centralised visibility of the lead lifecycle.",
    ],
    requirements: [
      "Detect whether a lead has replied.",
      "Route into two optimised paths: CRM update for engaged leads, task creation for non-responsive ones.",
      "Prevent duplicate processing with a state-based locking mechanism.",
      "Give real-time lead lifecycle visibility in Google Sheets.",
    ],
    architecture:
      "Google Sheets trigger → n8n → condition (replied?) → GHL update or ClickUp task → Sheets status update",
    workflow: [
      "The Google Sheets trigger detects new leads and status changes in real time.",
      "An IF condition checks whether the lead replied and whether it has already been processed.",
      "Replied leads sync to GoHighLevel with updated status.",
      "Non-replied leads generate a ClickUp follow-up task assigned with a due date.",
      "Status syncs back to Google Sheets and the lead is marked Processed.",
    ],
    scale: [
      { label: "Leads processed", value: "~100–500 / day" },
      { label: "Frequency", value: "Real-time" },
      { label: "Workflow steps", value: "6–8" },
      { label: "Integrations", value: "3" },
    ],
    logic: [
      "State-based locking: each lead carries a Processed flag preventing duplicate execution.",
      "Routing: replied = GoHighLevel update, not replied = ClickUp follow-up task.",
      "Idempotency guarantees each lead is processed exactly once, even if multiple triggers fire.",
      "Errors in GHL or ClickUp are logged and retried up to 3 times.",
    ],
    output: [
      "Google Sheets update with lead status, processed flag, and timestamp.",
      "GoHighLevel lead status set to Engaged or Follow-Up Required.",
      "ClickUp follow-up task with assignee, due date, and lead details.",
    ],
    results: [
      "90% reduction in manual follow-up operations.",
      "Zero duplicate ClickUp tasks — no spam.",
      "Redundant CRM updates eliminated.",
      "Faster lead response handling cycle.",
      "Real-time lifecycle visibility in Google Sheets.",
    ],
    proof: ["Published on Upwork/Freelancer profile", "Live production deployment"],
  },
  {
    slug: "multi-query-rag-supabase-openai",
    name: "Advanced Multi-Query RAG System with Supabase & OpenAI",
    shortName: "Multi-Query RAG System",
    summary:
      "Decomposes complex questions into targeted sub-queries, filters retrieved chunks by relevance, and adds a dedicated reasoning step before answering.",
    headlineResult: "90% better answer quality · 60% fewer hallucinations",
    category: "AI Agents",
    clientType: "Direct client (education / knowledge base business)",
    industry: "AI / Knowledge Management",
    timeframe: "June 2026",
    role: "AI Automation Engineer & Workflow Developer (sole freelancer)",
    tools: ["n8n", "Supabase Vector Store", "OpenAI GPT-5-mini", "NVIDIA Embeddings", "JavaScript"],
    platform: "n8n",
    featured: true,
    rating: "5.0 / 5.0",
    feedback: "Great Work!",
    problem: [
      "Basic RAG implementations struggle with complex, multi-part questions.",
      "Retrieved context is often irrelevant or low quality.",
      "Poor filtering leads to hallucinations.",
      "Architecture becomes hard to maintain as the system scales.",
    ],
    requirements: [
      "Decompose complex user questions into 1–5 targeted sub-queries.",
      "Retrieve relevant chunks from a Supabase vector database using NVIDIA embeddings.",
      "Filter out results below a 0.4 similarity score.",
      "Add a dedicated 'Think' reasoning step to synthesise information.",
      "Deliver accurate, well-structured answers grounded in the knowledge base.",
      "Keep a clean, scalable architecture with sub-workflows decoupled from the main agent.",
    ],
    architecture:
      "User query → AI agent decomposition → multi-query retrieval → Supabase vector store → relevance filter → 'Think' reasoning → final answer",
    workflow: [
      "The system receives a complex question.",
      "A decomposer agent (GPT-5-mini with memory) breaks it into 1–5 targeted sub-queries.",
      "Each sub-query retrieves relevant chunks from the Supabase vector store.",
      "Relevance filtering keeps only chunks scoring above 0.4.",
      "All surviving chunks are aggregated into a single context.",
      "A dedicated 'Think' reasoning step synthesises the aggregated context.",
      "The final answer is generated, grounded strictly in the knowledge base.",
    ],
    scale: [
      { label: "Queries processed", value: "~100–500 / day" },
      { label: "Frequency", value: "Real-time" },
      { label: "Workflow steps", value: "10–12" },
      { label: "Integrations", value: "2" },
    ],
    logic: [
      "Multi-query decomposition: complex questions become 1–5 sub-queries for more targeted retrieval.",
      "Relevance threshold: only chunks above 0.4 similarity are retained.",
      "'Think' reasoning synthesises retrieved information before generation.",
      "Conversational memory maintains context across queries.",
      "Fallback: with no relevant chunks, the system says it doesn't have enough information rather than guessing.",
    ],
    output: [
      "Accurate, well-structured answer grounded in the knowledge base.",
      "Optional source references from the retrieved chunks for transparency.",
    ],
    results: [
      "90% improvement in answer quality versus basic RAG, validated by the client.",
      "60% reduction in hallucinations.",
      "Faster, more accurate responses through targeted sub-queries.",
      "Scales to knowledge bases with millions of vectors.",
      "Reusable template adaptable to courses, company docs, support KBs, and research tools.",
    ],
    proof: ["Published on Upwork/Freelancer profile", "Live production deployment"],
  },
];

export const projectCategories: ProjectCategory[] = [
  "AI Agents",
  "Lead & CRM",
  "Support",
  "Reporting",
  "Scraping",
  "Content",
];

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
export const clientProjects = projects.filter((p) => p.clientWork);
export const demoProjects = projects.filter((p) => !p.clientWork);
