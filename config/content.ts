import {
  Bot,
  Cloud,
  Code2,
  Hammer,
  HeartHandshake,
  Palette,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react"

export interface ServiceItem {
  title: string
  description: string
  icon: LucideIcon
  highlights: string[]
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

export interface ValueItem {
  title: string
  description: string
}

export interface StatItem {
  value: string
  label: string
}

export const services: ServiceItem[] = [
  {
    title: "Product Engineering",
    description:
      "Full-stack product development from architecture to production—web apps, APIs, and platforms built to ship and scale.",
    icon: Code2,
    highlights: ["Architecture & system design", "Web & mobile applications", "API design & integration"],
  },
  {
    title: "AI & Data",
    description:
      "Intelligent systems that turn data into decisions—LLM integrations, pipelines, and ML-powered features in production.",
    icon: Bot,
    highlights: ["LLM & agent integrations", "Data pipelines & analytics", "ML feature development"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Infrastructure that moves as fast as your product—CI/CD, observability, and cloud-native deployments.",
    icon: Cloud,
    highlights: ["CI/CD & automation", "Cloud architecture", "Monitoring & reliability"],
  },
  {
    title: "Design & UX",
    description:
      "Interfaces that developers and users both love—design systems, prototypes, and polished product experiences.",
    icon: Palette,
    highlights: ["UX research & prototyping", "Design systems", "Developer-friendly UI"],
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map the problem, define scope, and align on outcomes. No bloated specs—just clarity on what to build and why.",
    icon: Search,
  },
  {
    step: "02",
    title: "Build",
    description:
      "Small batches, tight feedback loops. We ship working software early and iterate with your team in the loop.",
    icon: Hammer,
  },
  {
    step: "03",
    title: "Ship",
    description:
      "Production-ready delivery with CI/CD, monitoring, and documentation. Your software goes live, not into a backlog.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Accompany",
    description:
      "Launch is the starting line. We stay alongside your team—supporting daily operations, training your people, and shipping improvements as your product evolves.",
    icon: HeartHandshake,
  },
]

export const values: ValueItem[] = [
  {
    title: "Speed with intent",
    description:
      "Citus means swift—not reckless. We move fast because we've stirred the work into motion with clear direction.",
  },
  {
    title: "Ship, don't stall",
    description:
      "Working software beats perfect plans. We deliver in small batches and keep momentum through every release.",
  },
  {
    title: "Own the outcome",
    description:
      "We're partners, not ticket-takers. We care about what ships, how it performs, and whether it solves the problem.",
  },
  {
    title: "Code-native craft",
    description:
      "Clean architecture, modern tooling, and developer experience that scales with your team long after handoff.",
  },
]

export const stats: StatItem[] = [
  { value: "2–4 wk", label: "Typical first delivery" },
  { value: "100%", label: "Production-focused output" },
  { value: "End-to-end", label: "Design through deployment" },
  { value: "Citus", label: "Speed born from motion" },
]

export const principles: ValueItem[] = [
  {
    title: "Small batches",
    description: "Break work into shippable increments. Each cycle produces something real you can evaluate and use.",
  },
  {
    title: "Ship continuously",
    description: "CI/CD from day one. Every merge moves toward production, not toward a quarterly release gate.",
  },
  {
    title: "Own outcomes",
    description: "We measure success by what lands in users' hands—not by story points closed or hours billed.",
  },
  {
    title: "Transparent collaboration",
    description: "Direct access to the engineers building your product. No layers, no translation loss.",
  },
]

export const engagementModels: ValueItem[] = [
  {
    title: "Project sprints",
    description:
      "Scoped engagements with defined deliverables. Ideal for MVPs, feature builds, or targeted technical work.",
  },
  {
    title: "Embedded team",
    description:
      "Citus engineers work alongside your team for sustained product development—an extension of your engineering org.",
  },
  {
    title: "Technical advisory",
    description:
      "Architecture reviews, stack decisions, and roadmap guidance when you need senior technical direction fast.",
  },
]

export const contactTopics: string[] = [
  "What you're building and who it's for",
  "Current stage (idea, MVP, scaling)",
  "Timeline and budget range",
  "Technical stack or constraints",
]
