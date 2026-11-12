import React from "react";
import { AmbientLight } from "./components/layout/ambient-light";
import { Navbar } from "./components/layout/navbar";
import { HeroTemplate } from "./components/templates/hero-template";
import { ServicesTemplate } from "./components/templates/services-template";
import { SolutionsTemplate } from "./components/templates/solutions-template";
import { ProcessTemplate } from "./components/templates/process-template";
import { TechStackTemplate } from "./components/templates/tech-stack-template";
import { WorkTemplate } from "./components/templates/work-template";
import { ProductsTemplate } from "./components/templates/products-template";
import { WhyTemplate } from "./components/templates/why-template";
import { ContactTemplate } from "./components/templates/contact-template";
import { Footer } from "./components/layout/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-[#111827]">
      {/* Subtle Light Editorial Top Ambient Glow & Dot Grid */}
      <AmbientLight />

      {/* Light Floating Navigation Bar */}
      <Navbar />

      {/* Main Editorial Content Sequence */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <HeroTemplate />

        {/* 01 / Our Expertise (Services: Web, Business Systems, Automation) */}
        <ServicesTemplate />

        {/* 02 / Business Solutions (Digital Presence, Inventory, Automation, Custom Software) */}
        <SolutionsTemplate />

        {/* 03 / Our Process (Discover, Design, Build, Launch) */}
        <ProcessTemplate />

        {/* 04 / Technology Stack */}
        <TechStackTemplate />

        {/* 05 / Selected Work (Architectural Concept Showcases) */}
        <WorkTemplate />

        {/* 06 / Future Software Products (Ecosystem Preview) */}
        <ProductsTemplate />

        {/* 07 / Why itWADURA (Principles) */}
        <WhyTemplate />

        {/* 08 / Contact Inquiry Form */}
        <ContactTemplate />
      </main>

      {/* Dark Navy Contrast Footer */}
      <Footer />
    </div>
  );
}
