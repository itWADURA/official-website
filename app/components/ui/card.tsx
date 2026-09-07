import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  glow?: boolean;
  borderHighlight?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  hoverable = false,
  glow = false,
  borderHighlight = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md p-6 sm:p-8",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
        hoverable && "transition-all duration-300 hover:bg-white/[0.035] hover:border-white/[0.14] hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.12)]",
        glow && "before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100 before:pointer-events-none",
        borderHighlight && "border-white/[0.14]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
