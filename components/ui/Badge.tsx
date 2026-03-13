import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/90 px-2.5 py-1 text-xs font-medium text-slate-200 shadow-sm shadow-slate-900/80">
      {children}
    </span>
  );
}

