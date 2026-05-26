---
title: Editing a unit
sidebar_label: Editing a unit
description: Canonical core fields metabox, read-only synced data, optional unit fields, and what sync overwrites.
---

# Editing a unit

Open **Units** and click any title. Besides the usual WordPress **title**, **content**, and **featured image**, the plugin adds specialised panels (**meta boxes**).

{/* SCREENSHOT: Unit edit screen showing three BEC meta boxes stacked */}
![Unit edit meta boxes](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/unit-edit-metaboxes.png`): unit-edit-metaboxes.png */}

---

## Unit — core fields (canonical)

This box lists **canonical** facts shared across providers—name, address, **city**, coordinates, occupancy limits, check-in/out windows, rooms, bathrooms, description excerpt, size, **CIN** (Italian national identification code when provided by the provider), amenities JSON, gallery attachment IDs, etc.

| Field | Meta key | Editable | Notes |
|-------|----------|----------|-------|
| **City** | `bec_core_city` | Yes | Synced from Kross `city`; also part of **`bec_core_address_full`**. |
| **Lat / Lng (combined)** | `bec_core_lat_lng` | Read-only | Derived `lat,lng` pair from **`bec_core_lat`** and **`bec_core_lng`**; updated on sync and when coordinates change. |

- **You can edit** these fields directly—useful for minor tweaks or translations **if** your workflow allows it.
- **The next sync may overwrite** them unless your developer disables core writes via filters documented for engineers.

Think of this box as “the structured facts we store for themes and SEO.”

### Gallery field (thumbnail grid)

The **gallery** control shows a **thumbnail grid** of images already linked to the unit (sync order is preserved in meta).

- **Click a thumbnail** to open the WordPress **Media Library** attachment modal—edit **alt text**, title, and other attachment fields.
- The grid is **read-only for reordering** in the admin UI; gallery **order** comes from sync (or developer filters). To change which images appear, run **sync** or adjust **`bec_core_gallery`** via supported tools—see **[Gallery images](./04-gallery-images.md)**.

Imports during sync still follow the rules in **[Gallery images](./04-gallery-images.md)**.

{/* SCREENSHOT: Canonical meta box expanded */}
![Canonical core fields metabox](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/metabox-canonical.png`): metabox-canonical.png */}

---

## Booking engine — synced data

This panel is **read-only** for editors:

- External ID, provider slug, last sync time
- Sync enabled flag (shown for visibility)
- **Remote row (JSON)** — Full normalised payload last saved from the API (`bec_sync_payload`)

Use it for **support and debugging** (“what did Kross send?”).

{/* SCREENSHOT: Synced data metabox with JSON payload collapsed and expand control */}
![Synced data inspector metabox](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/metabox-synced-data.png`): metabox-synced-data.png */}

---

## Booking engine — unit fields

Optional **provider-specific mapped fields** appear here when defined.

For stock **Kross**, this box is often **empty**—there are no extra mapped fields by default.

---

## Title and content

The **post title** and **editor content** normally mirror canonical **name** and **description** during sync (subject to filters). Editing them changes what many themes display even if canonical meta still holds the synced snapshot until the next refresh.

---

## Related pages

- **[Gallery images](./04-gallery-images.md)**
- **[Unit categories](./06-unit-categories.md)**
- **[Canonical fields (developers)](../09-developer-reference/04-canonical-unit-fields.md)**
