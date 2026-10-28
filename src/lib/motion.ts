import type { CSSProperties } from "react";

export type RevealVariant = "up" | "fade" | "blur" | "zoom" | "left" | "image";

/**
 * Marca um elemento para aparecer ao entrar na tela (ver `motion.css` e
 * `RevealObserver`). Não use em elementos que já têm `transition` própria.
 */
export function reveal(variant: RevealVariant = "up", delayMs = 0) {
  return {
    "data-reveal": variant,
    style: { "--reveal-delay": `${delayMs}ms` } as CSSProperties,
  };
}

/** Variáveis CSS como `style`, para atrasos e períodos de animação. */
export function cssVars(vars: Record<`--${string}`, string>) {
  return vars as CSSProperties;
}
