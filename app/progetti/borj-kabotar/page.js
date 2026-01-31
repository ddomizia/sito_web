"use client";

/* ========================= */
/*      NAVBAR IN ALTO       */
/* ========================= */

function PageNavbar() {
  return (
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
              Architettura, Archeologia &amp; Web GIS
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
  );
}

/* ========================= */
/*     PAGINA SINGOLO        */
/*  PROGETTO BORJ-E KABOTAR  */
/* ========================= */

export default function BorjKabotarPage() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      <PageNavbar />

      <main>
        {/* INTESTAZIONE PROGETTO */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
            {/* LINK PER TORNARE ALL'ELENCO PROGETTI */}
            <a
              href="/progetti"
              className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-900"
            >
              ← Torna a tutti i progetti
            </a>

            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Progetti
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Borj-e Kabotar – Sito web e WebGIS
            </h1>

            {/* 4 COLONNE METADATI */}
            <div className="mt-6 grid gap-6 text-xs text-neutral-600 md:grid-cols-4 md:gap-10 md:text-sm">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Luogo
                </p>
                <p className="mt-1">Provincia di Isfahan, Iran</p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Categoria
                </p>
                <p className="mt-1">Sviluppo Web &amp; GIS</p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Tipo di intervento
                </p>
                <p className="mt-1">
                  Sito web, WebGIS interattivo, gestione dati spaziali, supporto
                  alla ricerca.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Committente
                </p>
                <p className="mt-1">Rilievi s.r.l. e ISMEO</p>
              </div>
            </div>
          </div>
        </section>

        {/* HERO: IMMAGINE / SCREENSHOT PRINCIPALE */}
        <section>
          <div className="flex h-[420px] w-full items-center justify-center bg-neutral-50 md:h-[520px]">
            <img
              src="/images/borj-e-kabotar.png"
              alt="Homepage del progetto Borj-e Kabotar"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </section>

        {/* BLOCCO 1: IL PROGETTO (TESTO SINISTRA, IMMAGINE DESTRA) */}
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              {/* TESTO SINISTRA */}
              <div className="text-xs leading-relaxed text-neutral-700 md:text-sm">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Il progetto di ricerca
                </p>
                <p className="mb-3">
                  Borj-e Kabotar è un progetto di ricerca dedicato
                  all&apos;architettura e all&apos;antropologia delle torri dei
                  piccioni nella provincia di Isfahan. L&apos;obiettivo è
                  documentare, studiare e raccontare un patrimonio architettonico
                  e culturale diffuso, spesso fragile, che intreccia pratiche
                  agricole, gestione del territorio e memoria delle comunità
                  locali.
                </p>
                <p className="mb-3">
                  Il sito web pubblico nasce per rendere accessibili risultati,
                  materiali e dati del progetto: schede di torre, apparato
                  fotografico, modelli tridimensionali e contenuti di ricerca.
                  L&apos;interfaccia è pensata per accompagnare l&apos;utente
                  dalla scala territoriale a quella del singolo manufatto,
                  mettendo in relazione cartografia, immagini e testi
                  interpretativi.
                </p>
                <p>
                  A livello scientifico, il progetto è co-diretto da Danilo
                  Rosati e Fariba Saiedi Anaraki e vede il coinvolgimento di un
                  team multidisciplinare (architettura, antropologia, rilievo,
                  fotografia, modellazione 3D), con il supporto di istituzioni
                  accademiche e di ricerca.
                </p>
              </div>

              {/* IMMAGINE DESTRA */}
              <div className="flex h-72 w-full items-center justify-center md:h-80">
                <img
                  src="/images/borj-hero-02.png"
                  alt="Schermata del sito Borj-e Kabotar"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BLOCCO 2: STACK TECNOLOGICO (IMMAGINE SINISTRA, TESTO DESTRA) */}
        <section className="bg-neutral-50 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              {/* IMMAGINE SINISTRA */}
              <div className="flex h-72 w-full items-center justify-center md:h-80">
                <img
                  src="/images/borj-hero-03.png"
                  alt="Dettaglio dell'interfaccia del sito web Borj-e Kabotar"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* TESTO DESTRA */}
              <div className="text-xs leading-relaxed text-neutral-700 md:text-sm">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Sviluppo del sito web
                </p>
                <p className="mb-3">
                  Il sito borjekabotar.com è stato sviluppato in{" "}
                  <span className="font-semibold">Gatsby</span>, un framework
                  open source basato su React che permette di combinare
                  performance elevate, generazione statica delle pagine e una
                  gestione modulare dei contenuti. Questa scelta consente di
                  integrare dati eterogenei (testi, immagini, schede, mappe) in
                  un&apos;interfaccia fluida e leggera, adatta sia alla
                  consultazione da desktop sia da dispositivi mobili.
                </p>
                <p className="mb-3">
                  L&apos;architettura informativa è stata progettata attorno ai
                  bisogni del progetto di ricerca: presentazione sintetica del
                  progetto, accesso diretto al WebGIS, sezioni dedicate al team,
                  alle pubblicazioni e agli aggiornamenti (news). Ogni sezione è
                  pensata per essere facilmente ampliabile con nuovi materiali
                  nel corso dell&apos;avanzamento della ricerca.
                </p>
                <p>
                  La scelta di uno stack completamente{" "}
                  <span className="font-semibold">open source</span> consente al
                  progetto di rimanere sostenibile nel tempo, indipendente da
                  piattaforme proprietarie e facilmente manutenibile anche da
                  team diversi, nel rispetto delle esigenze accademiche e
                  progettuali.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCCO 3: WEBGIS DEDICATO */}
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              {/* TESTO SINISTRA */}
              <div className="text-xs leading-relaxed text-neutral-700 md:text-sm">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  WebGIS interattivo
                </p>
                <p className="mb-3">
                  Il WebGIS del progetto Borj-e Kabotar è stato sviluppato con{" "}
                  <span className="font-semibold">Leaflet</span>, una libreria
                  JavaScript open source per mappe interattive sul web. La
                  piattaforma consente di esplorare in modo dinamico la
                  distribuzione delle torri dei piccioni all&apos;interno del
                  territorio di studio, passando dalla visione d&apos;insieme al
                  dettaglio della singola torre.
                </p>
                <p className="mb-3">
                  Ogni punto mappa è collegato a una scheda che può includere
                  informazioni anagrafiche e descrittive, immagini di rilievo,
                  eventuali modellazioni 3D e collegamenti alle pubblicazioni
                  scientifiche. Filtri e controlli di zoom permettono di
                  analizzare la densità delle torri, le relazioni con i centri
                  abitati, le infrastrutture storiche e gli ambiti agricoli.
                </p>
                <p>
                  L&apos;integrazione tra sito e WebGIS rende la mappa non solo
                  uno strumento di visualizzazione, ma un vero e proprio
                  dispositivo di ricerca e divulgazione: un ambiente in cui
                  dati geografici, immagini e testi dialogano per raccontare la
                  complessità di questo patrimonio architettonico e paesaggistico.
                </p>
              </div>

              {/* IMMAGINE DESTRA: SCREEN WEBGIS */}
              <div className="flex h-72 w-full items-center justify-center md:h-80">
                <img
                  src="/images/borj-hero-webgis.png"
                  alt="Vista del WebGIS del progetto Borj-e Kabotar"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BLOCCO 4: PARTNER E COLLABORAZIONI */}
        <section className="bg-neutral-50 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="text-xs leading-relaxed text-neutral-700 md:text-sm">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Partner e committenti
                </p>
                <p className="mb-3">
                  Il progetto digitale è stato realizzato per{" "}
                  <span className="font-semibold">Rilievi s.r.l.</span> e{" "}
                  <span className="font-semibold">ISMEO</span>, che hanno
                  promosso lo sviluppo di uno strumento capace di rendere
                  fruibili i risultati di ricerca in forma cartografica e
                  interattiva, a servizio sia della comunità scientifica sia di
                  un pubblico più ampio.
                </p>
                <p className="mb-3">
                  Il sito e il WebGIS si inseriscono all&apos;interno del
                  progetto Borj-e Kabotar, dedicato allo studio delle torri dei
                  piccioni in Iran, co-diretto da Danilo Rosati e Fariba Saiedi
                  Anaraki e sostenuto da istituzioni accademiche e di ricerca
                  internazionali.
                </p>
                <p>
                  La collaborazione tra competenze di rilievo, analisi
                  architettonica, antropologia e sviluppo digitale ha permesso
                  di costruire una piattaforma che non è solo vetrina del
                  progetto, ma anche infrastruttura operativa per la gestione e
                  l&apos;aggiornamento continuo dei dati.
                </p>
              </div>

              <div className="text-xs leading-relaxed text-neutral-700 md:text-sm">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Ruoli e contributi
                </p>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Sito web:</span> sviluppo
                    front-end in Gatsby, definizione dell&apos;architettura
                    informativa, integrazione dei contenuti redazionali.
                  </li>
                  <li>
                    <span className="font-semibold">WebGIS:</span> sviluppo con
                    Leaflet, organizzazione e pubblicazione dei layer
                    cartografici, configurazione delle schede di torre
                    collegate alla mappa.
                  </li>
                  <li>
                    <span className="font-semibold">Supporto alla ricerca:</span>{" "}
                    messa a punto di flussi di lavoro tra raccolta dati,
                    rilievo, gestione GIS e restituzione online, per facilitare
                    l&apos;aggiornamento e la condivisione della base dati.
                  </li>
                  <li>
                    <span className="font-semibold">Open source:</span> uso di
                    strumenti liberi (Gatsby, Leaflet e stack correlato) per
                    garantire la massima flessibilità, trasparenza e
                    sostenibilità nel lungo periodo.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
