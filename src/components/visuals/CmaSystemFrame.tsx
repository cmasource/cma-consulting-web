import { BrandLogo } from "@/components/ui/BrandLogo";
import { AnimatedFlowLine } from "@/components/visuals/AnimatedFlowLine";

const stages = [
  "Diagnóstico",
  "Procesos",
  "Herramientas",
  "Implementación",
  "Medición",
];

const modules = [
  { label: "Roles claros", className: "left-[7%] top-[18%]" },
  { label: "Datos visibles", className: "right-[8%] top-[22%]" },
  { label: "Costos controlados", className: "left-[12%] bottom-[21%]" },
  { label: "Ventas con seguimiento", className: "right-[10%] bottom-[24%]" },
  { label: "Mejora medible", className: "left-1/2 top-[7%] -translate-x-1/2" },
];

export function CmaSystemFrame() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white/65 shadow-2xl shadow-[#0D1B3D]/10 backdrop-blur-xl dark:border-white/10 dark:bg-[#0A162E]/70 dark:shadow-black/35 md:min-h-[590px]">
      <div className="premium-grid absolute inset-0 opacity-70" />
      <div className="ambient-scan absolute inset-[-18%] blur-2xl" />
      <div className="absolute inset-x-8 top-12 h-px bg-gradient-to-r from-transparent via-[#009A9A]/35 to-transparent dark:via-[#22C7C7]/35" />
      <AnimatedFlowLine className="absolute inset-x-8 top-24 h-56 opacity-75" />

      <div className="absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#009A9A]/15 bg-[#009A9A]/5 dark:border-[#22C7C7]/15 dark:bg-[#22C7C7]/5" />
      <div className="absolute left-1/2 top-1/2 h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0D1B3D]/5 dark:border-white/5" />

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-xl flex-col justify-center px-5 py-14 text-center md:min-h-[590px] md:px-8">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#0D1B3D]/10 bg-white/80 px-4 py-2 shadow-lg shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#071225]/80">
          <BrandLogo variant="mark" context="auto" className="scale-75" />
          <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#005F5F] dark:text-[#5EEAD4]">
            Sistema de gestión
          </span>
        </div>

        <div className="mt-9 rounded-[1.4rem] border border-[#0D1B3D]/10 bg-[#0D1B3D] p-5 text-white shadow-2xl shadow-[#0D1B3D]/25 dark:border-white/10 md:p-6">
          <p className="text-2xl font-semibold leading-tight tracking-[-0.02em] md:text-4xl">
            Operación ordenada, visible y medible.
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/80">
            Un flujo que conecta diagnóstico, procesos, herramientas y medición
            sin convertir la tecnología en una capa aislada.
          </p>
          <div className="mt-6 grid gap-2 sm:grid-cols-5">
            {stages.map((stage, index) => (
              <div
                key={stage}
                className="rounded-xl border border-white/10 bg-white/10 p-2 text-center"
              >
                <span className="font-mono text-[0.65rem] font-bold text-[#7FF0E6]">
                  0{index + 1}
                </span>
                <p className="mt-1 text-[0.72rem] font-semibold text-white/85">
                  {stage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modules.map((module) => (
        <div
          key={module.label}
          className={`node-pulse absolute z-20 hidden rounded-full border border-[#009A9A]/25 bg-white/90 px-3 py-2 font-mono text-xs font-bold text-[#005F5F] shadow-xl shadow-[#0D1B3D]/10 backdrop-blur dark:border-[#22C7C7]/30 dark:bg-[#0F1B36]/90 dark:text-[#5EEAD4] md:block ${module.className}`}
        >
          {module.label}
        </div>
      ))}

      <div className="relative z-10 grid gap-2 px-5 pb-5 md:hidden">
        {modules.slice(0, 4).map((module) => (
          <div
            key={module.label}
            className="rounded-xl border border-[#0D1B3D]/10 bg-white px-3 py-2 font-mono text-xs font-bold text-[#0D1B3D] dark:border-white/10 dark:bg-[#0F1B36] dark:text-[#CBD5E1]"
          >
            {module.label}
          </div>
        ))}
      </div>
    </div>
  );
}
