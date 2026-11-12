"use client";

import React from "react";
import { BRAND_PRINCIPLES } from "@/lib/constants";
import { Badge } from "@/app/components/ui/badge";

export const WhyTemplate: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#f7f9fc] border-t border-b border-[rgba(17,24,39,0.06)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <Badge variant="navy-subtle" className="mb-4">
            07 / WHY ITWADURA
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111827] leading-tight">
            Built Around Your Business.{" "}
            <span className="text-[#193b63] block sm:inline">Driven by Technology.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4b5563] leading-relaxed">
            We operate as an engineering partner that prioritizes practical business outcomes over
            vanity metrics and unnecessary technical complexity.
          </p>
        </div>

        {/* 4 Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="rounded-3xl bg-white border border-[rgba(17,24,39,0.08)] p-8 shadow-[0_8px_30px_rgba(17,24,39,0.03)] hover:border-[#193b63]/30 transition-all hover:-translate-y-1"
            >
              <div className="h-10 w-10 rounded-xl bg-[#f0f8fc] border border-[#8ccff0]/60 flex items-center justify-center font-mono text-sm font-bold text-[#193b63] mb-6">
                {principle.number}
              </div>

              <h3 className="text-lg font-bold text-[#111827] mb-2.5">
                {principle.title}
              </h3>

              <p className="text-sm text-[#4b5563] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

