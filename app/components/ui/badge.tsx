import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "navy" | "navy-subtle" | "blue" | "neutral" | "active";
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "neutral",
  dot = false,
  children,
  ...props
}) => {
  const variantStyles = {
    navy: "bg-[#193b63] text-white border-[#193b63]",
    "navy-subtle": "bg-[#193b63]/[0.06] text-[#193b63] border-[#193b63]/[0.14]",
    blue: "bg-[#f0f8fc] text-[#193b63] border-[#8ccff0]/70",
    neutral: "bg-[#f7f9fc] text-[#4b5563] border-[rgba(17,24,39,0.08)]",
    active: "bg-[#f0f8fc] text-[#193b63] border-[#8ccff0]",
  };

  const dotColors = {
    navy: "bg-white",
    "navy-subtle": "bg-[#193b63]",
    blue: "bg-[#8ccff0]",
    neutral: "bg-[#6b7280]",
    active: "bg-[#193b63] animate-pulse",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide border transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && <span className={cn("h-1.5 w-1.5 rounded-full", dotColors[variant])} />}
      {children}
    </div>
  );
};
