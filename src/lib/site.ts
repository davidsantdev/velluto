import type { StaticImageData } from "next/image";

import calcinhas from "@/assets/pecas/calcinhas.jpg";
import conjuntoEleonor from "@/assets/pecas/conjunto-eleonor.jpg";
import linhaNoiva from "@/assets/pecas/linha-noiva.jpg";
import linhaPremium from "@/assets/pecas/linha-premium.jpg";
import pijamas from "@/assets/pecas/pijamas.jpg";
import sexshop from "@/assets/pecas/sexshop.jpg";
import compraSimDeusa from "@/assets/instagram/compra-sim-deusa.jpg";
import eleonorDetalhe from "@/assets/instagram/eleonor-detalhe.jpg";
import facaAcontecer from "@/assets/instagram/faca-acontecer.jpg";
import personalidade from "@/assets/instagram/personalidade.jpg";
import pijamaChampanhe from "@/assets/instagram/pijama-champanhe.jpg";
import rendaCoracoes from "@/assets/instagram/renda-coracoes.jpg";

export const contact = {
  whatsappNumber: "5594991318190",
  whatsappDisplay: "(94) 99131-8190",
  instagramHandle: "@donnavelluto",
  instagramUrl: "https://www.instagram.com/donnavelluto/",
  region: "Novo Repartimento e região",
  state: "Pará",
};

export const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function whatsappLink(
  message = "Oi! Vim pelo site da VELLUTO e quero fazer um pedido 💗",
) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const announcements = [
  "pedidos pelo WhatsApp",
  contact.region,
  "delicada nos detalhes",
  `siga ${contact.instagramHandle}`,
  "lingerie • sleepwear • swimwear",
];

export const navLinks = [
  { href: "#colecoes", label: "coleções" },
  { href: "#destaques", label: "destaques" },
  { href: "#como-comprar", label: "como comprar" },
  { href: "#sobre", label: "sobre" },
  { href: "#contato", label: "contato" },
];

export const categories = [
  {
    name: "lingerie",
    detail: "conjuntos, rendas e bordados",
    message: "Oi! Vim pelo site e quero ver as opções de lingerie 💗",
  },
  {
    name: "sleepwear",
    detail: "pijamas, camisolas e slips",
    message: "Oi! Vim pelo site e quero ver as opções de sleepwear 💗",
  },
  {
    name: "swimwear",
    detail: "moda praia",
    message: "Oi! Vim pelo site e quero ver as opções de moda praia 💗",
  },
] as const;

export type Piece = {
  name: string;
  description: string;
  image: StaticImageData;
  alt: string;
  message: string;
  badge?: string;
};

// A ordem alterna as cores das fotos para a grade não ficar repetitiva.
export const pieces: Piece[] = [
  {
    name: "Calcinhas",
    description: "Modelos delicados e confortáveis, com detalhes que fazem toda a diferença.",
    image: calcinhas,
    alt: "Calcinhas preta, branca e vermelha com detalhe de pérolas e etiquetas VELLUTO, sobre pelúcia creme",
    message: "Oi! Vi as calcinhas no site e quero saber mais 💗",
  },
  {
    name: "Pijamas",
    description:
      "Peças que unem conforto, delicadeza e elegância para tornar suas noites ainda mais especiais.",
    image: pijamas,
    alt: "Pijamas de cetim nas cores vinho, chocolate e champanhe com etiqueta VELLUTO, sobre pelúcia creme",
    message: "Oi! Vi os pijamas no site e quero saber mais 💗",
    badge: "novidade",
  },
  {
    name: "Linha noiva",
    description: "A delicadeza e elegância dos conjuntos brancos.",
    image: linhaNoiva,
    alt: "Conjunto branco de renda e tule com laços de cetim e pingente de coração dourado, sobre pelúcia",
    message: "Oi! Vi a linha noiva no site e quero saber mais 🤍",
    badge: "bride era",
  },
  {
    name: "Conjunto Eleonor",
    description:
      "Tule bordado delicado, disponível em cores encantadoras, com laços de cetim que completam cada detalhe.",
    image: conjuntoEleonor,
    alt: "Conjunto Eleonor em tule bordado nas cores vermelho, branco, preto, marrom e rosé, sobre pelúcia",
    message: "Oi! Vi o Conjunto Eleonor no site e quero saber mais 💗",
    badge: "novidade",
  },
  {
    name: "Linha premium",
    description: "Peças sofisticadas, com acabamentos especiais e elegância em cada detalhe.",
    image: linhaPremium,
    alt: "Conjunto preto de renda com bojo de cetim vestido em um busto de manequim",
    message: "Oi! Vi a linha premium no site e quero saber mais 🖤",
  },
  {
    name: "Sexshop",
    description: "Produtos íntimos para despertar novas sensações.",
    image: sexshop,
    alt: "Plugs de metal com pedras em formato de coração vermelha, rosa e roxa, sobre pelúcia creme",
    message: "Oi! Vim pelo site e quero ver os produtos do sexshop 💗",
  },
];

export const steps = [
  {
    title: "escolha.",
    text: "dê uma olhadinha nas peças aqui e no nosso Instagram e separe as suas favoritas.",
  },
  {
    title: "chame no WhatsApp.",
    text: "mande a peça e o seu tamanho. a gente tira todas as dúvidas, com carinho.",
  },
  {
    title: "receba.",
    text: `combinamos pagamento e entrega pra ${contact.region}.`,
  },
];

export const instagramPosts: { image: StaticImageData; alt: string }[] = [
  {
    image: compraSimDeusa,
    alt: "Post com a frase: dinheiro volta, mas algumas peças saem do estoque para sempre. Compra sim, deusa!",
  },
  { image: rendaCoracoes, alt: "Conjunto branco de renda com argolas de coração douradas" },
  { image: personalidade, alt: "Conjunto preto de tiras em um busto de manequim" },
  { image: facaAcontecer, alt: "Post com a frase: faça acontecer, ninguém fará por você." },
  { image: eleonorDetalhe, alt: "Detalhe do bordado rosé e do laço de cetim do Conjunto Eleonor" },
  { image: pijamaChampanhe, alt: "Pijama de cetim champanhe com etiqueta VELLUTO" },
];
