"use client";

import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export const CtaTemplate: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.1] p-8 sm:p-16 text-center shadow-[0_24px_80px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.12)] overflow-hidden">
          {/* Ambient Lighting Cone behind text */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[350px] w-[500px] rounded-full blur-[100px] opacity-25 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(94, 106, 210, 0.6) 0%, rgba(64, 196, 255, 0.2) 60%, transparent 80%)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#d4f53b] mb-4 block">
              COLLABORATIVE ENGINEERING
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to build something legendary?{" "}
              <span className="text-muted-foreground font-normal block sm:inline">
                Let&apos;s architect your system.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              From concept validation to high-concurrency production deployments,
              our engineering team transforms complex ideas into flawless execution.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Schedule Architecture Review
              </Button>
              <Button
                href="mailto:info@itwadura.com"
                variant="secondary"
                size="lg"
                icon={<Mail className="h-4 w-4 text-muted-foreground" />}
                iconPosition="left"
              >
                info@itwadura.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
