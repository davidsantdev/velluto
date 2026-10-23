import { external } from "@/lib/site";

const variants = {
  gold: "bg-gold-500 text-wine-900 hover:bg-gold-300",
  wine: "bg-wine-700 text-ivory hover:bg-wine-600",
  "outline-gold": "border border-gold-500/60 text-gold-300 hover:border-gold-400 hover:bg-gold-500/10",
  "outline-wine": "border border-wine-700/40 text-wine-700 hover:border-wine-700 hover:bg-wine-700/5",
};

type ButtonLinkProps = {
  href: string;
  variant?: keyof typeof variants;
  children: React.ReactNode;
};

export function ButtonLink({ href, variant = "wine", children }: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...external}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-colors ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
