import ragShot from "@/assets/projects/Advanced_Multi-Query_RAG_System_with_Supabase_OpenAI.webp.asset.json";
import leadsProcessorShot from "@/assets/projects/AI_Agent_Leads_Processor.webp.asset.json";
import supportTriageShot from "@/assets/projects/AI_Customer_Support_Triage_System.webp.asset.json";
import realEstateShot from "@/assets/projects/AI_Lead_Qualification_for_Real_Estate_Buyer_Inquiries.webp.asset.json";
import emailLabelingShot from "@/assets/projects/AI-Powered_Email_Labeling_Agent_for_Inbox_Management.webp.asset.json";
import reviewsShot from "@/assets/projects/AI-Powered_Review_Management_System.webp.asset.json";
import youtubeShot from "@/assets/projects/AI-Powered_YouTube_Publishing_Automation.webp.asset.json";
import leadReplyShot from "@/assets/projects/Automated_Lead_Reply_Follow-Up_System.webp.asset.json";

/** Real n8n workflow screenshots, keyed by project slug. */
export const projectImages: Record<string, string> = {
  "multi-query-rag-supabase-openai": ragShot.url,
  "client-intake-onboarding-automation": leadsProcessorShot.url,
  "ai-customer-support-triage": supportTriageShot.url,
  "ai-lead-qualification-real-estate": realEstateShot.url,
  "ai-email-labeling-agent-gmail": emailLabelingShot.url,
  "ai-review-management-system": reviewsShot.url,
  "youtube-publishing-automation": youtubeShot.url,
  "lead-reply-sync-gohighlevel-clickup": leadReplyShot.url,
};

export const getProjectImage = (slug: string): string | undefined => projectImages[slug];
