import type { Metadata, Viewport } from "next";
import { Allura, Cormorant_Garamond, Jost } from "next/font/google";

import { RevealObserver } from "@/components/reveal-observer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

const title = "VELLUTO — o look começa pela lingerie.";
const description =
  "delicada nos detalhes. Lingerie, sleepwear e swimwear em Novo Repartimento e região, com pedidos pelo WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "VELLUTO",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#330e14",
};

// Antes da primeira pintura: liga as revelações ao rolar (sem JS, nada fica escondido).
// Se o React não assumir em 4s, desliga de novo para nenhuma seção ficar invisível.
const revealScript = `(function(){var d=document.documentElement;d.classList.add("reveal-on");setTimeout(function(){if(!d.hasAttribute("data-reveal-ready"))d.classList.remove("reveal-on")},4000)})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${jost.variable} ${allura.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <div aria-hidden className="scroll-progress" />
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
