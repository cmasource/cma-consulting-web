"use client";

import { useEffect, useState } from "react";
import {
  Bot,
  ChartNoAxesCombined,
  Code2,
  PanelsTopLeft,
  ShoppingCart,
} from "lucide-react";
import { Badge, Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";
import { sourceSolutionGroups } from "@/content/services";
import { cn } from "@/lib/utils";

const solutionDetails = [
  {
    summary:
      "Sitios claros, administrables y orientados a conversión para presentar la empresa y capturar consultas.",
    deliverables: ["Arquitectura web", "Landing o sitio institucional", "Formularios y medición"],
    flow: ["Mensaje", "Presencia", "Consulta"],
  },
  {
    summary:
      "Comercio online con catálogo, pedidos y operación básica preparada para escalar sin perder control.",
    deliverables: ["Catálogo", "Checkout", "Gestión de pedidos"],
    flow: ["Producto", "Pedido", "Cobro"],
  },
  {
    summary:
      "Herramientas internas para ordenar turnos, pedidos, costos, clientes o tareas que hoy viven en planillas.",
    deliverables: ["Panel interno", "Roles", "Flujos operativos"],
    flow: ["Proceso", "Sistema", "Uso diario"],
  },
  {
    summary:
      "Indicadores visibles para seguir ventas, costos, operación y resultados con menos dependencia manual.",
    deliverables: ["Tableros", "Reportes", "Exportaciones"],
    flow: ["Dato", "Indicador", "Decisión"],
  },
  {
    summary:
      "Automatizaciones e IA aplicada solo cuando reducen trabajo repetitivo o mejoran la calidad del proceso.",
    deliverables: ["Integraciones", "Alertas", "Asistentes internos"],
    flow: ["Evento", "Automatización", "Acción"],
  },
];

const icons = [PanelsTopLeft, ShoppingCart, Code2, ChartNoAxesCombined, Bot] as const;

export function SoftwareBoutiqueSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeGroup = sourceSolutionGroups[active];
  const detail = solutionDetails[active];
  const ActiveIcon = icons[active];

  useEffect(() => {
    if (paused) {
      return;
    }

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % sourceSolutionGroups.length);
    }, 4500);

    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section id="soluciones" className="section-shell bg-[#F8FAFC] dark:bg-[#0A162E]">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Implementación digital</Eyebrow>
            <SectionTitle className="mt-4">
              Software boutique para problemas concretos de negocio.
            </SectionTitle>
            <SectionLead className="mt-5">
              Diseñamos herramientas digitales a medida, priorizando claridad,
              utilidad y adopción real. No desarrollamos tecnología aislada:
              construimos soluciones alineadas a procesos, datos y objetivos
              empresariales.
            </SectionLead>
            <p className="mt-6 rounded-2xl border border-[#009A9A]/20 bg-white p-5 text-sm font-semibold leading-7 text-[#0D1B3D] dark:border-[#22C7C7]/25 dark:bg-[#0F1B36] dark:text-[#F8FAFC]">
              Incorporamos inteligencia artificial cuando aporta valor concreto al
              proceso, no como promesa vacía.
            </p>
          </div>

          <div
            className="overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#071225] dark:shadow-black/30"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="grid lg:grid-cols-[0.36fr_0.64fr]">
              <div className="border-b border-[#0D1B3D]/10 bg-[#F8FAFC] p-3 dark:border-white/10 dark:bg-[#0A162E] lg:border-b-0 lg:border-r">
                <div className="grid gap-2" role="tablist" aria-label="Soluciones digitales">
                  {sourceSolutionGroups.map((group, index) => {
                    const Icon = icons[index];
                    const isActive = active === index;
                    return (
                      <button
                        key={group.title}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="software-tour-panel"
                        className={cn(
                          "group rounded-2xl border px-4 py-4 text-left transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007A7A]",
                          isActive
                            ? "border-[#009A9A]/35 bg-white shadow-lg shadow-[#0D1B3D]/8 dark:border-[#22C7C7]/40 dark:bg-[#0F1B36]"
                            : "border-transparent bg-transparent hover:border-[#0D1B3D]/10 hover:bg-white/70 dark:hover:border-white/10 dark:hover:bg-[#0F1B36]/70",
                        )}
                        onClick={() => {
                          setActive(index);
                          setPaused(true);
                        }}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={cn(
                              "flex h-9 w-9 items-center justify-center rounded-xl border",
                              isActive
                                ? "border-[#009A9A]/30 bg-[#009A9A]/10 text-[#007A7A] dark:border-[#22C7C7]/35 dark:bg-[#22C7C7]/10 dark:text-[#5EEAD4]"
                                : "border-[#0D1B3D]/10 bg-white text-[#475467] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]",
                            )}
                          >
                            <Icon aria-hidden="true" className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                            {group.title}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                id="software-tour-panel"
                role="tabpanel"
                className="relative min-h-[520px] overflow-hidden bg-[#0D1B3D] p-6 text-white md:p-8"
              >
                <div className="premium-grid absolute inset-0 opacity-15" />
                <div className="ambient-scan absolute inset-[-18%] blur-2xl" />
                <div className="relative">
                  <Badge className="border-white/15 bg-white/10 text-white">
                    Product tour
                  </Badge>
                  <div className="mt-8 flex items-start gap-4">
                    <span className="node-pulse flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#22C7C7]/25 bg-white/10 text-[#7FF0E6]">
                      <ActiveIcon aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                        {activeGroup.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 md:text-base">
                        {detail.summary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-9 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#7FF0E6]">
                        Entregables
                      </p>
                      <div className="mt-4 grid gap-3">
                        {detail.deliverables.map((item) => (
                          <div key={item} className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-sm font-semibold">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#7FF0E6]">
                        Capacidades
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {activeGroup.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-2">
                    {detail.flow.map((item, index) => (
                      <div key={item} className="rounded-2xl border border-[#22C7C7]/20 bg-[#22C7C7]/10 p-3 text-center">
                        <p className="font-mono text-[0.68rem] font-bold text-[#7FF0E6]">
                          0{index + 1}
                        </p>
                        <p className="mt-2 text-xs font-semibold text-white md:text-sm">
                          {item}
                        </p>
                      </div>
                    ))}
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
