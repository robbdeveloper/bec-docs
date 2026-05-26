---
title: '[bec_unit_filters] shortcode'
sidebar_label: bec_unit_filters
description: Unit listing filters shortcode — order, rooms, bathrooms, amenities via GET params; Elementor Query IDs bec_available_only and bec_filtered_units.
---

# `[bec_unit_filters]`

Renders a **GET filter form** for unit listings: sort order, minimum rooms, minimum bathrooms, and amenity checkboxes. Submits filter parameters while **preserving search context** (`bec_checkin`, `bec_checkout`, guest counts, etc.).

Pair with an Elementor Loop Grid (Query ID **`bec_available_only`** or **`bec_filtered_units`**) or the native **`bec_unit`** archive query.

{/* SCREENSHOT: bec_unit_filters inline layout on unit archive */}
![bec_unit_filters front-end](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-unit-filters.png`): bec-unit-filters.png */}

---

## Where to put it

- Above a unit loop on search results pages.
- On the **unit archive** when visitors arrive from **`[bec_search]`**.
- Beside **`[bec_available_units_count]`** for a “N units found” heading.

Curate which amenities appear under **Booking Engine → Listing Filters**. Style the form under **Booking Engine → Design → Unit filters — extra CSS**.

---

## Attributes

| Attribute | Default | Meaning |
|-----------|---------|---------|
| **`filters`** | `order,rooms,bathrooms,amenities` | Comma-separated filter ids to render. Built-in ids: `order`, `rooms`, `bathrooms`, `amenities`. |
| **`layout`** | `inline` | `inline` or `stacked` field layout. |
| **`show_reset`** | `1` | Show **Reset filters** link when truthy (`1`, `yes`, `true`, `on`). |
| **`hide_labels`** | `1` | When truthy, visible labels move to screen-reader text; pickers show placeholder text instead. |
| **`amenities`** | `selected` | `selected` uses admin-curated enabled amenities; or comma-separated amenity keys. |
| **`amenities_limit`** | `0` | Max amenity choices (`0` = no limit). |
| **`action`** | *(empty)* | Form GET target URL. Empty uses current archive URL, current page, or home. |

Developers can extend filter definitions with **`bec_unit_filter_definitions`**.

---

## GET query parameters

The form reads and writes these URL parameters:

| Parameter | Values | Filter |
|-----------|--------|--------|
| **`bec_filter_order`** | `ASC`, `DESC`, or empty (any) | Post sort direction |
| **`bec_filter_rooms_min`** | `1`–`10` or empty | Minimum bedroom count |
| **`bec_filter_bathrooms_min`** | `1`, `1.5`, `2`, … or empty | Minimum bathroom count |
| **`bec_filter_amenities[]`** | Amenity keys (repeatable) | Units must have all selected amenities |

Search parameters (`bec_checkin`, `bec_checkout`, `bec_adults`, etc.) are preserved as hidden fields when filters submit.

Extra keys to preserve can be added via **`bec_unit_filters_preserve_query_keys`**.

---

## Progressive enhancement UI

Without JavaScript, native `<select>` and checkbox inputs still work.

With JS (`assets/public-unit-filters.js`):

- **Desktop** — Select filters use a popover picker; amenities use a multi-select popover.
- **Mobile** — Triggers open bottom sheets with Done/Clear actions.

CSS hooks: `bec-unit-filters`, `bec-unit-filters--inline`, `bec-unit-filters--stacked`, `bec-unit-filters--hide-labels`, `bec-unit-filters__field--*`, `bec-unit-filters__picker*`, `bec-unit-filters__amenities*`.

---

## Elementor and archive integration

| Query ID | Behaviour |
|----------|-----------|
| **`bec_available_only`** | Applies unit filters; when search context is complete, hides unavailable units |
| **`bec_filtered_units`** | Alias — same behaviour as `bec_available_only` |

On the native **`bec_unit`** archive, **`UnitFilterQueryHooks`** applies the same filter logic to the main query.

See **[Elementor Loop Grid filter](./11-elementor-loop-grid-availability-filter.md)**.

---

## Examples

Default filters (all four built-ins):

```
[bec_unit_filters]
```

Stacked layout, amenities limited to five admin-selected items:

```
[bec_unit_filters layout="stacked" amenities="selected" amenities_limit="5"]
```

Only rooms and bathrooms on a custom results page:

```
[bec_unit_filters filters="rooms,bathrooms" action="/availability-results/"]
```

Specific amenity keys (ignores Listing Filters curation):

```
[bec_unit_filters filters="amenities" amenities="wifi,parking,pool"]
```

---

## See also

- **[Listing Filters admin](../04-units/07-listing-filters-admin.md)**
- **[bec_available_units_count](./16-bec-available-units-count.md)**
- **[Search context](../05-bookings-and-checkout/01-search-context-and-urls.md)**
