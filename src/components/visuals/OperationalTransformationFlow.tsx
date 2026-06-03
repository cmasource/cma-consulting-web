import { CheckCircle2 } from "lucide-react";

const stages = [
  {
    eyebrow: "01 - Detectar",
    title: "Gestión dispersa",
    text: "Información útil, pero repartida entre planillas, conversaciones y criterios informales.",
    items: ["Costos poco claros", "Datos aislados", "Ventas sin seguimiento", "Tareas manuales"],
  },
  {
    eyebrow: "02 - Ordenar",
    title: "Diagnóstico CMA",
    text: "Lectura consultiva para entender causas, ordenar prioridades y definir próximos pasos.",
    items: ["Detectar", "Ordenar", "Priorizar"],
    featured: true,
  },
  {
    eyebrow: "03 - Implementar",
    title: "Empresa ordenada",
    text: "Una operación más visible, con procesos, indicadores y herramientas alineadas.",
    items: ["Procesos definidos", "Indicadores visibles", "Herramientas conectadas", "Decisiones medibles"],
  },
];

export function OperationalTransformationFlow() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#071225] dark:shadow-black/30 md:p-7">
      <div className="premium-grid absolute inset-0 opacity-45" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#009A9A]/50 to-transparent dark:via-[#22C7C7]/55" />

      <div className="relative grid gap-5 lg:grid-cols-3 lg:items-stretch">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-[16%] right-[16%] top-1/2 hidden h-10 -translate-y-1/2 text-[#009A9A]/55 dark:text-[#22C7C7]/60 lg:block"
          viewBox="0 0 720 48"
          fill="none"
          preserveAspectRatio="none"
        >
          <path className="simple-flow-line" d="M8 24H712" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle className="simple-flow-dot" cx="8" cy="24" r="4" fill="currentColor" />
        </svg>

        {stages.map((stage) => (
          <article
            key={stage.title}
            className={`relative overflow-hidden rounded-[1.45rem] border p-5 ${
              stage.featured
                ? "border-[#009A9A]/30 bg-[#0D1B3D] text-white shadow-2xl shadow-[#0D1B3D]/18 dark:border-[#22C7C7]/35"
                : "border-[#0D1B3D]/10 bg-[#F8FAFC]/94 dark:border-white/10 dark:bg-[#0F1B36]/94"
            }`}
          >
            {stage.featured ? (
              <div className="absolute -right-14 -top-16 h-44 w-44 rounded-full bg-[#22C7C7]/20 blur-3xl" />
            ) : null}
            <div className="relative">
              <p
                className={`font-mono text-xs font-bold uppercase tracking-[0.22em] ${
                  stage.featured ? "text-[#7FF0E6]" : "text-[#007A7A] dark:text-[#5EEAD4]"
                }`}
              >
                {stage.eyebrow}
              </p>
              <h3
                className={`mt-4 text-2xl font-semibold tracking-[-0.03em] ${
                  stage.featured ? "text-white" : "text-[#0D1B3D] dark:text-[#F8FAFC]"
                }`}
              >
                {stage.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-7 ${
                  stage.featured ? "text-white/80" : "text-[#475467] dark:text-[#CBD5E1]"
                }`}
              >
                {stage.text}
              </p>

              <div className="mt-6 grid gap-2">
                {stage.items.map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 rounded-xl border px-3 py-2 text-sm font-semibold ${
                      stage.featured
                        ? "border-white/10 bg-white/10 text-white"
                        : "border-[#0D1B3D]/10 bg-white text-[#0D1B3D] dark:border-white/10 dark:bg-[#071225] dark:text-[#F8FAFC]"
                    }`}
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className={`h-4 w-4 shrink-0 ${
                        stage.featured ? "text-[#7FF0E6]" : "text-[#007A7A] dark:text-[#5EEAD4]"
                      }`}
                    />
                    {item}
                    {stage.title === "Empresa ordenada" ? (
                      <span
                        aria-hidden="true"
                        className="result-meter ml-auto h-1.5 rounded-full bg-[#009A9A] dark:bg-[#22C7C7]"
                        style={{ width: `${42 + index * 10}px`, animationDelay: `${index * 160}ms` }}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
