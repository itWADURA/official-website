"use client";

import { motion } from "framer-motion";

const technologies = [
    "Next.js 15", "React Server Components", "TypeScript", "Tailwind CSS v4",
    "Framer Motion", "Node.js", "PostgreSQL", "GraphQL", "WebAssembly",
    "Three.js", "WebGL", "Rust", "Edge Functions", "Docker", "Kubernetes"
];

export default function TechStack() {
    return (
        <section className="relative py-16 overflow-hidden border-y border-border">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/[0.02] to-transparent" />

            <div className="relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center"
                >
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Powered By Modern Stack
                    </h3>
                </motion.div>

                <div className="relative flex w-full">
                    {/* Gradient fades */}
                    <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
                    <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

                    <motion.div
                        className="flex gap-6 whitespace-nowrap"
                        animate={{ x: [0, -1200] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30,
                        }}
                    >
                        {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                                <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="rounded-xl border border-border bg-glass px-6 py-3 backdrop-blur-md transition-all hover:bg-foreground/10 hover:border-foreground/30"
                            >
                                <span className="text-sm font-mono text-muted-foreground transition-colors hover:text-foreground">
                                    {tech}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
