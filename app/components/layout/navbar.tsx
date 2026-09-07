"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/app/components/ui/button";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#08090a]/80 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-7 w-7 transition-transform group-hover:scale-105">
            <Image
              src="/itWadura-logo-noBack.png"
              alt="itWADURA"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-sm font-semibold tracking-tight text-white transition-opacity group-hover:opacity-90">
            itWADURA
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href="https://github.com/itWADURA"
            variant="ghost"
            size="sm"
            external
            icon={<ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />}
          >
            GitHub
          </Button>
          <Button href="#contact" variant="primary" size="sm">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] md:hidden text-white hover:bg-white/[0.08] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-white/[0.08] bg-[#08090a]/95 backdrop-blur-2xl px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/[0.08] flex flex-col gap-3">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                Get in Touch
              </Button>
              <Button
                href="https://github.com/itWADURA"
                variant="secondary"
                size="md"
                external
                className="w-full"
              >
                GitHub Repository
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
