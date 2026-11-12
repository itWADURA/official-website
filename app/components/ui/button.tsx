"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
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
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none rounded-full group";

    const variantStyles = {
      primary:
        "bg-[#193b63] text-white hover:bg-[#122b49] active:scale-[0.98] shadow-sm hover:shadow-md",
      secondary:
        "bg-white text-[#193b63] border border-[rgba(17,24,39,0.12)] hover:bg-[#f0f8fc] hover:border-[#8ccff0] active:scale-[0.98] shadow-sm",
      accent:
        "bg-[#8ccff0] text-[#193b63] font-semibold hover:bg-[#7bc0e3] active:scale-[0.98] shadow-sm",
      outline:
        "bg-transparent hover:bg-[#f7f9fc] text-[#111827] border border-[rgba(17,24,39,0.14)] hover:border-[#193b63]/30 active:scale-[0.98]",
      ghost:
        "bg-transparent hover:bg-[#f0f8fc] text-[#193b63] hover:text-[#122b49]",
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

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
