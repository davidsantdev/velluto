import { contact, external, navLinks, whatsappLink } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function SiteHeader() {
  return (
    <header className="bg-ivory">
      {/* Em telas baixas o cabeçalho encolhe, para o topo e as linhas caberem numa tela só. */}
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 py-4 md:px-6 md:py-5 md:[@media(max-height:700px)]:py-3">
        <a
          href={contact.instagramUrl}
          {...external}
          aria-label={`${contact.instagramHandle} no Instagram`}
          className="flex items-center gap-2 justify-self-start text-wine-700 transition-colors hover:text-wine-600"
        >
          <InstagramIcon className="size-5" />
          <span className="hidden text-[0.68rem] uppercase tracking-[0.22em] md:inline">
            {contact.instagramHandle}
          </span>
        </a>

        <a
          href="#inicio"
          className="pl-[0.38em] font-serif text-[1.65rem] leading-none tracking-[0.38em] text-wine-800 md:text-[2rem]"
        >
          VELLUTO
        </a>

        <a
          href={whatsappLink()}
          {...external}
          aria-label="fale conosco pelo WhatsApp"
          className="flex items-center gap-2 justify-self-end text-wine-700 transition-colors hover:text-wine-600"
        >
          <span className="hidden text-[0.68rem] uppercase tracking-[0.22em] md:inline">fale conosco</span>
          <WhatsAppIcon className="size-5" />
        </a>
      </div>

      <nav aria-label="Seções do site" className="border-y border-wine-900/10">
        <ul className="no-scrollbar mx-auto flex max-w-6xl gap-6 overflow-x-auto px-4 py-3 md:justify-center md:gap-12 md:[@media(max-height:700px)]:py-2">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="text-[0.66rem] uppercase tracking-[0.22em] text-ink/75 transition-colors hover:text-wine-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
