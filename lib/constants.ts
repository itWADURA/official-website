export interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

export const NAV_LINKS: NavItem[] = [
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Process", href: "#process" },
  { name: "Tech Stack", href: "#stack" },
  { name: "Work", href: "#work" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
];

export interface ServiceDetail {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  ctaText: string;
  badgeText: string;
  items: string[];
  metrics: {
    label: string;
    value: string;
  };
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "web-development",
    index: "01",
    category: "SERVICE 01 — WEB DEVELOPMENT",
    title: "Websites & Digital Experiences",
    description:
      "Create a strong digital presence with modern websites and web applications built around your brand, audience, and business objectives.",
    ctaText: "Discover Web Development",
    badgeText: "High-Performance Web",
    items: [
      "Corporate & Business Websites",
      "High-Converting Landing Pages",
      "E-Commerce & Storefront Solutions",
      "Interactive Web Applications",
      "Website Redesign & Modernization",
      "API & Third-Party Integrations",
      "Performance & SEO Optimization",
      "Content Management Systems",
    ],
    metrics: {
      label: "Lighthouse Performance",
      value: "99/100 Average",
    },
  },
  {
    id: "business-systems",
    index: "02",
    category: "SERVICE 02 — BUSINESS MANAGEMENT SYSTEMS",
    title: "Business Management Software",
    description:
      "Manage your business more effectively with custom-built systems designed around your everyday operations, stock, and workflows.",
    ctaText: "Discover Business Systems",
    badgeText: "Core Operational Suite",
    items: [
      "Inventory Management & Stock Tracking",
      "Point of Sale (POS) Systems",
      "Order & Sales Lifecycle Tracking",
      "Purchase & Supplier Management",
      "Customer Relationship Management (CRM)",
      "Real-Time Analytics & Reporting Dashboards",
      "Role-Based Access & Audit Logging",
      "Custom Internal Operations Platforms",
    ],
    metrics: {
      label: "Operational Efficiency",
      value: "Single Source of Truth",
    },
  },
  {
    id: "automation-ai",
    index: "03",
    category: "SERVICE 03 — AUTOMATION & AI",
    title: "Automation & Intelligent Solutions",
    description:
      "Reduce repetitive work, connect your disparate systems, and introduce smarter workflows that improve everyday business operations.",
    ctaText: "Discover Automation",
    badgeText: "Intelligent Workflows",
    items: [
      "Business Workflow Automation",
      "Cross-Platform API Integrations",
      "Automated Order & Stock Notifications",
      "Multi-Channel Data Synchronization",
      "Intelligent Document Processing",
      "AI-Powered Customer Assistants",
      "Task Execution Agents",
      "Custom Business Logic Pipelines",
    ],
    metrics: {
      label: "Manual Effort Reduction",
      value: "Autonomous Sync",
    },
  },
];

export interface BusinessSolution {
  id: string;
  tabLabel: string;
  title: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  visualMetric: string;
  visualLabel: string;
}

