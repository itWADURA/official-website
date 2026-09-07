"use client";

import React, { useState } from "react";
import { Mail, Clock, CheckCircle2, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input, Select, Textarea } from "@/app/components/ui/input";

export const ContactTemplate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "web",
    budget: "10k-25k",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setStatus("success");
      setStatusMessage(data.message);
      setFormData({
        name: "",
        email: "",
        type: "web",
        budget: "10k-25k",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setStatusMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Context Column */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="cyan" dot>
              FIG 0.6 · PROJECT INQUIRY
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Initiate Collaboration{" "}
              <span className="text-muted-foreground font-normal block sm:inline">
                tell us about your roadmap.
              </span>
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              Have an ambitious vision or complex infrastructure challenge? Submit your technical requirements,
              and our lead engineers will evaluate scope and schedule an architecture review.
            </p>

            {/* Direct Contact Metrics */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04] text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-muted-foreground block">
                    Direct Engineering Contact
                  </span>
                  <a
                    href="mailto:info@itwadura.com"
                    className="text-sm font-semibold text-white hover:text-[#40c4ff] transition-colors"
                  >
                    info@itwadura.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04] text-[#d4f53b]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-muted-foreground block">
                    Turnaround Commitment
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Initial assessment within 24 business hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <Card glow className="p-6 sm:p-10">
              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    {statusMessage}
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setStatus("idle")}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      id="name"
                      label="Full Name"
                      placeholder="Ada Lovelace"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input
                      id="email"
                      type="email"
                      label="Work Email"
                      placeholder="ada@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Select
                      id="type"
                      label="Project Domain"
                      options={[
                        { label: "High-Velocity Web Engineering", value: "web" },
                        { label: "Edge Infrastructure & Cloud", value: "cloud" },
                        { label: "Autonomous AI Systems", value: "ai" },
                        { label: "Design System & Product UI", value: "design" },
                      ]}
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    />

                    <Select
                      id="budget"
                      label="Target Budget"
                      options={[
                        { label: "< $5,000 USD", value: "under-5k" },
                        { label: "$5,000 – $15,000 USD", value: "5k-15k" },
                        { label: "$15,000 – $50,000 USD", value: "15k-50k" },
                        { label: "$50,000+ USD", value: "50k-plus" },
                      ]}
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    />
                  </div>

                  <Textarea
                    id="message"
                    label="Project Scope & Objectives"
                    placeholder="Brief overview of what you're building, target timeline, and any key technical constraints..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  {status === "error" && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex items-center gap-2 font-mono">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={status === "loading"}
                      icon={
                        status === "loading" ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )
                      }
                    >
                      {status === "loading" ? "Dispatching..." : "Transmit Inquiry"}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
