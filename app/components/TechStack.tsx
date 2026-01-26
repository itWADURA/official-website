"use client";

import { motion } from "framer-motion";

const technologies = [
    "Next.js 15", "React Server Components", "TypeScript", "Tailwind CSS v4",
    "Framer Motion", "Node.js", "PostgreSQL", "GraphQL", "WebAssembly",
    "Three.js", "WebGL", "Rust", "Edge Functions", "Docker", "Kubernetes"
];

export default function TechStack() {
    return (
        <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center"
                >
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
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
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="glass rounded-2xl px-6 py-3 backdrop-blur-xl"
                            >
                                <span className="text-base font-mono font-semibold text-foreground/80 transition-colors hover:text-primary">
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
