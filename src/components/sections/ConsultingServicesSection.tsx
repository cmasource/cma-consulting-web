import { BarChart3, GitBranch, Landmark, Workflow } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { consultingServiceGroups } from "@/content/services";

const icons = [BarChart3, GitBranch, Landmark, Workflow] as const;

export function ConsultingServicesSection() {
  return (
    <section id="servicios" className="section-shell">
      <div className="container-shell">
        <SectionHeader
          eyebrow="CMA Consulting"
          title="Servicios de consultoría empresarial"
          description="Servicios orientados a ordenar la gestión, mejorar procesos y preparar la empresa para implementar tecnología con sentido de negocio."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {consultingServiceGroups.map((group, index) => {
            const Icon = icons[index];

            return (
              <article
                key={group.title}
                className={`rounded-[1.4rem] border border-[#0D1B3D]/10 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#009A9A]/35 hover:shadow-xl hover:shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0F1B36] dark:hover:border-[#22C7C7]/40 dark:hover:shadow-black/30 ${index === 1 ? "lg:row-span-2" : ""}`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#007A7A] dark:text-[#5EEAD4]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 text-2xl font-black text-[#0D1B3D] dark:text-[#F8FAFC]">
                      {group.title}
                    </h3>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#009A9A]/10 text-[#007A7A] dark:bg-[#22C7C7]/10 dark:text-[#5EEAD4]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>
                <ul className="mt-6 grid gap-2.5 text-sm leading-6 text-[#475467] dark:text-[#CBD5E1] sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#009A9A] dark:bg-[#22C7C7]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
