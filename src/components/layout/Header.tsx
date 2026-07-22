"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { navItems, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071225]/[0.96] text-white backdrop-blur-xl">
      <div className="container-shell flex min-h-[68px] items-center justify-between gap-5">
        <a href="#inicio" aria-label="Ir al inicio" className="shrink-0">
          <BrandLogo
            variant="consulting"
            context="light"
            priority
            className="[&_img]:brightness-0 [&_img]:invert"
          />
        </a>

        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-7"
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/72 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle className="rounded-sm border-white/15 bg-white/8 text-white hover:border-[#5EEAD4]/50 hover:text-[#5EEAD4] dark:bg-white/8" />
          <a
            href={siteConfig.diagnosisUrl}
            className="inline-flex min-h-10 items-center rounded-sm bg-[#5EEAD4] px-5 text-sm font-bold !text-[#071225] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5EEAD4]"
          >
            Solicitar diagnóstico
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/16 text-white transition hover:border-[#5EEAD4]/50 hover:text-[#5EEAD4] lg:hidden"
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
        hidden={!open}
        className={cn(
          "grid border-t border-white/10 bg-[#071225] transition-all lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav className="overflow-hidden" aria-label="Menú mobile">
          <div className="container-shell grid max-h-[calc(100svh-68px)] gap-1 overflow-y-auto py-4">
            <div className="mb-1 flex items-center justify-between border border-white/10 px-3 py-2">
              <span className="text-sm font-semibold text-white/72">
                Apariencia
              </span>
              <ThemeToggle className="rounded-sm border-white/15 bg-white/8 text-white" />
            </div>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm px-3 py-3 text-sm font-semibold text-white/72 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.diagnosisUrl}
              className="mt-2 rounded-sm bg-[#5EEAD4] px-3 py-3 text-center text-sm font-bold !text-[#071225]"
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
