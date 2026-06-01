"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { Badge, Eyebrow, SectionLead, SectionTitle } from "@/components/ui/Typography";
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

const topics = [
  "ordenar procesos",
  "mejorar costos",
  "dashboards",
  "landing pages",
  "ecommerce",
  "automatización",
  "diagnóstico",
];

const steps = ["Nos escribís", "Entendemos tu necesidad", "Definimos próximos pasos"];

const inputClass =
  "mt-2 min-h-12 w-full rounded-[10px] border border-[#0D1B3D]/10 bg-white px-4 text-sm text-[#101828] outline-none transition placeholder:text-[#667085] focus:border-[#009A9A] focus:ring-4 focus:ring-[#009A9A]/10 dark:border-white/10 dark:bg-[#071225] dark:text-[#F8FAFC] dark:placeholder:text-[#CBD5E1]";

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
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Contacto</Eyebrow>
            <SectionTitle className="mt-4">Hablemos de tu empresa</SectionTitle>
            <SectionLead className="mt-5">
              Contanos qué necesitás ordenar, construir o mejorar. Te ayudamos a
              convertir una necesidad difusa en próximos pasos concretos.
            </SectionLead>

            <div className="mt-8 rounded-[1.6rem] border border-[#0D1B3D]/10 bg-[#F8FAFC] p-5 shadow-xl shadow-[#0D1B3D]/8 dark:border-white/10 dark:bg-[#0F1B36]">
              <Badge>Qué podés consultarnos</Badge>
              <div className="mt-5 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-[#0D1B3D]/10 bg-white px-3 py-1.5 text-xs font-semibold text-[#0D1B3D] dark:border-white/10 dark:bg-[#071225] dark:text-[#CBD5E1]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[1.6rem] border border-[#009A9A]/20 bg-white p-5 dark:border-[#22C7C7]/25 dark:bg-[#0F1B36]">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#007A7A] dark:text-[#5EEAD4]">
                Cómo sigue
              </p>
              <div className="mt-5 grid gap-3">
                {steps.map((step, index) => (
                  <div key={step} className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D1B3D] font-mono text-xs font-bold text-white dark:bg-[#15234A]">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold text-[#0D1B3D] dark:text-[#F8FAFC]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 text-sm text-[#475467] dark:text-[#CBD5E1] sm:grid-cols-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 rounded-2xl border border-[#0D1B3D]/10 bg-white px-4 py-3 font-semibold text-[#0D1B3D] transition hover:border-[#009A9A]/35 hover:text-[#007A7A] dark:border-white/10 dark:bg-[#0F1B36] dark:text-[#F8FAFC] dark:hover:text-[#5EEAD4]"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                Email
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                className="flex items-center gap-3 rounded-2xl border border-[#0D1B3D]/10 bg-white px-4 py-3 font-semibold text-[#0D1B3D] transition hover:border-[#009A9A]/35 hover:text-[#007A7A] dark:border-white/10 dark:bg-[#0F1B36] dark:text-[#F8FAFC] dark:hover:text-[#5EEAD4]"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#009A9A]/8 blur-2xl dark:bg-[#22C7C7]/8" />
            <form
              onSubmit={onSubmit}
              className="surface-card relative overflow-hidden rounded-[1.8rem] p-5 md:p-8"
            >
              <div className="premium-grid absolute inset-0 opacity-40" />
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
                  <p className="mt-4 rounded-[10px] bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    Revisá nombre, email y mensaje para enviar la consulta.
                  </p>
                ) : null}
                {status === "success" ? (
                  <p className="mt-4 flex items-center gap-2 rounded-[10px] bg-[#009A9A]/10 px-4 py-3 text-sm font-semibold text-[#005F5F] dark:text-[#5EEAD4]">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
                    Consulta registrada en modo demo. Lista para conectar con backend.
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-[#0D1B3D] px-5 text-sm font-semibold !text-white transition hover:-translate-y-0.5 hover:bg-[#009A9A] hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007A7A] md:w-auto"
                >
                  Enviar consulta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
