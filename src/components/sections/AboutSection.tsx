import { BrandLogo } from "@/components/ui/BrandLogo";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.5rem] border border-[#0D1B3D]/10 bg-[#0D1B3D] p-8 text-white shadow-2xl shadow-[#0D1B3D]/15">
          <div className="flex justify-center">
            <BrandLogo variant="mark" context="dark" />
          </div>
          <div className="mt-8 grid gap-4">
            <div className="rounded-lg border border-white/10 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white">
                Perfil
              </p>
              <p className="mt-3 text-xl font-bold">
                Negocio, procesos, datos y tecnología.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 p-5">
              <p className="text-sm leading-7 text-white/85">
                Un enfoque práctico para ordenar, decidir e implementar sin
                convertir la transformación digital en una promesa abstracta.
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="Sobre mí"
            title="Consultoría con visión de negocio y tecnología"
            description="Soy Matías Alvarez, Licenciado en Administración de Empresas y Analista IT. Mi perfil combina gestión empresarial, tecnología, análisis de datos, procesos, finanzas y desarrollo de soluciones digitales."
          />
          <div className="grid gap-5 text-base leading-8 text-[#475467] dark:text-[#CBD5E1]">
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
