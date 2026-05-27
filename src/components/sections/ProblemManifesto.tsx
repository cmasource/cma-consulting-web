import { ArrowRight } from "lucide-react";
import {
  Badge,
  CardTitle,
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";

const before = [
  "Datos dispersos",
  "Costos poco claros",
  "Tareas manuales",
  "Ventas sin seguimiento",
];

const after = [
  "Procesos definidos",
  "Indicadores visibles",
  "Herramientas conectadas",
  "Decisiones medibles",
];

export function ProblemManifesto() {
  return (
    <section className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Eyebrow>Manifiesto operativo</Eyebrow>
            <SectionTitle className="mt-4">
              El problema no es crecer. Es crecer sin sistema.
            </SectionTitle>
          </div>
          <SectionLead>
            Muchas empresas venden, producen y avanzan, pero sostienen su
            operación sobre planillas aisladas, procesos informales, tareas
            manuales y decisiones sin indicadores.
          </SectionLead>
        </div>

        <div className="mt-10 grid gap-5 rounded-[2rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-5 shadow-xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0A162E] dark:shadow-black/30 lg:grid-cols-[1fr_auto_1fr] lg:p-7">
          <article className="rounded-[1.5rem] border border-[#0D1B3D]/10 bg-white p-6 dark:border-white/10 dark:bg-[#0F1B36]">
            <Badge>Antes</Badge>
            <CardTitle className="mt-5">Operación dispersa</CardTitle>
            <div className="mt-6 grid gap-3">
              {before.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#0D1B3D]/10 bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-[#475467] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]"
                >
                  <span className="font-mono text-xs text-[#475467]">
                    0{index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </article>

          <div className="flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#009A9A]/25 bg-white text-[#007A7A] shadow-lg dark:border-[#22C7C7]/30 dark:bg-[#0F1B36] dark:text-[#5EEAD4]">
              <ArrowRight aria-hidden="true" className="h-6 w-6 rotate-90 lg:rotate-0" />
            </div>
          </div>

          <article className="rounded-[1.5rem] border border-[#009A9A]/25 bg-[#0D1B3D] p-6 text-white shadow-2xl shadow-[#0D1B3D]/20 dark:border-[#22C7C7]/30 dark:bg-[#0F1B36]">
            <Badge className="border-[#22C7C7]/25 bg-white text-[#005F5F] dark:bg-[#22C7C7]/10 dark:text-[#5EEAD4]">
              Después
            </Badge>
            <h3 className="mt-5 text-xl font-black leading-tight">
              Empresa con sistema
            </h3>
            <div className="mt-6 grid gap-3">
              {after.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white"
                >
                  <span className="font-mono text-xs text-[#7FF0E6]">
                    0{index + 1}
                  </span>
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
