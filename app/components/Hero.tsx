"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Particle system (Client-side only to prevent hydration mismatch)
const ParticleField = () => {
    const [particles, setParticles] = useState<Array<{ id: number, size: number, duration: number, delay: number, left: number, top: number }>>([]);

    useEffect(() => {
        // Generate random values only after component mounts on the client
        const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            size: Math.random() * 4 + 1,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
            left: Math.random() * 100,
            top: Math.random() * 100,
        }));
        setParticles(generatedParticles);
    }, []);

    if (particles.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute h-1 w-1 rounded-full bg-foreground/30"
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
        <>
            <motion.div
                className="absolute left-[10%] top-[20%] h-24 w-24 rounded-2xl bg-gradient-to-br from-foreground/10 to-transparent backdrop-blur-sm border border-border"
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
                className="absolute right-[15%] top-[30%] h-32 w-32 rounded-full bg-gradient-to-br from-foreground/5 to-transparent backdrop-blur-sm border border-border"
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
                className="absolute left-[70%] bottom-[20%] h-20 w-20 rotate-45 bg-gradient-to-br from-foreground/5 to-transparent backdrop-blur-sm border border-border"
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
        </>
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
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-glass px-6 py-2.5 text-sm font-semibold text-foreground/80 backdrop-blur-md"
                >
                    <Sparkles className="h-4 w-4 animate-pulse text-foreground" />
                    Premium Digital Engineering
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="max-w-5xl text-6xl font-bold tracking-tighter text-foreground sm:text-8xl md:text-9xl mb-8 leading-[1.1]"
                >
                    <span className="block">Architecting</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40">
                        The Future.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-2xl font-light"
                >
                    We engineer elite digital experiences.
                    <span className="text-foreground font-medium"> Minimal.</span>
                    <span className="text-foreground font-medium"> Scalable.</span>
                    <span className="text-foreground font-medium"> Perfect.</span>
                </motion.p>

                {/* Glass card CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Link
                        href="#contact"
                        className={`group relative inline-flex h-16 items-center justify-center gap-3 rounded-full border border-border px-10 text-lg font-medium transition-all duration-300 ${isHovered ? 'bg-foreground text-background' : 'bg-transparent text-foreground'
                            }`}
                        style={{ backdropFilter: 'blur(12px)' }}
                    >
                        <span className="relative z-10">Start Your Project</span>
                        <ArrowRight className={`relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${isHovered ? 'text-background' : 'text-foreground'}`} />
                        
                        {/* Subtle glow behind button */}
                        <motion.div
                            className="absolute -inset-1 rounded-full bg-foreground/20 blur-xl z-0"
                            animate={{ opacity: isHovered ? 0.3 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Bottom stats */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute bottom-16 left-0 right-0 z-10"
            >
                <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8 rounded-2xl border border-border bg-background/40 p-8 backdrop-blur-xl">
                    {[
                        { label: "Performance", value: "<100ms" },
                        { label: "Engineering", value: "Elite" },
                        { label: "Uptime", value: "99.9%" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="text-3xl font-bold text-foreground mb-2 tracking-tight">{stat.value}</div>
                            <div className="text-sm tracking-widest text-muted-foreground uppercase">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
