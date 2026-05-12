---
title: Modificare un’unità
sidebar_label: Modificare un’unità
description: Meta box campi canonici, dati sincronizzati in sola lettura, campi unità opzionali e cosa sovrascrive la sync.
---

# Modificare un’unità

Apri **Units** e clicca un titolo. Oltre al solito **title**, **content** e **featured image** di WordPress, il plugin aggiunge pannelli specializzati (**meta box**).

{/* SCREENSHOT: Unit edit screen showing three BEC meta boxes stacked */}
![Meta box modifica unità](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/unit-edit-metaboxes.png`): unit-edit-metaboxes.png */}

---

## Unit — core fields (canonical)

Questo riquadro elenca **fatti canonici** condivisi tra provider — nome, indirizzo, coordinate, limiti occupazione, finestre check-in/out, locali, bagni, estratto descrizione, dimensione, JSON servizi, ID allegati gallery, ecc.

- **Puoi modificare** questi campi direttamente — utile per piccole correzioni o traduzioni **se** il flusso lo consente.
- **La prossima sync può sovrascriverli** salvo che uno sviluppatore disattivi le scritture core via filtri documentati per gli ingegneri.

Considera questo riquadro come “i fatti strutturati che conserviamo per temi e SEO”.

{/* SCREENSHOT: Canonical meta box expanded */}
![Meta box campi canonici core](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/metabox-canonical.png`): metabox-canonical.png */}

---

## Booking engine — synced data

Questo pannello è **sola lettura** per editor:

- External ID, slug provider, ultima ora di sync
- Flag sync enabled (mostrato per visibilità)
- **Remote row (JSON)** — Payload normalizzato completo ultimo salvato dall’API (`bec_sync_payload`)

Usalo per **supporto e debug** (“cosa ha inviato Kross?”).

{/* SCREENSHOT: Synced data metabox with JSON payload collapsed and expand control */}
![Meta box ispettore dati sincronizzati](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/metabox-synced-data.png`): metabox-synced-data.png */}

---

## Booking engine — unit fields

**Campi mappati specifici del provider** opzionali compaiono qui se definiti.

Per **Kross** standard questo riquadro è spesso **vuoto** — nessun campo mappato extra di default.

---

## Titolo e contenuto

**Titolo** e **contenuto** del post di solito rispecchiano **name** e **description** canonici durante la sync (secondo i filtri). Modificarli cambia ciò che molti temi mostrano anche se la meta canonica conserva lo snapshot fino al prossimo refresh.

---

## Pagine correlate

- **[Immagini gallery](./04-gallery-images.md)**
- **[Campi canonici (sviluppatori)](../09-developer-reference/04-canonical-unit-fields.md)**
