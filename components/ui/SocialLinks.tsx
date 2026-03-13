import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/bahaeddine-saim",
    icon: Linkedin
  },
  {
    label: "GitHub",
    href: "https://github.com/bahaeddinesaim",
    icon: Github
  },
  {
    label: "Email",
    href: "mailto:bahaeddine4info@gmail.com",
    icon: Mail
  }
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {LINKS.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          aria-label={label}
          className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-sky-400/70 hover:bg-slate-900 hover:text-sky-200"
        >
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}

