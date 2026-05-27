import { ArrowRight, BarChart3, CheckCircle2, Gauge, GitBranch, Layers3 } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/content/site";

const operatingNodes = [
  { label: "Diagnóstico", icon: Gauge, position: "left-[8%] top-[14%]" },
  { label: "Procesos", icon: GitBranch, position: "right-[10%] top-[20%]" },
  { label: "Indicadores", icon: BarChart3, position: "left-[13%] bottom-[28%]" },
  { label: "Software", icon: Layers3, position: "right-[12%] bottom-[22%]" },
];

const flowSteps = ["Diagnóstico", "Procesos", "Herramientas", "Implementación", "Medición"];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden border-b border-[#0D1B3D]/10 bg-[#F8FAFC] pb-14 pt-12 dark:border-white/10 dark:bg-[#071225] md:pb-18 lg:pt-18"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(13,27,61,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(13,27,61,0.045)_1px,transparent_1px)] bg-[size:42px_42px] dark:bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)]" />
      <div className="absolute left-1/2 top-0 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-[#009A9A]/10 blur-3xl dark:bg-[#22C7C7]/10" />

      <div className="container-shell relative grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] xl:gap-16">
        <div className="reveal">
          <p className="mb-5 inline-flex max-w-full rounded-full border border-[#009A9A]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#007A7A] shadow-sm dark:border-[#22C7C7]/30 dark:bg-[#0F1B36] dark:text-[#5EEAD4]">
            Consultoría empresarial + implementación tecnológica
          </p>
          <h1 className="max-w-4xl text-balance text-[2.55rem] font-black leading-[1.03] tracking-normal text-[#0D1B3D] dark:text-[#F8FAFC] sm:text-5xl xl:text-[4.65rem]">
            {siteConfig.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#475467] dark:text-[#CBD5E1] md:text-lg">
            {siteConfig.subtitle}
          </p>
          <p className="mt-5 max-w-xl border-l-4 border-[#009A9A] pl-5 text-sm font-semibold leading-7 text-[#0D1B3D] dark:border-[#22C7C7] dark:text-[#F8FAFC] md:text-base">
            {siteConfig.strategicLine}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#contacto">Solicitar diagnóstico</CTAButton>
            <CTAButton href="#soluciones" variant="secondary">
              Ver soluciones
            </CTAButton>
          </div>
        </div>

        <div className="reveal relative min-h-[390px] sm:min-h-[460px] lg:min-h-[560px]">
          <div className="absolute inset-0 rounded-[2rem] border border-[#0D1B3D]/10 bg-white/80 shadow-2xl shadow-[#0D1B3D]/10 backdrop-blur dark:border-white/10 dark:bg-[#0A162E]/90 dark:shadow-black/40" />
          <div className="absolute inset-5 rounded-[1.5rem] border border-dashed border-[#0D1B3D]/15 dark:border-white/15" />
          <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#009A9A]/25 bg-[#009A9A]/10 dark:border-[#22C7C7]/30 dark:bg-[#22C7C7]/10" />
          <div className="absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#009A9A]/45 to-transparent dark:via-[#22C7C7]/45" />
          <div className="absolute left-1/2 top-1/2 h-[78%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#009A9A]/45 to-transparent dark:via-[#22C7C7]/45" />

          <div className="absolute left-1/2 top-1/2 z-10 w-56 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#0D1B3D]/10 bg-[#0D1B3D] p-5 text-white shadow-2xl shadow-[#0D1B3D]/25 dark:border-white/10">
            <BrandLogo variant="mark" context="dark" />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#7FF0E6]">
              Empresa ordenada
            </p>
            <p className="mt-3 text-2xl font-black leading-tight">
              Sistema operativo de gestión
            </p>
            <div className="mt-5 grid gap-2">
              {["Roles claros", "Datos visibles", "Mejora medible"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/85">
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-[#22C7C7]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {operatingNodes.map((node) => {
            const Icon = node.icon;

            return (
              <div
                key={node.label}
                className={`absolute ${node.position} hidden w-40 rounded-xl border border-[#0D1B3D]/10 bg-white p-4 shadow-xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0F1B36] dark:shadow-black/30 sm:block`}
              >
                <Icon aria-hidden="true" className="h-5 w-5 text-[#009A9A] dark:text-[#5EEAD4]" />
                <p className="mt-3 text-sm font-black text-[#0D1B3D] dark:text-[#F8FAFC]">
                  {node.label}
                </p>
              </div>
            );
          })}

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[#0D1B3D]/10 bg-white p-4 shadow-xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0F1B36] dark:shadow-black/30 sm:p-5">
            <div className="flex flex-wrap items-center gap-2">
              {flowSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-[#009A9A]/25 bg-[#009A9A]/10 px-3 py-1 text-xs font-bold text-[#005F5F] dark:border-[#22C7C7]/30 dark:bg-[#22C7C7]/10 dark:text-[#5EEAD4]">
                    {step}
                  </span>
                  {index < flowSteps.length - 1 ? (
                    <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#B0B6BD]" />
                  ) : null}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-[#475467] dark:text-[#CBD5E1]">
              cma_source convierte el mapa operativo en software, tableros e integraciones útiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
