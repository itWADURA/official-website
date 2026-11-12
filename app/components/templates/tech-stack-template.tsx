"use client";

import React, { useState } from "react";
import { TECH_CATEGORIES } from "@/lib/constants";
import { Badge } from "@/app/components/ui/badge";

export const TechStackTemplate: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const flatTechList = [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Node.js",
    "Express.js",
    "Python",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Docker",
    "LangChain",
    "LangGraph",
    "Vercel Edge",
    "Git & GitHub",
  ];

  return (
    <section id="stack" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <Badge variant="blue" className="mb-4">
            04 / TECHNOLOGIES
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111827] leading-tight">
            Modern Tools.{" "}
            <span className="text-[#193b63] block sm:inline">Thoughtful Engineering.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4b5563] leading-relaxed">
            We build with battle-tested modern tools chosen strictly for performance, maintainability,
            and developer speed.
          </p>
        </div>

        {/* Continuous Horizontal Marquee Ticker */}
        <div className="relative mb-16 overflow-hidden rounded-2xl border border-[rgba(17,24,39,0.06)] bg-[#f7f9fc] py-4">
          <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-8 items-center">
            {[...flatTechList, ...flatTechList].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8ccff0]" />
                <span className="text-sm font-mono font-medium text-[#193b63]">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {TECH_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === idx
                  ? "bg-[#193b63] text-white shadow-sm"
                  : "bg-[#f7f9fc] text-[#4b5563] hover:bg-[#f0f8fc] hover:text-[#193b63] border border-[rgba(17,24,39,0.06)]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Selected Tech Cards Grid */}
        <div className="rounded-3xl bg-[#f7f9fc] border border-[rgba(17,24,39,0.08)] p-8 sm:p-12">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold text-[#111827]">
              {TECH_CATEGORIES[activeCategory].title}
            </h3>
            <p className="text-sm text-[#4b5563] mt-1">
              {TECH_CATEGORIES[activeCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {TECH_CATEGORIES[activeCategory].technologies.map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-2xl bg-white border border-[rgba(17,24,39,0.08)] shadow-xs hover:border-[#193b63]/30 transition-all hover:-translate-y-0.5"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6b7280]">
                  {item.tag}
                </span>
                <p className="text-base font-bold text-[#193b63] mt-1">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

