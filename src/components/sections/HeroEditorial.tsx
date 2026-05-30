import { CTAButton } from "@/components/ui/CTAButton";
import { Eyebrow } from "@/components/ui/Typography";
import { CmaSystemFrame } from "@/components/visuals/CmaSystemFrame";
import { siteConfig } from "@/content/site";

export function HeroEditorial() {
  return (
    <section
      id="inicio"
      className="editorial-band relative overflow-hidden border-b border-[#0D1B3D]/10 bg-[#F8FAFC] pb-16 pt-12 dark:border-white/10 dark:bg-[#071225] lg:pb-24 lg:pt-20"
    >
      <div className="premium-grid absolute inset-0 opacity-80" />
      <div className="ambient-scan absolute left-1/2 top-[-22rem] h-[48rem] w-[72rem] -translate-x-1/2 rounded-full blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent dark:from-[#071225]" />

      <div className="container-shell relative">
        <div className="grid min-h-[calc(100svh-88px)] items-center gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(520px,1.22fr)] lg:gap-14">
          <div className="chapter-reveal max-w-3xl">
            <Eyebrow className="mb-6 w-fit rounded-full border border-[#009A9A]/20 bg-white/80 px-4 py-2 shadow-sm backdrop-blur dark:border-[#22C7C7]/30 dark:bg-[#0F1B36]/80">
              Consultoría empresarial + implementación tecnológica
            </Eyebrow>
            <h1 className="text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#0D1B3D] dark:text-[#F8FAFC] sm:text-5xl lg:text-7xl">
              {siteConfig.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#475467] dark:text-[#CBD5E1] md:text-lg">
              {siteConfig.subtitle}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#contacto" className="rounded-[10px] px-6">
                Solicitar diagnóstico
              </CTAButton>
              <CTAButton href="#soluciones" variant="secondary" className="rounded-[10px] px-6">
                Ver soluciones
              </CTAButton>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[#0D1B3D]/10 bg-[#0D1B3D]/10 dark:border-white/10 dark:bg-white/10">
              {["Diagnóstico", "Procesos", "Medición"].map((item) => (
                <div
                  key={item}
                  className="bg-white/75 px-3 py-4 text-center backdrop-blur dark:bg-[#0F1B36]/75"
                >
                  <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#007A7A] dark:text-[#5EEAD4]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="chapter-reveal relative lg:-mr-10 xl:-mr-14">
            <div className="absolute -inset-6 rounded-[2.4rem] border border-[#0D1B3D]/5 bg-white/20 blur-2xl dark:border-white/5 dark:bg-white/5" />
            <CmaSystemFrame />
          </div>
        </div>
      </div>
    </section>
  );
}
