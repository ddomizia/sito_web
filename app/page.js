// TEST GIT 123

"use client";

import { useState, useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import WorldMapSection from "./components/WorldMapSection";

/* ===================== */
/*    IMMAGINI HERO      */
/* ===================== */

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
];

/* ===================== */
/*    CATEGORIE PROGETTI */
/* ===================== */

const PROJECT_CATEGORIES = [
  "Architettura",
  "Archeologia",
  "InteriorDesign",
  "Sviluppo Web e GIS",
];

const PROJECT_FILTERS = ["Tutti", ...PROJECT_CATEGORIES];

function categoryToSlug(category) {
  switch (category) {
    case "Architettura":
      return "architettura";
    case "Archeologia":
      return "archeologia";
    case "InteriorDesign":
      return "interiordesign";
    case "Sviluppo Web e GIS":
      return "sviluppo-web-gis";
    default:
      return "";
  }
}

/* ===================== */
/*      DATI PROGETTI    */
/* ===================== */

const allProjects = [
  {
    id: "Roma",
    category: "Architettura",
    labelProject: `- Casa delle Donne – Lucha y Siesta, Rilievo architettonico
- Horrea Piperataria – rilievo architettonico`,
    labelCity: "Roma, Italia",
    lat: 41.9028,
    lng: 12.4964,
  },
  {
    id: "Bagnaia",
    category: "Architettura",
    labelProject:
      "Villa Lante – restituzione grafica degli interni ed esterni, rilievo architettonico",
    labelCity: "Bagnaia, Italia",
    lat: 42.426167,
    lng: 12.155389,
  },
  {
    id: "Kufa",
    category: "Architettura",
    labelProject: "Grande Moschea di Kufa – rilievo fotogrammetrico",
    labelCity: "Kufa, Iraq",
    lat: 32.043,
    lng: 44.401,
  },
  {
    id: "Oman",
    category: "Archeologia",
    labelProject: "Attività di rilievi fotogrammetrici",
    labelCity: "Wadi Al Maawil, Oman",
    lat: 23.303,
    lng: 57.535,
  },
  {
    id: "Uzbekistan",
    category: "Archeologia",
    labelProject: "Gestione GIS della missione archeologica MAFIK",
    labelCity: "Buckara, Uzbekistan",
    lat: 39.7747,
    lng: 64.4286,
  },
  {
    id: "Iran",
    category: "Archeologia",
    labelProject: "Gestione GIS della missione Borj–e Kabotar dell'ISMEO",
    labelCity: "Isfahan, Iran",
    lat: 32.6546,
    lng: 51.668,
  },
  {
    id: "Giordania",
    category: "Archeologia",
    labelProject: "Rilievo topografico e fotogrammetrico",
    labelCity: "Petra, Giordania",
    lat: 30.3285,
    lng: 35.4444,
  },
  {
    id: "Afghanistan",
    category: "Archeologia",
    labelProject:
      "Elaborazione grafica delle tavole di documentazione dei saggi di scavo",
    labelCity: "Mes Aynak, Afghanistan",
    lat: 34.387,
    lng: 69.318,
  },
  {
    id: "Kurdistan",
    category: "Archeologia",
    labelProject: "Yasin Tepe – rilievo archeologico e topografico",
    labelCity: "Kurdistan iracheno",
    lat: 35.56,
    lng: 45.43,
  },
  {
    id: "Kuwait",
    category: "Archeologia",
    labelProject:
      "Sabah Al Ahmad Natural Reserve – rilievo topografico e archeologico",
    labelCity: "Kuwait",
    lat: 29.77,
    lng: 47.73,
  },
  {
    id: "acquedotto-lobia-vicenza",
    category: "Architettura",
    labelProject:
      "Acquedotto romano di Lobia – rilievo architettonico e topografico",
    labelCity: "Lobia, Vicenza, Italia",
    lat: 45.477,
    lng: 11.607,
  },
  {
    id: "museo-granafei-mesagne",
    category: "Architettura",
    labelProject:
      "Museo Archeologico Ugo Granafei – rilievo architettonico con laser scanner",
    labelCity: "Mesagne, Italia",
    lat: 40.5586,
    lng: 17.8076,
  },
  {
    id: "condominio-lavinio-laserscanner",
    category: "Architettura",
    labelProject:
      "Lavinio – rilievo architettonico con laser scanner di complesso condominiale",
    labelCity: "Lavinio, Italia",
    lat: 41.554,
    lng: 12.602,
  },
  {
    id: "condominio-matelica-laserscanner",
    category: "Architettura",
    labelProject:
      "Matelica – rilievo architettonico con laser scanner di complesso condominiale",
    labelCity: "Matelica, Italia",
    lat: 43.255,
    lng: 13.01,
  },
  {
    id: "palazzo-storico-orvieto-laserscanner",
    category: "Architettura",
    labelProject:
      "Palazzo storico di Orvieto – rilievo architettonico con laser scanner",
    labelCity: "Orvieto, Italia",
    lat: 42.718,
    lng: 12.111,
  },
  {
    id: "cuka-ajtoit",
    category: "Archeologia",
    labelProject: "Çuka e Ajtoit – rilievo archeologico",
    labelCity: "Konispol, Albania",
    lat: 39.681306,
    lng: 20.122944,
  },
];

