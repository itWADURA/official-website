import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "soft-blue" | "neutral";
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  variant = "white",
  hoverable = false,
  children,
  ...props
}) => {
  const variantStyles = {
    white: "bg-white border-[rgba(17,24,39,0.08)]",
    "soft-blue": "bg-[#f0f8fc] border-[#8ccff0]/40",
    neutral: "bg-[#f7f9fc] border-[rgba(17,24,39,0.07)]",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl border p-6 sm:p-8 transition-all duration-300",
        "shadow-[0_4px_20px_rgba(17,24,39,0.04)]",
        variantStyles[variant],
        hoverable &&
          "hover:border-[rgba(25,59,99,0.28)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(25,59,99,0.08)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
