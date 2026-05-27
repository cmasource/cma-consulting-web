import {
  Bot,
  ChartNoAxesCombined,
  Code2,
  PanelsTopLeft,
  ShoppingCart,
} from "lucide-react";
import {
  Badge,
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";
import { sourceSolutionGroups } from "@/content/services";

const icons = [PanelsTopLeft, ShoppingCart, Code2, ChartNoAxesCombined, Bot] as const;

export function SoftwareBoutiqueSection() {
  return (
    <section id="soluciones" className="section-shell bg-[#F8FAFC] dark:bg-[#0A162E]">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Eyebrow>cma_source</Eyebrow>
            <SectionTitle className="mt-4">
              Software boutique para problemas concretos de negocio.
            </SectionTitle>
            <SectionLead className="mt-5">
              Diseñamos herramientas digitales a medida, priorizando claridad,
              utilidad y adopción real. No desarrollamos tecnología aislada:
              construimos soluciones alineadas a procesos, datos y objetivos
              empresariales.
            </SectionLead>
            <p className="mt-6 rounded-2xl border border-[#009A9A]/20 bg-white p-5 text-sm font-semibold leading-7 text-[#0D1B3D] dark:border-[#22C7C7]/25 dark:bg-[#0F1B36] dark:text-[#F8FAFC]">
              Incorporamos inteligencia artificial cuando aporta valor concreto al
              proceso, no como promesa vacía.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#0D1B3D]/10 bg-white p-4 shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#071225] dark:shadow-black/30 md:p-6">
            <div className="grid gap-4 lg:grid-cols-[0.34fr_0.66fr]">
              <div className="grid gap-2">
                {sourceSolutionGroups.map((group, index) => {
                  const Icon = icons[index];
                  return (
                    <div
                      key={group.title}
                      className="flex items-center gap-3 rounded-xl border border-[#0D1B3D]/10 bg-[#F8FAFC] px-3 py-3 dark:border-white/10 dark:bg-[#0F1B36]"
                    >
                      <Icon aria-hidden="true" className="h-4 w-4 text-[#007A7A] dark:text-[#5EEAD4]" />
                      <span className="text-sm font-bold text-[#0D1B3D] dark:text-[#F8FAFC]">
                        {group.title}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[#0D1B3D]/10 bg-[#0D1B3D] p-6 text-white dark:border-white/10">
                <div className="premium-grid absolute inset-0 opacity-20" />
                <div className="relative">
                  <Badge className="border-white/15 bg-white/10 text-white">
                    Preview operativo
                  </Badge>
                  <h3 className="mt-6 text-3xl font-black">
                    Herramientas que encajan en el proceso.
                  </h3>
                  <div className="mt-8 grid gap-3">
                    {sourceSolutionGroups.slice(0, 4).map((group, index) => (
                      <div key={group.title} className="rounded-xl border border-white/10 bg-white/10 p-4">
                        <p className="font-mono text-xs font-bold text-[#7FF0E6]">
                          0{index + 1}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          {group.items.slice(0, 3).join(" · ")}
                        </p>
                      </div>
                    ))}
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
