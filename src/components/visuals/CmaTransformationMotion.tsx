import type { CSSProperties } from "react";

const scatteredItems = [
  {
    label: "Costos poco claros",
    className: "left-[4%] top-[8%] sm:left-[5%] sm:top-[9%]",
    rotate: "-1.2deg",
    driftX: "4px",
    driftY: "-7px",
    returnX: "-2px",
    returnY: "-4px",
  },
  {
    label: "Ventas sin seguimiento",
    className: "right-[2%] top-[25%] sm:top-[21%]",
    rotate: "1.1deg",
    driftX: "-4px",
    driftY: "-6px",
    returnX: "2px",
    returnY: "-3px",
  },
  {
    label: "Datos aislados",
    className: "left-[7%] bottom-[36%] sm:left-[10%] sm:bottom-[20%]",
    rotate: "0.9deg",
    driftX: "3px",
    driftY: "6px",
    returnX: "-2px",
    returnY: "3px",
  },
  {
    label: "Tareas manuales",
    className: "right-[4%] bottom-[12%] sm:right-[7%]",
    rotate: "-0.8deg",
    driftX: "-3px",
    driftY: "7px",
    returnX: "2px",
    returnY: "4px",
  },
];

const diagnosticLabels = [
  { label: "COSTOS", className: "left-1/2 top-2 -translate-x-1/2" },
  { label: "VENTAS", className: "right-2 top-1/2 -translate-y-1/2" },
  { label: "PROCESOS", className: "bottom-2 left-1/2 -translate-x-1/2" },
  { label: "DATOS", className: "left-2 top-1/2 -translate-y-1/2" },
];

const orderedItems = [
  "Procesos definidos",
  "Indicadores visibles",
  "Herramientas conectadas",
  "Decisiones medibles",
];

const diagnosticSteps = ["detectar", "ordenar", "priorizar"];

const weakSignals = [
  { left: "9%", top: "16%" },
  { left: "42%", top: "18%" },
  { left: "77%", top: "34%" },
  { left: "22%", top: "72%" },
  { left: "56%", top: "58%" },
  { left: "88%", top: "78%" },
];

