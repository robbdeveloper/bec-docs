---
title: Sincronizzare le unità
sidebar_label: Sincronizzazione unità
description: Sync pianificata, Esegui sync ora, azioni per unità, lock, conteggi skipped e comportamento sync abilitata.
---

# Sincronizzare le unità

**Sync** significa: chiamare il provider di prenotazione, scaricare l’inventario aggiornato, poi creare o aggiornare i post **Unità** in WordPress.

---

## Come avviare una sync

| Innesco | Dove | Cosa fa |
|---------|------|---------|
| **Pianificata (WP-Cron)** | In background | Sync completa all’intervallo impostato in **Booking Engine → Sync** (di default ogni poche ore). |
| **Run sync now** | **Booking Engine → Sync** | Sync completa immediata per tutte le unità idonee. |
| **Sync now** (azione riga) | Elenco **Units** | Aggiorna **una** unità dal provider. |
| **Bulk: Sync with provider** | Elenco **Units** | Come azione riga per più righe selezionate. |

Sui siti molto silenziosi i job pianificati possono attendere la prossima visita — comportamento cron normale di WordPress.

---

## Lock di concorrenza

Se una **sync completa** è già in corso, avviarne un’altra può mostrare un messaggio che la sync è in corso. Attendi un minuto e riprova.

---

## Capire l’avviso di risultato

Dopo una sync completa l’avviso può riportare **created**, **updated** e **skipped**:

- **Created** — Nuova unità WordPress per un nuovo ID remoto.
- **Updated** — Unità esistente aggiornata.
- **Skipped** — Riga remota ignorata in questo passaggio (es. unità disabilitata per la full sync — vedi sotto).

Eventuali errori compaiono nello stesso testo dell’avviso.

{/* SCREENSHOT: Sync success admin notice with counts */}
![Avviso risultato sync](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/sync-result-notice.png`): sync-result-notice.png */}

---

## Sync abilitata (per unità)

Le unità possono avere un flag **`bec_sync_enabled`**. Quando è **spento**, quell’unità è **saltata durante la full sync automatica** così puoi tenere temporaneamente una copia WordPress senza sovrascriverla dall’elenco remoto.

La sync **manuale** su riga o in blocco può comunque aggiornare l’unità quando la richiedi esplicitamente.

Il flag è visibile nel meta box **sync inspector** in sola lettura nella schermata di modifica (vedi **[Modificare un’unità](./03-editing-a-unit.md)**).

---

## Strumenti correlati nell’elenco Unità

- **Rename gallery files** — Riapplica prefisso/suffisso nomi file per le immagini importate di quell’unità. Può essere lento su librerie grandi.
- Lo stesso strumento esiste globalmente nella schermata **Sync** per **tutte** le unità.

---

## Pagine correlate

- **[Immagini gallery](./04-gallery-images.md)**
- **[Sviluppatori: hook sync](../09-developer-reference/02-sync-hooks-and-filters.md)**
