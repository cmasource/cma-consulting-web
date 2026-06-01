import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { DiagnosticScanner } from "@/components/visuals/DiagnosticScanner";
import { siteConfig } from "@/content/site";

const checklist = [
  "Procesos",
  "Costos",
  "Ventas",
  "Datos",
  "Tareas repetitivas",
  "Indicadores",
];

export function DiagnosisCTASection() {
  return (
    <section className="section-shell editorial-band">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-[#0D1B3D]/10 bg-[#0D1B3D] text-white shadow-2xl shadow-[#0D1B3D]/25 dark:border-white/10">
          <div className="premium-grid absolute inset-0 opacity-15" />
          <div className="ambient-scan absolute inset-[-18%] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#22C7C7]/45 to-transparent" />

          <div className="relative grid gap-10 p-7 md:p-10 lg:grid-cols-[1fr_0.72fr] xl:p-14">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7FF0E6]">
                Diagnóstico inicial
              </p>
              <h2 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-6xl">
                Empezá por ordenar el diagnóstico.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/85 md:text-lg">
                Antes de implementar software, automatizaciones o dashboards,
                necesitamos entender cómo funciona la empresa. El primer paso es
                detectar dónde se pierde tiempo, dinero e información.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CTAButton
                  href="#contacto"
                  className="bg-white px-6 text-[#0D1B3D] hover:bg-[#F8FAFC]"
                >
                  Solicitar diagnóstico
                </CTAButton>
                <CTAButton
                  href={siteConfig.contact.whatsappUrl}
                  variant="secondary"
                  className="border-white/45 bg-white/10 px-6 !text-white hover:border-white hover:bg-white/15 hover:!text-white"
                >
                  Escribir por WhatsApp
                </CTAButton>
              </div>
            </div>

            <div className="relative">
              <DiagnosticScanner className="mb-4" />
              <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-5 backdrop-blur md:p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0D1B3D]">
                    <MessageCircle aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#7FF0E6]">
                    01 / Inicio
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.02em]">
                  Qué revisamos primero
                </h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {checklist.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white"
                    >
                      <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-[#7FF0E6]" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#22C7C7]/25 bg-[#22C7C7]/10 px-4 py-3">
                  <p className="text-sm font-semibold text-white">
                    Diagnóstico antes que herramientas
                  </p>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#7FF0E6]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
