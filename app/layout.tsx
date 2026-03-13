import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saim Bahaeddine – Data & Digital Portfolio",
  description:
    "Portfolio de Saim Bahaeddine, étudiant en MSc Informatique & Management à l’EPITA, spécialisé en data, gouvernance, BI et projets digitaux.",
  metadataBase: new URL("https://saimbahaeddine.github.io"),
  openGraph: {
    title: "Saim Bahaeddine – Data & Digital Portfolio",
    description:
      "Profil à l’intersection entre technologie, stratégie et valorisation de la donnée. Projets data, BI, gouvernance et web.",
    url: "https://saimbahaeddine.github.io",
    siteName: "Portfolio – Saim Bahaeddine",
    locale: "fr_FR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
        {children}
      </body>
    </html>
  );
}

