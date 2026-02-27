"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { name: "Capabilities", href: "#capabilities" },
    { name: "Process", href: "#process" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    
    // Morphing animations based on scroll
    const navWidth = useTransform(scrollY, [0, 100], ["100%", "85%"]);
    const navY = useTransform(scrollY, [0, 100], [0, 10]);
    const navPadding = useTransform(scrollY, [0, 100], ["1rem 1.5rem", "0.75rem 1.5rem"]);

    return (
        <motion.nav 
            style={{ y: navY }}
            className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        >
            <motion.div 
                style={{ width: navWidth, padding: navPadding }}
                className="flex items-center justify-between rounded-full border border-border bg-glass backdrop-blur-xl transition-colors"
            >
                <div className="flex items-center gap-4">
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-widest text-foreground uppercase"
                    >
                        itWADURA
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-4 w-px bg-border hidden md:block" />
                    <ThemeToggle />
                    <Link
                        href="#contact"
                        className="rounded-full border border-border bg-foreground text-background px-6 py-2 text-sm font-semibold transition-transform hover:scale-105"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu & Theme */}
                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-glass"
                    >
                        {isOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className="absolute top-full mt-4 w-[90%] max-w-sm rounded-3xl border border-border bg-background p-6 shadow-2xl backdrop-blur-3xl md:hidden"
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-xl px-4 py-3 text-lg font-medium text-muted-foreground transition-colors hover:bg-glass hover:text-foreground"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 rounded-full bg-foreground px-6 py-3 text-center text-base font-semibold text-background transition-opacity hover:opacity-90"
                        >
                            Get Started
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
