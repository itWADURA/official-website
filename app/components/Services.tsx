"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Globe, Layers, Zap } from "lucide-react";
import { useRef } from "react";

const capabilities = [
    {
        title: "Immersive Experiences",
        description: "3D environments and fluid animations that captivate users.",
        icon: Globe,
        tech: ["Three.js", "WebGL", "Framer Motion"],
        gradient: "from-foreground/10 via-foreground/5 to-transparent",
    },
    {
        title: "Real-Time Architecture",
        description: "Systems that react instantly. Live data, zero latency.",
        icon: Zap,
        tech: ["WebSockets", "Edge Functions", "Redis"],
        gradient: "from-muted-foreground/20 via-muted-foreground/10 to-transparent",
    },
    {
        title: "Scalable Infrastructure",
        description: "Built to handle millions. Serverless, global, and resilient.",
        icon: Layers,
        tech: ["AWS Lambda", "Docker", "Kubernetes"],
        gradient: "from-foreground/10 via-foreground/5 to-transparent",
    },
    {
        title: "AI Integration",
        description: "Smart interfaces powered by next-gen language models.",
        icon: Cpu,
        tech: ["OpenAI API", "Vector DBs", "LangChain"],
        gradient: "from-muted-foreground/20 via-muted-foreground/10 to-transparent",
    },
];

export default function Services() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={containerRef} id="capabilities" className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    style={{ y: headerY, opacity: headerOpacity }}
                    className="mx-auto max-w-2xl text-center mb-16"
                >
                    <h2
                        className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                    >
                        System <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">Capabilities</span>
                    </h2>
                    <p
                        className="mt-6 text-lg leading-8 text-muted-foreground font-light"
                    >
                        We don't sell packages. We deliver raw engineering power.
                    </p>
                </motion.div>

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
                            <div className={`relative h-full rounded-3xl border border-border bg-glass p-8 backdrop-blur-xl transition-all duration-500 hover:border-foreground/30 hover:bg-background/60 hover:shadow-[0_0_40px_var(--glow-color)]`}>
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${capability.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                                <div className="relative z-10 flex h-full flex-col gap-6">
                                    <motion.div
                                        className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-border bg-foreground/5 backdrop-blur-md"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <capability.icon className="h-7 w-7 text-foreground transition-colors" />
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
                                                className="inline-flex items-center rounded-full border border-border bg-foreground/5 px-3 py-1.5 text-xs font-mono font-medium text-foreground/80 transition-colors hover:bg-foreground hover:text-background"
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
