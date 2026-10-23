import { categories, external, whatsappLink } from "@/lib/site";
import { BikiniIcon, BraIcon, NightgownIcon } from "./icons";

const icons = { lingerie: BraIcon, sleepwear: NightgownIcon, swimwear: BikiniIcon };

export function Categories() {
  return (
    <section id="colecoes" aria-labelledby="colecoes-titulo" className="bg-ivory">
      <div className="mx-auto max-w-5xl px-4 pt-14 md:pt-20">
        <h2
          id="colecoes-titulo"
          className="text-center text-[0.66rem] uppercase tracking-[0.3em] text-wine-700"
        >
          nossas linhas
        </h2>
        <ul className="mt-8 grid grid-cols-3 gap-2 md:mt-10 md:gap-8">
          {categories.map(({ name, detail, message }) => {
            const Icon = icons[name];
            return (
              <li key={name}>
                <a
                  href={whatsappLink(message)}
                  {...external}
                  className="group flex flex-col items-center text-center"
                >
                  <span className="grid h-28 w-20 place-items-center rounded-full border border-gold-600/50 bg-cream text-wine-700 transition-colors group-hover:border-wine-700/60 group-hover:bg-blush/70 md:h-36 md:w-26">
                    <Icon className="size-12 md:size-16" />
                  </span>
                  <span className="mt-4 text-[0.66rem] font-medium uppercase tracking-[0.26em] text-wine-800 md:text-xs">
                    {name}
                  </span>
                  <span className="mt-1.5 text-balance font-serif text-[0.88rem] italic leading-snug text-ink/70 md:text-lg">
                    {detail}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
