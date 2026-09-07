"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { Badge } from "@/app/components/ui/badge";
import { Card } from "@/app/components/ui/card";

export const WorkShowcaseTemplate: React.FC = () => {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <Badge variant="lime" dot className="mb-4">
            FIG 0.4 · PROVEN SYSTEMS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Selected Production Systems{" "}
            <span className="text-muted-foreground font-normal block sm:inline">
              built for performance.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            A portfolio of production-grade platforms engineered to handle high throughput,
            complex state, and mission-critical SLAs.
          </p>
        </div>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj) => (
            <Card
              key={proj.id}
              hoverable
              glow
              className={`flex flex-col justify-between group ${proj.span}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {proj.category}
                  </span>
                  <Badge variant="neutral" dot>
                    {proj.badge}
                  </Badge>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors flex items-center justify-between">
                  <span>{proj.headline}</span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-mono font-bold text-white">
                    {proj.metric}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {proj.metricLabel}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
