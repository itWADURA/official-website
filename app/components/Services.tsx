"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Layers, Zap } from "lucide-react";

const capabilities = [
    {
        title: "Immersive Experiences",
        description: "3D environments and fluid animations that captivate users.",
        icon: Globe,
        tech: ["Three.js", "WebGL", "Framer Motion"],
        gradient: "from-blue-500/30 via-blue-500/20 to-transparent",
    },
    {
        title: "Real-Time Architecture",
        description: "Systems that react instantly. Live data, zero latency.",
        icon: Zap,
        tech: ["WebSockets", "Edge Functions", "Redis"],
        gradient: "from-yellow-500/30 via-yellow-500/20 to-transparent",
    },
    {
        title: "Scalable Infrastructure",
        description: "Built to handle millions. Serverless, global, and resilient.",
        icon: Layers,
        tech: ["AWS Lambda", "Docker", "Kubernetes"],
        gradient: "from-purple-500/30 via-purple-500/20 to-transparent",
    },
    {
        title: "AI Integration",
        description: "Smart interfaces powered by next-gen language models.",
        icon: Cpu,
        tech: ["OpenAI API", "Vector DBs", "LangChain"],
        gradient: "from-emerald-500/30 via-emerald-500/20 to-transparent",
    },
];

export default function Services() {
    return (
        <section id="capabilities" className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                    >
                        System <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Capabilities</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-lg leading-8 text-muted-foreground"
                    >
                        We don&apos;t sell packages. We deliver raw engineering power.
                    </motion.p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-2">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={capability.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            <div className={`glass-strong relative h-full rounded-3xl p-8 transition-all duration-300 hover:glow-effect`}>
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${capability.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />

                                <div className="relative z-10 flex h-full flex-col gap-6">
                                    <motion.div
                                        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm ring-1 ring-white/10"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <capability.icon className="h-7 w-7 text-primary transition-colors group-hover:text-secondary" />
                                    </motion.div>

                                    <div>
                                        <h3 className="text-2xl font-bold leading-8 text-foreground">
                                            {capability.title}
                                        </h3>
                                        <p className="mt-3 text-base leading-7 text-muted-foreground">
                                            {capability.description}
                                        </p>
                                    </div>

                                    <ul className="mt-auto flex flex-wrap gap-2">
                                        {capability.tech.map((t) => (
                                            <li
                                                key={t}
                                                className="inline-flex items-center rounded-full bg-white/5 px-3 py-1.5 text-xs font-mono font-medium text-foreground/90 ring-1 ring-inset ring-white/10 transition-colors hover:bg-white/10"
                                            >
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
