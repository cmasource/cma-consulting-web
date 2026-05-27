import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { productGroups } from "@/content/products";

export function ProductsSection() {
  return (
    <section id="productos" className="section-shell bg-[#F8FAFC] dark:bg-[#0A162E]">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Ecosistema"
          title="Un ecosistema de herramientas para diagnosticar, operar y medir."
          description="Productos propios en distintos estados de avance. No se presentan como soluciones terminadas: cada módulo muestra su estado actual y su rol dentro del sistema CMA."
        />

        <div className="grid gap-5">
          {productGroups.map((group, groupIndex) => (
            <section
              key={group.category}
              className="relative overflow-hidden rounded-[1.5rem] border border-[#0D1B3D]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0F1B36]"
            >
              <div className="absolute right-6 top-5 text-6xl font-black text-[#0D1B3D]/5 dark:text-white/5">
                0{groupIndex + 1}
              </div>
              <div className="relative grid gap-5 xl:grid-cols-[0.32fr_0.68fr] xl:items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#007A7A] dark:text-[#5EEAD4]">
                    Módulo del ecosistema
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-[#0D1B3D] dark:text-[#F8FAFC]">
                    {group.category}
                  </h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {group.products.map((product, index) => (
                    <ProductCard
                      key={product.name}
                      {...product}
                      variant={index % 3 === 0 ? "featured" : "default"}
                    />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
