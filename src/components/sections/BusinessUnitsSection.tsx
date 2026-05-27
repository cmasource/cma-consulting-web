import { ArrowDown, Blocks, Cpu } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { businessUnits } from "@/content/site";

export function BusinessUnitsSection() {
  const consulting = businessUnits.find((unit) => unit.name === "CMA Consulting");
  const source = businessUnits.find((unit) => unit.name === "cma_source");

  return (
    <section className="section-shell bg-[#F8FAFC] dark:bg-[#0A162E]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Arquitectura de marca"
          title="Dos capas conectadas para que la mejora llegue a la operación."
          description="CMA Consulting entiende el problema empresarial. cma_source construye la solución tecnológica."
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <article className="relative overflow-hidden rounded-[1.5rem] border border-[#0D1B3D]/10 bg-white p-6 shadow-xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0F1B36] dark:shadow-black/30 md:p-8">
            <div className="absolute right-6 top-6 text-[#0D1B3D]/5 dark:text-white/5">
              <Blocks aria-hidden="true" className="h-32 w-32" strokeWidth={1.2} />
            </div>
            <div className="relative">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#007A7A] dark:text-[#5EEAD4]">
                Capa estratégica
              </p>
              <BrandLogo variant="consulting" context="auto" />
              <h3 className="mt-7 text-2xl font-black text-[#0D1B3D] dark:text-[#F8FAFC]">
                Gestión, procesos y diagnóstico.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
                Ordena prioridades, procesos, costos, indicadores y criterios de gestión antes de implementar herramientas.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {consulting?.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-[#0D1B3D]/10 bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold text-[#0D1B3D] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="flex items-center justify-center">
            <div className="rounded-full border border-[#009A9A]/25 bg-white p-3 text-[#007A7A] shadow-lg shadow-[#0D1B3D]/10 dark:border-[#22C7C7]/30 dark:bg-[#0F1B36] dark:text-[#5EEAD4]">
              <ArrowDown aria-hidden="true" className="h-6 w-6 lg:-rotate-90" />
            </div>
          </div>

          <article className="relative overflow-hidden rounded-[1.5rem] border border-[#009A9A]/25 bg-[#0D1B3D] p-6 text-white shadow-2xl shadow-[#0D1B3D]/20 dark:border-[#22C7C7]/30 dark:bg-[#0F1B36] dark:shadow-black/30 md:p-8">
            <div className="absolute right-6 top-6 text-white/10">
              <Cpu aria-hidden="true" className="h-32 w-32" strokeWidth={1.2} />
            </div>
            <div className="relative">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#7FF0E6] dark:text-[#5EEAD4]">
                Capa tecnológica
              </p>
              <BrandLogo variant="source" context="dark" />
              <h3 className="mt-7 text-2xl font-black">
                Software, datos y automatización.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/85 dark:text-[#CBD5E1]">
                Construye herramientas digitales alineadas a procesos, información y objetivos concretos del negocio.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {source?.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white dark:text-[#CBD5E1]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
