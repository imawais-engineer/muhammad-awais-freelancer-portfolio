export type ProjectCategory =
  | "Agentic AI"
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
  domainCategory?: string;
  clientType: string;
  clientProfile?: string;
  industry: string;
  timeframe: string;
  role: string;
  tools: string[];
  coreStack?: string[];
  platform: string;
  architecturalPattern?: string;
  deployment?: string;
  asciiDiagram?: string;
  engineeringFlow?: { title: string; detail: string }[];
  failureHandling?: string[];
  securityGovernance?: string[];
  fullStackIntegration?: { title: string; detail: string }[];
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
  /** Engineering takeaways: design decisions and why they were made. */
  lessons?: string[];
  proof: string[];
}

export const projects: Project[] = [
  {
    slug: "human-in-the-loop-proposal-swarm",
    name: "Autonomous Proposal Swarm with Human-in-the-Loop Governance",
    shortName: "Proposal Swarm (HITL)",
    summary:
      "Stateful DAG multi-agent system that ingests raw audio discovery calls, extracts technical scope, estimates cost against Postgres rate cards, and renders client-ready PDF proposals with human approval breakpoints.",
    headlineResult: "5 hrs → 3 min drafting · 100% human oversight",
    category: "Agentic AI",
    domainCategory: "Enterprise Agentic Workflows",
    clientType: "B2B Professional Services & Technical Agencies",
    clientProfile: "B2B Professional Services & Technical Agencies",
    industry: "Operations & Sales AI",
    timeframe: "Production Agentic Build 2026",
    role: "Lead Agentic AI Systems Engineer & Full-Stack Architect",
    tools: ["LangGraph", "FastAPI", "Next.js 15", "PostgreSQL", "Claude 3.5 Sonnet", "WeasyPrint", "Docker", "Supabase"],
    coreStack: ["LangGraph", "FastAPI", "Next.js 15", "PostgreSQL", "Claude 3.5 Sonnet", "WeasyPrint"],
    platform: "LangGraph · FastAPI · Next.js 15",
    architecturalPattern: "Stateful Directed Acyclic Graph (DAG) with Interrupt Breakpoints",
    deployment: "Docker, AWS ECS, Supabase (pgvector + State Store)",
    featured: true,
    clientWork: false,
    rating: "Production Enterprise Ready",
    asciiDiagram: `[Raw Audio/Transcript]
          │
          ▼
┌──────────────────┐
│  Ingest & Parse  │
└─────────┬────────┘
          ▼
┌──────────────────┐
│ Scope Extractor  │
└─────────┬────────┘
          ▼
┌──────────────────┐
│ Cost Estimator   │
└─────────┬────────┘
          ▼
┌──────────────────┐
│ Proposal Drafter │
└─────────┬────────┘
          ▼
┌──────────────────────────────┐
│  INTERRUPT: Human Approval   │ <─── Next.js Review UI (Edit / Reject / Approve)
└──────────────┬───────────────┘
               │ (Approved)
               ▼
┌──────────────────┐
│  PDF Generation  │ ──► [Client Dispatch]
└──────────────────┘`,
    problem: [
      "Sales agencies spend 5+ hours manually extracting discovery call notes to draft custom proposals, leading to acute pipeline bottlenecks.",
      "Standard automations and off-the-shelf LLM wrappers fail at creative deliverables because linear pipelines cannot handle ambiguity or hallucinate unfeasible commitments.",
      "Lack of strict data governance risked sending unverified pricing, incorrect timelines, or mismatched tech stacks to high-value enterprise prospects.",
    ],
    requirements: [
      "Model sales scoping as a stateful graph where each node updates an immutable, strongly-typed state object (ProposalState via Pydantic).",
      "Ingest raw call transcripts, run speaker-diarization cleanup to isolate client pain points from casual dialogue.",
      "Extract explicit technical requirements, implicit constraints, timeline benchmarks, and tech stack prerequisites into standardized JSON payloads.",
      "Cross-reference scope against an internal rate-card database in PostgreSQL, assigning baseline hour estimates and risk multipliers.",
      "Trigger an interrupt() before dispatch, freezing execution into a PostgreSQL checkpointer until a human manager approves or edits via a Next.js 15 dashboard.",
    ],
    architecture:
      "Raw Audio/Transcript → Ingest & Parse (FastAPI) → Scope Extractor (Claude 3.5 Sonnet) → Cost Estimator (PostgreSQL Rate Cards) → Proposal Drafter → LangGraph Interrupt (State Checkpoint) → Next.js 15 SSE Review Dashboard → WeasyPrint PDF Pipeline → Client Dispatch",
    workflow: [
      "Ingest & Parse Node: Accepts unformatted call transcripts, running speaker-diarization cleanup to isolate client pain points from casual dialogue.",
      "Scope Extractor Node: Leverages Claude 3.5 Sonnet with structured outputs to extract explicit technical requirements, implicit constraints, and timeline benchmarks.",
      "Cost & Timeline Estimator Node: Cross-references extracted requirements against a client-specific rate-card database in PostgreSQL, assigning baseline hour estimates and risk multipliers.",
      "Proposal Drafter Node: Synthesizes scope, timeline, and company case studies into an executive-ready Markdown document.",
      "Human-in-the-Loop Interrupt: LangGraph triggers an interrupt() before dispatch. Execution state freezes and persists to a PostgreSQL checkpointer.",
      "Next.js Review UI: The human reviewer inspects a side-by-side diff: raw transcript on the left, editable Rich Text Editor on the right with Approve/Regenerate triggers.",
      "PDF Generation & Dispatch: Upon approval, the graph resumes, compiles styled PDF assets via WeasyPrint, and queues client delivery.",
    ],
    engineeringFlow: [
      {
        title: "Ingest & Parse Node",
        detail:
          "Accepts unformatted call transcripts, running speaker-diarization cleanup to isolate client pain points from casual dialogue.",
      },
      {
        title: "Scope Extractor Node",
        detail:
          "Leverages Claude 3.5 Sonnet with structured outputs to extract explicit technical requirements, implicit constraints, timeline benchmarks, and tech stack prerequisites into a standardized JSON payload.",
      },
      {
        title: "Cost & Timeline Estimator Node",
        detail:
          "Cross-references extracted requirements against a client-specific rate-card database in PostgreSQL, assigning baseline hour estimates and risk multipliers.",
      },
      {
        title: "Proposal Drafter Node",
        detail:
          "Synthesizes the scope, timeline, and company case studies into an executive-ready Markdown document.",
      },
      {
        title: "Human-in-the-Loop Interrupt (checkpoint)",
        detail:
          "LangGraph triggers an interrupt() before executing the dispatch step. The execution state freezes and persists to a PostgreSQL checkpointer.",
      },
    ],
    failureHandling: [
      "Hallucination Prevention: The Cost Estimator is strictly bounded to the internal rate-card table via SQL functions; it cannot invent arbitrary pricing tiers.",
      "Timeout & Recovery: If the human reviewer takes 48 hours to inspect the proposal, the state remains serializable in PostgreSQL without memory leaks or dropped webhooks.",
      "Revision Loops: If the reviewer clicks 'Reject with Edits' in the UI, LangGraph routes back to the Proposal Drafter node with human feedback injected into the graph state, triggering an iterative patch rather than a full pipeline restart.",
    ],
    fullStackIntegration: [
      {
        title: "FastAPI Backend",
        detail:
          "Exposes endpoints for initiating graph execution, polling checkpoint states, and posting review decisions (/api/proposals/{id}/resume).",
      },
      {
        title: "Next.js 15 Real-Time Dashboard",
        detail:
          "Leverages Server-Sent Events (SSE) to render agent node execution progress in real time. The review screen provides a side-by-side diff: raw transcript extracts on the left, an editable Rich Text Editor on the right, and persistent 'Approve', 'Regenerate Node', or 'Reject' action triggers.",
      },
    ],
    scale: [
      { label: "Drafting speed", value: "5 hrs → 3 mins" },
      { label: "Human oversight", value: "100% verified" },
      { label: "Graph architecture", value: "Stateful LangGraph DAG" },
      { label: "State store", value: "Durable PostgreSQL Checkpointer" },
    ],
    logic: [
      "Interrupt-before compiler step ensures zero unvetted outputs reach clients.",
      "Pydantic schema validation enforces scope boundaries and rate card adherence.",
      "Iterative graph rollback patches only rejected sub-nodes.",
      "Cryptographically signed audit logs trace every human modification.",
    ],
    output: [
      "Executive-ready proposal PDF rendered via WeasyPrint.",
      "Next.js interactive review dashboard with real-time SSE progress streaming.",
      "Structured deal metadata exported to CRM pipelines.",
    ],
    results: [
      "Drafting time collapsed from 5+ hours to under 3 minutes.",
      "100% human-verified accuracy with zero hallucinated pricing or deadlines.",
      "Sales close cycles compressed by 48 hours via instant turnaround.",
      "Unified pricing governance across all client proposals.",
    ],
    proof: ["LangGraph Stateful DAG Engine", "Next.js 15 SSE Review Interface", "Dockerized Microservice Deployment"],
  },
  {
    slug: "privacy-first-sql-mcp-analyst",
    name: "Local BI Data Analyst via Custom Model Context Protocol (MCP)",
    shortName: "Privacy SQL MCP Analyst",
    summary:
      "Custom Python Model Context Protocol (MCP) server acting as an isolation layer between LLM orchestrators and production PostgreSQL, executing autonomous self-correcting ReAct loops with zero PII exposure.",
    headlineResult: "Zero data leakage · Autonomous query healing",
    category: "Agentic AI",
    domainCategory: "Data Engineering & Context Protocols",
    clientType: "SaaS Companies, Private Equity Portfolios, Healthcare Systems",
    clientProfile: "SaaS Companies, Private Equity Portfolios, Healthcare Systems",
    industry: "Data Engineering & Context Protocols",
    timeframe: "Production Agentic Build 2026",
    role: "Agentic AI Engineer & Protocol Specialist",
    tools: ["Python 3.12", "FastMCP SDK", "PostgreSQL", "React", "Recharts", "GPT-4o", "sqlglot", "Docker"],
    coreStack: ["Python 3.12", "FastMCP SDK", "PostgreSQL", "React", "Recharts", "GPT-4o"],
    platform: "FastMCP · Python 3.12 · PostgreSQL · React",
    architecturalPattern: "ReAct (Reason + Act) Loop with Zero-Leakage Protocol Isolation",
    deployment: "Self-Hosted On-Premise Binary / Docker Local Network",
    featured: true,
    clientWork: false,
    rating: "Enterprise Grade Security",
    asciiDiagram: `[User Natural Query] ──► [LLM Orchestrator (ReAct)]
                                  │
                         JSON-RPC 2.0 (stdio/SSE)
                                  ▼
                    ┌───────────────────────────┐
                    │  Custom Python MCP Server │
                    ├───────────────────────────┤
                    │ • Read-Only DB Connection │
                    │ • Dynamic Schema Lister   │
                    │ • Sandboxed SQL Executor  │
                    └─────────────┬─────────────┘
                                  ▼
                         [PostgreSQL Engine]
                                  │
                    ┌─────────────┴─────────────┐
                    │ (Success)       (Error)   │
                    ▼                           ▼
            [Structured Data]          [Traceback Feedback]
                    │                           │
                    ▼                           └──► [Self-Correction Loop]
            [Recharts Visual]`,
    problem: [
      "Commercial LLMs cannot be safely granted direct raw credentials to production databases due to data privacy regulations and security boundaries.",
      "First-generation text-to-SQL tools crash on complex joins, hallucinate nonexistent column names, and fail silently on schema dialects.",
      "Non-technical founders and executives wait days for junior BI analysts to run basic ad-hoc cohort and churn queries.",
    ],
    requirements: [
      "Deploy a custom Python Model Context Protocol (MCP) Server acting as an isolation barrier communicating over stdio or SSE via JSON-RPC 2.0.",
      "Expose strict primitive tools: get_database_schema, validate_query (via sqlglot AST parsing), and execute_query (read-only with 5s timeout).",
      "Implement an autonomous ReAct loop that intercepts PostgreSQL tracebacks, analyzes errors, and repairs queries in context (capped at 3 iterations).",
      "Guarantee zero row-level PII or raw user records leave the client VPC.",
      "Dynamically map returned analytical payloads into interactive Recharts visualizations (bar, line, pie) and CSV exports.",
    ],
    architecture:
      "User Natural Query → LLM Orchestrator (ReAct) → JSON-RPC 2.0 (stdio/SSE) → Custom Python MCP Server (Dynamic Schema Lister, AST sqlglot Validator, Sandboxed Executor) → PostgreSQL Engine → [Success: Recharts Visual] / [Error: Traceback Feedback → Self-Correction Loop]",
    workflow: [
      "Protocol Initialization: The MCP server communicates over standard input/output (stdio) or Server-Sent Events (SSE) using the JSON-RPC 2.0 specification, exposing get_database_schema, validate_query, and execute_query.",
      "ReAct Execution Cycle: The LLM inspects the natural question, invokes get_database_schema, reasons over foreign key relationships, drafts ANSI-SQL, and invokes execute_query.",
      "AST Validation: sqlglot parses the abstract syntax tree to verify the statement is strictly an analytical SELECT before touching the database engine.",
      "Sandboxed Execution: Runs against a read-only PostgreSQL replica under a dedicated role with SET TRANSACTION READ ONLY and 5-second execution timeout.",
      "Autonomous Self-Correction: If the database engine returns an error, the ReAct loop catches the raw engine traceback, injects it back into context, and self-corrects the query syntax (capped at 3 iterative attempts).",
      "Deterministic UI Mapping: The agent outputs structured data and visualization hints, automatically rendering the appropriate Recharts component in the React frontend.",
    ],
    engineeringFlow: [
      {
        title: "Protocol Initialization",
        detail:
          "Communicates over stdio or SSE via JSON-RPC 2.0, exposing get_database_schema (table names and column data types without values), validate_query (sqlglot AST inspection), and execute_query (read-only replica execution with 5-second timeout).",
      },
      {
        title: "ReAct Execution Cycle",
        detail:
          "The LLM inspects the query, inspects schema context, reasons over foreign key relationships, drafts ANSI-SQL, and calls the sandboxed runner.",
      },
      {
        title: "Autonomous Self-Correction",
        detail:
          "If Postgres returns a syntax error, missing column, or type mismatch, the ReAct loop catches the engine traceback, injects it into context, and self-corrects the query syntax (capped at 3 iterative attempts).",
      },
    ],
    securityGovernance: [
      "Hard Sandboxing: All queries execute under a scoped PostgreSQL role configured with NO SUPERUSER and SET TRANSACTION READ ONLY.",
      "Data Privacy: Raw user data never leaves the client's internal virtual private cloud (VPC). The LLM receives only metadata and aggregated analytical operations (GROUP BY, COUNT, SUM), keeping row-level PII entirely out of the context window.",
    ],
    fullStackIntegration: [
      {
        title: "BI Terminal Frontend",
        detail:
          "A React-based business intelligence terminal that automatically maps the returned JSON payloads into visualizations.",
      },
      {
        title: "Deterministic UI Mapping",
        detail:
          "The agent outputs a structured response containing both the SQL executed and a visualization hint (chart_type: 'bar' | 'line' | 'pie', x_axis: string, y_axis: string[]). The frontend dynamically renders the appropriate Recharts component alongside an exportable CSV table.",
      },
    ],
    scale: [
      { label: "Security level", value: "Zero data leakage" },
      { label: "Protocol", value: "Anthropic MCP / JSON-RPC 2.0" },
      { label: "Query latency", value: "< 1.4s average execution" },
      { label: "Self-correction", value: "3x ReAct loop healing" },
    ],
    logic: [
      "AST inspection with sqlglot blocks mutation keywords (INSERT, UPDATE, DELETE, DROP, ALTER).",
      "Schema isolation ensures row-level records are never exposed to external cloud LLMs.",
      "Row limits and timeouts (500 rows, 5s timeout) prevent query-induced server strain.",
      "ReAct traceback analysis isolates exact Postgres error codes to guide repair.",
    ],
    output: [
      "Dynamic interactive charts via Recharts (retention cohorts, MRR trends, churn rates).",
      "Plain-language executive summary of data trends.",
      "Expandable SQL audit pane with explain plan and timing stats.",
    ],
    results: [
      "Eliminated the need for a junior BI analyst for ad-hoc database queries.",
      "Achieved secure, zero-data-leakage database querying for non-technical founders.",
      "94% first-run SQL accuracy, jumping to 99.2% after autonomous self-correction.",
      "Ad-hoc report turnaround time compressed from 48 hours to under 8 seconds.",
    ],
    proof: ["Custom FastMCP Server Implementation", "AST sqlglot Validation Engine", "React + Recharts Dynamic BI Terminal"],
  },
  {
    slug: "autonomous-cicd-code-reviewer",
    name: "Autonomous CI/CD Code Reviewer & Refactoring Harness",
    shortName: "CI/CD Code Reviewer",
    summary:
      "Evaluator-Optimizer agent harness triggered by GitHub PR webhooks that analyzes git diffs, executes test suites inside isolated Docker sandboxes, and commits verified refactor patches via GitHub MCP.",
    headlineResult: "80% faster PR bottleneck · 95% bug catch rate",
    category: "Agentic AI",
    domainCategory: "Developer Tooling & SDLC Automation",
    clientType: "High-Velocity Engineering Teams & Venture-Backed Startups",
    clientProfile: "High-Velocity Engineering Teams & Venture-Backed Startups",
    industry: "Developer Tooling & SDLC Automation",
    timeframe: "Production Agentic Build 2026",
    role: "AI Systems Architect & DevOps Engineer",
    tools: ["Python", "LangChain Core", "GitHub MCP", "Docker SDK", "Claude 3.5 Sonnet", "Pytest", "ESLint", "GitHub Actions"],
    coreStack: ["Python", "LangChain Core", "GitHub MCP", "Docker SDK", "Claude 3.5 Sonnet", "Pytest / ESLint"],
    platform: "LangChain Core · GitHub MCP · Docker SDK",
    architecturalPattern: "Evaluator-Optimizer Harness with Sandboxed Verification",
    deployment: "GitHub App Webhook Worker on Railway / AWS Fargate",
    featured: true,
    clientWork: false,
    rating: "Production SDLC Ready",
    asciiDiagram: `[GitHub PR Webhook]
        │
        ▼
┌──────────────────┐
│  AST Diff Parser │
└───────┬──────────┘
        ▼
┌──────────────────┐
│  Coder Agent     │ ◄─────────────────────────┐
│  (Drafts Patch)  │                           │
└───────┬──────────┘                           │
        ▼                                      │ (Fails Validation)
┌───────────────────────────────────────────┐  │
│  Isolated Docker Sandbox                  │  │
│  • Runs ESLint / Ruff                     │  │
│  • Executes Pytest / Jest                 │  │
│  • Checks Security Policies               │  │
└───────┬───────────────────────────────────┘  │
        │                                      │
        ▼                                      │
┌──────────────────┐                           │
│ Evaluator Agent  │ ──────────────────────────┘
└───────┬──────────┘
        │ (Passed)
        ▼
┌──────────────────┐
│  GitHub MCP:     │ ──► [Commit Patch to PR Branch]
│  Direct Commit   │
└──────────────────┘`,
    problem: [
      "Development teams merge pull requests with subtle performance bugs, architectural debt, and security flaws because senior engineers lack time for deep, line-by-line code reviews.",
      "Simple linters flag whitespace and syntax but miss architectural antipatterns, race conditions, N+1 queries, and test coverage gaps.",
      "Basic LLM wrappers post hypothetical comments without verifying whether proposed code actually compiles or passes the repo's test suite.",
    ],
    requirements: [
      "Function as an autonomous junior engineer that isolates issues, writes code, tests its own work, and commits verified patches.",
      "Ingest GitHub App webhooks on pull_request.opened and pull_request.synchronize, fetching diffs and full context.",
      "Coder Agent drafts refactored code and new unit tests targeting anti-patterns and performance traps.",
      "Mount patch inside an ephemeral, non-networked Docker container mirroring repository runtime to run ESLint/Ruff and Pytest/Jest.",
      "Evaluator Agent reads exit codes and stderr; loops back to Coder on failure (max 3 loops).",
      "Commit verified patches directly to an agent review branch via GitHub MCP with signed commits.",
    ],
    architecture:
      "GitHub PR Webhook → AST Diff Parser → Coder Agent (Drafts Patch) → Isolated Docker Sandbox (ESLint/Ruff, Pytest/Jest, Security Checks) ⇄ Evaluator Agent (Evaluator-Optimizer Loop) → GitHub MCP Direct Commit (Signed Patch on Branch) & Annotated Summary",
    workflow: [
      "Webhook Ingestion: A GitHub App listens for pull_request.opened and pull_request.synchronize events, fetching the unified git diff and resolving full context.",
      "Actor Node (Coder): Analyzes changes for anti-patterns, N+1 queries, race conditions, and test gaps, generating a git patch with refactored code and unit tests.",
      "Execution Harness (Sandbox): The patch is applied inside an ephemeral, non-networked Docker container mirroring the repository runtime, executing test suites.",
      "Critic Node (Evaluator): Reads exit code, stdout/stderr streams, and linting output. If a test fails, error output is piped back to the Coder agent with revision instructions (capped at 3 loops).",
      "Commit Dispatch: Once tests achieve exit code 0, the harness calls GitHub MCP to commit the signed patch directly to agent/refactor-{pr_id} and post an annotated PR summary.",
    ],
    engineeringFlow: [
      {
        title: "Webhook Ingestion",
        detail:
          "A GitHub App listens for pull_request.opened and pull_request.synchronize events. It fetches the unified git diff and resolves the full context of modified files.",
      },
      {
        title: "Actor Node (Coder)",
        detail:
          "Analyzes the changes for anti-patterns, N+1 database queries, potential race conditions, and test coverage gaps. It generates a git patch containing refactored code and new unit tests.",
      },
      {
        title: "Execution Harness (Sandbox)",
        detail:
          "The patch is applied inside an ephemeral, non-networked Docker container mirroring the repository's runtime. The harness runs the existing test suite alongside newly generated tests.",
      },
      {
        title: "Critic Node (Evaluator)",
        detail:
          "Reads the execution exit code, stdout/stderr streams, and linting output. If a test fails, the error output is piped back to the Coder agent with instruction to revise the patch (loop limit: 3 iterations).",
      },
      {
        title: "Commit Dispatch",
        detail:
          "Once tests achieve a passing exit status (code 0), the system utilizes the GitHub MCP server to commit the signed patch directly to a dedicated review branch (agent/refactor-{pr_id}) and posts an annotated PR summary.",
      },
    ],
    failureHandling: [
      "Infinite Regression Guard: Strict execution ceilings prevent the Actor-Critic loop from burning tokens when addressing contradictory lint rules.",
      "Malicious Code Trapping: The Docker container runs with --cap-drop=ALL, --read-only, and disabled networking to prevent arbitrary remote code execution via untrusted PR contributions.",
    ],
    fullStackIntegration: [
      {
        title: "GitHub App Webhook Service",
        detail:
          "Hosted on AWS Fargate/Railway with HMAC signature verification for secure webhook delivery.",
      },
      {
        title: "GitHub MCP Server Bridge",
        detail:
          "Direct branch manipulation, file tree reads, and PR review comments authenticated via fine-grained GitHub installation tokens.",
      },
    ],
    scale: [
      { label: "Review time", value: "< 90 seconds / PR" },
      { label: "Bug catch rate", value: "95% pre-staging" },
      { label: "Bottleneck reduction", value: "80% faster merge" },
      { label: "Sandbox security", value: "Docker --cap-drop=ALL" },
    ],
    logic: [
      "Evaluator-Optimizer loop caps revisions at 3 iterations to prevent token burn.",
      "Strict zero-exit-code verification: no code is ever committed unless test suites pass 100%.",
      "AST parsing isolates modified functions and dependency call graphs.",
      "Cryptographically signed bot commits maintain clear audit attribution.",
    ],
    output: [
      "Directly committed refactor patches on agent/refactor-{pr_id}.",
      "Annotated GitHub PR comments with architectural explanations and benchmark comparisons.",
      "Security audit checklist identifying potential OWASP Top 10 risks.",
    ],
    results: [
      "Reduced PR review bottleneck times by 80%, unlocking multi-deploy daily cadence.",
      "Automatically caught 95% of linting, security, and logic vulnerabilities before staging.",
      "Freed 12+ hours per week of senior engineer time previously wasted on manual nitpicks.",
      "Elevated team code quality with continuous enforcement of internal coding standards.",
    ],
    proof: ["Evaluator-Optimizer Engine in Python", "GitHub MCP Protocol Client", "Dockerized Sandboxed Test Harness"],
  },
  {
    slug: "hierarchical-support-swarm",
    name: "Hierarchical L1/L2 Customer Support Orchestrator",
    shortName: "Hierarchical Support Swarm",
    summary:
      "Hierarchical Supervisor-Worker multi-agent system that semantically routes multi-intent support requests across specialized worker agents (Stripe billing, Linear/GitHub technical, Pinecone RAG) with state barrier joins.",
    headlineResult: "60% autonomous resolution · Multi-API execution",
    category: "Agentic AI",
    domainCategory: "Multi-Agent System Orchestration",
    clientType: "Multi-Tenant SaaS Platforms & High-Volume E-Commerce",
    clientProfile: "Multi-Tenant SaaS Platforms & High-Volume E-Commerce",
    industry: "Multi-Agent System Orchestration",
    timeframe: "Production Agentic Build 2026",
    role: "Agentic AI Architect & Orchestration Specialist",
    tools: ["LangGraph", "FastAPI", "Stripe API", "Zendesk API", "Linear API", "Pinecone", "OpenAI text-embedding-3-large"],
    coreStack: ["LangGraph", "FastAPI", "Stripe API", "Zendesk/Linear APIs", "Pinecone", "OpenAI text-embedding-3-large"],
    platform: "LangGraph · FastAPI · Pinecone · Stripe",
    architecturalPattern: "Supervisor-Worker Graph with Semantic Router & State Barrier Joins",
    deployment: "Distributed Microservice on Kubernetes / AWS ECS",
    featured: true,
    clientWork: false,
    rating: "Enterprise Scale",
    asciiDiagram: `                        [Inbound Support Ticket]
                                   │
                                   ▼
                       ┌───────────────────────┐
                       │   Supervisor Agent    │
                       │ (Intent & Plan State) │
                       └───────────┬───────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         ▼                         ▼                         ▼
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│  Billing Worker  │      │ Technical Worker │      │ Knowledge Worker │
│  (Stripe MCP)    │      │ (Linear/GH MCP)  │      │ (Pinecone RAG)   │
└────────┬─────────┘      └────────┬─────────┘      └────────┬─────────┘
         │                         │                         │
         └─────────────────────────┼─────────────────────────┘
                                   │
                                   ▼
                       ┌───────────────────────┐
                       │  State Barrier Join   │
                       └───────────┬───────────┘
                                   ▼
                       ┌───────────────────────┐
                       │ Synthesis & Dispatch  │ ──► [Consolidated Response]
                       └───────────────────────┘`,
    problem: [
      "Single-prompt chatbots fail when customer requests span multiple functional domains (e.g., 'Downgrade my subscription, refund the pro-rated difference, and tell me why webhooks dropped payloads').",
      "Support agents spend 70% of their workday context-switching between Zendesk, Stripe dashboards, and internal admin panels.",
      "Customer wait times spike during technical incidents, resulting in escalated churn and frustrated users.",
    ],
    requirements: [
      "Ingest tickets and decompose compound requests into discrete sub-tasks using a Supervisor / Semantic Router node.",
      "Execute specialized downstream workers in parallel: Billing Worker (Stripe MCP), Technical Worker (Linear/GH MCP), and Knowledge Worker (Vector RAG via Pinecone).",
      "Synchronize parallel streams at a State Barrier Join node, confirming all tasks executed without exceptions.",
      "Synthesize all worker outputs into a single, cohesive, empathetic response email.",
      "Enforce transactional rollback mechanisms and deterministic human escalation triggers.",
    ],
    architecture:
      "Inbound Support Ticket → Supervisor Agent (Intent & Plan State) → Parallel Dispatch [Billing Worker (Stripe MCP) | Technical Worker (Linear/GH MCP) | Knowledge Worker (Pinecone RAG)] → State Barrier Join → Synthesis & Dispatch (Zendesk / Email)",
    workflow: [
      "Supervisor / Semantic Router Node: Ingests the ticket and breaks down compound requests into discrete sub-tasks, mapping tasks across the global state.",
      "Parallel Worker Execution: Billing Worker authenticates customer identity, inspects billing state, and triggers pro-rated refunds via Stripe; Technical Worker inspects incident logs and files Linear tickets; Knowledge Worker performs hybrid vector search over engineering documentation in Pinecone.",
      "State Barrier Join: The graph synchronizes across all worker nodes, verifying that all sub-tasks completed without exceptions.",
      "Synthesis & Dispatch: The Supervisor inspects worker outputs and drafts a single, unified, empathetic response covering all points.",
      "Rollback & Escalation: If any transaction fails, an explicit rollback node reverses partial state; tickets with classification confidence < 85% route straight to human staff.",
    ],
    engineeringFlow: [
      {
        title: "Supervisor / Semantic Router Node",
        detail:
          "Ingests the ticket and breaks down compound requests into discrete sub-tasks. It maps these tasks across the global state and assigns them to specialized downstream worker agents.",
      },
      {
        title: "Parallel Worker Execution",
        detail:
          "Billing Worker (Stripe MCP) manages refunds and downgrades; Technical Worker (Linear MCP) queries incident logs and files engineering tickets; Knowledge Worker (Pinecone RAG) performs hybrid vector + BM25 search over documentation.",
      },
      {
        title: "State Barrier Join",
        detail:
          "The graph synchronizes across all worker nodes. The Supervisor inspects the worker outputs, validates that all sub-tasks completed without exceptions, and drafts a single, unified response covering all points.",
      },
    ],
    failureHandling: [
      "Rollback Mechanisms: If the Billing Worker fails halfway through a transaction, the agent triggers an explicit rollback node to reverse the partial update, recording the event trace for human engineering triage.",
      "Deterministic Escalation: If any intent classification certainty score falls below 85%, the system routes the thread directly to human support staff with full context pre-populated.",
    ],
    fullStackIntegration: [
      {
        title: "FastAPI Orchestration Microservice",
        detail:
          "Deploys on Kubernetes/AWS ECS with horizontally scalable worker pods handling concurrent ticket bursts.",
      },
      {
        title: "Zendesk & Stripe Webhook Integrations",
        detail:
          "Full two-way sync with Zendesk private internal notes for execution traceability and direct Stripe customer portal hooks.",
      },
    ],
    scale: [
      { label: "Autonomous resolution", value: "60% of L1 tickets" },
      { label: "Resolution speed", value: "< 25 seconds / ticket" },
      { label: "Worker swarms", value: "3 specialized workers" },
      { label: "Vector search", value: "Pinecone text-embedding-3" },
    ],
    logic: [
      "State barrier joins enforce strict dependency resolution across parallel worker tasks.",
      "Refund ceilings ($150 limit) automatically trigger human approval gates.",
      "Idempotency keys prevent double-refunds during network retries.",
      "Hybrid search (vector + BM25) eliminates hallucinations in technical documentation answers.",
    ],
    output: [
      "Unified, empathetic resolution email delivered to customer in Zendesk.",
      "Stripe refund receipts and updated subscription records.",
      "Internal ticket traces logged in Zendesk private notes.",
    ],
    results: [
      "60% of complex, multi-domain L1/L2 tickets resolved completely autonomously.",
      "Resolution time dropped from 4.5 hours to under 25 seconds.",
      "Eliminated repetitive manual clicks across billing dashboards and admin tools.",
      "CSAT ratings increased by 34% through instant and accurate issue resolution.",
    ],
    proof: ["LangGraph Supervisor-Worker Orchestrator", "Multi-API MCP Worker Harness", "Pinecone Hybrid Vector Knowledge Base"],
  },
  {
    slug: "brand-governed-content-critic",
    name: "Brand-Governed Content Engine with Deterministic Critic Loop",
    shortName: "Brand Content Critic Engine",
    summary:
      "Actor-Critic dual agent system with JSON schema-enforced gatekeeping that transcribes long-form audio/video via Whisper, drafts platform-native content, and enforces strict brand guidelines with deterministic zero-hallucination loops.",
    headlineResult: "30+ posts/day · 100% brand voice compliance",
    category: "Agentic AI",
    domainCategory: "Deterministic Content Generation",
    clientType: "Media Brands, Marketing Agencies, Corporate Communications",
    clientProfile: "Media Brands, Marketing Agencies, Corporate Communications",
    industry: "Deterministic Content Generation",
    timeframe: "Production Agentic Build 2026",
    role: "Full-Stack AI Engineer & Prompt Systems Architect",
    tools: ["Next.js 15", "Python", "Whisper API", "Grok API (xAI)", "Claude 3.5 Sonnet", "Pydantic", "Tailwind CSS"],
    coreStack: ["Next.js 15", "Python", "Whisper API", "Grok API (xAI)", "Claude 3.5 Sonnet", "Pydantic"],
    platform: "Next.js 15 · Python · Grok API · Claude 3.5",
    architecturalPattern: "Actor-Critic Dual Agent with JSON Schema-Enforced Gatekeeping",
    deployment: "Serverless Vercel (UI) + Python GPU Worker on RunPod / Modal",
    featured: true,
    clientWork: false,
    rating: "100% Brand Compliance",
    asciiDiagram: `[Raw Audio / Long-Form Video]
              │
              ▼
    ┌──────────────────┐
    │   Whisper API    │
    └─────────┬────────┘
              ▼
    ┌──────────────────┐
    │   Actor Agent    │ ◄─────────────────────────┐
    │ (Variant Drafts) │                           │
    └─────────┬────────┘                           │
              ▼                                    │
    ┌──────────────────┐                           │
    │   Critic Agent   │                           │ (Score < 95% OR
    │ • Style Rules    │ ──────────────────────────┘  Rule Violation)
    │ • Lexicon Check  │
    │ • Regex Banned   │
    └─────────┬────────┘
              │ (Score >= 95% & Schema Compliant)
              ▼
    ┌──────────────────┐
    │ Next.js Studio   │ ──► [Export to Social/CMS]
    └──────────────────┘`,
    problem: [
      "Most content pipelines generate generic, low-retention copy that frequently hallucinates or violates strict corporate brand voice guidelines.",
      "Copywriters spend hours manually rewriting AI drafts to eliminate hype buzzwords ('delve', 'revolutionize', 'in conclusion') and improper formatting.",
      "Repurposing long-form podcast audio or video into platform-optimized content requires intense manual labor.",
    ],
    requirements: [
      "Treat brand integrity as a hard software compilation step through an Actor-Critic feedback loop.",
      "Transcribe long-form audio/video via Whisper, extracting arguments, timestamps, and quotes.",
      "Actor Node drafts platform variants: short-form threads via Grok API for X/Twitter; technical breakdowns via Claude 3.5 Sonnet for LinkedIn.",
      "Critic Node acts as a Brand Compiler: evaluates drafts against client JSON config (negative lexicon regex, formatting invariants, voice alignment score 0–100).",
      "Enforce strict gatekeeping: if score < 95% or any hard rule fails, Critic injects correction vectors back to Actor; loop repeats until compliant.",
    ],
    architecture:
      "Raw Audio / Long-Form Video → Whisper API Transcription → Actor Agent (Variant Drafts via Grok & Claude) ⇄ Critic Agent (Style Rules, Lexicon Check, Regex Banned Filter) → Gate (Score >= 95% & Schema Compliant) → Next.js Content Studio → Social/CMS Export",
    workflow: [
      "Ingestion & Feature Extraction: Long-form audio/video is transcribed via Whisper, extracting core arguments, timestamps, and quotes into an information blueprint.",
      "Actor Node: Translates source points into platform-native variants: short-form hooks via Grok API for X/Twitter; technical breakdowns via Claude 3.5 Sonnet for LinkedIn.",
      "Critic Node (The Brand Compiler): Inspects draft against an immutable, client-specific configuration file checking negative lexicons, formatting invariants, and tonal alignment.",
      "Compiling Loop: If the score is below 95% or any hard rule is broken, the Critic returns an explicit correction vector back to the Actor, refining only defective segments.",
      "Next.js Content Studio: Displays active convergence score over time, letting agency teams inspect revision evolution and adjust brand rule parameters directly.",
    ],
    engineeringFlow: [
      {
        title: "Ingestion & Feature Extraction",
        detail:
          "Long-form audio/video is transcribed via Whisper. The system extracts core arguments, timestamps, and quotes into an information blueprint.",
      },
      {
        title: "Actor Node",
        detail:
          "Translates source points into platform-native variants: Grok API generates direct, high-engagement hooks optimized for X/Twitter; Claude 3.5 Sonnet structures comprehensive, long-form LinkedIn posts and engineering newsletters.",
      },
      {
        title: "Critic Node (The Brand Compiler)",
        detail:
          "Inspects the draft against an immutable, client-specific configuration file defining: Negative Lexicon / Regex Filters (forbidden jargon, overused AI transitions), Formatting Invariants (character limits, line-break cadences), and Voice Alignment Scoring (0–100 scale using few-shot exemplars).",
      },
      {
        title: "Compiling Loop",
        detail:
          "If the score is below 95% or any hard rule is broken, the Critic returns an explicit correction vector (violations: ['Line 4 exceeds character limits', 'Found banned word dive']) back to the Actor. The Actor adjusts only the defective segments.",
      },
    ],
    failureHandling: [
      "Negative Lexicon Rejection: Hard-regex rejection halts drafts instantly if banned competitor names or banned buzzwords appear.",
      "Hallucination Grounding: Claims must correlate with timestamped segments in the Whisper transcript blueprint.",
      "Loop Safeguard: Hard ceiling of 4 compilation loops before flagging human intervention.",
    ],
    fullStackIntegration: [
      {
        title: "Next.js 15 Content Studio",
        detail:
          "Displays the active convergence score over time, letting agency users watch how the draft evolved across revision cycles. Includes a custom rule editor where clients modify their brand's tone parameters, banned words, and formatting rules directly from the browser.",
      },
      {
        title: "GPU Worker Infrastructure",
        detail:
          "Whisper audio processing deployed on serverless GPU containers (Modal / RunPod) for 4x real-time transcription.",
      },
    ],
    scale: [
      { label: "Content throughput", value: "30+ posts / day" },
      { label: "Brand compliance", value: "100% verified" },
      { label: "Critic convergence", value: "1–3 revision loops" },
      { label: "Transcription speed", value: "4x real-time Whisper" },
    ],
    logic: [
      "Negative lexicon regex filter catches forbidden jargon before semantic evaluation.",
      "Pydantic schema gatekeeper rejects unformatted output.",
      "Source timestamp attribution links generated claims back to verified audio.",
      "Convergence score graph tracks automated refinement across revision passes.",
    ],
    output: [
      "High-engagement X/Twitter threads compiled via Grok API.",
      "Long-form, structured LinkedIn thought leadership articles via Claude 3.5 Sonnet.",
      "Interactive Critic audit scorecard with violation breakdown and tone confidence metrics.",
    ],
    results: [
      "Allowed a single content manager to produce 30+ compliant social posts per day with zero tone drift.",
      "Achieved 100% brand voice compliance with zero off-brand hallucinations.",
      "Reduced content repurposing workflow from 4 hours per episode to under 12 minutes.",
      "Client revision requests dropped by 75% across active agency client accounts.",
    ],
    proof: ["Actor-Critic Compiler Engine", "Next.js 15 Content Studio UI", "Configurable Pydantic JSON Brand Voice Schema"],
  },
  {
    slug: "linkedin-job-search-automation-openai-telegram",
    name: "Automated LinkedIn Job Search Automation with OpenAI & Telegram Alerts",
    shortName: "LinkedIn Job Search Automation",
    summary:
      "Scrapes LinkedIn jobs daily, matches them against a resume with Gemini or OpenAI, writes a tailored cover letter for each match, and delivers everything to Google Sheets and Telegram — cutting 3+ hours of daily job hunting to under 5 minutes.",
    headlineResult: "3+ hrs/day → under 5 min",
    category: "AI Agents",
    clientType: "Job seekers / professionals",
    industry: "Career / Recruitment Automation",
    timeframe: "Published Aug 31, 2026",
    role: "AI Workflow Automation Specialist | n8n Developer",
    tools: ["n8n", "LinkedIn", "OpenAI", "Google Gemini", "Google Sheets", "Google Drive", "Telegram Bot", "Web Scraping"],
    platform: "n8n",
    clientWork: false,
    rating: "",
    problem: [
      "Job seekers spend hours scrolling LinkedIn, reading endless job descriptions, and guessing which roles are worth applying to.",
      "Writing a tailored cover letter for each application is the most time-consuming part — so resume fits get missed and opportunities slip through.",
      "3+ hours a day went to job hunting instead of networking, upskilling, or actually applying.",
    ],
    requirements: [
      "Read a PDF resume from Google Drive and extract skills, experience, and education.",
      "Let the user define search filters in a Google Sheet: keywords, location, remote type, job type, easy-apply preference.",
      "Scrape LinkedIn for jobs matching those criteria on a daily schedule.",
      "Score each job against the resume with AI and generate a tailored cover letter.",
      "Log everything to Google Sheets and send daily Telegram alerts with links and cover letter drafts.",
    ],
    architecture:
      "Schedule → Drive (resume) → Sheets (criteria) → LinkedIn scrape → AI match & cover letter → Sheets log → Telegram alerts",
    workflow: [
      "A cron trigger fires daily to start the run.",
      "The workflow downloads the PDF resume from Google Drive and extracts its text.",
      "Search criteria (keywords, location, remote type, job type) are read from a Google Sheet.",
      "LinkedIn is scraped for job postings matching the configured filters.",
      "Each job description is sent to Gemini or OpenAI, which compares it against the resume, returns a match score, and writes a tailored cover letter.",
      "Matched jobs are logged to Google Sheets with title, company, link, match percentage, cover letter, and application status.",
      "A Telegram bot sends a daily digest with new matched listings, direct apply links, and ready-to-use cover letter drafts.",
    ],
    scale: [
      { label: "Jobs evaluated", value: "Every new match, daily" },
      { label: "Frequency", value: "Daily (cron)" },
      { label: "Workflow steps", value: "8–10" },
      { label: "Integrations", value: "5" },
    ],
    logic: [
      "Multi-AI support — Gemini or OpenAI selectable per preference and cost.",
      "Custom filters for keywords, locations, remote work, and job types.",
      "Match scoring keeps only relevant jobs in the digest.",
      "Cover letters highlight the user's most relevant experience for each role.",
    ],
    output: [
      "Google Sheets dashboard: job title, company, link, match %, cover letter, application status.",
      "Daily Telegram alerts with matched listings, apply links, and cover letter drafts.",
    ],
    results: [
      "Job search time cut from 3+ hours daily to under 5 minutes of review.",
      "Cover letter writing time eliminated — AI generates drafts instantly.",
      "Match accuracy: only relevant jobs reach the user.",
      "No missed postings — every fitting opportunity is captured daily.",
    ],
    proof: ["Live production workflow", "Demonstration build"],
  },
  {
    slug: "slack-reporting-pipeline-apify-n8n",
    name: "Automated Slack Reporting Pipeline with Apify and n8n",
    shortName: "Slack Reporting Pipeline",
    summary:
      "A scheduled scraping-to-Slack digest that replaced 10+ hours a week of manual data collection and formatting.",
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
      "The team was manually collecting and formatting that data, taking 10+ hours a week.",
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
    // Node-level detail reconstructed from the documented 18-step workflow above.
    // TODO(Awais): confirm node names match the production canvas; add a redacted
    // Telegram alert screenshot and the client's permission to name the agency if possible.
    engineeringFlow: [
      { title: "Schedule Trigger", detail: "Starts the run every 2 days at 11 AM, so new Reels are reviewed while they are still trending." },
      { title: "Google Sheets: read accounts", detail: "Loads the Instagram handles and their industry category, skipping accounts already marked as processed in this cycle." },
      { title: "Loop Over Items + Wait", detail: "Processes one account at a time with a 4-second delay between API calls to stay inside SocialCrawl rate limits." },
      { title: "HTTP Request: SocialCrawl", detail: "Fetches the 12 most recent Reels for the account. Private accounts and rate-limit errors are caught and skipped instead of failing the run." },
      { title: "Code: normalise and score", detail: "Flattens the response, computes the account's median view count, and calculates each Reel's performance factor (views ÷ median)." },
      { title: "IF: outlier filter", detail: "Keeps only Reels with a factor of 3.0× or higher that were published in the last 14 days." },
      { title: "Google Sheets: deduplicate", detail: "Checks the Reel ID against the Reels log so the same Reel is never notified twice." },
      { title: "Telegram: send alert", detail: "Posts the industry hashtag, account handle, publish date, formatted views, performance factor and a direct link to the Reel." },
      { title: "Google Sheets: log and mark processed", detail: "Appends the Reel to the log and flags the account as processed, so an interrupted run resumes where it stopped." },
    ],
    failureHandling: [
      "Private accounts, missing data and API rate limits are caught per account and skipped, so one bad handle never stops the other 49.",
      "Fixed 4-second delays between requests keep a ~600-request run inside the scraping API's limits.",
      "Processed flags in the accounts sheet make reruns safe: finished accounts are not scraped again in the same cycle.",
      "Reel IDs are stored before notifying, so a retried run cannot send duplicate Telegram alerts.",
    ],
    lessons: [
      "Use the median, not the average: one viral Reel inflates an account's average and hides the next outlier, while the median of the last 12 Reels stays stable.",
      "Relative thresholds work across account sizes: 3× the median flags breakout content for a small account and a large one alike, with no per-account tuning.",
      "Keep deduplication state in a durable store (the Reels sheet), not in workflow memory, so reruns and schedule changes never double-notify.",
      "Let the client own the inputs: adding or removing an account is a row in a Google Sheet, not a workflow edit.",
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
    engineeringFlow: [
      { title: "Supabase Postgres + pgvector", detail: "Document chunks and their NVIDIA embeddings live in a Supabase Postgres table with the pgvector extension, queried through n8n's Supabase Vector Store node." },
      { title: "Decomposer agent", detail: "GPT-5-mini with conversational memory splits a complex question into 1–5 targeted sub-queries." },
      { title: "Parallel vector search", detail: "Each sub-query runs its own similarity search against pgvector, so every part of the question gets its own context." },
      { title: "Relevance filter", detail: "Chunks scoring below 0.4 similarity are dropped before they can reach the model." },
      { title: "Aggregate + 'Think' step", detail: "Surviving chunks are merged into one context and a dedicated reasoning step synthesises them before the answer is written." },
      { title: "Grounded answer", detail: "The final answer uses only the knowledge base, with optional source references. With no relevant chunks, it says so instead of guessing." },
    ],
    lessons: [
      "Decomposition beats a bigger top-k: several narrow pgvector searches return more relevant chunks for multi-part questions than one broad search.",
      "A similarity floor (0.4 here) is the cheapest hallucination control: irrelevant context never reaches the model.",
      "Keeping retrieval in a sub-workflow decoupled from the agent makes it easy to swap the embedding model or vector store later.",
      "Supabase pgvector keeps vectors next to the rest of the app's Postgres data, so there is no separate vector database to run.",
    ],
    proof: ["Published on Upwork/Freelancer profile", "Live production deployment"],
  },
  {
    slug: "automated-business-kpi-analysis-growth-insights",
    name: "Automated Business KPI Analysis & Growth Insights",
    shortName: "Business KPI Analysis",
    summary: "Business metrics are pulled, normalised and written up as an AI growth summary on a schedule, so leadership reads a report instead of building a spreadsheet.",
    headlineResult: "Reporting effort cut to minutes",
    category: "Reporting",
    clientType: "Portfolio build",
    industry: "Business Intelligence / Reporting",
    timeframe: "2026",
    role: "AI Automation Engineer & Workflow Developer",
    tools: ["n8n", "Google Sheets", "OpenAI API", "APIs & Webhooks"],
    platform: "n8n",
    clientWork: false,
    rating: "",
    problem: ["Metrics lived in several source systems, so every report started with export and copy-paste.", "Reporting was slow enough that decisions were made on last month's numbers.", "Format changed between reports, making period comparison unreliable."],
    requirements: ["Pull metrics on a fixed schedule from every source into one sheet.", "Compare each metric against the previous period automatically.", "Produce a plain-language summary, not just a grid of numbers."],
    architecture: "Schedule → collect metrics → normalise into one sheet → period comparison → AI narrative → deliver report",
    workflow: ["Cron trigger fires on the reporting cadence.", "Connectors pull raw metrics from each source system and API.", "Data is normalised into one consistent sheet structure.", "Each metric is compared against the previous period and flagged on movement.", "An AI step writes a plain-language summary, and the report is delivered."],
    scale: [{"label": "Records per run", "value": "200–1,000"}, {"label": "Frequency", "value": "Daily / weekly configurable"}, {"label": "Workflow steps", "value": "8–10"}, {"label": "Integrations", "value": "4"}],
    logic: ["Every metric gets a period-over-period delta.", "Metrics moving beyond the expected range are flagged as anomalies.", "Historical log kept for every run so trends stay comparable."],
    output: ["One normalised metrics sheet with deltas already computed.", "A short written summary explaining what moved and why it matters."],
    results: ["Reporting effort cut from hours to minutes.", "Decisions start from current numbers instead of last month's file.", "Consistent format every run — no reformatting between reports.", "Anomalies surface automatically instead of being spotted by accident."],
    proof: ["Portfolio build", "Actual n8n workflow canvas"],
  },
  {
    slug: "automated-offer-letter-response-tracking",
    name: "Automated Offer Letter & Response Tracking System",
    shortName: "Offer Letter Automation",
    summary: "Pending offers turn into generated, PDF-converted, emailed letters with one-click Accept/Decline, and every response is captured and written back automatically.",
    headlineResult: "Zero manual follow-up",
    category: "Content",
    clientType: "Portfolio build",
    industry: "HR / Recruitment",
    timeframe: "2026",
    role: "AI Automation Engineer & Workflow Developer",
    tools: ["n8n", "Google Sheets", "Google Docs", "Google Drive", "Gmail"],
    platform: "n8n",
    clientWork: false,
    rating: "",
    problem: ["Offer letters were assembled and sent by hand for every candidate.", "Responses arrived in different inboxes and had to be chased manually.", "Status lived in a spreadsheet that was frequently out of date."],
    requirements: ["Watch a sheet for new Pending entries and generate the letter from a template.", "Convert to PDF, store in Drive, and email with Accept / Decline buttons.", "Capture the response, validate it against the deadline, and update status."],
    architecture: "Sheet trigger → copy template → fill Docs → PDF → Drive → share + email with buttons → webhook response → validate → status + follow-up emails",
    workflow: ["Google Sheets trigger fires on a new Pending row.", "The template is copied and the offer details are filled into Google Docs.", "The document is converted to PDF and saved to Drive with sharing rights set.", "Gmail sends the letter with Accept and Decline buttons.", "A webhook receives the candidate's answer, validates it against the deadline, writes Accepted / Rejected / Timeout back to the sheet and notifies both the candidate and HR."],
    scale: [{"label": "Offers per cycle", "value": "10–50"}, {"label": "Workflow steps", "value": "10–12"}, {"label": "Integrations", "value": "5"}],
    logic: ["Late or invalid responses are rejected against the deadline check.", "Timeout path fires automatically when no answer arrives.", "Every status change is written back so the sheet stays authoritative."],
    output: ["Generated PDF offer stored in Drive and delivered by email.", "Updated status row plus automated notifications to candidate and HR."],
    results: ["The full cycle runs without manual follow-up.", "No offer lost in an inbox or forgotten in a spreadsheet.", "HR sees the exact status of every offer at a glance.", "Candidates get a fast, professional experience."],
    proof: ["Portfolio build", "Actual n8n workflow canvas"],
  },
  {
    slug: "hubspot-lead-routing-gpt4-airtable",
    name: "Dynamic HubSpot Lead Routing with GPT-4 & Airtable",
    shortName: "HubSpot Lead Routing",
    summary: "Every new HubSpot contact is scored by an AI agent against an Airtable team database and routed to the right rep in seconds.",
    headlineResult: "Leads routed in seconds",
    category: "Lead & CRM",
    clientType: "Portfolio build",
    industry: "Sales / CRM",
    timeframe: "2026",
    role: "AI Automation Engineer & Workflow Developer",
    tools: ["n8n", "HubSpot", "Airtable", "OpenAI GPT-4", "Google Gemini", "Slack", "Gmail"],
    platform: "n8n",
    clientWork: false,
    rating: "",
    problem: ["New leads sat in a queue until someone triaged them manually.", "Routing rules were inconsistent between reps and time of day.", "Ownership decisions were not recorded, so accountability was unclear."],
    requirements: ["Trigger on every new or updated HubSpot contact.", "Score fit, territory and workload and choose an owner automatically.", "Write the decision back, post to Slack, and email the assigned rep."],
    architecture: "HubSpot trigger → enrich contact → create Airtable record → AI agent with structured output parser → update record + Slack + Gmail → upsert back to HubSpot",
    workflow: ["HubSpot trigger fires on a new or updated contact.", "Full contact details are fetched and the routing context is built.", "The lead is written into Airtable for tracking.", "A GPT-4 agent with a structured output parser scores fit, territory and workload using the Airtable team database.", "The chosen rep is written back, posted to Slack, emailed to the owner, and the contact is upserted in HubSpot."],
    scale: [{"label": "Leads per day", "value": "20–200"}, {"label": "Latency", "value": "Under 60 seconds"}, {"label": "Workflow steps", "value": "8–9"}, {"label": "Integrations", "value": "6"}],
    logic: ["Structured output parser — the AI returns a decision the system can act on, not free text.", "Territory, fit and current workload all influence the pick.", "A fallback path guarantees no lead ends up unrouted."],
    output: ["Owned lead record in Airtable and HubSpot.", "Slack post and email to the assigned rep with full context."],
    results: ["Leads distributed in seconds, not when someone next checks the queue.", "No manual triage meeting or shared inbox.", "Fair, consistent distribution across the team.", "Every decision written back for a full audit trail."],
    proof: ["Portfolio build", "Actual n8n workflow canvas"],
  },
  {
    slug: "ai-lead-meeting-scheduling-zoho-gemini",
    name: "AI Lead Meeting Scheduling with Zoho CRM, Google Calendar & Gemini",
    shortName: "AI Lead Meeting Scheduling",
    summary: "A new Zoho lead becomes a booked, conflict-free meeting on the assigned rep's calendar with a Zoom link and a personalised invite.",
    headlineResult: "Zero scheduling back-and-forth",
    category: "Lead & CRM",
    clientType: "Portfolio build",
    industry: "Sales / CRM",
    timeframe: "2026",
    role: "AI Automation Engineer & Workflow Developer",
    tools: ["n8n", "Zoho CRM", "Google Calendar", "Zoom", "Google Gemini", "Gmail"],
    platform: "n8n",
    clientWork: false,
    rating: "",
    problem: ["Booking a meeting took several email round trips and lost momentum while the lead was still warm.", "Timezone mistakes and double bookings happened regularly.", "Scheduled meetings were not written back into the CRM."],
    requirements: ["Trigger when a lead is created in Zoho CRM and identify the assigned rep.", "Find conflict-free slots using working hours, duration and buffer rules.", "Create the meeting, generate a Zoom link, send a personalised invite, and log it back in Zoho."],
    architecture: "Zoho webhook → fetch lead → rep + scheduling rules → timezone detection → calendar conflict check → Zoom link → Gemini invite email → log in Zoho",
    workflow: ["A webhook fires when a new lead is created in Zoho CRM.", "The full lead record is fetched and the assigned sales rep is loaded.", "The lead's timezone is detected so slots are offered in local time.", "The rep's calendar events are read and conflict-free slots are computed from working hours, duration and buffer rules.", "The meeting is created, a Zoom link is generated, a personalised HTML invite is sent, and the meeting is written back into Zoho CRM."],
    scale: [{"label": "Leads per week", "value": "10–100"}, {"label": "Slot search window", "value": "14 days"}, {"label": "Workflow steps", "value": "9–11"}, {"label": "Integrations", "value": "6"}],
    logic: ["Slots must satisfy working hours, duration and buffer constraints.", "No suitable slot triggers a polite fallback email asking for preferred times.", "Meeting details are logged to the CRM so nothing lives only in email."],
    output: ["Booked calendar event with Zoom link.", "Personalised HTML invite to the lead.", "Meeting record logged in Zoho CRM."],
    results: ["Leads get a booked meeting without human back-and-forth.", "No double bookings and no timezone mistakes.", "Reps see meetings appear with full context.", "Fallback path means no lead reaches a dead end."],
    proof: ["Portfolio build", "Actual n8n workflow canvas"],
  },
  {
    slug: "voice-ai-appointment-booking-elevenlabs-calcom",
    name: "Voice AI Appointment Booking with ElevenLabs & Cal.com",
    shortName: "Voice AI Appointment Booking",
    summary: "A caller speaks their request and a voice agent checks real Cal.com availability and books the appointment before the call ends.",
    headlineResult: "Books inside the call",
    category: "AI Agents",
    clientType: "Portfolio build",
    industry: "Service Businesses / Appointments",
    timeframe: "2026",
    role: "AI Automation Engineer & Workflow Developer",
    tools: ["n8n", "ElevenLabs", "Cal.com", "APIs & Webhooks"],
    platform: "n8n",
    clientWork: false,
    rating: "",
    problem: ["Booking by phone meant staff had to check calendars and call back, or callers abandoned the process.", "Out-of-hours calls went unanswered entirely.", "Manual entry into the calendar created double bookings."],
    requirements: ["Understand whether the caller wants availability or wants to book.", "Query real Cal.com availability and create the booking against the live calendar.", "Speak confirmation back to the caller in natural speech."],
    architecture: "Voice agent → n8n webhook → intent check → Cal.com slots (GET) or booking (POST) → response to voice agent → spoken confirmation",
    workflow: ["The voice agent sends the caller's request to an n8n webhook.", "The workflow checks whether this is an availability query or a booking.", "For availability it calls GET /v1/slots on Cal.com for open times.", "For a booking it calls POST /v1/bookings against the real calendar.", "The result is returned to the voice agent so the caller hears confirmation in natural speech."],
    scale: [{"label": "Calls per day", "value": "20–500"}, {"label": "Response time", "value": "Under 3 seconds"}, {"label": "Workflow steps", "value": "6–7"}, {"label": "Integrations", "value": "3"}],
    logic: ["Intent is decided before any calendar call is made.", "Availability always comes from the live calendar — never an estimate.", "Booking writes straight to Cal.com, so a double booking is not possible."],
    output: ["Real availability list, or a confirmed booking with spoken confirmation."],
    results: ["Booking completes inside the call, not over a later email thread.", "After-hours and high-volume calls handled without staff.", "No no-shows caused by misheard or unconfirmed times.", "Consistent, natural conversational experience every time."],
    proof: ["Portfolio build", "Actual n8n workflow canvas"],
  },
  {
    slug: "instagram-reel-recreation-gemini-minimax",
    name: "Recreate Instagram Reels on Demand with Gemini & MiniMax",
    shortName: "AI Instagram Reel Recreation",
    summary: "Paste an Instagram Reel URL into a chat and the workflow downloads it, has Gemini 2.0 Flash describe it frame by frame, then generates a brand-new AI reel with MiniMax Video-01 on Replicate.",
    headlineResult: "Reel URL in → new AI reel out",
    category: "Content",
    clientType: "Portfolio build",
    industry: "Content Creation / Social Media",
    timeframe: "2026",
    role: "AI Automation Engineer & Workflow Developer",
    tools: ["n8n", "Instagram", "Google Gemini", "Replicate", "APIs & Webhooks"],
    platform: "n8n",
    clientWork: false,
    rating: "",
    problem: [
      "Creators and social media managers want variations of trending reels, but recreating one by hand means re-shooting or editing from scratch.",
      "Describing a reel well enough for an AI video model (visuals, movement, lighting, camera angles, transitions) is slow and inconsistent when done manually.",
      "AI video generation takes minutes per clip, so someone has to keep checking whether it has finished.",
    ],
    requirements: [
      "Accept an Instagram Reel URL through a chat interface.",
      "Fetch the reel's metadata and download link, and stop cleanly if the download fails.",
      "Upload the video to Gemini 2.0 Flash and get a detailed scene-by-scene description.",
      "Turn that description into a prompt optimized for a video generation model.",
      "Generate a new video with MiniMax Video-01 and wait automatically until it is ready.",
    ],
    architecture:
      "Chat trigger → RapidAPI Reel Downloader → Formatter → Null check → Download reel → Gemini File API upload → Gemini 2.0 Flash analysis → Replicate MiniMax Video-01 → Wait → Status poll loop → Fetch video output",
    workflow: [
      "A chat message with an Instagram Reel URL starts the workflow.",
      "The RapidAPI Instagram Reels Downloader returns the reel's metadata and download URL.",
      "A formatter cleans the response and an IF node checks the download succeeded, retrying if it came back empty.",
      "The reel video is downloaded and uploaded to Google's Gemini File API.",
      "Gemini 2.0 Flash analyzes the video frame by frame, covering visuals, audio, movement, lighting, camera angles and transitions.",
      "The description is formatted into one continuous prompt (lowercase, no punctuation) for the video model.",
      "The prompt is sent to MiniMax Video-01 on Replicate to create a new video.",
      "The workflow pauses, checks the generation status, and loops until Replicate reports success.",
      "The finished AI-generated video is fetched and ready to use or pass to the next step.",
    ],
    scale: [
      { label: "Input", value: "1 Reel URL per run" },
      { label: "Generation time", value: "2–5 min per video" },
      { label: "Output", value: "Up to 6s, 720p, 25fps" },
      { label: "Workflow steps", value: "12" },
    ],
    logic: [
      "A null check stops bad downloads before any paid AI call is made.",
      "Gemini processes video at 1 frame per second (about 300 tokens per second of video) for a detailed description.",
      "The prompt is reshaped into the plain continuous style video models respond to best.",
      "A wait-and-poll loop checks Replicate every 2 minutes, so no one has to watch the job.",
      "Retry logic on API requests keeps runs reliable.",
    ],
    output: [
      "A new AI-generated video based on the original reel's visual style and storytelling structure.",
      "A detailed AI description of the source reel that can be reused as a prompt.",
    ],
    results: [
      "One URL produces a fresh AI variation of a reel without filming or editing.",
      "The visual style of the original is kept, because the prompt comes from a frame-by-frame analysis.",
      "Video generation is fully hands-off thanks to automatic status polling.",
      "Easy to extend: style variations, branding overlays, cloud storage or auto-posting.",
    ],
    proof: ["Portfolio build", "Actual n8n workflow canvas"],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Agentic AI",
  "AI Agents",
  "Lead & CRM",
  "Support",
  "Reporting",
  "Scraping",
  "Content",
];

const slugAliases: Record<string, string> = {
  "human-in-the-loop-proposal-agent": "human-in-the-loop-proposal-swarm",
  "local-mcp-bi-analyst": "privacy-first-sql-mcp-analyst",
  "autonomous-code-reviewer": "autonomous-cicd-code-reviewer",
  "omni-channel-support-swarm": "hierarchical-support-swarm",
};

export const getProject = (slug?: string) => {
  if (!slug) return undefined;
  const target = slugAliases[slug] || slug;
  return projects.find((p) => p.slug === target);
};
export const featuredProjects = projects.filter((p) => p.featured);
export const clientProjects = projects.filter((p) => p.clientWork);
export const demoProjects = projects.filter((p) => !p.clientWork);
