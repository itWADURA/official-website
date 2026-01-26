"use client";

import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Discovery",
        description: "We dive deep into your brand's DNA, goals, and audience to uncover the perfect digital strategy.",
    },
    {
        id: "02",
        title: "Strategy",
        description: "Blueprinting the architecture. We define the tech stack, user flows, and content roadmap.",
    },
    {
        id: "03",
        title: "Implementation",
        description: "High-velocity coding and content creation. We build with precision and pixel-perfect attention.",
    },
    {
        id: "04",
        title: "Launch",
        description: "Seamless deployment. We ensure high-performance metrics and zero-downtime go-live.",
    },
    {
        id: "05",
        title: "Growth",
        description: "Post-launch optimization. We track data, iterate, and scale your digital influence.",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 sm:py-32 bg-muted/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        The Engine
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        From concept to scale, our proven workflow delivers results.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-0 h-full w-0.5 bg-gradient-to-b from-primary/0 via-primary to-primary/0 md:left-1/2 md:-ml-0.5" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center md:justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content */}
                                <div className="ml-12 w-full max-w-md md:ml-0 md:w-5/12">
                                    <div className="rounded-2xl border border-border bg-background/50 p-6 shadow-sm backdrop-blur-sm">
                                        <span className="text-sm font-bold text-primary">{step.id}</span>
                                        <h3 className="mt-2 text-xl font-bold text-foreground">{step.title}</h3>
                                        <p className="mt-3 text-base text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>

                                {/* Dot */}
                                <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/30 md:left-1/2 md:-ml-5">
                                    <div className="h-2.5 w-2.5 rounded-full bg-white" />
                                </div>

                                {/* Spacer for alternate side */}
                                <div className="hidden w-5/12 md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
