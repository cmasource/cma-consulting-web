import { productGroups } from "@/content/products";
import {
  Badge,
  CardBody,
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";

const rails = ["Diagnosticar", "Operar", "Medir", "Aprender"];

export function ProductEcosystemSection() {
  return (
    <section id="productos" className="section-shell bg-[#F8FAFC] dark:bg-[#0A162E]">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-end">
          <div>
            <Eyebrow>Ecosistema</Eyebrow>
            <SectionTitle className="mt-4">
              Herramientas y productos en desarrollo
            </SectionTitle>
          </div>
          <SectionLead>
            Una visión de módulos propios en desarrollo, planificación o
            laboratorio. La prioridad es mostrar capacidades reales sin prometer
            productos terminados donde todavía hay exploración.
          </SectionLead>
        </div>

        <div className="relative mt-11 overflow-hidden rounded-[2rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-2xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#071225] dark:shadow-black/30 md:p-8">
          <div className="premium-grid absolute inset-0 opacity-45" />
          <div className="ambient-scan absolute inset-[-18%] blur-3xl" />

          <div className="relative grid gap-8 xl:grid-cols-[0.42fr_0.58fr] xl:items-stretch">
            <div className="relative overflow-hidden rounded-[1.65rem] border border-[#0D1B3D]/10 bg-[#0D1B3D] p-6 text-white dark:border-white/10">
              <div className="premium-grid absolute inset-0 opacity-15" />
              <div className="relative">
                <Badge className="border-white/15 bg-white/10 text-white">
                  Mapa de módulos
                </Badge>
                <h3 className="mt-7 text-4xl font-semibold tracking-[-0.04em]">
                  Un sistema de trabajo, no una lista de ideas.
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/80">
                  Cada herramienta responde a una necesidad distinta: entender el
                  estado de la empresa, operar mejor, visualizar datos o explorar
                  laboratorios de análisis.
                </p>
              </div>

              <div className="relative mt-9 grid gap-3">
                {rails.map((rail, index) => (
                  <div
                    key={rail}
                    className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-mono text-xs font-bold text-[#0D1B3D]">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold text-white">{rail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-transparent via-[#009A9A]/35 to-transparent dark:via-[#22C7C7]/45 md:block" />
              <div className="grid gap-5">
                {productGroups.map((group, groupIndex) => (
                  <section
                    key={group.category}
                    className="relative overflow-hidden rounded-[1.45rem] border border-[#0D1B3D]/10 bg-[#F8FAFC]/90 p-4 shadow-sm dark:border-white/10 dark:bg-[#0F1B36]/90 md:ml-10 md:p-5"
                  >
                    <span className="absolute -left-[3.25rem] top-6 hidden h-5 w-5 rounded-full border-4 border-white bg-[#009A9A] shadow-lg shadow-[#009A9A]/20 dark:border-[#071225] dark:bg-[#22C7C7] md:block" />
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#007A7A] dark:text-[#5EEAD4]">
                          0{groupIndex + 1}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#0D1B3D] dark:text-[#F8FAFC]">
                          {group.category}
                        </h3>
                      </div>
                      <Badge>{group.products.length} módulos</Badge>
                    </div>

                    <div className="mt-5 grid gap-3 lg:grid-cols-2">
                      {group.products.map((product) => (
                        <article
                          key={product.name}
                          className="group rounded-[1.1rem] border border-[#0D1B3D]/10 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#009A9A]/35 hover:shadow-lg hover:shadow-[#0D1B3D]/8 dark:border-white/10 dark:bg-[#071225] dark:hover:border-[#22C7C7]/40"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <h4 className="text-base font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                              {product.name}
                            </h4>
                            <span className="shrink-0 rounded-full border border-[#009A9A]/20 bg-[#009A9A]/10 px-2.5 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#007A7A] dark:border-[#22C7C7]/25 dark:bg-[#22C7C7]/10 dark:text-[#5EEAD4]">
                              {product.status}
                            </span>
                          </div>
                          <CardBody className="mt-3 text-xs leading-6">
                            {product.description}
                          </CardBody>
                          <p className="mt-4 font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#667085] dark:text-[#CBD5E1]">
                            {product.href ? "Ver avance" : "Sin enlace público"}
                          </p>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
