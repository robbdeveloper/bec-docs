---
title: '[bec_unit_gallery] shortcode'
sidebar_label: bec_unit_gallery
description: JSON gallery from bec_core_gallery attachment IDs — limit, offset, size, unit_id, default — for custom JS or headless-style templates.
---

# `[bec_unit_gallery]`

Returns the unit’s **canonical gallery** as a **JSON string** built from **`bec_core_gallery`** (WordPress attachment IDs imported during sync). Each item includes resolved image metadata for a chosen size.

This shortcode is aimed at **custom front-end code** (JavaScript sliders, React/Vue blocks, etc.). It does **not** render HTML markup itself and does **not** enqueue Booking Engine public CSS/JS.

---

## Where to put it

Hidden in a template, inside a wrapper your theme reads with JavaScript, or anywhere you parse JSON on the client.

---

## Attributes

| Attribute | Default | Meaning |
|-----------|---------|---------|
| **`unit_id`** | `0` | Units post ID; `0` uses the current `bec_unit` in the loop. |
| **`limit`** | `6` | Maximum images after **`offset`**. Use **`0`** for the **full** gallery. |
| **`offset`** | `0` | Skip the first N attachment IDs (gallery order from meta). |
| **`size`** | `large` | WordPress image size slug passed to `wp_get_attachment_image_src()` (e.g. `medium`, `full`). |
| **`default`** | `[]` | JSON fallback when the unit has no gallery — must be valid JSON (default empty array). |

---

## JSON shape

Each element is an object:

| Key | Type | Meaning |
|-----|------|---------|
| `id` | int | Attachment post ID |
| `url` | string | Image URL for **`size`** |
| `alt` | string | Alt text from the attachment |
| `width` | int | Width in pixels (0 if unknown) |
| `height` | int | Height in pixels (0 if unknown) |

The shortcode outputs **HTML-escaped** JSON (safe to place in a `<script type="application/json">` block or a `data-*` attribute if you decode on the client).

Example output (illustrative):

```json
[{"id":101,"url":"https://example.com/wp-content/uploads/photo.jpg","alt":"Living room","width":1024,"height":768}]
```

---

## Examples

First six images (default):

```
[bec_unit_gallery]
```

Full gallery, medium size:

```
[bec_unit_gallery limit="0" size="medium"]
```

Second page of thumbnails (skip 6, take 6):

```
[bec_unit_gallery offset="6" limit="6"]
```

Specific unit with custom empty fallback:

```
[bec_unit_gallery unit_id="123" default="[]"]
```

---

## Developer hooks

| Filter | Purpose |
|--------|---------|
| `bec_unit_gallery_attachment_ids` | Adjust attachment ID list before URL resolution (`$ids`, `$unitId`, `$context`). |
| `bec_unit_gallery_items` | Adjust resolved item objects (`$items`, `$unitId`, `$context`). |
| `bec_unit_gallery_json` | Adjust final JSON string (`$json`, `$postId`, `$atts`). |

---

## Elementor alternative

For **Elementor** Gallery or Media Carousel widgets, use the **Unit gallery** dynamic tag instead — see **[Elementor — Unit gallery](./14-elementor-unit-gallery.md)**.

---

## Related

- **[Gallery images](../04-units/04-gallery-images.md)** — import, filenames, admin editing
- **[Canonical unit fields — gallery](../09-developer-reference/04-canonical-unit-fields.md)**
