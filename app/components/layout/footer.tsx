"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, GitCommit, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { CommitActivity } from "@/app/api/github-activity/route";

export const Footer: React.FC = () => {
  const [commits, setCommits] = useState<CommitActivity[]>([]);

  useEffect(() => {
    fetch("/api/github-activity")
      .then((res) => res.json())
      .then((data) => {
        if (data.activities?.length) {
          setCommits(data.activities);
        }
      })
      .catch((err) => console.warn("[FOOTER_GITHUB_FETCH_ERROR]:", err));
  }, []);

  return (
    <footer className="border-t border-white/[0.06] bg-[#08090a] pt-16 pb-12 text-sm text-muted-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-7 w-7">
                <Image
                  src="/itWadura-logo-noBack.png"
                  alt="itWADURA"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-semibold tracking-tight text-white">
                itWADURA
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed">
              Architecting Digital Presence. Scaling Social Influence. Delivering high-velocity
              cloud engineering and autonomous AI interfaces.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/itWADURA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.1] transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.1] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.1] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Live GitHub Feed Col */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white flex items-center gap-2">
                <GitCommit className="h-3.5 w-3.5 text-cyan-400" />
                Latest Engineering Activity
              </h4>
              <a
                href="https://github.com/itWADURA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-muted-foreground hover:text-white flex items-center gap-1"
              >
                <span>@itWADURA</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>

            <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 space-y-3">
              {commits.length === 0 ? (
                <div className="text-xs font-mono text-muted-foreground py-2">
                  Synchronizing GitHub activity stream...
                </div>
              ) : (
                commits.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-start justify-between gap-4 text-xs font-mono"
                  >
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white truncate transition-colors"
                    >
                      {c.message}
                    </a>
                    <span className="text-subtle-foreground shrink-0">{c.timestamp}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-subtle-foreground">
          <p>© {new Date().getFullYear()} itWADURA. Engineered for digital excellence.</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/80 font-mono">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
