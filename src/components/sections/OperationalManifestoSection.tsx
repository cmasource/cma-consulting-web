import {
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";
import { CmaTransformationMotion } from "@/components/visuals/CmaTransformationMotion";

export function OperationalManifestoSection() {
  return (
    <section className="section-shell editorial-band bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <Eyebrow>Transformación operativa</Eyebrow>
            <SectionTitle className="mt-4">
              Del desorden operativo al sistema de gestión.
            </SectionTitle>
          </div>
          <div className="lg:pb-2">
            <SectionLead className="max-w-3xl">
              Transformamos problemas dispersos en procesos, indicadores y
              herramientas concretas para operar con más claridad.
            </SectionLead>
          </div>
        </div>

        <div className="mt-11">
          <CmaTransformationMotion />
        </div>
      </div>
    </section>
  );
}
