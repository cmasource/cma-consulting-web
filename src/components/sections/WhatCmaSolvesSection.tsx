import { BarChart3, BriefcaseBusiness, GitBranch, Settings2 } from "lucide-react";
import { Badge, Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";

const categories = [
  {
    title: "Gestión y control",
    icon: BarChart3,
    color: "from-[#0D1B3D] to-[#263A6F]",
    soft: "bg-[#0D1B3D]/8 border-[#0D1B3D]/15",
    accent: "text-[#0D1B3D] dark:text-[#9FB3FF]",
    problem: "Costos poco claros, indicadores ausentes y decisiones sin trazabilidad.",
    work: "Ordenamos información, definimos KPIs, revisamos costos y armamos prioridades.",
    result: "Decisiones con mejor contexto.",
    metric: "Control visible",
  },
  {
    title: "Procesos y mejora continua",
    icon: GitBranch,
    color: "from-[#009A9A] to-[#22C7C7]",
    soft: "bg-[#009A9A]/10 border-[#009A9A]/20",
    accent: "text-[#007A7A] dark:text-[#5EEAD4]",
    problem: "Tareas repetidas, responsables difusos y operación dependiente de personas clave.",
    work: "Mapeamos procesos, detectamos fricciones y estandarizamos formas de trabajo.",
    result: "Menos desperdicio operativo.",
    metric: "Flujos claros",
  },
  {
    title: "Comercial y administración",
    icon: BriefcaseBusiness,
    color: "from-[#2F6B4F] to-[#55A876]",
    soft: "bg-emerald-50 border-emerald-700/15 dark:bg-emerald-950/20 dark:border-emerald-300/20",
    accent: "text-emerald-700 dark:text-emerald-300",
    problem: "Ventas sin seguimiento, compras desordenadas, stock y cobranzas sin rutina clara.",
    work: "Diseñamos circuitos comerciales y administrativos con responsables y seguimiento.",
    result: "Rutinas de gestión más consistentes.",
    metric: "Seguimiento diario",
  },
  {
    title: "Transformación digital",
    icon: Settings2,
    color: "from-[#4D5BCE] to-[#7A8CFF]",
    soft: "bg-indigo-50 border-indigo-700/15 dark:bg-indigo-950/20 dark:border-indigo-300/20",
    accent: "text-indigo-700 dark:text-indigo-300",
    problem: "Herramientas subutilizadas, planillas aisladas o sistemas que no acompañan el proceso.",
    work: "Preparamos la operación para adoptar tecnología con sentido práctico.",
    result: "Tecnología alineada al negocio.",
    metric: "Adopción real",
  },
];

export function WhatCmaSolvesSection() {
  return (
    <section id="servicios" className="section-shell bg-[#F8FAFC] dark:bg-[#0A162E]">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <div>
            <Eyebrow>CMA Consulting</Eyebrow>
            <SectionTitle className="mt-4">Qué podemos ordenar y mejorar</SectionTitle>
          </div>
          <SectionLead>
            Trabajamos sobre problemas reales de gestión, operación y crecimiento.
            La idea es que se entienda rápido dónde puede aparecer valor.
          </SectionLead>
        </div>

        <div className="mt-11 grid gap-5 lg:grid-cols-[0.9fr_1.35fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white p-6 shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#071225]">
            <div className="premium-grid absolute inset-0 opacity-45" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#009A9A]/12 blur-3xl dark:bg-[#22C7C7]/12" />
            <div className="relative">
              <Badge>Mapa de trabajo</Badge>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-[#0D1B3D] dark:text-[#F8FAFC]">
                De problemas cotidianos a frentes de mejora.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
                La consultoría no empieza en una herramienta. Empieza en ordenar
                qué duele, dónde se pierde tiempo y qué necesita medirse.
              </p>

              <div className="mt-8 grid gap-3">
                {categories.map((category, index) => (
                  <div
                    key={category.title}
                    className={`rounded-2xl border p-4 ${category.soft}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className={`font-mono text-xs font-bold uppercase tracking-[0.18em] ${category.accent}`}>
                        0{index + 1} · {category.metric}
                      </span>
                      <span className={`h-2 w-24 rounded-full bg-gradient-to-r ${category.color}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <article
                  key={category.title}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-lg shadow-[#0D1B3D]/8 transition duration-200 hover:-translate-y-0.5 hover:border-[#009A9A]/35 dark:border-white/10 dark:bg-[#0F1B36] dark:hover:border-[#22C7C7]/40"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.color}`} />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg shadow-[#0D1B3D]/12`}>
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className={`rounded-full border px-3 py-1 text-xs font-bold ${category.soft} ${category.accent}`}>
                        {category.metric}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#0D1B3D] dark:text-[#F8FAFC]">
                      {category.title}
                    </h3>

                    <div className="mt-5 grid gap-3">
                      <div>
                        <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#667085] dark:text-[#CBD5E1]">
                          Problema típico
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#475467] dark:text-[#CBD5E1]">
                          {category.problem}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-[#0D1B3D]/10 bg-[#F8FAFC] p-4 dark:border-white/10 dark:bg-[#071225]">
                        <p className={`font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] ${category.accent}`}>
                          Qué se trabaja
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#475467] dark:text-[#CBD5E1]">
                          {category.work}
                        </p>
                      </div>
                      <p className="text-sm font-semibold leading-6 text-[#0D1B3D] dark:text-[#F8FAFC]">
                        Resultado: {category.result}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
