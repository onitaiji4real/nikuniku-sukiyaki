import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-8 py-3 transition-all duration-300 tracking-wider text-sm md:text-base font-medium",
        variant === "primary" &&
          "bg-gold-500 text-sumi-950 hover:bg-gold-400 hover:scale-105 shadow-[0_4px_14px_0_rgba(212,175,55,0.39)]",
        variant === "outline" &&
          "border border-gold-500 text-gold-500 hover:bg-gold-500/10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
