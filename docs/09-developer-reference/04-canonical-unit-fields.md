---
title: Canonical unit fields
sidebar_label: Canonical unit fields
description: bec_core_meta CoreUnitSemantic gallery import amenities JSON filters bec_sync_apply_core_unit_fields RemoteGalleryImporter developer reference.
---

# Canonical unit fields (`bec_core_*`)

> **Developer reference:** This section is for theme and plugin developers.

Provider-independent semantics for **Units** (`bec_unit`), stored as `bec_core_*` post meta. Implementations live in `ProviderInterface::extractCoreUnitFields()`; Kross uses `KrossCoreUnitFields`.

## Semantics (`CoreUnitSemantic`)

| Constant | Meta key | Notes |
|----------|----------|-------|
| `NAME` | `bec_core_name` | Display name |
| `ADDRESS_FULL` | `bec_core_address_full` | Single formatted address (maps, SEO) |
| `LAT` / `LNG` | `bec_core_lat`, `bec_core_lng` | Coordinates as strings |
| `OCC_MIN` / `OCC_MAX` | `bec_core_occ_min`, `bec_core_occ_max` | Guest limits |
| `CHECK_IN_FROM` / `CHECK_IN_TO` | `bec_core_check_in_from`, `bec_core_check_in_to` | Check-in window |
| `CHECK_OUT_UNTIL` | `bec_core_check_out_until` | Check-out deadline |
| `ROOMS` | `bec_core_rooms` | Bedrooms / room count |
| `BATHROOMS` | `bec_core_bathrooms` | May be fractional (e.g. `1.5`) |
| `DESCRIPTION` | `bec_core_description` | Primary description (locale from `bec_core_unit_locale`). On sync, this value is also written to the post’s **content** (`post_content`) after `bec_sync_unit_content` and `wp_kses_post`. |
| `SQM` | `bec_core_sqm` | Size in m² |
| `AMENITIES` | `bec_core_amenities` | JSON array of normalised items (see below) |
| `GALLERY` | `bec_core_gallery` | JSON array of **attachment IDs** (integers). On sync, providers (e.g. Kross) return gallery payloads; the connector **imports per unit**: each file is **owned** by the unit (see attachment meta), named using **Sync** settings and the unit name slug, and saved here in provider order. Sets the **featured image** to the Kross `main` image when present, else the first item in the ordered list. |
| `CIN` | `bec_core_cin` | Italian **Codice Identificativo Nazionale** (accommodation unit ID). Synced from Kross `cin` when present; editable in **Unit — core fields**. Also readable via `[bec_unit_field field="cin"]` from `raw`. |

**Change detection (gallery):** the unit stores:

- **`bec_sync_gallery_image_set_hash`** — SHA-256 of a **JSON array of image keys, sorted** (order-insensitive set fingerprint).
- **`bec_sync_gallery_image_order_hash`** — SHA-256 of a **JSON array of image keys in display order** (reorder without re-download when the set matches the previous run).
- **`bec_sync_gallery_source_hash`** (legacy) — SHA-256 of the ordered **URL** list. Still **written** and used so existing installs can migrate: when the new key hashes are empty but this matches, the last gallery is **adopted** and key/unit meta is backfilled on attachments.

**Attachment meta (per gallery image):** `_bec_source_url`, `_bec_gallery_unit_id` (owning `bec_unit`), `bec_gallery_image_key` (stable id for that image within the unit, e.g. Kross `kross:…` or a hash of the URL), `bec_gallery_file_hash` (local file SHA-256 for same-bytes dedupe if the key/URL changes). Deduplication is **per unit + key**, not global by URL, so the same remote URL on two different units can produce two files with unit-specific names.

**Removed images:** when a remote key disappears from a unit, the corresponding attachment is **deleted** only if it is not referenced in any `bec_core_gallery` or as a `bec_unit` featured image. Reference counting for the current sync uses the **in-memory** new gallery and featured image, because `bec_core_gallery` is not updated until after import returns.

**Parallel downloads:** missing images are fetched in batches using **curl_multi** (default **8** concurrent requests per batch). Without the cURL extension, downloads fall back to sequential `download_url()`.

## Amenities (modular)

Each item:

```json
{
  "key": "wifi",
  "labels": { "it": "Wi‑Fi", "en": "Wi‑Fi" },
  "icon": "wifi",
  "category": "amenity"
}
```

- **`key`**: stable id (sanitised).
- **`labels`**: locale code → string (translatable in templates).
- **`icon`**: optional token for your theme (dashicon name, SVG id, etc.).
- **`category`**: optional; Kross sets `amenity` for items from the API’s `amenities[]` (you may add other values via filters).

