"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        type: "",
        budget: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Integration logic would go here
        console.log("Form submitted:", formState);
        alert("Thank you! We will look over your request and get back to you shortly.");
    };

    return (
        <section id="contact" className="relative py-24 sm:py-32 border-t border-border bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    {/* Text Content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">Legendary</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground font-light">
                            Ready to scale your digital presence? Tell us about your project, and we'll architect the solution.
                        </p>

                        <dl className="mt-10 space-y-4 text-base leading-7 text-neutral-400 font-mono text-sm">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <Send className="h-5 w-5 text-foreground" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="transition-colors hover:text-foreground" href="mailto:info@itwadura.com">
                                        info@itwadura.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="rounded-3xl border border-border bg-glass p-8 backdrop-blur-xl"
                    >
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground">
                                    Name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        className="block w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground sm:text-sm"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground sm:text-sm"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="type" className="block text-sm font-medium leading-6 text-foreground">
                                    Project Type
                                </label>
                                <div className="mt-2.5">
                                    <select
                                        id="type"
                                        name="type"
                                        className="block w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground sm:text-sm"
                                        value={formState.type}
                                        onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                                        required
                                    >
                                        <option value="" className="bg-background text-muted-foreground">Select...</option>
                                        <option value="web" className="bg-background">Web Development</option>
                                        <option value="social" className="bg-background">System Integration</option>
                                        <option value="brand" className="bg-background">Branding</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium leading-6 text-foreground">
                                    Budget
                                </label>
                                <div className="mt-2.5">
                                    <select
                                        id="budget"
                                        name="budget"
                                        className="block w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground sm:text-sm"
                                        value={formState.budget}
                                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                                        required
                                    >
                                        <option value="" className="bg-background text-muted-foreground">Select...</option>
                                        <option value="5k" className="bg-background">&lt;$5k</option>
                                        <option value="10k" className="bg-background">$5k - $10k</option>
                                        <option value="25k" className="bg-background">$10k - $25k</option>
                                        <option value="50k+" className="bg-background">$25k+</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="block w-full rounded-lg bg-foreground px-4 py-3 text-center text-sm font-bold text-background transition-all hover:bg-neutral-500/80 hover:text-white"
                            >
                                Send Request
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
