"use client";

import React from "react";
import { TECH_STACK } from "@/lib/constants";

export const TechMarqueeTemplate: React.FC = () => {
  return (
    <section id="stack" className="relative py-16 sm:py-24 overflow-hidden border-y border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8 text-center">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground block">
          ENGINEERED WITH MODERN PRIMITIVES
        </span>
      </div>

      {/* Infinite Marquee Ribbon */}
      <div className="relative w-full overflow-hidden mask-edge-fade">
        <div className="animate-marquee flex items-center gap-4 py-2">
          {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
            <div
              key={`${tech}-${idx}`}
              className="flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-mono text-muted-foreground bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] hover:text-white transition-all cursor-default select-none shrink-0"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
