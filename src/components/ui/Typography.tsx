import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: TextProps) {
  return (
    <p
      className={cn(
        "font-mono text-[0.72rem] font-bold uppercase leading-5 tracking-[0.24em] text-[#007A7A] dark:text-[#5EEAD4]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({ children, className }: TextProps) {
  return (
    <h2
      className={cn(
        "text-balance text-3xl font-semibold leading-[1.04] tracking-[-0.015em] text-[#0D1B3D] dark:text-[#F8FAFC] md:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function SectionLead({ children, className }: TextProps) {
  return (
    <p
      className={cn(
        "text-base leading-8 text-[#475467] dark:text-[#CBD5E1] md:text-lg",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function CardTitle({ children, className }: TextProps) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold leading-tight tracking-[-0.01em] text-[#0D1B3D] dark:text-[#F8FAFC]",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function CardBody({ children, className }: TextProps) {
  return (
    <p className={cn("text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]", className)}>
      {children}
    </p>
  );
}

export function Badge({ children, className }: TextProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border border-[#0D1B3D]/10 bg-white px-3 py-1 font-mono text-xs font-bold text-[#0D1B3D] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]",
        className,
      )}
    >
      {children}
    </span>
  );
}