**Kross** maps only the room **`amenities[]`** array from `get-room-types` (with `with_amenities`) into this field. `mandatory_services` is not stored here. To add extra items (e.g. derived services), extend with:

- `bec_kross_amenities_from_raw` — `( $items, $rawRow, $normalisedRow )`
- `bec_provider_amenities_from_row` — `( $items, $normalisedRow, $providerSlug )` (runs after the Kross builder; use for any provider)

`AmenityItem::normalizeList()` enforces shape before storage.

## Gallery (remote → Media Library)

Providers may return `GALLERY` as:

- `['items' => [ { 'url', 'key', 'order', 'main' }, … ], 'urls' => [ … ], 'featured_url' => … ]` — **preferred**; Kross provides `items` with a stable per-image `key` (or URL hash) so reorder vs content changes are handled.
- `['urls' => [ 'https://…', … ], 'featured_url' => 'https://…'|null ]` — `items` and keys are derived from the URL list.
- A flat list of `https://…` strings — same import behaviour (keys = SHA-256 of each normalised URL, with index suffixes if duplicates).

**Sync → Gallery image filenames (wp-admin → Sync):** options `bec_sync_gallery_image_prefix` and `bec_sync_gallery_image_suffix` (see **[Post meta reference](./03-post-meta-reference.md)**) control: prefix + unit name slug (from `bec_core_name`) + suffix + `-` + `NN` + file extension.

**Renaming existing files:** the Sync screen also offers **Rename all unit gallery files** and a per-unit **Rename gallery files** row action. They re-apply the current prefix/suffix to attachments already listed in `bec_core_gallery` (indices follow the stored gallery order). Attachments referenced by more than one `bec_unit` are **copied** for the current unit and the unit’s gallery (and featured image, when it pointed at the old attachment) is updated so other units keep working. The Media Library **Title** (`post_title`) is set to match the file’s base name (without extension), including when the file name already matched sync settings but the title was still a placeholder (e.g. from import). Alt text and other fields are unchanged. Single-unit renames regenerate thumbnails after moving the main file.

Filters:

| Filter | Purpose |
|--------|---------|
| `bec_sync_import_gallery_images` | Set `false` to skip downloading (`$postId`, `$urls`). |
| `bec_sync_gallery_ignore_hash` | Set `true` to force a full gallery pass (ignore new key hashes; `$postId`, `$urls`, `$hash` = order-key hash). |
| `bec_gallery_download_concurrency` | Concurrent cURL transfers per batch (default `8`, max `32`; `$postId`, `$urls`). |
| `bec_core_unit_gallery_before_save` | Adjust the gallery value before import (`$value`, `$postId`). |
| `bec_core_unit_gallery_remote_urls` | Replace or reorder URL list (`$urls`, `$postId`, `$payload`). |

**Front-end gallery consumers** (shortcode / Elementor, attachment IDs already in meta):

| Filter | Purpose |
|--------|---------|
| `bec_unit_gallery_attachment_ids` | Adjust ID list before URL resolution (`$ids`, `$unitId`, `$context`). |
| `bec_unit_gallery_items` | Adjust JSON item objects for `[bec_unit_gallery]` (`$items`, `$unitId`, `$context`). |
| `bec_unit_gallery_json` | Final JSON string from shortcode (`$json`, `$postId`, `$atts`). |
| `bec_unit_gallery_elementor_rows` | Elementor `{ id }` rows before tag output. |
| `bec_unit_gallery_elementor_value` | Final Elementor tag value. |

## Amenities label repair (0.1.30+)

`AmenityItem::repairLabelString()` fixes corrupted stored labels (e.g. `u0027` instead of an apostrophe) when amenities are read for display. Sync and admin saves use raw meta values so JSON is not double-unslashed. After upgrading, a **re-sync** refreshes amenities JSON if labels still look wrong in the database.

## Filters

| Filter | Purpose |
|--------|---------|
| `bec_sync_apply_core_unit_fields` | Skip core writes on sync (default `true`). |
| `bec_core_unit_fields` | Adjust the associative array before save (`$data`, `$providerSlug`, `$row`). |
| `bec_core_unit_locale` | Two-letter locale for name/description (`$two`, `$wp_locale`, `$row`). |

## Optional extra meta (per client)

Use **`UnitSyncFieldDefinition`** + `bec_unit_sync_field_definitions` for non-canonical keys (see **[Post meta reference](./03-post-meta-reference.md)**).
