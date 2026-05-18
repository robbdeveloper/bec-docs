---
title: Unit categories
sidebar_label: Unit categories
description: Optional bec_unit_category taxonomy — enable on permalinks screen, URL slug, sync from Kross, public archives and multilingual labels.
---

# Unit categories

**Unit categories** are an optional WordPress taxonomy on **`bec_unit`** posts. When enabled, the plugin can assign each synced unit to a **category term** when the active provider supplies category data (Kross maps room-type categories into a normalised `unit_category` fragment on each remote row).

Categories are configured on the same screen as unit permalinks: **Booking Engine → Units — permalinks**.

---

## Enable and URL base

| Setting | Meaning |
|---------|---------|
| **Enable the Unit Category taxonomy** | Turns on the taxonomy: admin UI (unit editor sidebar, list columns), optional public URLs, REST for terms when enabled, and **sync assignment** after each unit upsert. |
| **Category URL slug** | The path segment before the term slug (default base **`unit-category`** if you leave the field empty). Example pattern: `https://example.com/unit-category/my-category/`. |

The **internal taxonomy key** in the database is always **`bec_unit_category`**—only the public rewrite slug is configurable.

Saving the form **flushes rewrite rules** so WordPress picks up slug changes.

---

## Disabling after use

If you turn **Enable** off:

- Public category archives and the category admin UI disappear.
- **Terms and assignments are kept**—they are not deleted—so you can re-enable later without losing data.

---

## How sync assigns categories

On each successful unit sync, after meta is written, the plugin:

1. Reads `unit_category` from the normalised remote row (after the `bec_sync_remote_unit` filter).
2. Lets developers adjust it with **`bec_sync_unit_category`**.
3. Upserts a term keyed by **`bec_provider_slug`** + **`bec_external_id`** on the term, then sets that term on the unit.

If the provider sends no category for a unit, nothing is assigned for that pass.

---

## Term meta (for support)

Category terms store provider linkage and labels (not exposed via REST by default):

| Term meta | Purpose |
|-----------|---------|
| `bec_external_id` | Provider category id. |
| `bec_provider_slug` | e.g. `kross`. |
| `bec_category_names` | JSON map of two-letter locale → human label. |
| `bec_category_normalized` | JSON copy of the descriptor used at last sync. |
| `bec_last_sync_at` | Last time this term was refreshed from a sync. |

Archive titles prefer a label from **`bec_category_names`** for the current site locale (`bec_provider_locale` with context `unit_category`).

---

## Related pages

- **[Permalinks & archive](./05-permalinks-and-archive.md)** — unit slug, archive, and the same admin screen.
- **[Syncing units](./02-syncing-units.md)** — full sync and Kross booking-engine filters.
- **[Post meta reference (developers)](../09-developer-reference/03-post-meta-reference.md)** — taxonomy term meta table.
- **[Sync hooks & filters (developers)](../09-developer-reference/02-sync-hooks-and-filters.md)** — `bec_sync_unit_category` and category taxonomy filters.
