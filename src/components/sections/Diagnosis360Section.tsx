import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";
import { siteConfig } from "@/content/site";

const outcomes = [
  "Rentabilidad y caja",
  "Costos y procesos",
  "Prioridades claras",
];

export function Diagnosis360Section() {
  const diagnosisHref =
    siteConfig.diagnosisUrl && siteConfig.diagnosisUrl !== "#"
      ? siteConfig.diagnosisUrl
      : "#contacto";

  return (
    <section id="diagnostico-360" className="section-shell bg-[#08152B] text-white">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[radial-gradient(circle_at_78%_18%,rgba(127,240,230,0.2),transparent_32%),linear-gradient(135deg,#071225,#0D1B3D_58%,#073A4A)] p-5 shadow-[0_36px_120px_rgba(7,18,37,0.32)] md:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:52px_52px] opacity-50"
          />
          <div className="relative grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <div>
            <Eyebrow className="text-[#7FF0E6]">Diagnóstico 360</Eyebrow>
            <SectionTitle className="mt-4 text-white">
              Empezá con un diagnóstico claro.
            </SectionTitle>
            <SectionLead className="mt-5 max-w-2xl text-white/76">
              Una lectura inicial para detectar problemas de rentabilidad, caja,
              costos, procesos, datos y control de gestión antes de invertir
              tiempo o tecnología. Es el primer paso recomendado para ordenar
              qué conviene resolver.
            </SectionLead>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10"
                >
                  {outcome}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={diagnosisHref}>Solicitar Diagnóstico 360</CTAButton>
              <CTAButton
                href={diagnosisHref}
                variant="secondary"
                className="border-white/15 bg-white/10 text-white hover:bg-white hover:text-[#0D1B3D]"
              >
                Ver cómo funciona
              </CTAButton>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/[0.08] p-4 shadow-2xl shadow-black/20 backdrop-blur md:p-5">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#7FF0E6]/18 blur-3xl" />
            <div className="relative rounded-[1.45rem] border border-white/12 bg-[#071225]/88 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#7FF0E6]">
                    Preview de evaluación
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                    Lectura económico-operativa
                  </h3>
                </div>
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#7FF0E6]/30 bg-[#7FF0E6]/10 text-2xl font-semibold text-[#DFFCF8]">
                  <svg aria-hidden="true" className="absolute inset-2 h-20 w-20 -rotate-90" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="34" stroke="rgba(255,255,255,0.12)" strokeWidth="7" fill="none" />
                    <circle cx="40" cy="40" r="34" stroke="#7FF0E6" strokeWidth="7" fill="none" strokeDasharray="214" strokeDashoffset="60" strokeLinecap="round" />
                  </svg>
                  <span className="relative">72</span>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["Caja", "72%"],
                  ["Costos", "58%"],
                  ["Procesos", "64%"],
                  ["Datos", "49%"],
                ].map(([label, value], index) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-white">
                        {label}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#7FF0E6]">
                        {value}
                      </span>
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#7FF0E6]"
                        style={{ width: `${52 + index * 9}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#7FF0E6]">
                    Problemas detectados
                  </p>
                  <div className="mt-4 grid gap-2">
                    {["Rentabilidad incierta", "Caja sin seguimiento", "Costos poco claros"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm font-semibold text-white/86">
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-[#7FF0E6]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-[#7FF0E6]/20 bg-[#7FF0E6]/10 p-4">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#7FF0E6]">
                    Próximos pasos
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-7 text-white">
                    Priorizar qué ordenar, medir, automatizar o implementar
                    primero según impacto en el negocio.
                  </p>
                  <ArrowRight aria-hidden="true" className="mt-4 h-5 w-5 text-[#7FF0E6]" />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
