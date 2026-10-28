import { external, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      {...external}
      aria-label="Pedir pelo WhatsApp"
      className="float-pulse fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-wine-700 text-ivory shadow-lg shadow-wine-950/30 ring-2 ring-gold-500 transition-transform hover:scale-105 md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
