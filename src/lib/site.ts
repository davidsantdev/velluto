import type { StaticImageData } from "next/image";

import chocolatinho from "@/assets/pecas/chocolatinho.jpg";
import conjuntoDiana from "@/assets/pecas/conjunto-diana.jpg";
import conjuntoEleonor from "@/assets/pecas/conjunto-eleonor.jpg";
import noiva from "@/assets/pecas/noiva.jpg";
import pijamasCetim from "@/assets/pecas/pijamas-cetim.jpg";
import pretinho from "@/assets/pecas/pretinho.jpg";
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

export const pieces: Piece[] = [
  {
    name: "Pijamas em cetim",
    description: "cetim macio em vinho, chocolate e champanhe.",
    image: pijamasCetim,
    alt: "Pijamas de cetim nas cores vinho, chocolate e champanhe com etiqueta VELLUTO, sobre pelúcia creme",
    message: "Oi! Vi os pijamas em cetim no site e quero saber mais 💗",
    badge: "novidade",
  },
  {
    name: "Linha noiva",
    description: "tule bordado branco com coraçãozinho dourado.",
    image: noiva,
    alt: "Sutiã branco de tule bordado com flores e pingente de coração dourado, sobre pelúcia",
    message: "Oi! Vi a linha noiva no site e quero saber mais 🤍",
    badge: "bride era",
  },
  {
    name: "Conjunto Eleonor",
    description: "tule bordado em rosé, com laços de cetim.",
    image: conjuntoEleonor,
    alt: "Conjunto Eleonor em tule bordado rosé com laços de cetim, sobre pelúcia",
    message: "Oi! Vi o Conjunto Eleonor no site e quero saber mais 💗",
    badge: "novidade",
  },
  {
    name: "Conjunto Diana",
    description: "renda vermelha com lacinho no decote.",
    image: conjuntoDiana,
    alt: "Conjunto Diana em renda vermelha vestido em um busto de manequim",
    message: "Oi! Vi o Conjunto Diana no site e quero saber mais ❤️",
  },
  {
    name: "Chocolatinho",
    description: "bordado marrom bombom com laço de cetim.",
    image: chocolatinho,
    alt: "Conjunto marrom em tule bordado com laço de cetim, sobre pelúcia creme",
    message: "Oi! Vi o chocolatinho no site e quero saber mais 🤎",
  },
  {
    name: "Pretinho",
    description: "tule bordado preto, o clássico que nunca erra.",
    image: pretinho,
    alt: "Conjunto preto em tule bordado com etiqueta VELLUTO, sobre pelúcia creme",
    message: "Oi! Vi o pretinho no site e quero saber mais 🖤",
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
