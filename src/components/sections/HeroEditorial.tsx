import { CTAButton } from "@/components/ui/CTAButton";
import { Eyebrow } from "@/components/ui/Typography";
import { HeroImpactPanel } from "@/components/visuals/HeroImpactPanel";
import { siteConfig } from "@/content/site";

const valuePills = [
  "Costos claros",
  "Caja ordenada",
  "Procesos medibles",
  "Decisiones con datos",
];

export function HeroEditorial() {
  return (
    <section
      id="inicio"
      className="editorial-band relative overflow-hidden border-b border-[#0D1B3D]/10 bg-[#F8FAFC] pb-16 pt-12 dark:border-white/10 dark:bg-[#071225] lg:pb-[5.5rem] lg:pt-[4.5rem]"
    >
      <div className="premium-grid absolute inset-0 opacity-80" />
      <div className="ambient-scan scroll-ambient absolute left-1/2 top-[-22rem] h-[48rem] w-[72rem] -translate-x-1/2 rounded-full blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent dark:from-[#071225]" />

      <div className="container-shell relative">
        <div className="grid items-center gap-9 lg:min-h-[610px] lg:grid-cols-[minmax(0,0.9fr)_minmax(500px,1.1fr)] lg:gap-11 xl:gap-14">
          <div className="chapter-reveal max-w-3xl lg:pr-4">
            <Eyebrow className="mb-5 w-fit rounded-full border border-[#009A9A]/20 bg-white/80 px-4 py-2 shadow-sm backdrop-blur dark:border-[#22C7C7]/30 dark:bg-[#0F1B36]/80">
              Consultoría financiero-operativa + tecnología aplicada
            </Eyebrow>
            <h1 className="text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.032em] text-[#0D1B3D] dark:text-[#F8FAFC] sm:text-5xl lg:text-[3.75rem] xl:text-[4.65rem]">
              {siteConfig.headline}
            </h1>
            <p className="mt-5 max-w-[42rem] text-base leading-8 text-[#475467] dark:text-[#CBD5E1] md:text-lg">
              {siteConfig.subtitle}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton
                href={siteConfig.diagnosisUrl}
                className="rounded-[10px] px-6 shadow-xl shadow-[#0D1B3D]/18"
              >
                Solicitar Diagnóstico 360
              </CTAButton>
              <CTAButton
                href="#transformacion"
                variant="ghost"
                className="rounded-[10px] px-1 text-[#475467] hover:bg-transparent dark:text-[#CBD5E1]"
              >
                Ver cómo trabajamos
              </CTAButton>
            </div>

            <div className="mt-6 grid max-w-2xl gap-2 sm:grid-cols-2">
              {valuePills.map((item) => (
                <span
                  key={item}
                  className="rounded-2xl border border-[#0D1B3D]/10 bg-white/78 px-4 py-3 text-sm font-semibold text-[#0D1B3D] shadow-sm backdrop-blur dark:border-white/10 dark:bg-[#0F1B36]/75 dark:text-[#F8FAFC]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="chapter-reveal relative">
            <HeroImpactPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
