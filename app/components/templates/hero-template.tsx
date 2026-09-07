"use client";

import React, { useState } from "react";
import { ArrowRight, Terminal, Cpu, Zap, Activity } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Kbd } from "@/app/components/ui/kbd";

export const HeroTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"telemetry" | "architecture" | "agents">("telemetry");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Micro-Typography Badge */}
          <div className="inline-flex mb-6">
            <Badge variant="lime" dot>
              FIG 0.1 · DIGITAL ENGINEERING & SCALE
            </Badge>
          </div>

          {/* Dual-Tone Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Crafting Digital Excellence{" "}
            <span className="text-[#8a8f98] font-normal block sm:inline">
              with high-velocity engineering.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            itWADURA architects immersive web platforms, resilient edge infrastructure,
            and autonomous AI workflows built for companies scaling the future.
          </p>

          {/* Dual Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Start Your Project
            </Button>
            <Button href="#capabilities" variant="secondary" size="lg">
              Explore Capabilities
            </Button>
          </div>

          {/* Micro Shortcut Tip */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-subtle-foreground font-mono">
            <span>Press</span>
            <Kbd>C</Kbd>
            <span>to jump to contact inquiry</span>
          </div>
        </div>

        {/* High-Fidelity Linear-Style Workspace Console Mockup */}
        <div className="mt-16 sm:mt-20 mx-auto max-w-5xl">
          <div className="relative rounded-2xl bg-[#0d0e12] border border-white/[0.1] shadow-[0_24px_80px_-16px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.1)] overflow-hidden">
            {/* Window Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-white/10" />
                <div className="h-3 w-3 rounded-full bg-white/10" />
                <div className="h-3 w-3 rounded-full bg-white/10" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                  itwadura-node-cluster-prod · v2.4.0
                </span>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-1 bg-white/[0.03] p-1 rounded-lg border border-white/[0.06]">
                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    activeTab === "telemetry"
                      ? "bg-white/[0.08] text-white shadow-xs"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  Telemetry
                </button>
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    activeTab === "architecture"
                      ? "bg-white/[0.08] text-white shadow-xs"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  Edge Config
                </button>
                <button
                  onClick={() => setActiveTab("agents")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    activeTab === "agents"
                      ? "bg-white/[0.08] text-white shadow-xs"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  Agent Stream
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ALL_SYSTEMS_OPTIMAL</span>
              </div>
            </div>

            {/* Console Body */}
            <div className="p-6 sm:p-8 font-mono">
              {activeTab === "telemetry" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Activity className="h-3.5 w-3.5 text-cyan-400" />
                        P99 Latency
                      </div>
                      <div className="mt-2 text-2xl font-bold text-white">18.4ms</div>
                      <div className="mt-1 text-[11px] text-emerald-400">-4.2ms vs baseline</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Zap className="h-3.5 w-3.5 text-[#d4f53b]" />
                        Edge Throughput
                      </div>
                      <div className="mt-2 text-2xl font-bold text-white">48.2k</div>
                      <div className="mt-1 text-[11px] text-muted-foreground">req / sec global</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Cpu className="h-3.5 w-3.5 text-purple-400" />
                        Memory Delta
                      </div>
                      <div className="mt-2 text-2xl font-bold text-white">124MB</div>
                      <div className="mt-1 text-[11px] text-emerald-400">Zero memory leaks</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Terminal className="h-3.5 w-3.5 text-amber-400" />
                        SSL Verification
                      </div>
                      <div className="mt-2 text-2xl font-bold text-white">TLS 1.3</div>
                      <div className="mt-1 text-[11px] text-emerald-400">Encrypted AES-256</div>
                    </div>
                  </div>

                  {/* Terminal Log Stream */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-muted-foreground space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">➜</span>
                      <span className="text-white">cluster.init</span>
                      <span className="text-muted-foreground/60">[regions: sfo1, iad1, fra1, sin1]</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">✔</span>
                      <span>Turbopack HMR reconciled 24 components in 32ms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">⚡</span>
                      <span>Next.js 16 Edge Runtime dispatching streaming SSR response payload</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "architecture" && (
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-muted-foreground space-y-2 font-mono">
                  <p className="text-white font-semibold mb-2">&#47;&#47; Edge Distribution Topology</p>
                  <p><span className="text-purple-400">export const</span> edgeTopology = &#123;</p>
                  <p className="pl-4">provider: <span className="text-[#d4f53b]">&apos;multi-region-edge&apos;</span>,</p>
                  <p className="pl-4">protocol: <span className="text-[#d4f53b]">&apos;HTTP/3 over QUIC&apos;</span>,</p>
                  <p className="pl-4">caching: &#123; strategy: <span className="text-[#d4f53b]">&apos;stale-while-revalidate&apos;</span>, ttl: 86400 &#125;,</p>
                  <p className="pl-4">encryption: <span className="text-[#d4f53b]">&apos;Zero-Trust WireGuard&apos;</span>,</p>
                  <p>&#125;;</p>
                </div>
              )}

              {activeTab === "agents" && (
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-muted-foreground space-y-2 font-mono">
                  <p className="text-white font-semibold mb-2">&#47;&#47; Autonomous Pipeline Stream</p>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span>[AGENT_ORCHESTRATOR]</span>
                    <span>Vector context indexed (dim=1536)</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span>[STREAMING_INFERENCE]</span>
                    <span>Generated optimized GraphQL resolver AST</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#d4f53b]">
                    <span>[EVALUATION]</span>
                    <span>Confidence score: 0.998 · Ready for production deployment</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
