import { useState } from "react";
import { AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BottleneckItem {
  id: string;
  category: string;
  title: string;
  link: string;
  before: string;
  after: string;
}

const services: BottleneckItem[] = [
  {
    id: "01",
    category: "ARCHITECTURE",
    title: "AI Agents & Autonomous Swarms",
    link: "/services/agentic-systems",
    before:
      "Customer questions, support tickets, and content review decisions pile up faster than a lean team can manually triage, causing 24hr response lag.",
    after:
      "Autonomous LLM triage agents and multi-channel bots classify intent, route escalations, and resolve 60%+ of routine inquiries in <30 seconds.",
  },
  {
    id: "02",
    category: "ORCHESTRATION",
    title: "n8n Workflow & Process Pipelines",
    link: "/services/n8n-workflow-automation",
    before:
      "Staff members spend 15–20 hours every week manually shifting CSVs, copy-pasting customer records, and synchronizing siloed cloud software.",
    after:
      "End-to-end event-driven n8n pipelines handle data transformation, API handoffs, and error retries with 100% idempotency and zero manual intervention.",
  },
  {
    id: "03",
    category: "PIPELINE",
    title: "CRM & Lead Qualification Engines",
    link: "/services/lead-qualification-crm-automation",
    before:
      "High-intent inbound leads sit uncontacted for hours in inbox queues, letting potential six-figure deals turn cold before sales reps reach out.",
    after:
      "Automated lead capture, enriched scoring (0–100), instant CRM synchronization, and intelligent auto-booking trigger within 60 seconds of submission.",
  },
  {
    id: "04",
    category: "DATA OPS",
    title: "Data Extraction & Intelligence Ops",
    link: "/services/hybrid-automation",
    before:
      "Competitor benchmarking, market pricing intelligence, and lead scraping are compiled by hand every week with frequent human data entry errors.",
    after:
      "Scheduled headless scraping and structured enrichment pipelines deliver clean, validated market intelligence directly into databases and dashboards.",
  },
];

export default function BottleneckComparison() {
  const [mode, setMode] = useState<"before" | "after">("before");

  return (
    <div className="space-y-6">
      {/* Mode Selector Toggle */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-primary sm:text-xs">
            // INTERACTIVE CAPABILITY COMPARISON
          </p>
          <h3 className="mt-1 font-display text-xl font-bold tracking-tight md:text-2xl">
            Which manual bottleneck is costing your team?
          </h3>
        </div>

        <div className="inline-flex rounded-lg border border-panel-border bg-panel p-1 font-mono text-xs shadow-inner">
          <button
            onClick={() => setMode("before")}
            className={`flex items-center gap-1.5 rounded-md px-3.5 py-1.5 font-semibold transition-all ${
              mode === "before"
                ? "bg-red-500/15 text-red-300 border border-red-500/40 shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <AlertCircle className="h-3.5 w-3.5 text-red-400" />
            Manual Bottleneck
          </button>
          <button
            onClick={() => setMode("after")}
            className={`flex items-center gap-1.5 rounded-md px-3.5 py-1.5 font-semibold transition-all ${
              mode === "after"
                ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
            Engineered Outcome
          </button>
        </div>
      </div>

      {/* Grid of 4 Bottlenecks / Solutions */}
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((item) => {
          const isBefore = mode === "before";
          return (
            <div
              key={item.id}
              className={`group flex flex-col justify-between rounded-xl border p-5 transition-all duration-300 ${
                isBefore
                  ? "border-panel-border/80 bg-panel/30 hover:border-red-500/30"
                  : "border-panel-border/80 bg-panel/30 hover:border-emerald-500/30"
              }`}
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[0.6875rem]">
                  <span className="text-muted-foreground">// {item.id} {item.category}</span>
                  <span
                    className={`rounded px-2 py-0.5 font-semibold uppercase tracking-wider ${
                      isBefore
                        ? "border border-red-500/30 bg-red-500/10 text-red-400"
                        : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    }`}
                  >
                    {isBefore ? "Manual Drag" : "Engineered"}
                  </span>
                </div>

                <h4 className="mt-2.5 font-display text-base font-bold text-foreground">
                  {item.title}
                </h4>

                <div
                  className={`mt-3 rounded-r-lg border-l-2 p-3 font-sans text-xs leading-relaxed text-muted-foreground transition-all duration-300 ${
                    isBefore
                      ? "border-red-500/80 bg-red-950/10"
                      : "border-emerald-500/80 bg-emerald-950/10 text-slate-200"
                  }`}
                >
                  <p>{isBefore ? item.before : item.after}</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-panel-border/60">
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Explore {item.category.toLowerCase()} architecture</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
