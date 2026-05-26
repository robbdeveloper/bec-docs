---
title: Hook e filtri sync
sidebar_label: Hook e filtri sync
description: Comportamento sync hook filtri bec_before_unit_sync bec_after_unit_sync lock cron manuale AJAX gallery categorie risoluzione stato post riferimento sviluppatori.
---

# Hook e filtri sync

> **Riferimento sviluppatori:** per sviluppatori di temi e plugin.

---

## Comportamento

- **Sync completa** carica le unità remote dal provider attivo (`fetchRemoteUnits`), poi crea o aggiorna i post **Unità** con chiave `bec_external_id` + `bec_provider_slug`.
- **Sync pianificata** usa WP-Cron (`bec_run_scheduled_sync`). L’intervallo è in **Booking Engine → Sync & Import** (`bec_sync_interval_hours`, default 6). Su siti a basso traffico il cron può partire solo alla richiesta successiva (comportamento WP standard).
- **Sync completa manuale (wp-admin)** usa **batch AJAX** (`wp_ajax_bec_sync_start_all`, `wp_ajax_bec_sync_step_all`) con avanzamento per utente + run id (**`SyncProgressReporter`** / **`SyncManualBatchState`**).
- **Lock** — le **sync complete** concorrenti sono coordinate dal transient **`bec_sync_running_lock`**:
  - TTL **7200 secondi (2 ore)** per `set_transient`, **rinnovato** alla rientranza mentre il lavoro continua (`SyncLock::refresh()`).
  - Titolare **`c`** — lock acquisito dal cron WP (**`SyncLock::acquireCron`**).
  - Titolare **`m:{userId}:{runId}`** — sync manuale a batch (**`SyncLock::acquireManual`**), `runId` UUID lato client sanificato.
  - Il cron **non** ruba un lock manuale attivo. Il manuale può **prevalere** sul cron solo se **`bec_sync_manual_may_preempt_cron_lock`** restituisce true (default false).
  - Lo stesso utente che avvia un **nuovo** run manuale può liberare un lock **obsoleto** quando lo stato batch del run precedente non c’è più, o dopo **`bec_sync_manual_lock_abandon_seconds`** (default **1800** = 30 minuti) senza aggiornamenti batch.
  - **`SyncLock::forceReleaseAll()`** è usata da **Clear sync lock** in admin; in UI condizionata da **`bec_sync_allow_admin_clear_lock`** (default true).
- Dopo ogni upsert riuscito la riga remota normalizzata è salvata in meta **`bec_sync_payload`** (ispettore unità; **nascosta da REST** di default).
- **Campi core**: `extractCoreUnitFields()` mappa in meta canonici `bec_core_*` (vedi **[Campi canonici unità](./04-canonical-unit-fields.md)**). Sovrascritti ogni sync salvo `bec_sync_apply_core_unit_fields` false.
- **Campi mappati opzionali**: `getUnitSyncFieldDefinitions()` — salvo `bec_sync_apply_mapped_unit_fields` false.
- **Categorie unità**: con tassonomia abilitata, dopo **`bec_after_unit_sync`**, **`UnitCategorySync`** upserta un termine e lo assegna tramite il descrittore filtrato **`bec_sync_unit_category`**.

---

## Azioni

| Hook | Quando | Argomenti |
|------|--------|-----------|
| `bec_before_unit_sync` | Prima di `wp_insert_post` / `wp_update_post` | `$post_id` (0 se non ancora creato), `$provider_slug`, `$remote_row` |
| `bec_after_unit_sync` | Dopo aggiornamento meta | `$post_id`, `$provider_slug`, `$remote_row` |

---

## Filtri — mapping sync core

