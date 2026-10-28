import { cssVars, reveal } from "@/lib/motion";
import { Sparkle } from "./ornaments";

type SectionTitleProps = {
  id?: string;
  script: string;
  title: string;
  tone?: "light" | "dark";
  align?: "center" | "start";
};

/** Palavra em script sobre título em caixa alta, como no "recent REVIEWS" da referência. */
export function SectionTitle({ id, script, title, tone = "light", align = "center" }: SectionTitleProps) {
  const dark = tone === "dark";
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment}`}>
      <span {...reveal("zoom")}>
        <Sparkle className={`twinkle size-3 ${dark ? "text-gold-500" : "text-gold-600"}`} />
      </span>
      <h2 id={id} className={`mt-2 flex flex-col ${alignment}`}>
        <span
          {...reveal("left", 120)}
          className={`relative z-10 -mb-1 font-script text-5xl leading-none md:-mb-1.5 md:text-6xl ${
            align === "center" ? "-translate-x-[18%]" : "translate-x-1"
          } ${dark ? "text-gold-400" : "text-wine-600"}`}
        >
          {script}
        </span>
        <span {...reveal("blur", 240)}>
          <span
            className="shine-text block font-serif text-4xl font-normal uppercase leading-none tracking-[0.18em] md:text-6xl"
            style={cssVars(
              dark
                ? { "--shine-base": "var(--color-ivory)", "--shine-light": "var(--color-gold-300)", "--shine-period": "9s" }
                : { "--shine-base": "var(--color-wine-800)", "--shine-light": "#c4687a", "--shine-period": "9s" },
            )}
          >
            {title}
          </span>
        </span>
      </h2>
    </div>
  );
}
