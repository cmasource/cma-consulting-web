import { ArrowDownRight } from "lucide-react";
import { HeroSignalField } from "@/components/visuals/HeroSignalField";
import { siteConfig } from "@/content/site";

export function HeroEditorial() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[calc(100svh-68px)] overflow-hidden bg-[#071225] text-white"
    >
      <HeroSignalField />

      <div className="container-shell relative z-10 flex w-full items-center py-16 sm:py-20 lg:py-24">
        <div className="max-w-[58rem]">
          <p className="hero-reveal font-mono text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#7FF0E6] sm:text-xs">
            Consultoría financiero-operativa para pymes
          </p>
          <h1 className="hero-reveal hero-reveal-delay mt-6 max-w-[54rem] font-display text-[3.5rem] font-medium leading-[0.96] tracking-[-0.025em] text-white sm:text-[4.8rem] lg:text-[6.5rem]">
            Ordená tu empresa. Decidí con claridad.
          </h1>
          <p className="hero-reveal hero-reveal-delay-2 mt-7 max-w-[39rem] text-base leading-8 text-white/72 sm:text-lg">
            Finanzas, procesos y tecnología aplicada para convertir información
            dispersa en decisiones concretas.
          </p>

          <div className="hero-reveal hero-reveal-delay-3 mt-9">
            <a
              href={siteConfig.diagnosisUrl}
              className="group inline-flex min-h-12 items-center gap-3 rounded-sm bg-[#5EEAD4] px-6 text-sm font-bold !text-[#071225] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5EEAD4]"
            >
              Empezar con Diagnóstico 360
              <ArrowDownRight
                aria-hidden="true"
                className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#transformacion"
        className="absolute bottom-7 right-[max(20px,calc((100vw-1440px)/2))] z-10 hidden items-center gap-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/55 transition hover:text-white md:flex"
      >
        Ver transformación
        <span className="flex h-9 w-9 items-center justify-center border border-white/18">
          <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
        </span>
      </a>
    </section>
  );
}
