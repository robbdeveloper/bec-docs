---
title: Campi canonici unità
sidebar_label: Campi canonici unità
description: bec_core_meta CoreUnitSemantic import gallery servizi JSON filtri bec_sync_apply_core_unit_fields RemoteGalleryImporter riferimento sviluppatori.
---

# Campi canonici unità (`bec_core_*`)

> **Riferimento sviluppatori:** per sviluppatori di temi e plugin.

Semantica indipendente dal provider per le **Unità** (`bec_unit`), memorizzata come post meta `bec_core_*`. Le implementazioni vivono in `ProviderInterface::extractCoreUnitFields()`; Kross usa `KrossCoreUnitFields`.

## Semantica (`CoreUnitSemantic`)

| Costante | Meta key | Note |
|----------|----------|------|
| `NAME` | `bec_core_name` | Nome visualizzato |
| `ADDRESS_FULL` | `bec_core_address_full` | Indirizzo formattato su una riga (mappe, SEO) |
| `LAT` / `LNG` | `bec_core_lat`, `bec_core_lng` | Coordinate come stringhe |
| `OCC_MIN` / `OCC_MAX` | `bec_core_occ_min`, `bec_core_occ_max` | Limiti ospiti |
| `CHECK_IN_FROM` / `CHECK_IN_TO` | `bec_core_check_in_from`, `bec_core_check_in_to` | Finestra check-in |
| `CHECK_OUT_UNTIL` | `bec_core_check_out_until` | Scadenza check-out |
| `ROOMS` | `bec_core_rooms` | Camere da letto / conteggio stanze |
| `BATHROOMS` | `bec_core_bathrooms` | Può essere frazionario (es. `1.5`) |
| `DESCRIPTION` | `bec_core_description` | Descrizione principale (locale da `bec_core_unit_locale`). Alla sync questo valore è anche scritto nel **contenuto** del post (`post_content`) dopo `bec_sync_unit_content` e `wp_kses_post`. |
| `SQM` | `bec_core_sqm` | Superficie in m² |
| `AMENITIES` | `bec_core_amenities` | Array JSON di elementi normalizzati (vedi sotto) |
| `GALLERY` | `bec_core_gallery` | Array JSON di **ID allegati** (interi). Alla sync i provider (es. Kross) restituiscono payload gallery; il connector **importa per unità**: ogni file è **posseduto** dall’unità (vedi meta allegati), nominato con impostazioni **Sync** e slug nome unità, salvato qui nell’ordine del provider. Imposta l’**immagine in evidenza** all’immagine `main` Kross se presente, altrimenti al primo elemento dell’elenco ordinato. |

**Rilevamento modifiche (gallery):** l’unità memorizza:

- **`bec_sync_gallery_image_set_hash`** — SHA-256 di un **array JSON di chiavi immagine, ordinato** (impronta set insensibile all’ordine).
- **`bec_sync_gallery_image_order_hash`** — SHA-256 di un **array JSON di chiavi immagine in ordine di visualizzazione** (riordino senza re-download quando il set coincide con l’esecuzione precedente).
- **`bec_sync_gallery_source_hash`** (legacy) — SHA-256 dell’elenco ordinato di **URL**. Ancora **scritto** e usato per migrare installazioni esistenti: quando i nuovi hash chiave sono vuoti ma questo coincide, l’ultima gallery viene **adottata** e meta chiave/unità sono valorizzati sugli allegati.

**Meta allegato (per immagine gallery):** `_bec_source_url`, `_bec_gallery_unit_id` (proprietario `bec_unit`), `bec_gallery_image_key` (id stabile per quell’immagine nell’unità, es. Kross `kross:…` o hash URL), `bec_gallery_file_hash` (SHA-256 file locale per deduplica stessi byte se cambia chiave/URL). La deduplica è **per unità + chiave**, non globale per URL — la stessa URL remota su due unità può produrre due file con nomi specifici unità.

**Immagini rimosse:** quando una chiave remota scompare da un’unità, l’allegato corrispondente è **eliminato** solo se non è referenziato in nessun `bec_core_gallery` né come featured image `bec_unit`. Il conteggio riferimenti per la sync corrente usa la nuova gallery in memoria e la featured image, perché `bec_core_gallery` non è aggiornato fino al ritorno dell’import.

**Download paralleli:** le immagini mancanti sono scaricate in batch con **curl_multi** (default **8** richieste concorrenti per batch). Senza estensione cURL i download tornano a `download_url()` sequenziale.

