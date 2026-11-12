"use client";

import React from "react";
import { Check, ArrowRight, Layers, Layout, PackageCheck, Zap, Database, BarChart3 } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";

export const ServicesTemplate: React.FC = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#f7f9fc] border-t border-b border-[rgba(17,24,39,0.06)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <Badge variant="navy-subtle" className="mb-4">
            01 / OUR EXPERTISE
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111827] leading-tight">
            Everything Your Business Needs{" "}
            <span className="text-[#193b63] block sm:inline">to Go Digital.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4b5563] leading-relaxed">
            We design and develop digital solutions that help businesses establish their presence,
            improve everyday operations, and work more efficiently.
          </p>
        </div>

        {/* Editorial Alternating Feature Layouts */}
        <div className="space-y-16 sm:space-y-24">
          {/* SERVICE 01: WEB DEVELOPMENT */}
          <div className="rounded-3xl bg-white border border-[rgba(17,24,39,0.08)] p-8 sm:p-12 shadow-[0_8px_30px_rgba(17,24,39,0.04)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs font-semibold tracking-wider text-[#193b63] uppercase">
                  {SERVICES[0].category}
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#111827] tracking-tight">
                  {SERVICES[0].title}
                </h3>
                <p className="text-base text-[#4b5563] leading-relaxed">
                  {SERVICES[0].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {SERVICES[0].items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#111827]">
                      <div className="h-4 w-4 rounded-full bg-[#f0f8fc] border border-[#8ccff0] flex items-center justify-center shrink-0">
                        <Check className="h-2.5 w-2.5 text-[#193b63]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    href="#contact"
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    {SERVICES[0].ctaText}
                  </Button>
                </div>
              </div>

              {/* Service 01 Visual: Browser Window Preview */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-[rgba(17,24,39,0.10)] bg-[#f7f9fc] p-4 sm:p-6 shadow-inner">
                  <div className="rounded-xl border border-[rgba(17,24,39,0.08)] bg-white p-5 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[11px] font-mono text-gray-400">preview.yourbusiness.com</span>
                    </div>
                    <div className="h-32 rounded-lg bg-gradient-to-br from-[#f0f8fc] to-[#e4f3fa] p-4 flex flex-col justify-end">
                      <span className="text-[10px] font-mono uppercase text-[#193b63] font-semibold">
                        Digital Experience
                      </span>
                      <p className="text-lg font-bold text-[#193b63]">
                        Modern Digital Presence Engineered for High Conversion
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded-lg bg-[#f7f9fc] border border-[rgba(17,24,39,0.05)]">
                        <span className="text-gray-400 block text-[10px]">Speed</span>
                        <span className="font-bold text-[#193b63]">0.4s Fast</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#f7f9fc] border border-[rgba(17,24,39,0.05)]">
                        <span className="text-gray-400 block text-[10px]">UX Score</span>
                        <span className="font-bold text-[#193b63]">100% Fluid</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#f7f9fc] border border-[rgba(17,24,39,0.05)]">
                        <span className="text-gray-400 block text-[10px]">SEO Ready</span>
                        <span className="font-bold text-[#193b63]">Ranked #1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 02: BUSINESS MANAGEMENT SYSTEMS (High Visual Importance) */}
          <div className="rounded-3xl bg-white border-2 border-[#193b63]/15 p-8 sm:p-12 shadow-[0_12px_40px_rgba(25,59,99,0.07)] relative overflow-hidden">
            {/* Subtle light-blue corner accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f0f8fc] -z-0 rounded-full blur-3xl opacity-70 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Visual Left */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="rounded-2xl border border-[rgba(17,24,39,0.10)] bg-[#f0f8fc]/60 p-4 sm:p-6 shadow-sm space-y-4">
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-white rounded-xl border border-[rgba(17,24,39,0.08)] shadow-xs">
                      <span className="text-[10px] text-gray-500 uppercase font-mono">Live SKU Count</span>
                      <p className="text-lg font-bold text-[#193b63]">2,410 Units</p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[rgba(17,24,39,0.08)] shadow-xs">
                      <span className="text-[10px] text-gray-500 uppercase font-mono">Today&apos;s POS Sales</span>
                      <p className="text-lg font-bold text-[#193b63]">$14,290</p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[rgba(17,24,39,0.08)] shadow-xs">
                      <span className="text-[10px] text-gray-500 uppercase font-mono">Stock Discrepancy</span>
                      <p className="text-lg font-bold text-emerald-600">0.00%</p>
                    </div>
                  </div>

                  {/* Stock Level Progress */}
                  <div className="p-4 bg-white rounded-xl border border-[rgba(17,24,39,0.08)] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#111827]">Automated Reorder Thresholds</span>
                      <span className="text-[#193b63] font-mono font-medium">Warehouse Sync Active</span>
                    </div>
                    <div className="w-full bg-[#f7f9fc] rounded-full h-2.5 overflow-hidden">
                      <div className="bg-[#193b63] h-2.5 rounded-full" style={{ width: "78%" }} />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-gray-500">
                      <span>Inventory Capacity: 78% Utilized</span>
                      <span>Next Supplier Delivery: Tomorrow 9:00 AM</span>
                    </div>
                  </div>

                  {/* Operational Feature Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-white text-[#193b63] border border-[#8ccff0]/60">
                      ✓ Barcode Scanning
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-white text-[#193b63] border border-[#8ccff0]/60">
                      ✓ Low Stock Alerts
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-white text-[#193b63] border border-[#8ccff0]/60">
                      ✓ Multi-Branch Registers
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-white text-[#193b63] border border-[#8ccff0]/60">
                      ✓ Real-Time Reports
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                <span className="font-mono text-xs font-semibold tracking-wider text-[#193b63] uppercase">
                  {SERVICES[1].category}
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#111827] tracking-tight">
                  {SERVICES[1].title}
                </h3>
                <p className="text-base text-[#4b5563] leading-relaxed">
                  {SERVICES[1].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {SERVICES[1].items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#111827]">
                      <div className="h-4 w-4 rounded-full bg-[#f0f8fc] border border-[#8ccff0] flex items-center justify-center shrink-0">
                        <Check className="h-2.5 w-2.5 text-[#193b63]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    href="#contact"
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    {SERVICES[1].ctaText}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 03: AUTOMATION & AI */}
          <div className="rounded-3xl bg-white border border-[rgba(17,24,39,0.08)] p-8 sm:p-12 shadow-[0_8px_30px_rgba(17,24,39,0.04)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs font-semibold tracking-wider text-[#193b63] uppercase">
                  {SERVICES[2].category}
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#111827] tracking-tight">
                  {SERVICES[2].title}
                </h3>
                <p className="text-base text-[#4b5563] leading-relaxed">
                  {SERVICES[2].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {SERVICES[2].items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#111827]">
                      <div className="h-4 w-4 rounded-full bg-[#f0f8fc] border border-[#8ccff0] flex items-center justify-center shrink-0">
                        <Check className="h-2.5 w-2.5 text-[#193b63]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    href="#contact"
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    {SERVICES[2].ctaText}
                  </Button>
                </div>
              </div>

              {/* Service 03 Visual: TRIGGER → PROCESS → DECISION → ACTION */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-[rgba(17,24,39,0.10)] bg-[#f7f9fc] p-5 sm:p-6 shadow-inner space-y-3">
                  <div className="text-xs font-mono font-semibold text-[#193b63] uppercase tracking-wider mb-2">
                    Workflow Architecture
                  </div>

                  {/* Flow Steps */}
                  <div className="space-y-2.5">
                    <div className="p-3 bg-white rounded-xl border border-[rgba(17,24,39,0.08)] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-lg bg-[#f0f8fc] text-[#193b63] font-mono text-xs font-bold flex items-center justify-center">
                          01
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#111827]">TRIGGER: Event Ingestion</p>
                          <p className="text-[11px] text-gray-500">New customer form, order, or stock change.</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#193b63] bg-[#f0f8fc] px-2 py-0.5 rounded border border-[#8ccff0]/50">
                        Webhook
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-[rgba(17,24,39,0.08)] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-lg bg-[#f0f8fc] text-[#193b63] font-mono text-xs font-bold flex items-center justify-center">
                          02
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#111827]">PROCESS: Data Transformation</p>
                          <p className="text-[11px] text-gray-500">Validates, sanitizes, and matches records.</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#193b63] bg-[#f0f8fc] px-2 py-0.5 rounded border border-[#8ccff0]/50">
                        Logic Engine
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-[rgba(17,24,39,0.08)] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-lg bg-[#f0f8fc] text-[#193b63] font-mono text-xs font-bold flex items-center justify-center">
                          03
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#111827]">DECISION: Conditional Routing</p>
                          <p className="text-[11px] text-gray-500">Evaluates business rules and threshold logic.</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#193b63] bg-[#f0f8fc] px-2 py-0.5 rounded border border-[#8ccff0]/50">
                        Smart Branch
                      </span>
                    </div>

                    <div className="p-3 bg-[#193b63] text-white rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-lg bg-white/10 text-[#8ccff0] font-mono text-xs font-bold flex items-center justify-center">
                          04
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">ACTION: Multi-System Dispatch</p>
                          <p className="text-[11px] text-white/80">Dispatches WhatsApp notice, updates DB, sends invoice.</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#8ccff0] bg-white/10 px-2 py-0.5 rounded border border-[#8ccff0]/40">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

