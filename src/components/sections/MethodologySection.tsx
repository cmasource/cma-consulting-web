import { SectionHeader } from "@/components/ui/SectionHeader";
import { methodologySteps } from "@/content/methodology";

export function MethodologySection() {
  return (
    <section id="metodologia" className="section-shell">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Método de trabajo"
          title="De la idea a la implementación"
          description="Una secuencia clara para reducir incertidumbre, priorizar y convertir decisiones en cambios operativos."
        />
        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#009A9A]/10 via-[#009A9A]/40 to-[#009A9A]/10 dark:via-[#22C7C7]/40 md:block" />
          <div className="grid gap-5">
            {methodologySteps.map((step, index) => (
              <article
                key={step.title}
                className="relative grid gap-4 rounded-[1.35rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0F1B36] md:ml-14 md:grid-cols-[0.2fr_0.8fr] md:p-6"
              >
                <div className="absolute -left-[3.25rem] top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-[#009A9A]/25 bg-white text-sm font-black text-[#007A7A] shadow-lg dark:border-[#22C7C7]/30 dark:bg-[#071225] dark:text-[#5EEAD4] md:flex">
                  {index + 1}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#007A7A] dark:text-[#5EEAD4]">
                    Paso {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-black text-[#0D1B3D] dark:text-[#F8FAFC]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
