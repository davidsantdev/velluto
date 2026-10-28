import type { CSSProperties } from "react";

import { cssVars } from "@/lib/motion";
import { sparklePath, type Point } from "./ornaments";

type Curve = [Point, Point, Point, Point];

const n = (value: number) => Math.round(value * 100) / 100;
const pt = ([x, y]: Point) => `${n(x)} ${n(y)}`;
const rad = (deg: number) => (deg * Math.PI) / 180;

// Ângulos em graus, no sentido horário a partir de "para cima" (como o rotate() do SVG).
function toward([x, y]: Point, angle: number, distance: number): Point {
  return [x + Math.sin(rad(angle)) * distance, y - Math.cos(rad(angle)) * distance];
}

function angleOf(dx: number, dy: number) {
  return (Math.atan2(dx, -dy) * 180) / Math.PI;
}

function pointAt([a, b, c, d]: Curve, t: number): Point {
  const u = 1 - t;
  const k = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
  return [
    k[0] * a[0] + k[1] * b[0] + k[2] * c[0] + k[3] * d[0],
    k[0] * a[1] + k[1] * b[1] + k[2] * c[1] + k[3] * d[1],
  ];
}

function angleAt([a, b, c, d]: Curve, t: number) {
  const u = 1 - t;
  const dx = 3 * u * u * (b[0] - a[0]) + 6 * u * t * (c[0] - b[0]) + 3 * t * t * (d[0] - c[0]);
  const dy = 3 * u * u * (b[1] - a[1]) + 6 * u * t * (c[1] - b[1]) + 3 * t * t * (d[1] - c[1]);
  return angleOf(dx, dy);
}

const curve = ([a, b, c, d]: Curve) => `M${pt(a)}C${pt(b)} ${pt(c)} ${pt(d)}`;

// Formas desenhadas apontando para cima a partir da origem.
function petal(length: number) {
  const base = length * 0.2;
  const neck = base * 0.55;
  const width = length * 0.36;
  return (
    `M${n(-neck)} ${n(-base)}` +
    `C${n(-width)} ${n(-length * 0.42)} ${n(-width * 0.9)} ${n(-length * 0.92)} 0 ${n(-length)}` +
    `C${n(width * 0.9)} ${n(-length * 0.92)} ${n(width)} ${n(-length * 0.42)} ${n(neck)} ${n(-base)}`
  );
}

function leaf(length: number) {
  const width = length * 0.3;
  return (
    `M0 0C${n(width)} ${n(-length * 0.3)} ${n(width * 0.85)} ${n(-length * 0.78)} 0 ${n(-length)}` +
    `C${n(-width * 0.85)} ${n(-length * 0.78)} ${n(-width)} ${n(-length * 0.3)} 0 0Z` +
    `M0 ${n(-length * 0.12)}V${n(-length * 0.8)}`
  );
}

function bud(length: number) {
  const width = length * 0.42;
  return (
    `M0 0C${n(-width)} ${n(-length * 0.3)} ${n(-width * 0.7)} ${n(-length * 0.85)} 0 ${n(-length)}` +
    `C${n(width * 0.7)} ${n(-length * 0.85)} ${n(width)} ${n(-length * 0.3)} 0 0Z` +
    `M0 0Q${n(-length * 0.45)} ${n(-length * 0.1)} ${n(-length * 0.55)} ${n(-length * 0.5)}` +
    `M0 0Q${n(length * 0.45)} ${n(-length * 0.1)} ${n(length * 0.55)} ${n(-length * 0.5)}`
  );
}

const BASE: Point = [60, 156];

// `stemAngle` aponta do miolo para o caule; as pétalas giram para deixar um vão ali.
const FLOWERS: { center: Point; size: number; stemAngle: number }[] = [
  { center: [60, 56], size: 16.5, stemAngle: 180 },
  { center: [31, 88], size: 13, stemAngle: 150 },
  { center: [89, 79], size: 12.5, stemAngle: 210 },
];

const STEMS: Curve[] = FLOWERS.map(({ center, size, stemAngle }) => {
  const end = toward(center, stemAngle, size * 0.92);
  const lead: Point = [
    BASE[0] + (end[0] - BASE[0]) * 0.15,
    BASE[1] - (BASE[1] - end[1]) * 0.4,
  ];
  return [BASE, lead, toward(end, stemAngle, size * 1.6), end];
});

const LEAVES = [
  { stem: 0, t: 0.3, side: -1, length: 15 },
  { stem: 0, t: 0.55, side: 1, length: 14 },
  { stem: 0, t: 0.74, side: -1, length: 10 },
  { stem: 1, t: 0.58, side: -1, length: 12 },
  { stem: 2, t: 0.52, side: 1, length: 12 },
].map(({ stem, t, side, length }) => ({
  d: leaf(length),
  transform: `translate(${pt(pointAt(STEMS[stem], t))}) rotate(${n(angleAt(STEMS[stem], t) + side * 48)})`,
}));

