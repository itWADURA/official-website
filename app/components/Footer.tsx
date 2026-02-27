"use client";

import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background py-12 text-center sm:text-left">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold tracking-tight text-foreground">itWADURA</h3>
                        <p className="text-sm font-light text-neutral-400">
                            Architecting Digital Presence. <br />
                            Scaling Social Influence.
                        </p>
                        <div className="flex gap-4 mt-2 justify-center sm:justify-start">
                            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="https://github.com/itWADURA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground">Company</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="transition-colors hover:text-foreground">Home</Link></li>
                            <li><Link href="#capabilities" className="transition-colors hover:text-foreground">Capabilities</Link></li>
                            <li><Link href="#process" className="transition-colors hover:text-foreground">Process</Link></li>
                            <li><Link href="#contact" className="transition-colors hover:text-foreground">Contact</Link></li>
                        </ul>
                    </div>

                    {/* GitHub / Open Source Activity Stub */}
                    <div className="col-span-1 lg:col-span-2">
                        <h3 className="text-sm font-semibold text-foreground">Open Source Activity</h3>
                        <div className="mt-4 rounded-xl border border-border bg-glass p-4 backdrop-blur-sm">
                            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
                                <Github className="h-4 w-4" />
                                <span>Latest commits from @itWADURA</span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="font-mono text-neutral-300">feat: update dark mode components</span>
                                    <span className="text-neutral-600 font-mono">2h ago</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="font-mono text-neutral-300">fix: responsive navigation</span>
                                    <span className="text-neutral-600 font-mono">5h ago</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="font-mono text-neutral-300">chore: optimize framer animations</span>
                                    <span className="text-neutral-600 font-mono">1d ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-12 border-t border-border pt-8 text-center text-xs font-mono text-muted-foreground">
                    &copy; {new Date().getFullYear()} itWADURA. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
