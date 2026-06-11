"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  PanelsTopLeft,
  ShoppingCart,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

const consultingFronts = [
  {
    title: "Gestión y control",
    text: "Costos, indicadores, flujo de fondos y prioridades de gestión.",
    capabilities: ["KPIs", "Rentabilidad", "Prioridades"],
    icon: BarChart3,
  },
  {
    title: "Procesos y mejora continua",
    text: "Roles, tareas, circuitos, estandarización, 5S, Lean y BPM aplicado.",
    capabilities: ["Circuitos", "5S", "BPM"],
    icon: GitBranch,
  },
  {
    title: "Comercial y administración",
    text: "Ventas, seguimiento, compras, stock, cobranzas y rutinas operativas.",
    capabilities: ["Ventas", "Compras", "Rutinas"],
    icon: BriefcaseBusiness,
  },
  {
    title: "Costos, stock y cobranzas",
    text: "Información básica ordenada para sostener decisiones operativas.",
    capabilities: ["Costos", "Stock", "Cobros"],
    icon: WalletCards,
  },
];

const digitalFronts = [
  {
    title: "Webs y presencia digital",
    text: "Sitios institucionales, landings, catálogos y formularios orientados a consulta.",
    capabilities: ["Web", "Catálogo", "Formularios"],
    icon: PanelsTopLeft,
  },
  {
    title: "Ecommerce",
    text: "Catálogo, carrito, checkout, pedidos, cobro y panel administrador.",
    capabilities: ["Checkout", "Pedidos", "Panel"],
    icon: ShoppingCart,
  },
  {
    title: "Sistemas y SaaS",
    text: "Aplicaciones internas para reemplazar planillas y ordenar uso diario.",
    capabilities: ["Roles", "Flujos", "Paneles"],
    icon: Code2,
  },
  {
    title: "Dashboards y datos",
    text: "Tableros, reportes e indicadores para ver la operación con claridad.",
    capabilities: ["Reportes", "KPIs", "Exportación"],
    icon: Database,
  },
  {
    title: "Automatización e IA aplicada",
    text: "Integraciones, alertas y asistentes cuando reducen trabajo repetitivo.",
    capabilities: ["n8n", "Alertas", "Asistentes"],
    icon: Sparkles,
  },
];

const layers = {
  consulting: {
    number: "01",
    label: "Consultoría empresarial",
    short: "Diagnosticar y ordenar",
    eyebrow: "Capa activa",
    title: "Diagnosticar, priorizar y ordenar la gestión",
    summary:
      "Trabajamos sobre problemas reales de control, procesos y operación para definir qué conviene corregir primero.",
    selectorText: "Criterio de negocio, procesos y control antes de construir.",
    deliverables: ["Mapa de frentes críticos", "Prioridades de acción", "Rutinas e indicadores base"],
    capabilities: ["Gestión", "Procesos", "Costos", "Control"],
    flow: ["Relevar", "Ordenar", "Priorizar"],
    fronts: consultingFronts,
  },
  digital: {
    number: "02",
    label: "Implementación digital",
    short: "Construir herramientas",
    eyebrow: "Capa activa",
    title: "Construir herramientas alineadas al proceso",
    summary:
      "Cuando el problema está claro, implementamos webs, sistemas, dashboards o automatizaciones simples de usar.",
    selectorText: "Tecnología concreta para ejecutar mejor, medir y escalar.",
    deliverables: ["Webs y ecommerce", "Sistemas internos", "Dashboards y automatizaciones"],
    capabilities: ["SaaS", "Datos", "IA aplicada", "Integraciones"],
    flow: ["Prototipar", "Implementar", "Medir"],
    fronts: digitalFronts,
  },
};

type LayerKey = keyof typeof layers;

const layerKeys = Object.keys(layers) as LayerKey[];

