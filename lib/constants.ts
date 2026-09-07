export interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

export const NAV_LINKS: NavItem[] = [
  { name: "Capabilities", href: "#capabilities" },
  { name: "Engine", href: "#process" },
  { name: "Work", href: "#work" },
  { name: "Stack", href: "#stack" },
];

export interface Capability {
  id: string;
  figure: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  status: "active" | "optimized" | "synced";
  metric: {
    label: string;
    value: string;
  };
  tags: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    id: "immersive-engineering",
    figure: "FIG 0.1",
    title: "Real-Time Digital Interfaces",
    subtitle: "Fluid 60fps micro-interactions and GPU-accelerated motion.",
    description: "Architected with Framer Motion, WebGL shaders, and high-frequency React state reconciliation.",
    badge: "Edge Motion",
    status: "active",
    metric: {
      label: "Render Latency",
      value: "16.6ms / 60fps",
    },
    tags: ["WebGL", "Three.js", "Framer Motion", "GLSL"],
  },
  {
    id: "scalable-infrastructure",
    figure: "FIG 0.2",
    title: "Zero-Latency Edge Architecture",
    subtitle: "Global serverless nodes with millisecond response times.",
    description: "Multi-region distributed edge deployments backed by Redis caching and resilient event-driven workers.",
    badge: "Global CDN",
    status: "optimized",
    metric: {
      label: "Global P99",
      value: "42ms",
    },
    tags: ["Next.js 16", "Edge Functions", "Redis", "Cloudflare Workers"],
  },
  {
    id: "ai-agents",
    figure: "FIG 0.3",
    title: "Autonomous Agent Orchestration",
    subtitle: "Intelligent systems with real-time context streaming.",
    description: "Deep AI model integration, vector embeddings, semantic retrieval, and asynchronous agent pipelines.",
    badge: "AI Pipeline",
    status: "synced",
    metric: {
      label: "Agent Throughput",
      value: "1.2k req/s",
    },
    tags: ["OpenAI", "LangChain", "Pinecone", "Streaming LLM"],
  },
  {
    id: "enterprise-reliability",
    figure: "FIG 0.4",
    title: "Fault-Tolerant Cloud Systems",
    subtitle: "Engineered for high concurrency with zero downtime.",
    description: "Automated blue-green deployments, containerized Kubernetes microservices, and end-to-end telemetry.",
    badge: "High Availability",
    status: "active",
    metric: {
      label: "Uptime SLA",
      value: "99.99%",
    },
    tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  category: string;
  description: string;
  deliverable: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "System Discovery",
    category: "Architecture Blueprint",
    description: "Deep audit of technical requirements, data flows, and performance constraints to map the critical path.",
    deliverable: "Technical Specification & Architecture RFC",
  },
  {
    step: "02",
    title: "Rapid Prototyping",
    category: "Design Engineering",
    description: "Interactive UI/UX systems built directly in code with atomic design tokens and fluid motion physics.",
    deliverable: "Linear Design System & Component Library",
  },
  {
    step: "03",
    title: "High-Velocity Build",
    category: "Core Implementation",
    description: "Strictly typed TypeScript engineering, server components, and automated CI/CD validation pipelines.",
    deliverable: "Production-Grade Full-Stack Application",
  },
  {
    step: "04",
    title: "Zero-Downtime Launch",
    category: "Edge Deployment",
    description: "Global rollout across multi-region CDN nodes with telemetry monitoring and synthetic load tests.",
    deliverable: "Live Production Release on Global CDN",
  },
];

export interface ProjectShowcase {
  id: string;
  client: string;
  category: string;
  badge: string;
  metric: string;
  metricLabel: string;
  headline: string;
  description: string;
  tech: string[];
  span: string;
}

export const PROJECTS: ProjectShowcase[] = [
  {
    id: "project-1",
    client: "E-Commerce Hyper-Scale",
    category: "Full Stack Commerce",
    badge: "+240% GMV",
    metric: "45ms",
    metricLabel: "TTFB Globally",
    headline: "High-Throughput Global Storefront",
    description: "Modern headless commerce engine with dynamic multi-currency routing and sub-second checkout.",
    tech: ["Next.js", "Turbopack", "Shopify API", "Stripe"],
    span: "col-span-1 lg:col-span-2",
  },
  {
    id: "project-2",
    client: "Real-Time Telemetry SaaS",
    category: "Cloud Dashboard",
    badge: "50K Live Nodes",
    metric: "0.1%",
    metricLabel: "Error Rate",
    headline: "Mission-Critical Fleet Monitor",
    description: "Streaming WebSocket dashboards rendering real-time IoT metrics with zero UI jank.",
    tech: ["React 19", "WebSockets", "D3.js", "ClickHouse"],
    span: "col-span-1",
  },
  {
    id: "project-3",
    client: "Fintech Token Protocol",
    category: "Web3 & Security",
    badge: "Audited Tier-1",
    metric: "$80M+",
    metricLabel: "Volume Processed",
    headline: "Institutional Crypto Gateway",
    description: "Cryptographically verified settlement interface with biometric hardware auth.",
    tech: ["TypeScript", "Wasm", "Tailwind v4", "Vercel Edge"],
    span: "col-span-1",
  },
  {
    id: "project-4",
    client: "Autonomous AI Workspace",
    category: "AI Engineering",
    badge: "99.4% Eval Score",
    metric: "<200ms",
    metricLabel: "Vector Query",
    headline: "Context-Aware Agent Console",
    description: "Multi-agent collaborative canvas for engineering teams with automated code review pipelines.",
    tech: ["Next.js App Router", "Python API", "OpenAI", "pgvector"],
    span: "col-span-1 lg:col-span-2",
  },
];

export const TECH_STACK = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Framer Motion",
  "Turbopack",
  "Node.js",
  "Edge Functions",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "WebGL",
  "Three.js",
  "Python",
];
