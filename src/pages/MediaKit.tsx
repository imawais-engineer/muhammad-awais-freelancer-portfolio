import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Bot,
  Braces,
  Check,
  Cloud,
  Code2,
  Cpu,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Users,
  Workflow,
  X,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

import masoftImage from "@/assets/masoft.webp";
import aiSocialMediaAutomationImage from "@/assets/ai-social-media-automation-system.webp";
import affiliateDealsImage from "@/assets/affiliate-deals-platform.webp";
import personalPortfolioImage from "@/assets/personal-portfolio-website.webp";
import { site } from "@/data/site";
import dataScienceLearningImage from "@/assets/data-science-learning-platform.webp";

const standardEase: [number, number, number, number] = [0.2, 0, 0, 1];
const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: standardEase } },
};

const services = [
  { icon: Bot, title: "AI Automation", desc: "Automation workflows that reduce repetitive manual processes." },
  { icon: Cpu, title: "AI Integrations", desc: "Connecting AI capabilities with applications, workflows, and business processes." },
  { icon: Workflow, title: "Workflow Engineering", desc: "Designing automated processes using tools such as n8n, Make.com, and Zapier." },
  { icon: Code2, title: "Web Development", desc: "Responsive, modern front-end websites and digital interfaces." },
  { icon: Blocks, title: "AI-Powered Solutions", desc: "Practical AI tools, assistants, and automation-based systems." },
  { icon: Users, title: "Technical Collaboration", desc: "Working with developers, teams, startups, and organizations on digital projects." },
];

