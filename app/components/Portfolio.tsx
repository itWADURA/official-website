"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-Commerce Scale",
        category: "Web Development",
        tech: "Next.js + Shopify",
        stats: "+150% Sales",
        color: "bg-foreground",
        text: "text-background",
        size: "col-span-1 md:col-span-2 row-span-2",
    },
    {
        id: 2,
        title: "Tech Brand Identity",
        category: "Branding",
        tech: "Design System",
        stats: "Brand Launch",
        color: "bg-secondary border border-border",
        text: "text-secondary-foreground",
        size: "col-span-1 row-span-1",
    },
    {
        id: 3,
        title: "SaaS Dashboard",
        category: "Product Design",
        tech: "React + D3",
        stats: "20k Users",
        color: "bg-muted border border-border",
        text: "text-muted-foreground",
        size: "col-span-1 row-span-1",
    },
    {
        id: 4,
        title: "Social Campaign",
        category: "Marketing",
        tech: "Content Strategy",
        stats: "1M+ Reach",
        color: "bg-background border border-border",
        text: "text-foreground",
        size: "col-span-1 md:col-span-2 row-span-1",
    },
];

export default function Portfolio() {
    return (
        <section id="work" className="py-24 sm:py-32 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Selected Work
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground font-light">
                        A gallery of digital excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3 h-[800px] md:h-[600px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 0.98 }}
                            className={`group relative overflow-hidden rounded-3xl ${project.color} ${project.size} p-8 transition-transform duration-300`}
                        >
                            <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-foreground/5" />

                            <div className={`relative z-10 flex h-full flex-col justify-between ${project.text}`}>
                                <div className="flex justify-between items-start">
                                    <span className={`rounded-full px-3 py-1 text-xs font-mono font-medium backdrop-blur-md border ${project.id === 1 ? 'bg-background/5 border-background/10' : 'bg-foreground/5 border-border'}`}>
                                        {project.category}
                                    </span>
                                    <ArrowUpRight className="h-6 w-6 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>

                                <div>
                                    <div className="mb-2 text-4xl font-bold tracking-tight">{project.stats}</div>
                                    <h3 className="text-xl font-semibold opacity-90">{project.title}</h3>
                                    <p className="mt-1 text-sm font-mono opacity-60">{project.tech}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
