export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80">
      <div className="section-container flex flex-col gap-3 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Saim Bahaeddine. Portfolio data \& tech.
        </p>
        <p className="text-slate-600">
          Construit avec Next.js, TypeScript \& Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

