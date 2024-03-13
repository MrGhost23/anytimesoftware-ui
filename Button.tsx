import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-[#00459F] text-white hover:bg-[#00459fb5]",
        destructive: "bg-warning text-white hover:bg-red-700",
        outline: "bg-transparent border border-slate-200 text-white",
        ghost: "bg-transparent hover:bg-[#00459F] text-white",
        add: "bg-[#0549A5] text-white hover:bg-[#0548a5ef]",
        delete: "bg-warning text-white hover:bg-red-600",
        link: "bg-transparent underline-offset-4 hover:underline text-white hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 text-sm rounded-md",
        lg: "h-11 text-lg px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, href, variant, startIcon, endIcon, size, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {startIcon && <div className="mr-2">{startIcon}</div>}

        {children}
        {endIcon && <div className="ml-2">{endIcon}</div>}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
