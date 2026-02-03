"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

/* ========================= */
/*   CATEGORIE & PROGETTI    */
/* ========================= */

const PROJECT_FILTERS = [
  "Tutti",
  "Architettura",
  "Archeologia",
  "InteriorDesign",
  "Sviluppo Web e GIS",
];

const PROJECTS = [
  {
    id: "casa-donne",
    category: "Architettura",
    name: "Casa delle Donne Lucha y Siesta",
    location: "Roma, Italia",
    tagline: "Rilievo architettonico",
    thumbnail: "/images/casa-donne-hero-03.png",
  },
  {
    id: "villa-lante",
    category: "Architettura",
    name: "Villa Lante",
    location: "Bagnaia, Italia",
    tagline:
      "Restituzione grafica degli interni ed esterni, rilievo architettonico",
    thumbnail: "/images/casa-donne-hero-05.png", // cambiala quando avrai l'immagine giusta
  },
  {
    id: "cuka-ajtoit",
    category: "Archeologia",
    name: "Çuka e Ajtoit",
    location: "Konispol, Albania",
    tagline: "Rilievo archeologico",
    thumbnail: "/images/casa-donne-hero-02.png", // placeholder
  },
  {
    id: "mafoub",
    category: "Sviluppo Web e GIS",
    name: "Progetto MAFOUB",
    location: "Parigi, Francia",
    tagline: "Sviluppo Web & GIS",
    thumbnail: "/images/casa-donne-hero.png", // placeholder
  },
  {
    id: "mafik",
    category: "Sviluppo Web e GIS",
    name: "Progetto MAFIK",
    location: "Parigi, Francia",
    tagline: "Sviluppo Web & GIS",
    thumbnail: "/images/casa-donne-hero-03.png", // placeholder
  },
  {
    id: "borj-e-kabotar",
    category: "Sviluppo Web e GIS",
    name: "Progetto Borj-e Kabotar",
    location: "Roma, Italia",
    tagline: "Sviluppo Web & GIS",
    thumbnail: "/images/borj-e-kabotar.png", // placeholder
  },
  {
    id: "tom-energy",
    category: "Archeologia",
    name: "VPIA per impianto fotovoltaico",
    location: "Gallipoli, Italia",
    tagline: "Archeologia",
    thumbnail: "/images/gallipoli-vpa.png", // placeholder
  },
];

/* ========================= */
/*       PAGINA PROGETTI     */
/* ========================= */

export default function ProgettiPage() {
  const [activeFilter, setActiveFilter] = useState("Tutti");

  const filteredProjects =
    activeFilter === "Tutti"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* NAV BAR SUPERIORE */}
      <header className="border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 border border-neutral-900" />
            <div className="flex flex-col leading-none">
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                Nome Studio
              </span>
              <span className="text-[10px] text-neutral-500">
                Architettura e Archeologia
              </span>
            </div>
          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden items-center gap-6 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-700 md:flex">
            <a href="/#home" className="transition hover:text-neutral-400">
              Home
            </a>
            <a href="/#servizi" className="transition hover:text-neutral-400">
              Servizi
            </a>
            <a href="/#progetti" className="transition hover:text-neutral-400">
              PROGETTI
            </a>
            <a href="/#chi-siamo" className="transition hover:text-neutral-400">
              Chi siamo
            </a>
            <a href="/#contatti" className="transition hover:text-neutral-400">
              Contatti
            </a>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PAGINA */}
      <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        {/* TITOLO & INTRO */}
        <div className="mb-8 md:mb-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
            Progetti
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Selezione di lavori.
          </h1>
          <p className="mt-3 max-w-2xl text-xs text-neutral-600 md:text-sm">
            Una panoramica dei progetti di architettura, archeologia e sviluppo
            web &amp; GIS su cui abbiamo lavorato. Seleziona una categoria per
            filtrare i contenuti oppure esplora liberamente tutte le schede.
          </p>
        </div>

        {/* FILTRI IN UN’UNICA RIGA */}
        <div className="mb-8 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em]">
          {PROJECT_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={
                  "border px-3 py-1 transition " +
                  (isActive
                    ? "border-neutral-500 bg-neutral-300 text-neutral-900"
                    : "border-neutral-300 bg-white text-neutral-600 hover:border-neutral-500 hover:text-neutral-900")
                }
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* GRID DI CARD – COME NELLA HOME MA CON TUTTI I PROGETTI */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <a
              key={p.id}
              href={`/progetti/${p.id}`}
              className="group flex h-full flex-col border border-neutral-200 bg-neutral-50 shadow-sm transition hover:border-neutral-900 hover:bg-neutral-100"
            >
              {/* IMMAGINE IN ALTO */}
              <div className="flex h-40 w-full items-center justify-center border-b border-neutral-200 bg-white">
                <img
                  src={p.thumbnail}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* TESTO CARD */}
              <div className="flex flex-1 flex-col justify-between px-4 py-3">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                    {p.category}
                  </p>
                  <h2 className="mt-1 text-sm font-semibold tracking-tight">
                    {p.name}
                  </h2>
                  <p className="mt-1 text-xs text-neutral-500">
                    {p.location}
                  </p>
                  {p.tagline && (
                    <p className="mt-1 text-[11px] text-neutral-600">
                      {p.tagline}
                    </p>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                  <span className="transition group-hover:text-neutral-900">
                    Vedi progetto
                  </span>
                  <span className="h-px w-8 bg-neutral-400 transition group-hover:bg-neutral-900" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
