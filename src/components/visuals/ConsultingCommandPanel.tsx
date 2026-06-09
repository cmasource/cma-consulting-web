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
    <div className="hero-command-panel relative mx-auto w-full max-w-[47rem] overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white/90 p-4 shadow-[0_34px_110px_rgba(13,27,61,0.16)] backdrop-blur dark:border-white/10 dark:bg-[#0F1B36]/88 dark:shadow-black/25 md:p-5">
      <div className="premium-grid absolute inset-0 opacity-45" />
      <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#009A9A]/14 blur-3xl dark:bg-[#22C7C7]/12" />
      <div className="absolute -bottom-32 left-12 h-64 w-64 rounded-full bg-[#0D1B3D]/10 blur-3xl dark:bg-[#22C7C7]/8" />

      <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#071225] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,199,199,0.2),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />

        <div className="relative flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
          <div>
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#7FF0E6]">
              Panel de gestión CMA
            </p>
            <p className="mt-1 text-sm font-semibold text-[#F8FAFC]">
              Diagnóstico, orden e implementación
            </p>
          </div>
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#7FF0E6]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
          </div>
        </div>

        <div className="relative p-4 md:p-6">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-[6.8rem] hidden h-48 text-[#7FF0E6]/55 md:block"
            viewBox="0 0 640 210"
            fill="none"
          >
            <path
              className="command-line"
              d="M70 158C170 128 214 108 288 96C366 84 420 62 566 48"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              className="command-line"
              d="M78 54C178 78 224 92 300 98C392 104 438 126 562 158"
              stroke="rgba(127,240,230,0.28)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative mx-auto flex min-h-[13rem] max-w-[38rem] items-center justify-center md:min-h-[17rem]">
            <div
              aria-hidden="true"
              className="hero-core-ring absolute h-52 w-52 rounded-full border border-[#7FF0E6]/15 md:h-64 md:w-64"
            />
            <div
              aria-hidden="true"
              className="hero-core-ring hero-core-ring-delay absolute h-40 w-40 rounded-full border border-[#7FF0E6]/22 md:h-48 md:w-48"
            />
            <div className="command-node relative flex h-32 w-32 items-center justify-center rounded-full border border-[#7FF0E6]/30 bg-[#0D1B3D]/82 text-center shadow-[0_0_70px_rgba(34,199,199,0.22),inset_0_0_34px_rgba(127,240,230,0.1)] backdrop-blur md:h-40 md:w-40">
              <span
                aria-hidden="true"
                className="absolute inset-5 rounded-full border border-white/10"
              />
              <div>
                <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#7FF0E6]">
                  núcleo
                </p>
                <p className="mt-2 text-base font-semibold leading-6 text-white md:text-lg">
                  procesos
                  <br />
                  indicadores
                  <br />
                  software
                </p>
              </div>
            </div>

            <span className="absolute left-2 top-8 hidden rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs font-semibold text-white/82 shadow-lg shadow-black/10 backdrop-blur sm:block">
              diagnóstico
            </span>
            <span className="absolute right-0 top-12 hidden rounded-full border border-[#7FF0E6]/18 bg-[#7FF0E6]/10 px-3 py-2 text-xs font-semibold text-[#DFFCF8] shadow-lg shadow-black/10 backdrop-blur sm:block">
              medición
            </span>
            <span className="absolute bottom-8 left-8 hidden rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs font-semibold text-white/82 shadow-lg shadow-black/10 backdrop-blur sm:block">
              implementación
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="group relative rounded-[1.15rem] border border-white/10 bg-white/[0.075] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.13)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[#7FF0E6]/35 md:p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#7FF0E6]/18 bg-[#7FF0E6]/10 text-[#7FF0E6] md:h-10 md:w-10">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#7FF0E6]">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-base font-semibold text-white md:mt-5">
                    {module.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/66 max-sm:hidden md:mt-3">
                    {module.text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-4 rounded-[1.15rem] border border-[#7FF0E6]/18 bg-[#7FF0E6]/8 p-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {["Costos claros", "Indicadores visibles", "Mejora medible"].map((item) => (
                <div key={item}>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div className="command-meter h-full rounded-full bg-[#7FF0E6]" />
                  </div>
                  <p className="mt-2 text-xs font-semibold text-white/82">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-core-ring {
          animation: hero-core-ring 8s ease-in-out infinite;
        }

        .hero-core-ring-delay {
          animation-delay: -3.6s;
        }

        @keyframes hero-core-ring {
          0%,
          100% {
            opacity: 0.36;
            transform: scale(0.94) rotate(0deg);
          }
          50% {
            opacity: 0.72;
            transform: scale(1.05) rotate(4deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-command-panel *,
          .hero-command-panel *::before,
          .hero-command-panel *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </div>
  );
}
