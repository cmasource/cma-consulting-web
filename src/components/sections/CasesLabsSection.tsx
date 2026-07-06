import { portfolioItems } from "@/content/portfolio";
import {
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";
import { ProjectPreviewCard } from "@/components/ui/ProjectPreviewCard";
import { siteConfig } from "@/content/site";

const projectCards = [
  {
    ...portfolioItems[0],
    description:
      "Web inmobiliaria para centralizar propiedades, consultas y gestión comercial.",
    caseHighlights: [
      {
        label: "Problema",
        text: "Publicación dispersa y baja autonomía para mostrar propiedades.",
      },
      {
        label: "Solución",
        text: "Catálogo, fichas, panel de carga, filtros y WhatsApp.",
      },
      {
        label: "Valor",
        text: "Oferta centralizada y gestión comercial más clara.",
      },
    ],
    href: "https://victor-abadie-web.vercel.app/",
    accentColor: "emerald" as const,
    previewKind: "real-estate" as const,
    previewImage: "/portfolio/victor-abadie-preview.png",
  },
  {
    ...portfolioItems[1],
    description:
      "Dashboard financiero para leer mercados, activos e información clave en un solo lugar.",
    caseHighlights: [
      {
        label: "Problema",
        text: "Información financiera dispersa y lectura manual.",
      },
      {
        label: "Solución",
        text: "Panel con activos, búsqueda, reportes y contexto de mercado.",
      },
      {
        label: "Valor",
        text: "Decisiones con datos y seguimiento más ordenado.",
      },
    ],
    href: "https://market-intelligence-dashboard-pi.vercel.app/",
    accentColor: "cyan" as const,
    previewKind: "market" as const,
    previewImage: "/portfolio/market-intelligence-preview.png",
  },
  {
    title: "Hydria ecommerce",
    type: "Ecommerce + experiencia de producto",
    status: "Caso aplicado",
    description:
      "Ecommerce para presentar producto, variantes, compra y experiencia comercial.",
    caseHighlights: [
      {
        label: "Problema",
        text: "Necesidad de vender y mostrar producto físico de forma clara.",
      },
      {
        label: "Solución",
        text: "Ficha de producto, carrito, variantes y checkout.",
      },
      {
        label: "Valor",
        text: "Canal digital preparado para conversión.",
      },
    ],
    tags: ["Ecommerce", "Producto", "Checkout", "Retail"],
    href: "https://hydria-web.vercel.app/",
    accentColor: "hydria" as const,
    previewKind: "hydria" as const,
    previewImage: "/portfolio/hydria-preview.png",
  },
  {
    title: "Diagnóstico 360",
    type: "Herramienta de evaluación",
    status: "En desarrollo",
    description:
      "Herramienta propia para leer gestión, detectar problemas y priorizar mejoras.",
    caseHighlights: [
      {
        label: "Problema",
        text: "Dificultad para saber por dónde empezar.",
      },
      {
        label: "Solución",
        text: "Score, frentes críticos y próximos pasos.",
      },
      {
        label: "Valor",
        text: "Primera lectura clara para definir acciones.",
      },
    ],
    tags: ["Diagnóstico", "Gestión", "SaaS", "Prioridades"],
    href: siteConfig.diagnosisUrl,
    accentColor: "teal" as const,
    previewKind: "diagnosis" as const,
    previewImage: "/portfolio/diagnostico-360-preview.png",
  },
];

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
            Proyectos y herramientas que muestran cómo CMA pasa de la idea a la
            implementación.
          </SectionLead>
        </div>

        <div className="mt-11 grid gap-6 xl:grid-cols-2">
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
              previewKind={item.previewKind}
              caseHighlights={item.caseHighlights}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
