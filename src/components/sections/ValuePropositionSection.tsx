import { Building2, Code2, Gauge, LineChart, Settings2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const systemSteps = [
  {
    title: "Diagnóstico",
    owner: "CMA Consulting",
    description: "Entendemos el negocio, los datos, los costos, los roles y los puntos de fricción.",
    icon: Gauge,
  },
  {
    title: "Procesos",
    owner: "CMA Consulting",
    description: "Ordenamos flujos de trabajo, responsabilidades, indicadores y criterios de decisión.",
    icon: Building2,
  },
  {
    title: "Herramientas",
    owner: "cma_source",
    description: "Diseñamos software, tableros, automatizaciones e integraciones útiles para operar.",
    icon: Code2,
  },
  {
    title: "Implementación",
    owner: "CMA + cma_source",
    description: "Acompañamos la puesta en marcha para que la mejora se adopte en la operación real.",
    icon: Settings2,
  },
  {
    title: "Medición",
    owner: "CMA + cma_source",
    description: "Seguimos resultados, detectamos desvíos y ajustamos con lógica de mejora continua.",
    icon: LineChart,
  },
];

export function ValuePropositionSection() {
  return (
    <section className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Mapa operativo"
          title="El sistema CMA"
          description="Un flujo de trabajo que conecta criterio empresarial, procesos, herramientas digitales e indicadores para pasar del diagnóstico a la implementación real."
          align="center"
        />
        <div className="relative mt-4">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#009A9A]/10 via-[#009A9A]/40 to-[#009A9A]/10 dark:via-[#22C7C7]/45 lg:left-0 lg:right-0 lg:top-10 lg:h-px lg:w-full" />
          <div className="grid gap-4 lg:grid-cols-5">
            {systemSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="relative rounded-2xl border border-[#0D1B3D]/10 bg-[#F8FAFC] p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#009A9A]/35 hover:shadow-xl hover:shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0F1B36] dark:hover:border-[#22C7C7]/40 dark:hover:shadow-black/30"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D1B3D] text-white dark:bg-[#15234A]">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-black text-[#007A7A] dark:text-[#5EEAD4]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-black text-[#0D1B3D] dark:text-[#F8FAFC]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#007A7A] dark:text-[#5EEAD4]">
                    {step.owner}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
