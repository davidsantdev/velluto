import Image from "next/image";

import lacosBrancos from "@/assets/lacos-brancos.jpg";
import { contact } from "@/lib/site";
import { SectionTitle } from "./section-title";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="bg-ivory">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 py-16 md:grid-cols-2 md:gap-20 md:px-6 md:py-24">
        {/* Janela em arco, ecoando o contorno do emblema */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
          <div aria-hidden className="absolute -inset-3 rounded-t-full border border-gold-600/50" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-cream">
            <Image
              src={lacosBrancos}
              alt="Lingeries brancas com laços de cetim penduradas em cabides, com etiqueta VELLUTO"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <SectionTitle id="sobre-titulo" script="sobre a" title="velluto" align="start" />
          <div className="mt-8 max-w-lg space-y-4 text-[0.95rem] leading-relaxed text-ink/80 md:text-base">
            <p>
              <em className="font-serif text-lg text-wine-700">Velluto</em> é veludo em italiano:
              macio, elegante e cheio de presença. É assim que a gente quer que você se sinta.
            </p>
            <p>
              Rendas, bordados, cetim e laços: cada peça tem aquele detalhe que faz o look começar por
              dentro, do dia a dia ao grande dia.
            </p>
            <p>Atendemos {contact.region}, com pedidos direto pelo WhatsApp.</p>
          </div>
          <p className="mt-8 font-serif text-3xl font-light italic text-wine-700">delicada nos detalhes.</p>
        </div>
      </div>
    </section>
  );
}