const stack = [
  { icon: Braces, group: "Development", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"] },
  { icon: Cpu, group: "AI / ML", items: ["AI APIs", "LangChain", "Hugging Face", "Jupyter Notebook", "Google Colab"] },
  { icon: Workflow, group: "Automation", items: ["n8n", "Make.com", "Zapier", "Meta Business Suite"] },
  { icon: Cloud, group: "Cloud / Infrastructure", items: ["Microsoft Azure"] },
];

const work = [
  {
    name: "MASoft & MASoft AI",
    desc: "Technology, AI, and education platform with a separate AI sub-platform.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Live",
    image: masoftImage,
    links: [
      { label: "MASoft", url: "https://masoft.online/" },
      { label: "MASoft AI", url: "https://ai.masoft.online/" },
    ],
  },
  {
    name: "AI Social Media Automation System",
    desc: "Multi-platform automation workflows for scheduling and publishing content.",
    stack: ["n8n", "Make.com", "Zapier", "Meta Business Suite"],
    status: "Demo",
    image: aiSocialMediaAutomationImage,
    links: [
      {
        label: "Workflows (Demo)",
        url: "https://drive.google.com/drive/folders/1XyT-V-kparb_7o5YJrz6yxUMJ4hHpvZx?usp=drive_link",
      },
    ],
  },
  {
    name: "WinDeals",
    desc: "Affiliate deals platform with a structured product listing system.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Live",
    image: affiliateDealsImage,
    links: [{ label: "windeals.me", url: "https://windeals.me/" }],
  },
  {
    name: "Personal Portfolio",
    desc: "My professional portfolio and personal brand platform.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Live",
    image: personalPortfolioImage,
    links: [{ label: "imawais.engineer", url: "https://www.imawais.engineer/" }],
  },
  {
    name: "Data Science Learning Platform",
    desc: "Learning and resource platform for data science, currently in development.",
    stack: ["HTML", "CSS", "JavaScript", "Python (planned)"],
    status: "In Development",
    image: dataScienceLearningImage,
    links: [{ label: "learndatascience.tech", url: "https://learndatascience.tech/" }],
  },
];

const partnerships = [
  {
    title: "Affiliate Partnerships",
    desc: "Promoting relevant SaaS, AI, developer, automation, and technology products through appropriate content and recommendations.",
  },
  {
    title: "Referral Partnerships",
    desc: "Introducing relevant products and services to businesses, developers, startups, and professional contacts when there is a genuine fit.",
  },
  {
    title: "Sponsored / Educational Content",
    desc: "Collaboration around useful technology-focused content, tutorials, demonstrations, or educational resources.",
  },
  {
    title: "Product / Tool Collaborations",
    desc: "Practical collaborations involving AI, automation, developer tools, SaaS, and productivity technology.",
  },
  {
    title: "Technical Partnerships",
    desc: "Collaboration on technology projects, integrations, automation systems, and digital products.",
  },
];

const channels = [
  { icon: Globe, label: "Website", value: "imawais.engineer", url: "https://www.imawais.engineer/" },
  { icon: Linkedin, label: "LinkedIn", value: "se-muhammad-awais", url: "https://linkedin.com/in/se-muhammad-awais/" },
  { icon: Github, label: "GitHub", value: "Think-Gleam", url: "https://github.com/Think-Gleam" },
  { icon: Youtube, label: "YouTube", value: "@imengineerawais", url: "https://youtube.com/@imengineerawais" },
  { icon: Globe, label: "X", value: "@alpha_awais", url: "https://x.com/alpha_awais" },
  { icon: Instagram, label: "Instagram", value: "se_muhammad_awais", url: "https://instagram.com/se_muhammad_awais" },
];

const audienceProfile = [
  "Developers",
  "Software engineers",
  "AI enthusiasts",
  "Startup founders",
  "Small and medium-sized businesses",
  "Technology professionals",
  "Entrepreneurs",
  "Students and builders",
  "Teams interested in automation and AI",
];

const goodFit = [
  "AI SaaS",
  "Developer tools",
  "Automation platforms",
  "Productivity software",
  "Business software",
  "Cloud technology",
  "No-code / low-code platforms",
  "Technical education",
  "SaaS products",
  "Tools useful to developers and businesses",
];

const notFit = [
  "Irrelevant consumer products",
  "Misleading products",
  "Products that conflict with professional credibility",
  "Products without clear user value",
];

const whyWorkWithMe = [
  "Practical builder rather than purely theoretical",
  "AI, automation, and development in one skill set",
  "Experience building real, shipped projects",
  "Independent execution from idea to deployment",
  "Technical understanding of the tools I recommend",
  "Ability to explain technology in plain language",
  "Flexible collaboration models",
  "Focus on practical business outcomes",
];

const businessInfo = [
  { label: "Name", value: "Muhammad Awais" },
  { label: "Professional Title", value: site.title },
  { label: "Business Type", value: "Independent Professional / Solopreneur" },
  { label: "Location", value: "Pakistan" },
  { label: "Primary Website", value: "https://www.imawais.engineer/", url: "https://www.imawais.engineer/" },
  { label: "Focus", value: "AI Automation • AI Integrations • Workflow Engineering • Web Development" },
  {
    label: "Availability",
    value: "Open to relevant partnerships, freelance projects, collaborations, and technology opportunities.",
  },
];

const SectionHeading = ({ index, title, subtitle }: { index: string; title: string; subtitle?: string }) => (
  <div className="space-y-2">
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{index}</p>
    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
    {subtitle ? <p className="max-w-3xl text-muted-foreground">{subtitle}</p> : null}
  </div>
);

const MediaKit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Muhammad Awais Media Kit | Brand Assets & Profile"
        description="Media and partnership profile for Muhammad Awais: official bio, brand assets, professional profile and collaboration details."
        path="/media-kit"
      />
      <SiteHeader />


      <main id="main" className="pb-8">
        <section className="container py-14 md:py-20">
          <motion.div className="max-w-3xl space-y-6" initial="hidden" animate="show" variants={reveal}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Media Kit</p>
            <h1 className="font-mono text-3xl font-semibold uppercase tracking-[0.2em] md:text-5xl">Muhammad Awais</h1>
            <p className="text-xl font-medium text-foreground md:text-2xl">{site.title}</p>
            <p className="text-base text-muted-foreground md:text-lg">
              I build smart systems that automate work, connect AI with real-world workflows, and turn ideas into
              functional digital solutions.
            </p>
            <p className="text-base text-muted-foreground">
              About Muhammad Awais, my work, audience, capabilities, and partnership opportunities.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" asChild>
                <Link to="/#contact">
                  Work With Me <ArrowRight />
                </Link>
              </Button>
              <Button variant="shell" asChild>
                <Link to="/#projects">View Portfolio</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {["AI Automation", "AI Integrations", "Workflow Engineering", "Front-End Development"].map((badge) => (
                <span key={badge} className="tech-tag">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container space-y-5 pt-4">
          <SectionHeading index="01" title="About" />
          <motion.div
            className="node-card max-w-3xl space-y-4 p-6 text-muted-foreground md:p-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
          >
            <p>
              I’m Muhammad Awais, an independent AI automation engineer with a Software Engineering background and a
              strong bias toward practical execution. My work sits where development, automation, and AI overlap.
            </p>
            <p>
              Day to day, I build front-end interfaces, design automation workflows across tools like n8n, Make.com, and
              Zapier, and integrate AI capabilities into applications and business processes. I learn by building — most
              of what I know comes from shipping real projects rather than studying them in the abstract.
            </p>
            <p>
              I work independently with individuals, startups, and small businesses that want to reduce manual work,
              connect their tools, and get useful systems into production without a large team or long timeline.
            </p>
          </motion.div>
        </section>

        <section className="container space-y-5 pt-16">
          <SectionHeading index="02" title="What I Do" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  className="node-card p-6 hover:shadow-elevated"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={reveal}
                >
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{service.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="container space-y-5 pt-16">
          <SectionHeading
            index="03"
            title="Technology Stack"
            subtitle="Technologies and tools I work with across development, AI, automation, and cloud."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {stack.map((group) => {
              const Icon = group.icon;
              return (
                <motion.article
                  key={group.group}
                  className="node-card p-6"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={reveal}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="text-lg font-semibold">{group.group}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tech-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="container space-y-5 pt-16">
          <SectionHeading index="04" title="Selected Projects" />
          <div className="grid gap-4 md:grid-cols-2">
            {work.map((project) => (
              <motion.article
                key={project.name}
                className="node-card flex flex-col overflow-hidden p-5"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={reveal}
              >
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  className="h-44 w-full rounded-xl border border-panel-border bg-panel object-cover object-top"
                />
                <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <span className="rounded-md border border-success/40 bg-success/10 px-2 py-1 font-mono text-xs text-success">
                    {project.status}
                  </span>
                </div>
                <p className="mt-2 text-base text-muted-foreground">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-4 pt-1">
                  {project.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="system-link">
                      {link.label} <ArrowUpRight className="size-4" />
                    </a>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="container space-y-5 pt-16">
          <SectionHeading
            index="05"
            title="Partnership Opportunities"
            subtitle="Partnerships are evaluated on relevance and real value to my audience and clients — not on volume."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {partnerships.map((item) => (
              <motion.article
                key={item.title}
                className="node-card p-6 hover:shadow-elevated"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={reveal}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="container space-y-5 pt-16">
          <SectionHeading index="06" title="Audience" />
          <div className="grid gap-4 lg:grid-cols-3">
            <motion.article
              className="node-card p-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reveal}
            >
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Current Audience</p>
              <p className="mt-3 text-3xl font-semibold text-foreground">0–1,000</p>
              <p className="mt-1 text-base text-muted-foreground">monthly website traffic</p>
              <p className="mt-4 text-base text-muted-foreground">
                I’m currently growing my professional audience through portfolio content, technology projects, social
                channels, networking, referrals, and educational resources.
              </p>
            </motion.article>
            <motion.div
              className="grid gap-3 sm:grid-cols-2 lg:col-span-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reveal}
            >
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-panel-border bg-panel-strong px-4 py-3 text-muted-foreground transition-colors duration-200 ease-standard hover:border-primary hover:text-foreground"
                  >
                    <Icon className="size-5 shrink-0" aria-hidden="true" />
                    <span className="min-w-0 font-mono text-sm">
                      <span className="block text-xs text-muted-foreground">{channel.label}</span>
                      <span className="block truncate">{channel.value}</span>
                    </span>
                  </a>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="container space-y-5 pt-16">
          <SectionHeading
            index="07"
            title="Target / Professional Audience"
            subtitle="The people my work and content are intended for. These are positioning descriptions, not verified analytics."
          />
          <motion.div
            className="node-card p-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
          >
            <div className="flex flex-wrap gap-2">
              {audienceProfile.map((item) => (
                <span key={item} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container space-y-5 pt-16">
          <SectionHeading index="08" title="Partner Fit" />
          <div className="grid gap-4 md:grid-cols-2">
            <motion.article
              className="node-card p-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reveal}
            >
              <h3 className="text-lg font-semibold">Good Fit For</h3>
              <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                {goodFit.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
            <motion.article
              className="node-card p-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reveal}
            >
              <h3 className="text-lg font-semibold">Not a Good Fit For</h3>
              <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                {notFit.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <X className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </section>

        <section className="container space-y-5 pt-16">
          <SectionHeading index="09" title="Why Work With Me" />
          <motion.div
            className="node-card grid gap-3 p-6 md:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
          >
            {whyWorkWithMe.map((item) => (
              <p key={item} className="flex items-start gap-2 text-base text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </p>
            ))}
          </motion.div>
        </section>

        <section className="container space-y-5 pt-16">
          <SectionHeading index="10" title="Business Information" />
          <motion.dl
            className="node-card divide-y divide-panel-border p-6 md:p-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
          >
            {businessInfo.map((row) => (
              <div key={row.label} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-4">
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{row.label}</dt>
                <dd className="break-words text-base text-foreground">
                  {row.url ? (
                    <a href={row.url} target="_blank" rel="noreferrer" className="text-primary underline-offset-4 hover:underline">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </motion.dl>
        </section>

        <section className="container pt-16">
          <motion.div
            className="node-card space-y-5 p-6 md:p-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">11</p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Let’s Build Something Useful</h2>
            <p className="max-w-3xl text-muted-foreground">
              Interested in working together, promoting a relevant product, building an automation system, or exploring
              a technology partnership? Get in touch.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" asChild>
                <Link to="/#contact">
                  Contact Me <ArrowRight />
                </Link>
              </Button>
              <Button variant="shell" asChild>
                <a href="https://linkedin.com/in/se-muhammad-awais/" target="_blank" rel="noreferrer">
                  View LinkedIn <ArrowUpRight />
                </a>
              </Button>
              <Button variant="shell" asChild>
                <Link to="/#projects">View Portfolio</Link>
              </Button>
            </div>
            <p className="pt-2 text-base text-muted-foreground">
              Engagements are governed by my{" "}
              <Link to="/terms" className="text-primary underline-offset-4 hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default MediaKit;
