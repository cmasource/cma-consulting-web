import { CheckCircle2, CircleDashed } from "lucide-react";

const scatteredItems = [
  "Costos poco claros",
  "Datos en planillas aisladas",
  "Ventas sin seguimiento",
  "Tareas manuales",
];

const orderedItems = [
  "Procesos definidos",
  "Indicadores visibles",
  "Herramientas conectadas",
  "Decisiones medibles",
];

const coreLabels = ["procesos", "costos", "ventas", "datos"];

const scatteredPositions = [
  "md:left-[7%] md:top-[18%]",
  "md:left-[16%] md:bottom-[16%]",
  "md:right-[9%] md:top-[20%]",
  "md:right-[14%] md:bottom-[23%]",
];

export function OperationalTransformationFlow() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#071225] dark:shadow-black/30">
      <div className="premium-grid absolute inset-0 opacity-45" />
      <div className="ambient-scan absolute inset-[-18%] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#009A9A]/50 to-transparent dark:via-[#22C7C7]/55" />

      <div className="relative grid gap-6 p-5 md:min-h-[560px] md:grid-cols-[1fr_0.72fr_1fr] md:items-center md:p-8 lg:p-10">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          viewBox="0 0 1200 560"
          preserveAspectRatio="none"
        >
          <path
            className="op-flow-line"
            d="M285 280 C390 190 470 210 542 280"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            className="op-flow-line op-flow-line-delay"
            d="M658 280 C742 356 828 350 930 280"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[12rem] h-[calc(100%-24rem)] w-12 -translate-x-1/2 text-[#009A9A]/45 dark:text-[#22C7C7]/55 md:hidden"
          viewBox="0 0 48 460"
          preserveAspectRatio="none"
        >
          <path
            className="op-flow-line"
            d="M24 0 C12 94 38 154 24 230 C10 310 36 374 24 460"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>

        <article className="relative min-h-[300px] overflow-hidden rounded-[1.55rem] border border-[#0D1B3D]/10 bg-[#F8FAFC]/90 p-5 dark:border-white/10 dark:bg-[#0F1B36]/90 md:min-h-[390px] md:p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(180,83,9,0.10),transparent_18rem)] dark:bg-[radial-gradient(circle_at_22%_18%,rgba(251,186,116,0.10),transparent_18rem)]" />
          <div className="relative">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#9A3412] dark:text-[#FDBA74]">
              01 - Detectar
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC]">
              Operación dispersa
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
              Mucha actividad cotidiana, poca trazabilidad para decidir qué
              corregir primero.
            </p>
          </div>

          <div className="relative mt-7 min-h-[175px] md:mt-2 md:min-h-[225px]">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full text-[#B45309]/45 dark:text-[#FDBA74]/35"
              viewBox="0 0 420 230"
              fill="none"
            >
              <path d="M36 42L232 118L94 196L372 58L322 182" stroke="currentColor" strokeWidth="2" strokeDasharray="5 12" />
              <path d="M78 174L168 48L356 168" stroke="currentColor" strokeWidth="2" strokeDasharray="2 13" />
            </svg>
            {scatteredItems.map((item, index) => (
              <div
                key={item}
                className={`relative mb-3 flex w-fit items-center gap-2 rounded-full border border-[#B45309]/20 bg-white/90 px-3 py-2 text-xs font-semibold text-[#7C2D12] shadow-lg shadow-[#0D1B3D]/8 dark:border-[#FDBA74]/20 dark:bg-[#071225]/90 dark:text-[#FDBA74] md:absolute md:mb-0 ${scatteredPositions[index]}`}
              >
                <CircleDashed aria-hidden="true" className="h-3.5 w-3.5" />
                {item}
              </div>
            ))}
          </div>
        </article>

        <div className="relative mx-auto flex min-h-[310px] w-full max-w-[360px] items-center justify-center md:min-h-[460px]">
          <div className="op-core-ring absolute h-64 w-64 rounded-full border border-[#009A9A]/20 dark:border-[#22C7C7]/25" />
          <div className="op-core-ring op-core-ring-delay absolute h-44 w-44 rounded-full border border-[#009A9A]/25 dark:border-[#22C7C7]/30" />
          <div className="op-core-pulse relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full border border-[#009A9A]/35 bg-white/92 text-center shadow-2xl shadow-[#009A9A]/20 backdrop-blur dark:border-[#22C7C7]/35 dark:bg-[#0F1B36]/92 dark:shadow-[#22C7C7]/15">
            <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#007A7A] dark:text-[#5EEAD4]">
              02 - Ordenar
            </span>
            <strong className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC]">
              Diagnóstico CMA
            </strong>
          </div>

          {coreLabels.map((label, index) => (
            <span
              key={label}
              className="op-orbit-label absolute rounded-full border border-[#009A9A]/20 bg-white/85 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#007A7A] shadow-sm dark:border-[#22C7C7]/25 dark:bg-[#071225]/85 dark:text-[#5EEAD4]"
              style={{
                transform: `rotate(${index * 90}deg) translateX(142px) rotate(-${index * 90}deg)`,
              }}
            >
              {label}
            </span>
          ))}

          {Array.from({ length: 9 }).map((_, index) => (
            <span
              aria-hidden="true"
              key={index}
              className={`op-flow-particle op-flow-particle-${index % 3} absolute h-1.5 w-1.5 rounded-full bg-[#009A9A] dark:bg-[#22C7C7]`}
            />
          ))}
        </div>

        <article className="relative min-h-[330px] overflow-hidden rounded-[1.55rem] border border-[#009A9A]/20 bg-[#F8FAFC]/92 p-5 dark:border-[#22C7C7]/25 dark:bg-[#0F1B36]/92 md:min-h-[390px] md:p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(0,154,154,0.13),transparent_18rem)] dark:bg-[radial-gradient(circle_at_80%_18%,rgba(34,199,199,0.13),transparent_18rem)]" />
          <div className="relative">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#007A7A] dark:text-[#5EEAD4]">
              03 - Implementar
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC]">
              Empresa con sistema
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
              Procesos, datos y herramientas conectadas a una forma clara de
              operar y medir.
            </p>
          </div>

          <div className="relative mt-7 rounded-[1.25rem] border border-[#0D1B3D]/10 bg-white/90 p-4 shadow-xl shadow-[#0D1B3D]/8 dark:border-white/10 dark:bg-[#071225]/90">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#007A7A] dark:text-[#5EEAD4]">
                Operación clara
              </p>
              <span className="rounded-full bg-[#009A9A]/12 px-2.5 py-1 text-xs font-bold text-[#007A7A] dark:bg-[#22C7C7]/12 dark:text-[#5EEAD4]">
                mejora medible
              </span>
            </div>
            <div className="grid gap-2">
              {orderedItems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#0D1B3D]/10 bg-[#F8FAFC] px-3 py-2 dark:border-white/10 dark:bg-[#0F1B36]"
                >
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-[#007A7A] dark:text-[#5EEAD4]" />
                  <span className="text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                    {item}
                  </span>
                  <span
                    aria-hidden="true"
                    className="op-result-bar ml-auto h-1.5 rounded-full bg-[#009A9A] dark:bg-[#22C7C7]"
                    style={{ width: `${46 + index * 12}px`, animationDelay: `${index * 180}ms` }}
                  />
                </div>
              ))}
            </div>
            <svg
              aria-hidden="true"
              className="mt-5 h-16 w-full text-[#009A9A] dark:text-[#22C7C7]"
              viewBox="0 0 360 76"
              fill="none"
            >
              <path
                className="op-result-trend"
                d="M8 60C54 58 58 31 98 36C142 41 132 18 176 22C224 26 224 9 264 16C302 23 314 12 352 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path d="M8 60H352" stroke="currentColor" strokeOpacity="0.12" />
            </svg>
          </div>
        </article>
      </div>
    </div>
  );
}