export const BUSINESS_SOLUTIONS: BusinessSolution[] = [
  {
    id: "digital-presence",
    tabLabel: "Digital Presence",
    title: "Establish a Credible, Conversion-Driven Brand Presence",
    tagline: "Build a professional online presence through modern websites, landing pages, and e-commerce platforms.",
    description:
      "Your website is the primary storefront for your business. We engineer responsive, lightning-fast digital experiences that articulate your value proposition, build customer trust, and generate tangible inquiries.",
    bulletPoints: [
      "Custom responsive design tailored to your brand identity",
      "Sub-second load times engineered with Next.js and modern caching",
      "Conversion-optimized lead capture funnels and clear CTAs",
      "Enterprise security and seamless content editing experience",
    ],
    visualMetric: "<1.0s",
    visualLabel: "First Contentful Paint",
  },
  {
    id: "inventory-operations",
    tabLabel: "Inventory & Operations",
    title: "Total Visibility Over Stock, Orders, and Suppliers",
    tagline: "Organize products, manage stock, track sales, and improve operational visibility in one place.",
    description:
      "Eliminate spreadsheet chaos and human error. Our custom inventory and operational software provides real-time stock balances, low-stock warnings, purchase order reconciliation, and multi-location management.",
    bulletPoints: [
      "Real-time stock valuation and automatic low-stock notifications",
      "Barcode scanning and multi-warehouse location tracking",
      "End-to-end sales receipting and supplier invoice matching",
      "Exportable financial reconciliations and executive dashboards",
    ],
    visualMetric: "100%",
    visualLabel: "Stock Audit Precision",
  },
  {
    id: "process-automation",
    tabLabel: "Process Automation",
    title: "Connect Your Tools and Eradicate Repetitive Tasks",
    tagline: "Connect tools, automate repetitive processes, and reduce manual tasks across teams.",
    description:
      "Bridge the gaps between your billing, warehouse, messaging, and CRM tools. We build event-driven triggers that execute reliable actions in milliseconds without manual human intervention.",
    bulletPoints: [
      "Instant WhatsApp/SMS/Email notifications when orders are placed",
      "Automated PDF invoice generation and ledger posting",
      "Two-way synchronization between online storefronts and local inventory",
      "Scheduled background jobs and daily operational health reports",
    ],
    visualMetric: "24/7",
    visualLabel: "Uninterrupted Execution",
  },
  {
    id: "custom-software",
    tabLabel: "Custom Software",
    title: "Tailored Engineering for Your Unique Business Model",
    tagline: "Develop tailored software solutions built specifically for your unique operational requirements.",
    description:
      "Off-the-shelf software often forces you to change how your business operates. We engineer tailored portals, client dashboards, and proprietary systems designed specifically around your competitive edge.",
    bulletPoints: [
      "Architected with modern TypeScript, Node.js, and relational databases",
      "Scalable database models with automated backups and encryption",
      "Intuitive role-based permissions for staff, managers, and clients",
      "Complete code ownership and continuous long-term support",
    ],
    visualMetric: "100%",
    visualLabel: "Tailored Fit",
  },
];

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Understanding your operational reality",
    description:
      "We begin by thoroughly understanding your business model, operational bottlenecks, user personas, and commercial targets. No line of code is written until requirements are crystal clear.",
    deliverables: [
      "Stakeholder Interview & Scope Alignment",
      "System Architecture & Data Flow RFC",
      "Project Roadmap & Defined Milestones",
    ],
  },
  {
    step: "02",
    title: "DESIGN & PLAN",
    subtitle: "Architecting the experience & system",
    description:
      "We map wireframes, intuitive user flows, and interactive UI systems. Every interface is designed with clarity, speed, and real user adoption in mind.",
    deliverables: [
      "Component-Based Design System",
      "Interactive Prototypes & UX Wireframes",
      "Database Schema & API Specifications",
    ],
  },
  {
    step: "03",
    title: "BUILD & REFINE",
    subtitle: "High-standard engineering & rigorous testing",
    description:
      "We build using modern, maintainable stacks — clean TypeScript, Next.js, and robust databases. Continuous reviews and testing ensure zero bugs and airtight reliability.",
    deliverables: [
      "Production-Grade Full Stack Implementation",
      "Unit, Integration & Security Testing",
      "Staging Environment Previews & Client Reviews",
    ],
  },
  {
    step: "04",
    title: "LAUNCH & EVOLVE",
    subtitle: "Smooth deployment & long-term value",
    description:
      "We deploy to modern edge infrastructure with automated CI/CD and comprehensive monitoring. We provide hands-on training, documentation, and continuous evolution.",
    deliverables: [
      "Zero-Downtime Production Deployment",
      "Staff Training & System Documentation",
      "Agreed Handover & Ongoing Support",
    ],
  },
];

