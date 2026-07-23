import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Eyebrow, SectionTitle } from "@/components/ui/Typography";
import { siteConfig } from "@/content/site";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section-shell bg-[#F7FAFC] dark:bg-[#0A162E]">
      <div className="container-shell">
        <div className="grid gap-8 rounded-[2rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-xl shadow-[#0D1B3D]/8 dark:border-white/10 dark:bg-[#071225] md:p-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <LinkedInProfileCard />

          <div className="relative lg:pl-7">
            <div className="absolute bottom-3 left-0 top-3 hidden w-px bg-gradient-to-b from-transparent via-[#009A9A]/35 to-transparent lg:block" />
            <Eyebrow>Sobre Matías</Eyebrow>
            <SectionTitle className="mt-4 max-w-3xl">
              Criterio de negocio, ejecución técnica.
            </SectionTitle>
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-8 text-[#475467] dark:text-[#CBD5E1]">
              <p>
                Soy Matías Álvarez. Mi trabajo es traducir problemas de empresa
                en decisiones, prioridades y soluciones posibles de implementar.
              </p>
              <p>
                CMA Consulting nace de esa mezcla: mirada administrativa,
                análisis técnico y foco práctico para acompañar a pymes sin
                sobrediagnosticar ni vender herramientas innecesarias.
              </p>
            </div>
            <div className="mt-7 max-w-full border-l-2 border-[#009A9A] pl-5">
              <p className="text-sm font-semibold leading-7 text-[#0D1B3D] dark:text-[#F8FAFC]">
                <span className="xl:whitespace-nowrap">
                  Primero entender el negocio. Después decidir qué conviene ordenar, medir o construir.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkedInProfileCard() {
  return (
    <article className="relative overflow-hidden rounded-[1.7rem] border border-[#0A66C2]/16 bg-white shadow-2xl shadow-[#0D1B3D]/10 dark:border-[#0A66C2]/24 dark:bg-[#0F1B36]">
      <div className="relative h-32 overflow-hidden bg-[#0D1B3D] md:h-36">
        <Image
          src="/profile/linkedin-cover.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 92vw, 560px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/8 via-[#071225]/4 to-[#071225]/34" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#071225]/50 to-transparent" />
      </div>

      <div className="relative px-5 pb-5 pt-0">
        <div className="-mt-12 flex items-end justify-between gap-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-[#E8ECE6] shadow-xl shadow-[#0D1B3D]/14 dark:border-[#0F1B36]">
            <Image
              src="/profile/matias-alvarez.jpg"
              alt="Matías Alvarez"
              fill
              sizes="96px"
              className="object-cover object-center"
            />
          </div>
          <span className="mb-2 rounded-full border border-[#0A66C2]/15 bg-[#0A66C2]/8 px-3 py-1 text-xs font-semibold text-[#0A66C2] dark:border-[#7FF0E6]/18 dark:bg-[#7FF0E6]/10 dark:text-[#7FF0E6]">
            LinkedIn
          </span>
        </div>

        <div className="mt-4">
          <h3 className="flex flex-wrap items-center gap-2 text-2xl font-semibold tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC]">
            Matías Álvarez
          </h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#101828] dark:text-[#F8FAFC]">
            Lic. en Administración de Empresas · Analista IT
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-[#667085] dark:text-[#CBD5E1]">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            Argentina · Profesional independiente
          </p>
        </div>

        <a
          href={siteConfig.contact.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] border border-[#0D1B3D]/10 bg-white px-4 text-sm font-semibold text-[#0D1B3D] transition hover:-translate-y-0.5 hover:border-[#0A66C2]/30 hover:text-[#0A66C2] dark:border-white/10 dark:bg-[#071225] dark:text-[#F8FAFC] dark:hover:text-[#7FF0E6]"
        >
          Ver perfil
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
