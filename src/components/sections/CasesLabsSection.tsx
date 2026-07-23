import { portfolioItems } from "@/content/portfolio";
import {
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";
import { ProjectPreviewCard } from "@/components/ui/ProjectPreviewCard";

const projectCards = [
  {
    ...portfolioItems[0],
    description:
      "Web inmobiliaria para centralizar propiedades, consultas y gestión comercial.",
    href: "https://victor-abadie-web.vercel.app/",
    accentColor: "emerald" as const,
    previewImage: "/portfolio/victor-abadie-preview.png",
  },
  {
    ...portfolioItems[1],
    description:
      "Dashboard financiero para leer mercados, activos e información clave en un solo lugar.",
    href: "https://market-intelligence-dashboard-pi.vercel.app/",
    accentColor: "cyan" as const,
    previewImage: "/portfolio/market-intelligence-preview.png",
  },
  {
    title: "Hydria ecommerce",
    type: "Ecommerce + experiencia de producto",
    status: "Caso aplicado",
    description:
      "Ecommerce para presentar producto, variantes, compra y experiencia comercial.",
    tags: ["Ecommerce", "Producto", "Checkout", "Retail"],
    href: "https://hydria-web.vercel.app/",
    accentColor: "hydria" as const,
    previewImage: "/portfolio/hydria-preview.png",
  },
  {
    title: "CMA Portfolio",
    type: "Herramienta financiera + propuesta de cartera",
    status: "Producto aplicado",
    description:
      "Experiencia financiera para ordenar capital, perfil de riesgo y propuesta inicial.",
    tags: ["Portfolio", "Finanzas", "Riesgo", "Argentina"],
    href: "https://cma-portfolio.vercel.app/",
    accentColor: "portfolio" as const,
    previewImage: "/portfolio/cma-portfolio-preview.png",
  },
];

export function CasesLabsSection() {
  return (
    <section id="portfolio" className="section-shell bg-[#F8FAFC] dark:bg-[#071225]">
      <div className="container-shell">
        <div className="grid gap-6 border-b border-[#0D1B3D]/12 pb-8 dark:border-white/12 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <SectionTitle>Aplicaciones reales</SectionTitle>
          </div>
          <SectionLead>
            Proyectos concretos en los que negocio, diseño y tecnología se
            convierten en una herramienta que ya se puede usar.
          </SectionLead>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          {projectCards.map((item) => (
            <ProjectPreviewCard
              key={item.title}
              title={item.title}
              subtitle={item.type}
              description={item.description}
              tags={item.tags}
              href={item.href}
              accentColor={item.accentColor}
              previewImage={item.previewImage}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
