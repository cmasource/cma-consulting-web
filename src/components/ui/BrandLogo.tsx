import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoVariant = "consulting" | "source" | "mark" | "sourceStacked";
type BrandLogoContext = "light" | "dark" | "auto";

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  context?: BrandLogoContext;
  className?: string;
  priority?: boolean;
};

const logoConfig = {
  consulting: {
    src: "/brand/cma-consulting-header.png",
    alt: "CMA Consulting",
    width: 622,
    height: 144,
    frame: "h-9 w-[156px] sm:h-11 sm:w-[190px] lg:h-12 lg:w-[207px]",
    sizes: "(max-width: 640px) 156px, (max-width: 1024px) 190px, 207px",
  },
  source: {
    src: "/brand/cma-source-horizontal.png",
    alt: "cma_source",
    width: 643,
    height: 131,
    frame: "h-9 w-[176px] sm:h-11 sm:w-[216px] lg:h-12 lg:w-[236px]",
    sizes: "(max-width: 640px) 176px, (max-width: 1024px) 216px, 236px",
  },
  mark: {
    src: "/brand/cma-monogram.png",
    alt: "CMA",
    width: 295,
    height: 130,
    frame: "h-11 w-[100px] sm:h-12 sm:w-[109px]",
    sizes: "(max-width: 640px) 100px, 109px",
  },
  sourceStacked: {
    src: "/brand/cma-source-stacked.png",
    alt: "cma_source",
    width: 287,
    height: 198,
    frame: "h-20 w-[116px] sm:h-24 sm:w-[139px]",
    sizes: "(max-width: 640px) 116px, 139px",
  },
} as const satisfies Record<BrandLogoVariant, {
  src: string;
  alt: string;
  width: number;
  height: number;
  frame: string;
  sizes: string;
}>;

export function BrandLogo({
  variant = "consulting",
  context = "auto",
  className,
  priority = false,
}: BrandLogoProps) {
  const logo = logoConfig[variant];

  return (
    <span
      className={cn(
        "inline-flex max-w-full shrink-0 items-center overflow-visible",
        context === "dark" &&
          "rounded-xl bg-white px-3 py-2 shadow-sm",
        context === "auto" &&
          "dark:rounded-xl dark:bg-white dark:px-3 dark:py-2 dark:shadow-sm",
        className,
      )}
    >
      <span className={cn("relative block shrink-0 overflow-visible", logo.frame)}>
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          priority={priority}
          sizes={logo.sizes}
          className="h-full w-full object-contain"
        />
      </span>
    </span>
  );
}
