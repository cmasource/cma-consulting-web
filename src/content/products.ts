export type ProductStatus =
  | "En desarrollo"
  | "En planificación"
  | "Próximamente"
  | "Laboratorio";

export type Product = {
  name: string;
  status: ProductStatus;
  category: string;
  description: string;
  href?: string;
};

export const productGroups: Array<{ category: string; products: Product[] }> = [
  {
    category: "Diagnóstico y consultoría",
    products: [
      {
        name: "CMA Diagnóstico 360",
        status: "En desarrollo",
        category: "Diagnóstico y consultoría",
        description:
          "Evalúa el estado de gestión de una empresa, detecta problemas críticos y prioriza oportunidades de mejora.",
      },
      {
        name: "CMA Business Advisor AI",
        status: "Próximamente",
        category: "Diagnóstico y consultoría",
        description:
          "Asistente empresarial para ordenar problemas de gestión y sugerir próximos pasos de mejora.",
      },
    ],
  },
  {
    category: "Operación y ventas",
    products: [
      {
        name: "CMA Commerce Kit",
        status: "En planificación",
        category: "Operación y ventas",
        description:
          "Demo ecommerce para comercios y PyMEs con catálogo, carrito, pagos, pedidos y panel de gestión.",
      },
      {
        name: "CMA SalesFlow",
        status: "Próximamente",
        category: "Operación y ventas",
        description:
          "Mini CRM para seguimiento comercial, leads, contactos, oportunidades y próximas acciones.",
      },
      {
        name: "CMA Costing Lab",
        status: "Próximamente",
        category: "Operación y ventas",
        description:
          "Herramienta para calcular costos, precios, márgenes y rentabilidad de productos.",
      },
    ],
  },
  {
    category: "Datos y automatización",
    products: [
      {
        name: "CMA Market Intelligence",
        status: "En desarrollo",
        category: "Datos y automatización",
        description:
          "Dashboard informativo para seguimiento de mercados, activos, noticias e indicadores.",
      },
      {
        name: "CMA Admin Agent",
        status: "Próximamente",
        category: "Datos y automatización",
        description:
          "Agente interno para asistir tareas administrativas, consultas frecuentes y reportes operativos.",
      },
      {
        name: "CMA DataBoard",
        status: "Próximamente",
        category: "Datos y automatización",
        description:
          "Tablero modular para consolidar indicadores operativos, comerciales y administrativos.",
      },
    ],
  },
  {
    category: "Laboratorio financiero",
    products: [
      {
        name: "cmaQuantBot",
        status: "Laboratorio",
        category: "Laboratorio financiero",
        description:
          "Laboratorio de análisis cuantitativo, backtesting y evaluación de estrategias financieras.",
      },
    ],
  },
];
