"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { navItems } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-[#0D1B3D]/10 bg-white/[0.92] backdrop-blur-xl dark:border-white/10 dark:bg-[#071225]/[0.92]">
      <div className="container-shell flex min-h-[72px] items-center justify-between gap-5">
        <a href="#inicio" aria-label="Ir al inicio" className="shrink-0">
          <BrandLogo variant="consulting" context="auto" />
        </a>

        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-7"
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#344054] transition hover:text-[#007A7A] dark:text-[#CBD5E1] dark:hover:text-[#5EEAD4]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="#contacto"
            className="inline-flex min-h-11 items-center rounded-md bg-[#0D1B3D] px-5 text-sm font-semibold !text-white shadow-sm shadow-[#0D1B3D]/15 transition hover:-translate-y-0.5 hover:bg-[#009A9A] hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007A7A]"
          >
            Solicitar diagnóstico
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#0D1B3D]/10 text-[#0D1B3D] transition hover:border-[#009A9A]/40 hover:text-[#007A7A] dark:border-white/15 dark:text-[#F8FAFC] dark:hover:text-[#5EEAD4] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <span className="relative h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-current transition",
                open && "top-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 h-0.5 w-5 bg-current transition",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-4 h-0.5 w-5 bg-current transition",
                open && "top-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "grid border-t border-[#0D1B3D]/10 bg-white transition-all dark:border-white/10 dark:bg-[#071225] lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav className="overflow-hidden" aria-label="Menú mobile">
          <div className="container-shell grid gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-[#344054] hover:bg-[#F8FAFC] hover:text-[#007A7A] dark:text-[#CBD5E1] dark:hover:bg-[#0F1B36] dark:hover:text-[#5EEAD4]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle className="mt-2" />
            <a
              href="#contacto"
              className="mt-2 rounded-md bg-[#0D1B3D] px-3 py-3 text-center text-sm font-semibold !text-white"
              onClick={() => setOpen(false)}
            >
              Solicitar diagnóstico
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
