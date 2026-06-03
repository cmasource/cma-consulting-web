import {
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/Typography";
import { OperationalTransformationFlow } from "@/components/visuals/OperationalTransformationFlow";

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
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#007A7A] dark:text-[#5EEAD4]">
              El problema no es crecer. Es crecer sin sistema.
            </p>
            <SectionLead className="mt-4 max-w-3xl">
              Mostramos el cambio de forma simple: una gestión dispersa se
              ordena con diagnóstico y se convierte en una empresa más clara
              para operar.
            </SectionLead>
          </div>
        </div>

        <div className="mt-11">
          <OperationalTransformationFlow />
        </div>
      </div>
    </section>
  );
}