/* ===================== */
/*   HOME: SOLO 4        */
/* ===================== */

const LAST_PROJECTS_LIMIT = 4;

const latestProjects = [...allProjects].slice(-LAST_PROJECTS_LIMIT).reverse();

const mapProjects = allProjects.filter(
  (p) => typeof p.lat === "number" && typeof p.lng === "number",
);

/* ===================== */
/*        HOME           */
/* ===================== */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <ServiziSection />
        <HomeProjectsSection projects={latestProjects} />
        <WorldMapSection
          mapProjects={mapProjects}
          categoryToSlug={categoryToSlug}
        />
        <ChiSiamoSection />
        <PartnersSection />
        <ContattiSection />
      </main>
    </div>
  );
}

/* ===================== */
/*    SEZIONE PROGETTI   */
/* ===================== */

function HomeProjectsSection({ projects }) {
  const [activeCategory, setActiveCategory] = useState("Tutti");

  const filteredProjects =
    activeCategory === "Tutti"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="progetti"
      className="border-t border-neutral-200 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Progetti
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
              Alcuni lavori selezionati.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em]">
            {PROJECT_FILTERS.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={
                    "border px-3 py-1 transition " +
                    (isActive
                      ? "border-neutral-500 bg-neutral-300 text-neutral-900"
                      : "border-neutral-300 bg-white text-neutral-600 hover:border-neutral-500 hover:text-neutral-900")
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
          {filteredProjects.map((p) => {
            const slug = categoryToSlug(p.category);
            return (
              <a
                key={p.id}
                href={`/progetti/${slug}`}
                className="group flex h-32 flex-col justify-between border border-neutral-300 bg-neutral-50 px-4 py-3 transition hover:border-neutral-900 hover:bg-neutral-100 md:h-40"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    {p.category}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold">
                    {p.labelProject}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">{p.labelCity}</p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 group-hover:text-neutral-900">
                  Vedi progetto →
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <a
            href="/progetti"
            className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-900"
          >
            Vedi altri progetti →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===================== */
/*        NAVBAR         */
/* ===================== */

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20">
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between border-b border-white/70 px-4 py-4 md:px-6">
        {/* LOGO IN ALTO A SINISTRA */}
        <div className="flex items-center gap-2 text-white">
          {/* qui potrai mettere un vero logo immagine/SVG */}
          <img src="/logo.png" alt="Studio Nome" className="h-7 w-7" />
          <div className="flex flex-col leading-none">
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              Nome Studio
            </span>
            <span className="text-[10px] text-white/70">
              Architettura e Archeologia
            </span>
          </div>
        </div>

        {/* NAV DESKTOP */}
        <nav className="pointer-events-auto hidden items-center gap-6 text-[11px] font-medium uppercase tracking-[0.22em] text-white md:flex">
          <a href="#home" className="transition hover:text-white/70">
            Home
          </a>
          <a href="#servizi" className="transition hover:text-white/70">
            Servizi
          </a>
          <a href="#progetti" className="transition hover:text-white/70">
            PROGETTI
          </a>
          <a href="#chi-siamo" className="transition hover:text-white/70">
            Chi siamo
          </a>
          <a href="#contatti" className="transition hover:text-white/70">
            Contatti
          </a>
        </nav>

        {/* BURGER MOBILE */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="pointer-events-auto inline-flex items-center justify-center border border-white/70 px-2 py-1 md:hidden"
          aria-label="Apri menu"
        >
          <span className="block h-[1px] w-5 bg-white" />
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="pointer-events-auto border-b border-white/60 bg-black/40 backdrop-blur md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="transition hover:text-white/70"
            >
              Home
            </a>
            <a
              href="#servizi"
              onClick={() => setOpen(false)}
              className="transition hover:text-white/70"
            >
              Servizi
            </a>
            <a
              href="#progetti"
              onClick={() => setOpen(false)}
              className="transition hover:text-white/70"
            >
              PROGETTI
            </a>
            <a
              href="#chi-siamo"
              onClick={() => setOpen(false)}
              className="transition hover:text-white/70"
            >
              Chi siamo
            </a>
            <a
              href="#contatti"
              onClick={() => setOpen(false)}
              className="transition hover:text-white/70"
            >
              Contatti
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ===================== */
/*        HERO           */
/* ===================== */

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // cambia immagine ogni 20 secondi
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* SLIDESHOW DI SFONDO */}
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 bg-neutral-400 bg-cover bg-center transition-opacity duration-[1500ms] ease-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${src})`,
            }}
          />
        ))}

        {/* overlay per rendere leggibile il testo sopra le immagini */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      </div>

      {/* CONTENUTO SOVRAPPOSTO */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-10 pt-20 md:px-6 md:pb-16">
        {/* grande scritta tipo "Studio Luno" */}
        <div className="mb-6 md:mb-10">
          <h1 className="text-[clamp(4rem,15vw,9rem)] font-semibold leading-none tracking-tight text-white">
            Studio
            <span className="block sm:inline"> Nome</span>
          </h1>
        </div>

        {/* parte bassa: parole chiave a sinistra + box descrizione a destra */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          {/* parole chiave in basso a sinistra */}
          <div className="space-y-1 text-[11px] font-medium uppercase tracking-[0.28em] text-white">
            <p>Architettura</p>
            <p>Archeologia</p>
            <p>InteriorDesign</p>
          </div>

          {/* box descrizione in basso a destra */}
          <div className="max-w-sm border border-[0.25px] border-white/90 bg-white/10 px-6 py-5 text-xs leading-relaxed text-white/90 backdrop-blur-sm">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75">
              Descrizione studio
            </p>
            <p>
              Lo Studio opera nei settori dell’architettura e dell’archeologia,
              offrendo servizi di rilievo, analisi, documentazione e
              restituzione grafica del costruito e del territorio. Le attività
              si basano sulla collaborazione tra professionisti con competenze
              complementari, integrando progettazione, ricerca
              storico-archeologica e metodologie digitali avanzate. La sinergia
              del team consente un approccio interdisciplinare capace di
              affrontare contesti complessi e stratificati, garantendo letture
              accurate e interventi coerenti con le caratteristiche storiche e
              paesaggistiche dei luoghi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== */
/*     SEZIONE SERVIZI   */
/* ===================== */

function ServiziSection() {
  return (
    <section
      id="servizi"
      className="border-t border-neutral-200 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* HEADER */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Servizi
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
              Cosa facciamo
            </h2>
          </div>
          <p className="max-w-md text-xs text-neutral-500 md:text-sm">
            Lo Studio offre servizi integrati nei campi dell’architettura e
            dell’archeologia, con un approccio interdisciplinare che unisce
            competenze tecniche, analisi scientifica e strumenti digitali
            avanzati.
          </p>
        </div>

        {/* SERVIZI */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Scoping */}
          <div className="border border-neutral-300 bg-neutral-50 px-5 py-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              Scoping preventivo
            </h3>
            <p className="mt-2 text-xs text-neutral-600">
              Analisi preliminare dei contesti territoriali e normativi, volta a
              definire criticità, potenzialità e strategie di intervento nelle
              fasi iniziali di progetto.
            </p>
          </div>

          {/* VPIA */}
          <div className="border border-neutral-300 bg-neutral-50 px-5 py-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              Verifiche preventive dell’interesse archeologico
            </h3>
            <p className="mt-2 text-xs text-neutral-600">
              Redazione di studi e documentazione per la valutazione preventiva
              del rischio archeologico, a supporto di interventi edilizi,
              infrastrutturali ed energetici.
            </p>
          </div>

          {/* Rilievi */}
          <div className="border border-neutral-300 bg-neutral-50 px-5 py-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              Rilievi architettonici e archeologici
            </h3>
            <p className="mt-2 text-xs text-neutral-600">
              Attività di rilievo diretto e strumentale del costruito e del
              contesto archeologico, finalizzate alla documentazione, allo studio
              e alla progettazione.
            </p>
          </div>

          {/* Fotogrammetria */}
          <div className="border border-neutral-300 bg-neutral-50 px-5 py-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              Fotogrammetria e aerofotogrammetria
            </h3>
            <p className="mt-2 text-xs text-neutral-600">
              Produzione di modelli tridimensionali, ortofoto e restituzioni
              metriche tramite fotogrammetria terrestre e rilievi da drone.
            </p>
          </div>

          {/* GIS */}
          <div className="border border-neutral-300 bg-neutral-50 px-5 py-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              Progetti GIS e Web GIS
            </h3>
            <p className="mt-2 text-xs text-neutral-600">
              Progettazione e gestione di sistemi informativi geografici per
              l’analisi, l’organizzazione e la visualizzazione di dati
              archeologici e territoriali.
            </p>
          </div>

          {/* Dati */}
          <div className="border border-neutral-300 bg-neutral-50 px-5 py-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              Elaborazione di dati archeologici
            </h3>
            <p className="mt-2 text-xs text-neutral-600">
              Analisi, interpretazione e restituzione grafica di dati di scavo,
              survey e fonti storiche, integrate in contesti di ricerca e
              progettazione.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ===================== */
/*    SEZIONE PROGETTI   */
/* ===================== */

function ProjectsSection({ projects }) {
  const [activeCategory, setActiveCategory] = useState("Tutti");

  const filteredProjects =
    activeCategory === "Tutti"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="progetti"
      className="border-t border-neutral-200 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Progetti
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
              Alcuni lavori selezionati.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em]">
            {PROJECT_FILTERS.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={
                    "border px-3 py-1 transition " +
                    (isActive
                      ? "border-neutral-500 bg-neutral-300 text-neutral-900"
                      : "border-neutral-300 bg-white text-neutral-600 hover:border-neutral-500 hover:text-neutral-900")
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
          {filteredProjects.map((p) => {
            const slug = categoryToSlug(p.category);
            return (
              <a
                key={p.id}
                href={`/progetti/${slug}`}
                className="group flex h-32 flex-col justify-between border border-neutral-300 bg-neutral-50 px-4 py-3 transition hover:border-neutral-900 hover:bg-neutral-100 md:h-40"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    {p.category}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold">
                    {p.labelProject}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">{p.labelCity}</p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 group-hover:text-neutral-900">
                  Vedi progetto →
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <a
            href="/progetti"
            className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-900"
          >
            Vedi altri progetti →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===================== */
/*      CHI SIAMO        */
/* ===================== */

const teamMembers = [
  {
    id: "marco-aurini",
    name: "Marco Aurini",
    role: "Architetto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet felis id magna dictum facilisis. Curabitur vitae tortor non justo luctus dignissim.",
  },
  {
    id: "domizia-derasmo",
    name: "Domizia D'Erasmo",
    role: "Archeologa",
    description:
      "Archeologa, specializzata nello studio del paesaggio e degli insediamenti tra Tardoantico e Alto Medioevo, con particolare attenzione al Mediterraneo orientale e al Vicino Oriente. Ha conseguito come ultimo titolo il Dottorato di Ricerca in Archeologia presso la Sapienza Università di Roma. La sua ricerca integra fonti storiche, dati archeologici e strumenti digitali, con un forte impiego di GIS, remote sensing e metodologie di documentazione del territorio. Ha maturato esperienza in attività di rilievo archeologico, architettonico e topografico, fotogrammetria e laser scanning, nonché nella gestione e analisi di database geospaziali applicati alla ricerca archeologica. Ha partecipato a missioni e progetti di ricerca in Italia, Medio Oriente e Asia centrale, occupandosi sia di documentazione sul campo sia di restituzione grafica e gestione GIS dei dati. I suoi interessi scientifici includono l’archeologia del paesaggio, le trasformazioni insediative e amministrative, e l’applicazione delle Digital Humanities allo studio delle società del passato.",
  },
  {
    id: "giulia-mariotti",
    name: "Giulia Mariotti",
    role: "Archeologa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id aliquet lacus. Nullam tincidunt arcu vel magna feugiat, a mollis nibh congue.",
  },
  {
    id: "marco-russo",
    name: "Marco Russo",
    role: "Archeologo",
    description:
      "Marco Russo è un archeologo professionista, iscritto alla Prima Fascia degli elenchi ministeriali e abilitato alla redazione del documento di valutazione archeologica preventiva. Affianca società di ingegneria e imprese impegnate in progetti infrastrutturali ed energetici, occupandosi di archeologia preventiva e gestione del rischio archeologico dalla fase di progettazione al cantiere. Specializzato nello studio della ceramica medievale di ambito mediterraneo, ha maturato esperienze in scavi e progetti nazionali e internazionali (tra cui Gerusalemme, Albania e Arabia Saudita, progetto “NEOM Heritage Land Survey Phase 2”), oltre a attività continuative di sorveglianza archeologica per reti fognarie ed elettriche e interventi per metanodotti e impianti fotovoltaici. Formatosi tra l’Università di Pisa (laurea magistrale in Archeologia Medievale) e la Sapienza Università di Roma (diploma di specializzazione in Beni Archeologici), integra competenze GIS, gestione di banche dati e compilazione del modulo VPIA in un approccio data-driven e multidisciplinare alla valutazione del territorio.",
  },
  {
    id: "valerio-astolfi",
    name: "Valerio Astolfi",
    role: "Archeologo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet felis id magna dictum facilisis. Curabitur vitae tortor non justo luctus dignissim.",
  },
];

function ChiSiamoSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section
      id="chi-siamo"
      className="border-t border-neutral-200 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Chi siamo
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
              Un team tra architettura e archeologia.
            </h2>
          </div>
          <p className="max-w-md text-xs text-neutral-500 md:text-sm">
            LLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc
            massa, vulputate sit amet felis id, sagittis dapibus velit. Nulla
            facilisi. Nunc quis odio laoreet, sagittis urna non, congue ante
          </p>
        </div>

        {/* GRID CARDS */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group flex h-full flex-col border border-neutral-300 bg-neutral-100"
            >
              {/* FOTO / PLACEHOLDER */}
              <div className="h-48 w-full bg-neutral-300" />

              {/* BLOCCO TESTO (SPA﻿ZIO REALE, NON OVERLAY) */}
              <div className="bg-white px-3 py-2">
                <button
                  type="button"
                  className="text-[11px] font-semibold uppercase tracking-[0.18em] underline-offset-2 hover:underline"
                  onClick={() => setSelectedMember(member)}
                >
                  {member.name}
                </button>
                <p className="text-[10px] text-neutral-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODALE PROFILO */}
      {selectedMember && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-3xl border border-neutral-300 bg-white shadow-lg">
            {/* HEADER MODALE */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Profilo
              </span>
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="text-xs uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-800"
              >
                Chiudi
              </button>
            </div>

            {/* CONTENUTO MODALE */}
            <div className="flex flex-col gap-4 px-4 py-4 md:flex-row md:px-6 md:py-6">
              {/* FOTO A SINISTRA */}
              <div className="h-40 w-full border border-neutral-300 bg-neutral-200 md:h-48 md:w-1/3">
                {/* Qui potrai mettere la stessa foto della card */}
              </div>

              {/* TESTO A DESTRA */}
              <div className="flex-1 text-sm leading-relaxed text-neutral-800">
                <div className="mb-2">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                    {selectedMember.role}
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {selectedMember.name}
                  </h3>
                </div>
                <p className="text-xs text-neutral-600 md:text-sm">
                  {selectedMember.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ===================== */
/*        PARTNERS       */
/* ===================== */

function PartnersSection() {
  return (
    <section
      id="partners"
      className="border-t border-neutral-200 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Partners
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
              Collaborazioni e reti
            </h2>
          </div>
          <p className="max-w-md text-xs text-neutral-500 md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc
            massa, vulputate sit amet felis id, sagittis dapibus velit. Nulla
            facilisi. Nunc quis odio laoreet, sagittis urna non, congue ante.
          </p>
        </div>

        {/* Placeholder partner */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="flex h-20 items-center justify-center border border-neutral-300 bg-neutral-50 text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            Partner 1
          </div>
          <div className="flex h-20 items-center justify-center border border-neutral-300 bg-neutral-50 text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            Partner 2
          </div>
          <div className="flex h-20 items-center justify-center border border-neutral-300 bg-neutral-50 text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            Partner 3
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== */
/*        CONTATTI       */
/* ===================== */

function ContattiSection() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const phone = formData.get("phone");
    const phoneTime = formData.get("phoneTime");

    // TODO: qui in futuro potrai collegare il tutto a una API route Next.js
    // per inviare la mail allo studio (es. con nodemailer o un servizio esterno).
    console.log({ email, subject, message, phone, phoneTime });
    alert(
      "Per ora questo modulo è solo dimostrativo.\nIn futuro qui potremo collegarlo alla mail dello studio.",
    );
    setOpen(false);
  };

  return (
    <section
      id="contatti"
      className="border-t border-neutral-200 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* LOGO RIPETUTO A SINISTRA */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 border border-neutral-900" />
            <div className="flex flex-col leading-none">
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                Studio Nome
              </span>
              <span className="text-[10px] text-neutral-500">
                Architecture &amp; Archaeology
              </span>
            </div>
          </div>

          {/* TESTO / CONTATTI A DESTRA */}
          <div className="max-w-xl text-xs text-neutral-600 md:text-sm">
            <p>
              Lo Studio riunisce competenze e professionalità diverse nei campi
              dell’architettura e dell’archeologia. È possibile contattarci via
              email per richieste di informazioni, consulenze o preventivi.
              Sarete ricontattati nel più breve tempo possibile dai
              professionisti competenti per l’ambito di interesse indicato.
            </p>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-800 underline-offset-2 hover:underline"
            >
              Scrivici una mail
            </button>
          </div>
        </div>
      </div>

      {/* POPUP CONTATTO */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-2xl border border-neutral-300 bg-white shadow-lg">
            {/* HEADER MODALE */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Contatto
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-800"
              >
                Chiudi
              </button>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 px-4 py-4 md:px-6 md:py-6"
            >
              {/* EMAIL (OBBLIGATORIA) */}
              <div>
                <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 outline-none focus:border-neutral-900 placeholder:text-neutral-400"
                  placeholder="Inserisca il suo indirizzo email per poterle rispondere."
                />
              </div>

              {/* OGGETTO */}
              <div>
                <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600">
                  Oggetto
                </label>
                <input
                  name="subject"
                  type="text"
                  className="w-full border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 outline-none focus:border-neutral-900 placeholder:text-neutral-400"
                  placeholder="Perché ci sta contattando? Richiesta di preventivo, informazioni, ecc."
                />
              </div>

              {/* MESSAGGIO */}
              <div>
                <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600">
                  Messaggio
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 outline-none focus:border-neutral-900 placeholder:text-neutral-400"
                  placeholder="Scriva in cosa possiamo esserle utile, risponderemo nel più breve tempo possibile."
                />
              </div>

              {/* TELEFONO + FASCIA ORARIA, AFFIANCATI SU DESKTOP */}
              <div className="grid gap-4 md:grid-cols-2">
                {/* TELEFONO OPZIONALE */}
                <div>
                  <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600">
                    Numero di telefono (opzionale)
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 outline-none focus:border-neutral-900 placeholder:text-neutral-400"
                    placeholder=""
                  />
                </div>

                {/* ORARIO PREFERITO */}
                <div>
                  <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600">
                    Orario preferito per il contatto
                  </label>
                  <input
                    name="phoneTime"
                    type="text"
                    className="w-full border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-800 outline-none focus:border-neutral-900 placeholder:text-neutral-400"
                    placeholder="Fascia oraria in cui preferisce essere contattata/o."
                  />
                </div>
              </div>

              {/* BOTTONI */}
              <div className="mt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="border border-neutral-300 bg-white px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-neutral-600 hover:border-neutral-500 hover:text-neutral-900"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="border border-neutral-900 bg-neutral-900 px-5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white hover:bg-neutral-800"
                >
                  Invia
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
