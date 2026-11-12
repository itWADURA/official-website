import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label htmlFor={id} className="block text-xs font-semibold tracking-wide text-[#193b63]">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "w-full rounded-xl bg-white border border-[rgba(17,24,39,0.12)] px-4 py-3 text-sm text-[#111827]",
            "placeholder:text-gray-400 transition-all duration-200 outline-none",
            "focus:border-[#193b63] focus:ring-2 focus:ring-[#8ccff0]/40 shadow-sm",
            error && "border-red-500 focus:border-red-500 focus:ring-red-200",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-600 font-mono">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label htmlFor={id} className="block text-xs font-semibold tracking-wide text-[#193b63]">
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          className={cn(
            "w-full rounded-xl bg-white border border-[rgba(17,24,39,0.12)] px-4 py-3 text-sm text-[#111827]",
            "placeholder:text-gray-400 transition-all duration-200 outline-none min-h-[120px] resize-y",
            "focus:border-[#193b63] focus:ring-2 focus:ring-[#8ccff0]/40 shadow-sm",
            error && "border-red-500 focus:border-red-500 focus:ring-red-200",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-600 font-mono">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { label: string; value: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label htmlFor={id} className="block text-xs font-semibold tracking-wide text-[#193b63]">
            {label}
          </label>
        )}
        <select
          id={id}
          ref={ref}
          className={cn(
            "w-full rounded-xl bg-white border border-[rgba(17,24,39,0.12)] px-4 py-3 text-sm text-[#111827]",
            "transition-all duration-200 outline-none cursor-pointer",
            "focus:border-[#193b63] focus:ring-2 focus:ring-[#8ccff0]/40 shadow-sm",
            error && "border-red-500 focus:border-red-500 focus:ring-red-200",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-xs text-red-600 font-mono">{error}</p>}
      </div>
    );
  }
);
Select.displayName = "Select";
