---
title: Panoramica unità
sidebar_label: Panoramica unità
description: Cos’è un’Unità in WordPress, menu admin Unità, URL pubblici, immagine in evidenza e rapporto con il provider di prenotazione.
---

# Panoramica unità

Un’**Unità** è un elemento prenotabile sincronizzato dal provider — una tipologia di camera, appartamento, villa, ecc.

In WordPress è un tipo di contenuto dedicato (**custom post type**) con etichetta **Units** nel menu di amministrazione.

---

## Dove stanno le unità

| Posizione | Cosa fai |
|-----------|----------|
| **Units → All Units** | Sfoglia, cerca, sincronizza in blocco, apri editor. |
| **URL front-end** | Ogni unità ha la propria pagina (permalink). L’archivio è opzionale — vedi **[Permalink e archivio](./05-permalinks-and-archive.md)**. |

Colonne extra nell’elenco aiutano le operazioni:

- **External ID** — Identificativo dal sistema di prenotazione.
- **Provider** — Quale integrazione possiede la riga (es. `kross`).
- **Last sync** — Ultima sincronizzazione completata con successo.

{/* SCREENSHOT: Units list with External ID Provider Last sync */}
![Elenco admin Unità](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/units-list.png`): units-list.png */}

---

## Cosa vedono i visitatori

I temi di solito mostrano:

- **Titolo** e **contenuto** (descrizione sincronizzata nell’editor salvo personalizzazioni).
- **Immagine in evidenza** — Spesso impostata automaticamente dall’immagine principale della gallery del provider.

Le immagini oltre alla featured vivono in meta campi e ID allegati — tema o blocchi decidono come mostrarle.

{/* SCREENSHOT: Single unit front-end above fold */}
![Pagina pubblica singola unità](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/unit-single-front.png`): unit-single-front.png */}

---

## Rapporto con il provider

Le unità sono **collegate** all’inventario remoto tramite **`bec_external_id`** (mostrato come External ID) e slug del provider.

Eliminare un’unità in WordPress **non** elimina l’inventario in Kross; la prossima sync può ricrearla salvo gestire la visibilità lato provider.

---

## Pagine correlate

- **[Sincronizzare le unità](./02-syncing-units.md)**
- **[Modificare un’unità](./03-editing-a-unit.md)**
