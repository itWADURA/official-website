"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#193b63] text-white pt-20 pb-12 border-t border-[#234f85]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-8 w-8 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 p-1">
                <Image
                  src="/itWadura-logo-noBack.png"
                  alt="itWADURA"
                  width={24}
                  height={24}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                itWADURA
              </span>
            </Link>

            <p className="text-sm text-[#8ccff0] font-medium">
              Digital Solutions. Engineered for Growth.
            </p>

            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              Building digital experiences, intelligent business systems, and automation solutions that move businesses forward.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8ccff0] animate-pulse" />
                Available for Project Inquiries
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8ccff0] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <Link href="#hero" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8ccff0] font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Business Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Inventory Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Automation &amp; AI
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Custom Software
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8ccff0] font-semibold">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <a
                  href="mailto:hello@itwadura.com"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Email Inquiry <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  GitHub <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Facebook <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} itWADURA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-[#8ccff0]">
              Light Editorial Engineering
            </span>
            <a href="#hero" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
