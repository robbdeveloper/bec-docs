---
title: Immagini gallery
sidebar_label: Immagini gallery
description: Come le immagini remote importano nella Libreria media, prefisso e suffisso nome file, strumenti rinomina, regole immagine in evidenza.
---

# Immagini gallery

Durante la sync il plugin può **scaricare** la gallery di ogni unità dal provider nella **Libreria media WordPress**, poi memorizzare gli ID allegato sull’unità.

---

## Modello nome file

In **Booking Engine → Sync**:

- **Filename prefix** — Testo opzionale **prima** dello slug nome unità.
- **Filename suffix (before index)** — Testo opzionale **tra** slug e indice numerico.

Modello:

**prefisso + slug-unità + suffisso + `-NN` + estensione**

Esempio (illustrativo): `villa-rosa-main-01.jpg`

{/* SCREENSHOT: Sync page gallery filename fields highlighted */}
![Impostazioni nome file gallery](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/sync-gallery-filename-fields.png`): sync-gallery-filename-fields.png */}

---

## Immagine in evidenza

Quando il provider segna un’immagine **main**, diventa l’**immagine in evidenza** WordPress. Altrimenti il plugin usa di solito la **prima immagine** nell’ordine gallery.

---

## Admin: ordine gallery e allegati

Nella schermata modifica unità, il meta box **canonico** include una UI **gallery**:

- Griglia miniature con **trascina per riordinare**.
- **Add** apre il **modal Libreria media** WordPress (carica o scegli allegati).

Le modifiche si salvano con il post. La **prossima sync** può comunque aggiornare la gallery dal provider salvo filtri sviluppatore — vedi **[Hook e filtri sync](../09-developer-reference/02-sync-hooks-and-filters.md)**.

---

## Rinominare file esistenti

Pulsanti utili quando cambi prefisso/suffisso **dopo** l’import:

- **Booking Engine → Sync → Rename all unit gallery files**
- **Units → Azione riga → Rename gallery files** (una unità)

Immagini condivise tra più unità possono essere **copiate** così le altre unità continuano a funzionare — su siti grandi esegui in periodi di poco traffico.

Nella pagina **Sync** lo strumento sta sotto **Gallery file names** con nota che la copia può avvenire se un allegato è riusato da più unità.

{/* SCREENSHOT: Media Library detail for one BEC gallery attachment showing filename */}
![Nome file allegato Libreria media](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/media-library-gallery-file.png`): media-library-gallery-file.png */}

---

## Stabilità e duplicati

Il connector tiene traccia di **chiavi immagine** stabili per unità così riordinare le foto remote non scarica sempre tutto da capo. La deduplica è **per unità**, non globalmente per URL — due unità possono legitimamente avere due file dallo stesso URL remoto.

I download avvengono in batch paralleli per velocità (default tecnico documentato per sviluppatori).

---

## Pagine correlate

- **[Campi canonici unità — gallery](../09-developer-reference/04-canonical-unit-fields.md)**
