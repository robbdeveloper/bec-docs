---
title: Unit categories
sidebar_label: Unit categories
description: Optional bec_unit_category taxonomy — enable on Units screen, URL slug, URL structure, sync from Kross, public archives and multilingual labels.
---

# Unit categories

**Unit categories** are an optional WordPress taxonomy on **`bec_unit`** posts. When enabled, the plugin can assign each synced unit to a **category term** when the active provider supplies category data (Kross maps room-type categories into a normalised `unit_category` fragment on each remote row).

Categories are configured on the same screen as unit permalinks: **Booking Engine → Units**.

---

## Enable and URL base

| Setting | Meaning |
|---------|---------|
| **Enable the Unit Category taxonomy** | Turns on the taxonomy: admin UI (unit editor sidebar, list columns), optional public URLs, REST for terms when enabled, and **sync assignment** after each unit upsert. |
| **Category URL slug** | The path segment before the term slug in the default structure (default base **`unit-category`** if you leave the field empty). Example: `https://example.com/unit-category/my-category/`. |

The **internal taxonomy key** in the database is always **`bec_unit_category`**—only the public rewrite slug is configurable.

**Option keys:** taxonomy enable flag, `bec_unit_category_permalink_slug`

Saving the form **flushes rewrite rules** so WordPress picks up slug changes.

---

## Category URL structure

**Option key:** `bec_unit_category_url_structure`

| Value | Pattern | Example |
|-------|---------|---------|
| **`category_base`** (default) | `/{category slug}/{term name}` | `/unit-category/villas/` |
| **`unit_base`** | `/{unit slug}/{term name}` | `/properties/villas/` |
| **`bare`** | `/{term name}` | `/villas/` |

**Compatibility:** `unit_base` cannot be combined with unit URL structure **`base`** (`/{unit slug}/{unit name}`) — both produce ambiguous two-segment URLs.

**`bare`** requires categories enabled and passes conflict checks against existing pages, posts, unit slugs, and rewrite endpoints.

Developers can override with filter **`bec_unit_category_url_structure`**.

---

## Disabling after use

If you turn **Enable** off:

- Public category archives and the category admin UI disappear.
- **Terms and assignments are kept**—they are not deleted—so you can re-enable later without losing data.

Unit URL structures that require categories (`base_category`, `category_only`) cannot be saved while categories are disabled.

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

## Multilingual sites

With **WPML** or **Polylang**, category term URLs follow your language-prefix configuration like other WordPress taxonomies.

---

## Related pages

- **[Permalinks & archive](./05-permalinks-and-archive.md)** — unit slug, archive, unit URL structure, and the same admin screen.
- **[Syncing units](./02-syncing-units.md)** — full sync and Kross booking-engine filters.
- **[Post meta reference (developers)](../09-developer-reference/03-post-meta-reference.md)** — taxonomy term meta table.
- **[Sync hooks & filters (developers)](../09-developer-reference/02-sync-hooks-and-filters.md)** — `bec_sync_unit_category` and category taxonomy filters.
