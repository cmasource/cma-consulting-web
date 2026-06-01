import { ArrowUpRight } from "lucide-react";
import { portfolioItems } from "@/content/portfolio";
import {
  Badge,
  CardBody,
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";

export function CasesLabsSection() {
  const [featured, ...secondary] = portfolioItems;

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

        <div className="mt-11 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-[#0D1B3D] p-6 text-white shadow-2xl shadow-[#0D1B3D]/20 dark:border-white/10 md:p-8">
            <div className="premium-grid absolute inset-0 opacity-15" />
            <div className="ambient-scan absolute inset-[-18%] blur-3xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="border-white/15 bg-white/10 text-white">
                    Caso destacado
                  </Badge>
                  <span className="rounded-full border border-[#22C7C7]/25 bg-[#22C7C7]/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#7FF0E6]">
                    {featured.status}
                  </span>
                </div>
                <h3 className="mt-8 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                  {featured.title}
                </h3>
                <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#7FF0E6]">
                  {featured.type}
                </p>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/82">
                  {featured.description}
                </p>
              </div>

              <div className="mt-10">
                <div className="grid gap-3 sm:grid-cols-3">
                  {featured.tags.slice(0, 3).map((tag) => (
                    <div
                      key={tag}
                      className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                    >
                      <p className="text-sm font-semibold text-white">{tag}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
                  Sin enlace público por ahora
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-5">
            {secondary.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[1.65rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-6 shadow-lg shadow-[#0D1B3D]/8 transition duration-200 hover:-translate-y-0.5 hover:border-[#009A9A]/35 hover:bg-white dark:border-white/10 dark:bg-[#0F1B36] dark:hover:border-[#22C7C7]/40"
              >
                <Badge>{item.status}</Badge>
                <h3 className="relative mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC]">
                  {item.title}
                </h3>
                <p className="relative mt-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#007A7A] dark:text-[#5EEAD4]">
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
      </div>
    </section>
  );
}
