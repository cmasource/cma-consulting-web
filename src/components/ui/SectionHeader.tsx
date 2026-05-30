import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-9 max-w-4xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-mono text-[0.72rem] font-bold uppercase leading-5 tracking-[0.24em] text-[#007A7A] dark:text-[#5EEAD4]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-[1.04] tracking-[-0.015em] text-[#0D1B3D] dark:text-[#F8FAFC] md:text-[2.8rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[#475467] dark:text-[#CBD5E1] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
