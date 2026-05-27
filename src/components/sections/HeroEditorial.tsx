import { CTAButton } from "@/components/ui/CTAButton";
import { Eyebrow } from "@/components/ui/Typography";
import { CmaSystemFrame } from "@/components/visuals/CmaSystemFrame";
import { siteConfig } from "@/content/site";

export function HeroEditorial() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[#0D1B3D]/10 bg-[#F8FAFC] pb-16 pt-14 dark:border-white/10 dark:bg-[#071225] lg:pb-24 lg:pt-20"
    >
      <div className="premium-grid absolute inset-0 opacity-80" />
      <div className="absolute left-1/2 top-0 h-[34rem] w-[70rem] -translate-x-1/2 rounded-full bg-[#009A9A]/10 blur-3xl dark:bg-[#22C7C7]/10" />
      <div className="container-shell relative grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] xl:gap-16">
        <div className="chapter-reveal">
          <Eyebrow className="mb-5 rounded-full border border-[#009A9A]/20 bg-white px-4 py-2 dark:border-[#22C7C7]/30 dark:bg-[#0F1B36]">
            Consultoría empresarial + implementación tecnológica
          </Eyebrow>
          <h1 className="max-w-5xl text-balance text-4xl font-black leading-[0.98] tracking-normal text-[#0D1B3D] dark:text-[#F8FAFC] sm:text-5xl lg:text-7xl">
            {siteConfig.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#475467] dark:text-[#CBD5E1] md:text-lg">
            {siteConfig.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#contacto">Solicitar diagnóstico</CTAButton>
            <CTAButton href="#soluciones" variant="secondary">
              Ver soluciones
            </CTAButton>
          </div>
        </div>
        <div className="chapter-reveal">
          <CmaSystemFrame />
        </div>
      </div>
    </section>
  );
}
