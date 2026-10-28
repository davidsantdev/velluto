import { reveal } from "@/lib/motion";
import { contact } from "@/lib/site";
import { Sparkle } from "./ornaments";

export function Quote() {
  return (
    <section aria-label="Frase da VELLUTO" className="bg-sand">
      <figure className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <span {...reveal("zoom")} className="block">
          <Sparkle className="twinkle mx-auto size-3 text-wine-700" />
        </span>
        {/* A frase aparece em três tempos, como se fosse dita devagar. */}
        <blockquote className="mt-8 font-serif text-[2rem] font-light leading-[1.15] text-ink md:text-6xl">
          <p>
            <em {...reveal("blur", 100)} className="block">
              mova-se
            </em>
            <span {...reveal("blur", 450)} className="block">
              como se tudo fosse dar certo,
            </span>
            <em {...reveal("blur", 800)} className="block">
              porque vai.
            </em>
          </p>
        </blockquote>
        <figcaption
          {...reveal("fade", 1100)}
          className="mt-8 text-[0.66rem] uppercase tracking-[0.3em] text-wine-700"
        >
          {contact.instagramHandle}
        </figcaption>
      </figure>
    </section>
  );
}
