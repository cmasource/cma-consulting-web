import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Manrope, Newsreader } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["500", "600"],
  subsets: ["latin"],
});

const ogImage = {
  url: "/brand/cma-consulting-header.png",
  width: 622,
  height: 144,
  alt: "CMA Consulting",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cma-consulting.vercel.app"),
  title: "CMA Consulting | Consultoría financiero-operativa para pymes",
  description:
    "Ayudamos a pymes a ordenar números, procesos y decisiones con diagnóstico, control financiero y tecnología aplicada.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CMA Consulting | Consultoría financiero-operativa para pymes",
    description:
      "Ordenamos números, procesos y decisiones con diagnóstico, control financiero y tecnología aplicada.",
    type: "website",
    locale: "es_AR",
    siteName: "CMA Consulting",
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMA Consulting | Consultoría financiero-operativa para pymes",
    description:
      "Diagnóstico, control financiero y tecnología aplicada para pymes.",
    images: [ogImage.url],
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
      className={`${manrope.variable} ${newsreader.variable} ${plexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#F8FAFC] text-[#101828] dark:bg-[#071225] dark:text-[#F8FAFC]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
