"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProjectNavbar from "../../components/ProjectNavbar";

/* ========================= */
/*        DATI PROGETTI      */
/* ========================= */

const PROJECTS = {
  "casa-donne": {
    title: "Casa delle Donne – Lucha y Siesta",
    location: "Roma, Italia",
    category: "Architettura",
    intervention:
      "Rilievo architettonico finalizzato alla conoscenza dello stato di fatto e alla progettazione della ristrutturazione dell’immobile",
    client: "Studio di progettazione Taldeitali",
    images: [
      "/images/casa-donne-hero.png",
      "/images/casa-donne-hero-02.png",
      "/images/casa-donne-hero-03.png",
    ],
    description: `La Casa delle donne Lucha y Siesta a Roma è un bene comune femminista e transfemminista nato nel 2008 all’interno di una ex sottostazione elettrica ATAC dismessa. Oggi ospita un centro antiviolenza, una casa di accoglienza per donne e minori e un polo culturale aperto al quartiere.

L’intervento ha riguardato un rilievo architettonico completo degli esterni e degli interni, finalizzato alla conoscenza dello stato di fatto e alla progettazione degli interventi di ristrutturazione e riqualificazione dell’immobile.

Le attività hanno integrato rilievo laser scanner terrestre (Leica BLK360) e aerofotogrammetria da drone (DJI Mavic 2 Pro). I dati acquisiti sono stati elaborati mediante Leica Cyclone REGISTER 360 PLUS, AutoCAD per la restituzione grafica e Agisoft Metashape per l’elaborazione delle ortofoto.`,
  },

  "borj-e-kabotar": {
    title: "Progetto Borj-e Kabotar",
    location: "Provincia di Isfahan, Iran",
    category: "Sviluppo Web & GIS",
    intervention:
      "Sviluppo sito web e WebGIS interattivo per la ricerca e la divulgazione",
    client: "Rilievi s.r.l. – ISMEO",
    images: ["/images/borj-e-kabotar.png", "/images/borj-hero-01.png"],
    description: `Borj-e Kabotar è un progetto di ricerca dedicato allo studio e alla documentazione delle torri dei piccioni della provincia di Isfahan, un patrimonio architettonico e paesaggistico diffuso che intreccia pratiche agricole, gestione del territorio e saperi costruttivi tradizionali. L’indagine integra approcci di architettura, antropologia e analisi del paesaggio, con l’obiettivo di leggere le torri non come elementi isolati, ma come parte di un sistema territoriale complesso e stratificato.

Il sito web e il WebGIS sono stati sviluppati per rendere accessibili e interrogabili i dati della ricerca, organizzando schede descrittive, apparati fotografici e informazioni spaziali in un ambiente unico. La piattaforma consente una lettura multilivello che va dalla scala territoriale complessiva alla scala del singolo manufatto, mettendo in relazione distribuzione geografica, caratteristiche architettoniche e contesto ambientale.

L’integrazione tra cartografia interattiva, contenuti testuali e materiali visivi configura il progetto digitale come uno strumento operativo di ricerca, utile all’analisi e all’aggiornamento dei dati, e al tempo stesso come uno spazio di divulgazione scientifica capace di restituire la complessità storica, culturale e paesaggistica delle torri dei piccioni all’interno del territorio di Isfahan.`,
  },
};

/* ========================= */
/*        PAGINA SLUG        */
/* ========================= */

export default function ProjectSlugPage() {
  const { slug } = useParams();
  const project = PROJECTS[slug];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!project) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.images.length);
    }, 7000); // autoplay lento e fluido

    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-neutral-900">
        <ProjectNavbar />
        <main className="pt-32 px-4">
          <p className="text-xs text-neutral-500">Progetto non trovato.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <ProjectNavbar />

      <main className="pt-32">
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          {/* BACK */}
          <a
            href="/progetti"
            className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-900"
          >
            ← Torna a tutti i progetti
          </a>

          {/* BLOCCO PRINCIPALE */}
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
            {/* IMMAGINI SINISTRA – GRANDI COME PRIMA */}
            <div className="relative h-[620px] w-full overflow-hidden">
              {project.images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={project.title}
                  className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-[1500ms] ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* DOTS */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 w-1.5 rounded-full ${
                      i === index ? "bg-neutral-900" : "bg-neutral-400"
                    }`}
                    aria-label={`Vai all'immagine ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* TESTO DESTRA – IDENTICO A PRIMA */}
            <div>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {project.title}
              </h1>

              <div className="mt-4 space-y-3 text-xs text-neutral-600">
                <p>
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                    Luogo
                  </span>
                  <br />
                  {project.location}
                </p>

                <p>
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                    Categoria
                  </span>
                  <br />
                  {project.category}
                </p>

                <p>
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                    Tipo di intervento
                  </span>
                  <br />
                  {project.intervention}
                </p>

                <p>
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                    Committente
                  </span>
                  <br />
                  {project.client}
                </p>
              </div>

              <div className="mt-8 text-xs leading-relaxed text-neutral-700 whitespace-pre-line">
                {project.description}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
