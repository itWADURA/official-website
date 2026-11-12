"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[rgba(17,24,39,0.07)] shadow-[0_4px_20px_rgba(17,24,39,0.03)]"
          : "bg-white/60 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-8 w-8 flex items-center justify-center rounded-lg bg-[#f0f8fc] border border-[#8ccff0]/50 p-1 transition-transform group-hover:scale-105">
            <Image
              src="/itWadura-logo-noBack.png"
              alt="itWADURA"
              width={26}
              height={26}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-[#193b63] leading-none">
              itWADURA
            </span>
            <span className="text-[10px] font-mono tracking-wider text-[#6b7280] uppercase mt-0.5">
              Engineering Studio
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            href="#hero"
            className="text-[13px] font-medium text-[#4b5563] transition-colors hover:text-[#193b63] relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#193b63] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Home
          </Link>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-[#4b5563] transition-colors hover:text-[#193b63] relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#193b63] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            icon={<ArrowRight className="h-3.5 w-3.5" />}
          >
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#193b63] hover:bg-[#f0f8fc] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[rgba(17,24,39,0.08)] bg-white px-6 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3.5">
            <Link
              href="#hero"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-[#111827] py-2 border-b border-gray-100"
            >
              Home
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[#4b5563] hover:text-[#193b63] py-2 border-b border-gray-100"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setIsOpen(false)}
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