const BUDS = [
  { stem: 2, t: 0.32, dx: 16, dy: -7, length: 9 },
  { stem: 1, t: 0.32, dx: -15, dy: -5, length: 8.5 },
].map(({ stem, t, dx, dy, length }) => {
  const start = pointAt(STEMS[stem], t);
  const end: Point = [start[0] + dx, start[1] + dy];
  const pull: Point = [end[0] - dx * 0.25, end[1] + 4];
  return {
    branch: curve([start, toward(start, angleAt(STEMS[stem], t), 5), pull, end]),
    d: bud(length),
    transform: `translate(${pt(end)}) rotate(${n(angleOf(end[0] - pull[0], end[1] - pull[1]))})`,
  };
});

const BLOOMS = FLOWERS.map(({ center, size, stemAngle }) => ({
  transform: `translate(${pt(center)}) rotate(${stemAngle - 36})`,
  petal: petal(size),
  vein: `M0 ${n(-size * 0.4)}V${n(-size * 0.68)}`,
  // Estames saem pelos vãos entre as pétalas, sem cruzar os contornos.
  stamen: `M0 ${n(-size * 0.2)}V${n(-size * 0.4)}`,
  anther: { cy: n(-size * 0.44), r: n(size * 0.045) },
  heart: n(size * 0.16),
}));

const TAILS = ["M60 156C60 160 59.6 163 59 166", "M60 156C60.6 159.5 61.5 162.5 63 165"];

// Moldura em arco como path (e não <rect>), começando no topo, para o traço se desenhar.
const FRAME = "M60 2A58 58 0 0 1 118 60V140A58 58 0 0 1 2 140V60A58 58 0 0 1 60 2Z";

const circlePath = (r: number) => `M0 ${-r}A${r} ${r} 0 1 1 0 ${r}A${r} ${r} 0 1 1 0 ${-r}`;

// Atraso de cada grupo no desenho: moldura, caules, folhas e por fim as flores.
const delay = (seconds: number) => cssVars({ "--draw-delay": `${seconds}s` });

function EmblemArt({ className, title }: { className: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path d={FRAME} pathLength={1} strokeWidth="1.1" style={cssVars({ "--draw-period": "2.2s" })} />
      <g strokeWidth="0.85">
        <g style={delay(0.3)}>
          {STEMS.map((stem, i) => (
            <path key={`stem-${i}`} d={curve(stem)} pathLength={1} />
          ))}
          {TAILS.map((d) => (
            <path key={d} d={d} pathLength={1} />
          ))}
        </g>
        <g style={delay(0.7)}>
          {LEAVES.map((leafShape) => (
            <path key={leafShape.transform} {...leafShape} pathLength={1} />
          ))}
          {BUDS.map(({ branch, d, transform }) => (
            <g key={transform}>
              <path d={branch} pathLength={1} />
              <path d={d} transform={transform} pathLength={1} />
            </g>
          ))}
        </g>
        <g style={delay(0.9)}>
          {BLOOMS.map((bloom) => (
            <g key={bloom.transform} transform={bloom.transform}>
              {[0, 72, 144, 216, 288].map((turn) => (
                <g key={turn} transform={`rotate(${turn})`}>
                  <path d={bloom.petal} pathLength={1} />
                  <path d={bloom.vein} strokeWidth="0.5" pathLength={1} />
                  <g transform="rotate(36)" strokeWidth="0.5">
                    <path d={bloom.stamen} pathLength={1} />
                    <circle cx="0" {...bloom.anther} fill="currentColor" stroke="none" className="draw-fill" />
                  </g>
                </g>
              ))}
              <path d={circlePath(bloom.heart)} pathLength={1} />
            </g>
          ))}
        </g>
      </g>
      <g fill="currentColor" stroke="none" style={cssVars({ "--fill-delay": "1.9s" })}>
        <path d={sparklePath([60, 26], 5.5)} className="draw-fill" />
        <path d={sparklePath([60, 178], 5.5)} className="draw-fill" />
      </g>
    </svg>
  );
}

type EmblemProps = {
  /** Classes de tamanho e cor; a proporção 3:5 vem do próprio emblema. */
  className?: string;
  /** Quando informado, o emblema é anunciado por leitores de tela. */
  title?: string;
  /** O traço se desenha ao aparecer. */
  draw?: boolean;
  /** Um reflexo claro atravessa o dourado de tempos em tempos. */
  shine?: boolean;
  style?: CSSProperties;
};

export function Emblem({ className = "", title, draw = false, shine = false, style }: EmblemProps) {
  return (
    <span className={`relative block aspect-[3/5] ${className}`} style={style}>
      <EmblemArt className={`size-full ${draw ? "draw" : ""}`} title={title} />
      {shine && <EmblemArt className="glint absolute inset-0 size-full" />}
    </span>
  );
}
