import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { toast } from "sonner";

import heroAsset from "@/assets/profile.png.asset.json";
import aiSocialMediaAutomationImage from "@/assets/ai-social-media-automation-system.png";
import affiliateDealsImage from "@/assets/affiliate-deals-platform.png";
import dataScienceLearningImage from "@/assets/data-science-learning-platform.png";
import madrassaWebsiteImage from "@/assets/madrassa-umm-e-hani-lil-banat.png";
import masoftImage from "@/assets/masoft.png";
import personalPortfolioImage from "@/assets/personal-portfolio-website.png";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const standardEase: [number, number, number, number] = [0.2, 0, 0, 1];

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: standardEase } },
};

const aboutCards = [
  {
    title: "Background",
    content:
      "I’m currently pursuing Software Engineering with a strong focus on practical application rather than just theory. My interest in technology started with curiosity about how systems work, which quickly evolved into building my own solutions.",
  },
  {
    title: "Journey",
    content:
      "Over time, I moved from learning basic programming to developing full front-end interfaces, automation workflows, and integrating AI into real-world use cases. Alongside academics, I’ve taken initiative in projects, leadership roles, and independent learning to sharpen my technical and problem-solving skills.",
  },
  {
    title: "What I specialize in",
    content:
      "I specialize in front-end development, AI automation, and building systems that improve efficiency. This includes creating responsive web interfaces, automating repetitive processes, and applying AI models to practical problems.",
  },
  {
    title: "What makes me different",
    content:
      "What sets me apart is my focus on practical execution. I don’t just learn concepts — I build systems that work. I combine development, automation, and AI to create solutions that are not only functional but also impactful and scalable.",
  },
];

const keyStrengths = [
  "Problem-Solving & Analytical Thinking",
  "AI Automation & Workflow Design",
  "Front-End Development & UI Building",
];

const technicalSkillCards = [
  {
    title: "Front-End Development (Vibe Coding)",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Programming Knowledge",
    items: ["C", "C++", "Python"],
  },
  {
    title: "AI & ML Tools",
    items: ["Google Colab - Jupyter Notebook", "Microsoft Azure", "Hugging Face", "LangChain"],
  },
  {
    title: "AI Automation & Workflow Engineering",
    items: ["n8n", "Make.com", "Zapier", "Meta Business Suite"],
  },
  {
    title: "Graphic Designing",
    items: ["Canva"],
  },
  {
    title: "Prompt Engineering",
    items: ["Prompt Design", "Context Structuring", "AI Output Optimization"],
  },
];

const softSkills = ["Leadership & Initiative", "Teamwork & Collaboration", "Communication & Presentation", "Networking & Relationship Building"];

