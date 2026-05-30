import { ArrowRight, CircuitBoard, Compass, Workflow } from "lucide-react";
import { Badge, Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";

const layers = [
  {
    title: "Criterio empresarial",
    eyebrow: "Capa de decisión",
    icon: Compass,
    text: "Comprender el problema, ordenar prioridades y definir qué debe cambiar para que la mejora tenga sentido operativo.",
    items: ["Diagnóstico", "Procesos", "Indicadores"],
  },
  {
    title: "Implementación digital",
    eyebrow: "Capa de ejecución",
    icon: CircuitBoard,
    text: "Construir o integrar herramientas que vuelvan ese criterio usable en la operación diaria.",
    items: ["Software", "Automatización", "Datos"],
  },
];

export function TwoLayersSection() {
  return (
    <section className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Modelo de implementación</Eyebrow>
          <SectionTitle className="mt-4">Dos capas. Una implementación.</SectionTitle>
          <SectionLead className="mt-5">
            La estrategia no queda separada de la ejecución: el criterio de
            negocio define el camino y la capa digital lo convierte en operación.
          </SectionLead>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-5 shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0A162E] dark:shadow-black/30 md:p-8">
          <div className="premium-grid absolute inset-0 opacity-60" />
          <div className="relative grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <article
                  key={layer.title}
                  className="relative min-h-[310px] overflow-hidden rounded-[1.6rem] border border-[#0D1B3D]/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0F1B36]"
                >
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#009A9A]/20" />
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D1B3D] text-white dark:bg-[#15234A]">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <Badge>{index === 0 ? "01" : "02"}</Badge>
                  </div>
                  <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#007A7A] dark:text-[#5EEAD4]">
                    {layer.eyebrow}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC]">
                    {layer.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
                    {layer.text}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#0D1B3D]/10 bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-[#0D1B3D] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}

            <div className="flex items-center justify-center">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#009A9A]/25 bg-white text-[#007A7A] shadow-xl shadow-[#0D1B3D]/10 dark:border-[#22C7C7]/30 dark:bg-[#071225] dark:text-[#5EEAD4]">
                <ArrowRight aria-hidden="true" className="hidden h-6 w-6 lg:block" />
                <Workflow aria-hidden="true" className="h-6 w-6 lg:hidden" />
              </div>
            </div>
          </div>

          <div className="relative mt-5 rounded-[1.4rem] border border-[#009A9A]/20 bg-white/80 p-5 backdrop-blur dark:border-[#22C7C7]/25 dark:bg-[#071225]/80">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#007A7A] dark:text-[#5EEAD4]">
              Punto de unión
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
              La implementación digital no se agrega al final: se diseña desde el
              problema operativo, para que cada herramienta tenga un uso claro y
              un resultado medible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
