/**
 * Public identity facts used by JSON-LD and the UI. Alias-free and asset-free so build
 * scripts can import it. Keep every claim here verifiable (profiles, certificates).
 */
export const identity = {
  name: "Muhammad Awais",
  alternateName: ["Muhammad Awais – AI Automation Engineer", "Awais", "imawais", "imawais.engineer"],
  /** Separates this Muhammad Awais from others doing n8n/AI work (e.g. avais.cloud). */
  disambiguatingDescription:
    "Muhammad Awais of imawais.engineer: Pakistan-based freelance AI automation engineer and n8n expert, GitHub imawais-engineer.",
  jobTitle: "AI Automation Engineer & n8n Expert",
  description:
    "Freelance AI Automation Engineer and n8n expert building n8n workflow automation, AI agents, CRM and lead qualification automation and custom MCP servers for agencies, SaaS teams and small businesses.",
  email: "alpha.se.awais@gmail.com",
  /** Root-relative; made absolute in JSON-LD. */
  image: "/profile.webp",
  country: { code: "PK", name: "Pakistan" },
  links: {
    upwork: "https://www.upwork.com/freelancers/awaisai",
    fiverr: "https://www.fiverr.com/mawais_pk",
    linkedin: "https://linkedin.com/in/imawais-engineer",
    github: "https://github.com/imawais-engineer",
    contra: "https://contra.com/imawais_eningeer",
    // TODO(Awais): add your n8n creator profile URL (https://n8n.io/creators/<handle>) once approved.
  },
  knowsAbout: [
    "AI automation",
    "n8n workflow automation",
    "Make.com automation",
    "AI agents",
    "Multi-agent systems",
    "LangGraph",
    "Model Context Protocol (MCP)",
    "Retrieval-augmented generation (RAG)",
    "Lead qualification automation",
    "CRM automation",
    "Business process automation",
    "Python",
    "TypeScript",
    "React",
  ],
  // TODO(Awais): add your university as `alumniOf` (BS Software Engineering) if you want it public.
  /** Names only; shown on /about. */
  credentials: [
    "n8n Certified — Essentials & APIs",
    "GenAI Workflow Orchestration — DeepLearning.AI",
  ],
} as const;
