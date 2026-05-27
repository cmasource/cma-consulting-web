import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioItems } from "@/content/portfolio";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Aplicaciones reales"
          title="Portfolio, casos y laboratorios"
          description="Casos aplicados, productos internos y automatizaciones que muestran el tipo de soluciones que CMA puede diagnosticar, diseñar y construir."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
