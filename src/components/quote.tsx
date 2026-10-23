import { contact } from "@/lib/site";
import { Sparkle } from "./ornaments";

export function Quote() {
  return (
    <section aria-label="Frase da VELLUTO" className="bg-sand">
      <figure className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <Sparkle className="mx-auto size-3 text-wine-700" />
        <blockquote className="mt-8 font-serif text-[2rem] font-light leading-[1.15] text-ink md:text-6xl">
          <p>
            <em>mova-se</em>
            <br />
            como se tudo fosse dar certo, <em>porque vai.</em>
          </p>
        </blockquote>
        <figcaption className="mt-8 text-[0.66rem] uppercase tracking-[0.3em] text-wine-700">
          {contact.instagramHandle}
        </figcaption>
      </figure>
    </section>
  );
}
