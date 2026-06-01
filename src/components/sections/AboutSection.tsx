import { BrandLogo } from "@/components/ui/BrandLogo";
import { Badge, Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";

const profileItems = [
  "Licenciado en Administración de Empresas",
  "Analista IT",
  "Consultoría empresarial + tecnología aplicada",
  "Gestión, procesos, datos y soluciones digitales",
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-5 shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0A162E] dark:shadow-black/30 md:p-8">
          <div className="premium-grid absolute inset-0 opacity-55" />
          <div className="ambient-scan absolute inset-[-22%] blur-3xl" />
          <div className="relative rounded-[1.5rem] border border-[#0D1B3D]/10 bg-white p-6 dark:border-white/10 dark:bg-[#071225]">
            <div className="flex items-start justify-between gap-5">
              <Badge>Perfil profesional</Badge>
              <BrandLogo variant="mark" context="auto" className="scale-90" />
            </div>

            <div className="mt-10">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#007A7A] dark:text-[#5EEAD4]">
                Matías Alvarez
              </p>
              <h3 className="mt-4 max-w-md text-4xl font-semibold tracking-[-0.04em] text-[#0D1B3D] dark:text-[#F8FAFC]">
                Consultoría para ordenar la gestión y ejecutar mejoras reales.
              </h3>
            </div>

            <div className="mt-8 grid gap-3">
              {profileItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#0D1B3D]/10 bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-[#0D1B3D] dark:border-white/10 dark:bg-[#0F1B36] dark:text-[#F8FAFC]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Eyebrow>Sobre mí</Eyebrow>
          <SectionTitle className="mt-4">
            Consultoría con visión de negocio y tecnología
          </SectionTitle>
          <SectionLead className="mt-5">
            Soy Matías Alvarez, Licenciado en Administración de Empresas y
            Analista IT. Mi perfil combina gestión empresarial, tecnología,
            análisis de datos, procesos, finanzas y desarrollo de soluciones
            digitales.
          </SectionLead>
          <div className="mt-7 grid gap-5 text-base leading-8 text-[#475467] dark:text-[#CBD5E1]">
            <p>
              CMA Consulting nace para acompañar a PyMEs, comercios,
              profesionales e industrias que necesitan ordenar su gestión,
              mejorar procesos y aplicar tecnología de forma práctica, medible y
              alineada al negocio.
            </p>
            <p>
              Desde cma_source, la unidad tecnológica de CMA, desarrollamos
              herramientas digitales, software, automatizaciones y soluciones a
              medida para convertir el diagnóstico en implementación real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