| Filtro | Scopo |
|--------|--------|
| `bec_sync_remote_unit` | Normalizza ogni riga remota prima del mapping (`$row`, `$provider_slug`) |
| `bec_sync_unit_title` | Titolo post (`$title`, `$row`, `$provider_slug`) |
| `bec_sync_unit_content` | Contenuto post (`$content`, `$row`, `$provider_slug`) |
| `bec_sync_unit_post_data` | Array `post_data` per insert/update (`$post_data`, `$row`, `$provider_slug`, `$post_id_or_null`) |
| `bec_provider_remote_units` | Lista finale sync Kross (`$rows`, `'kross'`, `$decoded_response`) |
| `bec_sync_apply_core_unit_fields` | Salta scrittura meta `bec_core_*` (bool, `$post_id`, `$provider_slug`, `$remote_row`) |
| `bec_core_unit_fields` | Regola array campi core prima del salvataggio (`$data`, `$provider_slug`, `$remote_row`) |
| `bec_core_unit_locale` | Locale a due lettere per nome/descrizione (`$two`, `$wp_locale`, `$remote_row`) |
| `bec_provider_amenities_from_row` | Lista servizi (`$items`, `$remote_row`, `$provider_slug`) |
| `bec_kross_amenities_from_raw` | Solo Kross: servizi dal `raw` API (`$items`, `$raw`, `$normalised_row`) |
| `bec_sync_unit_resolve_post_statuses` | Stati post usati per trovare un’unità esistente per id esterno (`$statuses`, `$external_id`, `$provider_slug`) — default `publish`, `draft`, `pending`, `future`, `private` |

Con `bec_sync_enabled = false` le unità sono saltate nella **sync completa** ma possono essere aggiornate da azione riga / bulk.

---

## Filtri — lock e sync manuale (admin)

| Filtro | Scopo |
|--------|--------|
| `bec_sync_manual_lock_abandon_seconds` | Secondi di idle prima che un nuovo run dello stesso utente possa rilasciare il lock (`$default`, `$user_id`, `$old_run_id`) |
| `bec_sync_manual_may_preempt_cron_lock` | Consenti sync manuale a eliminare lock `c` e sostituirlo (`false`, `$user_id`, `$sanitized_run_id`) |
| `bec_sync_allow_admin_clear_lock` | Mostra/consenti **Clear sync lock** (`true`) |
| `bec_sync_manual_gallery_batch_size` | Step galleria per batch sync manuale (`4`, `$user_id`, `$run_raw`) |

---

## Filtri — import gallery / campo gallery core

| Filtro | Scopo |
|--------|--------|
| `bec_sync_import_gallery_images` | Salta download gallery per questo upsert (`true`, `$parent_post_id`, `$urls`) |
| `bec_sync_gallery_ignore_hash` | Ignora hash ordine/dedupe per questo passaggio (`false`, `$parent_post_id`, `$urls`, `$order_hash`) |
| `bec_gallery_download_concurrency` | Limite download paralleli (`8`, `$parent_post_id`, `$urls`) |
| `bec_core_unit_gallery_before_save` | Lista ID allegati prima del salvataggio (`$ids`, `$post_id`) |
| `bec_core_unit_gallery_remote_urls` | Lista piatta URL remoti prima dell’importer (`$urls`, `$post_id`, `$value`) |

---

## Filtri — categorie unità

| Filtro | Scopo |
|--------|--------|
| `bec_sync_unit_category` | Sostituisci/sopprimi descrittore categoria dopo normalizzazione riga (`$descriptor`, `$row`, `$provider_slug`, `$post_id`) |
| `bec_unit_category_enabled` | Effettivo on/off registrazione tassonomia senza cambiare l’opzione salvata |
| `bec_unit_category_rewrite_slug` | Regola slug rewrite derivato |
| `bec_unit_category_taxonomy_args` | Argomenti finali `register_taxonomy` (`$args`, `'bec_unit_category'`) |

Kross (frammento payload → descrittore):

- `bec_kross_room_type_categories_payload`
- `bec_kross_room_type_categories`
- `bec_kross_room_type_category_from_row`

---

## Modulo di ricerca (front-end)

| Filtro | Scopo |
|--------|--------|
| `bec_search_form_action` | Sostituisce l’URL `action` del `<form>` quando `SearchForm::render()` non ha ricevuto un argomento **`action`** esplicito (`$url`, `$context`). Restituire stringa vuota per mantenere le regole integrate (archivio / singolare / home). Lo shortcode **`[bec_search]`** imposta **`action`** da **`redirect_url`** o dal fallback archivio — il filtro vale soprattutto per form resi da PHP. |

