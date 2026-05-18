---
title: Esegui la prima sincronizzazione
sidebar_label: Esegui la prima sincronizzazione
description: Pagina Sync — pianificazione, filtri motori Kross, nomi file galleria, Run sync now in batch con avanzamento, lock sync ed elenco Units.
---

# Esegui la prima sincronizzazione

Dopo aver **[collegato le credenziali](./02-connect-your-provider.md)**, importa l’inventario in WordPress.

Apri **Booking Engine → Sync**.

{/* SCREENSHOT: Sync page full view with interval, filename fields, and action buttons */}
![Pagina Sync unità](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/sync-page.png`): sync-page.png */}

---

## Pianificazione

**Interval (hours)** controlla ogni quanto WordPress tenta una **sync completa pianificata** (WP-Cron).

- Intervallo ammesso: **1–168** ore.
- **Siti a basso traffico:** il cron parte solo quando qualcuno visita il sito — normale in WordPress.

Salvare il modulo **ripianifica** il job in background.

---

## Motori Kross (filtro opzionale)

Se **Kross** è attivo puoi limitare la **sync completa** ai tipi camera il cui payload include slug **`be_enabled`** selezionati:

1. Clicca **Refresh booking engines list from Kross** per popolare la checklist dall’API.
2. **Lascia tutto deselezionato** per sincronizzare **tutti** i tipi camera (consigliato all’inizio).
3. Altrimenti seleziona gli slug dei motori da includere.

Dettagli: **[Sincronizzare le unità](./02-syncing-units.md)**.

---

## Nomi file immagini galleria (sync future)

Campi opzionali che cambiano come vengono nominati i file scaricati in Media Library:

- **Filename prefix** — Testo prima dello slug nome unità.
- **Filename suffix (before index)** — Dopo lo slug e prima dell’indice numerico (es. `-01`).

Schema approssimativo: **prefisso + slug-unità + suffisso + `-NN` + estensione**.  
I file esistenti si possono rinominare in bulk (vedi **[Immagini galleria](./04-gallery-images.md)**).

---

## Run sync now

Clicca **Run sync now** per una **sync completa** immediata.

**Con JavaScript (wp-admin predefinito):**

- Il plugin acquisisce un **lock manuale** ed elabora le unità a **batch** via AJAX.
- Il pannello **Sync progress** mostra log e stato live fino al termine.

**Senza JavaScript** o con errore AJAX il pulsante torna a un POST form classico (richiesta singola più lunga).

**Risultati**

- Al termine dovresti vedere conteggi **created**, **updated**, **skipped** (e testo errore in caso di fallimento).
- Se un’altra sync **completa** è già in corso può comparire **Another sync is already running** — il lock può durare a lungo; vedi **[Sincronizzare le unità](./02-syncing-units.md)** e **Clear sync lock**.

{/* SCREENSHOT: Admin notice after successful sync with counts */}
![Avviso completamento sync](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/sync-success-notice.png`): sync-success-notice.png */}

**Last successful sync** (se mostrato) proviene dal timestamp salvato dall’ultima sync completa riuscita.

---

## Lock sync — troubleshooting

Nella pagina **Booking Engine → Sync**, la sezione **Sync lock** indica se il lock è attivo e offre **Clear sync lock**.

- Usalo solo se sei sicuro che **nessun** job sia in esecuzione (es. lock obsoleto dopo tab crashata).

---

## Trova le tue unità

Apri il menu **Units** in amministrazione.

L’elenco include colonne extra come **External ID**, **Provider**, **Last sync**.

{/* SCREENSHOT: Units list table with External ID Provider Last sync columns */}
![Elenco admin Unità](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/02-getting-started/units-list-columns.png`): units-list-columns.png */}

Da qui: **Sync now**, **Rename gallery files**, azioni bulk — vedi **[Sincronizzare le unità](./02-syncing-units.md)**.

---

## Pagine correlate

- **[Aggiungi ricerca e prenotazione alle pagine](./04-add-search-and-booking-to-pages.md)**
- **[Panoramica unità](./01-units-overview.md)**
- **[Categorie unità](./06-unit-categories.md)**
