import { BrandLogo } from "@/components/ui/BrandLogo";
import { navItems, siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0D1B3D] text-white">
      <div className="premium-grid absolute inset-0 opacity-10" />
      <div className="ambient-scan absolute inset-x-0 bottom-[-26rem] h-[42rem] blur-3xl" />

      <div className="container-shell relative grid gap-10 py-14 md:grid-cols-[1.2fr_0.85fr_0.85fr_0.75fr]">
        <div>
          <BrandLogo variant="consulting" context="dark" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/82">
            Consultoría empresarial, procesos y tecnología aplicada para pasar
            del diagnóstico a la implementación real.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#7FF0E6]">
            Navegación
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-white/82">
            {navItems.slice(0, 5).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7FF0E6]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#7FF0E6]">
            Secciones
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-white/82">
            {navItems.slice(5).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7FF0E6]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#7FF0E6]">
            Contacto
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-white/82">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7FF0E6]"
            >
              Email
            </a>
            <a
              href={siteConfig.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7FF0E6]"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7FF0E6]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-5 text-sm text-white/75 lg:flex-row lg:items-center lg:justify-between">
          <span>© {year} CMA Consulting. Todos los derechos reservados.</span>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <span>Página desarrollada por</span>
            <BrandLogo
              variant="source"
              context="dark"
              className="[&>span]:h-7 sm:[&>span]:h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