const projects = [
  {
    name: "MASoft & MASoft AI",
    desc: "My first vibe-coded project — a static website and AI sub-platform showcasing my vision for tech, AI, and education.",
    problem: "Demonstrates how a centralized platform for AI tools, tech resources, and education can be structured and presented.",
    role: "Creator & Developer — designed and built the static website as a learning project, later extended with an AI subdomain.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Static website with modern dark UI and structured sections",
      "Conceptual tech & AI ecosystem layout",
      "Separate AI subdomain for experimentation",
      "Responsive design and clean navigation",
    ],
    impact: [
      "First complete website built from scratch (Vibe Coding)",
      "Strong foundation in front-end development",
      "Represents my passion for technology, AI, and education",
    ],
    links: [
      { label: "MASoft", url: "https://masoft.online/" },
      { label: "MASoft AI", url: "https://ai.masoft.online/" },
    ],
    status: "Live",
    thumbnail: masoftImage,
  },
  {
    name: "AI Social Media Automation System (AI Squad X – Team)",
    desc: "A multi-platform automation system for managing and posting content across social media.",
    problem: "Manual content posting is repetitive, time-consuming, and difficult to scale consistently.",
    role: "Designed and built automation workflows integrating multiple platforms and tools.",
    stack: ["n8n", "Make.com", "Zapier", "Meta Business Suite"],
    features: [
      "Cross-platform automation (Facebook, Instagram, WhatsApp, X)",
      "Scheduled and trigger-based workflows",
      "Integration with content pipelines",
    ],
    impact: [
      "Reduced manual workload significantly",
      "Improved consistency in content publishing",
      "Demonstrates real-world automation capability",
    ],
    links: [{ label: "Workflows (Demo)", url: "https://drive.google.com/drive/folders/1XyT-V-kparb_7o5YJrz6yxUMJ4hHpvZx?usp=drive_link" }],
    status: "Demo",
    thumbnail: aiSocialMediaAutomationImage,
  },
  {
    name: "Affiliate Deals Platform (WinDeals)",
    desc: "A curated deals platform built to showcase and monetize affiliate products through a clean and simple web interface.",
    problem: "Users often struggle to find reliable, organized, and relevant deals across different platforms.",
    role: "Designed and developed the complete website, including layout, structure, and deployment.",
    stack: ["HTML", "CSS", "JavaScript", "Hosting & Domain Integration"],
    features: [
      "Clean and user-friendly UI for browsing deals",
      "Structured product listing system",
      "Affiliate link integration for monetization",
    ],
    impact: [
      "Built a monetization-ready website",
      "Demonstrates full-cycle web development (design → deploy)",
      "Foundation for affiliate-based income model",
    ],
    links: [{ label: "Live Link", url: "https://windeals.me/" }],
    status: "Live",
    thumbnail: affiliateDealsImage,
  },
  {
    name: "Personal Portfolio Website",
    desc: "This portfolio website — designed to present my skills, projects, and journey in a clean and modern way.",
    problem: "Provides a centralized platform to showcase my work, skills, and projects professionally.",
    role: "Designed and developed the full front-end, structure, and content strategy.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Structured sections for projects, skills, and experience",
      "Modern dark-themed UI with gradient design",
      "Optimized for clarity and professional presentation",
    ],
    impact: [
      "Strengthens my personal brand",
      "Improves visibility for opportunities (jobs, freelance, collaborations)",
      "Serves as a central hub for all my work",
    ],
    links: [{ label: "Current Website URL", url: "#home" }],
    status: "Live",
    thumbnail: personalPortfolioImage,
  },
  {
    name: "Data Science Learning Platform",
    desc: "A personal learning platform where I document and share my journey in data science with resources, code, and projects.",
    problem: "Learning data science can be scattered and unstructured — this platform organizes learning into one place.",
    role: "Designing and building the platform while learning and applying data science concepts.",
    stack: ["HTML", "CSS", "JavaScript", "Future: Python", "Future: Data Science tools"],
    features: ["Learning resources and notes", "Code templates and practice projects", "Structured learning path"],
    impact: [
      "Reinforces my own learning through building",
      "Will serve as a complete data science learning hub",
    ],
    links: [{ label: "Planned Link", url: "https://learndatascience.tech/" }],
    status: "In Development",
    thumbnail: dataScienceLearningImage,
  },
  {
    name: "Madrassa Umm e Hani Lil Banat Website",
    desc: "A website for a non-profit Islamic educational institute to provide information about programs, admissions, and activities.",
    problem: "Provides an online presence for the madrassa, making information accessible to students and parents.",
    role: "Designing and developing the website with structured content and multi-language support.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Informational pages (Programs, Admissions, Teachers, Contact)",
      "Multi-language support (Arabic, Urdu, English)",
      "Clean and accessible UI for all users",
    ],
    impact: [
      "Supports a real-world non-profit educational institute",
      "Demonstrates ability to build meaningful, community-focused projects",
    ],
    links: [{ label: "Live / Preview Link", url: "https://umm-e-hani.replit.app/" }],
    status: "In Development",
    thumbnail: madrassaWebsiteImage,
  },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedIn.com/in/se-muhammad-awais/" },
  { icon: Github, label: "GitHub", url: "https://github.com/Think-Gleam" },
  { icon: Youtube, label: "YouTube", url: "https://youtube.com/@imengineerawais" },
  { icon: Globe, label: "X", url: "https://x.com/@alpha_awais" },
  { icon: Instagram, label: "Instagram", url: "https://instagram.com/se_muhammad_awais" },
  { icon: Facebook, label: "Facebook", url: "https://facebook.com/se.muhammad.awais" },
];

