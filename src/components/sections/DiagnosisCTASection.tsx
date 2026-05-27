import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/content/site";

export function DiagnosisCTASection() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0D1B3D] p-7 text-white shadow-2xl shadow-[#0D1B3D]/20 md:p-10 xl:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#22C7C7]/20" />
          <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#009A9A]/15 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7FF0E6]">
                Diagnóstico inicial
              </p>
              <h2 className="mt-4 max-w-4xl text-balance text-3xl font-black leading-tight md:text-[2.8rem]">
                Empezá por ordenar el diagnóstico.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/85">
                Antes de implementar software, automatizaciones o dashboards, necesitamos entender cómo funciona la empresa. El primer paso es detectar dónde se pierde tiempo, dinero e información.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <CTAButton
                href="#contacto"
                className="bg-white text-[#0D1B3D] hover:bg-[#F8FAFC]"
              >
                Solicitar diagnóstico
              </CTAButton>
              <CTAButton
                href={siteConfig.contact.whatsappUrl}
                variant="secondary"
                className="border-white/50 bg-transparent !text-white hover:border-white hover:!text-white"
              >
                Escribir por WhatsApp
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
