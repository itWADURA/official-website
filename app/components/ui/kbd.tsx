import React from "react";
import { cn } from "@/lib/utils";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Kbd: React.FC<KbdProps> = ({ className, children, ...props }) => {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[10px] font-mono font-semibold",
        "bg-white/[0.06] text-muted-foreground border border-white/[0.1] rounded shadow-xs select-none",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
};
