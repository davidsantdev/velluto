import { cssVars, reveal } from "@/lib/motion";
import { categories, external, whatsappLink } from "@/lib/site";
import { BikiniIcon, BraIcon, NightgownIcon } from "./icons";
import { Divider } from "./ornaments";

const icons = { lingerie: BraIcon, sleepwear: NightgownIcon, swimwear: BikiniIcon };

export function Categories() {
  return (
    <section id="colecoes" aria-labelledby="colecoes-titulo" className="bg-ivory">
      {/* No computador acompanha a altura da tela, para caber junto com o topo. */}
      <div className="mx-auto max-w-5xl px-4 pt-8 md:pt-[clamp(0.75rem,2.4svh,2.5rem)]">
        <div {...reveal("fade")}>
          <h2
            id="colecoes-titulo"
            className="pl-[0.3em] text-center text-xs font-medium uppercase tracking-[0.3em] text-wine-700 md:text-sm"
          >
            nossas linhas
          </h2>
          <Divider animate className="mt-3 text-gold-600" style={cssVars({ "--d": "0.2s" })} />
        </div>
        <ul className="mt-7 grid grid-cols-3 gap-2 md:mt-[clamp(0.75rem,2.4svh,2.25rem)] md:gap-10">
          {categories.map(({ name, detail, message }, index) => {
            const Icon = icons[name];
            return (
              <li key={name} {...reveal("up", 120 * index)}>
                <a
                  href={whatsappLink(message)}
                  {...external}
                  className="group flex flex-col items-center text-center"
                >
                  {/* As cápsulas reluzem em sequência, da esquerda para a direita. */}
                  <span
                    className="glint-sweep grid h-32 w-24 place-items-center rounded-full border border-gold-600/50 bg-cream text-wine-700 shadow-sm shadow-wine-900/5 transition duration-300 group-hover:-translate-y-1 group-hover:border-wine-700/60 group-hover:bg-blush/70 md:aspect-[17/24] md:h-[clamp(5rem,14svh,12rem)] md:w-auto"
                    style={cssVars({
                      "--glint-delay": `${2.5 + index * 0.35}s`,
                      "--glint-period": "7s",
                      "--glint-color": "rgb(255 255 255 / 0.75)",
                    })}
                  >
                    {/* ~45% da altura da cápsula, acompanhando o mesmo clamp. */}
                    <Icon className="draw size-14 md:size-[clamp(2.25rem,6.3svh,5.4rem)]" />
                  </span>
                  <span className="mt-4 pl-[0.26em] text-xs font-medium uppercase tracking-[0.26em] text-wine-800 md:mt-[clamp(0.5rem,1.6svh,1.25rem)] md:text-sm">
                    {name}
                  </span>
                  <span className="mt-1.5 text-balance font-serif text-[0.95rem] italic leading-snug text-ink/70 md:text-[clamp(0.95rem,2svh,1.25rem)] md:[@media(max-height:720px)]:hidden">
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
