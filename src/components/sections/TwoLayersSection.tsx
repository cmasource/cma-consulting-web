import { ArrowDown, Blocks, Cpu } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { CardBody, Eyebrow, SectionTitle } from "@/components/ui/Typography";

export function TwoLayersSection() {
  return (
    <section className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
          <div>
            <Eyebrow>Arquitectura de marca</Eyebrow>
            <SectionTitle className="mt-4">Dos capas. Una implementación.</SectionTitle>
          </div>
          <div className="relative rounded-[2rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-5 shadow-xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0A162E] dark:shadow-black/30 md:p-8">
            <article className="relative z-10 rounded-[1.5rem] border border-[#0D1B3D]/10 bg-white p-6 dark:border-white/10 dark:bg-[#0F1B36]">
              <Blocks aria-hidden="true" className="mb-5 h-6 w-6 text-[#007A7A] dark:text-[#5EEAD4]" />
              <BrandLogo variant="consulting" context="auto" />
              <h3 className="mt-6 text-2xl font-black text-[#0D1B3D] dark:text-[#F8FAFC]">
                Criterio empresarial
              </h3>
              <CardBody className="mt-3">
                Entender el problema, ordenar procesos y definir prioridades antes de construir.
              </CardBody>
            </article>
            <div className="relative z-20 flex justify-center py-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#009A9A] text-white shadow-xl shadow-[#009A9A]/20">
                <ArrowDown aria-hidden="true" className="h-5 w-5" />
              </span>
            </div>
            <article className="relative z-10 ml-auto rounded-[1.5rem] border border-[#009A9A]/25 bg-[#0D1B3D] p-6 text-white shadow-2xl shadow-[#0D1B3D]/25 dark:border-[#22C7C7]/30 dark:bg-[#0F1B36] md:w-[82%]">
              <Cpu aria-hidden="true" className="mb-5 h-6 w-6 text-[#7FF0E6]" />
              <BrandLogo variant="source" context="dark" />
              <h3 className="mt-6 text-2xl font-black">Desarrollo tecnológico</h3>
              <p className="mt-3 text-sm leading-7 text-white/85">
                Construir herramientas, automatizaciones, dashboards y sistemas a medida.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
