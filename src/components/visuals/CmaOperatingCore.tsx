import { BrandLogo } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/utils";

const stages = [
  { label: "Diagnóstico", x: 18, y: 24 },
  { label: "Procesos", x: 74, y: 22 },
  { label: "Software", x: 83, y: 66 },
  { label: "Indicadores", x: 22, y: 72 },
  { label: "Medición", x: 50, y: 88 },
];

const connections = [
  "M 160 125 C 230 70 365 70 440 125",
  "M 448 150 C 520 228 520 310 462 372",
  "M 428 395 C 340 454 242 454 170 402",
  "M 142 372 C 82 300 78 214 140 150",
  "M 171 137 C 238 214 364 214 431 137",
];

type CmaOperatingCoreProps = {
  className?: string;
};

export function CmaOperatingCore({ className }: CmaOperatingCoreProps) {
  return (
    <div
      className={cn(
        "relative min-h-[430px] overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white/70 shadow-2xl shadow-[#0D1B3D]/10 backdrop-blur-xl dark:border-white/10 dark:bg-[#0A162E]/78 dark:shadow-black/35 md:min-h-[590px]",
        className,
      )}
    >
      <div className="premium-grid absolute inset-0 opacity-70" />
      <div className="ambient-scan absolute inset-[-16%] blur-2xl" />
      <div className="absolute inset-x-8 top-12 h-px bg-gradient-to-r from-transparent via-[#009A9A]/35 to-transparent dark:via-[#22C7C7]/35" />

      <svg
        aria-hidden="true"
        viewBox="0 0 600 520"
        className="absolute inset-0 h-full w-full text-[#009A9A] dark:text-[#22C7C7]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.24" />
            <stop offset="55%" stopColor="currentColor" stopOpacity="0.07" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="300" cy="260" r="178" fill="url(#coreGlow)" />
        <circle cx="300" cy="260" r="132" fill="none" stroke="currentColor" strokeOpacity="0.12" />
        <circle cx="300" cy="260" r="204" fill="none" stroke="currentColor" strokeOpacity="0.1" />
        {connections.map((connection) => (
          <path
            key={connection}
            d={connection}
            className="cma-core-flow"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 w-[min(78%,26rem)] -translate-x-1/2 -translate-y-1/2 rounded-[1.6rem] border border-[#0D1B3D]/10 bg-[#0D1B3D] p-5 text-white shadow-2xl shadow-[#0D1B3D]/25 dark:border-white/10 md:p-6">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2">
          <BrandLogo variant="mark" context="dark" className="scale-75" />
          <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#7FF0E6]">
            Sistema operativo CMA
          </span>
        </div>
        <p className="mx-auto mt-7 max-w-sm text-center text-2xl font-semibold leading-tight tracking-[-0.025em] md:text-4xl">
          Gestión conectada de punta a punta.
        </p>
        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-7 text-white/78">
          Un núcleo que ordena diagnóstico, procesos, software, indicadores y medición en un mismo flujo operativo.
        </p>
      </div>

      {stages.map((stage, index) => (
        <div
          key={stage.label}
          className="cma-core-node absolute z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#009A9A]/25 bg-white/92 px-3 py-2 font-mono text-xs font-bold text-[#005F5F] shadow-xl shadow-[#0D1B3D]/10 backdrop-blur dark:border-[#22C7C7]/30 dark:bg-[#0F1B36]/92 dark:text-[#5EEAD4] md:block"
          style={{ left: `${stage.x}%`, top: `${stage.y}%`, animationDelay: `${index * 0.35}s` }}
        >
          {stage.label}
        </div>
      ))}

      <div className="absolute inset-x-5 bottom-5 z-10 grid grid-cols-2 gap-2 md:hidden">
        {stages.map((stage) => (
          <div
            key={stage.label}
            className="rounded-xl border border-[#0D1B3D]/10 bg-white/86 px-3 py-2 text-center font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#0D1B3D] dark:border-white/10 dark:bg-[#0F1B36]/86 dark:text-[#CBD5E1]"
          >
            {stage.label}
          </div>
        ))}
      </div>
    </div>
  );
}
