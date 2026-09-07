import React from "react";
import { AmbientLight } from "./components/layout/ambient-light";
import { Navbar } from "./components/layout/navbar";
import { HeroTemplate } from "./components/templates/hero-template";
import { BentoGridTemplate } from "./components/templates/bento-grid";
import { TimelineTemplate } from "./components/templates/timeline-template";
import { WorkShowcaseTemplate } from "./components/templates/work-showcase";
import { TechMarqueeTemplate } from "./components/templates/tech-marquee";
import { CtaTemplate } from "./components/templates/cta-template";
import { ContactTemplate } from "./components/templates/contact-template";
import { Footer } from "./components/layout/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090a] text-white selection:bg-white selection:text-black">
      {/* Linear Ambient Spotlight & Micro-Grid */}
      <AmbientLight />

      {/* Glassmorphic Fixed Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-10 flex flex-col">
        <HeroTemplate />
        <TechMarqueeTemplate />
        <BentoGridTemplate />
        <TimelineTemplate />
        <WorkShowcaseTemplate />
        <CtaTemplate />
        <ContactTemplate />
      </main>

      {/* Linear Footer */}
      <Footer />
    </div>
  );
}
