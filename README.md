# VELLUTO

Site de apresentação da VELLUTO ([@donnavelluto](https://www.instagram.com/donnavelluto/)), lingerie, sleepwear e swimwear em Novo Repartimento e região. Os pedidos são feitos pelo WhatsApp.

Feito com Next.js 16, React 19 e Tailwind CSS 4. A página é toda estática.

## Rodando

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # versão de produção
```

## Onde editar

| O quê | Onde |
| --- | --- |
| WhatsApp, Instagram, região, faixa de avisos, categorias, peças em destaque, passos do pedido, grade do Instagram | `src/lib/site.ts` |
| Fotos | `src/assets/` (peças em `pecas/`, grade do Instagram em `instagram/`) |
| Cores e textura de veludo | `src/app/globals.css` |
| Fontes, título e descrição (Google e prévia de link) | `src/app/layout.tsx` |
| Prévia de link, favicon e ícone do iPhone | `src/app/opengraph-image.jpg`, `src/app/icon.svg`, `src/app/apple-icon.png` |

Para adicionar uma peça, coloque a foto em `src/assets/pecas/`, importe-a em `src/lib/site.ts` e acrescente um item em `pieces`. Cada peça tem a própria mensagem de WhatsApp.

## Logo

O emblema em `src/components/emblem.tsx` é uma recriação em SVG do logo da marca. Com o arquivo original (SVG ou PNG em alta resolução), ele pode ser substituído.

## Publicando

Na Vercel funciona sem configuração. Em outra hospedagem, defina `metadataBase` em `src/app/layout.tsx` com o domínio do site (por exemplo, `metadataBase: new URL("https://seudominio.com.br")`). Sem isso, a imagem de prévia não aparece quando o link é compartilhado.
