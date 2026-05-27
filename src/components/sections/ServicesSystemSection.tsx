import { consultingServiceGroups } from "@/content/services";
import { Badge, CardBody, CardTitle, Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";

const labels = ["Gestión y control", "Procesos y mejora continua", "Comercial y administración", "Transformación digital"];

export function ServicesSystemSection() {
  return (
    <section id="servicios" className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <Eyebrow>CMA Consulting</Eyebrow>
            <SectionTitle className="mt-4">Servicios como sistema, no como piezas sueltas.</SectionTitle>
            <SectionLead className="mt-5">
              Organizamos gestión, procesos, administración y transformación digital para preparar mejoras implementables.
            </SectionLead>
          </div>
          <div className="rounded-[2rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-4 dark:border-white/10 dark:bg-[#0A162E] md:p-6">
            <div className="grid gap-4 lg:grid-cols-[0.34fr_0.66fr]">
              <nav className="grid gap-2" aria-label="Categorías de servicios">
                {labels.map((label, index) => (
                  <a
                    key={label}
                    href={`#service-${index + 1}`}
                    className="rounded-xl border border-[#0D1B3D]/10 bg-white px-4 py-3 text-sm font-bold text-[#0D1B3D] transition hover:border-[#009A9A]/35 dark:border-white/10 dark:bg-[#0F1B36] dark:text-[#F8FAFC]"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <div className="grid gap-4">
                {consultingServiceGroups.map((group, index) => (
                  <article
                    id={`service-${index + 1}`}
                    key={group.title}
                    className="rounded-[1.35rem] border border-[#0D1B3D]/10 bg-white p-5 dark:border-white/10 dark:bg-[#0F1B36]"
                  >
                    <Badge>0{index + 1}</Badge>
                    <CardTitle className="mt-4">{labels[index]}</CardTitle>
                    <CardBody className="mt-3">{group.title}</CardBody>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#0D1B3D]/10 bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-[#475467] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
