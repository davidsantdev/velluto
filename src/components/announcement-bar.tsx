import { announcements } from "@/lib/site";
import { Sparkle } from "./ornaments";

// Três voltas por cópia para a faixa cobrir telas largas sem buraco no loop.
const loop = [...announcements, ...announcements, ...announcements];

export function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-wine-900 text-blush">
      <p className="sr-only">{announcements.join(" · ")}</p>
      <div aria-hidden className="flex w-max animate-marquee py-2.5 motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {loop.map((text, index) => (
              <li
                key={index}
                className="flex items-center gap-5 pl-5 text-[0.62rem] uppercase tracking-[0.3em]"
              >
                {text}
                <Sparkle className="size-2 text-gold-500" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
