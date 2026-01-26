"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
            <div className="absolute -top-40 -right-40 -z-10 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -z-10 h-[800px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-primary/5 blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wide backdrop-blur-sm"
            >
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                Premium Digital Solutions
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl"
            >
                Architecting <br />
                <span className="bg-gradient-to-br from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                    Digital Presence
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
                We don't just build websites. We engineer digital experiences that define the future. <br className="hidden sm:block" />
                Your vision, powered by our code.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
                <Link
                    href="#contact"
                    className="group inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
                >
                    Initialize Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </motion.div>

            {/* Stats/Proof */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-20 grid grid-cols-2 gap-8 border-t border-border/10 pt-10 sm:grid-cols-4"
            >
                {[
                    { label: "Performance", value: "100%", icon: Zap },
                    { label: "Technologies", value: "Modern", icon: Code },
                    { label: "Clients", value: "Global", icon: null },
                    { label: "Impact", value: "High", icon: null },
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
