import { BarChart3, ClipboardCheck, GitBranch } from "lucide-react";

const modules = [
  {
    title: "Diagnóstico empresarial",
    text: "Lectura clara del estado actual, prioridades y puntos críticos.",
    icon: ClipboardCheck,
  },
  {
    title: "Procesos e indicadores",
    text: "Flujos, responsables y métricas para hacer visible la operación.",
    icon: GitBranch,
  },
  {
    title: "Implementación digital",
    text: "Herramientas concretas cuando la mejora necesita tecnología.",
    icon: BarChart3,
  },
];

export function ConsultingCommandPanel() {
  return (
    <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white/88 p-4 shadow-2xl shadow-[#0D1B3D]/12 backdrop-blur dark:border-white/10 dark:bg-[#0F1B36]/88 dark:shadow-black/25 md:p-5">
      <div className="premium-grid absolute inset-0 opacity-45" />
      <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#009A9A]/12 blur-3xl dark:bg-[#22C7C7]/12" />
      <div className="relative overflow-hidden rounded-[1.45rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] dark:border-white/10 dark:bg-[#071225]">
        <div className="flex items-center justify-between border-b border-[#0D1B3D]/10 px-4 py-3 dark:border-white/10">
          <div>
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#007A7A] dark:text-[#5EEAD4]">
              Panel de gestión CMA
            </p>
            <p className="mt-1 text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
              Diagnóstico, orden e implementación
            </p>
          </div>
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#B0B6BD]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#009A9A]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#0D1B3D] dark:bg-[#F8FAFC]" />
          </div>
        </div>

        <div className="relative p-4 md:p-5">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-[5.35rem] hidden h-16 text-[#009A9A]/50 dark:text-[#22C7C7]/55 md:block"
            viewBox="0 0 640 70"
            fill="none"
          >
            <path
              className="command-line"
              d="M20 34H220C270 34 280 18 320 18C360 18 370 52 420 52H620"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <div className="grid gap-3 md:grid-cols-3">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="group relative rounded-[1.15rem] border border-[#0D1B3D]/10 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#009A9A]/35 hover:shadow-lg hover:shadow-[#0D1B3D]/8 dark:border-white/10 dark:bg-[#0F1B36] dark:hover:border-[#22C7C7]/40"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="command-node flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D1B3D] text-white dark:bg-[#15234A]">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#007A7A] dark:text-[#5EEAD4]">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-5 text-base font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                    {module.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#475467] dark:text-[#CBD5E1]">
                    {module.text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-4 rounded-[1.15rem] border border-[#009A9A]/20 bg-[#009A9A]/8 p-4 dark:border-[#22C7C7]/25 dark:bg-[#22C7C7]/8">
            <div className="grid gap-3 sm:grid-cols-3">
              {["Costos claros", "Indicadores visibles", "Mejora medible"].map((item) => (
                <div key={item}>
                  <div className="h-1.5 rounded-full bg-[#0D1B3D]/10 dark:bg-white/10">
                    <div className="command-meter h-full rounded-full bg-[#009A9A] dark:bg-[#22C7C7]" />
                  </div>
                  <p className="mt-2 text-xs font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