export interface TechCategory {
  title: string;
  description: string;
  technologies: {
    name: string;
    tag: string;
  }[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Modern, responsive, accessible interfaces built for fluid speed.",
    technologies: [
      { name: "Next.js 16", tag: "App Router" },
      { name: "React 19", tag: "UI Library" },
      { name: "TypeScript", tag: "Type Safety" },
      { name: "Tailwind CSS v4", tag: "Styling" },
      { name: "Framer Motion", tag: "Motion Design" },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Robust application servers and structured API architecture.",
    technologies: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "REST APIs" },
      { name: "Python", tag: "Processing" },
      { name: "REST & GraphQL", tag: "Protocols" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Reliable, ACID-compliant databases with low-latency caching.",
    technologies: [
      { name: "PostgreSQL", tag: "Relational" },
      { name: "MySQL", tag: "Database" },
      { name: "MongoDB", tag: "Document" },
      { name: "Redis", tag: "In-Memory Cache" },
    ],
  },
  {
    title: "Automation & AI",
    description: "Intelligent pipeline workflows and model integration.",
    technologies: [
      { name: "LangChain", tag: "Orchestration" },
      { name: "LangGraph", tag: "Multi-Agent" },
      { name: "AI APIs", tag: "LLM Integration" },
      { name: "Workflow Tools", tag: "Automation" },
      { name: "Vector DBs", tag: "Semantic Search" },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    description: "Containerized environments and dependable cloud deployments.",
    technologies: [
      { name: "Docker", tag: "Containers" },
      { name: "Git & GitHub", tag: "Version Control" },
      { name: "Vercel", tag: "Edge Hosting" },
      { name: "Cloud Platforms", tag: "Infrastructure" },
    ],
  },
];

export interface ProjectConcept {
  id: string;
  title: string;
  category: string;
  badge: string;
  status: string;
  description: string;
  technologies: string[];
  features: string[];
}

export const PROJECT_CONCEPTS: ProjectConcept[] = [
  {
    id: "concept-website",
    title: "Modern Business Website Concept",
    category: "Web Development & Digital Experiences",
    badge: "Concept Preview",
    status: "Architectural Showcase",
    description:
      "A clean, light editorial digital presence concept designed for corporate service firms. Featuring responsive typography, interactive service calculators, and sub-second page loads.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Sub-second First Contentful Paint",
      "Dynamic lead capture & qualification form",
      "SEO-structured semantic schema markup",
    ],
  },
  {
    id: "concept-inventory",
    title: "Inventory & POS Management Concept",
    category: "Business Management Systems",
    badge: "Concept Preview",
    status: "Architectural Showcase",
    description:
      "An intuitive stock control and Point of Sale interface designed for wholesale and retail operations. Features real-time stock level monitoring, barcode scanning, and multi-location reordering.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Automated low-stock alerts & reorder thresholds",
      "Supplier order tracking & invoice reconciliation",
      "Role-based cashier & manager authorization",
    ],
  },
  {
    id: "concept-automation",
    title: "Order-to-Fulfillment Automation Concept",
    category: "Automation & Intelligent Solutions",
    badge: "Concept Preview",
    status: "Architectural Showcase",
    description:
      "An automated workflow concept connecting customer orders directly with warehouse stock updates, customer WhatsApp confirmation notices, and accounting ledger entries.",
    technologies: ["Node.js", "Webhook APIs", "Redis", "Cloud Workers"],
    features: [
      "Zero-latency webhook event dispatching",
      "Automated customer receipt generation",
      "Dead-letter queues and retry resilience",
    ],
  },
  {
    id: "concept-portal",
    title: "Custom Client Service Portal Concept",
    category: "Custom Software Development",
    badge: "Concept Preview",
    status: "Architectural Showcase",
    description:
      "A tailored self-service web application concept allowing clients to submit tickets, track job progress, approve milestones, and download deliverables with end-to-end security.",
    technologies: ["Next.js App Router", "TypeScript", "PostgreSQL", "Docker"],
    features: [
      "Secure role-based authentication",
      "Milestone-based progress tracker",
      "Encrypted file sharing & digital signatures",
    ],
  },
];

export interface FutureProduct {
  id: string;
  name: string;
  category: string;
  tagline: string;
  status: string;
  description: string;
  highlights: string[];
}

export const FUTURE_PRODUCTS: FutureProduct[] = [
  {
    id: "flow-desk",
    name: "itWADURA Operations Suite",
    category: "Business Operating System",
    tagline: "Simplified inventory, sales, and billing for modern growing businesses.",
    status: "In Research & Prototyping",
    description:
      "An accessible, zero-clutter business platform designed specifically for local and regional businesses seeking freedom from complicated enterprise software.",
    highlights: ["Intuitive daily register", "Automated stock balance", "One-click invoice export"],
  },
  {
    id: "connect-hub",
    name: "itWADURA SyncBridge",
    category: "Business Automation Engine",
    tagline: "Plug-and-play workflow connections for common business tools.",
    status: "Concept Exploration",
    description:
      "A lightweight automation connector that links everyday point-of-sale systems, messaging apps, and spreadsheets without demanding coding skills.",
    highlights: ["Event triggers", "WhatsApp & SMS connectors", "Google Sheets synchronization"],
  },
];

export interface BrandPrinciple {
  number: string;
  title: string;
  description: string;
}

export const BRAND_PRINCIPLES: BrandPrinciple[] = [
  {
    number: "01",
    title: "Business Understanding",
    description:
      "We focus on understanding the real operational challenge before proposing any technical solution. Technology should serve your business, not the other way around.",
  },
  {
    number: "02",
    title: "Purposeful Design",
    description:
      "We create intuitive experiences that are clean, practical, and enjoyable to use. We prioritize clarity and utility over unnecessary visual clutter.",
  },
  {
    number: "03",
    title: "Reliable Engineering",
    description:
      "We build maintainable, well-architected software using battle-tested modern development practices. Every line of code is structured for stability and long-term durability.",
  },
  {
    number: "04",
    title: "Continuous Innovation",
    description:
      "We actively explore new technologies and automation opportunities that provide genuine business value, keeping your operations ahead of the curve.",
  },
];

export const CONTACT_SERVICES = [
  "Website Development",
  "E-commerce",
  "Inventory Management",
  "Custom Software",
  "Business Automation",
  "AI Solutions",
  "Other",
];

export const CONTACT_BUDGET_TIERS = [
  "To be discussed",
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
];
