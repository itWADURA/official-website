"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "E-Commerce Scale",
        category: "Web Development",
        tech: "Next.js + Shopify",
        stats: "+150% Sales",
        color: "bg-blue-500",
        size: "col-span-1 md:col-span-2 row-span-2",
    },
    {
        id: 2,
        title: "Tech Brand Identity",
        category: "Branding",
        tech: "Design System",
        stats: "Brand Launch",
        color: "bg-purple-500",
        size: "col-span-1 row-span-1",
    },
    {
        id: 3,
        title: "SaaS Dashboard",
        category: "Product Design",
        tech: "React + D3",
        stats: "20k Users",
        color: "bg-emerald-500",
        size: "col-span-1 row-span-1",
    },
    {
        id: 4,
        title: "Social Campaign",
        category: "Marketing",
        tech: "Content Strategy",
        stats: "1M+ Reach",
        color: "bg-pink-500",
        size: "col-span-1 md:col-span-2 row-span-1",
    },
];

export default function Portfolio() {
    return (
        <section id="work" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Selected Work
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A gallery of digital excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3 h-[800px] md:h-[600px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl ${project.color} ${project.size} p-8`}
                        >
                            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />

                            <div className="relative z-10 flex h-full flex-col justify-between text-white">
                                <div className="flex justify-between items-start">
                                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md">
                                        {project.category}
                                    </span>
                                    <ArrowUpRight className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100" />
                                </div>

                                <div>
                                    <div className="mb-2 text-3xl font-bold">{project.stats}</div>
                                    <h3 className="text-xl font-semibold opacity-90">{project.title}</h3>
                                    <p className="mt-1 text-sm opacity-75">{project.tech}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
