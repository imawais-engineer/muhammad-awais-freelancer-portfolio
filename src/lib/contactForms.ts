import { z } from "zod";

/**
 * n8n webhook endpoint. Set VITE_N8N_WEBHOOK_URL in your environment
 * (production webhook URL from the n8n Webhook node).
 */
export const N8N_WEBHOOK_URL = (import.meta.env.VITE_N8N_WEBHOOK_URL as string | undefined) ?? "";

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

/** Shared system/hidden fields sent with every submission. */
const systemFields = (source: FormSource) => ({
  id: crypto.randomUUID(),
  timestamp: new Date().toISOString(),
  source,
  status: "Initiated" as const,
  assigned_to: "Self",
  internal_notes: null,
});

/** Empty strings become null so the n8n / Sheets side stays clean. */
const normalise = (values: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(values).map(([key, value]) => [
      key,
      value === "" || value === undefined ? null : value,
    ]),
  );

export async function submitToN8n(values: Record<string, unknown>, source: FormSource) {
  if (!N8N_WEBHOOK_URL) {
    throw new Error("Webhook is not configured yet.");
  }

  const payload = { ...systemFields(source), ...normalise(values) };

  const response = await fetch(N8N_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Submission failed (${response.status})`);
  }

  return payload;
}
