import {
  ArrowRight,
  ClipboardCheck,
  Gauge,
  GitBranch,
  LineChart,
  PenTool,
} from "lucide-react";
import { Badge, Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";

const steps = [
  {
    title: "Diagnóstico",
    label: "Lectura inicial",
    icon: Gauge,
    description:
      "Entender la operación real, detectar fricciones y separar síntomas de causas.",
    result: "Mapa claro de problemas, prioridades y riesgos.",
    preview: ["Situación actual", "Datos disponibles", "Fricciones críticas"],
  },
  {
    title: "Procesos",
    label: "Orden operativo",
    icon: GitBranch,
    description:
      "Definir flujos, responsables, reglas de trabajo e indicadores que ordenan la gestión.",
    result: "Procesos visibles y criterios compartidos.",
    preview: ["Roles", "Flujos", "Indicadores"],
  },
  {
    title: "Diseño de solución",
    label: "Arquitectura",
    icon: PenTool,
    description:
      "Convertir el diagnóstico en una solución implementable: procesos, herramientas y próximos pasos.",
    result: "Plan de implementación concreto y medible.",
    preview: ["Alcance", "Herramientas", "Prioridades"],
  },
  {
    title: "Implementación",
    label: "Puesta en marcha",
    icon: ClipboardCheck,
    description:
      "Acompañar la adopción, ajustar la operación y sostener el cambio en la práctica.",
    result: "Mejoras incorporadas al trabajo diario.",
    preview: ["Adopción", "Ajustes", "Seguimiento"],
  },
  {
    title: "Medición y mejora",
    label: "Evolución",
    icon: LineChart,
    description:
      "Medir resultados, corregir desvíos y alimentar un ciclo de mejora continua.",
    result: "Decisiones con trazabilidad y mejora sostenida.",
    preview: ["Resultados", "Desvíos", "Mejoras"],
  },
];

export function CmaSystemSection() {
  return (
    <section className="section-shell bg-[#F8FAFC] dark:bg-[#0A162E]">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Método operativo</Eyebrow>
            <SectionTitle className="mt-4">El sistema CMA</SectionTitle>
            <SectionLead className="mt-5">
              Un método para pasar del diagnóstico a la implementación real:
              entender, ordenar, diseñar, ejecutar y medir con criterio
              empresarial.
            </SectionLead>
            <div className="mt-8 hidden rounded-[1.5rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-xl shadow-[#0D1B3D]/8 dark:border-white/10 dark:bg-[#0F1B36] lg:block">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#007A7A] dark:text-[#5EEAD4]">
                Resultado del método
              </p>
              <p className="mt-3 text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
                Una empresa con procesos más claros, indicadores visibles y
                herramientas alineadas a la forma real de operar.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white p-4 shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#071225] dark:shadow-black/30 md:p-6">
            <div className="premium-grid absolute inset-0 opacity-50" />
            <div className="relative grid gap-6 xl:grid-cols-[0.48fr_0.52fr]">
              <div className="grid gap-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <article
                      key={step.title}
                      className="group relative overflow-hidden rounded-[1.4rem] border border-[#0D1B3D]/10 bg-[#F8FAFC]/90 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#009A9A]/35 hover:bg-white dark:border-white/10 dark:bg-[#0F1B36]/90 dark:hover:border-[#22C7C7]/40"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0D1B3D] text-white shadow-lg shadow-[#0D1B3D]/15 dark:bg-[#15234A]">
                          <Icon aria-hidden="true" className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#007A7A] dark:text-[#5EEAD4]">
                            0{index + 1} · {step.label}
                          </p>
                          <h3 className="mt-2 text-xl font-semibold tracking-[-0.01em] text-[#0D1B3D] dark:text-[#F8FAFC]">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
                            {step.description}
                          </p>
                          <p className="mt-4 text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                            {step.result}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="relative min-h-[520px] overflow-hidden rounded-[1.6rem] border border-[#0D1B3D]/10 bg-[#0D1B3D] p-6 text-white dark:border-white/10">
                <div className="premium-grid absolute inset-0 opacity-15" />
                <div className="ambient-scan absolute inset-[-16%] blur-2xl" />
                <div className="relative">
                  <Badge className="border-white/15 bg-white/10 text-white">
                    Preview del método
                  </Badge>
                  <h3 className="mt-6 max-w-sm text-3xl font-semibold tracking-[-0.03em]">
                    De señales sueltas a una operación gobernable.
                  </h3>
                </div>

                <div className="relative mt-8 grid gap-3">
                  {steps.map((step, index) => (
                    <div
                      key={step.title}
                      className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white font-mono text-xs font-bold text-[#0D1B3D]">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {step.title}
                        </p>
                        <p className="mt-1 text-xs text-white/70">
                          {step.preview.join(" · ")}
                        </p>
                      </div>
                      {index < steps.length - 1 ? (
                        <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#7FF0E6]" />
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-[#7FF0E6]" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[#22C7C7]/25 bg-[#22C7C7]/10 p-4">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#7FF0E6]">
                    Ciclo de mejora
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    El método no termina en el informe: vuelve a medir, ajustar y
                    priorizar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
