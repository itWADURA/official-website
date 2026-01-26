"use client";

import { motion } from "framer-motion";
import { BarChart3, Code2, Globe, Rocket, Search, Smartphone } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "High-performance, scalable web applications built with Next.js and React.",
        icon: Code2,
        features: ["Next.js App Router", "Server-Side Rendering", "100/100 Lighthouse Scores"],
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "Social Media Growth",
        description: "Data-driven strategies to amplify your brand voice and engagement.",
        icon: BarChart3,
        features: ["Algorithm Optimization", "Content Strategy", "Community Management"],
        gradient: "from-lime-500/20 to-green-500/20",
    },
    {
        title: "SEO Optimization",
        description: "Rank higher and drive organic traffic with technical SEO excellence.",
        icon: Search,
        features: ["Keyword Strategy", "Technical Audits", "Content Optimization"],
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Mobile First Design",
        description: "Responsive interfaces that look flawless on every device.",
        icon: Smartphone,
        features: ["Adaptive Layouts", "Touch Optimization", "Cross-Platform Testing"],
        gradient: "from-orange-500/20 to-red-500/20",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Our Expertise
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        We blend technical precision with creative strategy to deliver digital products that standout.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-2">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col gap-6 rounded-2xl border border-border/50 bg-gradient-to-br ${service.gradient} p-8 backdrop-blur-xl transition-all hover:border-primary/50 hover:shadow-lg`}
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background/50 ring-1 ring-border">
                                <service.icon className="h-6 w-6 text-foreground" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold leading-8 text-foreground">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-base leading-7 text-muted-foreground">
                                    {service.description}
                                </p>
                            </div>
                            <ul className="mt-auto flex flex-wrap gap-2">
                                {service.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="inline-flex items-center rounded-full bg-background/40 px-3 py-1 text-xs font-medium text-foreground ring-1 ring-inset ring-border"
                                    >
                                        {feature}
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
