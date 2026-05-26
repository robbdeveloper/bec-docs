---
title: Riferimento post meta
sidebar_label: Riferimento post meta
description: Chiavi meta post bec_unit, allegati gallery, opzioni e tassonomia categorie, motori Kross, bec_db_version, campi core bec_core_*, sviluppatori.
---

# Riferimento post meta (`bec_unit`)

> **Riferimento sviluppatori:** per sviluppatori di temi e plugin.

Il post meta è registrato con `register_post_meta` (visibile REST dove indicato, sanificato). Usa il prefisso **`bec_`** per campi custom o ACF così restano in namespace coerente con questo plugin.

## Post meta (`bec_unit`)

| Meta key | Tipo | Note |
|----------|------|------|
| `bec_external_id` | string | Identificatore sistema esterno. |
| `bec_provider_slug` | string | Chiave provider (es. slug integrazione). |
| `bec_last_sync_at` | string | Datetime ISO 8601 o vuoto. |
| `bec_sync_enabled` | boolean | Default `true`; controlla se la sync gira per questa unità. |
| `bec_sync_payload` | string | Stringa JSON: ultima riga unità remota sincronizzata (dopo `bec_sync_remote_unit`). Mostrata nel meta box admin “Booking engine — synced data”; non esposta via REST di default. |
| `bec_sync_gallery_source_hash` | string | Impronta SHA-256 dell’elenco ordinato di **URL** remoti (legacy + migrazione; ancora aggiornata alla sync; vedi **[Campi canonici unità](./04-canonical-unit-fields.md)**). |
| `bec_sync_gallery_image_set_hash` | string | SHA-256 dell’elenco ordinato di **chiavi immagine** (set invariato se cambia solo l’ordine). |
| `bec_sync_gallery_image_order_hash` | string | SHA-256 dell’elenco ordinato di chiavi immagine **in ordine di visualizzazione**. |

### Meta allegati (import gallery)

| Meta key | Note |
|----------|------|
| `_bec_source_url` | URL remota usata all’ultima sync del file. |
| `_bec_gallery_unit_id` | ID post `bec_unit` proprietario. |
| `bec_gallery_image_key` | Id stabile per questa immagine nell’unità. |
| `bec_gallery_file_hash` | SHA-256 del file locale per deduplica. |

### Opzioni (`get_option`)

| Opzione | Scopo |
|---------|--------|
| `bec_sync_gallery_image_prefix` | Prefisso ai nomi file gallery generati automaticamente (default vuoto). |
| `bec_sync_gallery_image_suffix` | Tra slug nome unità e indice `-NN` (default vuoto). |
| `bec_unit_permalink_slug` | Segmento percorso per singole unità (sanificato); vuoto ⇒ slug interno predefinito `bec_unit`. |
| `bec_unit_url_structure` | Schema URL singola unità: `base`, `base_category`, o `category_only`. |
| `bec_unit_has_archive` | Se il CPT unità espone archivio pubblico sulla stessa base. |
| `bec_unit_category_enabled` | Se la tassonomia **`bec_unit_category`** ha UI admin e rewrite pubblici attivi. |
| `bec_unit_category_permalink_slug` | Base URL termini categoria (vuoto ⇒ default `unit-category`). |
| `bec_unit_category_url_structure` | Schema URL archivio categoria: `category_base`, `unit_base`, o `bare`. |
| `bec_unit_filters_amenity_options` | Mappa JSON chiavi servizio → `{ enabled, order, label? }` curata in **Listing Filters**. |
| `bec_styling_filters_extra_css` | CSS extra per **`[bec_unit_filters]`** (admin Design). |
| `bec_kross_sync_booking_engines` | Slug `be_enabled` selezionati per filtrare la **sync completa** (lista vuota ⇒ includi tutto). |
| `bec_kross_available_booking_engines` | Unione cache degli slug visti dai tipi camera Kross (checklist admin). |
| `bec_sync_interval_hours` | Intervallo WP-Cron (ore). |
| `bec_sync_last_run_at` | Timestamp testuale ultima sync completa riuscita (display admin). |
| `bec_db_version` | Versione migrazioni DB per tabelle custom (es. `{prefix}bec_api_log`). |

Durante la sync manuale a batch il plugin può scrivere opzioni **`bec_sync_mbatch_{userId}_{runId}`** di breve durata — considerale interne; non eliminare mentre un run è attivo.

### Meta termine (`bec_unit_category`)

Registrati sui termini categoria quando la tassonomia è abilitata:

| Meta termine | Note |
|--------------|------|
| `bec_external_id` | Id categoria lato provider (chiave con `bec_provider_slug`). |
| `bec_provider_slug` | es. `kross`. |
| `bec_category_names` | JSON oggetto: locale a due lettere ⇒ etichetta (titoli archivio usano `Multilingual::filteredSiteLocale('unit_category')`). |
| `bec_category_normalized` | Snapshot JSON del descrittore all’ultima sync. |
| `bec_last_sync_at` | `current_time('mysql')` quando il termine è stato aggiornato dalla sync. |

Guida utente: **[Categorie unità](../04-units/06-unit-categories.md)**.

Le richieste HTTP in uscita sono loggate in **`{prefix}bec_api_log`** (vedi **[Usare l’API log](../08-troubleshooting/02-using-the-api-log.md)**). Schema creato dalla migrazione **`CreateApiLogTable`**; versione tracciata in **`bec_db_version`**.

### Campi core unità (`bec_core_*`)

Semantica canonica condivisi tra provider (nome, indirizzo, geo, occupazione, orari, locali, bagni, descrizione, m², servizi, gallery come ID allegati, **CIN** come `bec_core_cin`). Compilati da `ProviderInterface::extractCoreUnitFields()` alla sync; modificabili in **Unit — core fields (canonical)**. Vedi **[Campi canonici unità](./04-canonical-unit-fields.md)**.

### Campi mappati opzionali (per provider / client)

Ogni provider può dichiarare **`UnitSyncFieldDefinition`** extra per meta specifici del sito. Alla sync i valori sono scritti e modificabili in **Booking engine — unit fields** (Kross di default **nessuno**).

- **Estendi** — filtro `bec_unit_sync_field_definitions` (definizioni, slug provider) oppure implementa `ProviderInterface::getUnitSyncFieldDefinitions()`.
- **Slug analizzati** — filtro `bec_unit_sync_provider_slugs` (default: `kross`).
- **Salta sovrascrittura sync** — filtro `bec_sync_apply_mapped_unit_fields` (default `true`).

### ACF

Se aggiungi [Advanced Custom Fields](https://www.advancedcustomfields.com/) (o simile), preferisci nomi/chiavi sotto il prefisso **`bec_`** per evitare collisioni con core WordPress, altri plugin e queste chiavi registrate.
