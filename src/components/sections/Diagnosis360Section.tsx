import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { Badge, Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";
import { siteConfig } from "@/content/site";

const fronts = ["Gestión", "Procesos", "Costos", "Ventas", "Datos", "Herramientas"];
const findings = ["3 problemas críticos", "5 oportunidades", "Próximos pasos priorizados"];

export function Diagnosis360Section() {
  const diagnosisHref =
    siteConfig.diagnosisUrl && siteConfig.diagnosisUrl !== "#"
      ? siteConfig.diagnosisUrl
      : "#contacto";

  return (
    <section id="diagnostico-360" className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <Eyebrow>Diagnóstico 360</Eyebrow>
            <SectionTitle className="mt-4">
              Empezá con un diagnóstico claro.
            </SectionTitle>
            <SectionLead className="mt-5">
              Antes de implementar software, automatizaciones o dashboards,
              necesitamos entender cómo funciona la empresa. Diagnóstico 360
              ayuda a ordenar problemas, detectar oportunidades y priorizar
              próximos pasos.
            </SectionLead>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={diagnosisHref}>Conocer Diagnóstico 360</CTAButton>
              <CTAButton href="#contacto" variant="secondary">
                Solicitar diagnóstico
              </CTAButton>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-5 shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0A162E] dark:shadow-black/30 md:p-7">
            <div className="premium-grid absolute inset-0 opacity-50" />
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#009A9A]/12 blur-3xl dark:bg-[#22C7C7]/12" />
            <div className="relative rounded-[1.45rem] border border-[#0D1B3D]/10 bg-white p-5 dark:border-white/10 dark:bg-[#071225]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#007A7A] dark:text-[#5EEAD4]">
                    Preview de evaluación
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC]">
                    Score de gestión 360
                  </h3>
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#009A9A]/25 bg-[#009A9A]/10 text-2xl font-semibold text-[#007A7A] dark:border-[#22C7C7]/30 dark:bg-[#22C7C7]/10 dark:text-[#5EEAD4]">
                  72
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {fronts.map((front, index) => (
                  <div
                    key={front}
                    className="rounded-2xl border border-[#0D1B3D]/10 bg-[#F8FAFC] p-4 dark:border-white/10 dark:bg-[#0F1B36]"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                        {front}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#007A7A] dark:text-[#5EEAD4]">
                        {62 + index * 5}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#0D1B3D]/10 dark:bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#009A9A] dark:bg-[#22C7C7]"
                        style={{ width: `${62 + index * 5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl border border-[#0D1B3D]/10 bg-[#F8FAFC] p-4 dark:border-white/10 dark:bg-[#0F1B36]">
                  <Badge>Problemas detectados</Badge>
                  <div className="mt-4 grid gap-2">
                    {findings.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-[#007A7A] dark:text-[#5EEAD4]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-[#009A9A]/20 bg-[#009A9A]/8 p-4 dark:border-[#22C7C7]/25 dark:bg-[#22C7C7]/8">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#007A7A] dark:text-[#5EEAD4]">
                    Recomendación inicial
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[#0D1B3D] dark:text-[#F8FAFC]">
                    Ordenar procesos críticos antes de incorporar nuevas
                    herramientas.
                  </p>
                  <ArrowRight aria-hidden="true" className="mt-4 h-5 w-5 text-[#007A7A] dark:text-[#5EEAD4]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
