---
title: Hook e filtri sync
sidebar_label: Hook e filtri sync
description: Comportamento sync, hook bec_before_unit_sync bec_after_unit_sync, filtri riga remota titolo contenuto campi core, provider_remote_units Kross.
---

# Hook e filtri sync

> **Riferimento sviluppatori:** per sviluppatori di temi e plugin.

---

## Comportamento

- La **sync completa** carica le unità remote dal provider attivo (`fetchRemoteUnits`), poi crea o aggiorna post **Unità** con chiave `bec_external_id` + `bec_provider_slug`.
- La **sync pianificata** usa WP-Cron (`bec_run_scheduled_sync`). L’intervallo è in **Booking Engine → Sync** (`bec_sync_interval_hours`, default 6). Sui siti a basso traffico il cron può partire solo dopo la richiesta successiva (comportamento WP standard).
- **Lock:** le sync complete concorrenti sono bloccate con transient `bec_sync_running_lock` (~5 minuti).
- Dopo ogni upsert riuscito, il plugin salva la riga remota normalizzata come JSON nel meta **`bec_sync_payload`** (per ispezione nella schermata modifica unità).
- **Campi core:** `extractCoreUnitFields()` del provider attivo mappa ogni riga remota in meta canonici `bec_core_*` (vedi **[Campi canonici unità](./04-canonical-unit-fields.md)**). Sovrascritti ogni sync salvo che `bec_sync_apply_core_unit_fields` restituisca false.
- **Campi mappati opzionali:** `getUnitSyncFieldDefinitions()` guida **meta aggiuntivi** (client-specific). Sovrascritti ogni sync salvo disabilitazione via `bec_sync_apply_mapped_unit_fields`.

---

## Azioni

| Hook | Quando | Argomenti |
|------|--------|-----------|
| `bec_before_unit_sync` | Prima di `wp_insert_post` / `wp_update_post` | `$post_id` (0 se non ancora creato), `$provider_slug`, `$remote_row` |
| `bec_after_unit_sync` | Dopo aggiornamento meta | `$post_id`, `$provider_slug`, `$remote_row` |

---

## Filtri

| Filtro | Scopo |
|--------|--------|
| `bec_sync_remote_unit` | Normalizza ogni riga remota prima del mapping (`$row`, `$provider_slug`) |
| `bec_sync_unit_title` | Titolo post (`$title`, `$row`, `$provider_slug`). Default: nome canonico da `extractCoreUnitFields` dopo `bec_core_unit_fields` (come `bec_core_name`). Vuoto → `Unit {external_id}`. Titoli duplicati ok: WordPress mantiene slug unici. |
| `bec_sync_unit_content` | Contenuto post (`$content`, `$row`, `$provider_slug`). Default: descrizione canonica (come `bec_core_description`). Salvato con `wp_kses_post`. |
| `bec_sync_unit_post_data` | Array `post_data` per `wp_insert_post` / `wp_update_post` (`$post_data`, `$row`, `$provider_slug`, `$post_id_or_null`) |
| `bec_provider_remote_units` | Elenco finale dalla sync completa (`$rows`, `'kross'`, `$decoded_response`) — specifico Kross |
| `bec_sync_apply_core_unit_fields` | Salta scrittura meta canonici `bec_core_*` (`true` / `false`, `$post_id`, `$provider_slug`, `$remote_row`) |
| `bec_core_unit_fields` | Regola array campi core prima del salvataggio (`$data`, `$provider_slug`, `$remote_row`) |
| `bec_core_unit_locale` | Locale due lettere per nome/descrizione (`$two`, `$wp_locale`, `$remote_row`) |
| `bec_provider_amenities_from_row` | Costruisce elenco servizi (`$items`, `$remote_row`, `$provider_slug`) |
| `bec_kross_amenities_from_raw` | Solo Kross: servizi da `raw` API (`$items`, `$raw`, `$normalised_row`) |

I post con `bec_sync_enabled = false` sono saltati nella sync **completa** ma possono ancora essere aggiornati con azione riga / sync bulk (refresh manuale).

---

## Correlati

- **[Architettura](./01-architecture.md)**
- **[Riferimento post meta](./03-post-meta-reference.md)**
