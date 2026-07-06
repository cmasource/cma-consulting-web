import {
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";
import { CmaTransformationMotion } from "@/components/visuals/CmaTransformationMotion";

export function OperationalManifestoSection() {
  return (
    <section id="transformacion" className="section-shell editorial-band bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <Eyebrow>Transformación operativa</Eyebrow>
            <SectionTitle className="mt-4">
              Del desorden financiero-operativo al sistema de gestión.
            </SectionTitle>
          </div>
          <div className="lg:pb-2">
            <SectionLead className="max-w-3xl">
              Muchas pymes no tienen solo un problema de ventas o de software:
              tienen costos poco claros, caja desordenada, procesos informales y
              decisiones sin datos. Ayudamos a ordenar ese sistema.
            </SectionLead>
          </div>
        </div>

        <div className="mt-10 lg:mt-12">
          <CmaTransformationMotion />
        </div>
      </div>
    </section>
  );
}
