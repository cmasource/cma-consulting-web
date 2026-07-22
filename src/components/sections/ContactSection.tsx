"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";
import { siteConfig } from "@/content/site";

const inquiryTypes = [
  "Quiero ordenar mis números, costos o rentabilidad.",
  "Necesito mejorar mi caja o control financiero.",
  "Quiero ordenar procesos internos.",
  "Necesito indicadores o un tablero de gestión.",
  "Quiero automatizar tareas manuales.",
  "Quiero mejorar seguimiento comercial o cobranzas.",
  "Necesito una web, sistema o herramienta digital.",
  "Quiero implementar o mejorar un ERP/sistema de gestión.",
  "No sé exactamente qué necesito, quiero un diagnóstico.",
];

const inputClass =
  "mt-2 min-h-12 w-full rounded-[10px] border border-[#0D1B3D]/10 bg-white px-4 text-sm text-[#101828] outline-none transition placeholder:text-[#667085] focus:border-[#009A9A] focus:ring-4 focus:ring-[#009A9A]/10 dark:border-white/10 dark:bg-[#071225] dark:text-[#F8FAFC] dark:placeholder:text-[#CBD5E1]";

function GmailMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path fill="#EA4335" d="M3.5 6.8 12 13.2l8.5-6.4v10.7A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5V6.8Z" />
      <path fill="#FBBC04" d="M3.5 6.8 12 13.2v3.1L3.5 9.9V6.8Z" />
      <path fill="#34A853" d="M20.5 6.8 12 13.2v3.1l8.5-6.4V6.8Z" />
      <path fill="#4285F4" d="M5 5h14c.6 0 1.1.3 1.3.8L12 12 3.7 5.8C3.9 5.3 4.4 5 5 5Z" />
    </svg>
  );
}

function WhatsAppMark() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
      <MessageCircle aria-hidden="true" className="h-4 w-4" />
    </span>
  );
}

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "error" | "redirecting">("idle");
  const hasContactWhatsApp =
    siteConfig.contact.whatsappUrl !== "#contacto" &&
    siteConfig.contact.whatsappUrl !== "#" &&
    siteConfig.contact.whatsappUrl.startsWith("http");

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

    const getValue = (field: string) => String(formData.get(field) ?? "").trim();
    const message = [
      "Hola, quiero realizar una consulta desde la web de CMA Consulting.",
      "",
      `Nombre: ${getValue("name")}`,
      `Empresa: ${getValue("company") || "-"}`,
      `Rubro: ${getValue("industry") || "-"}`,
      `Email: ${getValue("email")}`,
      `Teléfono: ${getValue("phone") || "-"}`,
      `Problema principal: ${getValue("type") || "-"}`,
      "",
      "Mensaje:",
      getValue("message"),
    ].join("\n");

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = siteConfig.contact.whatsappUrl;
    const hasConfiguredWhatsApp =
      whatsappUrl &&
      whatsappUrl !== "#contacto" &&
      whatsappUrl !== "#" &&
      whatsappUrl.startsWith("http");
    const targetUrl = hasConfiguredWhatsApp
      ? `${whatsappUrl}${whatsappUrl.includes("?") ? "&" : "?"}text=${encodedMessage}`
      : `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
          "Consulta desde la web de CMA Consulting",
        )}&body=${encodedMessage}`;

    setStatus("redirecting");
    window.open(targetUrl, "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
  }

  return (
    <section id="contacto" className="section-shell border-t border-[#0D1B3D]/10 bg-white dark:border-white/10 dark:bg-[#071225]">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
          <div>
            <Eyebrow>Contacto</Eyebrow>
            <SectionTitle className="mt-4">Hablemos de tu empresa</SectionTitle>
            <SectionLead className="mt-5">
              Contanos qué está pasando. La primera conversación sirve para
              entender el problema y definir un próximo paso concreto.
            </SectionLead>

            <div className="mt-9 grid gap-3 text-sm text-[#475467] dark:text-[#CBD5E1] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex min-h-12 items-center gap-3 border border-[#0D1B3D]/12 bg-white px-4 py-3 font-semibold text-[#0D1B3D] transition hover:border-[#EA4335]/45 dark:border-white/12 dark:bg-[#0F1B36] dark:text-[#F8FAFC]"
              >
                <GmailMark />
                Email
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target={hasContactWhatsApp ? "_blank" : undefined}
                rel={hasContactWhatsApp ? "noopener noreferrer" : undefined}
                className="flex min-h-12 items-center gap-3 border border-[#25D366]/30 bg-[#25D366]/7 px-4 py-3 font-semibold text-[#0D1B3D] transition hover:border-[#25D366]/60 dark:border-[#25D366]/35 dark:bg-[#25D366]/10 dark:text-[#F8FAFC]"
              >
                <WhatsAppMark />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden border border-[#0D1B3D]/12 bg-[#F8FAFC] p-5 dark:border-white/12 dark:bg-[#0F1B36] md:p-8"
            >
              <div className="relative">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#007A7A] dark:text-[#5EEAD4]">
                      Formulario
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#0D1B3D] dark:text-[#F8FAFC]">
                      Primer contacto
                    </h3>
                  </div>
                  <span className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-[#0D1B3D] text-white dark:bg-[#15234A] sm:flex">
                    <ArrowRight aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>

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
                  Problema principal
                  <select
                      name="type"
                      className={inputClass}
                      defaultValue="No sé exactamente qué necesito, quiero un diagnóstico."
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
                    placeholder="Contanos brevemente qué necesitás ordenar: números, caja, costos, procesos, indicadores, ventas, cobranzas o herramientas."
                    className={`${inputClass} pt-3`}
                    required
                  />
                </label>

                {status === "error" ? (
                  <p className="mt-4 rounded-[10px] bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    Revisá nombre, email y mensaje para enviar la consulta.
                  </p>
                ) : null}
                {status === "redirecting" ? (
                  <p className="mt-4 flex items-center gap-2 rounded-[10px] bg-[#009A9A]/10 px-4 py-3 text-sm font-semibold text-[#005F5F] dark:text-[#5EEAD4]">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
                    Te vamos a redirigir para enviar la consulta.
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-[#0D1B3D] px-5 text-sm font-semibold !text-white transition hover:-translate-y-0.5 hover:bg-[#009A9A] hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007A7A] md:w-auto"
                >
                  Solicitar Diagnóstico 360
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
