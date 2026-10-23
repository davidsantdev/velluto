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

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="-10 -10 20 20" fill="currentColor" aria-hidden className={className}>
      <path d={sparklePath([0, 0], 10)} />
    </svg>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-14 bg-current opacity-60 md:w-20" />
      <Sparkle className="size-3" />
      <span className="h-px w-14 bg-current opacity-60 md:w-20" />
    </div>
  );
}
