"use client";

import { FormEvent, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/content/site";

const inquiryTypes = [
  "Consultoría empresarial",
  "Web / ecommerce",
  "Software / app",
  "Automatización",
  "Dashboard",
  "ERP / sistema de gestión",
  "Otro",
];

const inputClass =
  "mt-2 min-h-12 w-full rounded-md border border-[#0D1B3D]/10 bg-white px-4 text-sm text-[#101828] outline-none transition placeholder:text-[#98A2B3] focus:border-[#009A9A] focus:ring-4 focus:ring-[#009A9A]/10 dark:border-white/10 dark:bg-[#071225] dark:text-[#F8FAFC] dark:placeholder:text-[#94A3B8]";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const required = ["name", "email", "message"];
    const hasMissing = required.some((field) =>
      !String(formData.get(field) ?? "").trim(),
    );

    if (hasMissing) {
      setStatus("error");
      return;
    }

    setStatus("success");
    event.currentTarget.reset();
  }

  return (
    <section id="contacto" className="section-shell bg-white dark:bg-[#071225]">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionHeader
            eyebrow="Contacto"
            title="Hablemos de tu empresa"
            description="Contanos qué necesitás ordenar, construir o mejorar. El formulario queda preparado para conectar con Supabase, email o n8n en una siguiente etapa."
          />
          <div className="grid gap-4 rounded-xl border border-[#0D1B3D]/10 bg-[#F8FAFC] p-6 text-sm text-[#475467] dark:border-white/10 dark:bg-[#0F1B36] dark:text-[#CBD5E1]">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-semibold text-[#0D1B3D] hover:text-[#007A7A] dark:text-[#F8FAFC] dark:hover:text-[#5EEAD4]"
            >
              {siteConfig.contact.email}
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              className="font-semibold text-[#0D1B3D] hover:text-[#007A7A] dark:text-[#F8FAFC] dark:hover:text-[#5EEAD4]"
            >
              WhatsApp configurable
            </a>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.contact.linkedinUrl}
                className="hover:text-[#007A7A] dark:hover:text-[#5EEAD4]"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.contact.instagramUrl}
                className="hover:text-[#007A7A] dark:hover:text-[#5EEAD4]"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="surface-card rounded-xl p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
              Nombre
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Tu nombre"
                className={inputClass}
                required
              />
            </label>
            <label className="text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
              Empresa
              <input
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Nombre de la empresa"
                className={inputClass}
              />
            </label>
            <label className="text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
              Rubro
              <input
                name="industry"
                type="text"
                placeholder="Comercio, industria, servicios..."
                className={inputClass}
              />
            </label>
            <label className="text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="nombre@empresa.com"
                className={inputClass}
                required
              />
            </label>
            <label className="text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
              Teléfono
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+54 9 ..."
                className={inputClass}
              />
            </label>
            <label className="text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
              Tipo de consulta
              <select
                name="type"
                className={inputClass}
                defaultValue="Consultoría empresarial"
              >
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
            Mensaje
            <textarea
              name="message"
              rows={6}
              placeholder="Contanos brevemente qué necesitás mejorar o implementar."
              className={`${inputClass} pt-3`}
              required
            />
          </label>

          {status === "error" ? (
            <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              Revisá nombre, email y mensaje para enviar la consulta.
            </p>
          ) : null}
          {status === "success" ? (
            <p className="mt-4 rounded-md bg-[#009A9A]/10 px-4 py-3 text-sm font-semibold text-[#005F5F] dark:text-[#5EEAD4]">
              Consulta registrada en modo demo. Lista para conectar con backend.
            </p>
          ) : null}

          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#0D1B3D] px-5 text-sm font-semibold !text-white transition hover:-translate-y-0.5 hover:bg-[#009A9A] hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007A7A] md:w-auto"
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  );
}
