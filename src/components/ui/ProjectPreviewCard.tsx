import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectPreviewCardProps = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href?: string;
  accentColor: "emerald" | "cyan" | "hydria" | "teal";
  previewImage?: string;
  status: string;
};

const accents = {
  emerald: {
    line: "bg-[#4E9F45]",
    text: "text-[#34752E] dark:text-[#9DDB91]",
    surface: "bg-[#F4F8F3] dark:bg-[#0B231E]",
    address: "victor-abadie-web.vercel.app",
  },
  cyan: {
    line: "bg-[#22C7C7]",
    text: "text-[#007A7A] dark:text-[#7FF0E6]",
    surface: "bg-[#EDF7FA] dark:bg-[#08172D]",
    address: "market-intelligence-dashboard-pi.vercel.app",
  },
  hydria: {
    line: "bg-[#2E765E]",
    text: "text-[#245E4B] dark:text-[#9FC7B9]",
    surface: "bg-[#F5F4F0] dark:bg-[#111816]",
    address: "hydria-web.vercel.app",
  },
  teal: {
    line: "bg-[#009A9A]",
    text: "text-[#007A7A] dark:text-[#7FF0E6]",
    surface: "bg-[#ECF7F6] dark:bg-[#071D2C]",
    address: "cma-diagnostico-360.vercel.app",
  },
};

export function ProjectPreviewCard({
  title,
  subtitle,
  description,
  tags,
  href,
  accentColor,
  previewImage,
  status,
}: ProjectPreviewCardProps) {
  const accent = accents[accentColor];
  const isExternalHref = href?.startsWith("http");

  return (
    <article className="group overflow-hidden border border-[#0D1B3D]/12 bg-white transition duration-300 hover:border-[#0D1B3D]/24 dark:border-white/12 dark:bg-[#071225] dark:hover:border-white/24">
      <div className="p-3 sm:p-4">
        <div className="overflow-hidden border border-[#0D1B3D]/10 bg-white shadow-[0_18px_44px_rgba(13,27,61,0.12)] dark:border-white/10 dark:bg-[#071225]">
          <div className="flex h-10 items-center gap-3 border-b border-[#0D1B3D]/10 bg-[#F8FAFC] px-3 dark:border-white/10 dark:bg-[#0F1B36]">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E45F5F]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D8AA3B]" />
              <span className={cn("h-2.5 w-2.5 rounded-full", accent.line)} />
            </div>
            <div className="min-w-0 flex-1 border border-[#0D1B3D]/8 bg-white px-3 py-1 dark:border-white/8 dark:bg-white/5">
              <p className="truncate font-mono text-[0.58rem] font-semibold text-[#667085] dark:text-[#CBD5E1]">
                {accent.address}
              </p>
            </div>
          </div>

          <div className={cn("relative aspect-[16/9] overflow-hidden", accent.surface)}>
            {previewImage ? (
              <Image
                src={previewImage}
                alt={`Vista previa de ${title}`}
                fill
                sizes="(max-width: 768px) 92vw, (max-width: 1280px) 44vw, 620px"
                className="object-cover object-top transition duration-700 group-hover:scale-[1.015]"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center">
                <span className={cn("h-16 w-16 border", accent.text)} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-5 border-t border-[#0D1B3D]/10 p-5 dark:border-white/10 sm:p-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className={cn("font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em]", accent.text)}>
              {subtitle}
            </p>
            <span className="text-xs text-[#667085] dark:text-[#94A3B8]">{status}</span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[#0D1B3D] dark:text-white">
            {title}
          </h3>
          <p className="mt-3 max-w-[38rem] text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs font-semibold text-[#667085] dark:text-[#94A3B8]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {href ? (
          <a
            href={href}
            target={isExternalHref ? "_blank" : undefined}
            rel={isExternalHref ? "noopener noreferrer" : undefined}
            aria-label={`Ver proyecto ${title}`}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[#0D1B3D]/15 text-[#0D1B3D] transition hover:border-[#007A7A] hover:bg-[#007A7A] hover:text-white dark:border-white/15 dark:text-white dark:hover:border-[#5EEAD4] dark:hover:bg-[#5EEAD4] dark:hover:text-[#071225]"
          >
            <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
