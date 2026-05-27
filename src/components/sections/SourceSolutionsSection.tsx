import { Bot, ChartNoAxesCombined, Code2, PanelsTopLeft, ShoppingCart } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { sourceSolutionGroups } from "@/content/services";

const icons = [PanelsTopLeft, ShoppingCart, Code2, ChartNoAxesCombined, Bot] as const;

export function SourceSolutionsSection() {
  return (
    <section id="soluciones" className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="cma_source"
            title="Software boutique para problemas concretos de negocio."
            description="Diseñamos herramientas digitales a medida, priorizando claridad, utilidad y adopción real. No desarrollamos tecnología aislada: construimos soluciones alineadas a procesos, datos y objetivos empresariales."
            className="mb-0"
          />
          <p className="rounded-2xl border border-[#009A9A]/20 bg-[#009A9A]/10 p-5 text-sm font-semibold leading-7 text-[#0D1B3D] dark:border-[#22C7C7]/25 dark:bg-[#22C7C7]/10 dark:text-[#F8FAFC]">
            Incorporamos inteligencia artificial cuando aporta valor concreto al proceso, no como promesa vacía.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {sourceSolutionGroups.map((group, index) => {
            const Icon = icons[index];

            return (
              <article
                key={group.title}
                className="group rounded-[1.35rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#009A9A]/35 hover:bg-white hover:shadow-xl hover:shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0F1B36] dark:hover:border-[#22C7C7]/40 dark:hover:bg-[#0A162E] dark:hover:shadow-black/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D1B3D] text-white dark:bg-[#15234A]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-black text-[#0D1B3D] dark:text-[#F8FAFC]">
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#0D1B3D]/10 bg-white px-2.5 py-1 text-xs font-semibold text-[#475467] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
