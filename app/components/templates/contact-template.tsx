"use client";

import React, { useState } from "react";
import { Mail, Phone, Clock, CheckCircle2, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { CONTACT_SERVICES, CONTACT_BUDGET_TIERS } from "@/lib/constants";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Input, Textarea, Select } from "@/app/components/ui/input";

export const ContactTemplate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: CONTACT_SERVICES[0],
    budget: CONTACT_BUDGET_TIERS[0],
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
        throw new Error(data.error || "Failed to transmit inquiry.");
      }

      setStatus("success");
      setStatusMessage(data.message);
      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        service: CONTACT_SERVICES[0],
        budget: CONTACT_BUDGET_TIERS[0],
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setStatusMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please check your network or try again."
      );
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Badge variant="blue" className="mb-4">
                08 / LET&apos;S WORK TOGETHER
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111827] leading-tight">
                Have an Idea?{" "}
                <span className="text-[#193b63] block sm:inline">Let&apos;s Make It Happen.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#4b5563] leading-relaxed">
                Whether you&apos;re building a new website, improving business operations, or exploring automation, we&apos;d love to hear what you&apos;re working on.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f9fc] border border-[rgba(17,24,39,0.08)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-white border border-[rgba(17,24,39,0.08)] flex items-center justify-center text-[#193b63]">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111827]">Rapid Response</h4>
                  <p className="text-xs text-[#6b7280]">We review inquiries and reply within 24 business hours.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-white border border-[rgba(17,24,39,0.08)] flex items-center justify-center text-[#193b63]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111827]">Direct Email</h4>
                  <a href="mailto:hello@itwadura.com" className="text-xs text-[#193b63] font-medium hover:underline">
                    hello@itwadura.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#f0f8fc] border border-[#8ccff0]/50 text-xs text-[#193b63] leading-relaxed">
              <strong>Non-Disclosure &amp; Confidentiality:</strong> All business workflows and ideas discussed remain 100% confidential.
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#f7f9fc] border border-[rgba(17,24,39,0.08)] p-8 sm:p-10 shadow-[0_8px_30px_rgba(17,24,39,0.04)]">
              {status === "success" ? (
                <div className="p-8 text-center space-y-4">
                  <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#4b5563] max-w-md mx-auto leading-relaxed">
                    {statusMessage}
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setStatus("idle")}
                    >
                      Submit Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      id="name"
                      label="Your Name *"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input
                      id="businessName"
                      label="Business / Organization Name"
                      placeholder="Acme Enterprises (Optional)"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      id="email"
                      type="email"
                      label="Email Address *"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Input
                      id="phone"
                      type="tel"
                      label="Contact Number"
                      placeholder="+1 (555) 000-0000 (Optional)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      id="service"
                      label="Service Required *"
                      options={CONTACT_SERVICES.map((s) => ({ label: s, value: s }))}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    />
                    <Select
                      id="budget"
                      label="Estimated Budget"
                      options={CONTACT_BUDGET_TIERS.map((b) => ({ label: b, value: b }))}
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    />
                  </div>

                  <Textarea
                    id="message"
                    label="Project Description *"
                    required
                    placeholder="Tell us about your business, the challenge you're looking to solve, or what kind of software you'd like to build..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={status === "loading"}
                      icon={
                        status === "loading" ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )
                      }
                    >
                      {status === "loading" ? "Submitting Inquiry..." : "Send Project Inquiry"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
