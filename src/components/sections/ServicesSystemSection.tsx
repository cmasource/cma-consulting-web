"use client";

import { useState } from "react";
import { BarChart3, BriefcaseBusiness, GitBranch, Settings2 } from "lucide-react";
import { Badge, Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";
import { consultingServiceGroups } from "@/content/services";
import { cn } from "@/lib/utils";

const serviceDetails = [
  {
    label: "Gestión y control",
    icon: BarChart3,
    problem: "La empresa vende, pero no sabe exactamente dónde gana o pierde.",
    work: "Costos, indicadores, flujo, control y criterios de seguimiento.",
    result: "Decisiones con información más clara y prioridades mejor ordenadas.",
    capabilities: consultingServiceGroups[0].items,
  },
  {
    label: "Procesos y mejora continua",
    icon: GitBranch,
    problem: "El trabajo depende de urgencias, memoria informal y tareas repetidas.",
    work: "Lean, 5S, Kaizen, BPM, estandarización, gestión visual y mejora continua.",
    result: "Procesos visibles, responsables definidos y una forma de mejorar sin improvisar.",
    capabilities: consultingServiceGroups[1].items,
  },
  {
    label: "Comercial y administración",
    icon: BriefcaseBusiness,
    problem: "Ventas, compras, stock y cobranzas avanzan sin trazabilidad suficiente.",
    work: "Seguimiento comercial, administración, tareas, roles y circuitos básicos.",
    result: "Operación diaria más ordenada y menos dependencia de acuerdos de palabra.",
    capabilities: consultingServiceGroups[2].items,
  },
  {
    label: "Transformación digital",
    icon: Settings2,
    problem: "Hay herramientas, planillas o sistemas, pero no forman un flujo de trabajo claro.",
    work: "Diagnóstico digital, automatización, adopción y preparación para sistemas de gestión.",
    result: "Tecnología aplicada a procesos reales, con mejor adopción y medición.",
    capabilities: consultingServiceGroups[3].items,
  },
];

export function ServicesSystemSection() {
  const [active, setActive] = useState(0);
  const selected = serviceDetails[active];
  const ActiveIcon = selected.icon;

  return (
    <section id="servicios" className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>CMA Consulting</Eyebrow>
            <SectionTitle className="mt-4">
              Qué podemos ordenar y mejorar
            </SectionTitle>
            <SectionLead className="mt-5">
              Trabajamos sobre problemas concretos de gestión, procesos,
              administración y tecnología para convertirlos en mejoras aplicables.
            </SectionLead>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0A162E] dark:shadow-black/30">
            <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
              <div className="border-b border-[#0D1B3D]/10 bg-white p-3 dark:border-white/10 dark:bg-[#071225] lg:border-b-0 lg:border-r">
                <div className="grid gap-2" role="tablist" aria-label="Categorías de servicios">
                  {serviceDetails.map((service, index) => {
                    const Icon = service.icon;
                    const isActive = active === index;
                    return (
                      <button
                        key={service.label}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="services-detail-panel"
                        onClick={() => setActive(index)}
                        className={cn(
                          "rounded-2xl border px-4 py-4 text-left transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007A7A]",
                          isActive
                            ? "border-[#009A9A]/35 bg-[#F8FAFC] shadow-lg shadow-[#0D1B3D]/8 dark:border-[#22C7C7]/35 dark:bg-[#0F1B36]"
                            : "border-transparent hover:border-[#0D1B3D]/10 hover:bg-[#F8FAFC] dark:hover:border-white/10 dark:hover:bg-[#0F1B36]",
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={cn(
                              "flex h-9 w-9 items-center justify-center rounded-xl border",
                              isActive
                                ? "border-[#009A9A]/30 bg-[#009A9A]/10 text-[#007A7A] dark:border-[#22C7C7]/30 dark:bg-[#22C7C7]/10 dark:text-[#5EEAD4]"
                                : "border-[#0D1B3D]/10 bg-white text-[#475467] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]",
                            )}
                          >
                            <Icon aria-hidden="true" className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                            {service.label}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div id="services-detail-panel" role="tabpanel" className="relative min-h-[560px] overflow-hidden bg-[#F8FAFC] p-6 dark:bg-[#0A162E] md:p-8">
                <div className="premium-grid absolute inset-0 opacity-50" />
                <div className="relative">
                  <Badge>Área activa</Badge>
                  <div className="mt-7 flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0D1B3D] text-white shadow-lg shadow-[#0D1B3D]/15 dark:bg-[#15234A]">
                      <ActiveIcon aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC] md:text-4xl">
                        {selected.label}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#475467] dark:text-[#CBD5E1] md:text-base">
                        {selected.problem}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {[
                      ["Problema típico", selected.problem],
                      ["Qué se trabaja", selected.work],
                      ["Resultado esperado", selected.result],
                    ].map(([title, text]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-[#009A9A]/20 bg-white p-5 dark:border-[#22C7C7]/25 dark:bg-[#071225]"
                      >
                        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#007A7A] dark:text-[#5EEAD4]">
                          {title}
                        </p>
                        <p className="mt-3 text-sm font-semibold leading-7 text-[#0D1B3D] dark:text-[#F8FAFC]">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#007A7A] dark:text-[#5EEAD4]">
                      Capacidades principales
                    </p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {selected.capabilities.slice(0, 8).map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-[#0D1B3D]/10 bg-white px-4 py-3 text-sm font-semibold text-[#475467] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
