import { BrandLogo } from "@/components/ui/BrandLogo";
import { navItems, siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#0D1B3D]/10 bg-[#0D1B3D] text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.25fr_0.9fr_0.85fr]">
        <div>
          <BrandLogo variant="consulting" context="dark" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/85">
            Consultoría empresarial, procesos y tecnología aplicada.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/85">
            Links rápidos
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/85">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/85">
            cma_source
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/85">
            Desarrollo tecnológico y soluciones digitales.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/85">
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
              Email
            </a>
            <a href={siteConfig.contact.linkedinUrl} className="hover:text-white">
              LinkedIn
            </a>
            <a href={siteConfig.contact.instagramUrl} className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell text-sm text-white/85">
          © {year} CMA Consulting. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
