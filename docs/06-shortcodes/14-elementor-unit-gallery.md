---
title: Elementor — Unit gallery dynamic tag
sidebar_label: Elementor Unit gallery
description: Elementor dynamic tag for unit bec_core_gallery — Gallery and Media Carousel widgets, limit, offset, unit ID.
---

# Elementor — Unit gallery dynamic tag

Booking Engine Connector registers an Elementor **dynamic tag** that feeds **Gallery** and **Media Carousel** (and other gallery-category controls) from the same **`bec_core_gallery`** meta as sync and the **`[bec_unit_gallery]`** shortcode.

---

## Requirements

- **Elementor** (free or Pro) with dynamic tags enabled.
- Unit posts synced with gallery attachment IDs in **`bec_core_gallery`**.
- For loop templates, each item should be a **`bec_unit`** post (or set **Unit ID** explicitly).

---

## Setup

1. Edit a page or **Elementor** template (single unit, archive loop item, etc.).
2. Add a **Gallery** or **Media Carousel** widget (or any widget whose gallery control supports dynamic data).
3. Open the **gallery** control → **dynamic** icon.
4. Choose **Booking Engine → Unit gallery**.

{/* SCREENSHOT: Elementor dynamic tag picker showing Unit gallery */}
![Elementor Unit gallery dynamic tag](/img/bec-screenshot-placeholder.svg)
{/* Intended screenshot (add file at `docs/img/06-shortcodes/elementor-unit-gallery-tag.png`): elementor-unit-gallery-tag.png */}

---

## Tag controls

| Control | Default | Meaning |
|---------|---------|---------|
| **Image limit** | `6` | Maximum images after offset. **`0`** = entire gallery. |
| **Offset** | `0` | Skip the first N images in stored gallery order. |
| **Unit ID** | *(empty)* | Target Units post ID. Leave **empty** to use the **current post** (single unit page or Loop Grid item). |

Elementor resolves **attachment IDs** from the Media Library (URLs come from WordPress, not a JSON shortcode).

---

## Behaviour notes

| Situation | What happens |
|-----------|----------------|
| Current post is a **`bec_unit`** | Gallery uses that unit’s **`bec_core_gallery`** order. |
| **Unit ID** set | Always uses that unit, even outside the unit loop. |
| No images / invalid unit | Widget shows empty gallery (Elementor’s own empty state). |
| Same data as **`[bec_unit_gallery]`** | Yes — shared **`UnitGalleryPresenter`**; shortcode outputs JSON URLs, tag outputs native attachment rows. |

---

## Developer hooks

| Filter | Purpose |
|--------|---------|
| `bec_unit_gallery_elementor_rows` | Adjust `{ id: attachmentId }` rows before Elementor consumes them. |
| `bec_unit_gallery_elementor_value` | Final tag value (`$rows`, `$postId`, `$settings`). |

Attachment ID list is also filterable via **`bec_unit_gallery_attachment_ids`** (see **[bec_unit_gallery](./13-bec-unit-gallery.md)**).

---

## Related

- **[Elementor — hide units with no availability](./11-elementor-loop-grid-availability-filter.md)** — Loop Grid **Query ID** `bec_available_only`
- **[bec_unit_gallery](./13-bec-unit-gallery.md)** — JSON output for custom JS
- **[Gallery images](../04-units/04-gallery-images.md)**
