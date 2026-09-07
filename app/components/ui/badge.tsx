import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "neutral" | "active" | "warning" | "lime" | "cyan" | "purple";
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
    neutral: "bg-white/[0.04] text-muted-foreground border-white/[0.08]",
    active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    lime: "bg-[#d4f53b]/10 text-[#d4f53b] border-[#d4f53b]/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  };

  const dotColors = {
    neutral: "bg-muted-foreground",
    active: "bg-emerald-400 animate-pulse",
    warning: "bg-amber-400",
    lime: "bg-[#d4f53b] animate-pulse",
    cyan: "bg-cyan-400 animate-pulse",
    purple: "bg-purple-400",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide uppercase border backdrop-blur-sm",
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
