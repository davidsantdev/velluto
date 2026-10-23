type WaveProps = {
  /** Borda da seção vinho onde a onda fica. */
  position: "top" | "bottom";
  /** Cor da seção vizinha, como classe `text-*`. */
  className?: string;
};

/**
 * Fica dentro da seção vinho, pintada com a cor da vizinha: assim a textura de
 * veludo passa por baixo da curva e não marca emenda entre as seções.
 */
export function Wave({ position, className = "text-ivory" }: WaveProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`absolute inset-x-0 h-12 w-full md:h-20 ${
        position === "top" ? "top-0 -scale-y-100" : "bottom-0"
      } ${className}`}
    >
      <path d="M0 70C180 118 420 120 720 74 1010 30 1250 22 1440 58V120H0z" fill="currentColor" />
    </svg>
  );
}
