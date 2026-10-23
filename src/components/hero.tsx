import { contact, whatsappLink } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { Emblem } from "./emblem";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { Divider } from "./ornaments";

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="velvet overflow-hidden">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center md:py-24">
        <Emblem className="h-36 w-auto text-gold-500 md:h-48" />

        <h1
          id="hero-titulo"
          className="mt-8 pl-[0.4em] font-serif text-[2.6rem] font-normal leading-none tracking-[0.4em] text-gold-500 sm:text-6xl md:text-7xl"
        >
          VELLUTO
        </h1>

        <p className="mt-5 text-[0.6rem] uppercase tracking-[0.38em] text-blush sm:text-xs">
          lingerie <span className="mx-1.5 text-gold-500">•</span> sleepwear{" "}
          <span className="mx-1.5 text-gold-500">•</span> swimwear
        </p>

        <Divider className="mt-7 text-gold-500" />

        <p className="mt-8 font-serif text-2xl font-light italic text-blush md:text-3xl">
          o look começa pela lingerie.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
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
