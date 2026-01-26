"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Layers, Zap } from "lucide-react";

const capabilities = [
    {
        title: "Immersive Experiences",
        description: "3D environments and fluid animations that captivate users.",
        icon: Globe,
        tech: ["Three.js", "WebGL", "Framer Motion"],
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "Real-Time Architecture",
        description: "Systems that react instantly. Live data, zero latency.",
        icon: Zap,
        tech: ["WebSockets", "Edge Functions", "Redis"],
        gradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
        title: "Scalable Infrastructure",
        description: "Built to handle millions. Serverless, global, and resilient.",
        icon: Layers,
        tech: ["AWS Lambda", "Docker", "Kubernetes"],
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "AI Integration",
        description: "Smart interfaces powered by next-gen language models.",
        icon: Cpu,
        tech: ["OpenAI API", "Vector DBs", "LangChain"],
        gradient: "from-emerald-500/20 to-green-500/20",
    },
];

export default function Services() {
    return (
        <section id="capabilities" className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        System Capabilities
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        We don't sell packages. We deliver raw engineering power.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-2">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={capability.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col gap-6 rounded-2xl border border-border/50 bg-gradient-to-br ${capability.gradient} p-8 backdrop-blur-xl transition-all hover:border-primary/50 hover:shadow-lg group`}
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background/50 ring-1 ring-border group-hover:ring-primary/50 transition-all">
                                <capability.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold leading-8 text-foreground">
                                    {capability.title}
                                </h3>
                                <p className="mt-2 text-base leading-7 text-muted-foreground">
                                    {capability.description}
                                </p>
                            </div>
                            <ul className="mt-auto flex flex-wrap gap-2">
                                {capability.tech.map((t) => (
                                    <li
                                        key={t}
                                        className="inline-flex items-center rounded-full bg-background/40 px-3 py-1 text-xs font-mono font-medium text-foreground/80 ring-1 ring-inset ring-border"
                                    >
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
