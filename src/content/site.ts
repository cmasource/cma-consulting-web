const publicEnv = (value: string | undefined, fallback: string) => {
  const normalized = value?.trim();

  if (!normalized || /api\.example\.com|example\.com/i.test(normalized)) {
    return fallback;
  }

  return normalized;
};

export const siteConfig = {
  name: "CMA Consulting",
  sourceName: "cma_source",
  tagline: "Consultoría empresarial, procesos y tecnología aplicada.",
  headline: "Gestión, procesos y software para operar mejor.",
  subtitle:
    "CMA Consulting ayuda a PyMEs, comercios, profesionales e industrias a ordenar su gestión, mejorar procesos y aplicar tecnología con criterio operativo.",
  strategicLine:
    "Consultoría empresarial para ordenar, implementar y medir.",
  diagnosisUrl: publicEnv(process.env.NEXT_PUBLIC_DIAGNOSTICO_360_URL, "#contacto"),
  contact: {
    email: publicEnv(
      process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      "carlosmatiasalvarez.cma@gmail.com",
    ),
    whatsappUrl: publicEnv(process.env.NEXT_PUBLIC_WHATSAPP_URL, "#contacto"),
    linkedinUrl:
      publicEnv(
        process.env.NEXT_PUBLIC_LINKEDIN_URL,
        "https://www.linkedin.com/in/cmatiasalvarez/",
      ),
    instagramUrl:
      publicEnv(
        process.env.NEXT_PUBLIC_INSTAGRAM_URL,
        "https://www.instagram.com/cmaconsultingsa/",
      ),
  },
};

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Diagnóstico 360", href: "#diagnostico-360" },
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Aplicaciones", href: "#portfolio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export const problems = [
  "Costos poco claros",
  "Procesos desordenados",
  "Falta de indicadores",
  "Ventas sin seguimiento",
  "Administración manual",
  "Datos en planillas aisladas",
  "Tareas repetitivas",
  "Sistemas poco aprovechados",
];

export const valueSteps = [
  {
    title: "Diagnosticamos",
    description:
      "Relevamos procesos, datos, herramientas y puntos críticos del negocio.",
  },
  {
    title: "Diseñamos",
    description:
      "Definimos prioridades, indicadores, flujos de trabajo y soluciones posibles.",
  },
  {
    title: "Implementamos",
    description:
      "Construimos o acompañamos la puesta en marcha de procesos y tecnología.",
  },
  {
    title: "Medimos",
    description:
      "Seguimos resultados, corregimos desvíos y dejamos capacidades instaladas.",
  },
];

export const businessUnits = [
  {
    name: "CMA Consulting",
    eyebrow: "Consultoría empresarial, procesos y gestión.",
    services: [
      "Diagnóstico empresarial",
      "Procesos y mejora continua",
      "Control de gestión",
      "Costos y rentabilidad",
      "Organización administrativa",
      "Estrategia comercial",
      "Sistemas de gestión y ERP",
      "Transformación digital",
    ],
  },
  {
    name: "cma_source",
    eyebrow: "Desarrollo tecnológico y soluciones digitales.",
    services: [
      "Webs institucionales",
      "Ecommerce",
      "Aplicaciones web",
      "SaaS",
      "Dashboards",
      "Automatizaciones",
      "Integraciones",
      "Agentes y soluciones con IA",
      "Sistemas a medida",
    ],
  },
];
