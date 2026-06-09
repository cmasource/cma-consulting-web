import { CTAButton } from "@/components/ui/CTAButton";
import { Eyebrow } from "@/components/ui/Typography";
import { ConsultingCommandPanel } from "@/components/visuals/ConsultingCommandPanel";
import { siteConfig } from "@/content/site";

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
        <div className="grid items-center gap-11 lg:min-h-[760px] lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] lg:gap-12 xl:gap-16">
          <div className="chapter-reveal max-w-3xl lg:pr-4">
            <Eyebrow className="mb-5 w-fit rounded-full border border-[#009A9A]/20 bg-white/80 px-4 py-2 shadow-sm backdrop-blur dark:border-[#22C7C7]/30 dark:bg-[#0F1B36]/80">
              Consultoría empresarial + implementación digital
            </Eyebrow>
            <h1 className="text-balance text-4xl font-semibold leading-[1.01] tracking-[-0.032em] text-[#0D1B3D] dark:text-[#F8FAFC] sm:text-5xl lg:text-[4.35rem] xl:text-7xl">
              {siteConfig.headline}
            </h1>
            <p className="mt-6 max-w-[42rem] text-base leading-8 text-[#475467] dark:text-[#CBD5E1] md:text-lg">
              {siteConfig.subtitle}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton
                href="#contacto"
                className="rounded-[10px] px-6 shadow-xl shadow-[#0D1B3D]/18"
              >
                Solicitar diagnóstico
              </CTAButton>
              <CTAButton
                href="#soluciones"
                variant="ghost"
                className="rounded-[10px] px-1 text-[#475467] hover:bg-transparent dark:text-[#CBD5E1]"
              >
                Ver soluciones
              </CTAButton>
            </div>

            <div className="mt-9 flex max-w-2xl flex-wrap gap-2">
              {["PyMEs", "Comercios", "Profesionales", "Industrias"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#0D1B3D]/10 bg-white/75 px-4 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#007A7A] shadow-sm backdrop-blur dark:border-white/10 dark:bg-[#0F1B36]/75 dark:text-[#5EEAD4]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="chapter-reveal relative">
            <ConsultingCommandPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
