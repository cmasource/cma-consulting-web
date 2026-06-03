import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CMA Consulting | Consultoría empresarial, procesos y tecnología aplicada",
  description:
    "Ayudamos a PyMEs, comercios, profesionales e industrias a ordenar su gestión, mejorar procesos y construir soluciones digitales a medida. Consultoría empresarial, software, automatización y datos.",
  openGraph: {
    title: "CMA Consulting | Consultoría empresarial, procesos y tecnología aplicada",
    description:
      "Ayudamos a PyMEs, comercios, profesionales e industrias a ordenar su gestión, mejorar procesos y construir soluciones digitales a medida.",
    type: "website",
    locale: "es_AR",
    siteName: "CMA Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMA Consulting | Consultoría empresarial, procesos y tecnología aplicada",
    description:
      "Consultoría empresarial, software, automatización y datos para PyMEs, comercios, profesionales e industrias.",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/brand/cma-app-icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#F8FAFC] text-[#101828] dark:bg-[#071225] dark:text-[#F8FAFC]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
