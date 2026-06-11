import { BarChart3, CheckCircle2, ClipboardList, Database } from "lucide-react";

const results = [
  {
    label: "Gestión clara",
    value: "Prioridades visibles",
    icon: ClipboardList,
  },
  {
    label: "Procesos visibles",
    value: "Rutinas ordenadas",
    icon: CheckCircle2,
  },
  {
    label: "Decisiones con datos",
    value: "Indicadores útiles",
    icon: Database,
  },
];

export function HeroImpactPanel() {
  return (
    <aside className="hero-impact-panel relative mx-auto w-full max-w-[44rem] overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white/90 p-4 shadow-[0_34px_110px_rgba(13,27,61,0.16)] backdrop-blur dark:border-white/10 dark:bg-[#0F1B36]/88 dark:shadow-black/25 md:p-5">
      <div className="premium-grid absolute inset-0 opacity-45" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#009A9A]/14 blur-3xl dark:bg-[#22C7C7]/12" />
      <div className="absolute -bottom-28 left-10 h-56 w-56 rounded-full bg-[#0D1B3D]/10 blur-3xl dark:bg-[#22C7C7]/8" />

      <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#071225] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:p-6">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(34,199,199,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_44%)]"
        />

        <div className="relative flex items-start justify-between gap-5">
          <div>
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#7FF0E6]">
              Vista de gestión
            </p>
            <h2 className="mt-3 max-w-sm text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              Claridad operativa para decidir mejor.
            </h2>
          </div>
          <div className="hidden rounded-full border border-[#7FF0E6]/20 bg-[#7FF0E6]/10 px-3 py-1.5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#DFFCF8] sm:block">
            CMA
          </div>
        </div>

        <div className="relative mt-7 rounded-[1.25rem] border border-[#7FF0E6]/18 bg-white/[0.075] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur md:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#7FF0E6]">
                Diagnóstico inicial
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/78">
                Detectar prioridades antes de invertir tiempo o tecnología.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071225]/60 px-4 py-3">
              <BarChart3 aria-hidden="true" className="h-5 w-5 text-[#7FF0E6]" />
              <div>
                <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/50">
                  avance
                </p>
                <p className="text-lg font-semibold text-white">72%</p>
              </div>
            </div>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="hero-impact-progress h-full w-[72%] rounded-full bg-gradient-to-r from-[#7FF0E6] via-[#22C7C7] to-[#009A9A]" />
          </div>
        </div>

        <div className="relative mt-4 grid gap-3 md:grid-cols-3">
          {results.map((result) => {
            const Icon = result.icon;

            return (
              <article
                key={result.label}
                className="rounded-[1.15rem] border border-white/10 bg-white/[0.07] p-4 shadow-[0_16px_44px_rgba(0,0,0,0.12)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7FF0E6]/18 bg-[#7FF0E6]/10 text-[#7FF0E6]">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {result.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/62">
                  {result.value}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .hero-impact-progress {
          animation: hero-impact-progress 6.8s ease-in-out infinite;
        }

        @keyframes hero-impact-progress {
          0%,
          100% {
            opacity: 0.78;
            transform: scaleX(0.92);
            transform-origin: left;
          }
          50% {
            opacity: 1;
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-impact-panel *,
          .hero-impact-panel *::before,
          .hero-impact-panel *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </aside>
  );
}
