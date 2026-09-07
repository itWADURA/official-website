"use client";

import React from "react";
import { PROCESS_STEPS } from "@/lib/constants";
import { Badge } from "@/app/components/ui/badge";
import { Card } from "@/app/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const TimelineTemplate: React.FC = () => {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#08090a]/50 border-y border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <Badge variant="purple" dot className="mb-4">
            FIG 0.3 · EXECUTION ENGINE
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            The Execution Engine{" "}
            <span className="text-muted-foreground font-normal block sm:inline">
              from zero to high-velocity scale.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            A disciplined, high-velocity engineering cycle structured to eliminate friction,
            maintain pixel precision, and guarantee zero-downtime releases.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <Card
              key={step.step}
              hoverable
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-white/30">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {step.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                <span>{step.deliverable}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
