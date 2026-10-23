import Image from "next/image";

import { contact, external, instagramPosts } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { InstagramIcon } from "./icons";
import { SectionTitle } from "./section-title";

export function InstagramFeed() {
  return (
    <section id="instagram" aria-labelledby="instagram-titulo" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <SectionTitle id="instagram-titulo" script="siga no" title="instagram" />
        <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-ink/70 md:text-base">
          novidades, bastidores e os feedbacks de quem já usa VELLUTO.
        </p>

        <ul className="mt-10 grid grid-cols-3 gap-1.5 md:mt-14 md:grid-cols-6 md:gap-3">
          {instagramPosts.map((post) => (
            <li key={post.alt}>
              <a
                href={contact.instagramUrl}
                {...external}
                className="group relative block aspect-square overflow-hidden bg-cream"
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 16vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="sr-only"> (ver no Instagram)</span>
                <span className="absolute inset-0 grid place-items-center bg-wine-900/0 text-ivory opacity-0 transition group-hover:bg-wine-900/45 group-hover:opacity-100">
                  <InstagramIcon className="size-6" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center md:mt-14">
          <ButtonLink href={contact.instagramUrl} variant="outline-wine">
            <InstagramIcon className="size-4" />
            seguir {contact.instagramHandle}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
