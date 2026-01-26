"use client";

import { motion } from "framer-motion";

const technologies = [
    "Next.js 15", "React Server Components", "TypeScript", "Tailwind CSS v4",
    "Framer Motion", "Node.js", "PostgreSQL", "GraphQL", "WebAssembly",
    "Three.js", "WebGL", "Rust", "Edge Functions"
];

export default function TechStack() {
    return (
        <section className="py-12 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
            <div className="relative flex w-full">
                {/* Gradients for smooth fade out at edges */}
                <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {/* Double the list to create seamless loop */}
                    {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                        <span
                            key={i}
                            className="text-lg font-mono font-medium text-muted-foreground/60 transition-colors hover:text-primary"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