Altri filtri UI (`bec_search_form_fields`, `bec_search_form_preset`, `bec_search_guest_field_mode`, ecc.) restano in `SearchForm`; vedi **[Shortcode bec_search](../06-shortcodes/02-bec-search.md)**.

---

## Filtri — intervallo date e formattazione importi

| Filtro | Scopo |
|--------|--------|
| `bec_search_form_daterange_format` | Formato PHP `date_i18n()` per la lettura footer calendario Enhanced (`$format`, `$context`) |
| `bec_daterange_moment_format_presets` | Mappa preset (`iso`, `short`, `medium`, …) a stringhe formato Moment.js |
| `bec_php_date_format_to_moment` | Converte un formato data PHP personalizzato in Moment.js (`$moment`, `$phpFormat`) |
| `bec_search_form_popover_placement` | Override posizione popover (`auto`, `top`, `bottom`) per ricerca Enhanced |
| `bec_date_format_defaults` | Opzioni formato predefinite per shortcode **`[bec_dates]`** |
| `bec_shortcode_dates_format` / `bec_shortcode_dates_text` / `bec_shortcode_dates_html` | Regola output **`[bec_dates]`** |
| `bec_money_format_defaults` | Opzioni valuta/numero predefinite per **`[bec_quote]`** (`$defaults`, `'bec_quote'`) |
| `bec_currency_symbols` | Mappa codici ISO valuta a simboli display |
| `bec_format_money` | Stringa importo formattata finale prima dell’output |

---

## Filtri — elenco unità (`[bec_unit_filters]`)

| Filtro | Scopo |
|--------|--------|
| `bec_unit_filter_definitions` | Aggiunge/sostituisce definizioni campi filtro (`$defs`) |
| `bec_unit_filters_preserve_query_keys` | Chiavi GET extra da conservare al submit del form (`$keys`) |
| `bec_unit_filter_query_applied` | Action dopo applicazione filtri a `WP_Query` (`$query`, `$request`) |
| `bec_available_units_count` | Override conteggio **`[bec_available_units_count]`** (`$count`, `$loopQuery`) |
| `bec_shortcode_available_units_count_html` | Regola HTML shortcode conteggio (`$html`, `$count`, `$atts`, `$ctx`) |
| `bec_elementor_unit_filter_query_ids` | Query id Loop Grid Elementor con logica filtri + disponibilità (`$ids`) |

Le query principali archivio **`bec_unit`** sono filtrate via **`UnitFilterQueryHooks`** quando sono presenti parametri **`bec_filter_*`**.

---

## Filtri — permalink e routing unità

| Filtro | Scopo |
|--------|--------|
| `bec_unit_url_structure` | Struttura URL effettiva singola unità (`base`, `base_category`, `category_only`) |
| `bec_unit_category_url_structure` | Struttura URL archivio categoria (`category_base`, `unit_base`, `bare`) |
| `bec_unit_permalink_primary_term` | Sceglie termine categoria primario con più assegnazioni (`$term`, `$candidates`, `$postId`) |
| `bec_unit_permalink_slug_conflicts_with_core` | Tratta uno slug come in conflitto con contenuti WP core (`$conflicts`, `$slug`) |

Guida utente: **[Permalink e archivio](../04-units/05-permalinks-and-archive.md)**.

---

## REST personalizzata, blocchi, webhook

Il connector **non** registra una superficie **`register_rest_route`** propria per le API di prenotazione. Il CPT **`bec_unit`** usa la REST core dei post dove configurato; meta sensibili come **`bec_sync_payload`** restano fuori REST. Non ci sono **`register_block_type`** né **webhook in ingresso** — integrazione pull via sync e shortcode/hook front.

Endpoint solo admin: **`wp_ajax_*`** (poll avanzamento + step batch) e **`admin_post_*`** (salvataggio impostazioni, lock, sync unità, rinomina galleria, refresh motori Kross, ecc.).

---

## Documentazione correlata

- **[Architettura](./01-architecture.md)**
- **[Riferimento post meta](./03-post-meta-reference.md)**
