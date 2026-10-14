import { useState, useEffect } from "react";
import { Play, CheckCircle2, Loader2, Sparkles } from "lucide-react";

interface WorkflowStep {
  title: string;
  desc: string;
  badge: string;
  type: "trigger" | "filter" | "ai" | "output";
  tag: string;
}

interface WorkflowScenario {
  name: string;
  steps: WorkflowStep[];
}

const scenarios: WorkflowScenario[] = [
  {
    name: "Slack Reporting",
    steps: [
      {
        tag: "TRG",
        type: "trigger",
        title: "Cron Schedule + Apify Scraper",
        desc: "Pulls daily multi-source marketing & ops metrics",
        badge: "200 OK · 1.2s",
      },
      {
        tag: "FLT",
        type: "filter",
        title: "Data Normalisation & Deduplication",
        desc: "Idempotent state check + schema validation",
        badge: "0 Duplicates",
      },
      {
        tag: "AI",
        type: "ai",
        title: "Executive Digest Formatter (Gemini/OpenAI)",
        desc: "Structures raw metrics into actionable daily summary",
        badge: "Processed",
      },
      {
        tag: "OUT",
        type: "output",
        title: "Slack Channel + Google Sheets Log",
        desc: "Replaces 10+ hrs/week of manual copy-paste reporting",
        badge: "10+ hrs/wk saved",
      },
    ],
  },
  {
    name: "Reels Outlier",
    steps: [
      {
        tag: "TRG",
        type: "trigger",
        title: "Google Sheet Handle Input (50+ Accounts)",
        desc: "Reads target Instagram business handles & categories",
        badge: "50+ Accounts",
      },
      {
        tag: "API",
        type: "filter",
        title: "SocialCrawl API (12 Latest Reels/Account)",
        desc: "Computes baseline median views within 14-day window",
        badge: "4s Rate Delay",
      },
      {
        tag: "AI",
        type: "ai",
        title: "Outlier Filter (Views ÷ Median ≥ 3.0×)",
        desc: "Deduplicates against notified Reel ID sheet",
        badge: "100% Detection",
      },
      {
        tag: "OUT",
        type: "output",
        title: "Instant Telegram Bot Alert + Audit Log",
        desc: "Pushes viral outliers in hours instead of days",
        badge: "~20 Reels/run",
      },
    ],
  },
  {
    name: "Support Triage",
    steps: [
      {
        tag: "TRG",
        type: "trigger",
        title: "Multi-Channel Webhook (Gmail / Web / Slack)",
        desc: "Ingests incoming customer support tickets live",
        badge: "Real-Time",
      },
      {
        tag: "AI",
        type: "ai",
        title: "OpenAI GPT-4o-mini Triage Agent",
        desc: "Classifies topic, urgency score, and customer sentiment",
        badge: "90% Faster",
      },
      {
        tag: "FLT",
        type: "filter",
        title: "Conditional Router & Guardrail Check",
        desc: "Routes urgent escalations vs standard resolutions",
        badge: "Idempotent",
      },
      {
        tag: "OUT",
        type: "output",
        title: "Slack Escalation + Sheets + Instant Auto-Reply",
        desc: "Cuts manual support triage by 20+ hours/week",
        badge: "20+ hrs/wk saved",
      },
    ],
  },
];

export default function N8nSimulator() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);

  const scenario = scenarios[selectedIdx];

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCompleted(false);
    setActiveStep(0);

    const stepInterval = 320;
    scenario.steps.forEach((_, idx) => {
      setTimeout(() => {
        setActiveStep(idx);
        if (idx === scenario.steps.length - 1) {
          setTimeout(() => {
            setIsRunning(false);
            setCompleted(true);
          }, stepInterval);
        }
      }, idx * stepInterval);
    });
  };

  useEffect(() => {
    setActiveStep(null);
    setCompleted(false);
    setIsRunning(false);
  }, [selectedIdx]);

  const getTagColor = (type: WorkflowStep["type"]) => {
    switch (type) {
      case "trigger":
        return "bg-[#ff6d5a]/20 text-[#ff6d5a] border-[#ff6d5a]/40";
      case "ai":
        return "bg-blue-500/20 text-blue-400 border-blue-500/40";
      case "filter":
        return "bg-amber-500/20 text-amber-400 border-amber-500/40";
      case "output":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/40";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-panel-border bg-[#090b11] p-5 shadow-2xl backdrop-blur">
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#ff6d5a]/10 blur-3xl" />

      {/* Simulator Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-panel-border pb-3">
        <div className="flex items-center gap-2 font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-[#ff6d5a]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>n8n Production Execution Engine</span>
        </div>

        <div className="flex items-center gap-1.5">
          {scenarios.map((sc, idx) => (
            <button
              key={sc.name}
              onClick={() => setSelectedIdx(idx)}
              className={`rounded px-2.5 py-1 font-mono text-[0.6875rem] transition-all ${
                selectedIdx === idx
                  ? "border border-[#ff6d5a]/60 bg-[#ff6d5a]/15 text-white font-semibold shadow-sm"
                  : "border border-panel-border bg-panel/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              {sc.name}
            </button>
          ))}
        </div>
      </div>

      {/* Workflow Canvas Nodes */}
      <div className="my-4 space-y-2.5">
        {scenario.steps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <div
              key={step.title}
              className={`relative flex items-center justify-between rounded-lg border p-3 transition-all duration-200 ${
                isActive
                  ? "border-emerald-500/70 bg-emerald-950/20 shadow-[0_0_16px_rgba(16,185,129,0.2)] translate-x-1"
                  : "border-panel-border/80 bg-panel/50 hover:border-panel-border"
              }`}
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg transition-colors ${
                  isActive ? "bg-emerald-500" : "bg-transparent"
                }`}
              />

              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded border font-mono text-[0.6875rem] font-bold ${getTagColor(
                    step.type
                  )}`}
                >
                  {step.tag}
                </span>
                <div>
                  <p className="font-sans text-xs font-semibold text-foreground">
                    {step.title}
                  </p>
                  <p className="font-mono text-[0.6875rem] text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>

              <span
                className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[0.6875rem] ${
                  step.type === "output"
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-medium"
                    : "border-panel-border bg-background/50 text-muted-foreground"
                }`}
              >
                {step.badge}
              </span>
            </div>
          );
        })}
      </div>

      {/* Simulator Bottom Bar */}
      <div className="flex items-center justify-between border-t border-panel-border pt-3 font-mono text-[0.6875rem]">
        <div className="flex items-center gap-2">
          {isRunning ? (
            <span className="flex items-center gap-1.5 text-amber-400">
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Executing branch test...
            </span>
          ) : completed ? (
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              All branches verified (0 errors)
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
              Production Active (Idempotent)
            </span>
          )}
        </div>

        <button
          onClick={runSimulation}
          disabled={isRunning}
          className="inline-flex items-center gap-1.5 rounded bg-emerald-500 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-emerald-950 transition-all hover:bg-emerald-400 hover:shadow-[0_0_16px_rgba(16,185,129,0.35)] disabled:opacity-50"
        >
          <Play className="h-3 w-3 fill-current" />
          {isRunning ? "Running..." : "Run Pipeline"}
        </button>
      </div>
    </div>
  );
}
