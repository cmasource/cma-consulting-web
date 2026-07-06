import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PreviewKind = "real-estate" | "market" | "hydria" | "diagnosis";

type ProjectPreviewCardProps = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href?: string;
  accentColor: "emerald" | "cyan" | "hydria" | "teal";
  previewImage?: string;
  logoImage?: string;
  status: string;
  previewKind: PreviewKind;
  caseHighlights?: Array<{
    label: string;
    text: string;
  }>;
};

const accents = {
  emerald: {
    shell:
      "border-emerald-700/18 bg-[linear-gradient(135deg,#F7FCF8,#EEF8F1)] dark:border-emerald-300/20 dark:bg-[linear-gradient(135deg,rgba(6,78,59,0.22),rgba(7,18,37,0.96))]",
    text: "text-emerald-700 dark:text-emerald-300",
    button: "bg-emerald-700 hover:bg-emerald-800",
    bar: "bg-emerald-500",
    glow: "bg-emerald-500/18",
    address: "victor-abadie-web.vercel.app",
  },
  cyan: {
    shell:
      "border-[#009A9A]/20 bg-[linear-gradient(135deg,#F4FBFC,#EEF6FF)] dark:border-[#22C7C7]/25 dark:bg-[linear-gradient(135deg,rgba(34,199,199,0.13),rgba(7,18,37,0.96))]",
    text: "text-[#007A7A] dark:text-[#5EEAD4]",
    button: "bg-[#0D1B3D] hover:bg-[#009A9A]",
    bar: "bg-[#22C7C7]",
    glow: "bg-[#22C7C7]/18",
    address: "market-intelligence-dashboard-pi.vercel.app",
  },
  hydria: {
    shell:
      "border-slate-800/14 bg-[linear-gradient(135deg,#FFFFFF,#F2F5F4)] dark:border-white/12 dark:bg-[linear-gradient(135deg,rgba(148,163,184,0.12),rgba(7,18,37,0.98))]",
    text: "text-slate-800 dark:text-slate-200",
    button: "bg-[#111816] hover:bg-[#1F6F5A]",
    bar: "bg-[#2E765E]",
    glow: "bg-slate-500/16",
    address: "hydria-web.vercel.app",
  },
  teal: {
    shell:
      "border-teal-700/20 bg-[linear-gradient(135deg,#F3FCFB,#F6F5FF)] dark:border-teal-300/20 dark:bg-[linear-gradient(135deg,rgba(20,184,166,0.14),rgba(7,18,37,0.96))]",
    text: "text-teal-700 dark:text-teal-300",
    button: "bg-teal-700 hover:bg-teal-800",
    bar: "bg-teal-400",
    glow: "bg-teal-500/18",
    address: "CMA Diagnóstico 360",
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
  logoImage,
  status,
  previewKind,
  caseHighlights,
}: ProjectPreviewCardProps) {
  const accent = accents[accentColor];
  const isExternalHref = href?.startsWith("http");

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[1.65rem] border p-3.5 shadow-xl shadow-[#0D1B3D]/8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0D1B3D]/14 md:p-4",
        accent.shell,
      )}
    >
      <div className={cn("absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl", accent.glow)} />
      <div className="relative grid gap-4 xl:grid-cols-[1.18fr_0.82fr] xl:items-center">
        <BrowserShowcase
          accent={accent}
          previewImage={previewImage}
          logoImage={logoImage}
          kind={previewKind}
        />

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className={cn("font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em]", accent.text)}>
              {subtitle}
            </p>
            <span className="rounded-full border border-[#0D1B3D]/10 bg-white/70 px-2.5 py-1 text-[0.68rem] font-semibold text-[#475467] dark:border-white/10 dark:bg-white/8 dark:text-[#CBD5E1]">
              {status}
            </span>
          </div>

          <h3 className="mt-2.5 text-[1.35rem] font-semibold leading-tight tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC]">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#475467] dark:text-[#CBD5E1]">
            {description}
          </p>

          {caseHighlights?.length ? (
            <div className="mt-3 grid gap-2">
              {caseHighlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-xl border border-[#0D1B3D]/10 bg-white/70 px-3 py-2 dark:border-white/10 dark:bg-[#071225]/70"
                >
                  <p className={cn("font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em]", accent.text)}>
                    {highlight.label}
                  </p>
                  <p className="mt-0.5 text-xs leading-5 text-[#475467] dark:text-[#CBD5E1]">
                    {highlight.text}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#0D1B3D]/10 bg-white/75 px-2.5 py-1 text-[0.7rem] font-semibold text-[#0D1B3D] dark:border-white/10 dark:bg-[#071225]/80 dark:text-[#CBD5E1]"
              >
                {tag}
              </span>
            ))}
          </div>

          {href ? (
            <a
              href={href}
              target={isExternalHref ? "_blank" : undefined}
              rel={isExternalHref ? "noopener noreferrer" : undefined}
              className={cn(
                "mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-[10px] px-3.5 text-sm font-semibold !text-white transition hover:-translate-y-0.5",
                accent.button,
              )}
            >
              Ver proyecto
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          ) : (
            <span className="mt-4 inline-flex min-h-10 items-center justify-center rounded-[10px] border border-[#0D1B3D]/10 bg-white/78 px-3.5 text-sm font-semibold text-[#475467] dark:border-white/10 dark:bg-[#071225]/78 dark:text-[#CBD5E1]">
              En desarrollo
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function BrowserShowcase({
  accent,
  previewImage,
  logoImage,
  kind,
}: {
  accent: (typeof accents)[keyof typeof accents];
  previewImage?: string;
  logoImage?: string;
  kind: PreviewKind;
}) {
  return (
    <div className="relative">
      <div className={cn("absolute -inset-4 rounded-[2rem] blur-2xl", accent.glow)} />
      <div className="relative overflow-hidden rounded-[1.25rem] border border-white/70 bg-white shadow-2xl shadow-[#0D1B3D]/16 dark:border-white/12 dark:bg-[#071225]">
        <div className="flex items-center gap-3 border-b border-[#0D1B3D]/10 bg-white/92 px-3 py-1.5 dark:border-white/10 dark:bg-[#0A162E]">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F4C542]" />
            <span className={cn("h-2.5 w-2.5 rounded-full", accent.bar)} />
          </div>
          <div className="flex min-w-0 flex-1 items-center rounded-full bg-[#F2F4F7] px-3 py-1.5 dark:bg-white/8">
            <span className="truncate font-mono text-[0.62rem] font-semibold text-[#667085] dark:text-[#CBD5E1]">
              {accent.address}
            </span>
          </div>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden bg-[#F8FAFC] dark:bg-[#071225]">
          {previewImage ? (
            <Image
              src={previewImage}
              alt=""
              fill
              sizes="(max-width: 768px) 86vw, 520px"
              className="object-cover object-top"
            />
          ) : (
            <FallbackPreview accentClass={accent.bar} kind={kind} />
          )}
          {logoImage ? (
            <Image
              src={logoImage}
              alt=""
              width={104}
              height={40}
              className="absolute left-4 top-4 h-10 w-auto rounded-md bg-white/90 object-contain p-1.5 shadow-sm"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function FallbackPreview({
  accentClass,
  kind,
}: {
  accentClass: string;
  kind: PreviewKind;
}) {
  if (kind === "real-estate") return <RealEstatePreview accentClass={accentClass} />;
  if (kind === "market") return <MarketPreview accentClass={accentClass} />;
  if (kind === "hydria") return <HydriaPreview accentClass={accentClass} />;
  return <DiagnosisPreview accentClass={accentClass} />;
}

function RealEstatePreview({ accentClass }: { accentClass: string }) {
  return (
    <div className="absolute inset-0 bg-[#F4F4F3] p-5">
      <div className="grid h-full grid-cols-[1fr_0.95fr] gap-5">
        <div className="flex flex-col justify-center">
          <div className={cn("mb-5 h-2 w-32 rounded-full", accentClass)} />
          <div className="h-8 w-48 rounded bg-[#111111]" />
          <div className="mt-3 h-8 w-56 rounded bg-[#111111]" />
          <div className="mt-3 h-8 w-44 rounded bg-[#111111]" />
          <div className="mt-6 h-3 w-64 rounded-full bg-[#667085]/25" />
          <div className="mt-3 h-3 w-52 rounded-full bg-[#667085]/20" />
          <div className="mt-7 flex gap-3">
            <div className="h-9 w-28 rounded-lg bg-[#111111]" />
            <div className={cn("h-9 w-32 rounded-lg", accentClass)} />
          </div>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-xl">
          <div className="h-24 rounded-lg bg-[#111111]" />
          <div className="mt-3 grid grid-cols-2 gap-2">
            {["San Luis", "Juana Koslay", "La Punta", "El Volcan"].map((item) => (
              <div key={item} className="rounded-lg border border-black/8 bg-[#F3F4F6] p-3">
                <div className={cn("h-1.5 w-12 rounded-full", accentClass)} />
                <div className="mt-3 h-2.5 w-20 rounded-full bg-black/75" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketPreview({ accentClass }: { accentClass: string }) {
  return (
    <div className="absolute inset-0 bg-[#071225] p-5 text-white">
      <div className="grid h-full grid-cols-[0.95fr_1.05fr] gap-5">
        <div className="rounded-xl border border-cyan-300/20 bg-[#0D1B3D] p-4">
          <div className={cn("h-1.5 w-36 rounded-full", accentClass)} />
          <div className="mt-6 h-7 w-52 rounded bg-white/90" />
          <div className="mt-3 h-7 w-44 rounded bg-white/90" />
          <div className="mt-6 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-16 rounded-lg border border-cyan-300/20 bg-white/6" />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-cyan-300/20 bg-white/5 p-4">
          <div className="h-10 rounded-xl bg-white/7" />
          <div className="mt-4 grid gap-3">
            {["AL30", "GD30", "AAPL"].map((item, index) => (
              <div key={item} className="rounded-xl border border-cyan-300/25 bg-[#0D1B3D] p-3">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-20 rounded-full bg-white/80" />
                  <div className={cn("h-2 rounded-full", accentClass)} style={{ width: 42 + index * 16 }} />
                </div>
                <div className="mt-3 h-2 w-28 rounded-full bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HydriaPreview({ accentClass }: { accentClass: string }) {
  return (
    <div className="absolute inset-0 bg-[#F7F5F1] p-5">
      <div className="grid h-full grid-cols-[0.9fr_1.1fr] gap-5">
        <div className="flex items-center justify-center rounded-xl border border-black/8 bg-white">
          <div className="relative h-40 w-24 rounded-[2rem] bg-[linear-gradient(90deg,#090B0E,#30343A,#090B0E)] shadow-2xl">
            <span className="absolute left-1/2 top-4 h-5 w-10 -translate-x-1/2 rounded-full bg-black/50" />
            <span className={cn("absolute bottom-8 left-1/2 h-16 w-1 -translate-x-1/2 rounded-full", accentClass)} />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="h-3 w-24 rounded-full bg-[#111816]/25" />
          <div className="mt-5 h-8 w-56 rounded bg-[#111816]" />
          <div className="mt-3 h-8 w-44 rounded bg-[#111816]" />
          <div className="mt-6 h-3 w-52 rounded-full bg-[#667085]/24" />
          <div className="mt-3 h-3 w-44 rounded-full bg-[#667085]/18" />
          <div className="mt-7 flex gap-2">
            {["#111816", "#8FB7C6", "#46777B", "#D6D0C8"].map((color) => (
              <span key={color} className="h-8 w-8 rounded-full border-2 border-white shadow" style={{ backgroundColor: color }} />
            ))}
          </div>
          <div className="mt-6 h-10 rounded-lg bg-[#111816]" />
        </div>
      </div>
    </div>
  );
}

function DiagnosisPreview({ accentClass }: { accentClass: string }) {
  return (
    <div className="absolute inset-0 bg-[#071225] p-5 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,199,199,0.16),transparent_34%)]" />
      <div className="relative flex h-full flex-col items-center justify-center text-center">
        <div className="rounded-full border border-cyan-200/15 bg-white/8 px-4 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-cyan-200">
          CMA Consulting
        </div>
        <div className="mt-6 h-8 w-64 rounded bg-white/90" />
        <div className="mt-3 h-8 w-48 rounded bg-white/90" />
        <div className="mt-6 h-3 w-72 rounded-full bg-white/25" />
        <div className="mt-3 h-3 w-56 rounded-full bg-white/18" />
        <div className={cn("mt-7 h-11 w-44 rounded-full", accentClass)} />
        <div className="mt-7 grid w-full max-w-sm grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <div key={item} className="rounded-xl border border-cyan-200/15 bg-white/7 p-3">
              <div className={cn("h-2 rounded-full", accentClass)} />
              <div className="mt-3 h-2 rounded-full bg-white/18" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
