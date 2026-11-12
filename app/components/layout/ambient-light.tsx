import React from "react";

export const AmbientLight: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top ambient light-blue spotlight */}
      <div
        className="absolute left-1/2 -top-[250px] -translate-x-1/2 h-[600px] w-[1100px] rounded-full opacity-40 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(140, 207, 240, 0.45) 0%, rgba(240, 248, 252, 0.1) 70%, transparent 100%)",
        }}
      />
      {/* Subtle micro dot grid */}
      <div className="absolute inset-0 opacity-[0.4] editorial-grid-bg" />
    </div>
  );
};
