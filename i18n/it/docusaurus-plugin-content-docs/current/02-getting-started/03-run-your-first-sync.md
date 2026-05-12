---
title: Esegui la prima sincronizzazione
sidebar_label: Prima sincronizzazione
description: Pagina Booking Engine Sync — intervallo, opzioni nomi file gallery, Esegui sincronizzazione ora e dove trovare le Unità in WordPress.
---

# Esegui la prima sincronizzazione

Dopo aver **[collegato le credenziali](./02-connect-your-provider.md)**, scarica l’inventario in WordPress.

Apri **Booking Engine → Sync**.

{/* SCREENSHOT: Sync page full view with interval, filename fields, and action buttons */}
![Pagina sincronizzazione unità](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/sync-page.png`): sync-page.png */}

---

## Pianificazione

**Interval (hours)** regola ogni quanto WordPress tenta una sincronizzazione completa **pianificata** (tramite WP-Cron).

- Intervallo consentito: **1–168** ore.
- **Siti a basso traffico:** Cron parte solo quando qualcuno visita il sito, quindi la prossima esecuzione può attendere — comportamento normale di WordPress.

Salvare il modulo **ripianifica** il processo in background.

---

## Nomi file immagini gallery (sincronizzazioni future)

Campi facoltativi cambiano come vengono nominati i file gallery scaricati nella libreria media:

- **Filename prefix** — Testo prima dello slug del nome unità.
- **Filename suffix (before index)** — Testo dopo lo slug e prima dell’indice numerico (es. `-01`).

Insieme il modello è circa: **prefisso + slug-unità + suffisso + `-NN` + estensione**.  
I file esistenti possono essere rinominati in blocco in seguito (vedi **[Immagini gallery](../04-units/04-gallery-images.md)**).

---

## Esegui sincronizzazione ora

Clicca **Run sync now** per avviare subito una **sincronizzazione completa** di tutte le unità dal provider attivo.

Al termine dovresti vedere un avviso di amministrazione con conteggi come **created**, **updated** e **skipped**, più eventuali messaggi di errore.

Se un’altra sincronizzazione è già in corso, può comparire un messaggio che indica sync in corso (un breve lock evita sovrapposizioni delle sync complete).

{/* SCREENSHOT: Admin notice after successful sync with counts */}
![Avviso completamento sincronizzazione](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/sync-success-notice.png`): sync-success-notice.png */}

**Last successful sync** (se mostrato) proviene dal timestamp memorizzato dall’plugin per l’ultima esecuzione completata.

---

## Trova le tue unità

Apri il menu **Units** nell’amministrazione WordPress.

L’elenco include colonne extra come **External ID**, **Provider** e **Last sync** per abbinare le righe WordPress al sistema di prenotazione.

{/* SCREENSHOT: Units list table with External ID Provider Last sync columns */}
![Elenco admin Unità](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/units-list-columns.png`): units-list-columns.png */}

Da qui puoi aprire un’unità, usare azioni di riga come **Sync now** o **Rename gallery files**, o azioni di massa — vedi **[Sincronizzare le unità](../04-units/02-syncing-units.md)**.

---

## Pagine correlate

- **[Aggiungi ricerca e prenotazione alle pagine](./04-add-search-and-booking-to-pages.md)**
- **[Panoramica unità](../04-units/01-units-overview.md)**
