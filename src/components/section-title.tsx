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
      <Sparkle className={`size-3 ${dark ? "text-gold-500" : "text-gold-600"}`} />
      <h2 id={id} className={`mt-2 flex flex-col ${alignment}`}>
        <span
          className={`relative z-10 -mb-1 font-script text-5xl leading-none md:-mb-1.5 md:text-6xl ${
            align === "center" ? "-translate-x-[18%]" : "translate-x-1"
          } ${dark ? "text-gold-400" : "text-wine-600"}`}
        >
          {script}
        </span>
        <span
          className={`font-serif text-4xl font-normal uppercase leading-none tracking-[0.18em] md:text-6xl ${
            dark ? "text-ivory" : "text-wine-800"
          }`}
        >
          {title}
        </span>
      </h2>
    </div>
  );
}
