---
title: Sincronizzare le unità
sidebar_label: Sincronizzare le unità
description: Sync pianificata, Esegui sync ora in batch con avanzamento, filtri motori Kross, sync per unità, lock, Cancella lock sync, rinomina galleria, flag sync abilitata.
---

# Sincronizzare le unità

**Sync** significa: chiamare il provider di prenotazione, scaricare l’inventario aggiornato, poi creare o aggiornare i post **Unità** in WordPress.

Apri **Booking Engine → Sync** per l’intervallo, i filtri motori solo Kross, i prefissi/suffissi nomi file galleria, **Run sync now**, il pannello avanzamento, la gestione del lock e la rinomina globale galleria.

---

## Modi per avviare una sync

| Trigger | Dove | Cosa fa |
|---------|------|---------|
| **Pianificata (WP-Cron)** | In background | Sync completa sull’intervallo impostato nella pagina **Sync** (default **6** ore, configurabile **1–168**). Hook nel codice: `bec_run_scheduled_sync`. |
| **Run sync now** | **Booking Engine → Sync** | Sync **completa** immediata. Con JavaScript, il lavoro è in **batch** lato server e compare **Sync progress** (log + stato). Senza JS viene usata una richiesta **admin-post** classica. |
| **Sync now** (azione riga) | Elenco **Units** | Aggiorna **una** unità dal provider. |
| **Bulk: Sync with provider** | Elenco **Units** | Come l’azione riga per più righe selezionate. |

Sui siti molto poco visitati i job pianificati possono aspettare la prossima richiesta: è il comportamento normale del cron WordPress. La pagina Sync lo ricorda.

---

## Motori Kross (filtra la sync completa)

Con **Kross Booking** attivo, la pagina Sync include **Kross booking engines**:

- **Refresh booking engines list from Kross** unisce nella checklist ogni slug `be_enabled` scoperto da **`/v5/rooms/get-room-types`**.
- **Lascia tutto deselezionato** — il plugin sincronizza **ogni** tipo camera restituito per la struttura (comportamento predefinito).
- **Spunta uno o più slug** — la sync completa **include** righe remote il cui payload normalizzato elenca **`be_enabled`** con **almeno uno** slug selezionato (logica OR).

Utile per escludere intenzionalmente alcuni motori Kross da WordPress.

---

## Concorrenza e lock di sync

Un transient **`bec_sync_running_lock`** impedisce sync **complete** sovrapposte:

| Titolare | Significato |
|----------|-------------|
| **`c`** | Sync completa **cron** pianificata. |
| **`m:{userId}:{runId}`** | Sync completa **manuale** a batch in wp-admin (`runId` generato al clic su **Run sync now** con JS). |

Il lock ha **TTL 2 ore (7200 s)** ma viene **rinnovato** mentre la run continua: non è un “breve lock”.

**Manuale vs cron**

- Il cron **non** parte se un run manuale tiene il lock (salvo prelazione abilitata da filtri — vedi documentazione sviluppatori).
- Se l’**stesso** utente avvia un nuovo run manuale dopo una tab morta, il plugin può **rilasciare un lock obsoleto** dopo circa **30 minuti** senza aggiornamenti del batch (filtrabile).

**Clear sync lock**

- Usa **Clear sync lock** nella pagina Sync solo se sei sicuro che **nessuna** sync sia in corso; un job attivo può restare in uno stato incoerente.
- Si può disabilitare il pulsante per alcuni contesti con il filtro **`bec_sync_allow_admin_clear_lock`**.

Se vedi **Another sync is already running**, attendi il job corrente, verifica lock obsoleti come sopra, o cancella il lock dopo aver confermato che il server è fermo.

---

## Avanzamento sync (sync completa manuale)

Con JavaScript, **Run sync now** mostra **Sync progress**:

- **Riga di stato** e **log** scorrevole (step batch e risultati).
- Al successo compare comunque il riepilogo **created / updated / skipped**; errori nel log o negli avvisi.

Se il flusso AJAX fallisce, riprova o disabilita temporaneamente JS per la sync admin-post senza batch.

---

## Leggere l’avviso di risultato

Dopo una sync completa l’avviso può riportare **created**, **updated**, **skipped**:

- **Created** — Nuova unità WordPress con nuovo ID remoto.
- **Updated** — Unità esistente aggiornata.
- **Skipped** — Riga remota ignorata (es. sync disabilitata per quell’unità, o **filtro motori Kross** esclude la riga).

Gli errori compaiono nello stesso avviso o nel log di avanzamento.

{/* SCREENSHOT: Sync success admin notice with counts */}
![Avviso risultato sync](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/sync-result-notice.png`): sync-result-notice.png */}

---

## Sync abilitata (per unità)

Le unità possono avere **`bec_sync_enabled`**. Se è **off**, l’unità è **saltata nella sync completa automatica** così puoi tenere una copia WordPress senza sovrascriverla dall’elenco remoto.

La **sync manuale** (riga o bulk) può comunque aggiornare l’unità su richiesta esplicita.

Il flag è visibile nel meta box inspector in sola lettura (vedi **[Modificare un’unità](./03-editing-a-unit.md)**).

---

## Strumenti correlati (Sync e elenco Units)

- **Rename all unit gallery files** (pagina Sync) — riapplica **prefisso/suffisso** alle immagini nella galleria di ogni unità (gli allegati condivisi possono essere **copiati** affinché altre unità non si rompano).
- **Rename gallery files** (azione riga Units) — stessa cosa per **una** unità.
- **[Immagini galleria](./04-gallery-images.md)** — pattern nomi file e dedupe.

---

## Pagine correlate

- **[Esegui la prima sincronizzazione](../02-getting-started/03-run-your-first-sync.md)**
- **[Categorie unità](./06-unit-categories.md)**
- **[Kross Booking](../03-providers/02-kross-booking.md)**
- **[Hook sync (sviluppatori)](../09-developer-reference/02-sync-hooks-and-filters.md)**
