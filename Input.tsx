import * as React from "react";

import { cn } from "@/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  dark?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, dark, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-slate-200 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50",
            dark
              ? "bg-secondary caret-white text-white placeholder:text-white"
              : "bg-white",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "text" && icon && (
          <div
            className={cn(
              "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
              dark ? "text-white fill-white" : ""
            )}
          >
            {icon}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