export function SolutionsUnifiedSection() {
  const [active, setActive] = useState<LayerKey>("consulting");
  const [paused, setPaused] = useState(false);
  const layer = layers[active];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActive((current) => (current === "consulting" ? "digital" : "consulting"));
    }, 4600);

    return () => window.clearInterval(interval);
  }, [paused]);

  const activeIndex = useMemo(() => layerKeys.indexOf(active), [active]);

  return (
    <section id="soluciones" className="section-shell bg-[#F5F8FB] dark:bg-[#0A162E]">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <Eyebrow>Soluciones</Eyebrow>
            <SectionTitle className="mt-4">
              Soluciones para ordenar y hacer crecer la operación
            </SectionTitle>
          </div>
          <SectionLead>
            Combinamos diagnóstico empresarial, mejora de procesos e implementación
            digital cuando el problema lo requiere.
          </SectionLead>
        </div>

        <div
          className="mt-10 grid gap-5 lg:grid-cols-[0.34fr_0.66fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <aside className="relative overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-[#0D1B3D] p-5 text-white shadow-2xl shadow-[#0D1B3D]/20 dark:border-white/10">
            <div className="premium-grid absolute inset-0 opacity-10" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#7FF0E6]">
                  Seleccioná una capa
                </p>
                <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 font-mono text-[0.65rem] font-bold text-white/78">
                  {layer.number} / 02
                </span>
              </div>

              <div className="mt-5 grid gap-3" role="tablist" aria-label="Capas de solucion">
                {layerKeys.map((key) => {
                  const option = layers[key];
                  const isActive = active === key;

                  return (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="solutions-panel"
                      onClick={() => setActive(key)}
                      className={cn(
                        "group relative overflow-hidden rounded-[1.4rem] border p-4 text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7FF0E6]",
                        isActive
                          ? "border-[#7FF0E6]/45 bg-white/[0.14] shadow-xl shadow-black/20"
                          : "border-white/10 bg-white/[0.055] hover:border-[#7FF0E6]/25 hover:bg-white/[0.09]",
                      )}
                    >
                      <span
                        className={cn(
                          "absolute inset-y-4 left-0 w-1 rounded-r-full bg-[#7FF0E6] transition",
                          isActive ? "opacity-100" : "opacity-0",
                        )}
                      />
                      <span className="flex items-start justify-between gap-4">
                        <span>
                          <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#7FF0E6]">
                            {option.number}
                          </span>
                          <span className="mt-2 block text-lg font-semibold text-white">
                            {option.short}
                          </span>
                          <span className="mt-2 block text-sm leading-6 text-white/68">
                            {option.selectorText}
                          </span>
                        </span>
                        <span
                          className={cn(
                            "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition",
                            isActive
                              ? "border-[#7FF0E6]/50 bg-[#7FF0E6]/18 text-[#DFFCF8]"
                              : "border-white/10 bg-white/5 text-white/50 group-hover:text-[#7FF0E6]",
                          )}
                        >
                          <ArrowRight aria-hidden="true" className="h-4 w-4" />
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-1.5 rounded-full bg-[#7FF0E6] transition-all duration-500"
                  style={{ width: activeIndex === 0 ? "50%" : "100%" }}
                />
              </div>
              <p className="mt-4 text-xs leading-6 text-white/56">
                Cambia automáticamente cada pocos segundos. También podés elegir
                manualmente la capa que querés explorar.
              </p>
            </div>
          </aside>

          <div
            id="solutions-panel"
            role="tabpanel"
            aria-live="polite"
            className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#071225] md:p-7 lg:min-h-[600px]"
          >
            <div className="premium-grid absolute inset-0 opacity-40" />
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#22C7C7]/12 blur-3xl" />
            <div key={active} className="relative animate-[chapter-reveal_0.45s_ease_both]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-[#009A9A]/15 bg-[#009A9A]/10 px-3 py-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#007A7A] dark:border-[#7FF0E6]/18 dark:bg-[#7FF0E6]/10 dark:text-[#7FF0E6]">
                  {layer.eyebrow}
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#667085] dark:text-[#94A3B8]">
                  {layer.label}
                </span>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.035em] text-[#0D1B3D] dark:text-[#F8FAFC] md:text-4xl">
                    {layer.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-[#475467] dark:text-[#CBD5E1]">
                    {layer.summary}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <InfoBlock title="Entregables" items={layer.deliverables} />
                    <InfoBlock title="Capacidades" items={layer.capabilities} />
                  </div>

                  <div className="mt-7 rounded-[1.25rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-4 dark:border-white/10 dark:bg-[#0F1B36]">
                    <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#007A7A] dark:text-[#7FF0E6]">
                      Flujo de trabajo
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {layer.flow.map((step, index) => (
                        <div key={step} className="relative">
                          {index < layer.flow.length - 1 ? (
                            <span className="absolute left-[calc(50%+18px)] top-5 hidden h-px w-[calc(100%-20px)] bg-[#009A9A]/28 sm:block" />
                          ) : null}
                          <div className="relative flex flex-col items-center gap-2 rounded-2xl bg-white px-2 py-3 text-center shadow-sm dark:bg-[#071225]">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDF8F4] font-mono text-xs font-bold text-[#005F5F] dark:bg-[#7FF0E6]/10 dark:text-[#7FF0E6]">
                              0{index + 1}
                            </span>
                            <span className="text-xs font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                              {step}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {layer.fronts.map((front) => {
                    const Icon = front.icon;
                    return (
                      <article
                        key={front.title}
                        className="rounded-[1.25rem] border border-[#0D1B3D]/10 bg-white/88 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0D1B3D]/8 dark:border-white/10 dark:bg-[#0F1B36]/88"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#009A9A]/10 text-[#007A7A] dark:bg-[#22C7C7]/10 dark:text-[#5EEAD4]">
                            <Icon aria-hidden="true" className="h-5 w-5" />
                          </span>
                          <div>
                            <h4 className="text-base font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                              {front.title}
                            </h4>
                            <p className="mt-2 text-sm leading-6 text-[#475467] dark:text-[#CBD5E1]">
                              {front.text}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {front.capabilities.map((capability) => (
                            <span
                              key={capability}
                              className="rounded-full border border-[#0D1B3D]/10 bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-[#0D1B3D] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]"
                            >
                              {capability}
                            </span>
                          ))}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1.25rem] border border-[#0D1B3D]/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-[#0F1B36]">
      <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#007A7A] dark:text-[#7FF0E6]">
        {title}
      </p>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm font-semibold text-[#344054] dark:text-[#CBD5E1]">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-[#009A9A] dark:text-[#7FF0E6]" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
