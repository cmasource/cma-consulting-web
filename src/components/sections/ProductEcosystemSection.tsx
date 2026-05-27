import { productGroups } from "@/content/products";
import {
  Badge,
  CardBody,
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";

export function ProductEcosystemSection() {
  return (
    <section id="productos" className="section-shell bg-[#F8FAFC] dark:bg-[#0A162E]">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Ecosistema</Eyebrow>
          <SectionTitle className="mt-4">
            Un ecosistema de herramientas para diagnosticar, operar y medir.
          </SectionTitle>
          <SectionLead className="mt-5">
            Módulos propios en desarrollo, planificación o laboratorio. Cada
            herramienta ocupa un lugar dentro del sistema operativo de gestión.
          </SectionLead>
        </div>
        <div className="relative mt-12 rounded-[2rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-xl shadow-[#0D1B3D]/10 dark:border-white/10 dark:bg-[#0F1B36] dark:shadow-black/30 md:p-8">
          <div className="premium-grid absolute inset-0 opacity-40" />
          <div className="relative grid gap-5 lg:grid-cols-4">
            {productGroups.map((group, groupIndex) => (
              <section
                key={group.category}
                className="rounded-[1.4rem] border border-[#0D1B3D]/10 bg-[#F8FAFC]/90 p-4 dark:border-white/10 dark:bg-[#071225]/90"
              >
                <Badge>0{groupIndex + 1}</Badge>
                <h3 className="mt-4 text-xl font-black text-[#0D1B3D] dark:text-[#F8FAFC]">
                  {group.category}
                </h3>
                <div className="mt-5 grid gap-3">
                  {group.products.map((product) => (
                    <article
                      key={product.name}
                      className="rounded-xl border border-[#0D1B3D]/10 bg-white p-4 dark:border-white/10 dark:bg-[#0F1B36]"
                    >
                      <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#005F5F] dark:text-[#5EEAD4]">
                        {product.status}
                      </p>
                      <h4 className="mt-2 text-sm font-black text-[#0D1B3D] dark:text-[#F8FAFC]">
                        {product.name}
                      </h4>
                      <CardBody className="mt-2 text-xs leading-6">
                        {product.description}
                      </CardBody>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
