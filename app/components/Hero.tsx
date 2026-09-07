"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Particle {
    id: number;
    size: number;
    duration: number;
    delay: number;
    left: number;
    top: number;
}

// Deterministic particles generated once to ensure React render purity and zero SSR hydration mismatches
const PARTICLES: Particle[] = Array.from({ length: 45 }, (_, i) => ({
    id: i,
    size: ((i * 7) % 4) + 1.5,
    duration: ((i * 11) % 3) + 2.5,
    delay: ((i * 13) % 2.5),
    left: (i * 2.2 + ((i * 17) % 20)) % 100,
    top: (i * 2.1 + ((i * 23) % 25)) % 100,
}));

// Particle system
const ParticleField = () => {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {PARTICLES.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute h-1 w-1 rounded-full bg-primary/40"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, particle.size, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                />
            ))}
        </div>
    );
};

// Floating geometric shapes
const FloatingShapes = () => {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
                className="absolute left-[10%] top-[20%] h-24 w-24 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent backdrop-blur-sm border border-primary/20"
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute right-[15%] top-[30%] h-32 w-32 rounded-full bg-gradient-to-br from-secondary/20 to-transparent backdrop-blur-sm border border-secondary/20"
                animate={{
                    y: [0, 40, 0],
                    x: [0, 20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute left-[70%] bottom-[20%] h-20 w-20 rotate-45 bg-gradient-to-br from-accent/20 to-transparent backdrop-blur-sm border border-accent/20"
                animate={{
                    y: [0, -20, 0],
                    rotate: [45, 225, 405],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = document.getElementById('hero-section')?.getBoundingClientRect();
            if (rect) {
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
                    y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            id="hero-section"
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
        >
            {/* Particle background */}
            <ParticleField />

            {/* Floating shapes */}
            <FloatingShapes />

            {/* Main content with 3D tilt effect */}
            <motion.div
                style={{
                    rotateX: mousePosition.y * 0.5,
                    rotateY: mousePosition.x * 0.5,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                className="relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full glass-strong px-6 py-2.5 text-sm font-semibold text-primary"
                >
                    <Sparkles className="h-4 w-4 animate-pulse" />
                    Premium Digital Engineering
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-5xl text-6xl font-bold tracking-tight text-foreground sm:text-8xl md:text-9xl mb-8"
                >
                    <span className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite]">
                        Crafting Digital
                    </span>
                    <br />
                    <span className="text-glow">Excellence</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
                >
                    We transform ideas into immersive digital experiences.
                    <span className="text-foreground font-semibold"> Code.</span>
                    <span className="text-foreground font-semibold"> Design.</span>
                    <span className="text-foreground font-semibold"> Innovation.</span>
                </motion.p>

                {/* Glass card CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Link
                        href="#contact"
                        className={`group relative inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold transition-all ${isHovered ? 'glow-effect' : ''
                            }`}
                        style={{
                            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8))',
                            backdropFilter: 'blur(12px)',
                        }}
                    >
                        <span className="relative z-10 text-white">Start Your Project</span>
                        <ArrowRight className="relative z-10 h-5 w-5 text-white transition-transform group-hover:translate-x-1" />

                        {/* Animated border */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                opacity: 0.5,
                                filter: 'blur(20px)',
                            }}
                            animate={{
                                scale: isHovered ? 1.1 : 1,
                            }}
                        />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Bottom stats */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-24 left-0 right-0 z-10"
            >
                <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8 glass rounded-2xl p-6">
                    {[
                        { label: "Lightning Fast", value: "<100ms" },
                        { label: "Modern Stack", value: "2024" },
                        { label: "Global CDN", value: "99.9%" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="text-2xl font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
