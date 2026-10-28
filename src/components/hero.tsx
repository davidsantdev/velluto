import { cssVars } from "@/lib/motion";
import { contact, whatsappLink } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { Emblem } from "./emblem";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { Divider, Sparkle } from "./ornaments";

// Estrelinhas que piscam no veludo: [esquerda %, topo %, tamanho px, atraso s].
const GLITTER: [number, number, number, number][] = [
  [6, 22, 9, 0.4],
  [13, 74, 6, 2.2],
  [24, 14, 7, 3.4],
  [30, 84, 10, 1.3],
  [70, 12, 8, 1.8],
  [76, 82, 6, 3.9],
  [87, 30, 10, 2.5],
  [94, 66, 7, 0.2],
];

/**
 * No computador os tamanhos acompanham a altura da tela (svh): o topo inteiro e as
 * linhas logo abaixo cabem numa tela só, para fotos e vídeos do site.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="velvet light-sweep">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {GLITTER.map(([left, top, size, delay]) => (
          <Sparkle
            key={`${left}-${top}`}
            className="glitter absolute text-gold-300"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              ...cssVars({ "--glitter-delay": `${delay}s`, "--glitter-period": `${3.5 + (delay % 1.5)}s` }),
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-12 text-center md:py-[clamp(0.75rem,2.8svh,2.5rem)]">
        <Emblem
          draw
          shine
          className="h-32 text-gold-500 md:h-[clamp(3.5rem,11svh,8rem)]"
          style={cssVars({ "--shine-delay": "3s" })}
        />

        <h1
          id="hero-titulo"
          className="hero-title shine-text mt-6 pl-[0.4em] font-serif text-[2.6rem] font-normal leading-none tracking-[0.4em] sm:text-6xl md:mt-[clamp(0.4rem,1.5svh,1.25rem)] md:text-[clamp(2.25rem,6.6svh,4.25rem)]"
          style={cssVars({ "--d": "0.5s", "--shine-delay": "3.3s" })}
        >
          VELLUTO
        </h1>

        <p
          className="hero-rise mt-5 pl-[0.38em] text-[0.6rem] uppercase tracking-[0.38em] text-blush sm:text-xs md:mt-[clamp(0.4rem,1.4svh,1rem)]"
          style={cssVars({ "--d": "1.1s" })}
        >
          lingerie <span className="mx-1.5 text-gold-500">•</span> sleepwear{" "}
          <span className="mx-1.5 text-gold-500">•</span> swimwear
        </p>

        <Divider
          animate
          className="mt-6 text-gold-500 md:mt-[clamp(0.4rem,1.5svh,1.1rem)]"
          style={cssVars({ "--d": "1.3s" })}
        />

        <p
          className="hero-rise mt-7 font-serif text-2xl font-light italic text-blush md:mt-[clamp(0.4rem,1.6svh,1.25rem)] md:text-[clamp(1.125rem,2.8svh,1.75rem)]"
          style={cssVars({ "--d": "1.5s" })}
        >
          o look começa pela lingerie.
        </p>

        <div
          className="hero-rise mt-9 flex flex-col items-center gap-3 sm:flex-row md:mt-[clamp(0.6rem,2.2svh,1.75rem)]"
          style={cssVars({ "--d": "1.7s" })}
        >
          <ButtonLink href={whatsappLink()} variant="gold">
            <WhatsAppIcon className="size-4" />
            pedir pelo WhatsApp
          </ButtonLink>
          <ButtonLink href={contact.instagramUrl} variant="outline-gold">
            <InstagramIcon className="size-4" />
            {contact.instagramHandle}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