## Servizi (modulare)

Ogni elemento:

```json
{
  "key": "wifi",
  "labels": { "it": "Wi‑Fi", "en": "Wi‑Fi" },
  "icon": "wifi",
  "category": "amenity"
}
```

- **`key`**: id stabile (sanificato).
- **`labels`**: codice locale → stringa (traducibile nei template).
- **`icon`**: token opzionale per il tema (nome dashicon, id SVG, ecc.).
- **`category`**: opzionale; Kross imposta `amenity` per elementi da `amenities[]` dell’API (puoi aggiungere altri valori via filtri).

**Kross** mappa solo l’array stanza **`amenities[]`** da `get-room-types` (con `with_amenities`) in questo campo. `mandatory_services` non è memorizzato qui. Per elementi extra (es. servizi derivati), estendi con:

- `bec_kross_amenities_from_raw` — `( $items, $rawRow, $normalisedRow )`
- `bec_provider_amenities_from_row` — `( $items, $normalisedRow, $providerSlug )` (dopo il builder Kross; per qualsiasi provider)

`AmenityItem::normalizeList()` applica la forma prima del salvataggio.

## Gallery (remoto → Libreria media)

I provider possono restituire `GALLERY` come:

- `['items' => [ { 'url', 'key', 'order', 'main' }, … ], 'urls' => [ … ], 'featured_url' => … ]` — **preferito**; Kross fornisce `items` con `key` stabile per immagine (o hash URL) così riordino vs cambi contenuto sono gestiti.
- `['urls' => [ 'https://…', … ], 'featured_url' => 'https://…'|null ]` — `items` e chiavi derivate dall’elenco URL.
- Lista piatta di stringhe `https://…` — stesso comportamento import (chiavi = SHA-256 di ogni URL normalizzato, con suffissi indice se duplicati).

**Sync → Nomi file immagini gallery (wp-admin → Sync):** le opzioni `bec_sync_gallery_image_prefix` e `bec_sync_gallery_image_suffix` (vedi **[Riferimento post meta](./03-post-meta-reference.md)**) controllano: prefisso + slug nome unità (da `bec_core_name`) + suffisso + `-` + `NN` + estensione file.

**Rinominare file esistenti:** la schermata Sync offre anche **Rename all unit gallery files** e azione riga **Rename gallery files** per unità. Riapplicano prefisso/suffisso corrente agli allegati già elencati in `bec_core_gallery` (gli indici seguono l’ordine gallery memorizzato). Allegati referenziati da più `bec_unit` sono **copiati** per l’unità corrente e la gallery dell’unità (e featured image, quando puntava al vecchio allegato) è aggiornata così le altre unità continuano a funzionare. Il **Titolo** Libreria media (`post_title`) coincide col nome base file (senza estensione), anche quando il nome file era già allineato alle impostazioni sync ma il titolo era ancora segnaposto (es. da import). Alt text e altri campi invariati. Rinomina singola unità rigenera miniature dopo lo spostamento del file principale.

Filtri:

| Filtro | Scopo |
|--------|--------|
| `bec_sync_import_gallery_images` | Imposta `false` per saltare download (`$postId`, `$urls`). |
| `bec_sync_gallery_ignore_hash` | Imposta `true` per forzare passaggio gallery completo (ignora nuovi hash chiave; `$postId`, `$urls`, `$hash` = hash ordine-chiavi). |
| `bec_gallery_download_concurrency` | Trasferimenti cURL concorrenti per batch (default `8`, max `32`; `$postId`, `$urls`). |
| `bec_core_unit_gallery_before_save` | Regola valore gallery prima dell’import (`$value`, `$postId`). |
| `bec_core_unit_gallery_remote_urls` | Sostituisce o riordina elenco URL (`$urls`, `$postId`, `$payload`). |

## Filtri

| Filtro | Scopo |
|--------|--------|
| `bec_sync_apply_core_unit_fields` | Salta scritture core alla sync (default `true`). |
| `bec_core_unit_fields` | Regola array associativo prima del salvataggio (`$data`, `$providerSlug`, `$row`). |
| `bec_core_unit_locale` | Locale due lettere per nome/descrizione (`$two`, `$wp_locale`, `$row`). |

## Meta extra opzionale (per client)

Usa **`UnitSyncFieldDefinition`** + `bec_unit_sync_field_definitions` per chiavi non canoniche (vedi **[Riferimento post meta](./03-post-meta-reference.md)**).
