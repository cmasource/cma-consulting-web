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
  { label: "Roles claros", className: "left-5 top-16" },
  { label: "Datos visibles", className: "right-6 top-20" },
  { label: "Costos controlados", className: "left-10 bottom-24" },
  { label: "Ventas con seguimiento", className: "right-10 bottom-24" },
  { label: "Mejora medible", className: "left-1/2 top-7 -translate-x-1/2" },
];

export function CmaSystemFrame() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white/80 p-5 shadow-2xl shadow-[#0D1B3D]/10 backdrop-blur dark:border-white/10 dark:bg-[#0A162E]/90 dark:shadow-black/35 md:min-h-[560px] md:p-7">
      <div className="premium-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#009A9A]/10 to-transparent dark:from-[#22C7C7]/10" />
      <AnimatedFlowLine className="absolute inset-x-6 top-20 h-52 opacity-80" />

      <div className="relative z-10 mx-auto mt-20 max-w-md rounded-2xl border border-[#0D1B3D]/10 bg-[#0D1B3D] p-5 text-white shadow-2xl shadow-[#0D1B3D]/25 dark:border-white/10 md:mt-28 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <BrandLogo variant="mark" context="dark" />
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-xs font-bold text-[#7FF0E6]">
            CMA OS
          </span>
        </div>
        <p className="mt-6 text-2xl font-black leading-tight md:text-3xl">
          Sistema operativo de gestión
        </p>
        <p className="mt-3 text-sm leading-7 text-white/80">
          Diagnóstico, procesos, software e indicadores conectados en una misma
          lógica operativa.
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

      {modules.map((module) => (
        <div
          key={module.label}
          className={`node-pulse absolute z-20 hidden rounded-full border border-[#009A9A]/20 bg-white px-3 py-2 font-mono text-xs font-bold text-[#005F5F] shadow-lg shadow-[#0D1B3D]/10 dark:border-[#22C7C7]/30 dark:bg-[#0F1B36] dark:text-[#5EEAD4] md:block ${module.className}`}
        >
          {module.label}
        </div>
      ))}

      <div className="relative z-10 mt-8 grid gap-2 md:hidden">
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
