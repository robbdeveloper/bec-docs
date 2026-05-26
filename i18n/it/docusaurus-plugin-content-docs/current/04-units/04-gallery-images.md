---
title: Immagini galleria
sidebar_label: Immagini galleria
description: Come le immagini remote importano nella Libreria media, prefisso e suffisso nome file, strumenti rinomina, regole immagine in evidenza.
---

# Immagini galleria

Durante la sync il plugin può **scaricare** la galleria di ogni unità dal provider nella **Libreria media WordPress**, poi memorizzare gli ID allegato sull’unità.

---

## Modello nome file

In **Booking Engine → Sync & Import**:

- **Filename prefix** — Testo opzionale **prima** dello slug nome unità.
- **Filename suffix (before index)** — Testo opzionale **tra** slug e indice numerico.

Modello:

**prefisso + slug-unità + suffisso + `-NN` + estensione**

Esempio (illustrativo): `villa-rosa-main-01.jpg`

{/* SCREENSHOT: Sync page gallery filename fields highlighted */}
![Impostazioni nome file galleria](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/sync-gallery-filename-fields.png`): sync-gallery-filename-fields.png */}

---

## Admin: visualizzazione e modifica allegati

Nella schermata modifica unità, il meta box **canonico** include una griglia miniature **gallery**:

- **Clic su una miniatura** per aprire quell’immagine nel modal allegato **Libreria media** (alt text, didascalia, ecc.).
- La griglia riflette gli ID in **`bec_core_gallery`** e l’ordine sync; **non** è un’interfaccia drag-and-drop per riordinare.

La **prossima sync** può comunque aggiornare la gallery dal provider salvo filtri sviluppatore — vedi **[Hook e filtri sync](../09-developer-reference/02-sync-hooks-and-filters.md)**.

In front-end puoi esporre la stessa gallery con **`[bec_unit_gallery]`** (JSON) o il dynamic tag Elementor **Unit gallery** — vedi **[bec_unit_gallery](../06-shortcodes/13-bec-unit-gallery.md)** e **[Elementor — Unit gallery](../06-shortcodes/14-elementor-unit-gallery.md)**.

---

## Immagine in evidenza

Quando il provider segna un’immagine **main**, diventa l’**immagine in evidenza** WordPress. Altrimenti il plugin usa di solito la **prima immagine** nell’ordine gallery.

---

## Rinominare file esistenti

Pulsanti utili quando cambi prefisso/suffisso **dopo** l’import:

- **Booking Engine → Sync & Import → Tools → Rename all unit gallery files**
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
