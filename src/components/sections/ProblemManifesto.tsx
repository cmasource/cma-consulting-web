import { ArrowRight, CheckCircle2, CircleDashed } from "lucide-react";
import {
  Badge,
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";

const before = [
  "Datos dispersos",
  "Costos poco claros",
  "Tareas manuales",
  "Ventas sin seguimiento",
];

const after = [
  "Procesos definidos",
  "Indicadores visibles",
  "Herramientas conectadas",
  "Decisiones medibles",
];

const messyNodes = [
  { label: "Planilla", className: "left-[9%] top-[18%]" },
  { label: "Ventas", className: "right-[13%] top-[14%]" },
  { label: "Costos", className: "left-[21%] bottom-[18%]" },
  { label: "Tareas", className: "right-[18%] bottom-[23%]" },
  { label: "Datos", className: "left-[43%] top-[47%]" },
];

export function ProblemManifesto() {
  return (
    <section className="section-shell editorial-band bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>Manifiesto operativo</Eyebrow>
          <SectionTitle className="mx-auto mt-4 max-w-4xl">
            El problema no es crecer. Es crecer sin sistema.
          </SectionTitle>
          <SectionLead className="mx-auto mt-5 max-w-3xl">
            Muchas empresas venden, producen y avanzan, pero sostienen su
            operación sobre planillas aisladas, procesos informales, tareas
            manuales y decisiones sin indicadores.
          </SectionLead>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0A162E] dark:shadow-black/30">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="border-b border-[#0D1B3D]/10 p-6 dark:border-white/10 lg:border-b-0 lg:border-r md:p-8">
              <Badge>Transformación visible</Badge>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-[#0D1B3D] dark:text-[#F8FAFC] md:text-4xl">
                Del movimiento disperso a una operación legible.
              </h3>
              <p className="mt-5 text-sm leading-7 text-[#475467] dark:text-[#CBD5E1] md:text-base">
                El cambio no es solo ordenar una lista de tareas. Es convertir
                señales sueltas en un sistema donde cada dato, proceso y decisión
                tiene un lugar.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#0D1B3D]/10 bg-white p-4 dark:border-white/10 dark:bg-[#071225]">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#9A3412] dark:text-[#FDBA74]">
                    Antes
                  </p>
                  <ul className="mt-4 grid gap-2">
                    {before.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-semibold text-[#475467] dark:text-[#CBD5E1]">
                        <CircleDashed aria-hidden="true" className="h-4 w-4 text-[#9A3412] dark:text-[#FDBA74]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#009A9A]/25 bg-white p-4 dark:border-[#22C7C7]/30 dark:bg-[#071225]">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#007A7A] dark:text-[#5EEAD4]">
                    Después
                  </p>
                  <ul className="mt-4 grid gap-2">
                    {after.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-[#007A7A] dark:text-[#5EEAD4]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative min-h-[430px] overflow-hidden bg-white/70 p-5 dark:bg-[#071225]/70 md:min-h-[520px] md:p-8">
              <div className="premium-grid absolute inset-0 opacity-70" />
              <div className="ambient-scan absolute inset-[-12%] blur-2xl" />
              <div className="absolute left-8 right-8 top-8 h-1 overflow-hidden rounded-full bg-[#0D1B3D]/10 dark:bg-white/10">
                <div className="manifesto-progress h-full rounded-full bg-[#009A9A] dark:bg-[#22C7C7]" />
              </div>

              <div className="manifesto-before absolute inset-0">
                <svg
                  aria-hidden="true"
                  className="absolute inset-10 h-[calc(100%-5rem)] w-[calc(100%-5rem)] text-[#B45309]/70 dark:text-[#FDBA74]/55"
                  viewBox="0 0 640 420"
                  fill="none"
                >
                  <path d="M78 80L418 182L204 336L558 92L496 340" stroke="currentColor" strokeWidth="2" strokeDasharray="7 11" />
                  <path d="M112 322L284 116L526 290" stroke="currentColor" strokeWidth="2" strokeDasharray="3 14" />
                </svg>
                {messyNodes.map((node) => (
                  <div
                    key={node.label}
                    className={`absolute rounded-full border border-[#B45309]/25 bg-white px-3 py-2 font-mono text-xs font-bold text-[#7C2D12] shadow-lg shadow-[#0D1B3D]/10 dark:border-[#FDBA74]/25 dark:bg-[#0F1B36] dark:text-[#FDBA74] ${node.className}`}
                  >
                    {node.label}
                  </div>
                ))}
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-[#B45309]/20 bg-white/85 p-4 shadow-xl shadow-[#0D1B3D]/10 backdrop-blur dark:border-[#FDBA74]/20 dark:bg-[#0F1B36]/85">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#9A3412] dark:text-[#FDBA74]">
                    Estado actual
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#475467] dark:text-[#CBD5E1]">
                    Mucha actividad, poca trazabilidad.
                  </p>
                </div>
              </div>

              <div className="manifesto-after absolute inset-0">
                <div className="absolute left-1/2 top-[18%] h-[64%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#009A9A] to-transparent dark:via-[#22C7C7]" />
                {after.map((item, index) => (
                  <div
                    key={item}
                    className="absolute left-1/2 flex w-[72%] -translate-x-1/2 items-center gap-4 rounded-2xl border border-[#009A9A]/25 bg-white/90 p-4 shadow-xl shadow-[#0D1B3D]/10 backdrop-blur dark:border-[#22C7C7]/30 dark:bg-[#0F1B36]/90"
                    style={{ top: `${19 + index * 16}%` }}
                  >
                    <span className="node-pulse flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D1B3D] font-mono text-xs font-bold text-white dark:bg-[#15234A]">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                        {item}
                      </p>
                      <p className="mt-1 text-xs text-[#475467] dark:text-[#CBD5E1]">
                        Señal operativa integrada al sistema.
                      </p>
                    </div>
                  </div>
                ))}
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between rounded-2xl border border-[#009A9A]/25 bg-[#0D1B3D] p-4 text-white shadow-xl shadow-[#0D1B3D]/20 dark:border-[#22C7C7]/30">
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#7FF0E6]">
                      Estado objetivo
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Menos fricción, mejores decisiones.
                    </p>
                  </div>
                  <ArrowRight aria-hidden="true" className="h-5 w-5 text-[#7FF0E6]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
