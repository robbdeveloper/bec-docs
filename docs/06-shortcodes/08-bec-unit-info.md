---
title: '[bec_unit_info] shortcode'
sidebar_label: bec_unit_info
description: Provider-specific unit HTML from sync payload keys amenities_grid bedroom_arrangements unit_id default developer extend bec_unit_info_renderers.
---

# `[bec_unit_info]`

Displays **provider-specific HTML snippets** backed by stored sync data (`bec_sync_payload`). Keys differ per provider—for **Kross** the plugin ships **`amenities_grid`** and **`bedroom_arrangements`**.

Developers can register additional keys—see **[Unit info renderers (developers)](../09-developer-reference/07-unit-info-renderers.md)**.

---

## Where to put it

Unit body templates beneath descriptions, tabs, or accordions managed by your theme.

---

## Attributes

| Attribute | Default | Meaning |
|-----------|---------|---------|
| **`key`** | *(empty)* | Renderer id—required for meaningful output. |
| **`unit_id`** | `0` | Units post id; `0` uses current post. |
| **`default`** | *(empty)* | Shown when renderer missing / payload invalid—plain text (escaped). |
| **Anything else** | — | Passed through to renderer implementations (`columns`, `font_pack`, …). |

---

## Kross: `amenities_grid`

```
[bec_unit_info key="amenities_grid"]
```

| Pass-through | Default | Meaning |
|--------------|---------|---------|
| **`font_pack`** | `font-1` | Icon font bundle slug registered via amenities asset filters. |
| **`columns`** | `2` | Grid columns **1–6** (desktop, ≥640px). |
| **`columns_mobile`** | `1` | Grid columns **1–6** below 640px. Sets CSS variable **`--bec-amenities-cols-mobile`**. |
| **`limit`** | `0` (all) | Maximum icons after sorting labels—`0` keeps entire list. |
| **`category`** | *(unset)* | Filter amenities by stored category slug (e.g. `amenity`). |

Example:

```
[bec_unit_info key="amenities_grid" columns="3" columns_mobile="2" limit="12" category="amenity"]
```

{/* SCREENSHOT: amenities_grid front-end */}
![bec_unit_info amenities_grid](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-unit-info-amenities.png`): bec-unit-info-amenities.png */}

---

## Kross: `bedroom_arrangements`

```
[bec_unit_info key="bedroom_arrangements"]
```

| Pass-through | Default | Meaning |
|--------------|---------|---------|
| **`font_pack`** | `font-1` | Same icon packs as amenities. |
| **`columns`** | `3` | Bedroom grid columns **1–6**. |
| **`title`** | *(empty)* | Override section heading—leave blank to rely on translations. |
| **`show_title`** | hidden | Section title is **hidden** by default. Set **`show_title="1"`** to display it. |

Example:

```
[bec_unit_info key="bedroom_arrangements" show_title="1" title="Sleeping arrangements"]
```

{/* SCREENSHOT: bedroom_arrangements front-end */}
![bec_unit_info bedroom_arrangements](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/bec-unit-info-bedrooms.png`): bec-unit-info-bedrooms.png */}

---

## CSS hooks (representative)

- Amenities stack: `bec-amenities`, `bec-amenities__item`, …
- Bedroom stack: `bec-bedrooms`, `bec-bedrooms__grid`, …

Exact markup belongs to renderer output—inspect front-end HTML while styling.

---

## Tips

If output is always empty verify:

1. **`key`** spelling matches registered renderer.
2. Unit finished syncing (**payload not empty**).
3. **`unit_id`** references correct post.
