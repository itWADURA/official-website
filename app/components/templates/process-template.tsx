"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, FileCode, Search, Palette, Rocket } from "lucide-react";
import { PROCESS_STAGES } from "@/lib/constants";
import { Badge } from "@/app/components/ui/badge";

export const ProcessTemplate: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stageIcons = [
    <Search key="discover" className="h-5 w-5" />,
    <Palette key="design" className="h-5 w-5" />,
    <FileCode key="build" className="h-5 w-5" />,
    <Rocket key="launch" className="h-5 w-5" />,
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#f7f9fc] border-t border-b border-[rgba(17,24,39,0.06)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <Badge variant="navy-subtle" className="mb-4">
            03 / OUR PROCESS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111827] leading-tight">
            From the First Idea{" "}
            <span className="text-[#193b63] block sm:inline">to the Final Product.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4b5563] leading-relaxed">
            A disciplined, transparent delivery methodology designed to eliminate ambiguity,
            guarantee technical quality, and launch on schedule.
          </p>
        </div>

        {/* Timeline Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {PROCESS_STAGES.map((stage, idx) => {
            const isCurrent = idx === activeStep;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border cursor-pointer ${
                  isCurrent
                    ? "bg-[#193b63] text-white border-[#193b63] shadow-md shadow-[#193b63]/15"
                    : "bg-white text-[#4b5563] hover:bg-[#f0f8fc] hover:text-[#193b63] border-[rgba(17,24,39,0.08)]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isCurrent ? "text-[#8ccff0]" : "text-[#193b63]"
                    }`}
                  >
                    STAGE {stage.step}
                  </span>
                  <span className={isCurrent ? "text-[#8ccff0]" : "text-[#6b7280]"}>
                    {stageIcons[idx]}
                  </span>
                </div>
                <h4
                  className={`text-base font-bold tracking-tight ${
                    isCurrent ? "text-white" : "text-[#111827]"
                  }`}
                >
                  {stage.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Presentation */}
        <div className="rounded-3xl bg-white border border-[rgba(17,24,39,0.08)] p-8 sm:p-12 shadow-[0_8px_30px_rgba(17,24,39,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f8fc] border border-[#8ccff0]/50 text-xs font-mono text-[#193b63] font-semibold uppercase">
                Stage {PROCESS_STAGES[activeStep].step} · {PROCESS_STAGES[activeStep].title}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111827]">
                {PROCESS_STAGES[activeStep].subtitle}
              </h3>
              <p className="text-base text-[#4b5563] leading-relaxed">
                {PROCESS_STAGES[activeStep].description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#193b63] block mb-3">
                  Stage Deliverables &amp; Artifacts
                </span>
                <div className="space-y-2.5">
                  {PROCESS_STAGES[activeStep].deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-[#f0f8fc] border border-[#8ccff0] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#193b63]" />
                      </div>
                      <span className="text-sm font-medium text-[#111827]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Timeline Graphic Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[rgba(17,24,39,0.08)] bg-[#f7f9fc] p-6 space-y-4">
                <span className="text-xs font-mono uppercase text-[#6b7280] tracking-wider block">
                  Methodology Status
                </span>
                <div className="space-y-3">
                  {PROCESS_STAGES.map((s, idx) => (
                    <div
                      key={s.step}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-all ${
                        idx === activeStep
                          ? "bg-white border-[#193b63] font-semibold text-[#193b63] shadow-xs"
                          : idx < activeStep
                          ? "bg-white/60 border-gray-200 text-gray-500"
                          : "bg-transparent border-dashed border-gray-200 text-gray-400"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono">{s.step}</span>
                        <span>{s.title}</span>
                      </div>
                      <span>
                        {idx === activeStep
                          ? "In Focus"
                          : idx < activeStep
                          ? "Completed Step"
                          : "Upcoming"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

