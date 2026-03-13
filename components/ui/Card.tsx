import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  as?: "div" | "article" | "section";
};

export function Card({ children, as: Component = "article" }: CardProps) {
  return (
    <Component className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-900/90 p-5 shadow-soft-glow transition duration-300 hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/80">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -inset-x-16 -top-24 h-40 bg-gradient-to-br from-sky-500/15 via-cyan-400/5 to-transparent blur-3xl" />
      </div>
      <div className="relative">{children}</div>
    </Component>
  );
}

