import { CheckCircle2, Compass, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const storySteps = [
  {
    title: "Detectamos el desorden",
    description:
      "Procesos informales, costos poco claros, ventas sin seguimiento, tareas repetitivas o datos dispersos.",
    icon: Compass,
  },
  {
    title: "Diseñamos el sistema de trabajo",
    description:
      "Definimos procesos, indicadores, responsables, herramientas, prioridades y oportunidades de mejora.",
    icon: CheckCircle2,
  },
  {
    title: "Construimos la solución",
    description:
      "Desarrollamos software, dashboards, ecommerce, CRM, automatizaciones o integraciones según la necesidad real.",
    icon: Wrench,
  },
];

export function StorytellingSection() {
  return (
    <section className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="De punta a punta"
          title="Del problema operativo a la solución implementada"
          description="Unimos criterio empresarial y desarrollo tecnológico para que las mejoras no queden solo en un informe."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {storySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rounded-xl border border-[#0D1B3D]/10 bg-[#F8FAFC] p-6 shadow-sm dark:border-white/10 dark:bg-[#0F1B36]"
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#009A9A]/10 text-[#009A9A] dark:bg-[#22C7C7]/10 dark:text-[#5EEAD4]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-black text-[#007A7A] dark:text-[#5EEAD4]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1B3D] dark:text-[#F8FAFC]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
