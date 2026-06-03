import { Building2, Newspaper, TrendingUp } from "lucide-react";
import { portfolioItems } from "@/content/portfolio";
import { productGroups } from "@/content/products";
import {
  Badge,
  CardBody,
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";

const caseStyles = [
  {
    icon: Building2,
    className:
      "border-emerald-700/20 bg-emerald-50 dark:border-emerald-300/20 dark:bg-emerald-950/25",
    accent: "text-emerald-700 dark:text-emerald-300",
    button: "bg-emerald-700 hover:bg-emerald-800",
    href: "https://victor-abadie-web.vercel.app/",
    cta: "Ver web",
    visual: ["Propiedades", "WhatsApp", "Panel admin"],
  },
  {
    icon: TrendingUp,
    className:
      "border-[#009A9A]/20 bg-[#009A9A]/8 dark:border-[#22C7C7]/25 dark:bg-[#22C7C7]/8",
    accent: "text-[#007A7A] dark:text-[#5EEAD4]",
    button: "bg-[#0D1B3D] hover:bg-[#009A9A]",
    href: "https://market-intelligence-dashboard-pi.vercel.app/",
    cta: "Ver dashboard",
    visual: ["Activos", "Noticias", "Indicadores"],
  },
  {
    icon: Newspaper,
    className:
      "border-sky-700/20 bg-sky-50 dark:border-sky-300/20 dark:bg-sky-950/25",
    accent: "text-sky-700 dark:text-sky-300",
    button: "bg-sky-700 hover:bg-sky-800",
    href: "",
    cta: "En desarrollo",
    visual: ["Recopilar", "Clasificar", "Reportar"],
  },
];

const compactProducts = productGroups.flatMap((group) =>
  group.products.map((product) => ({
    ...product,
    group: group.category,
  })),
);

export function CasesLabsSection() {
  return (
    <section id="portfolio" className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <Eyebrow>Aplicaciones reales</Eyebrow>
            <SectionTitle className="mt-4">Aplicaciones reales</SectionTitle>
          </div>
          <SectionLead>
            Proyectos, productos y automatizaciones que muestran la capacidad de
            diagnóstico, diseño e implementación de CMA.
          </SectionLead>
        </div>

        <div className="mt-11 grid gap-5 lg:grid-cols-3">
          {portfolioItems.map((item, index) => {
            const style = caseStyles[index];
            const Icon = style.icon;
            return (
              <article
                key={item.title}
                className={`relative overflow-hidden rounded-[1.65rem] border p-6 shadow-lg shadow-[#0D1B3D]/8 transition duration-200 hover:-translate-y-0.5 ${style.className}`}
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/45 blur-2xl dark:bg-white/5" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-[#071225] ${style.accent}`}>
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <Badge>{item.status}</Badge>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC]">
                    {item.title}
                  </h3>
                  <p className={`mt-2 font-mono text-xs font-bold uppercase tracking-[0.16em] ${style.accent}`}>
                    {item.type}
                  </p>
                  <CardBody className="mt-4">{item.description}</CardBody>

                  <div className="mt-6 rounded-2xl border border-white/55 bg-white/70 p-4 dark:border-white/10 dark:bg-[#071225]/70">
                    <div className="grid gap-2">
                      {style.visual.map((label) => (
                        <div key={label} className="flex items-center justify-between gap-3">
                          <span className="text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                            {label}
                          </span>
                          <span className={`h-1.5 w-16 rounded-full ${index === 0 ? "bg-emerald-500" : index === 1 ? "bg-[#009A9A]" : "bg-sky-500"}`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#0D1B3D]/10 bg-white px-3 py-1 text-xs font-semibold text-[#0D1B3D] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {style.href ? (
                    <a
                      href={style.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 inline-flex min-h-11 items-center justify-center rounded-[10px] px-4 text-sm font-semibold !text-white transition hover:-translate-y-0.5 ${style.button}`}
                    >
                      {style.cta}
                    </a>
                  ) : (
                    <span className="mt-6 inline-flex min-h-11 items-center justify-center rounded-[10px] border border-[#0D1B3D]/10 bg-white px-4 text-sm font-semibold text-[#475467] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]">
                      {style.cta}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div id="productos" className="mt-12 rounded-[2rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-5 shadow-xl shadow-[#0D1B3D]/8 dark:border-white/10 dark:bg-[#0A162E] md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Laboratorio CMA</Eyebrow>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0D1B3D] dark:text-[#F8FAFC]">
                Herramientas y productos en desarrollo
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
              Ideas y módulos propios en desarrollo o planificación. Ninguno se
              presenta como producto terminado.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {compactProducts.map((product) => (
              <article
                key={product.name}
                className="rounded-[1.1rem] border border-[#0D1B3D]/10 bg-white p-4 dark:border-white/10 dark:bg-[#071225]"
              >
                <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#007A7A] dark:text-[#5EEAD4]">
                  {product.status}
                </p>
                <h4 className="mt-2 text-base font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                  {product.name}
                </h4>
                <p className="mt-2 text-xs font-semibold text-[#667085] dark:text-[#CBD5E1]">
                  {product.group}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
