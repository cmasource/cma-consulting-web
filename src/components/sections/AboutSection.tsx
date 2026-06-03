import Image from "next/image";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Badge, Eyebrow, SectionTitle } from "@/components/ui/Typography";

const profileItems = [
  "Licenciado en Administración de Empresas",
  "Analista IT",
  "Consultor empresarial",
  "Gestión, datos y tecnología aplicada",
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-5 shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0A162E] dark:shadow-black/30 md:p-8">
          <div className="premium-grid absolute inset-0 opacity-55" />
          <div className="relative grid gap-5">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#0D1B3D]/10 bg-[#E8ECE6] dark:border-white/10 dark:bg-[#071225]">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px]">
                <Image
                  src="/profile/matias-alvarez.jpg"
                  alt="Matías Alvarez"
                  fill
                  sizes="(max-width: 1024px) 86vw, 420px"
                  className="object-contain object-center"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D1B3D]/85 to-transparent p-5">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#7FF0E6]">
                  Matías Alvarez
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#0D1B3D]/10 bg-white p-5 dark:border-white/10 dark:bg-[#071225]">
              <div className="flex items-start justify-between gap-5">
                <Badge>Perfil profesional</Badge>
                <BrandLogo variant="mark" context="auto" className="scale-90" />
              </div>
              <div className="mt-6 grid gap-3">
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
        </div>

        <div>
          <Eyebrow>Sobre mí</Eyebrow>
          <SectionTitle className="mt-4">
            Consultoría con visión de negocio y tecnología
          </SectionTitle>
          <div className="mt-6 grid max-w-3xl gap-5 text-base leading-8 text-[#475467] dark:text-[#CBD5E1]">
            <p>
              Soy Matías Alvarez, Licenciado en Administración de Empresas y
              Analista IT. Mi perfil combina gestión empresarial, análisis de
              datos, procesos, finanzas, tecnología y desarrollo de soluciones
              digitales aplicadas al negocio.
            </p>
            <p>
              CMA Consulting nace para acompañar a PyMEs, comercios,
              profesionales e industrias que necesitan ordenar su gestión,
              mejorar procesos y aplicar tecnología de forma práctica, medible y
              alineada al negocio.
            </p>
            <p>
              El enfoque es simple: entender primero cómo funciona la empresa,
              detectar dónde se pierde tiempo, dinero o información, y convertir
              ese diagnóstico en mejoras concretas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
