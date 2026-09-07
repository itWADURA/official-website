"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { name: "Capabilities", href: "#capabilities" },
    { name: "Process", href: "#process" },
    { name: "Work", href: "#work" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4">
            <div className="glass-strong rounded-2xl px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xl font-bold tracking-tighter text-transparent"
                    >
                        itWADURA
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex md:items-center md:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="rounded-full bg-primary/20 px-6 py-2 text-sm font-semibold text-primary backdrop-blur-sm transition-all hover:bg-primary hover:text-white"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg glass md:hidden"
                    >
                        {isOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-2 glass-strong rounded-2xl p-4 md:hidden"
                >
                    <div className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg px-4 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-primary"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="rounded-full bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white"
                        >
                            Get Started
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
