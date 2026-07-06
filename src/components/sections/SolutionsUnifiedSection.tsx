"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  GitBranch,
} from "lucide-react";
import { Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

const serviceOffers = [
  {
    title: "Diagnóstico 360 PyME",
    text: "Para entender dónde se pierde eficiencia, margen o control.",
    includes: ["relevamiento inicial", "mapa de situación", "problemas críticos", "quick wins", "plan de acción"],
    icon: ClipboardCheck,
  },
  {
    title: "Control financiero y gestión",
    text: "Para ordenar caja, costos, márgenes, precios, indicadores y reportes.",
    includes: ["flujo de fondos", "estructura de costos", "márgenes", "punto de equilibrio", "KPIs"],
    icon: CircleDollarSign,
  },
  {
    title: "Procesos y operación",
    text: "Para ordenar tareas, responsables, seguimiento comercial, cobranzas, stock y rutinas.",
    includes: ["mapeo de procesos", "cuellos de botella", "rediseño operativo", "indicadores", "seguimiento"],
    icon: GitBranch,
  },
  {
    title: "Tecnología aplicada",
    text: "Para construir soluciones digitales cuando el negocio ya tiene claro qué necesita.",
    includes: ["dashboards", "automatizaciones", "formularios inteligentes", "agentes IA", "integraciones"],
    icon: Bot,
  },
];

const layers = {
  numbers: {
    number: "01",
    label: "Ordenar números y operación",
    short: "Diagnosticar y priorizar",
    eyebrow: "Capa activa",
    title: "Ordenar caja, costos, márgenes y procesos",
    summary:
      "Empezamos por entender cómo funciona la empresa: números, procesos, datos, seguimiento y puntos de control.",
    selectorText: "Para pymes que necesitan claridad antes de invertir tiempo o tecnología.",
    deliverables: ["diagnóstico inicial", "lectura económico-operativa", "prioridades de acción"],
    capabilities: ["caja", "costos", "márgenes", "procesos", "indicadores"],
    flow: ["Diagnóstico", "Lectura", "Plan"],
  },
  tech: {
    number: "02",
    label: "Implementar tecnología aplicada",
    short: "Construir con criterio",
    eyebrow: "Capa activa",
    title: "Implementar herramientas cuando aportan valor",
    summary:
      "La tecnología aparece como consecuencia del diagnóstico: tableros, automatizaciones, sistemas, formularios o integraciones.",
    selectorText: "Para resolver problemas ya definidos con herramientas simples de usar.",
    deliverables: ["dashboards", "automatizaciones", "herramientas internas"],
    capabilities: ["datos", "reportes", "IA aplicada", "integraciones", "webs"],
    flow: ["Prototipo", "Implementación", "Medición"],
  },
};

const workflow = [
  ["Diagnóstico", "Relevamos situación actual, números, procesos, herramientas, problemas y prioridades."],
  ["Lectura económico-operativa", "Identificamos pérdidas de rentabilidad, desorden de caja, cuellos de botella y oportunidades."],
  ["Plan de acción", "Priorizamos qué resolver primero según impacto, urgencia y complejidad."],
  ["Implementación", "Ejecutamos mejoras de gestión, tableros, automatizaciones o herramientas digitales."],
  ["Seguimiento", "Medimos avances, corregimos desvíos y acompañamos decisiones."],
];

type LayerKey = keyof typeof layers;

const layerKeys = Object.keys(layers) as LayerKey[];

export function SolutionsUnifiedSection() {
  const [active, setActive] = useState<LayerKey>("numbers");
  const [paused, setPaused] = useState(false);
  const layer = layers[active];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActive((current) => (current === "numbers" ? "tech" : "numbers"));
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
            <SectionTitle className="mt-4">Qué puede contratar una pyme</SectionTitle>
          </div>
          <SectionLead>
            Servicios para ordenar números, procesos y decisiones, con tecnología
            aplicada cuando el negocio lo necesita.
          </SectionLead>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceOffers.map((offer) => {
            const Icon = offer.icon;
            return (
              <article
                key={offer.title}
                className="rounded-[1.35rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-lg shadow-[#0D1B3D]/6 dark:border-white/10 dark:bg-[#071225]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#009A9A]/10 text-[#005F5F] dark:bg-[#22C7C7]/10 dark:text-[#5EEAD4]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                  {offer.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#475467] dark:text-[#CBD5E1]">
                  {offer.text}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {offer.includes.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#0D1B3D]/10 bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-[#0D1B3D] dark:border-white/10 dark:bg-[#0F1B36] dark:text-[#CBD5E1]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="mt-8 grid gap-5 lg:grid-cols-[0.34fr_0.66fr]"
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

              <div className="mt-5 grid gap-3" role="tablist" aria-label="Capas de trabajo">
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
            </div>
          </aside>

          <div
            id="solutions-panel"
            role="tabpanel"
            aria-live="polite"
            className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#071225] md:p-7"
          >
            <div className="premium-grid absolute inset-0 opacity-40" />
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#22C7C7]/12 blur-3xl" />
            <div key={active} className="relative animate-[chapter-reveal_0.45s_ease_both]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-[#009A9A]/15 bg-[#009A9A]/10 px-3 py-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#005F5F] dark:border-[#7FF0E6]/18 dark:bg-[#7FF0E6]/10 dark:text-[#7FF0E6]">
                  {layer.eyebrow}
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#667085] dark:text-[#94A3B8]">
                  {layer.label}
                </span>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
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
                </div>

                <div className="rounded-[1.35rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-5 dark:border-white/10 dark:bg-[#0F1B36]">
                  <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#005F5F] dark:text-[#7FF0E6]">
                    Cómo trabajamos
                  </p>
                  <div className="mt-4 grid gap-3">
                    {layer.flow.map((step, index) => (
                      <div key={step} className="grid grid-cols-[auto_1fr] items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDF8F4] font-mono text-xs font-bold text-[#005F5F] dark:bg-[#7FF0E6]/10 dark:text-[#7FF0E6]">
                          0{index + 1}
                        </span>
                        <span className="text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 h-px bg-gradient-to-r from-transparent via-[#009A9A]/35 to-transparent" />
                  <p className="mt-5 text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
                    Primero entendemos el negocio; después definimos qué conviene
                    mejorar, automatizar o implementar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          {workflow.map(([title, text], index) => (
            <article
              key={title}
              className="rounded-[1.2rem] border border-[#0D1B3D]/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-[#071225]"
            >
              <span className="font-mono text-[0.68rem] font-bold text-[#005F5F] dark:text-[#7FF0E6]">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-base font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#475467] dark:text-[#CBD5E1]">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.6rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-lg shadow-[#0D1B3D]/6 dark:border-white/10 dark:bg-[#071225] md:p-6">
          <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <Eyebrow>Alcance claro</Eyebrow>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC]">
                Qué hacemos y qué no hacemos
              </h3>
            </div>
            <div className="grid gap-4 text-sm leading-7 text-[#475467] dark:text-[#CBD5E1] md:grid-cols-2">
              <p>
                Trabajamos sobre gestión, finanzas, procesos, datos y tecnología.
                No reemplazamos a tu contador, abogado ni equipo interno.
                Ayudamos a entender el negocio, ordenar información, detectar
                problemas críticos y coordinar soluciones.
              </p>
              <p>
                <strong className="text-[#0D1B3D] dark:text-[#F8FAFC]">
                  Red de especialistas aliados.
                </strong>{" "}
                Cuando el proyecto lo requiere, coordinamos trabajo con
                profesionales contables, legales, fiscales, laborales, de
                marketing, sistemas o implementación ERP.
              </p>
              <p className="md:col-span-2">
                Cuando la solución requiere tecnología, CMA Consulting trabaja
                con su unidad técnica cma_source para desarrollar dashboards,
                automatizaciones, sitios web, herramientas internas o
                integraciones a medida.
              </p>
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
      <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#005F5F] dark:text-[#7FF0E6]">
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
