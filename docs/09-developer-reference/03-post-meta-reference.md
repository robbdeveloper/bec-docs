---
title: Post meta reference
sidebar_label: Post meta reference
description: bec_unit post meta keys attachment gallery meta options bec_sync_gallery prefix suffix REST registered keys developer reference.
---

# Post meta reference (`bec_unit`)

> **Developer reference:** This section is for theme and plugin developers.

Post meta is registered with `register_post_meta` (REST-visible where noted, sanitized). Use the **`bec_`** prefix for any custom or ACF fields so they stay namespaced and consistent with this plugin.

## Post meta (`bec_unit`)

| Meta key | Type | Notes |
|----------|------|-------|
| `bec_external_id` | string | External system identifier. |
| `bec_provider_slug` | string | Provider key (e.g. integration slug). |
| `bec_last_sync_at` | string | ISO 8601 datetime or empty. |
| `bec_sync_enabled` | boolean | Default `true`; controls whether sync runs for this unit. |
| `bec_sync_payload` | string | JSON string: last synced remote unit row (after `bec_sync_remote_unit`). Shown in the admin “Booking engine — synced data” meta box; not exposed via REST by default. |
| `bec_sync_gallery_source_hash` | string | SHA-256 fingerprint of the ordered remote **URL** list (legacy + migration; still updated on sync; see **[Canonical unit fields](./04-canonical-unit-fields.md)**). |
| `bec_sync_gallery_image_set_hash` | string | SHA-256 of sorted **image key** list (set unchanged when only order changes). |
| `bec_sync_gallery_image_order_hash` | string | SHA-256 of **ordered** image key list. |

### Attachment meta (gallery import)

| Meta key | Notes |
|----------|-------|
| `_bec_source_url` | Remote URL used when this file was last synced. |
| `_bec_gallery_unit_id` | Owning `bec_unit` post ID. |
| `bec_gallery_image_key` | Stable id for this image within the unit. |
| `bec_gallery_file_hash` | SHA-256 of the local file for deduplication. |

### Options (`get_option`)

| Option | Purpose |
|--------|---------|
| `bec_sync_gallery_image_prefix` | Prepended to auto-generated gallery filenames (default empty). |
| `bec_sync_gallery_image_suffix` | Between the unit name slug and the `-NN` index (default empty). |

### Core unit fields (`bec_core_*`)

Canonical semantics shared across providers (name, address, geo, occupancy, times, rooms, bathrooms, description, m², amenities, gallery as attachment IDs). Filled by `ProviderInterface::extractCoreUnitFields()` on sync; editable in **Unit — core fields (canonical)**. See **[Canonical unit fields](./04-canonical-unit-fields.md)**.

### Optional mapped fields (per provider / client)

Each provider may declare extra **`UnitSyncFieldDefinition`** entries for site-specific meta keys. On sync, those values are written and edited under **Booking engine — unit fields** (Kross ships with **none** by default).

- **Extend** — filter `bec_unit_sync_field_definitions` (definitions, provider slug) or implement `ProviderInterface::getUnitSyncFieldDefinitions()`.
- **Slugs scanned** — filter `bec_unit_sync_provider_slugs` (default: `kross`).
- **Skip sync overwrite** — filter `bec_sync_apply_mapped_unit_fields` (default `true`).

### ACF

If you add [Advanced Custom Fields](https://www.advancedcustomfields.com/) (or similar), prefer field names / keys under the **`bec_`** prefix to avoid collisions with WordPress core, other plugins, and these registered keys.
