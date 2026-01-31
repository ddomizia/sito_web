"use client";

export default function CasaDonnePage() {
  return (
    <div className="bg-white text-neutral-900">
      {/* INTESTAZIONE PROGETTO */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
            Progetti
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            La Casa delle Donne – Lucha y Siesta
          </h1>

          {/* 4 COLONNE CON DISTANZA OMOGENEA */}
          <div className="mt-6 grid gap-6 md:gap-10 text-xs text-neutral-600 md:grid-cols-4 md:text-sm">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                Luogo
              </p>
              <p className="mt-1">Roma, Italia</p>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                Categoria
              </p>
              <p className="mt-1">Architettura</p>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                Tipo di intervento
              </p>
              <p className="mt-1">
                Aerofotogrammetria, fotogrammetria, rilievo laser scanner,
                restituzione grafica.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                Committente
              </p>
              <p className="mt-1">Studio di progettazione Taldeitali</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMMAGINE A TUTTO SCHERMO */}
      <section>
        <div className="flex h-[420px] w-full items-center justify-center md:h-[520px]">
          <img
            src="/images/casa-donne-hero-03.png"
            alt="La Casa delle Donne – Lucha y Siesta"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </section>

      {/* BLOCCO 2: IMMAGINE SINISTRA, TESTO DESTRA (IMMAGINE 536×620 SU DESKTOP) */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* IMMAGINE SINISTRA – MOBILE FLUIDA, DESKTOP 536x620 */}
            <div className="flex h-80 w-full items-center justify-center md:h-[620px] md:w-[536px]">
              <img
                src="/images/casa-donne-hero.png"
                alt="Dettaglio rilievo – La Casa delle Donne"
                className="h-full w-full object-contain"
              />
            </div>

            {/* TESTO DESTRA */}
            <div className="text-xs leading-relaxed text-neutral-700 md:text-sm">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                Descrizione
              </p>
              <p className="mb-3">
                La Casa delle donne Lucha y Siesta a Roma è un bene comune
                femminista e transfemminista nato nel 2008 all’interno di una ex
                sottostazione elettrica Atac abbandonata per anni. Oggi è un
                centro antiviolenza, una casa di accoglienza per donne e minori
                in percorsi di fuoriuscita dalla violenza, e un polo culturale
                dove si sperimentano pratiche di solidarietà, autonomia e
                autodeterminazione. È uno spazio di relazione e di lotta contro
                la violenza di genere, ma anche un luogo aperto al quartiere,
                che ospita attività sociali, formative e culturali, laboratori,
                eventi e progetti condivisi con la città.
              </p>
              <p>
                All’interno del percorso di valorizzazione e ristrutturazione
                della Casa delle donne Lucha y Siesta, il nostro lavoro si è
                concentrato su un rilievo architettonico completo degli esterni
                e degli interni, finalizzato alla progettazione e alla
                riqualificazione dell’immobile. Abbiamo integrato
                aerofotogrammetria (con riprese aeree), fotogrammetria da terra
                e rilievo laser scanner 3D per ottenere una documentazione
                metrica ad alta precisione dell’edificio, delle facciate, degli
                spazi comuni e delle aree esterne. I dati acquisiti sono stati
                elaborati in una restituzione grafica dettagliata – piante,
                prospetti, sezioni e modelli tridimensionali – pensata come base
                tecnica per interventi di ristrutturazione, adeguamento
                funzionale e messa in sicurezza, nel rispetto della storia del
                luogo e della sua identità di casa rifugio e spazio femminista
                autogestito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCCO 3: TESTO SINISTRA, IMMAGINE DESTRA */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* TESTO SINISTRA */}
            <div className="order-2 text-xs leading-relaxed text-neutral-700 md:order-1 md:text-sm">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                Approfondimento
              </p>
              <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                aliquam sem at lacus sollicitudin, sit amet feugiat arcu
                interdum. Suspendisse eleifend sapien mi, sed placerat leo
                fermentum quis. Sed ac orci ac neque tincidunt consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae lorem quis lectus tempus tempus. Duis ut massa et ipsum
                lobortis posuere. In volutpat orci id turpis dignissim, vitae
                pulvinar purus cursus.
              </p>
            </div>

            {/* IMMAGINE DESTRA */}
            <div className="order-1 flex h-64 w-full items-center justify-center md:order-2 md:h-80">
              <img
                src="/images/casa-donne-hero-02.png"
                alt="Dettaglio interno – La Casa delle Donne"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOCCO 4: IMMAGINE PIÙ GRANDE A SINISTRA, TESTO DESTRA */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* IMMAGINE GRANDE SINISTRA */}
            <div className="flex h-80 w-full items-center justify-center md:h-[420px]">
              <img
                src="/images/casa-donne-hero-05.png"
                alt="Vista complessiva – La Casa delle Donne"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* TESTO DESTRA */}
            <div className="text-xs leading-relaxed text-neutral-700 md:text-sm">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                Ulteriore approfondimento
              </p>
              <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                pharetra sed sem nec gravida. Integer vitae facilisis justo,
                vitae fringilla ligula. Etiam at enim in lacus fermentum
                posuere. Pellentesque non arcu a libero luctus efficitur.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                cursus, nibh sit amet blandit molestie, ante arcu posuere
                mauris, a consectetur eros massa sed lorem. Phasellus hendrerit
                gravida mi, in sagittis lectus accumsan sit amet. Integer a dui
                id nibh sodales volutpat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
