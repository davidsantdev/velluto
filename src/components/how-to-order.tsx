import { cssVars, reveal } from "@/lib/motion";
import { steps, whatsappLink } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { WhatsAppIcon } from "./icons";
import { SectionTitle } from "./section-title";
import { Wave } from "./wave";

export function HowToOrder() {
  return (
    <section
      id="como-comprar"
      aria-labelledby="como-comprar-titulo"
      className="grain light-sweep bg-wine-900 text-blush"
      style={cssVars({ "--sweep-delay": "4s" })}
    >
      <Wave position="top" />
      <div className="mx-auto max-w-6xl px-4 py-26 md:px-6 md:py-40">
        <SectionTitle id="como-comprar-titulo" script="seu" title="pedido" tone="dark" />
        <p
          {...reveal("up", 300)}
          className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-blush/80 md:text-base"
        >
          comprar na VELLUTO é simples: tudo acontece pelo WhatsApp.
        </p>

        <ol className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-0 md:divide-x md:divide-gold-500/20">
          {steps.map((step, index) => (
            <li
              key={step.title}
              {...reveal("up", 160 * index)}
              className="flex flex-col items-center px-6 text-center md:px-10"
            >
              {/* Os números reluzem um depois do outro, como o passo a passo. */}
              <span
                className="shine-text font-serif text-5xl font-light"
                style={cssVars({ "--shine-delay": `${2 + index * 0.45}s`, "--shine-period": "6s" })}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-2xl italic text-ivory">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-blush/80">{step.text}</p>
            </li>
          ))}
        </ol>

        <div {...reveal("zoom", 200)} className="mt-12 flex justify-center md:mt-16">
          <ButtonLink href={whatsappLink()} variant="gold">
            <WhatsAppIcon className="size-4" />
            fazer meu pedido
          </ButtonLink>
        </div>
      </div>
      <Wave position="bottom" />
    </section>
  );
}
