import { ArrowRight, CheckCircle2, Radar } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { Badge } from "@/components/ui/Typography";
import { siteConfig } from "@/content/site";

const fronts = ["Gestión", "Procesos", "Costos", "Ventas", "Datos"];
const findings = [
  "Problemas detectados",
  "Oportunidades priorizadas",
  "Recomendaciones accionables",
];

export function DiagnosisCTASection() {
  return (
    <section id="diagnostico-360" className="section-shell bg-[#F8FAFC] dark:bg-[#0A162E]">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#071225] dark:shadow-black/30 md:p-8 lg:p-10">
          <div className="premium-grid absolute inset-0 opacity-45" />
          <div className="hero-scan absolute inset-[-18%] blur-3xl" />

          <div className="relative grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Badge>Diagnóstico 360</Badge>
              <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.04] tracking-[-0.02em] text-[#0D1B3D] dark:text-[#F8FAFC] md:text-5xl">
                Empezá con un diagnóstico claro.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#475467] dark:text-[#CBD5E1] md:text-lg">
                Antes de implementar software, automatizaciones o dashboards,
                necesitamos entender cómo funciona la empresa. Diagnóstico 360
                ayuda a ordenar problemas, detectar oportunidades y priorizar
                próximos pasos.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href={siteConfig.diagnosisUrl} className="px-6">
                  Conocer Diagnóstico 360
                </CTAButton>
                <CTAButton href="#contacto" variant="secondary" className="px-6">
                  Solicitar diagnóstico
                </CTAButton>
              </div>
            </div>

            <div className="relative rounded-[1.55rem] border border-[#0D1B3D]/10 bg-[#0D1B3D] p-5 text-white shadow-xl shadow-[#0D1B3D]/20 dark:border-white/10 md:p-6">
              <div className="premium-grid absolute inset-0 opacity-15" />
              <div className="relative grid gap-5 md:grid-cols-[0.82fr_1.18fr] md:items-center">
                <div className="relative mx-auto flex aspect-square w-full max-w-[250px] items-center justify-center rounded-full border border-[#22C7C7]/20 bg-white/8">
                  <div className="diagnostic-radar absolute inset-4 rounded-full" />
                  <div className="diagnostic-sweep absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
                  <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-[#22C7C7]/35 bg-[#071225]/85 text-center shadow-2xl shadow-[#22C7C7]/10">
                    <Radar aria-hidden="true" className="h-6 w-6 text-[#7FF0E6]" />
                    <strong className="mt-2 text-3xl font-semibold">360</strong>
                    <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#7FF0E6]">
                      score
                    </span>
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#7FF0E6]">
                    Preview del informe
                  </p>
                  <div className="mt-5 grid gap-3">
                    {fronts.map((front, index) => (
                      <div key={front} className="rounded-[1rem] border border-white/10 bg-white/10 p-3">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-sm font-semibold">{front}</span>
                          <span className="font-mono text-xs font-bold text-[#7FF0E6]">
                            {72 + index * 4}%
                          </span>
                        </div>
                        <span className="mt-3 block h-1.5 overflow-hidden rounded-full bg-white/10">
                          <span
                            className="op-result-bar block h-full rounded-full bg-[#22C7C7]"
                            style={{ width: `${62 + index * 7}%`, animationDelay: `${index * 160}ms` }}
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mt-5 grid gap-3 md:grid-cols-3">
                {findings.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-[1rem] border border-[#22C7C7]/20 bg-[#22C7C7]/10 p-3 text-sm font-semibold">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-[#7FF0E6]" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="relative mt-5 flex items-center justify-between rounded-[1rem] border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold">
                Diagnóstico antes que herramientas
                <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#7FF0E6]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
