import { cssVars, reveal } from "@/lib/motion";
import { contact, external, whatsappLink } from "@/lib/site";
import { Emblem } from "./emblem";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { Divider } from "./ornaments";
import { Wave } from "./wave";

export function SiteFooter() {
  return (
    <footer
      id="contato"
      aria-labelledby="contato-titulo"
      className="grain light-sweep bg-wine-900 text-blush"
      style={cssVars({ "--sweep-delay": "6s" })}
    >
      <Wave position="top" />
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-24 md:px-6 md:pt-34">
        {/* O emblema se desenha quando o rodapé aparece. */}
        <div {...reveal("fade")} className="flex flex-col items-center text-center">
          <Emblem draw shine className="h-24 text-gold-500 md:h-28" title="VELLUTO" />
          <p
            className="shine-text mt-6 pl-[0.4em] font-serif text-4xl leading-none tracking-[0.4em] md:text-5xl"
            style={cssVars({ "--shine-delay": "2.8s" })}
          >
            VELLUTO
          </p>
          <p className="mt-4 text-[0.58rem] uppercase tracking-[0.38em] md:text-[0.66rem]">
            lingerie • sleepwear • swimwear
          </p>
          <Divider animate className="mt-6 text-gold-500" style={cssVars({ "--d": "1.2s" })} />
        </div>

        <h2
          id="contato-titulo"
          {...reveal("blur", 200)}
          className="mt-12 text-center font-serif text-3xl font-light italic text-ivory md:text-4xl"
        >
          vamos conversar?
        </h2>

        <ul className="mt-10 grid gap-10 text-center md:grid-cols-3 md:gap-6">
          <li {...reveal("up", 300)}>
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold-400">pedidos pelo WhatsApp</p>
            <a
              href={whatsappLink()}
              {...external}
              className="mt-3 inline-flex items-center gap-2.5 font-serif text-2xl text-ivory transition-colors hover:text-gold-300"
            >
              <WhatsAppIcon className="size-5 text-gold-500" />
              {contact.whatsappDisplay}
            </a>
          </li>
          <li {...reveal("up", 420)}>
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold-400">instagram</p>
            <a
              href={contact.instagramUrl}
              {...external}
              className="mt-3 inline-flex items-center gap-2.5 font-serif text-2xl text-ivory transition-colors hover:text-gold-300"
            >
              <InstagramIcon className="size-5 text-gold-500" />
              {contact.instagramHandle}
            </a>
          </li>
          <li {...reveal("up", 540)}>
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold-400">atendimento</p>
            <p className="mt-3 font-serif text-2xl text-ivory">{contact.region}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-blush/70">{contact.state}</p>
          </li>
        </ul>

        <p className="mt-14 border-t border-gold-500/15 pt-6 text-center text-[0.58rem] uppercase tracking-[0.28em] text-blush/60">
          © VELLUTO · delicada nos detalhes.
        </p>
      </div>
    </footer>
  );
}
