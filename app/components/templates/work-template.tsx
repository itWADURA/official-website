"use client";

import React from "react";
import { ArrowUpRight, Check, Layers, Sparkles } from "lucide-react";
import { PROJECT_CONCEPTS } from "@/lib/constants";
import { Badge } from "@/app/components/ui/badge";

export const WorkTemplate: React.FC = () => {
  return (
    <section id="work" className="relative py-24 sm:py-32 bg-[#f7f9fc] border-t border-b border-[rgba(17,24,39,0.06)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <Badge variant="navy-subtle" className="mb-4">
            05 / OUR WORK
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111827] leading-tight">
            Turning Ideas Into{" "}
            <span className="text-[#193b63] block sm:inline">Working Solutions.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Explore our architectural concepts demonstrating how we design and engineer
            practical software systems for modern businesses.
          </p>
        </div>

        {/* Concept Showcase Notice */}
        <div className="max-w-2xl mx-auto mb-12 p-4 rounded-2xl bg-white border border-[rgba(17,24,39,0.08)] text-center text-xs text-[#4b5563]">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#193b63] mr-2">
            <Sparkles className="h-3.5 w-3.5 text-[#193b63]" />
            Engineering Showcase Note:
          </span>
          These previews showcase our design standards and software capabilities. Real client case studies will be published as projects conclude.
        </div>

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECT_CONCEPTS.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white border border-[rgba(17,24,39,0.08)] p-8 sm:p-10 shadow-[0_8px_30px_rgba(17,24,39,0.04)] flex flex-col justify-between hover:border-[#193b63]/30 transition-all hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#193b63]">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#f0f8fc] text-[#193b63] border border-[#8ccff0]/60 text-[11px] font-mono font-medium">
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#111827] tracking-tight group-hover:text-[#193b63] transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-[#4b5563] leading-relaxed">
                  {project.description}
                </p>

                {/* Key Architectural Features */}
                <div className="mt-6 space-y-2 border-t border-[rgba(17,24,39,0.06)] pt-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2">
                    Key Architectural Capabilities
                  </span>
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#111827]">
                      <div className="h-4 w-4 rounded-full bg-[#f0f8fc] border border-[#8ccff0] flex items-center justify-center shrink-0">
                        <Check className="h-2.5 w-2.5 text-[#193b63]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies footer */}
              <div className="mt-8 pt-5 border-t border-[rgba(17,24,39,0.06)] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#f7f9fc] text-[#193b63] text-[11px] font-mono border border-[rgba(17,24,39,0.05)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#193b63] hover:text-[#122b49] transition-colors"
                >
                  Request similar build <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

