import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
}: CTAButtonProps) {
  const variants = {
    primary:
      "bg-[#0D1B3D] !text-white shadow-lg shadow-[#0D1B3D]/15 hover:-translate-y-0.5 hover:bg-[#009A9A] hover:!text-white",
    secondary:
      "border border-[#0D1B3D]/15 bg-white text-[#0D1B3D] shadow-sm hover:-translate-y-0.5 hover:border-[#009A9A]/50 hover:text-[#007A7A] dark:border-white/15 dark:bg-[#0F1B36] dark:text-[#F8FAFC] dark:hover:text-[#5EEAD4]",
    ghost: "text-[#0D1B3D] hover:text-[#007A7A] dark:text-[#F8FAFC] dark:hover:text-[#5EEAD4]",
  };

  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-[10px] px-5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007A7A]",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
