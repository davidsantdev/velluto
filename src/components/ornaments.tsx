import type { CSSProperties } from "react";

export type Point = [number, number];

/** Estrela de quatro pontas do logo, centrada em `[x, y]` com raio `r`. */
export function sparklePath([x, y]: Point, r: number) {
  const k = r * 0.16;
  return [
    `M${x} ${y - r}`,
    `C${x + k} ${y - k} ${x + k} ${y - k} ${x + r} ${y}`,
    `C${x + k} ${y + k} ${x + k} ${y + k} ${x} ${y + r}`,
    `C${x - k} ${y + k} ${x - k} ${y + k} ${x - r} ${y}`,
    `C${x - k} ${y - k} ${x - k} ${y - k} ${x} ${y - r}Z`,
  ].join("");
}

export function Sparkle({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="-10 -10 20 20" fill="currentColor" aria-hidden className={className} style={style}>
      <path d={sparklePath([0, 0], 10)} />
    </svg>
  );
}

type DividerProps = {
  className?: string;
  /** As linhas crescem a partir da estrela ao aparecer. */
  animate?: boolean;
  style?: CSSProperties;
};

export function Divider({ className = "", animate = false, style }: DividerProps) {
  return (
    <div
      aria-hidden
      className={`flex items-center justify-center gap-3 ${animate ? "divider-animate" : ""} ${className}`}
      style={style}
    >
      <span className="divider-line h-px w-14 origin-right bg-current opacity-60 md:w-20" />
      <Sparkle className="twinkle size-3" />
      <span className="divider-line h-px w-14 origin-left bg-current opacity-60 md:w-20" />
    </div>
  );
}
