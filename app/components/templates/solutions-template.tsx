"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Monitor, ShoppingBag, Cpu, Terminal } from "lucide-react";
import { BUSINESS_SOLUTIONS } from "@/lib/constants";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";

export const SolutionsTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState(BUSINESS_SOLUTIONS[0].id);

  const activeSolution =
    BUSINESS_SOLUTIONS.find((s) => s.id === activeTab) || BUSINESS_SOLUTIONS[0];

  const iconMap: Record<string, React.ReactNode> = {
    "digital-presence": <Monitor className="h-4 w-4" />,
    "inventory-operations": <ShoppingBag className="h-4 w-4" />,
    "process-automation": <Cpu className="h-4 w-4" />,
    "custom-software": <Terminal className="h-4 w-4" />,
  };

  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <Badge variant="blue" className="mb-4">
            02 / BUSINESS SOLUTIONS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111827] leading-tight">
            Technology That Fits{" "}
            <span className="text-[#193b63] block sm:inline">Your Business.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Every business has distinct operational bottlenecks. Explore how our engineered solutions
            map directly to your business use cases.
          </p>
        </div>

        {/* Interactive Solution Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {BUSINESS_SOLUTIONS.map((item) => {
            const isSelected = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#193b63] text-white shadow-md shadow-[#193b63]/15"
                    : "bg-[#f7f9fc] text-[#4b5563] hover:bg-[#f0f8fc] hover:text-[#193b63] border border-[rgba(17,24,39,0.06)]"
                }`}
              >
                <span className={isSelected ? "text-[#8ccff0]" : "text-[#6b7280]"}>
                  {iconMap[item.id]}
                </span>
                {item.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Selected Solution Presentation Card */}
        <div className="rounded-3xl bg-[#f7f9fc] border border-[rgba(17,24,39,0.08)] p-8 sm:p-12 shadow-[0_8px_30px_rgba(17,24,39,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Info Col */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#193b63]">
                {activeSolution.tabLabel} · Strategic Implementation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                {activeSolution.title}
              </h3>
              <p className="text-base text-[#4b5563] leading-relaxed">
                {activeSolution.description}
              </p>

              <div className="space-y-3 pt-2">
                {activeSolution.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-[#f0f8fc] border border-[#8ccff0] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-[#193b63]" />
                    </div>
                    <span className="text-sm font-medium text-[#111827]">{point}</span>
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
                  Consult on {activeSolution.tabLabel}
                </Button>
              </div>
            </div>

            {/* Visual Metric Col */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[rgba(17,24,39,0.08)] bg-white p-8 shadow-sm space-y-6 text-center">
                <span className="text-xs font-mono uppercase text-[#6b7280] tracking-wider block">
                  Core Engineering Metric
                </span>
                <div className="text-5xl sm:text-6xl font-extrabold text-[#193b63] tracking-tight">
                  {activeSolution.visualMetric}
                </div>
                <div className="font-semibold text-sm text-[#111827]">
                  {activeSolution.visualLabel}
                </div>
                <div className="p-4 rounded-xl bg-[#f0f8fc] border border-[#8ccff0]/50 text-xs text-[#193b63] leading-relaxed text-left">
                  <strong>Outcome-Focused Design:</strong> Every technical decision is weighed against how it directly lowers operational overhead and accelerates customer delivery.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

