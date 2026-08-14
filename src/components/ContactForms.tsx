import { forwardRef, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  advancedQuerySchema,
  basicQuerySchema,
  frequencyOptions,
  submitToN8n,
  yesNoUnsureOptions,
  type AdvancedQueryValues,
  type BasicQueryValues,
} from "@/lib/contactForms";
import { site } from "@/data/site";

const Sent = forwardRef<HTMLDivElement, { onReset: () => void }>(({ onReset }, ref) => (
  <div
    ref={ref}
    className="node-card scroll-mt-28 p-8 text-center outline-none"
    role="status"
    aria-live="polite"
    tabIndex={-1}
  >
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
      <CheckCircle className="h-6 w-6 text-primary" aria-hidden="true" />
    </div>
    <h3 className="mt-4 text-lg font-semibold">Message received</h3>
    <p className="mt-2 text-sm text-muted-foreground">
      It's in my queue — I usually reply within one business day.
    </p>
    <Button variant="secondary" className="mt-5" onClick={onReset}>
      Send another
    </Button>
  </div>
));
Sent.displayName = "Sent";

const BasicForm = ({ onSent }: { onSent: () => void }) => {
  const form = useForm<BasicQueryValues>({
    resolver: zodResolver(basicQuerySchema),
    defaultValues: { full_name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: BasicQueryValues) => {
    try {
      await submitToN8n(values, "Portfolio - Basic Query");
      form.reset();
      onSent();
    } catch {
      toast({
        title: "Couldn't send that",
        description: `Please email me directly at ${site.email}.`,
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name *</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="jane@company.com" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Automating our lead follow-up" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <Textarea rows={6} placeholder="What would you like to automate?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          Send message
        </Button>
      </form>
    </Form>
  );
};

const AdvancedForm = ({ onSent }: { onSent: () => void }) => {
  const form = useForm<AdvancedQueryValues>({
    resolver: zodResolver(advancedQuerySchema),
    defaultValues: {
      full_name: "",
      email: "",
      company_name: "",
      manual_process_description: "",
      time_spent_hours: "",
      frequency: "",
      current_tools: "",
      api_access: "",
      data_input_source: "",
      desired_output: "",
      volume_per_run: "",
      needs_ai_decision: "",
      ai_use_case: "",
    },
  });

  const onSubmit = async (values: AdvancedQueryValues) => {
    try {
      await submitToN8n(values, "Portfolio - Advanced Query");
      form.reset();
      onSent();
    } catch {
      toast({
        title: "Couldn't send that",
        description: `Please email me directly at ${site.email}.`,
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name *</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="jane@company.com" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="company_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Acme GmbH" autoComplete="organization" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="manual_process_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>The manual process *</FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="Describe it the way you'd explain it to a new hire — every step, who does it, and where it breaks."
                  {...field}
                />
              </FormControl>
              <FormDescription>The more detail, the more accurate my scope.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="time_spent_hours"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hours per week spent on it</FormLabel>
                <FormControl>
                  <Input type="number" min={0} step="0.5" placeholder="10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="frequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How often it runs</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || undefined}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {frequencyOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="current_tools"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tools you already use</FormLabel>
                <FormControl>
                  <Input placeholder="HubSpot, Google Sheets, Slack" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="api_access"
            render={({ field }) => (
              <FormItem>
                <FormLabel>API access to those tools?</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || undefined}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {yesNoUnsureOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="data_input_source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Where the data comes from</FormLabel>
                <FormControl>
                  <Input placeholder="Web forms, inbox, CSV export" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desired_output"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Desired output</FormLabel>
                <FormControl>
                  <Input placeholder="Slack alert + CRM record" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="volume_per_run"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Records per run</FormLabel>
                <FormControl>
                  <Input type="number" min={0} step="1" placeholder="250" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="needs_ai_decision"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Does it need AI decisions?</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || undefined}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {yesNoUnsureOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="ai_use_case"
          render={({ field }) => (
            <FormItem>
              <FormLabel>AI use case</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Classification, extraction, summarisation, reply drafting…"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          Send project brief
        </Button>
      </form>
    </Form>
  );
};

const ContactForms = () => {
  const [sent, setSent] = useState<"basic" | "advanced" | null>(null);
  const sentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sent && sentRef.current) {
      sentRef.current.focus({ preventScroll: true });
      sentRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [sent]);

  return (
    <Tabs defaultValue="basic" className="w-full">
      <TabsList>
        <TabsTrigger value="basic">Quick message</TabsTrigger>
        <TabsTrigger value="advanced">Detailed project brief</TabsTrigger>
      </TabsList>

      <TabsContent value="basic" className="mt-6">
        {sent === "basic" ? (
          <Sent ref={sentRef} onReset={() => setSent(null)} />
        ) : (
          <div className="node-card p-6">
            <BasicForm onSent={() => setSent("basic")} />
          </div>
        )}
      </TabsContent>

      <TabsContent value="advanced" className="mt-6">
        {sent === "advanced" ? (
          <Sent ref={sentRef} onReset={() => setSent(null)} />
        ) : (
          <div className="node-card p-6">
            <AdvancedForm onSent={() => setSent("advanced")} />
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default ContactForms;
