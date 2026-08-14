import { z } from "zod";

/**
 * n8n Form Trigger endpoints (production URLs).
 * Override with VITE_N8N_BASIC_FORM_URL / VITE_N8N_ADVANCED_FORM_URL.
 */
export const N8N_BASIC_FORM_URL =
  (import.meta.env.VITE_N8N_BASIC_FORM_URL as string | undefined) ??
  "https://n8nio.imawais.engineer/form/basic_query_form";

export const N8N_ADVANCED_FORM_URL =
  (import.meta.env.VITE_N8N_ADVANCED_FORM_URL as string | undefined) ??
  "https://n8nio.imawais.engineer/form/advance_query_form";


export const basicQuerySchema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell me a little more (10+ characters)").max(2000),
});

export const frequencyOptions = [
  "Real-time",
  "Hourly",
  "Daily",
  "Weekly",
  "Monthly",
  "One-time",
] as const;

export const yesNoUnsureOptions = ["Yes", "No", "Not Sure"] as const;

const optionalText = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));
const optionalNumber = z
  .union([z.coerce.number().min(0).max(1_000_000), z.literal("")])
  .optional();

export const advancedQuerySchema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  company_name: optionalText(120),
  manual_process_description: z
    .string()
    .trim()
    .min(20, "Describe the process in a couple of sentences")
    .max(4000),
  time_spent_hours: optionalNumber,
  frequency: z.enum(frequencyOptions).optional().or(z.literal("")),
  current_tools: optionalText(300),
  api_access: z.enum(yesNoUnsureOptions).optional().or(z.literal("")),
  data_input_source: optionalText(300),
  desired_output: optionalText(300),
  volume_per_run: optionalNumber,
  needs_ai_decision: z.enum(yesNoUnsureOptions).optional().or(z.literal("")),
  ai_use_case: optionalText(2000),
});

export type BasicQueryValues = z.infer<typeof basicQuerySchema>;
export type AdvancedQueryValues = z.infer<typeof advancedQuerySchema>;

export type FormSource = "Portfolio - Basic Query" | "Portfolio - Advanced Query";

/** Field key -> exact n8n Form Trigger field label. Only these are sent. */
const basicLabels: Record<keyof BasicQueryValues, string> = {
  full_name: "Full name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const advancedLabels: Record<keyof AdvancedQueryValues, string> = {
  full_name: "Full name",
  email: "Email",
  company_name: "Company",
  manual_process_description: "The manual process",
  time_spent_hours: "Hours per week spent on it",
  frequency: "How often it runs",
  current_tools: "Tools you already use",
  api_access: "API access to those tools?",
  data_input_source: "Where the data comes from",
  desired_output: "Desired output",
  volume_per_run: "Records per run",
  needs_ai_decision: "Does it need AI decisions?",
  ai_use_case: "AI use case",
};

export async function submitToN8n(values: Record<string, unknown>, source: FormSource) {
  const isBasic = source === "Portfolio - Basic Query";
  const url = isBasic ? N8N_BASIC_FORM_URL : N8N_ADVANCED_FORM_URL;
  const labels: Record<string, string> = isBasic ? basicLabels : advancedLabels;

  const body = new FormData();
  Object.entries(values).forEach(([key, value]) => {
    const label = labels[key];
    if (!label) return; // never send anything the n8n form doesn't define
    if (value === "" || value === undefined || value === null) return;
    body.append(label, String(value));
  });

  const response = await fetch(url, {
    method: "POST",
    body,
  });

  if (!response.ok) {
    throw new Error(`Submission failed (${response.status})`);
  }

  return Object.fromEntries(body.entries());
}

