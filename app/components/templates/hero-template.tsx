"use client";

import React, { useState } from "react";
import { ArrowRight, Layout, PackageCheck, Workflow, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export const HeroTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"web" | "inventory" | "automation">("web");

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Ambient Hero Background Elements (Pure White Editorial Base) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* 1. Subtle Central Hero Light-Blue Spotlight */}
        <div
          className="absolute left-1/2 top-6 sm:top-12 -translate-x-1/2 w-[650px] sm:w-[950px] h-[450px] sm:h-[600px] rounded-full blur-[90px] sm:blur-[130px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(140, 207, 240, 0.22) 0%, rgba(140, 207, 240, 0.06) 50%, transparent 75%)",
          }}
        />

        {/* 2. Fine Technical Grid Pattern (Extremely faint navy lines, 0.035 opacity) */}
        <div
          className="absolute inset-0 hero-technical-grid"
          style={{
            maskImage: "radial-gradient(ellipse 65% 55% at 50% 32%, black 35%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 32%, black 35%, transparent 80%)",
          }}
        />

        {/* 3. Softly Blurred Floating Ambient Blue Orbs */}
        {/* Orb 1: Upper-left soft light blue */}
        <div
          className="absolute -top-12 left-[6%] sm:left-[12%] w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full blur-[100px] sm:blur-[140px] animate-hero-orb-1 will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(140, 207, 240, 0.16) 0%, rgba(140, 207, 240, 0.03) 65%, transparent 80%)",
          }}
        />

        {/* Orb 2: Upper-right subtle navy orb */}
        <div
          className="absolute top-20 right-[5%] sm:right-[10%] w-[300px] sm:w-[440px] h-[300px] sm:h-[440px] rounded-full blur-[110px] sm:blur-[150px] animate-hero-orb-2 will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(25, 59, 99, 0.03) 0%, rgba(140, 207, 240, 0.05) 55%, transparent 75%)",
          }}
        />

        {/* Orb 3: Behind workspace preview */}
        <div
          className="absolute top-[48%] left-1/2 w-[460px] sm:w-[680px] h-[260px] sm:h-[360px] rounded-full blur-[110px] sm:blur-[150px] animate-hero-orb-3 will-change-transform"
          style={{
            background:
              "radial-gradient(ellipse, rgba(140, 207, 240, 0.12) 0%, rgba(240, 248, 252, 0.05) 60%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Main Hero Header */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Micro-Typography Badge */}
          <div className="inline-flex mb-6">
            <Badge variant="blue" dot>
              DIGITAL SOLUTIONS / SOFTWARE ENGINEERING
            </Badge>
          </div>

          {/* Expressive Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-[#111827] leading-[1.08]">
            Building Digital Experiences{" "}
            <span className="text-[#193b63] relative inline-block">
              That Move Businesses Forward.
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#8ccff0]/30 -z-10 rounded-full" />
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#4b5563] leading-relaxed">
            From modern websites to custom business systems and intelligent automation, itWADURA helps businesses turn ideas into practical digital solutions.
          </p>

          {/* Dual Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Start a Project
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              Explore What We Do
            </Button>
          </div>

          {/* Supporting Value Proposition Line */}
          <p className="mt-5 text-xs sm:text-sm font-medium text-[#6b7280]">
            Thoughtful design. Reliable engineering. Smarter business.
          </p>
        </div>

        {/* Custom Interactive Workspace Composition */}
        <div className="mt-14 sm:mt-16 mx-auto max-w-5xl">
          {/* Interactive Capabilities Switcher */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <button
              onClick={() => setActiveTab("web")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "web"
                  ? "bg-[#193b63] text-white shadow-sm"
                  : "bg-[#f7f9fc] text-[#4b5563] hover:bg-[#f0f8fc] hover:text-[#193b63] border border-[rgba(17,24,39,0.06)]"
              }`}
            >
              <Layout className="h-3.5 w-3.5" />
              Web Experiences
            </button>
            <button
              onClick={() => setActiveTab("inventory")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "inventory"
                  ? "bg-[#193b63] text-white shadow-sm"
                  : "bg-[#f7f9fc] text-[#4b5563] hover:bg-[#f0f8fc] hover:text-[#193b63] border border-[rgba(17,24,39,0.06)]"
              }`}
            >
              <PackageCheck className="h-3.5 w-3.5" />
              Business Systems
            </button>
            <button
              onClick={() => setActiveTab("automation")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "automation"
                  ? "bg-[#193b63] text-white shadow-sm"
                  : "bg-[#f7f9fc] text-[#4b5563] hover:bg-[#f0f8fc] hover:text-[#193b63] border border-[rgba(17,24,39,0.06)]"
              }`}
            >
              <Workflow className="h-3.5 w-3.5" />
              Automation Workflows
            </button>
          </div>

          {/* Floating Browser / System Interface Frame */}
          <div className="rounded-2xl border border-[rgba(17,24,39,0.10)] bg-white shadow-[0_20px_50px_rgba(25,59,99,0.08)] overflow-hidden">
            {/* macOS / Web Window Controls */}
            <div className="flex items-center justify-between border-b border-[rgba(17,24,39,0.08)] bg-[#f7f9fc] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#f87171]/80" />
                <span className="h-3 w-3 rounded-full bg-[#fbbf24]/80" />
                <span className="h-3 w-3 rounded-full bg-[#34d399]/80" />
                <span className="ml-3 font-mono text-[11px] text-[#6b7280]">
                  {activeTab === "web" && "itwadura.studio/client-experience"}
                  {activeTab === "inventory" && "systems.itwadura.internal/inventory-control"}
                  {activeTab === "automation" && "pipelines.itwadura.io/sync-dispatch"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#8ccff0] animate-pulse" />
                <span className="font-mono text-[10px] text-[#193b63] font-medium uppercase tracking-wider">
                  Interactive Demo
                </span>
              </div>
            </div>

            {/* Dynamic Interactive Stage Content */}
            <div className="p-6 sm:p-10 bg-white min-h-[380px] flex items-center justify-center">
              {/* TAB 1: WEB EXPERIENCES PREVIEW */}
              {activeTab === "web" && (
                <div className="w-full space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(17,24,39,0.06)]">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#193b63] font-semibold">
                        Preview: High-Conversion Digital Presence
                      </span>
                      <h3 className="text-xl font-bold text-[#111827]">
                        Acme Enterprises · Corporate Digital Platform
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-[#f0f8fc] text-[#193b63] text-xs font-mono font-medium border border-[#8ccff0]/50">
                        100/100 Core Web Vitals
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 rounded-xl bg-[#f7f9fc] border border-[rgba(17,24,39,0.06)]">
                      <span className="text-xs text-[#6b7280]">Average Load Time</span>
                      <p className="text-2xl font-bold text-[#193b63] mt-1">0.45s</p>
                      <p className="text-xs text-[#111827] mt-2">Next.js Edge rendering & image streaming</p>
                    </div>
                    <div className="p-5 rounded-xl bg-[#f0f8fc] border border-[#8ccff0]/40">
                      <span className="text-xs text-[#193b63]">Inquiry Conversion Rate</span>
                      <p className="text-2xl font-bold text-[#193b63] mt-1">+68%</p>
                      <p className="text-xs text-[#4b5563] mt-2">Intuitive UX wireframing & responsive layouts</p>
                    </div>
                    <div className="p-5 rounded-xl bg-[#f7f9fc] border border-[rgba(17,24,39,0.06)]">
                      <span className="text-xs text-[#6b7280]">Mobile Responsiveness</span>
                      <p className="text-2xl font-bold text-[#193b63] mt-1">100%</p>
                      <p className="text-xs text-[#111827] mt-2">Tailored fluid scaling for all device widths</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#193b63] text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#8ccff0]" />
                      <span className="text-sm font-medium">
                        Custom-engineered for seamless lead generation & client onboarding.
                      </span>
                    </div>
                    <a
                      href="#services"
                      className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-[#8ccff0] hover:underline"
                    >
                      View web development services <ChevronRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* TAB 2: BUSINESS SYSTEMS PREVIEW */}
              {activeTab === "inventory" && (
                <div className="w-full space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(17,24,39,0.06)]">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#193b63] font-semibold">
                        Preview: Custom Operations & Inventory Suite
                      </span>
                      <h3 className="text-xl font-bold text-[#111827]">
                        Central Warehouse & Point-of-Sale Portal
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#f0f8fc] text-[#193b63] text-xs font-mono font-medium border border-[#8ccff0]/50">
                      Live Multi-Location Sync
                    </span>
                  </div>

                  {/* Mock Inventory Table */}
                  <div className="overflow-x-auto rounded-xl border border-[rgba(17,24,39,0.08)]">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#f7f9fc] text-[#6b7280] font-mono border-b border-[rgba(17,24,39,0.08)]">
                        <tr>
                          <th className="py-2.5 px-4 font-medium">SKU / Item</th>
                          <th className="py-2.5 px-4 font-medium">Location</th>
                          <th className="py-2.5 px-4 font-medium">In Stock</th>
                          <th className="py-2.5 px-4 font-medium">Reorder Status</th>
                          <th className="py-2.5 px-4 font-medium text-right">Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[rgba(17,24,39,0.05)] text-[#111827]">
                        <tr>
                          <td className="py-3 px-4 font-medium text-[#193b63]">SKU-8921 · Precision Sensor Unit</td>
                          <td className="py-3 px-4 text-[#4b5563]">Main Depot (Rack B4)</td>
                          <td className="py-3 px-4 font-bold">142 units</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center gap-1 text-[#193b63] font-medium bg-[#f0f8fc] px-2 py-0.5 rounded text-[11px] border border-[#8ccff0]/40">
                              Optimal
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right font-mono">$7,100</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-[#193b63]">SKU-4402 · Thermal Controller</td>
                          <td className="py-3 px-4 text-[#4b5563]">Branch North</td>
                          <td className="py-3 px-4 font-bold text-amber-600">8 units</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center gap-1 text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded text-[11px] border border-amber-200">
                              Reorder Triggered
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right font-mono">$1,920</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-[#193b63]">SKU-1089 · Industrial Relay Pack</td>
                          <td className="py-3 px-4 text-[#4b5563]">Main Depot (Rack A1)</td>
                          <td className="py-3 px-4 font-bold">380 units</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center gap-1 text-[#193b63] font-medium bg-[#f0f8fc] px-2 py-0.5 rounded text-[11px] border border-[#8ccff0]/40">
                              Optimal
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right font-mono">$4,560</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-[#6b7280]">
                    *Custom inventory software built to replace fragile spreadsheets with zero operational friction.
                  </p>
                </div>
              )}

              {/* TAB 3: AUTOMATION WORKFLOWS PREVIEW */}
              {activeTab === "automation" && (
                <div className="w-full space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(17,24,39,0.06)]">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#193b63] font-semibold">
                        Preview: Event-Driven Automation Diagram
                      </span>
                      <h3 className="text-xl font-bold text-[#111827]">
                        Trigger → Process → Decision → Action Engine
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#f0f8fc] text-[#193b63] text-xs font-mono font-medium border border-[#8ccff0]/50">
                      Zero Human Touch
                    </span>
                  </div>

                  {/* Interactive Workflow Node Chain */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <div className="p-4 rounded-xl bg-[#f7f9fc] border border-[rgba(17,24,39,0.08)] relative">
                      <span className="text-[10px] font-mono uppercase text-[#6b7280]">01 · TRIGGER</span>
                      <h4 className="text-sm font-bold text-[#193b63] mt-1">Customer Order Placed</h4>
                      <p className="text-xs text-[#4b5563] mt-1">Webhook catches e-commerce sale event.</p>
                      <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 bg-white border border-[#8ccff0] rounded-full flex items-center justify-center text-[9px] text-[#193b63] font-bold">
                        →
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#f0f8fc] border border-[#8ccff0]/50 relative">
                      <span className="text-[10px] font-mono uppercase text-[#193b63] font-semibold">02 · PROCESS</span>
                      <h4 className="text-sm font-bold text-[#193b63] mt-1">Stock Deducted</h4>
                      <p className="text-xs text-[#4b5563] mt-1">Real-time inventory ledger decremented.</p>
                      <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 bg-white border border-[#8ccff0] rounded-full flex items-center justify-center text-[9px] text-[#193b63] font-bold">
                        →
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#f7f9fc] border border-[rgba(17,24,39,0.08)] relative">
                      <span className="text-[10px] font-mono uppercase text-[#6b7280]">03 · DECISION</span>
                      <h4 className="text-sm font-bold text-[#193b63] mt-1">Threshold Check</h4>
                      <p className="text-xs text-[#4b5563] mt-1">If stock &lt; threshold, alert supplier.</p>
                      <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 bg-white border border-[#8ccff0] rounded-full flex items-center justify-center text-[9px] text-[#193b63] font-bold">
                        →
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#193b63] text-white">
                      <span className="text-[10px] font-mono uppercase text-[#8ccff0]">04 · ACTION</span>
                      <h4 className="text-sm font-bold text-white mt-1">Receipt &amp; WhatsApp</h4>
                      <p className="text-xs text-white/80 mt-1">Customer receives automated PDF delivery notice.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#f7f9fc] rounded-lg border border-[rgba(17,24,39,0.06)] text-xs text-[#4b5563] flex items-center justify-between">
                    <span>Average Execution Time: <strong>180 milliseconds</strong></span>
                    <span className="font-mono text-[#193b63] font-semibold">99.99% Event Delivery</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
