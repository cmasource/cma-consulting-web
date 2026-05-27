import { Building2, Code2, Gauge, LineChart, Settings2 } from "lucide-react";
import {
  CardBody,
  CardTitle,
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";

const steps = [
  {
    title: "Diagnóstico",
    owner: "CMA Consulting",
    icon: Gauge,
    text: "Lectura de negocio, costos, datos, roles y fricciones operativas.",
  },
  {
    title: "Procesos",
    owner: "CMA Consulting",
    icon: Building2,
    text: "Diseño de flujos, responsables, indicadores y reglas de trabajo.",
  },
  {
    title: "Herramientas",
    owner: "cma_source",
    icon: Code2,
    text: "Software, dashboards, automatizaciones e integraciones útiles.",
  },
  {
    title: "Implementación",
    owner: "CMA + cma_source",
    icon: Settings2,
    text: "Puesta en marcha acompañada para que la mejora se adopte.",
  },
  {
    title: "Medición",
    owner: "CMA + cma_source",
    icon: LineChart,
    text: "Seguimiento de resultados, desvíos y mejora continua.",
  },
];

export function CmaSystemSection() {
  return (
    <section className="section-shell bg-[#F8FAFC] dark:bg-[#0A162E]">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Método operativo</Eyebrow>
          <SectionTitle className="mt-4">El sistema CMA</SectionTitle>
          <SectionLead className="mt-5">
            Un método para pasar del diagnóstico a la implementación real. CMA
            Consulting entiende el problema empresarial. cma_source construye la
            solución tecnológica.
          </SectionLead>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#009A9A]/45 to-transparent dark:via-[#22C7C7]/45 md:block xl:left-0 xl:right-0 xl:top-12 xl:h-px xl:w-full" />
          <div className="grid gap-4 xl:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="relative rounded-[1.4rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#009A9A]/35 dark:border-white/10 dark:bg-[#0F1B36] dark:hover:border-[#22C7C7]/40"
                >
                  <span className="node-pulse flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D1B3D] text-white dark:bg-[#15234A]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <p className="mt-6 font-mono text-xs font-bold text-[#007A7A] dark:text-[#5EEAD4]">
                    0{index + 1} · {step.owner}
                  </p>
                  <CardTitle className="mt-3">{step.title}</CardTitle>
                  <CardBody className="mt-3">{step.text}</CardBody>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
