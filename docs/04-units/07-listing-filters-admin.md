---
title: Listing Filters admin
sidebar_label: Listing Filters admin
description: Booking Engine Listing Filters screen — amenity index, enable/order/custom labels for bec_unit_filters shortcode.
---

# Listing Filters admin

Open **Booking Engine → Listing Filters** (`bec-unit-filters`).

This screen curates which **indexed amenities** appear in the **`[bec_unit_filters]`** shortcode. Filter styling lives under **Booking Engine → Design → Unit filters — extra CSS**.

{/* SCREENSHOT: Listing Filters admin table */}
![Listing Filters admin](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/04-units/listing-filters-admin.png`): listing-filters-admin.png */}

---

## Amenity index dependency

Amenities are indexed from synced unit data into a dedicated taxonomy. Before the table fills in:

1. **Connect** your provider and **run a sync** — see **[Run your first sync](../02-getting-started/03-run-your-first-sync.md)**.
2. Wait for background indexing to finish. While the index is building, an admin notice warns that options may be incomplete.

If the table stays empty after sync, check that units have amenities in their synced payload.

---

## Amenity table

Each row represents one indexed amenity:

| Column | Purpose |
|--------|---------|
| **Checkbox** | Enable or disable the amenity in `[bec_unit_filters]` |
| **Amenity** | Stable key (`code`) and default label from sync |
| **Category** | Provider amenity category when available |
| **Units** | Count of units tagged with this amenity |
| **Display label (optional)** | Override the front-end label without changing the key |

Use **Search amenities** to filter the table by key or label.

Saving stores:

| Storage | Purpose |
|---------|---------|
| Enabled keys | Which amenities appear when `amenities="selected"` |
| Order | Display order (table row order on save) |
| Custom labels | Per-key label overrides |

---

## Pair with front-end filters

Place **`[bec_unit_filters]`** above your unit loop or on the unit archive. The form submits GET parameters (`bec_filter_order`, `bec_filter_rooms_min`, `bec_filter_bathrooms_min`, `bec_filter_amenities[]`) while preserving search context (`bec_checkin`, etc.).

For Elementor Loop Grid listings, set Query ID to **`bec_available_only`** or **`bec_filtered_units`**.

See **[bec_unit_filters](../06-shortcodes/15-bec-unit-filters.md)** and **[Elementor Loop Grid filter](../06-shortcodes/11-elementor-loop-grid-availability-filter.md)**.

---

## Related pages

- **[Admin screens overview](../02-getting-started/05-admin-screens.md)**
- **[Design overview](../07-styling/01-styling-overview.md)** — Unit filters extra CSS
- **[bec_available_units_count](../06-shortcodes/16-bec-available-units-count.md)** — result count on listing pages
