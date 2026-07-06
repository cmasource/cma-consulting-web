import Image from "next/image";
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import { Eyebrow, SectionTitle } from "@/components/ui/Typography";
import { siteConfig } from "@/content/site";

const profileItems = ["Finanzas y gestión", "Procesos y datos", "Tecnología aplicada"];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section-shell bg-[#F7FAFC] dark:bg-[#0A162E]">
      <div className="container-shell">
        <div className="grid gap-8 rounded-[2rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-xl shadow-[#0D1B3D]/8 dark:border-white/10 dark:bg-[#071225] md:p-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <LinkedInProfileCard />

          <div className="lg:pl-4">
            <Eyebrow>Sobre Matías</Eyebrow>
            <SectionTitle className="mt-4 max-w-3xl">
              Gestión, finanzas y tecnología aplicada para pymes
            </SectionTitle>
            <div className="mt-5 max-w-3xl space-y-4 text-base leading-8 text-[#475467] dark:text-[#CBD5E1]">
              <p>
                Soy Matías Álvarez, Licenciado en Administración de Empresas,
                Analista IT y consultor en gestión, finanzas y tecnología
                aplicada.
              </p>
              <p>
                Combino experiencia en procesos, datos, sistemas y análisis de
                negocio para ayudar a pymes a ordenar su gestión, entender sus
                números y tomar mejores decisiones.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {profileItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#0D1B3D]/10 bg-[#F8FAFC] px-4 py-2 text-xs font-semibold text-[#0D1B3D] dark:border-white/10 dark:bg-[#0F1B36] dark:text-[#F8FAFC]"
                >
                  {item}
                </span>
              ))}
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
      <div className="relative h-28 overflow-hidden bg-[#1D405D] md:h-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_36%,rgba(127,240,230,0.24),transparent_18rem),linear-gradient(135deg,#244761,#102238)]" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-35 [background-image:linear-gradient(120deg,transparent_0_18px,rgba(255,255,255,0.18)_19px,transparent_20px),linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:96px_96px,42px_42px,42px_42px]"
        />
        <span className="absolute right-5 top-5 rounded-full border border-white/18 bg-white/10 px-3 py-1 font-mono text-[0.64rem] font-bold uppercase tracking-[0.16em] text-white/86">
          LinkedIn
        </span>
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
          <span className="mb-2 inline-flex items-center gap-1 rounded-full border border-[#0A66C2]/15 bg-[#0A66C2]/8 px-3 py-1 text-xs font-semibold text-[#0A66C2] dark:border-[#7FF0E6]/18 dark:bg-[#7FF0E6]/10 dark:text-[#7FF0E6]">
            <ShieldCheck aria-hidden="true" className="h-3.5 w-3.5" />
            Perfil profesional
          </span>
        </div>

        <div className="mt-4">
          <h3 className="flex flex-wrap items-center gap-2 text-2xl font-semibold tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC]">
            Matías Álvarez
          </h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#101828] dark:text-[#F8FAFC]">
            Licenciado en Administración de Empresas, Analista IT y consultor
            en gestión, finanzas y tecnología aplicada.
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-[#667085] dark:text-[#CBD5E1]">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            Argentina · Profesional independiente
          </p>
        </div>

        <div className="mt-5 rounded-[1.1rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-4 dark:border-white/10 dark:bg-[#071225]">
          <p className="text-sm leading-7 text-[#475467] dark:text-[#CBD5E1]">
            Procesos, datos, sistemas y análisis de negocio para ordenar
            números, gestión y decisiones.
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
