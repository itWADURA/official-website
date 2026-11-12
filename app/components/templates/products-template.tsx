"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, BellRing, Compass } from "lucide-react";
import { FUTURE_PRODUCTS } from "@/lib/constants";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";

export const ProductsTemplate: React.FC = () => {
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifySuccess, setNotifySuccess] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail && notifyEmail.includes("@")) {
      setNotifySuccess(true);
      setNotifyEmail("");
    }
  };

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <Badge variant="blue" className="mb-4">
            06 / OUR PRODUCTS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111827] leading-tight">
            Creating Products That{" "}
            <span className="text-[#193b63] block sm:inline">Simplify the Way We Work.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Alongside our client projects, we&apos;re exploring and developing our own digital products
            designed to solve practical challenges and make everyday business easier.
          </p>
        </div>

        {/* Central Ecosystem Introduction Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#f0f8fc] to-[#e8f4fa] border border-[#8ccff0]/50 p-8 sm:p-12 mb-12 shadow-sm text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#193b63] text-xs font-mono font-medium border border-[#8ccff0]/60 mb-4 shadow-xs">
            <Compass className="h-3.5 w-3.5 text-[#193b63]" />
            Product Ecosystem in Development
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#193b63] tracking-tight">
            New ideas are taking shape.
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#4b5563] max-w-xl mx-auto leading-relaxed">
            We are channeling our field experience with inventory, sales, and automation into focused,
            minimalist software products built for business operators.
          </p>

          {/* Product Updates CTA */}
          <div className="mt-8 max-w-md mx-auto">
            {notifySuccess ? (
              <div className="p-3.5 rounded-xl bg-white border border-[#8ccff0] text-xs font-semibold text-[#193b63] flex items-center justify-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#193b63]" />
                You&apos;ll be notified when our first public product beta opens!
              </div>
            ) : (
              <form onSubmit={handleNotify} className="flex gap-2">
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Enter your email for product updates"
                  required
                  className="flex-1 rounded-full bg-white border border-[rgba(17,24,39,0.12)] px-4 py-2.5 text-xs text-[#111827] outline-none focus:border-[#193b63]"
                />
                <Button variant="primary" size="sm" type="submit">
                  Notify Me
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Product Component Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FUTURE_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="rounded-3xl bg-[#f7f9fc] border border-[rgba(17,24,39,0.08)] p-8 sm:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#193b63]">
                    {prod.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white text-[#193b63] border border-[#8ccff0]/50 text-[11px] font-mono font-medium shadow-xs">
                    {prod.status}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-[#111827]">
                  {prod.name}
                </h4>
                <p className="text-xs sm:text-sm font-medium text-[#193b63] mt-1">
                  {prod.tagline}
                </p>

                <p className="mt-3 text-sm text-[#4b5563] leading-relaxed">
                  {prod.description}
                </p>

                <div className="mt-6 pt-5 border-t border-[rgba(17,24,39,0.06)] space-y-2">
                  <span className="text-[10px] font-mono uppercase text-gray-400 block tracking-wider">
                    Core Design Pillars
                  </span>
                  {prod.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#111827]">
                      <div className="h-4 w-4 rounded-full bg-[#f0f8fc] border border-[#8ccff0] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-2.5 w-2.5 text-[#193b63]" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(17,24,39,0.06)] text-xs text-gray-400 font-mono">
                Architecture Blueprint · In Internal Prototype
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

