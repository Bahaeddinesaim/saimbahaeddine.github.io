import Link from "next/link";

const NAV_ITEMS = [
  { id: "about", label: "Profil" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "experience", label: "Parcours" },
  { id: "contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-40 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <div className="section-container flex h-16 items-center justify-between gap-6">
        <Link href="#hero" className="group flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 opacity-80 transition group-hover:opacity-100" />
          <div className="flex flex-col leading-none">
            <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Portfolio
            </span>
            <span className="text-sm font-semibold text-slate-100">
              Saim Bahaeddine
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium tracking-wide text-slate-300 transition hover:text-sky-300"
            >
              <span>{item.label}</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/cv/saim-bahaeddine-cv.pdf"
            className="hidden rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-950 shadow-md shadow-sky-500/20 transition hover:bg-sky-400 hover:text-slate-950 sm:inline-flex"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </header>
  );
}

