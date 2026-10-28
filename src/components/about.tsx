import { cssVars, reveal } from "@/lib/motion";
import { contact } from "@/lib/site";
import { Emblem } from "./emblem";
import { Divider } from "./ornaments";
import { SectionTitle } from "./section-title";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="bg-ivory">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 py-16 md:grid-cols-2 md:gap-20 md:px-6 md:py-24">
        {/* A logo em vinho dentro da janela em arco, que ecoa o contorno do emblema. */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
          <div
            aria-hidden
            {...reveal("zoom", 500)}
            className="absolute -inset-3 rounded-t-full border border-gold-600/50"
          />
          <div
            {...reveal("fade")}
            className="relative flex aspect-[3/4] flex-col items-center justify-center rounded-t-full bg-cream bg-[radial-gradient(120%_80%_at_50%_30%,var(--color-ivory),transparent_70%)] px-6 pt-[12%] text-wine-700"
          >
            <Emblem
              draw
              shine
              title="VELLUTO"
              className="h-36 sm:h-44 md:h-52"
              style={cssVars({
                "--glint-ink": "#d58a98",
                "--glint-glow": "rgb(213 138 152 / 0.6)",
                "--shine-delay": "3.4s",
              })}
            />
            <p
              aria-hidden
              className="shine-text mt-6 pl-[0.4em] font-serif text-3xl leading-none tracking-[0.4em] sm:text-4xl md:mt-8 md:text-[2.75rem]"
              style={cssVars({
                "--shine-base": "var(--color-wine-700)",
                "--shine-light": "#d0848f",
                "--shine-delay": "3.7s",
              })}
            >
              VELLUTO
            </p>
            <p
              aria-hidden
              className="mt-4 pl-[0.38em] text-[0.55rem] uppercase tracking-[0.38em] text-wine-800/80 sm:text-[0.62rem]"
            >
              lingerie • sleepwear • swimwear
            </p>
            <Divider animate className="mt-5 text-wine-700/80" style={cssVars({ "--d": "1.2s" })} />
          </div>
        </div>

        <div>
          <SectionTitle id="sobre-titulo" script="sobre a" title="velluto" align="start" />
          <div className="mt-8 max-w-lg space-y-4 text-[0.95rem] leading-relaxed text-ink/80 md:text-base">
            <p {...reveal("up", 300)}>
              <em className="font-serif text-lg text-wine-700">Velluto</em> é veludo em italiano:
              macio, elegante e cheio de presença. É assim que a gente quer que você se sinta.
            </p>
            <p {...reveal("up", 400)}>
              Rendas, bordados, cetim e laços: cada peça tem aquele detalhe que faz o look começar por
              dentro, do dia a dia ao grande dia.
            </p>
            <p {...reveal("up", 500)}>Atendemos {contact.region}, com pedidos direto pelo WhatsApp.</p>
          </div>
          <p {...reveal("blur", 650)} className="mt-8">
            <span
              className="shine-text font-serif text-3xl font-light italic"
              style={cssVars({ "--shine-base": "var(--color-wine-700)", "--shine-light": "#d0848f" })}
            >
              delicada nos detalhes.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