const Index = () => {
  useEffect(() => {
    document.title = "Muhammad Awais | AI Automation Portfolio";
    const desc = "Portfolio of Muhammad Awais: front-end development, AI automation workflows, and scalable software systems.";
    const descTag = document.querySelector('meta[name="description"]') || document.createElement("meta");
    descTag.setAttribute("name", "description");
    descTag.setAttribute("content", desc);
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(descTag);

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", window.location.href);
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical);

    const hash = window.location.hash;
    if (hash.length > 1) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-background pb-20">
      <SiteHeader />

      <section className="container grid gap-8 py-16 lg:grid-cols-5 lg:py-24" id="home">
        <motion.div className="space-y-7 lg:col-span-3" initial="hidden" animate="show" variants={reveal}>
          <h2 className="font-mono text-3xl font-semibold uppercase tracking-[0.2em] text-foreground md:text-5xl">MUHAMMAD AWAIS</h2>
          <h1 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            I Build Smart Systems That Automate Work, Scale Ideas, and Deliver Results.
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
            Software Engineering student specializing in Front-End Development, AI Automation, and real-world AI solutions —
            helping individuals and businesses turn ideas into functional, scalable systems.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero" asChild>
              <a href="#projects">
                View My Work <ArrowRight />
              </a>
            </Button>
            <Button variant="shell" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>

        <motion.div className="node-card relative overflow-hidden p-4 lg:col-span-2" initial="hidden" animate="show" variants={reveal}>
          <div className="flex h-full min-h-[300px] items-center justify-center rounded-xl border border-panel-border bg-panel-strong/70 p-6">
            <img
              src={heroAsset.url}
              alt="Muhammad Awais, freelance AI automation engineer"
              loading="lazy"
              className="h-56 w-56 rounded-full border border-panel-border object-cover object-center shadow-elevated md:h-72 md:w-72"
            />
          </div>
        </motion.div>
      </section>

      <section id="about" className="container space-y-6">
        <motion.h2 className="text-2xl font-semibold tracking-tight md:text-3xl" initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
          About Me
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-2">
          {aboutCards.map((card) => (
            <motion.article key={card.title} className="node-card p-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
              <h3 className="text-xl font-medium">{card.title}</h3>
              <p className="mt-3 text-muted-foreground">{card.content}</p>
            </motion.article>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <motion.article className="node-card p-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
            <h3 className="text-xl font-medium">Key Strengths</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {keyStrengths.map((strength) => (
                <li key={strength}>• {strength}</li>
              ))}
            </ul>
          </motion.article>
          <motion.article className="node-card p-6 text-muted-foreground" initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
            Outside of projects, I explore emerging technologies, write technical ideas, and collaborate with builders to improve and ship better systems.
          </motion.article>
        </div>
      </section>

      <section id="skills" className="container space-y-6 pt-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Skills & Tools</h2>

        <div className="space-y-4">
          <h3 className="font-mono text-sm text-muted-foreground">Technical Skills</h3>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {technicalSkillCards.map((group) => (
              <article key={group.title} className="node-card p-5">
                <h4 className="font-medium">{group.title}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-mono text-sm text-muted-foreground">Soft Skills</h3>
          <article className="node-card p-5">
            <ul className="space-y-2 text-muted-foreground">
              {softSkills.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="projects" className="container space-y-6 pt-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Projects</h2>
        <div className="space-y-5">
          {projects.map((project) => (
            <article key={project.name} className="rounded-3xl border border-panel-border bg-panel-strong/40 p-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="node-card group p-6">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <p className="mt-1 text-muted-foreground">{project.desc}</p>
                    </div>
                    <span className="rounded-md border border-success/40 bg-success/10 px-2 py-1 font-mono text-xs text-success">
                      Status: {project.status}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Problem:</span> {project.problem}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Role:</span> {project.role}
                  </p>

                  <div className="mt-4">
                    <p className="font-mono text-xs text-muted-foreground">Tech Stack</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="tech-tag group-hover:text-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-mono text-xs text-muted-foreground">Key Features</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {project.features.map((line) => (
                        <li key={line}>• {line}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="font-mono text-xs text-muted-foreground">Impact / Results</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {project.impact.map((line) => (
                        <li key={line}>• {line}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="system-link">
                        {link.label} <ArrowUpRight className="size-4" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="node-card overflow-hidden p-3">
                  <img
                    src={project.thumbnail}
                    alt={`${project.name} preview image`}
                    loading="lazy"
                    className="h-full min-h-[260px] w-full rounded-lg border border-panel-border bg-panel object-contain"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="container grid gap-4 pt-16 md:grid-cols-2">
        <h2 className="md:col-span-2 text-2xl font-semibold md:text-3xl">Experience</h2>
        <article className="node-card p-6">
          <h3 className="text-xl font-semibold">Founder & AI Automation Developer</h3>
          <p className="mt-1 font-mono text-sm text-muted-foreground">MASoft & MASoft Technologies • Start – Present</p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Designed and deployed websites and digital service platforms.</li>
            <li>• Built AI automation workflows across social media and content systems.</li>
            <li>• Developed AI-powered tools, agents, and practical integrations.</li>
            <li>• Led execution from architecture to deployment.</li>
          </ul>
        </article>
        <article className="node-card p-6">
          <h3 className="text-xl font-semibold">Front-End Developer & AI Automation Specialist</h3>
          <p className="mt-1 font-mono text-sm text-muted-foreground">Independent / Freelance • Ongoing</p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Collaborated on programming and development projects.</li>
            <li>• Built responsive front-end interfaces for production use.</li>
            <li>• Implemented automation for content, social media, and productivity systems.</li>
          </ul>
        </article>
      </section>

      <section id="services" className="container space-y-6 pt-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Services</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Front-End Development",
              desc: "I build clean, responsive websites using modern front-end technologies with a focus on simplicity, usability, and performance.",
              outcomes: ["Responsive and user-friendly design", "Clean and structured code", "Scalable front-end foundation"],
            },
            {
              title: "AI Automation & Workflow Systems",
              desc: "I create automation workflows that connect tools and platforms to reduce manual work and improve efficiency.",
              outcomes: ["Automated content and task workflows", "Better consistency across platforms", "Time-saving systems for daily operations"],
            },
            {
              title: "AI Development & Integrations",
              desc: "I work with AI tools and models to build simple chatbots, agents, and automation-based solutions.",
              outcomes: ["Basic AI-powered features", "Workflow-based AI integrations", "Practical use of modern AI tools"],
            },
            {
              title: "Collaboration in Development Projects",
              desc: "I collaborate with developers, students, and teams to build and improve digital projects.",
              outcomes: ["Support in development tasks", "Clear communication and teamwork", "Reliable contribution to projects"],
            },
          ].map((service) => (
            <article key={service.title} className="node-card p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.desc}</p>
              <p className="mt-4 font-mono text-xs text-muted-foreground">What You Get</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {service.outcomes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container grid gap-4 pt-16 md:grid-cols-2">
        <article className="node-card p-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Bachelor’s in Software Engineering</span>
              <br />Virtual University of Pakistan (2024 – Ongoing)
              <br />4 / 8 Semester • CGPA: 3.85 / 4.0
            </p>
            <p>
              <span className="font-medium text-foreground">Higher Secondary School</span>
              <br />Essar College of Sciences, Katlang (2022 – 2024)
              <br />Score: 1130 / 1200 — Ranked 9th (BISE Mardan)
            </p>
            <p>
              <span className="font-medium text-foreground">Secondary School</span>
              <br />Ghazali School, Katlang (2020 – 2022)
              <br />Score: 1065 / 1100 — Ranked 4th (BISE Mardan)
            </p>
          </div>
        </article>
        <article className="node-card space-y-6 p-6">
          <div>
            <h2 className="text-2xl font-semibold">Certifications</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• AI Automation with Make.com & n8n (In Progress)</li>
              <li>• IBM AI Developer Specialization — Coursera (Verification link to be added)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Achievements / Stats</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>• Projects Completed: 5+ real-world projects</li>
              <li>• Work Experience: Independent & personal projects</li>
              <li>• Automation Impact: Saving hours of manual work through workflows</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="container space-y-6 pt-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Collaboration Feedback</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="node-card p-6 text-muted-foreground">
            “Delivered a well-structured and functional solution with strong attention to detail. Demonstrates solid
            problem-solving skills and a clear understanding of modern development and automation tools.”
            <p className="mt-4 font-mono text-xs">— Project Collaborator</p>
          </article>
          <article className="node-card p-6 text-muted-foreground">
            “Great to work with — proactive, communicative, and focused on building practical solutions. Strong ability to
            turn ideas into working systems.”
            <p className="mt-4 font-mono text-xs">— Team Partner</p>
          </article>
        </div>
      </section>

      <section id="contact" className="container space-y-6 pt-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
        <p className="max-w-3xl text-muted-foreground">
          Have an idea, project, or automation need? Let’s build something efficient, scalable, and impactful together.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <form
            className="node-card space-y-4 p-6"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Message queued. I will get back to you soon.");
            }}
          >
            <div>
              <label htmlFor="name" className="mb-2 block font-mono text-xs text-muted-foreground">
                Name
              </label>
              <input id="name" required className="h-11 w-full rounded-md border border-panel-border bg-input px-3 text-foreground" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-xs text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="h-11 w-full rounded-md border border-panel-border bg-input px-3 text-foreground"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block font-mono text-xs text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full rounded-md border border-panel-border bg-input px-3 py-2 text-foreground"
              />
            </div>
            <Button type="submit" variant="hero" className="w-full">
              Send Message
            </Button>
          </form>

          <article className="node-card flex h-full flex-col space-y-5 p-6">
            <p className="font-mono text-base text-muted-foreground">Follow Us On</p>
            <p className="text-sm text-muted-foreground">Open to opportunities — reach out anytime.</p>
            <div className="grid flex-1 content-start grid-cols-1 gap-3 sm:grid-cols-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-panel-border bg-panel-strong px-4 py-3 text-muted-foreground transition-colors duration-200 ease-standard hover:border-primary hover:text-foreground"
                    aria-label={social.label}
                  >
                    <Icon className="size-5" />
                    <span className="font-mono text-sm">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default Index;
