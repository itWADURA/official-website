"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "lime";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      external,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none rounded-full";

    const variantStyles = {
      primary:
        "bg-white text-black hover:bg-neutral-200 active:scale-[0.98] shadow-sm",
      secondary:
        "bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/[0.08] active:scale-[0.98] backdrop-blur-sm",
      outline:
        "bg-transparent hover:bg-white/[0.05] text-white border border-white/[0.14] active:scale-[0.98]",
      ghost:
        "bg-transparent hover:bg-white/[0.05] text-muted-foreground hover:text-white",
      lime:
        "bg-[#d4f53b] text-black font-semibold hover:bg-[#c3e332] active:scale-[0.98] shadow-sm",
    };

    const sizeStyles = {
      sm: "h-8 px-3.5 text-xs gap-1.5",
      md: "h-10 px-5 text-sm gap-2",
      lg: "h-12 px-7 text-base gap-2.5",
    };

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="inline-flex shrink-0 transition-transform group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </>
    );

    const mergedClass = cn(baseStyles, variantStyles[variant], sizeStyles[size], "group", className);

    if (href) {
      return (
        <Link
          href={href}
          className={mergedClass}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={mergedClass} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
