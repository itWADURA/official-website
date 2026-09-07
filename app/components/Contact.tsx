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
        alert("Thank you! We will overlook your request and get back to you shortly.");
    };

    return (
        <section id="contact" className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    {/* Text Content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Let&apos;s Build Something Legendary
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Ready to scale your digital presence? Tell us about your project, and we&apos;ll architect the solution.
                        </p>

                        <dl className="mt-10 space-y-4 text-base leading-7 text-muted-foreground">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <Send className="h-6 w-5 text-muted-foreground" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-primary transition-colors" href="mailto:info@itwadura.com">
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
                        className="rounded-2xl border border-border bg-card/30 p-8 backdrop-blur-sm"
                    >
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-foreground">
                                    Name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        className="block w-full rounded-md border-0 bg-background/50 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 bg-background/50 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="type" className="block text-sm font-semibold leading-6 text-foreground">
                                    Project Type
                                </label>
                                <div className="mt-2.5">
                                    <select
                                        id="type"
                                        name="type"
                                        className="block w-full rounded-md border-0 bg-background/50 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        value={formState.type}
                                        onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                                    >
                                        <option value="">Select...</option>
                                        <option value="web">Web Development</option>
                                        <option value="social">Social Media Growth</option>
                                        <option value="brand">Branding</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-foreground">
                                    Budget
                                </label>
                                <div className="mt-2.5">
                                    <select
                                        id="budget"
                                        name="budget"
                                        className="block w-full rounded-md border-0 bg-background/50 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        value={formState.budget}
                                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                                    >
                                        <option value="">Select...</option>
                                        <option value="5k">&lt;$5k</option>
                                        <option value="10k">$5k - $10k</option>
                                        <option value="25k">$10k - $25k</option>
                                        <option value="50k+">$25k+</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
