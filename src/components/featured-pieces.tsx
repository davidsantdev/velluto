import Image from "next/image";

import { reveal } from "@/lib/motion";
import { external, pieces, whatsappLink, type Piece } from "@/lib/site";
import { ArrowRightIcon, HeartIcon } from "./icons";
import { SectionTitle } from "./section-title";

export function FeaturedPieces() {
  return (
    <section id="destaques" aria-labelledby="destaques-titulo" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24">
        <SectionTitle id="destaques-titulo" script="peças em" title="destaque" />
        <p
          {...reveal("up", 300)}
          className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-ink/70 md:text-base"
        >
          bordados, rendas, cetim e laços. viu uma que é a sua cara? toque nela para pedir pelo
          WhatsApp.
        </p>
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-16 md:grid-cols-3 md:gap-x-8 md:gap-y-14">
          {pieces.map((piece, index) => (
            // Atraso pela coluna (de 3 no computador), para a linha entrar em cascata.
            <PieceCard key={piece.name} piece={piece} delay={(index % 3) * 130} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function PieceCard({ piece, delay }: { piece: Piece; delay: number }) {
  return (
    <li {...reveal("up", delay)}>
      <a href={whatsappLink(piece.message)} {...external} className="group block">
        <div {...reveal("image", delay + 80)} className="hover-glint relative aspect-[4/5] overflow-hidden bg-cream">
          <div className="reveal-zoom absolute inset-0">
            <Image
              src={piece.image}
              alt={piece.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 30vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          {piece.badge && (
            <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full bg-wine-700 px-2.5 py-1 text-[0.56rem] font-medium uppercase tracking-[0.2em] text-ivory md:left-4 md:top-4 md:px-3 md:text-[0.62rem]">
              <HeartIcon className="size-2.5 text-gold-300" />
              {piece.badge}
            </span>
          )}
        </div>
        <h3 className="mt-4 font-serif text-xl leading-tight text-wine-800 md:text-2xl">{piece.name}</h3>
        <p className="mt-1 text-[0.8rem] leading-relaxed text-ink/70 md:text-sm">{piece.description}</p>
        <span className="mt-3 inline-flex items-center gap-2 text-[0.64rem] font-medium uppercase tracking-[0.22em] text-wine-700">
          eu quero
          <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </a>
    </li>
  );
}