export function CmaTransformationMotion() {
  return (
    <section className="cma-premium-motion relative w-full overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#071225] p-4 text-white shadow-[0_38px_120px_rgba(7,18,37,0.34)] md:p-5 lg:p-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7FF0E6]/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[34rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,199,199,0.2),transparent_68%)] blur-2xl"
      />

      <div className="relative grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.95fr)_minmax(0,1fr)] lg:items-stretch">
        <EnergyFlow />
        <ScatteredPanel />
        <DiagnosticCore />
        <OrderedPanel />
      </div>

      <style>{`
        .cma-energy-line {
          stroke-dasharray: 12 16;
          animation: cma-energy-line 16s linear infinite;
        }

        .cma-energy-particle {
          left: 12%;
          top: 50%;
          opacity: 0;
          animation: cma-energy-particle 8.6s cubic-bezier(0.45, 0, 0.2, 1) infinite;
        }

        .cma-energy-particle:nth-child(2) {
          animation-delay: -2.15s;
        }

        .cma-energy-particle:nth-child(3) {
          animation-delay: -4.3s;
        }

        .cma-energy-particle:nth-child(4) {
          animation-delay: -6.45s;
        }

        .cma-core-pulse {
          animation: cma-core-pulse 6.6s ease-in-out infinite;
        }

        .cma-core-impact {
          opacity: 0;
          transform-origin: center;
          animation: cma-core-impact 8.6s ease-in-out infinite;
        }

        .cma-core-impact-delay {
          animation-delay: -4.3s;
        }

        .cma-core-ring {
          transform-origin: 50% 50%;
          animation: cma-core-breathe 8s ease-in-out infinite;
        }

        .cma-core-ring-delay {
          animation-delay: -3.2s;
        }

        .cma-core-orbit {
          transform-origin: 140px 140px;
          animation: cma-core-orbit 28s linear infinite;
        }

        .cma-module-link {
          stroke-dasharray: 7 10;
          animation: cma-energy-line 18s linear infinite;
        }

        .cma-dashboard-panel {
          animation: cma-dashboard-reveal 7.8s ease-in-out infinite;
        }

        .cma-signal-chip {
          animation: cma-signal-chip 7.4s ease-in-out infinite;
        }

        .cma-signal-dot {
          animation: cma-signal-dot 6.2s ease-in-out infinite;
        }

        .cma-system-item {
          animation: cma-system-item 7.8s ease-in-out infinite;
        }

        .cma-dashboard-bar {
          transform-origin: bottom;
          animation: cma-dashboard-bar 5.8s ease-in-out infinite;
        }

        .cma-dashboard-line {
          stroke-dasharray: 240;
          stroke-dashoffset: 240;
          animation: cma-dashboard-line 6.8s ease-in-out infinite;
        }

        @keyframes cma-energy-line {
          to {
            stroke-dashoffset: -240;
          }
        }

        @keyframes cma-energy-particle {
          0% {
            opacity: 0;
            left: 12%;
            transform: translate3d(0, 4px, 0) scale(0.72);
          }
          14%,
          86% {
            opacity: 0.92;
          }
          42% {
            left: 48%;
            opacity: 1;
            transform: translate3d(0, -3px, 0) scale(1);
          }
          46% {
            opacity: 1;
            left: 50%;
            transform: translate3d(0, -4px, 0) scale(1.08);
          }
          58% {
            opacity: 1;
            left: 56%;
            transform: translate3d(0, 3px, 0) scale(1);
          }
          100% {
            opacity: 0;
            left: 88%;
            transform: translate3d(0, 4px, 0) scale(0.72);
          }
        }

        @keyframes cma-core-pulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow:
              0 0 0 1px rgba(127, 240, 230, 0.22),
              0 22px 80px rgba(34, 199, 199, 0.18),
              inset 0 0 42px rgba(127, 240, 230, 0.12);
          }
          50% {
            transform: scale(1.035);
            box-shadow:
              0 0 0 1px rgba(127, 240, 230, 0.34),
              0 30px 120px rgba(34, 199, 199, 0.3),
              inset 0 0 58px rgba(127, 240, 230, 0.18);
          }
        }

        @keyframes cma-core-breathe {
          0%,
          100% {
            transform: scale(0.95) rotate(0deg);
            opacity: 0.42;
          }
          50% {
            transform: scale(1.06) rotate(4deg);
            opacity: 0.78;
          }
        }

        @keyframes cma-core-impact {
          0%,
          38%,
          100% {
            opacity: 0;
            transform: scale(0.62);
          }
          46% {
            opacity: 0.42;
            transform: scale(1);
          }
          58% {
            opacity: 0;
            transform: scale(1.32);
          }
        }

        @keyframes cma-core-orbit {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes cma-dashboard-reveal {
          0%,
          34%,
          100% {
            opacity: 0.86;
            transform: translateY(3px);
          }
          58%,
          76% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cma-signal-chip {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(var(--chip-rotate));
          }
          35% {
            transform: translate3d(var(--chip-x), var(--chip-y), 0) rotate(var(--chip-rotate));
          }
          70% {
            transform: translate3d(var(--chip-return-x), var(--chip-return-y), 0) rotate(var(--chip-rotate));
          }
        }

        @keyframes cma-signal-dot {
          0%,
          100% {
            opacity: 0.28;
            transform: scale(0.86);
          }
          50% {
            opacity: 0.72;
            transform: scale(1.08);
          }
        }

        @keyframes cma-system-item {
          0%,
          38%,
          100% {
            opacity: 0.82;
            transform: translateX(0);
          }
          54%,
          76% {
            opacity: 1;
            transform: translateX(3px);
          }
        }

        @keyframes cma-dashboard-bar {
          0%,
          100% {
            transform: scaleY(0.66);
            opacity: 0.68;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes cma-dashboard-line {
          0%,
          20% {
            stroke-dashoffset: 240;
            opacity: 0.42;
          }
          68%,
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @media (max-width: 1023px) {
          .cma-energy-particle {
            left: 50%;
            top: 11%;
            animation-name: cma-energy-particle-mobile;
          }
        }

        @keyframes cma-energy-particle-mobile {
          0% {
            opacity: 0;
            top: 11%;
            transform: translate3d(-2px, 0, 0) scale(0.72);
          }
          18%,
          82% {
            opacity: 0.86;
          }
          48% {
            top: 49%;
            opacity: 1;
            transform: translate3d(-3px, 0, 0) scale(1.06);
          }
          60% {
            top: 56%;
            opacity: 1;
            transform: translate3d(3px, 0, 0) scale(1);
          }
          100% {
            top: 89%;
            opacity: 0;
            transform: translate3d(2px, 0, 0) scale(0.72);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cma-premium-motion *,
          .cma-premium-motion *::before,
          .cma-premium-motion *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </section>
  );
}

function EnergyFlow() {
  return (
    <>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[9%] top-1/2 z-0 hidden h-32 -translate-y-1/2 text-[#7FF0E6]/70 lg:block"
        viewBox="0 0 980 128"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M18 64C132 48 222 42 326 62C422 80 478 82 548 64C666 34 790 42 962 64"
          stroke="rgba(127,240,230,0.18)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          className="cma-energy-line"
          d="M18 64C132 48 222 42 326 62C422 80 478 82 548 64C666 34 790 42 962 64"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[8%] z-0 h-[84%] w-16 -translate-x-1/2 text-[#7FF0E6]/55 lg:hidden"
        viewBox="0 0 64 760"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M32 10C20 126 20 250 32 380C44 510 44 630 32 750"
          stroke="rgba(127,240,230,0.16)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          className="cma-energy-line"
          d="M32 10C20 126 20 250 32 380C44 510 44 630 32 750"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className="cma-energy-particle absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-[#7FF0E6] shadow-[0_0_18px_rgba(127,240,230,0.82)]"
          />
        ))}
      </div>
    </>
  );
}

function StageEyebrow({ children }: { children: string }) {
  return (
    <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#7FF0E6]">
      {children}
    </p>
  );
}

function ScatteredPanel() {
  return (
    <article className="relative z-10 min-h-[420px] overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur md:p-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(176,182,189,0.12),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]"
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-white/18"
        viewBox="0 0 420 440"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M58 118H144M118 118V156M276 136H354M316 136V174" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M74 324H164M164 324V286M258 322H350M258 322V286" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M150 190C198 172 228 172 272 194" stroke="rgba(127,240,230,0.16)" strokeWidth="1" strokeDasharray="3 9" strokeLinecap="round" />
        <path d="M142 278C194 300 228 300 276 276" stroke="rgba(127,240,230,0.13)" strokeWidth="1" strokeDasharray="2 10" strokeLinecap="round" />
        {[64, 144, 272, 356, 164, 258].map((cx, index) => (
          <circle key={cx} cx={cx} cy={index < 4 ? (index % 2 === 0 ? 118 : 136) : 324} r="4" fill="currentColor" />
        ))}
      </svg>

      <div className="relative">
        <StageEyebrow>01 - DISPERSIÓN</StageEyebrow>
        <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white md:text-[2.2rem]">
          Gestión dispersa
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">
          Señales operativas valiosas, pero repartidas entre planillas, criterios informales y rutinas manuales.
        </p>

        <div className="relative mx-auto mt-8 min-h-[268px] w-full max-w-[24rem] px-4 pb-5 pt-5">
          {weakSignals.map((signal, index) => (
            <span
              key={`${signal.left}-${signal.top}`}
              aria-hidden="true"
              className="cma-signal-dot absolute h-2 w-2 rounded-full bg-white/55 shadow-[0_0_16px_rgba(255,255,255,0.22)]"
              style={{
                left: signal.left,
                top: signal.top,
                animationDelay: `${index * 280}ms`,
              }}
            />
          ))}
          {scatteredItems.map((item, index) => (
            <div
              key={item.label}
              className={`cma-signal-chip absolute max-w-[15.75rem] rounded-[1rem] border border-white/10 bg-[#0D1B3D]/74 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_46px_rgba(0,0,0,0.22)] backdrop-blur ${item.className}`}
              style={{
                "--chip-rotate": item.rotate,
                "--chip-x": item.driftX,
                "--chip-y": item.driftY,
                "--chip-return-x": item.returnX,
                "--chip-return-y": item.returnY,
                animationDelay: `${index * 420}ms`,
              } as CSSProperties}
            >
              <span
                aria-hidden="true"
                className="mr-3 inline-flex h-2.5 w-2.5 rounded-full bg-[#B0B6BD] shadow-[0_0_12px_rgba(176,182,189,0.38)]"
              />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function DiagnosticCore() {
  return (
    <article className="relative z-20 min-h-[500px] overflow-hidden rounded-[1.65rem] border border-[#7FF0E6]/24 bg-[#08152B] p-5 shadow-[0_30px_110px_rgba(0,154,154,0.22)] md:p-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(34,199,199,0.23),transparent_45%),linear-gradient(180deg,rgba(127,240,230,0.1),transparent_38%)]"
      />
      <div className="relative flex h-full min-h-[454px] flex-col">
        <StageEyebrow>02 - DIAGNÓSTICO</StageEyebrow>
        <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white md:text-[2.28rem]">
          Diagnóstico CMA
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-7 text-white/72">
          Detectar, ordenar y priorizar para convertir problemas dispersos en un sistema de gestión claro.
        </p>

        <div className="relative mx-auto mt-7 flex h-[19.5rem] w-full max-w-[19.5rem] items-center justify-center">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 280 280"
            fill="none"
          >
            <circle cx="140" cy="140" r="118" stroke="rgba(127,240,230,0.14)" strokeWidth="1" />
            <circle className="cma-core-ring" cx="140" cy="140" r="96" stroke="rgba(127,240,230,0.38)" strokeWidth="1.5" />
            <circle className="cma-core-ring cma-core-ring-delay" cx="140" cy="140" r="70" stroke="rgba(127,240,230,0.45)" strokeWidth="1.5" />
            <path
              className="cma-module-link"
              d="M38 140H102M178 140H242M140 38V102M140 178V242"
              stroke="rgba(127,240,230,0.42)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <g className="cma-core-orbit">
              <circle cx="140" cy="22" r="3.5" fill="#7FF0E6" />
              <circle cx="242" cy="140" r="2.8" fill="#7FF0E6" opacity="0.76" />
              <circle cx="140" cy="258" r="3.2" fill="#7FF0E6" opacity="0.68" />
              <circle cx="38" cy="140" r="2.8" fill="#7FF0E6" opacity="0.76" />
            </g>
          </svg>

          <span
            aria-hidden="true"
            className="cma-core-impact absolute h-56 w-56 rounded-full border border-[#7FF0E6]/26"
          />
          <span
            aria-hidden="true"
            className="cma-core-impact cma-core-impact-delay absolute h-64 w-64 rounded-full border border-[#7FF0E6]/18"
          />
          <div className="cma-core-pulse relative flex h-40 w-40 items-center justify-center rounded-full border border-[#7FF0E6]/32 bg-[#071225]/92 text-center">
            <div className="absolute inset-4 rounded-full border border-white/10" aria-hidden="true" />
            <div>
              <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.2em] text-[#7FF0E6]">
                CMA
              </p>
              <p className="mt-2 text-xl font-semibold leading-7 text-white">
                detectar
                <br />
                ordenar
                <br />
                priorizar
              </p>
            </div>
          </div>

          {diagnosticLabels.map((item) => (
            <span
              key={item.label}
              className={`absolute ${item.className} rounded-full border border-[#7FF0E6]/20 bg-[#071225]/86 px-3 py-1.5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#DFFCF8] shadow-[0_12px_34px_rgba(0,0,0,0.22)] backdrop-blur`}
            >
              {item.label}
            </span>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2">
          {diagnosticSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-3 text-center"
            >
              <p className="font-mono text-[0.62rem] font-bold text-[#7FF0E6]">
                0{index + 1}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function OrderedPanel() {
  return (
    <article className="relative z-10 min-h-[420px] overflow-hidden rounded-[1.45rem] border border-[#7FF0E6]/18 bg-[#F8FAFC] p-5 text-[#0D1B3D] shadow-[0_28px_80px_rgba(13,27,61,0.18)] md:p-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.95),rgba(232,247,247,0.82)),radial-gradient(circle_at_82%_14%,rgba(0,154,154,0.16),transparent_38%)]"
      />

      <div className="relative">
        <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#007A7A]">
          03 - SISTEMA CLARO
        </p>
        <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-[#0D1B3D] md:text-[2.2rem]">
          Empresa ordenada
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-7 text-[#475467]">
          Procesos, indicadores y herramientas conectadas para tomar decisiones medibles.
        </p>

        <div className="cma-dashboard-panel mt-7 rounded-[1.25rem] border border-[#0D1B3D]/10 bg-white/88 p-4 shadow-[0_24px_70px_rgba(13,27,61,0.12)] backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#007A7A]">
                Mejora medible
              </p>
              <p className="mt-1 text-sm font-semibold text-[#0D1B3D]">
                Gestión en seguimiento
              </p>
            </div>
            <span className="rounded-full border border-[#009A9A]/20 bg-[#009A9A]/10 px-3 py-1 text-xs font-bold text-[#007A7A]">
              estable
            </span>
          </div>

          <svg
            aria-hidden="true"
            className="mt-4 h-28 w-full text-[#009A9A]"
            viewBox="0 0 320 140"
            fill="none"
          >
            <path d="M20 112H300" stroke="rgba(13,27,61,0.1)" strokeWidth="1" />
            {[42, 66, 88, 108].map((height, index) => (
              <rect
                key={height}
                className="cma-dashboard-bar"
                x={30 + index * 34}
                y={112 - height}
                width="18"
                height={height}
                rx="6"
                fill="currentColor"
                opacity={0.34 + index * 0.13}
                style={{ animationDelay: `${index * 180}ms` }}
              />
            ))}
            <path
              d="M174 102C192 94 200 76 218 78C238 80 244 48 264 40C278 34 288 28 302 22"
              stroke="rgba(0,154,154,0.22)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="cma-dashboard-line"
              d="M174 102C192 94 200 76 218 78C238 80 244 48 264 40C278 34 288 28 302 22"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="302" cy="22" r="5" fill="currentColor" />
          </svg>
        </div>

        <div className="relative mt-4 grid gap-2">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[1.08rem] top-6 w-px bg-gradient-to-b from-[#009A9A]/15 via-[#009A9A]/45 to-[#009A9A]/15"
          />
          {orderedItems.map((item, index) => (
            <div
              key={item}
              className="cma-system-item relative grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-[#0D1B3D]/10 bg-white/78 px-3 py-2.5 text-sm font-semibold text-[#0D1B3D] shadow-sm"
              style={{ animationDelay: `${index * 180}ms` }}
            >
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-[#009A9A] shadow-[0_0_12px_rgba(0,154,154,0.38)]"
              />
              {item}
              <span className="h-1.5 w-9 overflow-hidden rounded-full bg-[#009A9A]/15">
                <span
                  aria-hidden="true"
                  className="block h-full rounded-full bg-[#009A9A]"
                  style={{ width: `${62 + index * 9}%` }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
