"use client";

import React from "react";

export const AmbientLight: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      {/* Deep obsidian base */}
      <div className="absolute inset-0 bg-[#08090a]" />

      {/* Top primary ambient cone / radial spotlight */}
      <div
        className="absolute -top-[250px] left-1/2 -translate-x-1/2 h-[650px] w-[900px] max-w-[100vw] rounded-full blur-[140px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(94, 106, 210, 0.35) 0%, rgba(64, 196, 255, 0.15) 50%, transparent 75%)",
        }}
      />

      {/* Subtle mid-page ambient fill */}
      <div
        className="absolute top-[40%] right-[-100px] h-[500px] w-[500px] rounded-full blur-[150px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Subtle bottom accent glow */}
      <div
        className="absolute bottom-[-150px] left-[-100px] h-[600px] w-[600px] rounded-full blur-[160px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(64, 196, 255, 0.25) 0%, transparent 70%)",
        }}
      />

      {/* Linear micro-grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08090a]" />
    </div>
  );
};
