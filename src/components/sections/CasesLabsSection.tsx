import { portfolioItems } from "@/content/portfolio";
import {
  Badge,
  CardBody,
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";

export function CasesLabsSection() {
  return (
    <section id="portfolio" className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:items-end">
          <div>
            <Eyebrow>Aplicaciones reales</Eyebrow>
            <SectionTitle className="mt-4">Casos y laboratorios</SectionTitle>
          </div>
          <SectionLead>
            Casos aplicados, productos internos y automatizaciones que muestran
            el tipo de soluciones que CMA puede diagnosticar, diseñar y construir.
          </SectionLead>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-[1.5rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#009A9A]/35 hover:bg-white hover:shadow-xl hover:shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0F1B36] dark:hover:border-[#22C7C7]/40 dark:hover:bg-[#0A162E]"
            >
              <div
                aria-hidden="true"
                className="absolute right-5 top-5 font-mono text-5xl font-black text-[#667085] dark:text-[#CBD5E1]"
              >
                0{index + 1}
              </div>
              <Badge className="relative">{item.status}</Badge>
              <h3 className="relative mt-5 text-2xl font-black text-[#0D1B3D] dark:text-[#F8FAFC]">
                {item.title}
              </h3>
              <p className="relative mt-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#005F5F] dark:text-[#5EEAD4]">
                {item.type}
              </p>
              <CardBody className="relative mt-4">{item.description}</CardBody>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#0D1B3D]/10 bg-white px-3 py-1 text-xs font-semibold text-[#0D1B3D] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
