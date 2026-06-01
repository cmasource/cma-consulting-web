import { ArrowDown, BarChart3, Binary, Compass, GitBranch } from "lucide-react";
import { Badge, Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";

const businessSignals = ["Problema", "Prioridad", "Proceso", "Indicador"];
const digitalSignals = ["Sistema", "Automatización", "Dashboard", "Integración"];

export function TwoLayersSection() {
  return (
    <section className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <div className="grid gap-9 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <Eyebrow>Modelo de implementación</Eyebrow>
            <SectionTitle className="mt-4">
              Criterio empresarial. Implementación digital.
            </SectionTitle>
          </div>
          <SectionLead>
            Primero entendemos el problema. Después diseñamos la solución y la
            llevamos a la práctica con procesos, datos y tecnología.
          </SectionLead>
        </div>

        <div className="relative mt-11 overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-5 shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0A162E] dark:shadow-black/30 md:p-8">
          <div className="premium-grid absolute inset-0 opacity-55" />
          <div className="ambient-scan absolute inset-[-20%] blur-3xl" />

          <div className="relative grid gap-6 lg:grid-cols-[0.9fr_0.28fr_0.9fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[1.65rem] border border-[#0D1B3D]/10 bg-white p-6 shadow-lg shadow-[#0D1B3D]/8 dark:border-white/10 dark:bg-[#0F1B36]">
              <div className="absolute -right-16 top-8 h-44 w-44 rounded-full border border-[#009A9A]/15" />
              <Badge>Capa 01</Badge>
              <div className="mt-7 flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0D1B3D] text-white dark:bg-[#15234A]">
                  <Compass aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC]">
                    Criterio empresarial
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
                    Lectura consultiva para separar síntomas de causas, ordenar
                    prioridades y definir qué debe cambiar para que la mejora
                    tenga sentido operativo.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {businessSignals.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#0D1B3D]/10 bg-[#F8FAFC] p-4 dark:border-white/10 dark:bg-[#071225]"
                  >
                    <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#007A7A] dark:text-[#5EEAD4]">
                      0{index + 1}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:h-full lg:items-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#009A9A]/25 bg-white text-[#007A7A] shadow-xl shadow-[#0D1B3D]/10 dark:border-[#22C7C7]/30 dark:bg-[#071225] dark:text-[#5EEAD4]">
                <div className="absolute h-32 w-px bg-gradient-to-b from-transparent via-[#009A9A]/40 to-transparent dark:via-[#22C7C7]/45 lg:h-px lg:w-36 lg:bg-gradient-to-r" />
                <ArrowDown aria-hidden="true" className="relative h-6 w-6 lg:rotate-[-90deg]" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.65rem] border border-[#009A9A]/20 bg-[#0D1B3D] p-6 text-white shadow-2xl shadow-[#0D1B3D]/20 dark:border-[#22C7C7]/25">
              <div className="premium-grid absolute inset-0 opacity-15" />
              <div className="relative">
                <Badge className="border-white/15 bg-white/10 text-white">Capa 02</Badge>
                <div className="mt-7 flex items-start gap-4">
                  <span className="node-pulse flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#22C7C7]/25 bg-white/10 text-[#7FF0E6]">
                    <Binary aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                      Implementación digital
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/80">
                      Herramientas construidas o integradas para que el criterio
                      definido se vuelva uso diario, seguimiento y mejora medible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
                {digitalSignals.map((item, index) => {
                  const Icon = index % 2 === 0 ? GitBranch : BarChart3;
                  return (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                    >
                      <Icon aria-hidden="true" className="h-4 w-4 text-[#7FF0E6]" />
                      <p className="mt-3 text-sm font-semibold text-white">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative mt-6 rounded-[1.45rem] border border-[#009A9A]/20 bg-white/80 p-5 backdrop-blur dark:border-[#22C7C7]/25 dark:bg-[#071225]/80">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#007A7A] dark:text-[#5EEAD4]">
              Punto de unión
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
              La tecnología no se agrega como una capa decorativa: se diseña a
              partir del problema operativo para sostener procesos, datos y
              decisiones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
