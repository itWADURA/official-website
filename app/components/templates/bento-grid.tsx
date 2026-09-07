"use client";

import React from "react";
import { Globe, Zap, Cpu, ShieldCheck, ArrowUpRight } from "lucide-react";
import { CAPABILITIES } from "@/lib/constants";
import { Badge } from "@/app/components/ui/badge";
import { Card } from "@/app/components/ui/card";

export const BentoGridTemplate: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    "immersive-engineering": <Globe className="h-5 w-5 text-cyan-400" />,
    "scalable-infrastructure": <Zap className="h-5 w-5 text-[#d4f53b]" />,
    "ai-agents": <Cpu className="h-5 w-5 text-purple-400" />,
    "enterprise-reliability": <ShieldCheck className="h-5 w-5 text-emerald-400" />,
  };

  return (
    <section id="capabilities" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <Badge variant="cyan" dot className="mb-4">
            FIG 0.2 · ARCHITECTURE & CAPABILITIES
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            System Capabilities{" "}
            <span className="text-muted-foreground font-normal block sm:inline">
              engineered for mission-critical scale.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            We do not build generic websites. We deliver raw engineering craftsmanship,
            ultra-low latency, and resilient architecture.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap) => (
            <Card
              key={cap.id}
              hoverable
              glow
              className="flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08]">
                      {iconMap[cap.id]}
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {cap.figure}
                      </span>
                      <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
                        {cap.title}
                      </h3>
                    </div>
                  </div>

                  <Badge variant={cap.status === "active" ? "active" : cap.status === "optimized" ? "lime" : "purple"} dot>
                    {cap.badge}
                  </Badge>
                </div>

                {/* Subtitle & Description */}
                <p className="text-sm font-medium text-white/90 mb-2">
                  {cap.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Footer with metric telemetry & tech tags */}
              <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-muted-foreground block">
                    {cap.metric.label}
                  </span>
                  <span className="text-sm font-bold font-mono text-white flex items-center gap-1.5 mt-0.5">
                    {cap.metric.value}
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-muted-foreground"
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
