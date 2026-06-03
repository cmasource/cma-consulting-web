import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

export function WhatsAppWidget() {
  const href =
    siteConfig.contact.whatsappUrl && siteConfig.contact.whatsappUrl !== "#"
      ? siteConfig.contact.whatsappUrl
      : "#contacto";
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label="Escribir por WhatsApp"
      data-testid="whatsapp-widget"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#075E54] !text-white shadow-xl shadow-[#25D366]/25 transition hover:-translate-y-0.5 hover:bg-[#128C7E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6 sm:h-12 sm:w-auto sm:gap-2 sm:rounded-full sm:px-5"
    >
      <MessageCircle aria-hidden="true" className="h-6 w-6 sm:h-5 sm:w-5" />
      <span className="hidden text-sm font-bold sm:inline">Hablemos</span>
    </a>
  );
}
