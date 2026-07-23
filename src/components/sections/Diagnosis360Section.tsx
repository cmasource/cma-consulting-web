import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, SectionTitle } from "@/components/ui/Typography";
import { siteConfig } from "@/content/site";

export function Diagnosis360Section() {
  return (
    <section id="diagnostico-360" className="bg-[#E8F2F1] py-20 text-[#0D1B3D] dark:bg-[#0A162E] dark:text-white lg:py-24">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center lg:gap-14">
          <div>
            <Eyebrow>El punto de partida</Eyebrow>
            <SectionTitle className="mt-5 max-w-[34rem]">
              Empezá con una lectura clara del negocio.
            </SectionTitle>
            <p className="mt-6 max-w-[35rem] text-base leading-8 text-[#475467] dark:text-[#CBD5E1]">
              Diagnóstico 360 ordena la primera conversación: muestra dónde
              están los problemas y qué conviene priorizar antes de invertir
              tiempo, dinero o tecnología.
            </p>

            <a
              href={siteConfig.diagnosisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-sm bg-[#0D1B3D] px-6 text-sm font-bold !text-white transition hover:bg-[#007A7A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007A7A] dark:bg-[#5EEAD4] dark:!text-[#071225] dark:hover:bg-white"
            >
              Ir a Diagnóstico 360
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="relative lg:pl-4">
            <div className="absolute -bottom-5 -left-1 top-8 w-px bg-[#0D1B3D]/18 dark:bg-white/16" />
            <a
              href={siteConfig.diagnosisUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir CMA Diagnóstico 360"
              className="group block overflow-hidden border border-[#0D1B3D]/12 bg-white shadow-[0_28px_70px_rgba(13,27,61,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[#007A7A]/40 hover:shadow-[0_34px_82px_rgba(13,27,61,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007A7A] dark:border-white/12 dark:bg-[#071225] dark:hover:border-[#5EEAD4]/40"
            >
              <div className="flex h-11 items-center gap-3 border-b border-[#0D1B3D]/10 bg-[#F8FAFC] px-4 dark:border-white/10 dark:bg-[#0F1B36]">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E45F5F]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D8AA3B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3BAA7A]" />
                </div>
                <div className="min-w-0 flex-1 border border-[#0D1B3D]/8 bg-white px-3 py-1.5 dark:border-white/8 dark:bg-white/5">
                  <p className="truncate font-mono text-[0.62rem] font-semibold text-[#667085] dark:text-[#CBD5E1]">
                    cma-diagnostico-360.vercel.app
                  </p>
                </div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden bg-[#071225]">
                <Image
                  src="/portfolio/diagnostico-360-landing-preview.png"
                  alt="Vista previa de CMA Diagnóstico 360"
                  fill
                  sizes="(max-width: 1024px) 92vw, 780px"
                  className="object-cover object-top transition duration-700 group-hover:scale-[1.012]"
                />
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-sm bg-[#5EEAD4] px-3 py-2 text-xs font-bold text-[#071225] opacity-0 shadow-lg shadow-[#071225]/20 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  Abrir preview
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
