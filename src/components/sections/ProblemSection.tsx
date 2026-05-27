import { ArrowRight, CheckCircle2, CircleAlert } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const beforeItems = [
  "Datos dispersos",
  "Tareas manuales",
  "Ventas sin seguimiento",
  "Costos poco claros",
];

const afterItems = [
  "Procesos definidos",
  "Indicadores visibles",
  "Herramientas conectadas",
  "Decisiones medibles",
];

export function ProblemSection() {
  return (
    <section className="section-shell bg-[#F8FAFC] dark:bg-[#0A162E]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Punto de partida"
          title="El problema no es crecer. Es crecer sin sistema."
          description="Muchas empresas venden, producen y avanzan, pero sostienen su operación sobre planillas aisladas, procesos informales, tareas manuales y decisiones sin indicadores."
        />

        <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr]">
          <article className="rounded-2xl border border-[#0D1B3D]/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0F1B36]">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D1B3D]/10 text-[#0D1B3D] dark:bg-white/10 dark:text-[#F8FAFC]">
                <CircleAlert aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#475467] dark:text-[#CBD5E1]">
                  Antes
                </p>
                <h3 className="text-xl font-black text-[#0D1B3D] dark:text-[#F8FAFC]">
                  Operación frágil
                </h3>
              </div>
            </div>
            <div className="grid gap-3">
              {beforeItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#0D1B3D]/10 bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-[#475467] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <div className="flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#009A9A] text-white shadow-xl shadow-[#009A9A]/20 dark:bg-[#22C7C7] dark:text-[#071225]">
              <ArrowRight aria-hidden="true" className="h-6 w-6 rotate-90 lg:rotate-0" />
            </div>
          </div>

          <article className="rounded-2xl border border-[#009A9A]/30 bg-white p-6 shadow-xl shadow-[#0D1B3D]/10 dark:border-[#22C7C7]/30 dark:bg-[#0F1B36] dark:shadow-black/30">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#009A9A]/10 text-[#005F5F] dark:bg-[#22C7C7]/10 dark:text-[#5EEAD4]">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#007A7A] dark:text-[#5EEAD4]">
                  Después
                </p>
                <h3 className="text-xl font-black text-[#0D1B3D] dark:text-[#F8FAFC]">
                  Empresa con sistema
                </h3>
              </div>
            </div>
            <div className="grid gap-3">
              {afterItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#009A9A]/20 bg-[#009A9A]/10 px-4 py-3 text-sm font-bold text-[#0D1B3D] dark:border-[#22C7C7]/20 dark:bg-[#22C7C7]/10 dark:text-[#F8FAFC]"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
