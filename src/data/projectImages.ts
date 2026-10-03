import ragShot from "@/assets/projects/Advanced_Multi-Query_RAG_System_with_Supabase_OpenAI.webp.asset.json";
import supportTriageShot from "@/assets/projects/AI_Customer_Support_Triage_System.webp.asset.json";
import realEstateQualShot from "@/assets/projects/AI_Lead_Qualification_for_Real_Estate_Buyer_Inquiries.webp.asset.json";
import emailLabelingShot from "@/assets/projects/AI-Powered_Email_Labeling_Agent_for_Inbox_Management.webp.asset.json";
import reviewsShot from "@/assets/projects/AI-Powered_Review_Management_System.webp.asset.json";
import youtubeShot from "@/assets/projects/AI-Powered_YouTube_Publishing_Automation.webp.asset.json";
import leadReplyShot from "@/assets/projects/Automated_Lead_Reply_Follow-Up_System.webp.asset.json";
import slackReportingShot from "@/assets/projects/Automated_Slack_Reporting_Pipeline_with_Apify_and_n8n.webp.asset.json";
import clientIntakeShot from "@/assets/projects/End-to-End_Client_Intake_Onboarding_Automation.webp.asset.json";
import instagramOutlierShot from "@/assets/projects/Instagram_Reels_Outlier_Detection_Telegram_Reporting.webp.asset.json";
import linkedinJobSearchShot from "@/assets/projects/LinkedIn_Job_Search_Automation_with_OpenAI_and_Telegram_Alerts.webp.asset.json";
import realEstateLeadGenShot from "@/assets/projects/Real_Estate_Lead_Generation_Property_Monitoring.webp.asset.json";
import whatsappShot from "@/assets/projects/Smart_WhatsApp_AI_Assistant_with_a_Google_Docs_Knowledge_Base.webp.asset.json";
import newShot0 from "@/assets/projects/Automated-Business-KPI-Analysis---AI-Powered-Growth-Insights.webp.asset.json";
import newShot1 from "@/assets/projects/Automated-Offer-Letter---Response-Tracking-System.webp.asset.json";
import newShot2 from "@/assets/projects/Dynamic-HubSpot-Lead-Routing-with-GPT-4---Airtable-Sales-Team-Distribution.webp.asset.json";
import newShot3 from "@/assets/projects/Lead-Meeting-Scheduling-with-Zoho-CRM--Google-Calendar---Gemini.webp.asset.json";
import newShot4 from "@/assets/projects/Voice-Based-Appointment-Booking-System-with-ElevenLabs-AI---Cal-com.webp.asset.json";
import reelRecreationShot from "@/assets/projects/Recreate-Instagram-Reels-Gemini-MiniMax.webp.asset.json";

/** Real n8n / Make workflow screenshots, keyed by project slug. */
export const projectImages: Record<string, string> = {
  "multi-query-rag-supabase-openai": ragShot.url,
  "ai-customer-support-triage": supportTriageShot.url,
  "ai-lead-qualification-real-estate": realEstateQualShot.url,
  "ai-email-labeling-agent-gmail": emailLabelingShot.url,
  "ai-review-management-system": reviewsShot.url,
  "youtube-publishing-automation": youtubeShot.url,
  "lead-reply-sync-gohighlevel-clickup": leadReplyShot.url,
  "slack-reporting-pipeline-apify-n8n": slackReportingShot.url,
  "client-intake-onboarding-automation": clientIntakeShot.url,
  "instagram-reels-outlier-telegram-n8n": instagramOutlierShot.url,
  "linkedin-job-search-automation-openai-telegram": linkedinJobSearchShot.url,
  "real-estate-lead-generation-browseract-make": realEstateLeadGenShot.url,
  "whatsapp-ai-assistant-google-docs": whatsappShot.url,
  "automated-business-kpi-analysis-growth-insights": newShot0.url,
  "automated-offer-letter-response-tracking": newShot1.url,
  "hubspot-lead-routing-gpt4-airtable": newShot2.url,
  "ai-lead-meeting-scheduling-zoho-gemini": newShot3.url,
  "voice-ai-appointment-booking-elevenlabs-calcom": newShot4.url,
  "instagram-reel-recreation-gemini-minimax": reelRecreationShot.url,
};

export const getProjectImage = (slug: string): string | undefined => projectImages[slug];
